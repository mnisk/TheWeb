(()=>{var e=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,o;return n=e,(o=[{key:"init",value:function(){$("#social_login_enable").on("change",(function(e){$(e.currentTarget).prop("checked")?$(".wrapper-list-social-login-options").show():$(".wrapper-list-social-login-options").hide()})),$(".enable-social-login-option").on("change",(function(e){var n=$(e.currentTarget);n.prop("checked")?(n.closest(".wrapper-content").find(".enable-social-login-option-wrapper").show(),n.closest(".form-group").removeClass("mb-0")):(n.closest(".wrapper-content").find(".enable-social-login-option-wrapper").hide(),n.closest(".form-group").addClass("mb-0"))}))}}])&&function(e,n){for(var o=0;o<n.length;o++){var r=n[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),e}();$(document).ready((function(){(new e).init()}))})();