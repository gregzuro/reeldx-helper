'use strict';

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function() {
    chrome.tabs.executeScript( null, {file: 'scripts/contentscript.js'}) ;
  });
});

chrome.runtime.onMessage.addListener(function( request) {
	if (request.publicKey === 'n/a') {
		renderStatus('Nothing to do here. :(') ;
	} else {
		var algo = 'HS256' ;
		var d= new Date();
		var token = KJUR.jws.JWS.sign(
			algo,
			JSON.stringify({typ: 'JWT', alg: algo}),
			JSON.stringify(
				{
				aud: request.publicKey,
				iat: Math.floor(d.getTime()/1000),
				exp: Math.floor(d.getTime()/1000) + (60*60),
				sub: request.app
			}, 'pass'),
			request.secretKey) ;
		renderStatus('Public Key: ' + request.publicKey + '\nSecret Key: ' + request.secretKey + '\nsub: '+ request.app +'\n1 Hour Token: ' + token) ;
	}
}) ;
