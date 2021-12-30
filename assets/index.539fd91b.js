var U=Object.defineProperty,X=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var $=(e,t,o)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))q.call(t,o)&&$(e,o,t[o]);if(B)for(var o of B(t))z.call(t,o)&&$(e,o,t[o]);return e},f=(e,t)=>X(e,V(t));import{r as h,j as n,S as L,a as d,I as Q,M as R,B as y,D as Y,b as W,A as Z,T as ee,R as te,c as re,d as oe}from"./vendor.aaedda88.js";const ae=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const r of c)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(c){const r={};return c.integrity&&(r.integrity=c.integrity),c.referrerpolicy&&(r.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?r.credentials="include":c.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(c){if(c.ep)return;c.ep=!0;const r=o(c);fetch(c.href,r)}};ae();const K=h.exports.createContext([]),{Option:ne}=L,D="Grid.Field",H={type:D,param:{field:""}},ie=e=>{var c,r;const t=h.exports.useContext(K),o=(c=e.param)==null?void 0:c.field,i=t.length===0?n("input",{value:(r=e.param)==null?void 0:r.field,onChange:a=>{var l;return(l=e.onParamChange)==null?void 0:l.call(e,{field:a.currentTarget.value})}}):n(L,{value:o||void 0,onChange:a=>{var l;return(l=e.onParamChange)==null?void 0:l.call(e,{field:a})},showSearch:!0,style:{width:100},placeholder:"Search",children:t.map(a=>n(ne,{value:a,children:a},a))});return n("div",{children:d("label",{children:["Field",i]})})},F="Grid.ValueFormatter.DivideByThousand",ce=()=>n("div",{children:"Divide by 1e3"}),x="Grid.ValueFormatter.FixedDecimalPlaces",le=e=>{var t;return n("div",{children:d("label",{children:["Decimal Places",n(Q,{value:(t=e.param)==null?void 0:t.dp,onChange:o=>{var i;return(i=e.onParamChange)==null?void 0:i.call(e,{dp:o})}})]})})},b="Grid.ValueFormatter.SuffixBy",de=e=>{var t;return n("div",{children:d("label",{children:["Suffix",n("input",{value:(t=e.param)==null?void 0:t.suffix,onChange:o=>{var i;return(i=e.onParamChange)==null?void 0:i.call(e,{suffix:o.currentTarget.value})}})]})})},P={[F]:{defaultKey:{type:F},editor:ce},[x]:{defaultKey:{type:x,param:{dp:2}},editor:le},[b]:{defaultKey:{type:b,param:{suffix:" k"}},editor:de}},I="Grid.ValueFormatter.",se=Object.keys(P).map(e=>e.replace(I,"")),w="Grid.ValueFormatter",ue={type:w,param:{formatterDescriptors:[]}},me=({param:e={formatterDescriptors:[]},onParamChange:t})=>{const i=n(R,{onClick:r=>{const a=I+r.key;t==null||t({formatterDescriptors:[...e.formatterDescriptors,P[a].defaultKey]})},children:se.map(r=>n(R.Item,{disabled:e.formatterDescriptors.some(a=>a.type===I+r),children:r},r))}),c=e.formatterDescriptors.map(r=>{const a=r.type,l=u=>{t==null||t({formatterDescriptors:e.formatterDescriptors.map(p=>p.type===a?f(m({},p),{param:u}):p)})};return d("div",{className:"GridEditor-FormatterRenderer",children:[n(y,{"aria-label":"remove formatter",icon:"x",onClick:()=>t==null?void 0:t({formatterDescriptors:e.formatterDescriptors.filter(u=>u.type!==a)})}),h.exports.createElement(P[a].editor,{param:r.param,onParamChange:l})]},a)});return d("div",{children:[d("div",{children:["Value Formatter",n(Y,{overlay:i,children:n(y,{icon:"+"})})]}),c]})};const O="Grid.HeaderName",fe={type:O,param:{headerName:"Custom"}},he=e=>{var t;return n("div",{children:d("label",{children:["Header",n("input",{value:(t=e.param)==null?void 0:t.headerName,onChange:o=>{var i;return(i=e.onParamChange)==null?void 0:i.call(e,{headerName:o.currentTarget.value})}})]})})},S="Grid.Sortable",pe={type:S,param:{sortable:!0}},ve=e=>{var t;return n("div",{children:d("label",{children:["Sortable",n(W,{checked:(t=e.param)==null?void 0:t.sortable,onChange:o=>{var i;return(i=e.onParamChange)==null?void 0:i.call(e,{sortable:o})}})]})})},M={[D]:{defaultDescriptor:H,editor:ie},[w]:{defaultDescriptor:ue,editor:me},[O]:{defaultDescriptor:fe,editor:he},[S]:{defaultDescriptor:pe,editor:ve}},De=({colDescriptors:e,setColDescriptors:t,dataFields:o})=>{const i=()=>{t(a=>[...a,[H]])},c=a=>{t(l=>{const u=l.slice();return u.splice(a,1),u})},r=e.map((a,l)=>{const p=n(R,{onClick:s=>{const v=s.key;t(E=>E.map((C,A)=>A===l&&!C.some(G=>G.type===v)?[...C,M[v].defaultDescriptor]:C))},children:Object.keys(M).map(s=>n(R.Item,{disabled:a.some(v=>v.type===s),children:s},s))});return d("div",{className:"ColDescriptorEditor-Column",children:[d("div",{className:"ColDescriptorEditor-ColumnHeader",children:[d("div",{children:["Column ",l+1]}),n(y,{icon:"x",onClick:()=>c(l)})]}),a.map((s,v)=>{const E=`column-${l}-editor-${v}`,C=_=>{t(T=>T.map((N,g)=>g===l?N.map((k,J)=>J===v?f(m({},k),{param:_}):k):N))},A=h.exports.createElement(M[s.type].editor,{key:E,param:s.param,onParamChange:C});return d("div",{className:"ColDescriptorEditor-ColumnRow",children:[n(y,{icon:"x",onClick:()=>{t(_=>_.map((T,N)=>{if(N===l){const g=T.slice();return g.splice(v,1),g}else return T}))}})," ",A]},`${E}-container`)}),n(Y,{overlay:p,children:n(y,{children:"Add +"})})]},l)});return n(K.Provider,{value:o,children:d("div",{children:[n(y,{onClick:i,children:"New Column"}),n("div",{className:"ColDescriptorEditor-Columns",children:r})]})})};const ye=[{make:"Toyota",model:"Celica",price:35e3},{make:"Ford",model:"Mondeo",price:32e3},{make:"Porsche",model:"Boxter",price:72e3}],Ce=e=>{const[t,o]=h.exports.useState('[{"make":"Toyota","model":"Celica","price":35000},{"make":"Ford","model":"Mondeo","price":32000},{"make":"Porsche","model":"Boxter","price":72000}]'),[i,c]=h.exports.useState(ye);return h.exports.useEffect(()=>{var a;(a=e.onDataChanged)==null||a.call(e,i)},[]),d("label",{className:"DataInput",children:["Input data JSON ",i===null?"ERROR":"OK",n("br",{}),n("textarea",{value:t,onChange:a=>{var u,p;const l=a.currentTarget.value;o(l);try{const s=JSON.parse(l);c(s),(u=e.onDataChanged)==null||u.call(e,s)}catch(s){console.error(s),c(null),(p=e.onDataChanged)==null||p.call(e,null)}},className:"DataInput-textarea"})]})};const Ee=(e,t)=>f(m({},e),{field:t.field}),Te=e=>t=>Number.parseFloat(t).toFixed(e.dp),Ne=()=>e=>Number.parseFloat(e)/1e3,ge=e=>t=>t.toString()+e.suffix,Re={[F]:{converter:Ne},[x]:{converter:Te},[b]:{converter:ge}},Fe=(e,{formatterDescriptors:t})=>{const o=i=>{let c=i;for(let r=0;r<t.length;r++){const a=t[r].type;c=Re[a].converter(t[r].param)(c)}return c};return f(m({},e),{valueFormatter:i=>o(i.value)})},xe=(e,t)=>f(m({},e),{headerName:t.headerName}),be=(e,t)=>f(m({},e),{sortable:t.sortable}),we={[D]:{composer:Ee},[w]:{composer:Fe},[O]:{composer:xe},[S]:{composer:be}},Oe=e=>{var o;const t=(o=e.colDescriptors)==null?void 0:o.map((i,c)=>{let r={};return i.map(a=>{r=we[a.type].composer(r,a.param)}),r});return n("div",{className:"ag-theme-alpine",style:{flex:1},children:n(Z,{columnDefs:t,rowData:e.rowData,reactUi:!0})})},Se=e=>t=>Number.parseFloat(t).toFixed(e.dp),Ae=()=>e=>Number.parseFloat(e)/1e3,_e=e=>t=>t.toString()+e.suffix,Pe={[F]:{converter:Ae},[x]:{converter:Se},[b]:{converter:_e}},Ie=(e,t)=>f(m({},e),{title:t.field,dataIndex:t.field}),Me=(e,{formatterDescriptors:t})=>{const o=i=>{let c=i;for(let r=0;r<t.length;r++){const a=t[r].type;c=Pe[a].converter(t[r].param)(c)}return c};return f(m({},e),{render:i=>o(i)})},Ge=(e,t)=>f(m({},e),{title:t.headerName}),ke=(e,t)=>(console.warn("Unsupported sortable"),e),Be={[D]:{composer:Ie},[w]:{composer:Me},[O]:{composer:Ge},[S]:{composer:ke}},$e=e=>{var o;const t=(o=e.colDescriptors)==null?void 0:o.map((i,c)=>{let r={};return i.map(a=>{r=Be[a.type].composer(r,a.param)}),r});return n("div",{style:{flex:1},children:n(ee,{columns:t,dataSource:(e.rowData||[]).map((i,c)=>f(m({},i),{key:c}))})})},Le=[[{type:D,param:{field:"make"}}],[{type:D,param:{field:"model"}}],[{type:D,param:{field:"price"}}]],j=["ag-grid","antd table"],Ye=e=>{const t=new Set;return e.forEach(o=>{Object.keys(o).forEach(i=>t.add(i))}),Array.from(t)};function Ke(){const[e,t]=h.exports.useState([]),[o,i]=h.exports.useState(Le),[c,r]=h.exports.useState(j[0]),a=h.exports.useMemo(()=>Ye(e||[]),[e]);return d("div",{className:"App",children:[d("div",{className:"LeftColumn",children:[n("div",{className:"LeftColumn-TopPanel",children:n(De,{colDescriptors:o,setColDescriptors:i,dataFields:a})}),n("div",{className:"LeftColumn-BottomPanel",children:n(Ce,{onDataChanged:t})})]}),d("div",{className:"RightColumn",children:[n("div",{className:"RightColumn-TopPanel",children:c==="ag-grid"?n(Oe,{rowData:e,colDescriptors:o}):n($e,{rowData:e,colDescriptors:o})}),d("div",{className:"RightColumn-BottomPanel",children:[n(te.Group,{"aria-label":"grid preview",options:j,onChange:u=>r(u.target.value),value:c}),n("div",{children:JSON.stringify(o)})]})]})]})}re.render(n(oe.StrictMode,{children:n(Ke,{})}),document.getElementById("root"));
