chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    new QRCode(document.getElementById("qrcode"), tabs[0].url);
});