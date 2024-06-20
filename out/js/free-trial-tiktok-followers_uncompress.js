// jQuery Mask Plugin v1.14.16
// github.com/igorescobar/jQuery-Mask-Plugin
var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,n,f){a instanceof String&&(a=String(a));for(var p=a.length,k=0;k<p;k++){var b=a[k];if(n.call(f,b,k,a))return{i:k,v:b}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,n,f){a!=Array.prototype&&a!=Object.prototype&&(a[n]=f.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,n,f,p){if(n){f=$jscomp.global;a=a.split(".");for(p=0;p<a.length-1;p++){var k=a[p];k in f||(f[k]={});f=f[k]}a=a[a.length-1];p=f[a];n=n(p);n!=p&&null!=n&&$jscomp.defineProperty(f,a,{configurable:!0,writable:!0,value:n})}};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,f){return $jscomp.findInternal(this,a,f).v}},"es6","es3");
(function(a,n,f){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports&&"undefined"===typeof Meteor?module.exports=a(require("jquery")):a(n||f)})(function(a){var n=function(b,d,e){var c={invalid:[],getCaret:function(){try{var a=0,r=b.get(0),h=document.selection,d=r.selectionStart;if(h&&-1===navigator.appVersion.indexOf("MSIE 10")){var e=h.createRange();e.moveStart("character",-c.val().length);a=e.text.length}else if(d||"0"===d)a=d;return a}catch(C){}},setCaret:function(a){try{if(b.is(":focus")){var c=
b.get(0);if(c.setSelectionRange)c.setSelectionRange(a,a);else{var g=c.createTextRange();g.collapse(!0);g.moveEnd("character",a);g.moveStart("character",a);g.select()}}}catch(B){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val());b.data("mask-previus-caret-pos",c.getCaret());c.maskDigitPosMapOld=c.maskDigitPosMap}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",c.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},
100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){f===c.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){f=c.val()}).on("focus.mask",function(b){!0===e.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){e.clearIfNotMatch&&!k.test(c.val())&&c.val("")})},getRegexMask:function(){for(var a=[],b,c,e,t,f=0;f<d.length;f++)(b=l.translation[d.charAt(f)])?(c=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),e=b.optional,
(b=b.recursive)?(a.push(d.charAt(f)),t={digit:d.charAt(f),pattern:c}):a.push(e||b?c+"?":c)):a.push(d.charAt(f).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");t&&(a=a.replace(new RegExp("("+t.digit+"(.*"+t.digit+")?)"),"($1)?").replace(new RegExp(t.digit,"g"),t.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";if(0<arguments.length){if(b[c]()!==a)b[c](a);
c=b}else c=b[c]();return c},calculateCaretPosition:function(a){var d=c.getMasked(),h=c.getCaret();if(a!==d){var e=b.data("mask-previus-caret-pos")||0;d=d.length;var g=a.length,f=a=0,l=0,k=0,m;for(m=h;m<d&&c.maskDigitPosMap[m];m++)f++;for(m=h-1;0<=m&&c.maskDigitPosMap[m];m--)a++;for(m=h-1;0<=m;m--)c.maskDigitPosMap[m]&&l++;for(m=e-1;0<=m;m--)c.maskDigitPosMapOld[m]&&k++;h>g?h=10*d:e>=h&&e!==g?c.maskDigitPosMapOld[h]||(e=h,h=h-(k-l)-a,c.maskDigitPosMap[h]&&(h=e)):h>e&&(h=h+(l-k)+f)}return h},behaviour:function(d){d=
d||window.event;c.invalid=[];var e=b.data("mask-keycode");if(-1===a.inArray(e,l.byPassKeys)){e=c.getMasked();var h=c.getCaret(),g=b.data("mask-previus-value")||"";setTimeout(function(){c.setCaret(c.calculateCaretPosition(g))},a.jMaskGlobals.keyStrokeCompensation);c.val(e);c.setCaret(h);return c.callbacks(d)}},getMasked:function(a,b){var h=[],f=void 0===b?c.val():b+"",g=0,k=d.length,n=0,p=f.length,m=1,r="push",u=-1,w=0;b=[];if(e.reverse){r="unshift";m=-1;var x=0;g=k-1;n=p-1;var A=function(){return-1<
g&&-1<n}}else x=k-1,A=function(){return g<k&&n<p};for(var z;A();){var y=d.charAt(g),v=f.charAt(n),q=l.translation[y];if(q)v.match(q.pattern)?(h[r](v),q.recursive&&(-1===u?u=g:g===x&&g!==u&&(g=u-m),x===u&&(g-=m)),g+=m):v===z?(w--,z=void 0):q.optional?(g+=m,n-=m):q.fallback?(h[r](q.fallback),g+=m,n-=m):c.invalid.push({p:n,v:v,e:q.pattern}),n+=m;else{if(!a)h[r](y);v===y?(b.push(n),n+=m):(z=y,b.push(n+w),w++);g+=m}}a=d.charAt(x);k!==p+1||l.translation[a]||h.push(a);h=h.join("");c.mapMaskdigitPositions(h,
b,p);return h},mapMaskdigitPositions:function(a,b,d){a=e.reverse?a.length-d:0;c.maskDigitPosMap={};for(d=0;d<b.length;d++)c.maskDigitPosMap[b[d]+a]=1},callbacks:function(a){var g=c.val(),h=g!==f,k=[g,a,b,e],l=function(a,b,c){"function"===typeof e[a]&&b&&e[a].apply(this,c)};l("onChange",!0===h,k);l("onKeyPress",!0===h,k);l("onComplete",g.length===d.length,k);l("onInvalid",0<c.invalid.length,[g,a,b,c.invalid,e])}};b=a(b);var l=this,f=c.val(),k;d="function"===typeof d?d(c.val(),void 0,b,e):d;l.mask=
d;l.options=e;l.remove=function(){var a=c.getCaret();l.options.placeholder&&b.removeAttr("placeholder");b.data("mask-maxlength")&&b.removeAttr("maxlength");c.destroyEvents();c.val(l.getCleanVal());c.setCaret(a);return b};l.getCleanVal=function(){return c.getMasked(!0)};l.getMaskedVal=function(a){return c.getMasked(!1,a)};l.init=function(g){g=g||!1;e=e||{};l.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;l.byPassKeys=a.jMaskGlobals.byPassKeys;l.translation=a.extend({},a.jMaskGlobals.translation,e.translation);
l=a.extend(!0,{},l,e);k=c.getRegexMask();if(g)c.events(),c.val(c.getMasked());else{e.placeholder&&b.attr("placeholder",e.placeholder);b.data("mask")&&b.attr("autocomplete","off");g=0;for(var f=!0;g<d.length;g++){var h=l.translation[d.charAt(g)];if(h&&h.recursive){f=!1;break}}f&&b.attr("maxlength",d.length).data("mask-maxlength",!0);c.destroyEvents();c.events();g=c.getCaret();c.val(c.getMasked());c.setCaret(g)}};l.init(!b.is("input"))};a.maskWatchers={};var f=function(){var b=a(this),d={},e=b.attr("data-mask");
b.attr("data-mask-reverse")&&(d.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(d.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(d.selectOnFocus=!0);if(p(b,e,d))return b.data("mask",new n(this,e,d))},p=function(b,d,e){e=e||{};var c=a(b).data("mask"),f=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof d&&(d=d(b)),"object"!==typeof c||f(c.options)!==f(e)||c.mask!==d}catch(w){}},k=function(a){var b=document.createElement("div");a="on"+a;var e=a in b;e||(b.setAttribute(a,
"return;"),e="function"===typeof b[a]);return e};a.fn.mask=function(b,d){d=d||{};var e=this.selector,c=a.jMaskGlobals,f=c.watchInterval;c=d.watchInputs||c.watchInputs;var k=function(){if(p(this,b,d))return a(this).data("mask",new n(this,b,d))};a(this).each(k);e&&""!==e&&c&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(k)},f));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);
delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(f)};k={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&
k("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};k=a.jMaskGlobals=a.extend(!0,{},k,a.jMaskGlobals);k.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},k.watchInterval)},window.jQuery,window.Zepto);


var SPMaskBehavior = function (val) {
  return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
},
spOptions = {
  onKeyPress: function(val, e, field, options) {
      field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
};

$(document).ready(function(){
  $('.phone').mask(SPMaskBehavior, spOptions);
});

/* Free Trial Form */

jQuery("#tt-followers-free-trial-form").submit(function(event){
    
    var request;
    event.preventDefault();

    if (request) {
        request.abort();
    }

    var $form = jQuery(this);

    var username = $form.find('input#username').val();
    var email = $form.find('input#email').val();
    var phone = $form.find('input#phone').val();
    var name = $form.find('input#name').val();

    var already_done = getCookie('free-trial-tiktok-followers');

    if ( already_done == 'done'){
        
        Swal.fire({
          title: 'Você já testou nossos serviços 🥰',
          html: "<strong>No ImpulsioneGram você pode comprar seguidores para o seu TikTok de forma fácil, rápida, segura e garantida. Confira:</strong>",
          icon: 'error',
          showCancelButton: true,
          confirmButtonColor: '#fc591e',
          cancelButtonColor: '#a5a5a5',
          confirmButtonText: 'Comprar Seguidores Agora',
          cancelButtonText: 'Cancelar',
          backdrop: `rgba(0,0,123,0.4)`
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = 'https://www.impulsionegram.com.br/comprar-seguidores-tiktok/?utm_source=teste-gratis';
          }
        });

    }else if( empty( username ) ){
        Swal.fire(
          'Digite o Usuário do TikTok',
          '',
          'warning'
        );
    }else if( empty( email ) ){
        Swal.fire(
          'Digite seu E-mail',
          '',
          'warning'
        );
    }else if( !isEmail(email) ){
        Swal.fire(
          'Digite um E-mail válido',
          '',
          'warning'
        );
    }else if( empty( phone ) ){
        Swal.fire(
          'Digite seu DDD + Celular',
          '',
          'warning'
        );
    }else if( empty( name ) ){
        Swal.fire(
          'Digite seu Nome',
          '',
          'warning'
        );
    }else{

        var $inputs = $form.find("input, select, button, textarea");
        $inputs.prop("disabled", true);

        $form.find( 'button span' ).hide();
        $form.find( 'button .loader-free-trial' ).show();

        request = jQuery.ajax({
            url: "https://painel.impulsionegram.com.br/api/free-trial/tt-followers/",
            type: "post",
            data: { 
                username: username,
                email: email,
                phone: phone,
                name: name
            }
        });

        request.done(function (response, textStatus, jqXHR){
            
            const result = JSON.parse(response);

            if( result.status == 'not-found' ){
                Swal.fire(
                  'Não conseguimos encontrar seu perfil 😢',
                  'Certifique-se de ter digitado corretamente. Em caso de dúvidas, entre em contato com o nosso suporte.',
                  'warning'
                );
            }else if( result.status == 'private' ){
                Swal.fire(
                  'Para receber nossos serviços, seu perfil não pode estar como privado.',
                  'Altere para público e tente novamente, combinado?',
                  'warning'
                );
            }else if( result.status == 'restricted' ){
                Swal.fire(
                  'Para receber nossos serviços, seu perfil não pode estar com restrição de idade.',
                  'Retire a restrição e tente novamente, combinado?',
                  'warning'
                );
            }else if( result.status == 'order-exists' ){
                Swal.fire({
                  title: 'Você já testou nossos serviços 🥰',
                  html: "<strong>No ImpulsioneGram você pode comprar seguidores para o seu TikTok de forma fácil, rápida, segura e garantida. Confira:</strong>",
                  icon: 'error',
                  showCancelButton: true,
                  confirmButtonColor: '#fc591e',
                  cancelButtonColor: '#a5a5a5',
                  confirmButtonText: 'Comprar Seguidores Agora',
                  cancelButtonText: 'Cancelar',
                  backdrop: `rgba(0,0,123,0.4)`
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = 'https://www.impulsionegram.com.br/comprar-seguidores-tiktok/?utm_source=teste-gratis';
                  }
                });
            }else if( result.status == 'success' ){
                setCookie('free-trial-followers','done', 365);
                Swal.fire(
                  'Quase lá!',
                  'Enviamos um e-mail com o link para confirmar o envio de seus seguidores grátis! Acesse seu e-mail e clique no botão "Confirmar envio de seguidores".',
                  'success'
                ).then((result) => {
                  if (result.isConfirmed) {
                    $('.listing-packages.home h2.title-before').hide();
                    $('.listing-packages.home h2.title-after').show();
                    
                    setTimeout(() => {
                      const scrollToEl = document.getElementById('pacotes');
                        scrollToEl.scrollIntoView({
                            behavior: 'instant',
                        });
                    }, 500);
                    //window.location.href = 'https://www.impulsionegram.com.br/?utm_source=teste-gratis&utm_medium=redirect';
                  }
                });
            }
            
        });

        request.fail(function (jqXHR, textStatus, errorThrown){
            Swal.fire(
              'Algo deu errado',
              'Tente novamente. Se o erro persistir, entre em contato com o nosso suporte.',
              'warning'
            );
        });

        request.always(function () {
            $inputs.prop("disabled", false);
            $form.find( 'button span' ).show();
            $form.find( 'button .loader-free-trial' ).hide();
        });
    }

});