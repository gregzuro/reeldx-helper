try {
	var pk= document.forms[0].elements[2].value ;
	var sk= document.forms[0].elements[3].value ;

	chrome.runtime.sendMessage(
		{
			publicKey: pk,
			secretKey: sk
		});
}
catch (e) {
	chrome.runtime.sendMessage(
		{
			publicKey: 'n/a',
			secretKey: 'n/a'
		});
}
