'use strict'
$(document).ready(function() {

    AOS.init();
    window.addEventListener('load', AOS.refresh);

    $('#carouselTestimonials').carousel();

    if(window.location.hash == "#checkout-form" || window.location.hash == "#checkout") {
      window.location.hash = "#!";
    }
    
    // UTM TRACKING
    /*



    ?ig_username=rokt.digital&name=Rodrigo+Babos&email=rodrigoresende.rpa@gmail.com&phone=31995076651&cpf=11398527602


    */


    let referrer_domain = document.referrer.split('/')[2];
    let params = (new URL(document.location)).searchParams;

    if( referrer_domain == 'portogente.com.br' ){
        var utm_source = 'portogente';
        var utm_medium = 'portal';
        var utm_campaign = 'ranking';
    }else{
        var utm_source = params.get('utm_source');
        var utm_medium = params.get('utm_medium');
        var utm_campaign = params.get('utm_campaign');
    }

    function buildUtmUrl( checkoutUrl ){
        
        var checkoutUrl = new URL(checkoutUrl);
        var checkoutUrlParams = new URLSearchParams(checkoutUrl.search);

        checkoutUrlParams.delete('aero-add-to-checkout');
        if( utm_source ){
            checkoutUrlParams.set('utm_source', utm_source);
        }
        if( utm_medium ){
            checkoutUrlParams.set('utm_medium', utm_medium);
        }
        if( utm_campaign ){
            checkoutUrlParams.set('utm_campaign', utm_campaign);
        }

        var ig_username = params.get('ig_username');
        if( ig_username ){
            $(".checkout-popup .order-form input#username").val( ig_username );
        }

        if( utm_source || utm_medium || utm_campaign || ig_username ){
            var checkoutUrl = checkoutUrl + '&' + checkoutUrlParams.toString();
        }

        return checkoutUrl;


    }

    

    // Update Checkout Links
    $('.btn-checkout').each(function(index, element) {
        $(this).attr("data-monthly-daily-link-woo", buildUtmUrl($(this).attr("data-monthly-daily-link-woo")) );
        $(this).attr("data-monthly-instant-link-woo", buildUtmUrl($(this).attr("data-monthly-instant-link-woo")) );
        $(this).attr("data-yearly-daily-link-woo", buildUtmUrl($(this).attr("data-yearly-daily-link-woo")) );
        $(this).attr("data-yearly-instant-link-woo", buildUtmUrl($(this).attr("data-yearly-instant-link-woo")) );
        $(this).attr("data-monthly-daily-link-monetizze", buildUtmUrl($(this).attr("data-monthly-daily-link-monetizze")) );
        $(this).attr("data-monthly-instant-link-monetizze", buildUtmUrl($(this).attr("data-monthly-instant-link-monetizze")) );
        $(this).attr("data-yearly-daily-link-monetizze", buildUtmUrl($(this).attr("data-yearly-daily-link-monetizze")) );
        $(this).attr("data-yearly-instant-link-monetizze", buildUtmUrl($(this).attr("data-yearly-instant-link-monetizze")) );
    });



    $("[data-pricing-trigger]").on("click", function(e) {
        $(e.target).toggleClass("active");
        var target = $(e.target).attr("data-target");
        if ($(target).attr("data-value-active") == "monthly") {
            $(target).attr("data-value-active", "yearly");
            $('.btn-checkout').each(function(index, element) {
                $(element).attr("data-active-period", 'yearly');
            });
        } else {
            $(target).attr("data-value-active", "monthly");
            $('.btn-checkout').each(function(index, element) {
                $(element).attr("data-active-period", 'monthly');
            });
        }
    });

    // Checkout Popup Delivery Options
    $(".btn-checkout").on('click', function(event) {
        var period = $(this).attr('data-active-period');

        var daily_btn_link_woo = $(this).attr('data-' + period + '-daily-link-woo');
        var daily_btn_link_monetizze = $(this).attr('data-' + period + '-daily-link-monetizze');
        var instant_btn_link_woo = $(this).attr('data-' + period + '-instant-link-woo');
        var instant_btn_link_monetizze = $(this).attr('data-' + period + '-instant-link-monetizze');

        $('#daily-btn-link').attr('data-link-woo', daily_btn_link_woo);
        $('#daily-btn-link').attr('data-link-monetizze', daily_btn_link_monetizze);
        $('#instant-btn-link').attr('data-link-woo', instant_btn_link_woo);
        $('#instant-btn-link').attr('data-link-monetizze', instant_btn_link_monetizze);
    });

    $(".daily-btn-link, .instant-btn-link").on('click', function(event) {
        var woo_checkout_link = $(this).attr('data-link-woo');
        var monetizze_checkout_link = $(this).attr('data-link-monetizze');

        

        let monetizze_url = (new URL(monetizze_checkout_link)).searchParams;
        var monetizze_url_params = new URLSearchParams(monetizze_url.search);


        console.log(monetizze_url_params);
        
        monetizze_url_params.delete('src');

        var ig_username = params.get('ig_username');
        if( ig_username ){
            //$(".checkout-popup .order-form input#username").val( ig_username );
            //checkoutUrlParams.set( 'ig_username', ig_username );
            //monetizze_url_params.set( 'src', ig_username );
        }

        var name = params.get('name');
        if( name ){
            monetizze_url_params.set( 'nome', name );
        }

        var email = params.get('email');
        if( email ){
            monetizze_url_params.set( 'email', email );
        }

        var phone = params.get('phone');
        if( phone ){
            monetizze_url_params.set( 'telefone', phone );
        }

        var cpf = params.get('cpf');
        if( cpf ){
            monetizze_url_params.set( 'cnpj_cpf', cpf );
        }

        var monetizze_url_final = monetizze_checkout_link + '&' + monetizze_url_params.toString();

        console.log(monetizze_url_final);

        $('#payment-method-pix').attr('href', woo_checkout_link).attr('data-link-checkout', woo_checkout_link);
        //$('#payment-method-credit-card').attr('href', 'https://painel.impulsionegram.com.br/go-checkout/?r=' + btoa(monetizze_checkout_link)).attr('data-link-checkout', monetizze_checkout_link);
        $('#payment-method-credit-card').attr('href', monetizze_url_final).attr('data-link-checkout', monetizze_url_final);
        $('#payment-method-billet').attr('href', woo_checkout_link).attr('data-link-checkout', woo_checkout_link);
    });

    jQuery(".checkout-popup .order-form input#username").on('keypress', function(e) {
        if (e.which == 32){
            return false;
        }
    });


    function userUrlParam( url, param, value ){
        var url = new URL(url);
        var urlParams = new URLSearchParams(url.search);
        urlParams.set(param, value);
        url.search = urlParams.toString();
        var url = url.toString();
        return url;
    }

    /*$(document).on("input",".checkout-popup .order-form input#username", function (e) {
        var ig_username = $(this).val().replace(/@/g, '').toLowerCase();
        if( ig_username.length > 0 ) {
            $(".checkout-popup .order-form .input-username-error").hide();
        }

        $('#payment-method-pix').attr('href',  userUrlParam($('#payment-method-pix').attr('data-link-checkout'), 'ig_username', ig_username) );
        $('#payment-method-credit-card').attr('href', 'https://painel.impulsionegram.com.br/go-checkout/?r=' + btoa(userUrlParam( $('#payment-method-credit-card').attr('data-link-checkout'), 'src', ig_username)) );
        $('#payment-method-billet').attr('href',  userUrlParam( $('#payment-method-billet').attr('data-link-checkout'), 'ig_username', ig_username) );
    });*/

    $(document).on("click","#payment-method-pix,#payment-method-credit-card, #payment-method-billet", function () {

        var ig_username = $(".checkout-popup .order-form input#username").val();

        if( ig_username.replace(/@/g, '').length === 0 || isEmail(ig_username) ) {
            event.preventDefault();
            $(".checkout-popup .order-form .input-username-error").show();
            $(".checkout-popup .order-form input#username").focus();
        }
        
    });



    /*$(".btn-checkout").on('click', function(event) {
        var period = $(this).attr('data-active-period');
        
        if( period == 'monthly'){
            var daily_btn_link = $(this).attr('data-monthly-daily-link');
            var instant_btn_link = $(this).attr('data-monthly-instant-link');
        }else if( period == 'yearly' ){
            var daily_btn_link = $(this).attr('data-yearly-daily-link');
            var instant_btn_link = $(this).attr('data-yearly-instant-link');
        }

        $('#daily-btn-link').attr('href', daily_btn_link);
        $('#instant-btn-link').attr('href', instant_btn_link);
    });*/

    // Add smooth scrolling to all links
    $(".goto").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function() {
            });
        }
    });

  $('.navbar-collapse a').click(function (e) {
    $('.navbar-collapse').collapse('toggle');
  });



  if (document.getElementById("countdown")) {

    var timeInSecs;
    var ticker;

    function startTimer(secs) {
        timeInSecs = parseInt(secs);
        ticker = setInterval( tick, 1000); 
    }

    function tick() {
        var secs = timeInSecs;
        if (secs > 0) {
            timeInSecs--; 
        } else {
            clearInterval(ticker);
            startTimer( 15*60 );
        }

        var mins = Math.floor(secs/60);
        secs %= 60;
        var pretty = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

        document.getElementById("countdown").innerHTML = pretty;
    }

    startTimer( 15*60 );
  }

});


