var H=Object.defineProperty,K=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var M=(e,t,o)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))J.call(t,o)&&M(e,o,t[o]);if(I)for(var o of I(t))U.call(t,o)&&M(e,o,t[o]);return e},f=(e,t)=>K(e,j(t));import{j as a,a as c,M as E,B as D,r as h,D as G,S as X,A as q,T as V,R as z,b as Q,c as W}from"./vendor.14648dbc.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}};Z();const v="Grid.Field",B={type:v,param:{field:""}},ee=e=>{var t;return a("div",{children:c("label",{children:["Field",a("input",{value:(t=e.param)==null?void 0:t.field,onChange:o=>{var n;return(n=e.onParamChange)==null?void 0:n.call(e,{field:o.currentTarget.value})}})]})})},C="Grid.ValueFormatter.DivideByThousand",te=()=>a("div",{children:"Divide by 1e3"}),T="Grid.ValueFormatter.FixedDecimalPlaces",re=e=>{var t;return a("div",{children:c("label",{children:["Decimal Places",a("input",{value:(t=e.param)==null?void 0:t.dp,type:"number",onChange:o=>{var n;return(n=e.onParamChange)==null?void 0:n.call(e,{dp:Number.parseInt(o.currentTarget.value)})}})]})})},N="Grid.ValueFormatter.SuffixBy",oe=e=>{var t;return a("div",{children:c("label",{children:["Suffix",a("input",{value:(t=e.param)==null?void 0:t.suffix,onChange:o=>{var n;return(n=e.onParamChange)==null?void 0:n.call(e,{suffix:o.currentTarget.value})}})]})})},_={[C]:{defaultKey:{type:C},editor:te},[T]:{defaultKey:{type:T,param:{dp:2}},editor:re},[N]:{defaultKey:{type:N,param:{suffix:" k"}},editor:oe}},w="Grid.ValueFormatter.",ae=Object.keys(_).map(e=>e.replace(w,"")),R="Grid.ValueFormatter",ne={type:R,param:{formatterDescriptors:[]}},ie=({param:e={formatterDescriptors:[]},onParamChange:t})=>{const n=a(E,{onClick:r=>{const l=w+r.key;t==null||t({formatterDescriptors:[...e.formatterDescriptors,_[l].defaultKey]})},children:ae.map(r=>a(E.Item,{disabled:e.formatterDescriptors.some(l=>l.type===w+r),children:r},r))}),i=e.formatterDescriptors.map(r=>{const l=r.type,s=p=>{t==null||t({formatterDescriptors:e.formatterDescriptors.map(d=>d.type===l?f(m({},d),{param:p}):d)})};return c("div",{className:"GridEditor-FormatterRenderer",children:[a(D,{"aria-label":"remove formatter",icon:"x",onClick:()=>t==null?void 0:t({formatterDescriptors:e.formatterDescriptors.filter(p=>p.type!==l)})}),h.exports.createElement(_[l].editor,{param:r.param,onParamChange:s})]},l)});return c("div",{children:[c("div",{children:["Value Formatter",a(G,{overlay:n,children:a(D,{icon:"+"})})]}),i]})};const g="Grid.HeaderName",le={type:g,param:{headerName:"Header Name"}},ce=e=>{var t;return a("div",{children:c("label",{children:["Header name",a("input",{value:(t=e.param)==null?void 0:t.headerName,onChange:o=>{var n;return(n=e.onParamChange)==null?void 0:n.call(e,{headerName:o.currentTarget.value})}})]})})},b="Grid.Sortable",de={type:b,param:{sortable:!0}},se=e=>{var t;return a("div",{children:c("label",{children:["Sortable",a(X,{checked:(t=e.param)==null?void 0:t.sortable,onChange:o=>{var n;return(n=e.onParamChange)==null?void 0:n.call(e,{sortable:o})}})]})})},A={[v]:{defaultDescriptor:B,editor:ee},[R]:{defaultDescriptor:ne,editor:ie},[g]:{defaultDescriptor:le,editor:ce},[b]:{defaultDescriptor:de,editor:se}},ue=({colDescriptors:e,setColDescriptors:t})=>{const o=()=>{t(r=>[...r,[B]])},n=r=>{t(l=>{const s=l.slice();return s.splice(r,1),s})},i=e.map((r,l)=>{const p=a(E,{onClick:d=>{const u=d.key;t(F=>F.map((y,x)=>x===l&&!y.some(O=>O.type===u)?[...y,A[u].defaultDescriptor]:y))},children:Object.keys(A).map(d=>a(E.Item,{disabled:r.some(u=>u.type===d),children:d},d))});return c("div",{className:"ColDefEditor-Column",children:[c("div",{className:"ColDefEditor-ColumnHeader",children:[c("div",{children:["Column ",l+1]}),a(D,{icon:"x",onClick:()=>n(l)})]}),r.map((d,u)=>{const F=`column-${l}-editor-${u}`,y=O=>{t($=>$.map((S,L)=>L===l?S.map((P,Y)=>Y===u?f(m({},P),{param:O}):P):S))},x=h.exports.createElement(A[d.type].editor,{key:F,param:d.param,onParamChange:y});return c("div",{className:"ColDefEditor-ColumnRow",children:[a(D,{icon:"x"})," ",x]})}),a(G,{overlay:p,children:a(D,{children:"Add +"})})]},l)});return c("div",{children:[a(D,{onClick:o,children:"New Column"}),a("div",{className:"ColDefEditor-Columns",children:i})]})};const me=[{make:"Toyota",model:"Celica",price:35e3},{make:"Ford",model:"Mondeo",price:32e3},{make:"Porsche",model:"Boxter",price:72e3}],fe=e=>{const[t,o]=h.exports.useState('[{"make":"Toyota","model":"Celica","price":35000},{"make":"Ford","model":"Mondeo","price":32000},{"make":"Porsche","model":"Boxter","price":72000}]'),[n,i]=h.exports.useState(me);return h.exports.useEffect(()=>{var l;(l=e.onDataChanged)==null||l.call(e,n)},[]),c("label",{className:"DataInput",children:["Input data JSON ",n===null?"ERROR":"OK",a("br",{}),a("textarea",{value:t,onChange:l=>{var p,d;const s=l.currentTarget.value;o(s);try{const u=JSON.parse(s);i(u),(p=e.onDataChanged)==null||p.call(e,u)}catch(u){console.error(u),i(null),(d=e.onDataChanged)==null||d.call(e,null)}},className:"DataInput-textarea"})]})};const pe=(e,t)=>f(m({},e),{field:t.field}),he=e=>t=>Number.parseFloat(t).toFixed(e.dp),ve=()=>e=>Number.parseFloat(e)/1e3,De=e=>t=>t.toString()+e.suffix,ye={[C]:{converter:ve},[T]:{converter:he},[N]:{converter:De}},Ee=(e,{formatterDescriptors:t})=>{const o=n=>{let i=n;for(let r=0;r<t.length;r++){const l=t[r].type;i=ye[l].converter(t[r].param)(i)}return i};return f(m({},e),{valueFormatter:n=>o(n.value)})},Ce=(e,t)=>f(m({},e),{headerName:t.headerName}),Te=(e,t)=>f(m({},e),{sortable:t.sortable}),Ne={[v]:{composer:pe},[R]:{composer:Ee},[g]:{composer:Ce},[b]:{composer:Te}},Re=e=>{var o;const t=(o=e.colDescriptors)==null?void 0:o.map((n,i)=>{let r={};return n.map(l=>{r=Ne[l.type].composer(r,l.param)}),r});return a("div",{className:"ag-theme-alpine",style:{flex:1},children:a(q,{columnDefs:t,rowData:e.rowData,reactUi:!0})})},ge=e=>t=>Number.parseFloat(t).toFixed(e.dp),be=()=>e=>Number.parseFloat(e)/1e3,Fe=e=>t=>t.toString()+e.suffix,xe={[C]:{converter:be},[T]:{converter:ge},[N]:{converter:Fe}},Oe=(e,t)=>f(m({},e),{title:t.field,dataIndex:t.field}),_e=(e,{formatterDescriptors:t})=>{const o=n=>{let i=n;for(let r=0;r<t.length;r++){const l=t[r].type;i=xe[l].converter(t[r].param)(i)}return i};return f(m({},e),{render:n=>o(n)})},we=(e,t)=>f(m({},e),{title:t.headerName}),Ae=(e,t)=>(console.warn("Unsupported sortable"),e),Se={[v]:{composer:Oe},[R]:{composer:_e},[g]:{composer:we},[b]:{composer:Ae}},Pe=e=>{var o;const t=(o=e.colDescriptors)==null?void 0:o.map((n,i)=>{let r={};return n.map(l=>{r=Se[l.type].composer(r,l.param)}),r});return a("div",{style:{flex:1},children:a(V,{columns:t,dataSource:(e.rowData||[]).map((n,i)=>f(m({},n),{key:i}))})})},Ie=[[{type:v,param:{field:"make"}}],[{type:v,param:{field:"model"}}],[{type:v,param:{field:"price"}}]],k=["ag-grid","antd table"];function Me(){const[e,t]=h.exports.useState([]),[o,n]=h.exports.useState(Ie),[i,r]=h.exports.useState(k[0]);return c("div",{className:"App",children:[c("div",{className:"LeftColumn",children:[a("div",{className:"LeftColumn-TopPanel",children:a(ue,{colDescriptors:o,setColDescriptors:n})}),a("div",{className:"LeftColumn-BottomPanel",children:a(fe,{onDataChanged:t})})]}),c("div",{className:"RightColumn",children:[a("div",{className:"RightColumn-TopPanel",children:i==="ag-grid"?a(Re,{rowData:e,colDescriptors:o}):a(Pe,{rowData:e,colDescriptors:o})}),c("div",{className:"RightColumn-BottomPanel",children:[a(z.Group,{"aria-label":"grid preview",options:k,onChange:s=>r(s.target.value),value:i}),a("div",{children:JSON.stringify(o)})]})]})]})}Q.render(a(W.StrictMode,{children:a(Me,{})}),document.getElementById("root"));
