'use client'
import React from "react";

class ChatwootWidget extends React.Component {
  componentDidMount() {
    // Add Chatwoot Settings
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "right", // This can be left or right
      locale: "pt-br", // Language to be set
      type: "standard", // [standard, expanded_bubble]
    };

    // Paste the script from inbox settings except the <script> tag
    (function (d, t) {
      var BASE_URL = ".";
      var g = d.createElement(t) as HTMLScriptElement,
      s = d.getElementsByTagName(t)[0] as HTMLElement | null;
      g.src = BASE_URL + "/packs/js/sdk.js";
      if (s) {
        s.parentNode?.insertBefore(g, s);
      }
      g.async = true;
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: "GTM-NM5H6G4",
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");
  }

  render() {
    return null;
  }
}

export default ChatwootWidget;
