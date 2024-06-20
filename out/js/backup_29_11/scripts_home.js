// Set Cookie
function setCookie( name, value, days ) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Get Cookie
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

// Erase Cookie
function eraseCookie( name ) { document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'; }

/*// Check if is empty
function empty(str){
    if (typeof str == 'undefined' || !str || str.length === 0 || str === "" || !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g,"") === "")
        return true;
    else
        return false;
}*/



// Check if is e-mail
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

// Clean Username Field
function cleanUsernameField(){
    document.querySelector(".checkout-popup .order-form input#username").value = '';
}

function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}

// Vanilla JS navbar toggler for Bootstrap 4

function toogleMenu(button){
    if( button ){
        if( button.getAttribute('aria-expanded') ){
            let aria_expanded = button.getAttribute('aria-expanded');
            if( aria_expanded == 'false' ){ button.setAttribute('aria-expanded', 'true'); }else{ button.setAttribute('aria-expanded', 'false'); } 
        }
    }else{
        document.querySelectorAll('.navbar-toggler').forEach( navbar_toogler => { navbar_toogler.setAttribute('aria-expanded', 'false'); });
    }
    document.body.classList.toggle("navbar-open");
    document.getElementById("mobile-menu").classList.toggle("show");
}

function closeMenu(){
    document.querySelectorAll('.navbar-toggler').forEach( navbar_toogler => { navbar_toogler.setAttribute('aria-expanded', 'false'); });
    document.body.classList.remove("navbar-open");
    document.getElementById("mobile-menu").classList.remove("show");
}

//Toogle Menu
document.querySelectorAll('.navbar-collapse a.goto').forEach( el => el.addEventListener('click', event => {
    closeMenu();
}));


// Slider
const slider=document.querySelector("#slider");

if( slider ){let e=slider.querySelectorAll(".slider-item"),s=slider.querySelector(".switch");var t=e.length;var l,i=0;for(;s.querySelectorAll("i").length!=t;){let e=document.createElement("i");s.appendChild(e)}s=s.querySelectorAll("i");var c=l=>{0==l?(e[t-1].classList.remove("active"),e[t-1].classList.remove("active"),s[t-1].classList.remove("active")):(e[l-1].classList.remove("active"),s[l-1].classList.remove("active")),l==t-1?e[0].classList.remove("close"):e[l+1].classList.remove("close"),s[l].classList.add("active"),e[l].classList.add("active")},r=l=>{0==l?(e[t-1].classList.remove("active"),s[t-1].classList.remove("active")):(e[l-1].classList.remove("active"),s[l-1].classList.remove("active")),l==t-1?e[0].classList.remove("close"):e[l+1].classList.remove("close"),l<t-1?(e[l+1].classList.remove("active"),s[l+1].classList.remove("active")):(e[0].classList.remove("active"),s[0].classList.remove("active")),s[l].classList.add("active"),e[l].classList.add("active")};function startSlideShow(){}function nextSliderImage(){i++,i==t&&(i=0),c(i),clearInterval(l),startSlideShow()}function previousSliderImage(){i--,-1==i&&(i=t-1),r(i),clearInterval(l),startSlideShow()}const a=slider.querySelector(".prev"),o=slider.querySelector(".next");o.addEventListener("click",nextSliderImage),a.addEventListener("click",previousSliderImage),c(i),startSlideShow()}


// Checkout - Add User Param to URL
function userUrlParam( url, param, value ){
    var url = decodeURIComponent(url);
    var url = new URL(url);
    var urlParams = new URLSearchParams(url.search);
    urlParams.set(param, value);
    url.search = urlParams.toString();
    var url = url.toString();
    return url;
}

