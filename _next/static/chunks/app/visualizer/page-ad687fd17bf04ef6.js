(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{8825:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return X}});var r,n,i,a,l,h,c,o=s(9268),u=s(6006),d=s(5334),p=s(4715),f=s(7804);function m(e){let{position:t,innerRef:s,...r}=e,n=new f.SphereGeometry(.05,32,32);return(0,o.jsxs)("mesh",{position:t,ref:s,children:[(0,o.jsx)("primitive",{object:n}),(0,o.jsx)("meshStandardMaterial",{})]})}var v=s(6462);class g{_constructRefs(){let e=this._vertices.map(e=>{let t=(0,u.useRef)(),s=(0,o.jsx)(m,{position:e,innerRef:t},(0,v.Z)());return[t,s]});this._refs=e.map(e=>e[0]),this._objects=e.map(e=>e[1])}_recreateRefs(){this._constructRefs()}_updateRefs(){if(!this._refs||this._refs.length!==this._vertices.length){this._needsRecreate=!0;return}for(let e=0;e<this._vertices.length;e++)this._refs[e].current.position.set(this._vertices[e][0],this._vertices[e][1],this._vertices[e][2])}update(e){this._vertices=e}updateRender(){this._updateRefs()}recreate(){this._needsRecreate=!0}render(){return this._needsRecreate&&(this._recreateRefs(),this._needsRecreate=!1),this._objects}constructor(e){this._vertices=e,this._needsRecreate=!0}}function x(e){let{start:t,end:s,innerRef:r}=e;return(0,u.useLayoutEffect)(()=>{r.current.geometry.setFromPoints([t,s].map(e=>new f.Vector3(...e)))},[t,s]),(0,o.jsxs)("line",{ref:r,children:[(0,o.jsx)("bufferGeometry",{}),(0,o.jsx)("lineBasicMaterial",{color:"hotpink"})]})}class _{_constructRefs(){let e=this._segments.map(e=>{let t=(0,u.useRef)(),s=(0,o.jsx)(x,{start:e[0],end:e[1],innerRef:t},(0,v.Z)());return[t,s]});this._refs=e.map(e=>e[0]),this._objects=e.map(e=>e[1])}_recreateRefs(){this._constructRefs()}_updateRefs(){if(!this._refs||this._refs.length!==this._segments.length){this._needsRecreate=!0;return}for(let e=0;e<this._segments.length;e++)this._refs[e].current.geometry.setFromPoints([this._segments[e][0],this._segments[e][1]].map(e=>new f.Vector3(...e)))}update(e){this._segments=e}updateRender(){this._updateRefs()}recreate(){this._needsRecreate=!0}render(){return this._needsRecreate&&(this._recreateRefs(),this._needsRecreate=!1),this._objects}constructor(e){this._segments=e,this._needsRecreate=!0}}class w{recreate(e,t,s,r){this._step=e,this._time=t,this._vertMan.update(s),this._segMan.update(r),this._vertMan.recreate(),this._segMan.recreate()}update(e,t,s,r){this._step=e,this._time=t,this._vertMan.update(s),this._segMan.update(r)}updateRender(){this._vertMan.updateRender(),this._segMan.updateRender()}render(){return[...this._vertMan.render(),...this._segMan.render()]}get step(){return this._step}constructor(e,t,s,r){this._step=e,this._time=t,this._vertMan=new g(s),this._segMan=new _(r)}}function j(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("arrowHelper",{args:[new f.Vector3(1,0,0),new f.Vector3(0,0,0),1,16711680]}),(0,o.jsx)("arrowHelper",{args:[new f.Vector3(0,1,0),new f.Vector3(0,0,0),1,65280]}),(0,o.jsx)("arrowHelper",{args:[new f.Vector3(0,0,1),new f.Vector3(0,0,0),1,255]})]})}class b{update(e){console.log("Trying to update simulator: ",e),this._ts=e.ts,this._vertices=e.vertices,this._segments=e.segments,console.log("Previous state: ",this._state),this._state.recreate(0,this._ts[0],this._vertices[0],this._segments[0]),console.log("New state: ",this._state)}async _autoStep(){this._autoStepping&&this.oneStep(),setTimeout(this._autoStep,1e3*this._dt)}async toggleAutoStep(){this._autoStepping=!this._autoStepping}setStep(e){if(e<0||e>=this._ts.length){if(!this._loop)return;e%=this._ts.length}this._stepCallback&&this._stepCallback(e),this._state.update(e,this._ts[e],this._vertices[e],this._segments[e])}updateRender(){this._state.updateRender()}setStepCallback(e){this._stepCallback=e}get step(){return this._state.step}get length(){return this._ts.length}oneStep(){this.setStep(this._state.step+1)}oneBackstep(){this.setStep(this._state.step-1)}reset(){this.setStep(0)}render(){let e=(0,o.jsx)(j,{}),t=this._state.render();return(0,p.A)(()=>{this.updateRender()}),(0,o.jsxs)(o.Fragment,{children:[e,...t]})}constructor(e){this._ts=e.ts,this._dt=.01,this._vertices=e.vertices,this._segments=e.segments,0==this._ts.length?this._state=new w(0,0,[],[]):this._state=new w(0,this._ts[0],this._vertices[0],this._segments[0]),this._autoStepping=!1,this._loop=!0,this.render=this.render.bind(this),this.oneStep=this.oneStep.bind(this),this.oneBackstep=this.oneBackstep.bind(this),this.reset=this.reset.bind(this),this._autoStep=this._autoStep.bind(this),this.toggleAutoStep=this.toggleAutoStep.bind(this),this._autoStep()}}var y=s(6752),S=s.n(y),O=s(5968),R=s(6446);function E(e){let{hMan:t,onClick:s}=e,r=t.getElements();return(0,o.jsx)("div",{className:"flex flex-col justify-start items-start overflow-auto max-h-20 w-full",children:r.map(e=>{let{id:t,name:r}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("hr",{className:"w-full bg-shadow"}),(0,o.jsx)(C,{innerId:t,name:r,onClick:s},(0,v.Z)())]})})})}function C(e){let{innerId:t,name:s,onClick:r}=e,n=(0,u.useRef)();return(0,o.jsx)("div",{ref:n,id:t,className:"px-2 py-1 w-full",children:(0,o.jsxs)("button",{onClick:()=>void r(n.current.id),children:[" ",">"," ",s]})})}class M{setHistory(e){this._history=e}push(e,t){this._history.push({id:e,data:t})}access(e){return this._history.find(t=>t.id===e)}getElements(){return this._history.map(e=>{let{id:t,data:s}=e;return{id:t,name:s.name}})}constructor(){this._history=[]}}var N=s(6254);function k(){return(k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}var z=function(e){return N.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48"},e),N.createElement("path",{fill:e.fill,d:"M24 10.9 35 24H13zM20 40h8v4h-8zm0-6h8v4h-8z"}),N.createElement("path",{fill:e.fill,d:"M20 21h8v11h-8zM6 4h36v4H6z"}))};function V(){return(V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}var P=function(e){return N.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",width:48,height:48},e),N.createElement("path",{fill:e.fill,d:"M14 34V14l20 10z"}))};function H(){return(H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}var F=function(e){return N.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",width:30,height:30,viewBox:"0 0 48 48",fill:e.fill},e),r||(r=N.createElement("path",{d:"m24 12-8-6 8-6z"})),n||(n=N.createElement("path",{d:"M24 44C13 44 4 35 4 24c0-4.7 1.7-9.3 4.8-12.9l3 2.6C9.3 16.5 8 20.2 8 24c0 8.8 7.2 16 16 16s16-7.2 16-16S32.8 8 24 8h-3.2V4H24c11 0 20 9 20 20s-9 20-20 20z"})))};function Z(){return(Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}var B=function(e){return N.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",width:48,height:48,fill:e.fill},e),i||(i=N.createElement("path",{d:"M15 14h6v20h-6zm12 0h6v20h-6z"})))};function L(){return(L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}var A=function(e){return N.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",width:48,height:48,fill:e.fill},e),a||(a=N.createElement("path",{d:"M26 24 12 14v20z"})),l||(l=N.createElement("path",{d:"M36 24 22 14v20z"})))};function T(){return(T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}var J=function(e){return N.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",width:48,height:48,fill:e.fill},e),h||(h=N.createElement("path",{d:"m22 24 14-10v20z"})),c||(c=N.createElement("path",{d:"m12 24 14-10v20z"})))};function G(e){let t=(0,u.useContext)(R.ThemeContext),{onPlay:s,onStep:r,onReplay:n,onBackstep:i,active:a}=e;return(0,o.jsxs)("div",{className:"w-full flex flex-row justify-center items-center",children:[(0,o.jsx)("button",{onClick:i,children:(0,o.jsx)(J,{fill:t.extend.colors.shadow})}),(0,o.jsx)("button",{onClick:s,children:a?(0,o.jsx)(B,{fill:t.extend.colors.shadow}):(0,o.jsx)(P,{fill:t.extend.colors.shadow})}),(0,o.jsx)("button",{onClick:r,children:(0,o.jsx)(A,{fill:t.extend.colors.shadow})}),(0,o.jsx)("button",{onClick:n,children:(0,o.jsx)(F,{fill:t.extend.colors.shadow})})]})}function I(e){let t=(0,u.useContext)(R.ThemeContext),[s,r]=(0,u.useState)(!1),[n,i]=(0,u.useState)(null),[a,l]=(0,u.useState)(null),[h,c]=e.sim,[d,p]=(0,u.useState)(new M),f=(0,u.useRef)(),m=(0,u.useRef)();h.setStepCallback(e=>{f.current&&(f.current.value=e),m.current&&(m.current.value=e)});let g=e=>{console.log("Trying to backup the data."),a&&!a.id&&(a.name||(a.name="Untitled"),p(e=>(e.push((0,v.Z)(),a),e))),l(e)},x=async e=>{i(e),g(JSON.parse(await e.text()))};return(0,u.useEffect)(()=>{h._autoStepping&&r(!0)},[h._autoStepping]),(0,u.useEffect)(()=>{a&&c(new b(a))},[a]),(0,o.jsx)(S(),{handle:".handle",children:(0,o.jsxs)("div",{className:"m-4 w-[12rem] absolute z-[10000] flex flex-col justify-start items-start bg-primary rounded-md shadow-md shadow-shadow",children:[(0,o.jsx)("div",{className:"handle flex flex-row justify-center items-center w-full",children:(0,o.jsx)("p",{className:"text-black select-none font-bold",children:"Controller"})}),(0,o.jsx)("hr",{className:"bg-shadow w-full"}),(0,o.jsx)("div",{className:"py-2 pr-2 w-full flex flex-row justify-center items-center",children:(0,o.jsx)(O.b,{children:(0,o.jsxs)("div",{className:"flex flex-row",children:[(0,o.jsx)(z,{fill:t.extend.colors.shadow}),(0,o.jsx)("div",{className:"flex flex-row justify-center items-center text-black",children:"Upload JSON"})]}),label:"Upload JSON",handleChange:x,name:"file",types:["JSON"]})}),(0,o.jsxs)("div",{className:"flex flex-row justify-center items-center text-white px-2",children:[(0,o.jsx)("input",{id:"minmax-range",type:"range",min:0,max:h.length-1,className:"w-full h-2 rounded-lg appearance-none cursor-pointer bg-secondary accent-shadow",ref:f,onChange:e=>{h.setStep(parseInt(e.target.value))}}),(0,o.jsx)("input",{type:"number",className:"w-10 h-5 m-2 text-black bg-secondary rounded-md text-xs",onChange:e=>{h.setStep(parseInt(e.target.value))},ref:m})]}),(0,o.jsx)(G,{active:s,onPlay:()=>{r(!s),h.toggleAutoStep()},onStep:()=>h.oneStep(),onBackstep:()=>h.oneBackstep(),onReplay:()=>h.reset()}),(0,o.jsx)(E,{hMan:d,onClick:function(e){let t=d.access(e);t.data.id=e,g(t.data)}})]})})}var U=s(192);function X(){(0,u.useRef)();let[e,t]=(0,u.useState)(new b({ts:[],vertices:[],segments:[]}));return(0,o.jsxs)("div",{className:"w-full h-full",children:[(0,o.jsx)(I,{sim:[e,t]}),(0,o.jsx)("div",{className:"w-full h-[50rem] z-0",children:(0,o.jsxs)(d.Xz,{children:[(0,o.jsx)("perspectiveCamera",{position:[0,0,10]}),(0,o.jsx)("ambientLight",{intensity:.1}),(0,o.jsx)("directionalLight",{color:"red",position:[0,0,5]}),(0,o.jsx)(e.render,{}),(0,o.jsx)(U.z,{})]})})]})}},6446:function(e,t,s){"use strict";s.r(t),s.d(t,{Layout:function(){return S},ThemeContext:function(){return y}});var r,n,i,a,l=s(9268),h=s(6006),c=s(4452),o=s.n(c),u=s(8735),d=s(5846),p=s.n(d),f=s(6254);function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}var v=function(e){return f.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 495.398 495.398",xmlSpace:"preserve"},e),r||(r=f.createElement("path",{d:"m487.083 225.514-75.08-75.08v-86.73c0-15.682-12.708-28.391-28.413-28.391-15.669 0-28.377 12.709-28.377 28.391v29.941L299.31 37.74c-27.639-27.624-75.694-27.575-103.27.05L8.312 225.514c-11.082 11.104-11.082 29.071 0 40.158 11.087 11.101 29.089 11.101 40.172 0l187.71-187.729c6.115-6.083 16.893-6.083 22.976-.018l187.742 187.747a28.337 28.337 0 0 0 20.081 8.312c7.271 0 14.541-2.764 20.091-8.312 11.086-11.086 11.086-29.053-.001-40.158z"})),n||(n=f.createElement("path",{d:"M257.561 131.836c-5.454-5.451-14.285-5.451-19.723 0L72.712 296.913a13.977 13.977 0 0 0-4.085 9.877v120.401c0 28.253 22.908 51.16 51.16 51.16h81.754v-126.61h92.299v126.61h81.755c28.251 0 51.159-22.907 51.159-51.159V306.79c0-3.713-1.465-7.271-4.085-9.877L257.561 131.836z"})))};function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}var x=function(e){return f.createElement("svg",g({width:24,height:24,xmlns:"http://www.w3.org/2000/svg"},e),i||(i=f.createElement("path",{d:"M6 23h12a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3ZM19 9.5v5h-.132l-.968-1.947a1 1 0 0 0-1.79.894l.527 1.053H15V12a1 1 0 0 0-2 0v2.5h-1V13a1 1 0 0 0-2 0v1.5H5v-5ZM18 21h-4v-2a1 1 0 0 0-2 0v2h-1v-2a1 1 0 0 0-2 0v2H8v-1a1 1 0 0 0-2 0v1a1 1 0 0 1-1-1v-3.5h14V20a1 1 0 0 1-1 1ZM6 3h12a1 1 0 0 1 1 1v3.5h-4.132L13.9 5.553a1 1 0 1 0-1.79.894l.522 1.053H11V5a1 1 0 0 0-2 0v2.5H8V6a1 1 0 0 0-2 0v1.5H5V4a1 1 0 0 1 1-1Z"})))};function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(this,arguments)}var w=function(e){return f.createElement("svg",_({width:24,height:24,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=f.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.301 15.577C4.778 14.268 3.691 12.773 3.18 12c.51-.773 1.598-2.268 3.121-3.577C7.874 7.072 9.816 6 12 6c2.184 0 4.126 1.072 5.699 2.423 1.523 1.309 2.61 2.804 3.121 3.577-.51.773-1.598 2.268-3.121 3.577C16.126 16.928 14.184 18 12 18c-2.184 0-4.126-1.072-5.699-2.423ZM12 4C9.148 4 6.757 5.395 4.998 6.906c-1.765 1.517-2.99 3.232-3.534 4.064a1.876 1.876 0 0 0 0 2.06c.544.832 1.769 2.547 3.534 4.064C6.758 18.605 9.148 20 12 20c2.852 0 5.243-1.395 7.002-2.906 1.765-1.517 2.99-3.232 3.534-4.064.411-.628.411-1.431 0-2.06-.544-.832-1.769-2.547-3.534-4.064C17.242 5.395 14.852 4 12 4Zm-2 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",fill:"#000"})))};function j(){let e=[{href:"/",title:"Homepage",item:(0,l.jsx)(v,{})},{href:"/visualizer",title:"Visualizer",item:(0,l.jsx)(w,{})},{href:"/library",title:"Library",item:(0,l.jsx)(x,{})}];return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("aside",{className:"bg-primary shadow-md shadow-shadow max-w-5",children:(0,l.jsx)("nav",{children:(0,l.jsx)("ul",{children:e.map(e=>{let{href:t,title:s,item:r}=e;return(0,l.jsx)("li",{className:"m-2",children:(0,l.jsx)(p(),{href:t,children:(0,l.jsx)("p",{className:"flex p-2 bg-primary shadow-sm shadow-shadow rounded hover:bg-secondary cursor-pointer",children:r})})},s)})})})})})}let b=o()(()=>Promise.all([s.e(174),s.e(221),s.e(334),s.e(544)]).then(s.bind(s,1544)),{loadableGenerated:{webpack:()=>[1544]},ssr:!1}),y=(0,h.createContext)(u.theme),S=e=>{let{children:t}=e,s=(0,h.useRef)();return(0,l.jsx)("div",{className:"min-h-screen flex flex-col",ref:s,style:{position:"relative",width:" 100%",height:"100%",overflow:"auto",touchAction:"auto"},children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row flex-1",children:[(0,l.jsx)(j,{}),(0,l.jsx)("main",{className:"flex-1",children:t}),(0,l.jsx)(b,{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none"},eventSource:s,eventPrefix:"client"})]})})}},8735:function(e){"use strict";e.exports={mode:"jit",content:["./app/**/*.{js,ts,jsx,tsx}","./src/**/*.{js,ts,jsx,tsx}"],darkMode:"media",theme:{extend:{colors:{primary:"#FFFFFF",secondary:"#F0EBEB",shadow:"#757575"}}},variants:{extend:{}},plugins:[]}},3014:function(e,t,s){Promise.resolve().then(s.bind(s,8825))}},function(e){e.O(0,[774,174,221,327,334,374,667,677,744],function(){return e(e.s=3014)}),_N_E=e.O()}]);