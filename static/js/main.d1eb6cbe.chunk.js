(this["webpackJsonpfinished-app"]=this["webpackJsonpfinished-app"]||[]).push([[0],{129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},133:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),s=n.n(i),c=(n(129),n(130),n(131),n(9));var o=function(e){return Object(c.jsx)("div",{className:"header",children:e.title})};n(133);var l=function(e){return Object(c.jsx)("div",{className:"footer",children:e.title})},u=n(30),d=n.n(u),h=n(62),p=n(39),b=n(40),f=n(26),j=n(51),m=n(50),g=(n(135),n(136),n(96)),v=n.n(g),O=n(97),x=n(3),y=n(148),k=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).render=a.render.bind(Object(f.a)(a)),a.matchID=a.matchID.bind(Object(f.a)(a)),a.fixDate=a.fixDate.bind(Object(f.a)(a)),a.state={sortDirection:"desc",columns:void 0,classes:void 0},a}return Object(b.a)(n,[{key:"matchID",value:function(e,t){return e===t[0].PlaceId?t[0].Name:t[1].Name}},{key:"fixDate",value:function(e){return e=v()(e).format("MM-DD-YYYY")}},{key:"render",value:function(){for(var e=this.props.flightsReponse.Quotes,t=this.props.flightsReponse.Currencies,n=this.props.flightsReponse.Places,a=this.props.flightsReponse.Carriers,r=0,i=0;i<e.length;i++)0===i&&(r=e[i].MinPrice),e[i].originName=this.matchID(e[i].OutboundLeg.OriginId,n),e[i].destinationName=this.matchID(e[i].OutboundLeg.DestinationId,n),e[i].id=i,e[i].DepartureDate=this.fixDate(e[i].OutboundLeg.DepartureDate),r>e[i].MinPrice&&(r=e[i].MinPrice),e[i].Airline=a.find((function(t){return t.CarrierId=e[i].OutboundLeg.CarrierIds})).Name,e[i].Currency=t[0].Symbol,console.log("hello");console.log("after for loop"),this.state.columns=[{field:"Airline",headerName:"Airline",width:150},{field:"originName",headerName:"Origin",width:250},{field:"destinationName",headerName:"Destination",width:250},{field:"DepartureDate",headerName:"Departure Date",width:250},{field:"Currency",headerName:"Cur.",width:90},{field:"MinPrice",headerName:"Price",width:124,cellClassName:function(e){return Object(x.a)("super-app",{minPrice:e.value<=r})}}];var s=this.props.classes;return Object(c.jsx)("div",{className:s.root,style:{display:"flex",height:350,paddingTop:30,paddingLeft:100,paddingRight:100,label:"dataGrid"},children:Object(c.jsx)("div",{style:{flexGrow:1},children:Object(c.jsx)(O.a,{rows:e,columns:this.state.columns,style:{textAlign:"center"},hideFooterPagination:!1,autoHeight:!0,disableColumnResize:!0,disableColumnMenu:!0,disableSelectionOnClick:!0,pageSize:5})})})}}]),n}(r.a.Component),D=Object(y.a)({root:{"& .super-app.minPrice":{backgroundColor:"#c4eafd",color:"black",fontWeight:"600",font:"Times New Roman"}}})(k),C=n(112),N=n(105),S=n(196),w=n(37),I=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a.render=a.render.bind(Object(f.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(f.a)(a)),a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.state={date:new Date,originplace:"",destinationplace:"",outboundpartialdate:"",inboundpartialdate:"",currency:"USD",flightsReponse:void 0,currencyResponse:void 0},a}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;function t(){return n.apply(this,arguments)}function n(){return(n=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/currencies",{method:"GET",headers:{"x-rapidapi-key":"94873677e7msh2a304b836ad44f7p1ea0c0jsn6845e118a98a","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"}});case 2:return t=e.sent,e.next=5,t.text();case 5:return n=e.sent,a=JSON.parse(n),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(h.a)(d.a.mark((function n(){var a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:a=n.sent,e.setState({currencyResponse:a.Currencies});case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}(),t()}},{key:"handleSubmit",value:function(e){var t=this;function n(){return(n=Object(h.a)(d.a.mark((function e(n,a){var r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",headers:{"x-rapidapi-key":"".concat("94873677e7msh2a304b836ad44f7p1ea0c0jsn6845e118a98a"),"x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",useQueryString:!0}},e.next=3,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/"+n+"/en-US/"+a,r);case 3:return i=e.sent,e.next=6,i.json();case 6:i=e.sent,console.log("fetched the data"+JSON.stringify(i)),t.setState({flightsReponse:i});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e,t){n.apply(this,arguments)}(this.state.currency,this.state.originplace+"/"+this.state.destinationplace+"/"+this.state.outboundpartialdate+"?inboundpartialdate="+this.state.inboundpartialdate),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState({currency:e.target.value}),console.log("clicked")}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{id:"divForm",className:t.root,children:Object(c.jsx)(S.a,{container:!0,spacing:3,children:Object(c.jsx)(S.a,{item:!0,xs:!0,children:Object(c.jsx)(N.a,{className:t.paper,children:Object(c.jsxs)("form",{className:"user-input",onSubmit:this.handleSubmit,children:[Object(c.jsx)("label",{htmlFor:"queryInput",children:"Leaving From:"}),Object(c.jsx)(C.a,{className:"TextField-without-border-radius",id:"outlined-basic",placeholder:"Airport Code(BOS)",label:"",size:"small",type:"",variant:"outlined",margin:"none",value:this.state.originplace,onChange:function(t){return e.setState({originplace:t.target.value})},required:!0,InputLabelProps:{shrink:!0}}),Object(c.jsx)("label",{htmlFor:"queryInput",children:"Going To:"}),Object(c.jsx)(C.a,{className:"TextField-without-border-radius",id:"outlined-basic",placeholder:"Airport Code(JFK)",label:"",size:"small",type:"",variant:"outlined",margin:"none",value:this.state.destinationplace,onChange:function(t){return e.setState({destinationplace:t.target.value})},required:!0,InputLabelProps:{shrink:!0}}),Object(c.jsx)("label",{htmlFor:"queryInput",children:"Departure Date:"}),Object(c.jsx)(C.a,{className:"TextField-without-border-radius",id:"date",label:"",size:"small",type:"date",variant:"outlined",margin:"none",value:this.state.outboundpartialdate,onChange:function(t){return e.setState({outboundpartialdate:t.target.value})},required:!0,InputLabelProps:{shrink:!0}}),Object(c.jsx)("label",{htmlFor:"queryInput",children:"Returning Date:"}),Object(c.jsx)(C.a,{className:"TextField-without-border-radius",id:"date",label:"",size:"small",type:"date",margin:"none",variant:"outlined",value:this.state.inboundpartialdate,onChange:function(t){return e.setState({inboundpartialdate:t.target.value})},required:!0,InputLabelProps:{shrink:!0}}),Object(c.jsx)("label",{htmlFor:"queryInput",children:"Currency:"}),Object(c.jsx)(C.a,{className:"TextField-without-border-radius",id:"currencyDropDown",select:!0,label:"",size:"small",margin:"none",variant:"outlined",value:this.state.currency?this.state.currency:"",onChange:this.handleChange,required:!0,InputLabelProps:{shrink:!0},children:null!=this.state.currencyResponse?this.state.currencyResponse.map((function(e){return Object(c.jsx)(w.a,{value:e.Code,children:e.Code},e.Code)})):console.log("currencies are not available yet!")}),Object(c.jsx)(S.a,{id:"searchGrid",item:!0,xs:!0,children:Object(c.jsx)(N.a,{className:t.paper,children:Object(c.jsx)("button",{className:"search",children:"Search"})})})]})})})})}),Object(c.jsx)("div",{children:this.state.flightsReponse&&Object(c.jsx)(D,{flightsReponse:this.state.flightsReponse})})]})}}]),n}(r.a.Component),F=Object(y.a)({root:{flexGrow:1},paper:{textAlign:"center"}})(I);var P=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(o,{title:"Nupur Shukla's Flight Search"}),Object(c.jsx)(F,{}),Object(c.jsx)(l,{title:"API from SkyScanner"})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,198)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(P,{})}),document.getElementById("root")),R()}},[[145,1,2]]]);
//# sourceMappingURL=main.d1eb6cbe.chunk.js.map