function update_checkout_links_username( ig_username ){
    var btn_pix = document.getElementById('payment-method-pix');
    var btn_card = document.getElementById('payment-method-credit-card');
    var btn_billet = document.getElementById('payment-method-billet');

    // pix monetizze
    /*btn_pix.setAttribute( 'href', userUrlParam( btn_pix.getAttribute('data-link-checkout'), 'src', ig_username ) );
    btn_card.setAttribute( 'href', 'https://painel.impulsionegram.com.br/go-checkout/?r=' + btoa( userUrlParam( btn_card.getAttribute('data-link-checkout'), 'src', ig_username ) ) );
    btn_billet.setAttribute( 'href', userUrlParam( btn_billet.getAttribute('data-link-checkout'), 'src', ig_username) );*/

    if ( document.body.hasAttribute('data-platform') ){
        var platform = document.body.getAttribute('data-platform');
        if( platform == 'instagram' ){
            var username_field = 'ig_username';
        }else if( platform == 'tiktok' ){
            var username_field = 'tt_username';
        }else{
            var username_field = 'ig_username';
        }
    }else{
        var username_field = 'ig_username';
    }

    btn_pix.setAttribute( 'href', userUrlParam( btn_pix.getAttribute('data-link-checkout'), username_field, ig_username ) );
    btn_card.setAttribute( 'href', userUrlParam( btn_card.getAttribute('data-link-checkout'), 'src', ig_username ) );
    btn_billet.setAttribute( 'href', userUrlParam( btn_billet.getAttribute('data-link-checkout'), username_field, ig_username) );
    setCookie('ig_username', ig_username, 365);
}


// UTM TRACKING
let params = ( new URL(document.location) ).searchParams;
let referrer_domain = document.referrer.split('/')[2];

if( referrer_domain == 'portogente.com.br' ){
    var utm_source = 'portogente';
    var utm_medium = 'portal';
    var utm_campaign = 'ranking';
}else if( referrer_domain == 'www.google.com' && !params.get('utm_source') ){
    var utm_source = 'google-organico';
    var utm_medium = 'search';
    var utm_campaign = 'google-search';
}else{
    if( params.get('utm_source') ){ var utm_source = params.get('utm_source'); }else{ var utm_source = getCookie('utm_source'); }
    if( params.get('utm_medium') ){ var utm_medium = params.get('utm_medium'); }else{ var utm_medium = getCookie('utm_medium'); }
    if( params.get('utm_campaign') ){ var utm_campaign = params.get('utm_campaign'); }else{ var utm_campaign = getCookie('utm_campaign'); }
}

setCookie('utm_source', utm_source, 365);
setCookie('utm_medium', utm_medium, 365);
setCookie('utm_campaign', utm_campaign, 365);


// Instagram Username
if( params.get('ig_username') ){
    var ig_username = params.get('ig_username');
}else if( getCookie('ig_username') != null ){
    var ig_username = getCookie('ig_username');
}else{
    var ig_username = null;
}

if( ig_username != null ){
    document.querySelector('.checkout-popup .order-form input#username').value = ig_username;
    setCookie('ig_username', ig_username, 365);
}

// Customer Info
if( params.get('name') ){ var customer_name = decodeURI(params.get('name')); }
if( params.get('phone') ){ var customer_phone = decodeURI(params.get('phone')); }
if( params.get('email') ){ var customer_email = decodeURI(params.get('email')); }
if( params.get('document') ){ var customer_document = decodeURI(params.get('document')); }

