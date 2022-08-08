import t,{createContext as n,useRef as e,useContext as r,useState as i,useCallback as o,useEffect as a,useMemo as c}from"react";var u=function(){return u=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},u.apply(this,arguments)},l=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var e=t.reduce((function(t,n){return"object"==typeof n&&Object.keys(n).forEach((function(e){t[e]=n[e]})),t}),{});return e},s=function(){function t(){this.____callbacks=[],this.____callbacks=[]}return t.prototype.on=function(t,n,e){var r=this;void 0===e&&(e=!1);var i=t.split(" ");if(i.length>1)i.forEach((function(t){r.on(t,n,e)}));else{void 0===this.____callbacks[t]&&(this.____callbacks[t]=[]);var o=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if("function"==typeof n){n.apply(this,e);var i=this.____callbacks[t].indexOf(o);i>-1&&this.____callbacks[t].splice(i,1)}};this.____callbacks[t].push(e?o:n)}return this},t.prototype.one=function(t,n){this.on(t,n,!0)},t.prototype.off=function(t,n){var e=this,r=t.split(" ");if(r.length>1)r.forEach((function(t){e.off(t,n)}));else if(void 0!==this.____callbacks[t])if(void 0!==n){var i=this.____callbacks[t].indexOf(n);i>-1&&this.____callbacks[t].splice(i,1)}else this.____callbacks[t]=[];return this},t.prototype.trigger=function(){for(var n=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(e.length>0){var i;if("object"==typeof e[0]){var o=e[0].type,a=e[0];e[0]instanceof Array&&(o=e[0][0],a=e[0][1]),(i=t.CustomEvent(o,{bubbles:!1,cancelable:!1})).originalEvent=a}else(i=t.CustomEvent(e[0],{bubbles:!1,cancelable:!1})).originalEvent=null;void 0!==this.____callbacks[i.type]&&(e.shift(),e.unshift(i),this.____callbacks[i.type].forEach((function(t){t.apply(n,e)})))}return this},t.CustomEvent=function(t,n){if(void 0===n&&(n={}),n=l({bubbles:!1,cancelable:!1,detail:void 0},n),"undefined"!=typeof window){if("function"==typeof window.CustomEvent)return new window.CustomEvent(t,n);var e=function(n,e){void 0===e&&(e={});var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),r};return e.prototype=window.Event.prototype,e(0,n)}return l({type:t,originalEvent:null},n)},t}(),f=new s,v=n(null),h=function(n){var r=n.flagsmith,i=n.options,o=n.serverState,a=n.children,c=e(!0);return o&&!r.initialised&&r.setState(o),c.current&&(c.current=!1,i?r.init(u(u({},i),{onChange:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];i.onChange&&i.onChange.apply(i,t),f.trigger("event")}})):r.trigger=function(){return f.trigger("event")}),t.createElement(v.Provider,{value:r},a)},_=function(t){var n=e(t);return n.current||(n.current=t),n.current},p=function(t){if("string"==typeof t)return[t];if("object"==typeof t&&t.hasOwnProperty("length"))return t;throw new Error("Flagsmith: please supply an array of strings or a single string of flag keys to useFlags")},g=function(t,n,e){return void 0===e&&(e=[]),n.map((function(n){return"".concat(t.getValue(n)).concat(t.hasFeature(n))})).concat(e.map((function(n){return"".concat(t.getTrait(n))}))).join(",")};function b(t,n){void 0===n&&(n=[]);var u=_(p(t)),l=_(p(n)),s=r(v),h=i(g(s,u)),b=h[0],d=h[1],y=e(b),m=o((function(){var t=g(s,u,l);t!==y.current&&(y.current=t,d(t))}),[]);return a((function(){return f.on("event",m),function(){f.off("event",m)}}),[]),c((function(){var t={};return u.map((function(n){t[n]={enabled:s.hasFeature(n),value:s.getValue(n)}})).concat(null==l?void 0:l.map((function(n){t[n]=s.getTrait(n)}))),t}),[b])}var d=function(){var t=r(v);if(!t)throw new Error("useFlagsmith must be used with in a FlagsmithProvider");return t};export{v as FlagsmithContext,h as FlagsmithProvider,b as useFlags,d as useFlagsmith};
//# sourceMappingURL=index.js.map
