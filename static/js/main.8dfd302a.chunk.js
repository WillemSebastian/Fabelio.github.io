(this.webpackJsonpfabelio=this.webpackJsonpfabelio||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=(a(16),a(17),a(1)),c=a.n(s),u=a(5),o=a(6),m=a(7),d=a(9),f=a(8),h=a(10),p=a(2);function v(e){return r.a.createElement("div",{className:"col-lg-6 col-12"},r.a.createElement("div",{className:"productCard"},r.a.createElement("div",{className:"productHeader"},r.a.createElement("p",{style:{fontSize:20,fontWeight:"bold"}},e.data.name),r.a.createElement("p",{style:{color:"orange",fontWeight:"bold"}},"Rp ",e.data.price,",00")),r.a.createElement("div",{className:"productDescription"},r.a.createElement("p",null,e.data.description),r.a.createElement("p",{style:{color:"blue"}},e.data.furniture_style.toString())),r.a.createElement("div",{className:"productFooter"},r.a.createElement("p",null),r.a.createElement("p",{style:{color:"blue",fontWeight:"bold"}},e.data.delivery_time," Hari"))))}var y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).componentDidMount=function(){a.loadData()},a.loadData=Object(u.a)(c.a.mark((function e(){var t,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://www.mocky.io/v2/5c9105cb330000112b649af8",e.next=3,fetch("http://www.mocky.io/v2/5c9105cb330000112b649af8",{method:"GET"});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r=n.furniture_styles.map((function(e){return{name:e,key:e}})),a.setState({data:n,furnitureStyleOptions:r,searchResult:n.products});case 9:case"end":return e.stop()}}),e)}))),a.filterData=function(e){var t=JSON.parse(JSON.stringify(a.state.data)),n=a.state.furnitureFilter.map((function(e){return e.name})),r=Math.max.apply(null,a.state.timeFilter.map((function(e){return e.maximumDeliveryDays})));if(0===a.state.timeFilter.length&&0===a.state.furnitureFilter.length&&""===a.state.nameFilter)a.setState({searchResult:a.state.data.products});else{var i=t.products.filter((function(e){return""===a.state.nameFilter?0===a.state.furnitureFilter.length?e.delivery_time<=r:0===a.state.timeFilter.length?e.furniture_style.some((function(e){return n.includes(e)})):e.furniture_style.some((function(e){return n.includes(e)}))&&e.delivery_time<=r:0===a.state.furnitureFilter.length?0===a.state.nameFilter.length?e.delivery_time<=r:0===a.state.timeFilter.length?e.name.includes(a.state.nameFilter):e.name.includes(a.state.nameFilter)&&e.delivery_time<=r:0!==a.state.timeFilter.length?e.name.includes(a.state.nameFilter)&&e.furniture_style.some((function(e){return n.includes(e)}))&&e.delivery_time<=r:""===a.state.nameFilter?e.furniture_style.some((function(e){return n.includes(e)})):0!==a.state.furnitureFilter.length?e.furniture_style.some((function(e){return n.includes(e)}))&&e.name.includes(a.state.nameFilter):void e.name.includes(a.state.nameFilter)}));a.setState({searchResult:i})}},a.onChangeFilterFurnitureName=function(e){a.setState({nameFilter:e.target.value},(function(){return a.filterData()}))},a.renderProductCard=function(){return 0===a.state.searchResult.length?null:a.state.searchResult.map((function(e){return r.a.createElement(v,{data:e,key:e.name})}))},a.onSelectFurnitureStyle=function(e){a.setState({furnitureFilter:e},(function(){return a.filterData()}))},a.onRemoveFurnitureStyle=function(e){a.setState({furnitureFilter:e},(function(){return a.filterData()}))},a.onSelectDeliveryTime=function(e){a.setState({timeFilter:e},(function(){return a.filterData()}))},a.onRemoveDeliveryTime=function(e){a.setState({timeFilter:e},(function(){return a.filterData()}))},a.state={data:[],furnitureStyleOptions:[],deliveryTimeOptions:[{name:"1 Week",id:1,maximumDeliveryDays:7},{name:"2 Weeks",id:2,maximumDeliveryDays:14},{name:"1 Months",id:3,maximumDeliveryDays:31},{name:"More",id:4,maximumDeliveryDays:365}],nameFilter:"",furnitureFilter:[],timeFilter:[],searchResult:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-12 p20"},r.a.createElement("input",{type:"text",name:"name",className:"text",placeholder:" Search Furniture",onKeyUp:this.onChangeFilterFurnitureName}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 col-12 p20"},r.a.createElement(p.Multiselect,{options:this.state.furnitureStyleOptions,selectedValues:this.state.selectedValue,onSelect:this.onSelectFurnitureStyle,onRemove:this.onRemoveFurnitureStyle,displayValue:"name",showCheckbox:!0,placeholder:"Furniture Style"})),r.a.createElement("div",{className:"col-lg-6 col-12 p20"},r.a.createElement(p.Multiselect,{options:this.state.deliveryTimeOptions,selectedValues:this.state.selectedValue,onSelect:this.onSelectDeliveryTime,onRemove:this.onRemoveDeliveryTime,displayValue:"name",placeholder:"Delivery Time"})))),r.a.createElement("div",{className:"content row"},this.renderProductCard()))))}}]),t}(r.a.Component);var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.8dfd302a.chunk.js.map