function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function cleanUsernameField(){
    $(".checkout-popup .order-form input#username").val('');
}

function empty(str)
{
    if (typeof str == 'undefined' || !str || str.length === 0 || str === "" || !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g,"") === "")
        return true;
    else
        return false;
}

function setCookie( name, value, days ) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie( name ) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie( name ) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


/* Update IG Username Form */

jQuery("#ig-followers-free-trial-form").submit(function(event){
    
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

    var already_done = getCookie('free-trial-followers');

    if ( already_done == 'done'){
        
        Swal.fire({
          title: 'Você já testou nossos serviços 🥰',
          html: "<strong>No ImpulsioneGram você pode comprar seguidores para o seu Instagram de forma fácil, rápida, segura e garantida. Confira:</strong>",
          icon: 'error',
          showCancelButton: true,
          confirmButtonColor: '#fc591e',
          cancelButtonColor: '#a5a5a5',
          confirmButtonText: 'Comprar Seguidores Agora',
          cancelButtonText: 'Cancelar',
          backdrop: `rgba(0,0,123,0.4)`
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = 'https://www.impulsionegram.com.br/';
          }
        });

    }else if( empty( username ) ){
        Swal.fire(
          'Digite o Usuário do Instagram',
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
            url: "https://painel.impulsionegram.com.br/api/free-trial/ig-followers/",
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
                  html: "<strong>No ImpulsioneGram você pode comprar seguidores para o seu Instagram de forma fácil, rápida, segura e garantida. Confira:</strong>",
                  icon: 'error',
                  showCancelButton: true,
                  confirmButtonColor: '#fc591e',
                  cancelButtonColor: '#a5a5a5',
                  confirmButtonText: 'Comprar Seguidores Agora',
                  cancelButtonText: 'Cancelar',
                  backdrop: `rgba(0,0,123,0.4)`
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = 'https://www.impulsionegram.com.br/';
                  }
                });
            }else if( result.status == 'success' ){
                setCookie('free-trial-followers','done', 365);
                window.location.href = "https://painel.impulsionegram.com.br/api/free-trial/user-login/?user=" + result.user_id + "&token=" + result.token + "&ig_username=" + result.ig_username;

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


function increseNumber() {
    $('.input--amount-control').on('click', function(e) {
        var $button = $(e.target);
        var oldValue = $button.parent('.input--amount-control').find('input').val();
        if ($button.hasClass('amount-inc-btn')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent('.input--amount-control').find('input').val(newVal);
    });
}


increseNumber();



const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const s9 = document.getElementById('s9');
const s91 = document.getElementById('s91');
const s10 = document.getElementById('s10');
const s11 = document.getElementById('s11');
const s12 = document.getElementById('s12');


function scroll(ele) {
    var t = ele.getBoundingClientRect().top <
        window.innerHeight * 0.78
    t ? ele.classList.add('on') : ele.classList.remove('on')
    return t;
}



function PrefixInteger(num, length) {
    return (Array(length).join('0') + num).slice(-length);
}

function flipNum(name, num, length) {
    $(name + " .list").html("");
    var number = PrefixInteger(num, length);
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var list = '';
    var len = String(number).length;
    var str = number.toString();
    var box = $(name);
    for (var j = 0; j < arr.length; j++) {
        list += '<i>' + arr[j] + '</i>';
    }
    $(name + " .list").append(list);
    for (var a = 0; a <= len; a++) {
        var curNum = str.substring(a, a + 1);
        $(name + " .list").eq(a).animate({
            marginTop: -curNum * 26,
        }, "slow");
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {
   
    var _num1 = getRndInteger(1, 20),
        _num2 = getRndInteger(100, 400),
        _num3 = getRndInteger(8666, 8700),
        _time1 = getRndInteger(6, 9) * 6000,
        _time2 = getRndInteger(6, 9) * 4000,
        _time3 = getRndInteger(1, 2) * 1000;

    if (_num1 >= 100) {
        _num1 = getRndInteger(1, 20);
    }

    if (_num2 >= 1000) {
        _num2 = getRndInteger(100, 400);
    }

    if (_num3 >= 9999) {
        _num3 = getRndInteger(8666, 8700);
    }
    flipNum("#numroll1", 86, 2);
    flipNum("#numroll2", 298, 3);
    flipNum("#numroll3", _num3, 4);

    setInterval(function() {
        _num3++;
        flipNum("#numroll3", _num3, 4);
    }, _time3);

});

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}


jQuery(document).ready(function($) {

    $('body').append('<div id="js--socialproof-wrapper"></div>');
    var data_array              = js_socialproof_vars.popup_data,
        data_settings           = js_socialproof_vars.settings.js_socialproof_position,
        popup_position_class    = 'js--socialproof-popup__'+js_socialproof_vars.settings.js_socialproof_position,
        popup_animation_class   = js_socialproof_vars.settings.js_socialproof_opening_animation,
        popup_start             = js_socialproof_vars.settings.js_socialproof_popup_start,
        popup_interval          = js_socialproof_vars.settings.js_socialproof_popup_interval,
        popup_gone_interval     = js_socialproof_vars.settings.js_socialproof_popup_gone_interval*1000,
        popup_style_type_class  = 'js--socialproof-'+js_socialproof_vars.settings.js_socialproof_style_type,
        popup_text              = js_socialproof_vars.settings.js_socialproof_popup_text;


    setTimeout(function(){
        if ( data_array !== 0 ) {
            $.each( data_array, function(k,v) {
                var visitors    = between(160, 320);
                var signups    = between(800, 1300);
                var activity    = ( v.activity ) ? v.activity : '';
                var picture     = ( v.picture ) ? v.picture : '';
                var pop_text    = popup_text.replace(/{/g, '<').replace(/}/g, '>').replace('/activity', activity ).replace('/activity', activity ).replace('/visitors', visitors ).replace('/signups', signups );

                var result = '<div class="js--socialproof-popup '+popup_position_class+' '+popup_animation_class+' '+popup_style_type_class+' js--socialproof-hide"><div class="js--socialproof-popup__details"><a class="goto popup-content" href="#planos"><img class="'+popup_style_type_class+'" src="'+picture+'">'+pop_text+'</a></div></div>';
                $('#js--socialproof-wrapper').append(result);
            });

            // Handle popup Interval
            $(".js--socialproof-popup").each(function(index){
                var _this = $(this);
                (function(that, i) { 
                    i++;
                    setTimeout(function() { 
                        _this.removeClass('js--socialproof-hide').addClass('fade-in').delay(popup_gone_interval).fadeOut();
                    }, i * 1000 * popup_interval);
                })(this, index);
            });

            // Handle close button
            $('.js--socialproof-popup__close-button').click(function () {
                $(this).parent().hide();
            });
       }

        function js_socialproof_getRandomItems(n, list) {
            const copy = Array.from(list);
            return Array.from(Array(n), () => copy.splice(Math.floor(copy.length * Math.random()), 1)[0]);
        }

    }, popup_start);

});