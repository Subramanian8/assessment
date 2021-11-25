import React, { useState, useEffect } from 'react';

import { dataList } from './constant';
import List from './list';

const maxOrderPrice = 250;

const Dashboard = () => {
    const [itemList, setItemList] = useState([])
    const [cartList, setCartList] = useState([])
    const [cartVisible, toggleCartVisible] = useState(false)

    useEffect(() => {
        setItemList(dataList)
    }, [])

    function toggleItem(index) {
        // itemList[index].isChecked = !itemList[index].isChecked;
        // console.log('index :', itemList);
        // setItemList(itemList)

        setItemList(Object.values({ ...itemList, [index]: { ...itemList[index], isChecked: !itemList[index].isChecked } }))

    }

    // Here, calculating the each and every selected items and create a package.
    function placeOrder() {
        var cartItems = itemList.filter((e) => (e.isChecked == true))

        if (cartItems.length) {
            var numOfPackage = findNumOfPackage(cartItems);

            if (numOfPackage == 1) {
                createCartList(cartItems, numOfPackage);
            } else {
                cartItems.sort((a, b) => parseInt(b.Weight) - parseInt(a.Weight));

                var Package = [];
                cartItems.forEach((val, index) => {
                    if (index < numOfPackage) {
                        for (var i = 0; i < numOfPackage; i++) {
                            if (i == index) {
                                Package[i] = [];
                                Package[i].push(val);
                                return;
                            }
                        }
                    } else {
                        Package.sort(sortFunction);
                        for (var i = 0; i < numOfPackage; i++) {
                            var TPRIZE = 0;
                            for (var j = 0; j < Package[i].length; j++) {
                                TPRIZE += Package[i][j].Price;
                            }

                            if (TPRIZE + val['Price'] <= maxOrderPrice) {
                                Package[i].push(val);
                                return;
                            }
                        }
                    }
                })

                createCartList(Package, numOfPackage);
            }
        } else {
            alert("choose any item to place order");
        }
    }

    function createCartList(allItems, numOfPackage) {
        var data = [];
        if (numOfPackage == 1) {
            data.push(formPackage(allItems));
        } else {
            allItems.forEach((val, index) => {
                data.push(formPackage(val));
            })
        }
        setCartList(data)
        toggleCart();
    }

    // To form the package array which contains totalWeight, totalPrice and courierPrice
    function formPackage(allItems) {
        var items = '', totalWeight = 0, totalPrice = 0, courierPrice = 0;
        allItems.forEach((val, index) => {
            if (items == '') items = val.Name;
            else items += ', ' + val.Name;

            totalWeight += parseInt(val.Weight);
            totalPrice += parseInt(val.Price);
        })
        courierPrice = findCourierCharge(totalWeight);
        totalWeight = totalWeight + 'g';
        totalPrice = '$' + totalPrice;

        return { 'items': items, 'tw': totalWeight, 'tp': totalPrice, 'cp': courierPrice };
    }

    // To find courierPrice
    function findCourierCharge(g) {
        if (g <= 200) return '$5';
        else if (g > 200 && g <= 500) return '$10';
        else if (g > 500 && g <= 1000) return '$15';
        else if (g > 1000 && g <= 5000) return '$20';
        else return '$25';
    }

    // To find NumOfPackage while placing order
    function findNumOfPackage(cartItems) {
        var totalPrice = 0;
        cartItems.forEach((val) => {
            totalPrice += val['Price'];
        })
        return Math.ceil(totalPrice / maxOrderPrice);
    }

    // Sorting the array to get lower weight value as first
    function sortFunction(a, b) {
        if (a[0].Weight === b[0].Weight) {
            return 0;
        } else {
            return (a[0].Weight < b[0].Weight) ? -1 : 1;
        }
    }

    // Show/hide cart Modal window
    function toggleCart() {
        toggleCartVisible(!cartVisible)
    }

    // Clear/Reset selected items
    function clearCart() {
        // var data = itemList;
        // data.forEach((item) => {
        //     item.isChecked = false
        // })
        // setItemList(data)

        setItemList(itemList.map(val => {
            val.isChecked = false
            return val
        }))
        setCartList([])
        toggleCartVisible(false)
    }

    function renderActionSection() {
        return cartList.map((items, i) =>
            <div className="cartPackage" key={i}>
                <div>Package {i + 1}</div>
                <ul>
                    <li><span>Items</span> - <span>{items.items}</span></li>
                    <li><span>Total weight</span> - <span>{items.tw}</span></li>
                    <li><span>Total price</span> - <span>{items.tp}</span></li>
                    <li><span>Courier price </span> - <span>{items.cp}</span></li>
                </ul>
            </div>
        )
    }

    return (
        <div>
            <h1>Online Products</h1>
            <List items={itemList} toggleItem={toggleItem} />
            {itemList.length ?
                <div className="placeorderbtn"><button onClick={() => placeOrder()}>Place Order</button></div>
                : ''}


            {(cartVisible) ?
                <div id="cartModal">
                    <p className="cartModalheader">Order</p>
                    <div>
                        {renderActionSection()}
                    </div>
                    <div className="cancel-btn-div">
                        <button className="cancel-btn" onClick={() => clearCart()}>Reset</button>
                        <button className="cancel-btn" onClick={() => toggleCart()}>Cancel</button>
                    </div>
                </div>
                : ''}
        </div>
    );
}

export default Dashboard;
