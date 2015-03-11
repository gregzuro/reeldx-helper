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
      renderStatus('Public Key: ' + request.publicKey + '\nSecret Key: ' + request.secretKey) ;
    }
	}) ;
