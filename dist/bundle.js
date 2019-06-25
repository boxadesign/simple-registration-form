!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:o)?e.call():n.push(e)};var n=[],o=!1;document.addEventListener("DOMContentLoaded",function e(){o=!0,n.forEach(function(e){return e.call()}),document.removeEventListener("DOMContentLoaded",e)})},function(e,t,r){"use strict";r(2),r(0),r(3)},function(e,t,r){},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o,a,u,i=(n=r(0))&&n.__esModule?n:{default:n};function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(t){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.formContainer=t,this.form=this.formContainer.querySelector(".form"),this.inputs=c(this.form.querySelectorAll(".input")),this.form.addEventListener("submit",function(e){r.validateInputs(e),r.logOutData()})}var t,r,n;return t=e,(r=[{key:"validateInputs",value:function(e){var t=this;e.preventDefault(),this.inputs.forEach(function(e){t.checkInput(e),t.validateInput(e,o,a)})}},{key:"validateInput",value:function(e,t,r){this.testInput(t,e),!1===u?(this.removeError(e),this.createError(e,r)):this.removeError(e)}},{key:"checkInput",value:function(e){return"name"===e.name?(o=/^((?=.{1,20}$)[^0-9]*)$/,a="Name can only contain letters and a maximum of 20 characters."):"email"===e.name?(o=/(.+)@(.+){2,}\.(.+){2,}/,a="You must enter a valid email address."):"password"===e.name?(o=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,a="Your password must contain at least one upper character, one lower character and a number. It must be at least eight characters long."):"confirm-password"===e.name&&(this.checkPasswordsMatch(e),o=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,a="Your passwords do not match"),a}},{key:"checkPasswordsMatch",value:function(e){var t=document.getElementsByName("password")[0],r=document.getElementsByName("confirm-password")[0];t.value!==r.value?(this.removeError(e),this.createError(e,a)):this.removeError(e)}},{key:"testInput",value:function(e,t){return u=e.test(t.value)}},{key:"createError",value:function(e,t){var r=document.createElement("div");r.setAttribute("class","invalid-feedback"),r.style.display="block",r.innerText=t,e.parentNode.insertBefore(r,e.nextSibling)}},{key:"removeError",value:function(e){var t=e.parentNode.querySelector(".invalid-feedback");e.parentNode.contains(t)&&e.parentNode.removeChild(t)}},{key:"logOutData",value:function(){var e=new FormData(this.form).entries(),t=!0,r=!1,n=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var u=o.value;console.log(u[0]+": "+u[1])}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}}])&&l(t.prototype,r),n&&l(t,n),e}();t.default=s,(0,i.default)(function(){c(document.querySelectorAll(".js-form")).map(function(e){return new s(e)})})}]);