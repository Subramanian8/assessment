(this.webpackJsonpassessment=this.webpackJsonpassessment||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var i=c(1),r=c.n(i),h=c(6),s=c.n(h),n=(c(11),c.p,c(12),c(13),c(3)),a=c(2),d=c(4),m=[{Name:"Item 1",Price:10,Weight:200,isChecked:!1},{Name:"Item 2",Price:100,Weight:20,isChecked:!1},{Name:"Item 3",Price:30,Weight:300,isChecked:!1},{Name:"Item 4",Price:20,Weight:500,isChecked:!1},{Name:"Item 5",Price:30,Weight:250,isChecked:!1},{Name:"Item 6",Price:40,Weight:10,isChecked:!1},{Name:"Item 7",Price:200,Weight:10,isChecked:!1},{Name:"Item 8",Price:120,Weight:500,isChecked:!1},{Name:"Item 9",Price:130,Weight:790,isChecked:!1},{Name:"Item 10",Price:20,Weight:100,isChecked:!1},{Name:"Item 11",Price:10,Weight:340,isChecked:!1},{Name:"Item 12",Price:4,Weight:800,isChecked:!1},{Name:"Item 13",Price:5,Weight:200,isChecked:!1},{Name:"Item 14",Price:240,Weight:20,isChecked:!1},{Name:"Item 15",Price:123,Weight:700,isChecked:!1},{Name:"Item 16",Price:245,Weight:10,isChecked:!1},{Name:"Item 17",Price:230,Weight:20,isChecked:!1},{Name:"Item 18",Price:110,Weight:200,isChecked:!1},{Name:"Item 19",Price:45,Weight:200,isChecked:!1},{Name:"Item 20",Price:67,Weight:20,isChecked:!1},{Name:"Item 21",Price:88,Weight:300,isChecked:!1},{Name:"Item 22",Price:10,Weight:500,isChecked:!1},{Name:"Item 23",Price:17,Weight:250,isChecked:!1},{Name:"Item 24",Price:19,Weight:10,isChecked:!1},{Name:"Item 25",Price:89,Weight:10,isChecked:!1},{Name:"Item 26",Price:45,Weight:500,isChecked:!1},{Name:"Item 27",Price:99,Weight:790,isChecked:!1},{Name:"Item 28",Price:125,Weight:100,isChecked:!1},{Name:"Item 29",Price:198,Weight:340,isChecked:!1},{Name:"Item 30",Price:220,Weight:800,isChecked:!1},{Name:"Item 31",Price:249,Weight:200,isChecked:!1},{Name:"Item 32",Price:230,Weight:20,isChecked:!1},{Name:"Item 33",Price:190,Weight:700,isChecked:!1},{Name:"Item 34",Price:45,Weight:10,isChecked:!1},{Name:"Item 35",Price:12,Weight:20,isChecked:!1},{Name:"Item 36",Price:5,Weight:200,isChecked:!1},{Name:"Item 37",Price:2,Weight:200,isChecked:!1},{Name:"Item 38",Price:90,Weight:20,isChecked:!1},{Name:"Item 39",Price:12,Weight:300,isChecked:!1},{Name:"Item 40",Price:167,Weight:500,isChecked:!1},{Name:"Item 41",Price:12,Weight:250,isChecked:!1},{Name:"Item 42",Price:8,Weight:10,isChecked:!1},{Name:"Item 43",Price:2,Weight:10,isChecked:!1},{Name:"Item 44",Price:9,Weight:500,isChecked:!1},{Name:"Item 45",Price:210,Weight:790,isChecked:!1},{Name:"Item 46",Price:167,Weight:100,isChecked:!1},{Name:"Item 47",Price:23,Weight:340,isChecked:!1},{Name:"Item 48",Price:190,Weight:800,isChecked:!1},{Name:"Item 49",Price:199,Weight:200,isChecked:!1},{Name:"Item 50",Price:12,Weight:20,isChecked:!1}],j=c(0),l=function(){return Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Product"}),Object(j.jsx)("th",{children:"Price"}),Object(j.jsx)("th",{children:"Weight"}),Object(j.jsx)("th",{children:"Select"})]})})},g=function(e){var t=e.Name,c=e.Price,i=e.Weight,r=e.isChecked;return Object(j.jsxs)("tr",{className:"item-".concat(r?"Checked":"not-Checked"),children:[Object(j.jsx)("td",{children:t}),Object(j.jsx)("td",{children:c}),Object(j.jsx)("td",{children:i}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"checkbox",value:t,onChange:function(){e.toggleItem(e.id)},checked:r})})]})},o=function(e){return e.items.length?Object(j.jsxs)("table",{children:[Object(j.jsx)(l,{}),Object(j.jsx)("tbody",{children:e.items.map((function(t,c){return Object(j.jsx)(g,Object(a.a)({id:c,toggleItem:e.toggleItem},t),c)}))})]}):Object(j.jsx)("p",{className:"tutorial",children:"Product not available!"})},b=function(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],h=Object(i.useState)([]),s=Object(d.a)(h,2),l=s[0],g=s[1],b=Object(i.useState)(!1),u=Object(d.a)(b,2),k=u[0],C=u[1];function O(){var e=c.filter((function(e){return 1==e.isChecked}));if(e.length){var t=function(e){var t=0;return e.forEach((function(e){t+=e.Price})),Math.ceil(t/250)}(e);if(1==t)P(e,t);else{e.sort((function(e,t){return parseInt(t.Weight)-parseInt(e.Weight)}));var i=[];e.forEach((function(e,c){if(c<t){for(var r=0;r<t;r++)if(r==c)return i[r]=[],void i[r].push(e)}else{i.sort(I);for(r=0;r<t;r++){for(var h=0,s=0;s<i[r].length;s++)h+=i[r][s].Price;if(h+e.Price<=250)return void i[r].push(e)}}})),P(i,t)}}else alert("choose any item to place order")}function P(e,t){var c=[];1==t?c.push(N(e)):e.forEach((function(e,t){c.push(N(e))})),g(c),W()}function N(e){var t,c="",i=0,r=0;return e.forEach((function(e,t){""==c?c=e.Name:c+=", "+e.Name,i+=parseInt(e.Weight),r+=parseInt(e.Price)})),t=i,{items:c,tw:i+="g",tp:r="$"+r,cp:t<=200?"$5":t>200&&t<=500?"$10":t>500&&t<=1e3?"$15":t>1e3&&t<=5e3?"$20":"$25"}}function I(e,t){return e[0].Weight===t[0].Weight?0:e[0].Weight<t[0].Weight?-1:1}function W(){C(!k)}return Object(i.useEffect)((function(){r(m)}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Online Products"}),Object(j.jsx)(o,{items:c,toggleItem:function(e){r(Object.values(Object(a.a)(Object(a.a)({},c),{},Object(n.a)({},e,Object(a.a)(Object(a.a)({},c[e]),{},{isChecked:!c[e].isChecked})))))}}),c.length?Object(j.jsx)("div",{className:"placeorderbtn",children:Object(j.jsx)("button",{onClick:function(){return O()},children:"Place Order"})}):"",k?Object(j.jsxs)("div",{id:"cartModal",children:[Object(j.jsx)("p",{className:"cartModalheader",children:"Order"}),Object(j.jsx)("div",{children:l.map((function(e,t){return Object(j.jsxs)("div",{className:"cartPackage",children:[Object(j.jsxs)("div",{children:["Package ",t+1]}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"Items"})," - ",Object(j.jsx)("span",{children:e.items})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"Total weight"})," - ",Object(j.jsx)("span",{children:e.tw})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"Total price"})," - ",Object(j.jsx)("span",{children:e.tp})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"Courier price "})," - ",Object(j.jsx)("span",{children:e.cp})]})]})]},t)}))}),Object(j.jsxs)("div",{className:"cancel-btn-div",children:[Object(j.jsx)("button",{className:"cancel-btn",onClick:function(){return r(c.map((function(e){return e.isChecked=!1,e}))),g([]),void C(!1)},children:"Reset"}),Object(j.jsx)("button",{className:"cancel-btn",onClick:function(){return W()},children:"Cancel"})]})]}):""]})};var u=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(b,{})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,i=t.getFID,r=t.getFCP,h=t.getLCP,s=t.getTTFB;c(e),i(e),r(e),h(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),k()}},[[15,1,2]]]);
//# sourceMappingURL=main.45527bed.chunk.js.map