"use client";

import React from "react";
import Script from "next/script";

export interface ChatwootNextProps {
	token: string;
	async: true | undefined;
	defer: true | undefined;
}
declare global {
	interface Window {
		chatwootSDK: any;
	}
}
function ChatwootNextScript(props: ChatwootNextProps) {
	const { token, ...restProps } = props;
	const BASE_URL = "https://app.chatwoot.com";
	const SCRIPT_URL = BASE_URL + "/packs/js/sdk.js";
	onload = function () {
		window.chatwootSDK.run({
			websiteToken: "<your-website-token>",
			baseUrl: BASE_URL,
		});
	};

	return <Script id="chatwood-script" src={SCRIPT_URL} {...restProps} />;
}

export default ChatwootNextScript;
