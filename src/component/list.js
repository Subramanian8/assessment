import React from "react";
import ListItemHeader from "./list-header";
import ListItem from "./list-item";

const List = (props) => {

    return (
        !props.items.length ?
            <p className="tutorial">Product not available!</p>
            :
            <table>
                <ListItemHeader />
                <tbody>
                    {
                        props.items.map((item, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    id={index}
                                    toggleItem={props.toggleItem}
                                    {...item}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
    )

}

export default List;