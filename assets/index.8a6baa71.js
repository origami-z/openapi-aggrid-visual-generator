var M=Object.defineProperty,B=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var N=(e,t,r)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))k.call(t,r)&&N(e,r,t[r]);if(P)for(var r of P(t))G.call(t,r)&&N(e,r,t[r]);return e},p=(e,t)=>B(e,V(t));import{j as a,a as m,r as h,M as C,B as g,D as A,A as L,R as K,b as Y}from"./vendor.45a64714.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const o of d.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerpolicy&&(d.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?d.credentials="include":n.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(n){if(n.ep)return;n.ep=!0;const d=r(n);fetch(n.href,d)}};j();const O="Grid.ValueFormatter.DivideByThousand",$=()=>e=>Number.parseFloat(e)/1e3,J=()=>a("div",{children:"Divide by 1e3"}),_="Grid.ValueFormatter.FixedDecimalPlaces",U=e=>t=>Number.parseFloat(t).toFixed(e.dp),X=e=>{var t;return a("div",{children:m("label",{children:["Decimal Places",a("input",{value:(t=e.param)==null?void 0:t.dp,type:"number",onChange:r=>{var i;return(i=e.onParamChange)==null?void 0:i.call(e,{dp:Number.parseInt(r.currentTarget.value)})}})]})})},I="Grid.ValueFormatter.SuffixBy",q=e=>t=>t.toString()+e.suffix,H=e=>{var t;return a("div",{children:m("label",{children:["Suffix",a("input",{value:(t=e.param)==null?void 0:t.suffix,onChange:r=>{var i;return(i=e.onParamChange)==null?void 0:i.call(e,{suffix:r.currentTarget.value})}})]})})},F={[O]:{defaultKey:{type:O},editor:J,converter:$},[_]:{defaultKey:{type:_,param:{dp:2}},editor:X,converter:U},[I]:{defaultKey:{type:I,param:{suffix:" k"}},editor:H,converter:q}},T="Grid.ValueFormatter.",z=Object.keys(F).map(e=>e.replace(T,""));const D="Grid.Field",Q=(e,t)=>p(y({},e),{field:t.field}),W={type:D,param:{field:""}},Z=e=>{var t;return a("div",{children:m("label",{children:["Field",a("input",{value:(t=e.param)==null?void 0:t.field,onChange:r=>{var i;return(i=e.onParamChange)==null?void 0:i.call(e,{field:r.currentTarget.value})}})]})})},b="Grid.ValueFormatter",ee=(e,t)=>p(y({},e),{valueFormatter:r=>t.formatter(r.value)}),te={type:b,param:{formatter:e=>e}},re=e=>{const[t,r]=h.exports.useState([]),n=a(C,{onClick:o=>{const l=T+o.key;r(s=>[...s,F[l].defaultKey])},children:z.map(o=>a(C.Item,{disabled:t.some(l=>l.type===T+o),children:o},o))});h.exports.useEffect(()=>{var l;const o=s=>{let u=s;for(let c=0;c<t.length;c++){const f=t[c].type;u=F[f].converter(t[c].param)(u)}return u};(l=e.onParamChange)==null||l.call(e,{formatter:o})},[t]);const d=t.map(o=>{const l=o.type,s=u=>{r(c=>c.map(f=>f.type===l?p(y({},f),{param:u}):f))};return m("div",{className:"GridEditor-FormatterRenderer",children:[a(g,{onClick:()=>r(u=>u.filter(c=>c.type!==l)),children:"X"}),h.exports.createElement(F[l].editor,{param:o.param,onParamChange:s})]},l)});return m("div",{children:[m("div",{children:["Value Formatter",a(A,{overlay:n,children:a(g,{children:"+"})})]}),d]})},E={[D]:{defaultDescriptor:W,editor:Z,composer:Q},[b]:{defaultDescriptor:te,editor:re,composer:ee}},ae=({colDescriptors:e,setColDescriptors:t})=>{const r=e.map((i,n)=>{const o=a(C,{onClick:l=>{const s=l.key;t(u=>u.map((c,f)=>f===n&&!c.some(v=>v.type===s)?[...c,E[s].defaultDescriptor]:c))},children:Object.keys(E).map(l=>a(C.Item,{disabled:i.some(s=>s.type===l),children:l},l))});return m("div",{children:[m("div",{children:["Column ",n+1]}),i.map((l,s)=>{const u=`column-${n}-editor-${s}`,c=f=>{t(v=>v.map((R,S)=>S===n?R.map((x,w)=>w===s?p(y({},x),{param:f}):x):R))};return h.exports.createElement(E[l.type].editor,{key:u,param:l.param,onParamChange:c})}),a(A,{overlay:o,children:a(g,{children:"Add +"})})]},n)});return a("div",{className:"ColDefEditor",children:r})};const ne=[{make:"Toyota",model:"Celica",price:35e3},{make:"Ford",model:"Mondeo",price:32e3},{make:"Porsche",model:"Boxter",price:72e3}],oe=e=>{const[t,r]=h.exports.useState('[{"make":"Toyota","model":"Celica","price":35000},{"make":"Ford","model":"Mondeo","price":32000},{"make":"Porsche","model":"Boxter","price":72000}]'),[i,n]=h.exports.useState(ne);return h.exports.useEffect(()=>{var o;(o=e.onDataChanged)==null||o.call(e,i)},[]),m("label",{className:"DataInput",children:["Input data JSON ",i===null?"ERROR":"OK",a("br",{}),a("textarea",{value:t,onChange:o=>{var s,u;const l=o.currentTarget.value;r(l);try{const c=JSON.parse(l);n(c),(s=e.onDataChanged)==null||s.call(e,c)}catch(c){console.error(c),n(null),(u=e.onDataChanged)==null||u.call(e,null)}},className:"DataInput-textarea"})]})};const le=e=>{var r;const t=(r=e.colDescriptors)==null?void 0:r.map((i,n)=>{let d={};return i.map(o=>{d=E[o.type].composer(d,o.param)}),d});return a("div",{className:"ag-theme-alpine",style:{height:400,width:600},children:a(L,{columnDefs:t,rowData:e.rowData,reactUi:!0})})},ie=[[{type:D,param:{field:"make"}}],[{type:D,param:{field:"model"}}],[{type:D,param:{field:"price"}}]];function de(){const[e,t]=h.exports.useState([]),[r,i]=h.exports.useState(ie);return m("div",{className:"App",children:[m("div",{className:"LeftColumn",children:[a("div",{className:"LeftColumn-TopPanel",children:a(ae,{colDescriptors:r,setColDescriptors:i})}),a("div",{className:"LeftColumn-BottomPanel",children:a(oe,{onDataChanged:t})})]}),a("div",{className:"RightColumn",children:a(le,{rowData:e,colDescriptors:r})})]})}K.render(a(Y.StrictMode,{children:a(de,{})}),document.getElementById("root"));
