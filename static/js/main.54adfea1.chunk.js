(this.webpackJsonpodontorgam=this.webpackJsonpodontorgam||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),i=(n(11),n(3)),l=n(1),u=n(5),s=n.n(u);n(12),n(13);var m=function(e){var t=e.number,n=e.positionX,o=e.positionY,c=e.onChange,u={Cavities:{center:0,top:0,bottom:0,left:0,right:0},Extract:0,Crown:0,Filter:0,Fracture:0},m=function(e){return{type:"crown",value:e}},f=function(e){return{type:"extract",value:e}},h=function(e,t){return{type:"carie",value:t,zone:e}},d=Object(r.useReducer)((function(e,t){switch(t.type){case"crown":return Object(l.a)(Object(l.a)({},e),{},{Crown:t.value});case"extract":return Object(l.a)(Object(l.a)({},e),{},{Extract:t.value});case"filter":return Object(l.a)(Object(l.a)({},e),{},{Filter:t.value});case"fracture":return Object(l.a)(Object(l.a)({},e),{},{Fracture:t.value});case"carie":return Object(l.a)(Object(l.a)({},e),{},{Cavities:N(e,t.zone,t.value)});case"clear":return u;default:throw new Error}}),u),v=Object(i.a)(d,2),y=v[0],E=v[1],g=s()({submenuSymbol:">"}),C=Object(i.a)(g,2),p=C[0],b=C[1],x=Object(r.useRef)(!0);Object(r.useEffect)((function(){x.current?x.current=!1:c(t,y)}),[y,c,t]);var w=function(e,t){return{Cavity:function(){E(h(e,t))},"Cavities All":function(){return E(h("all",t))},Absent:function(){return E(f(t))},Crown:function(){return E(m(t))}}},O=function(e,t){return{Cavity:function(){return E(h(e,t))},"Cavities All":function(){return E(h("all",t))},Absent:function(){return E(f(t))},Crown:function(){return E(m(t))},"Filtered Out":function(){return E({type:"filter",value:t})},Fractured:function(){return E({type:"fracture",value:t})}}},k=function(e){return{Done:w(e,1),"To Do":O(e,2),"JSX line":a.a.createElement("hr",null),"Clear All":function(){return E({type:"clear"})}}},j=function(e){if(y.Cavities){if(1===y.Cavities[e])return"to-do";if(2===y.Cavities[e])return"done"}return""},F="translate(".concat(n,",").concat(o,")");return a.a.createElement("svg",{className:"tooth"},a.a.createElement("g",{transform:F},a.a.createElement("polygon",{points:"0,0 20,0 15,5 5,5",onContextMenu:b(k("top")),className:j("top")}),a.a.createElement("polygon",{points:"5,15 15,15 20,20 0,20",onContextMenu:b(k("bottom")),className:j("bottom")}),a.a.createElement("polygon",{points:"15,5 20,0 20,20 15,15",onContextMenu:b(k("left")),className:j("left")}),a.a.createElement("polygon",{points:"0,0 5,5 5,15 0,20",onContextMenu:b(k("right")),className:j("right")}),a.a.createElement("polygon",{points:"5,5 15,5 15,15 5,15",onContextMenu:b(k("center")),className:j("center")}),function(){var e=null;y.Extract>0&&(e=a.a.createElement("g",{stroke:1===y.Extract?"red":"blue"},a.a.createElement("line",{x1:"0",y1:"0",x2:"20",y2:"20",strokeWidth:"2"}),a.a.createElement("line",{x1:"0",y1:"20",x2:"20",y2:"0",strokeWidth:"2"})));y.Fracture>0&&(e=a.a.createElement("g",{stroke:1===y.Fracture?"red":"blue"},a.a.createElement("line",{x1:"0",y1:"10",x2:"20",y2:"10",strokeWidth:"2"})));y.Filter>0&&(e=a.a.createElement("g",{stroke:1===y.Fracture?"red":"blue"},a.a.createElement("line",{x1:"0",y1:"20",x2:"20",y2:"0",strokeWidth:"2"})));y.Crown>0&&(e=a.a.createElement("circle",{cx:"10",cy:"10",r:"10",fill:"none",stroke:1===y.Crown?"red":"blue",strokeWidth:"2"}));return e}(),a.a.createElement("text",{x:"6",y:"30",stroke:"navy",fill:"navy",strokeWidth:"0.1",className:"tooth"},t)),p);function N(e,t,n){if(e&&e.Cavities)return"all"===t?e.Cavities={center:n,top:n,bottom:n,left:n,right:n}:e.Cavities[t]=n,e.Cavities}};var f=function(e){var t=e.start,n=e.end,r=e.x,o=e.y,c=e.handleChange,i=function(e,t){if(e>t)return function(e,t){for(var n=[],r=e;r>=t;r--)n.push(r);return n}(e,t);for(var n=[],r=e;r<=t;r++)n.push(r);return n}(t,n);return a.a.createElement("g",{transform:"scale(1.4)",id:"gmain"},i.map((function(e){return a.a.createElement(m,{onChange:c,key:e,number:e,positionY:o,positionX:Math.abs(25*(e-t))+r})})))};var h=function(){var e={},t=function(t,n){e[t]=n};return a.a.createElement("div",{className:"Odontogram"},a.a.createElement("svg",{version:"1.1",height:"100%",width:"100%"},a.a.createElement(f,{start:18,end:11,x:0,y:0,handleChange:t}),a.a.createElement(f,{start:21,end:28,x:210,y:0,handleChange:t}),a.a.createElement(f,{start:55,end:51,x:75,y:40,handleChange:t}),a.a.createElement(f,{start:61,end:65,x:210,y:40,handleChange:t}),a.a.createElement(f,{start:85,end:81,x:75,y:80,handleChange:t}),a.a.createElement(f,{start:71,end:75,x:210,y:80,handleChange:t}),a.a.createElement(f,{start:48,end:41,x:0,y:120,handleChange:t}),a.a.createElement(f,{start:31,end:38,x:210,y:120,handleChange:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.54adfea1.chunk.js.map