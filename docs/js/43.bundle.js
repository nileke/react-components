(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1061:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),i=a(395),l=a(396),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var m=function(e){var t=e.to,a=e.exact,n=e.strict,o=e.location,c=e.activeClassName,m=e.className,p=e.activeStyle,f=e.style,v=e.isActive,y=e["aria-current"],d=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),b="object"===(void 0===t?"undefined":u(t))?t.pathname:t,N=b&&b.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1");return r.a.createElement(i.a,{path:N,exact:a,strict:n,location:o,children:function(e){var a=e.location,n=e.match,o=!!(v?v(n,a):n);return r.a.createElement(l.a,s({to:t,className:o?[m,c].filter(function(e){return e}).join(" "):m,style:o?s({},f,p):f,"aria-current":o&&y||null},d))}})};m.propTypes={to:l.a.propTypes.to,exact:c.a.bool,strict:c.a.bool,location:c.a.object,activeClassName:c.a.string,className:c.a.string,activeStyle:c.a.object,style:c.a.object,isActive:c.a.func,"aria-current":c.a.oneOf(["page","step","location","date","time","true"])},m.defaultProps={activeClassName:"active","aria-current":"page"};var p=m;t.default=function(){return n.createElement("div",{className:"notfound-container"},n.createElement("div",{className:"content"},n.createElement("div",{className:"header"},"404"),n.createElement("div",{className:"desc"},"Page not found!"),n.createElement("div",{className:"link"},n.createElement(p,{to:"/"},"Return Home"))))}}}]);