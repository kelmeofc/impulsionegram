"use client";

import { useEffect } from "react";

export function ChatwootWidget() {
	useEffect(() => {
		{
			window.chatwootSettings = {
				baseDomain: '.impulsionegram.com.br',
				hideMessageBubble: false,
				locale: 'pt_br',
				type: 'standard'
			};

			(function (d, t) {
				var BASE_URL = "https://app.chatwoot.com";
				var g = d.createElement(t) as any, s = d.getElementsByTagName(t)[0] as any;
				g.src = BASE_URL + "/packs/js/sdk.js";
				g.defer = true;
				g.async = true;
				s.parentNode.insertBefore(g, s);
				g.onload = function () {
					window.chatwootSDK.run({
						websiteToken: '5kBk14FSYfqc7X8GWnBFxD8t',
						baseUrl: BASE_URL
					})
				}
			})(document, "script")
		}
	})

	return (
		<></>
	)
}