// Build URL UTM
function buildUtmUrl( checkoutUrl ){
    var checkoutUrl = decodeURI (checkoutUrl);
    var url = new URL( checkoutUrl );
    var host = url.host;

    if( host == 'painel.impulsionegram.com.br' ){
        if( ig_username != null ){ url.searchParams.set('ig_username', ig_username ); }
        if( customer_name != null ){ url.searchParams.set( 'billing_first_name', customer_name ); }
        if( customer_phone != null ){ url.searchParams.set( 'billing_phone', customer_phone ); }
        if( customer_email != null ){ url.searchParams.set( 'billing_email', customer_email ); }
        if( customer_document != null ){ url.searchParams.set( 'billing_document', customer_document ); }
    }else if( host == 'app.monetizze.com.br' ){
        if( ig_username != null ){ url.searchParams.set( 'src', ig_username ); }
        if( customer_name != null ){ url.searchParams.set( 'nome', customer_name ); }
        if( customer_phone != null ){ url.searchParams.set( 'telefone', customer_phone ); }
        if( customer_email != null ){ url.searchParams.set( 'email', customer_email ); }
        if( customer_document != null ){ url.searchParams.set( 'cnpj_cpf', customer_document ); }
    }

    if( utm_source ){ url.searchParams.set( 'utm_source', utm_source ); }
    if( utm_medium ){ url.searchParams.set( 'utm_medium', utm_medium ); }
    if( utm_campaign ){ url.searchParams.set( 'utm_campaign', utm_campaign ); }

    if( host == 'painel.impulsionegram.com.br' ){
        return encodeURIComponent( url.toString() );
    }else{
        return url.toString();
    }
}

if( window.location.hash == "#checkout-form" || window.location.hash == "#checkout" ) { window.location.hash = "#!"; }

// Update Checkout Links
document.querySelectorAll('.btn-checkout').forEach(function( btn_checkout ) {
    if ( btn_checkout.hasAttribute("data-monthly-daily-link-woo") ) { btn_checkout.setAttribute( 'data-monthly-daily-link-woo', buildUtmUrl( btn_checkout.getAttribute("data-monthly-daily-link-woo") ) ); }
    if ( btn_checkout.hasAttribute("data-monthly-instant-link-woo") ) { btn_checkout.setAttribute( 'data-monthly-instant-link-woo', buildUtmUrl( btn_checkout.getAttribute("data-monthly-instant-link-woo") ) ); }
    if ( btn_checkout.hasAttribute("data-yearly-daily-link-woo") ) { btn_checkout.setAttribute( 'data-yearly-daily-link-woo', buildUtmUrl( btn_checkout.getAttribute("data-yearly-daily-link-woo") ) ); }
    if ( btn_checkout.hasAttribute("data-yearly-instant-link-woo") ) { btn_checkout.setAttribute( 'data-yearly-instant-link-woo', buildUtmUrl( btn_checkout.getAttribute("data-yearly-instant-link-woo") ) ); }
    if ( btn_checkout.hasAttribute("data-monthly-daily-link-monetizze") ) { btn_checkout.setAttribute( 'data-monthly-daily-link-monetizze', buildUtmUrl( btn_checkout.getAttribute("data-monthly-daily-link-monetizze") ) ); }
    if ( btn_checkout.hasAttribute("data-monthly-instant-link-monetizze") ) { btn_checkout.setAttribute( 'data-monthly-instant-link-monetizze', buildUtmUrl( btn_checkout.getAttribute("data-monthly-instant-link-monetizze") ) ); }
    if ( btn_checkout.hasAttribute("data-yearly-daily-link-monetizze") ) { btn_checkout.setAttribute( 'data-yearly-daily-link-monetizze', buildUtmUrl( btn_checkout.getAttribute("data-yearly-daily-link-monetizze") ) ); }
    if ( btn_checkout.hasAttribute("data-yearly-instant-link-monetizze") ) { btn_checkout.setAttribute( 'data-yearly-instant-link-monetizze', buildUtmUrl( btn_checkout.getAttribute("data-yearly-instant-link-monetizze") ) ); }
    if ( btn_checkout.hasAttribute("data-link-woo") ) { btn_checkout.setAttribute( 'data-link-woo', buildUtmUrl( btn_checkout.getAttribute("data-link-woo") ) ); }
    if ( btn_checkout.hasAttribute("data-link-monetizze") ) { btn_checkout.setAttribute( 'data-link-monetizze', buildUtmUrl( btn_checkout.getAttribute("data-link-monetizze") ) ); }

    // pix monetizze
    /*if ( btn_checkout.hasAttribute("data-link-woo") ) { btn_checkout.setAttribute( 'data-link-woo', buildUtmUrl( btn_checkout.getAttribute("data-link-monetizze") ) ); }
    if ( btn_checkout.hasAttribute("data-link-monetizze") ) { btn_checkout.setAttribute( 'data-link-monetizze', buildUtmUrl( btn_checkout.getAttribute("data-link-monetizze") ) ); }*/
});


