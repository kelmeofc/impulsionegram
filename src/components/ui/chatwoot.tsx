(function (d, t) {
  var BASE_URL = "https://lp.impuslionegram.com.br";
  var g = d.createElement(t) as HTMLScriptElement,
    s = d.getElementsByTagName(t)[0];
  g.src = BASE_URL + "/packs/js/sdk.js";
  s.parentNode.insertBefore(g, s);
  g.async = !0;
  g.onload = function () {
    window.chatwootSDK.run({
      websiteToken: "UiK961dgutY7mskgTzNDDszd",
      baseUrl: BASE_URL,
    });
  };
})(document, "script");
