(window.webpackJsonp_gutenpride=window.webpackJsonp_gutenpride||[]).push([[1],{5:function(e,t,n){}}]),function(e){function t(t){for(var o,l,a=t[0],c=t[1],u=t[2],d=0,s=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&s.push(r[l][0]),r[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(p&&p(t);s.length;)s.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={0:0},i=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackJsonp_gutenpride=window.webpackJsonp_gutenpride||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var p=c;i.push([6,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.blocks},,function(e,t,n){"use strict";n.r(t);var o=n(4),r=(n(5),n(0)),i=n(1),l=n(3),a=n(2);Object(o.registerBlockType)("create-block/gutenpride",{apiVersion:2,attributes:{heading:{type:"string"},text:{type:"string"},component:{type:"string"},customLoadingText:{type:"boolean"},loading:{type:"string"}},edit:function({attributes:e,setAttributes:t,isSelected:n}){return Object(r.createElement)("div",Object(l.useBlockProps)(),Object(r.createElement)(a.Placeholder,{label:Object(i.__)("Self-service component","gutenpride"),isColumnLayout:!0},Object(r.createElement)(a.SelectControl,{label:Object(i.__)("Select component","gutenpride"),value:e.component,options:[{label:"Address Selector",value:"addressSelector"},{label:"Billing",value:"billing"},{label:"Consumption",value:"consumption"}],onChange:e=>t({component:e})}),Object(r.createElement)(a.TextControl,{label:Object(i.__)("Heading","gutenpride"),value:e.heading,onChange:e=>t({heading:e})}),Object(r.createElement)(a.TextControl,{label:Object(i.__)("Text","gutenpride"),value:e.text,onChange:e=>t({text:e})}),Object(r.createElement)(a.ToggleControl,{label:Object(i.__)("Custom loading text","gutenpride"),checked:e.customLoadingText,onChange:e=>t({customLoadingText:e})}),e.customLoadingText?Object(r.createElement)(a.TextControl,{label:Object(i.__)("Loading text","gutenpride"),value:e.loading,onChange:e=>t({loading:e})}):null))},save:function({attributes:e}){return Object(r.createElement)("div",l.useBlockProps.save(),Object(r.createElement)("div",{class:"b2c-component",id:e.component,"data-component-id":e.component,"data-heading":e.heading,"data-text":e.text},e.customLoadingText&&e.loading?e.loading:"Loading..."))}})}]);