const terms_txt = '<div id="terms-box"> <div class="scroll-box"> <p class="title">Termo de Responsabilidade e Uso Ético do Serviço</p> <p>Prezado Usuário, seja muito bem-vindo ao ImpulsioneGram!</p> <p>Antes de prosseguir com a contratação de nossos serviços, é crucial que você leia e compreenda o seguinte Termo de Responsabilidade e Uso Ético do Serviço, elaborado em conformidade com o Código de Defesa do Consumidor (Lei nº 8.078/1990), o Marco Civil da Internet (Lei nº 12.965/2014) e a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Ao contratar nossos serviços, você concorda com os termos aqui estabelecidos.</p> <p class="title">Termos e Condições</p> <p>1. Finalidade Lícita: O cliente concorda em utilizar os serviços fornecidos por nossa empresa exclusivamente para fins lícitos e não comerciais, conforme estabelecido pelo artigo 5º, inciso II da Constituição Federal e artigo 37 do Código de Defesa do Consumidor.</p> <p>2. Proibição de Fraude: O cliente se compromete a não utilizar os serviços para engajar em atividades fraudulentas, enganosas ou qualquer outra forma de comportamento inautêntico, em conformidade com o artigo 67 do Código de Defesa do Consumidor.</p> <p>3. Conformidade com as Leis: O cliente deve assegurar que o uso dos serviços está em conformidade com todas as leis e regulamentos aplicáveis, incluindo, mas não se limitando ao Código de Defesa do Consumidor e às diretrizes do Conselho Nacional de Autorregulação Publicitária (CONAR).</p> <p>4. Proteção de Dados: O cliente concorda que qualquer dado pessoal fornecido está em conformidade com a Lei Geral de Proteção de Dados (LGPD), e que a empresa pode processar esses dados para fins de prestação de serviços.</p> <p>5. Isenção de Responsabilidade: A empresa não será responsável por qualquer uso indevido dos serviços que resulte em ações legais, perdas ou danos. O cliente assume total responsabilidade pelo uso dos serviços contratados, conforme artigo 14 do Marco Civil da Internet.</p> <p>6. Indenização: O cliente concorda em indenizar e isentar a empresa de qualquer responsabilidade decorrente do uso indevido dos serviços, incluindo qualquer violação deste Termo de Responsabilidade, em conformidade com o artigo 927 do Código Civil.</p> <p>Ao clicar em "Aceito", você confirma que leu, entendeu e concorda com os termos e condições acima descritos, fundamentados nas leis aplicáveis. O não cumprimento destes termos pode resultar na rescisão imediata dos serviços e em ações legais.</p> <p>Este Termo de Responsabilidade é uma medida proativa para assegurar que nossos serviços sejam utilizados de forma ética e legal. Agradecemos por sua compreensão e cooperação.</p> <p>Caso você tenha alguma dúvida ou necessite de esclarecimentos adicionais, por favor, entre em contato conosco.</p> <p>Este termo foi elaborado para proteger ambas as partes e garantir um uso ético e responsável dos nossos serviços. Certifique-se de ler e entender completamente antes de prosseguir.</p> </div> </div>';

