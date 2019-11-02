var x = new XMLHttpRequest();
x.onload = function() {chrome.devtools.panels.applyStyleSheet(x.responseText);};
x.open('GET', 'style.css');
x.send();