/* PLANS */

    // Checkout Popup Delivery Options
    const btn_checkout_plans = document.querySelectorAll('.btn-checkout.is-plan');
    btn_checkout_plans.forEach( el => el.addEventListener('click', event => {

        var period = el.getAttribute('data-active-period');

        var daily_btn_link_woo = el.getAttribute('data-' + period + '-daily-link-woo');
        var daily_btn_link_monetizze = el.getAttribute('data-' + period + '-daily-link-monetizze');
        var instant_btn_link_woo = el.getAttribute('data-' + period + '-instant-link-woo');
        var instant_btn_link_monetizze = el.getAttribute('data-' + period + '-instant-link-monetizze');

        document.getElementById('daily-btn-link').setAttribute( 'data-link-woo', daily_btn_link_woo );
        document.getElementById('daily-btn-link').setAttribute( 'data-link-monetizze', daily_btn_link_monetizze );
        document.getElementById('instant-btn-link').setAttribute( 'data-link-woo', instant_btn_link_woo );
        document.getElementById('instant-btn-link').setAttribute( 'data-link-monetizze', instant_btn_link_monetizze );
        
        if (!document.getElementById("terms-box") && document.getElementById("terms-box-wrapper")) {
            var terms_box_div = document.getElementById("terms-box-wrapper");
            terms_box_div.innerHTML = terms_txt;
        }

        setTimeout(() => {
            document.querySelector(".checkout-popup .order-form input#username").focus();
        }, 350);
        
    }));

    // Checkout Popup - Set Checkout Links
    document.querySelectorAll('.daily-btn-link, .instant-btn-link').forEach( el => el.addEventListener('click', event => {

        var woo_checkout_link = el.getAttribute('data-link-woo');
        var monetizze_checkout_link = el.getAttribute('data-link-monetizze');

        document.getElementById('payment-method-pix').setAttribute( 'href', woo_checkout_link );
        document.getElementById('payment-method-credit-card').setAttribute( 'href', monetizze_checkout_link );
        document.getElementById('payment-method-billet').setAttribute( 'href', woo_checkout_link );

        document.getElementById('payment-method-pix').setAttribute( 'data-link-checkout', woo_checkout_link );
        document.getElementById('payment-method-credit-card').setAttribute( 'data-link-checkout', monetizze_checkout_link );
        document.getElementById('payment-method-billet').setAttribute( 'data-link-checkout', woo_checkout_link );

        if( document.querySelector('.checkout-popup .order-form input#username').value ){
            update_checkout_links_username( document.querySelector('.checkout-popup .order-form input#username').value );
        }
        
    }));


/* PACKAGES */

    // Update Checkout Links - Packages
    document.querySelectorAll('.btn-checkout.is-package').forEach( el => el.addEventListener('click', event => {
        var woo_checkout_link = el.getAttribute('data-link-woo');
        // pix monetizze
        ///var woo_checkout_link = el.getAttribute('data-link-monetizze');
        var monetizze_checkout_link = el.getAttribute('data-link-monetizze');

        document.getElementById('payment-method-pix').setAttribute( 'href', woo_checkout_link );
        document.getElementById('payment-method-credit-card').setAttribute( 'href', monetizze_checkout_link );
        document.getElementById('payment-method-billet').setAttribute( 'href', woo_checkout_link );

        document.getElementById('payment-method-pix').setAttribute( 'data-link-checkout', woo_checkout_link );
        document.getElementById('payment-method-credit-card').setAttribute( 'data-link-checkout', monetizze_checkout_link );
        document.getElementById('payment-method-billet').setAttribute( 'data-link-checkout', woo_checkout_link );

        if( document.querySelector('.checkout-popup .order-form input#username').value ){
            update_checkout_links_username( document.querySelector('.checkout-popup .order-form input#username').value );
        }

        if (!document.getElementById("terms-box") && document.getElementById("terms-box-wrapper")) {
            var terms_box_div = document.getElementById("terms-box-wrapper");
            terms_box_div.innerHTML = terms_txt;
        }

        setTimeout(() => {
            document.querySelector(".checkout-popup .order-form input#username").focus();
        }, 350);

    }));


// IG_username on input
document.querySelector('.checkout-popup .order-form input#username').addEventListener("input", (e) => {
    var ig_username = e.target.value.replace(/@/g, '').toLowerCase();
    if( ig_username.length > 0 ) { document.querySelector('.checkout-popup .order-form .input-username-error').style.display = 'none'; }
    update_checkout_links_username( ig_username );
});


// Block Space Keypress
document.querySelector(".checkout-popup .order-form input#username").addEventListener('keydown', function (event){
    if (event.keyCode === 32) {
        event.preventDefault();
        return false;
    }
});

// On checkbox check
document.querySelector(".checkout-popup #checkbox-terms").addEventListener('change', function (event){
    if (this.checked) {
        document.querySelector('.checkout-popup .checkbox-terms-error').style.display = 'none'; 
    }
});

// Validate @user input
document.querySelectorAll('#payment-method-pix,#payment-method-credit-card, #payment-method-billet').forEach( el => el.addEventListener('click', event => {
    var ig_username = document.querySelector('.checkout-popup .order-form input#username').value;
    if( ig_username.replace(/@/g, '').length === 0 || isEmail( ig_username ) ) {
        event.preventDefault();
        document.querySelector('.checkout-popup .order-form .input-username-error').style.display = 'block';
        document.querySelector('.checkout-popup .order-form input#username').focus();
    }

    var checkbox_terms = document.querySelector('.checkout-popup #checkbox-terms').checked;
    if( checkbox_terms === false ) { 
        event.preventDefault();
        document.querySelector('.checkout-popup .checkbox-terms-error').style.display = 'block'; 
    }
}));



// Add smooth scrolling to all links
const smooth_links = document.querySelectorAll(".goto");

for (const link of smooth_links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// Toogle Pricing Period
if( document.querySelector('[data-pricing-trigger]') ){
    document.querySelector('[data-pricing-trigger]').addEventListener("click", function(){ 
        this.classList.toggle("active");
        var target = this.getAttribute("data-target").replace('#', '');
        var target = document.getElementById(target);
        var active_period = target.getAttribute('data-value-active');
        
        if ( active_period == "monthly" ) {
            
            target.setAttribute("data-value-active", "yearly");
            /*$('.btn-checkout').each(function(index, element) {
                $(element).attr("data-active-period", 'yearly');
            });*/
            document.querySelectorAll('.btn-checkout').forEach(function( btn_checkout ) {
                btn_checkout.setAttribute("data-active-period", 'yearly');
            });
        } else {
            target.setAttribute("data-value-active", "monthly");
            document.querySelectorAll('.btn-checkout').forEach(function( btn_checkout ) {
                btn_checkout.setAttribute("data-active-period", 'monthly');
            });
        }
    });
}
// Dropdown toggle
let navbarDropdown = document.querySelector('#dropdown-pacotes');

if( navbarDropdown ){
   let navbarDropdownExpanded = navbarDropdown.getAttribute('aria-expanded'); 
   
   function getTogglerId(className, event, fn) {
       let list = document.querySelectorAll(className);
       for (let i = 0, len = list.length; i < len; i++) {
           list[i].addEventListener(event, fn, false);
       }
   }

     getTogglerId('.dropdown-toggle', 'click', toggleDropdown);

     let dropdownMenus = document.querySelectorAll('.dropdown-menu');
     let dropdownTogglers = document.querySelectorAll('.dropdown-toggle');

     function closeMenus(){
       for (let j = 0; j < dropdownMenus.length; j++) {
         dropdownMenus[j].classList.remove('show');
       }
       for (let k = 0; k < dropdownTogglers.length; k++) {
         dropdownTogglers[k].classList.remove('show');
         dropdownTogglers[k].setAttribute('aria-expanded','false');
       }
     }

     function toggleDropdown(e) {
       let isOpen = this.classList.contains('show');
       let divId = this.id;
       if (!isOpen) {
         closeMenus();
         document.querySelector('[aria-labelledby='+ divId +']').classList.add('show');
         this.classList.add('show');
         this.setAttribute('aria-expanded','true');
       } else if (isOpen) {
         closeMenus();
       }

       e.preventDefault();
     }
     
     // Close dropdowns on focusout

     let navbar = document.querySelector('.navbar');

     navbar.addEventListener('focusout', function() {
       window.onclick = function(event){
         if (document.querySelector('.navbar').contains(event.target)){
           return;
         } else{
           closeMenus();
         }
       };
     });   
}
  





document.addEventListener("DOMContentLoaded", function(event) {
    

    // CountDown
    if ( document.getElementById("countdown") ) {

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

      // Social Proof Popup
      if( typeof js_socialproof_vars !== 'undefined' ){
          
          var popup_div = document.createElement('div');
          popup_div.id = 'js--socialproof-wrapper';
          document.body.appendChild(popup_div);

          var data_array              = js_socialproof_vars.popup_data,
              popup_start             = js_socialproof_vars.settings.js_socialproof_popup_start,
              popup_interval          = js_socialproof_vars.settings.js_socialproof_popup_interval,
              popup_gone_interval     = js_socialproof_vars.settings.js_socialproof_popup_gone_interval*1000,
              popup_text              = js_socialproof_vars.settings.js_socialproof_popup_text;

          setTimeout(function(){
              if ( data_array !== 0 ) {

                data_array.forEach(function(v){
                    var visitors    = between(159, 331);
                    var signups    = between(799, 1499).toLocaleString('pt-BR');
                    var activity    = ( v.activity ) ? v.activity : '';
                    var picture     = ( v.picture ) ? v.picture : '';
                    var pop_text    = popup_text.replace(/{/g, '<').replace(/}/g, '>').replace('/activity', activity ).replace('/activity', activity ).replace('/visitors', visitors ).replace('/signups', signups );
                    
                    var result = '<div class="js--socialproof-popup"><div class="js--socialproof-popup__details"><a class="goto popup-content" href="#planos"><img loading="lazy" width="60" height="60" src="'+picture+'">'+pop_text+'</a></div></div>';
                    document.getElementById('js--socialproof-wrapper').insertAdjacentHTML('beforeend', result);
                });

                // Handle popup Interval
                var i = 0.2;
                document.querySelectorAll(".js--socialproof-popup").forEach( function( index ){
                    setTimeout(function() {
                        index.classList.add('show');
                        setTimeout(function() {
                            var s = index.style;
                            index.classList.remove('show');
                        }, popup_gone_interval);

                    }, i * 1000 * popup_interval);
                    i++;
                });
             }

          }, popup_start * 1000);
      }




      // Home Animation
      if( document.getElementById("hero-ig-animation") ){

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


          /*function scroll(ele) {
              var t = ele.getBoundingClientRect().top <
                  window.innerHeight * 0.78
              t ? ele.classList.add('on') : ele.classList.remove('on')
              return t;
          }*/

          function PrefixInteger(num, length) {
              return (Array(length).join('0') + num).slice(-length);
          }

          function getRndInteger(min, max) {
              return Math.floor(Math.random() * (max - min + 1)) + min;
          }

          function flipNum(name, num, length) {
              //$(name + " .list").html("");
              document.querySelector(name + " .list").innerHTML = '';
              var number = PrefixInteger(num, length);
              var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
              var list = '';
              var len = String(number).length;
              var str = number.toString();
              //var box = $(name);
              var box = document.querySelector(name);
              for (var j = 0; j < arr.length; j++) {
                  list += '<i>' + arr[j] + '</i>';
              }
              document.querySelector(name + " .list").insertAdjacentHTML('beforeend', list);
              for (var a = 0; a <= len; a++) {
                  var curNum = str.substring(a, a + 1);
                  var mt = -curNum * 26;
                  if( document.querySelectorAll( name + " .list" )[a] ){
                    const j = document.querySelectorAll( name + " .list" )[a];
                    j.style.marginTop = mt + 'px';
                  }
              }
          }
             
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
      }




    /* Vimeo Player */
    (function(){
        var vimeo = document.querySelectorAll('.vi-lazyload'),
            vimeo_observer,
            template_wrap,
            template_content,
            template_playbtn,
            template_iframe,
            settings_observer_rootMargin    = '0px 0px';

        if( vimeo.length > 0 ){
            
            //create elements
            template_wrap       = document.createElement('div');
            template_content    = document.createElement('div');
            template_playbtn    = document.createElement('div');
            template_iframe     = document.createElement('iframe');
            
            //set attributes
            template_wrap.classList.add('vi-lazyload-wrap');
            template_content.classList.add('vi-lazyload-content');
            
            template_playbtn.classList.add('vi-lazyload-playbtn');
            
            template_iframe.setAttribute('allow','autoplay;fullscreen;picture-in-picture');
            //template_iframe.setAttribute('allowfullscreen','');
            
            vimeo_observer = new IntersectionObserver(function(elements){
            
                elements.forEach(function(e){
                    
                    //VARIABLES
                    var this_element    = e.target,
                        
                        this_wrap,
                        this_content,
                        this_playbtn,
                        this_iframe,
                        
                        this_data_id    = e.target.dataset.id,
                        this_data_thumb = e.target.dataset.thumb;
                    
                    
                    //if element appears in viewport
                    if(e.isIntersecting === true){
                        
                        //wrap
                        this_wrap = template_wrap.cloneNode();
                        this_element.append(this_wrap);
                        
                        //content
                        this_content = template_content.cloneNode();
                        this_wrap.append(this_content);
                        
                        //background-image
                        this_content.style.setProperty('--vi-lazyload-img','url("' + this_data_thumb + '")');
                        
                        //play btn
                        this_playbtn = template_playbtn.cloneNode();
                        this_content.append(this_playbtn);
                        
                        //onclick create iframe
                        this_playbtn.addEventListener('click',function(){
                            this_iframe     = template_iframe.cloneNode();
                            this_iframe.src = 'https://player.vimeo.com/video/' + this_data_id + '?autoplay=1&autopause=0';
                            this_iframe.classes = 'teste';
                            this_content.append(this_iframe);
                        });
                        
                        //Unobserve after image lazyloaded
                        vimeo_observer.unobserve(this_element);
                    }
                    
                });
                
            },{
                rootMargin: settings_observer_rootMargin,
            });

            vimeo.forEach(function(e){
                
                //Intersection Observer API - observe elements
                vimeo_observer.observe(e);
                
            });
        }
        
    })();
});

/* Accordion */
var accordion = document.querySelectorAll('.accordion');
if( accordion ){
    var headingLink = [];

    accordion.forEach(function(e) {
        headingLink = e.querySelectorAll("[data-toggle='collapse']");
        
        headingLink.forEach(function(he) {
                he.addEventListener('click', openAccordion);
        });
        
    }); 
}

function openAccordion( param ) {
    var currentHeading = param.currentTarget;
    var allHeading = document.querySelectorAll("[data-toggle='collapse']");
    var dataTarget = param.currentTarget.dataset.target;
    var currentContent = document.querySelector(dataTarget);
    var collapseDiv = document.querySelectorAll('.collapse');
    
    headingLink.forEach(function(cp) {
        cp.classList.add('collapsed');
    });
    currentHeading.classList.remove('collapsed');       
    collapseDiv.forEach(function(cd) {
        cd.classList.remove('show');
    });
    allHeading.forEach(function(cd) {
        cd.setAttribute('aria-expanded', 'false');
    });
    currentContent.classList.add('show');
    currentHeading.setAttribute('aria-expanded', 'true');
}
