var X = 'abcdefghjkmnpqrtvwxyzABCDEFGHJKMNPQRTVWXYZ0123456789';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var generateButton = document.querySelector('#generate-button');
var textElement = document.querySelector('#text');

generateButton.addEventListener('click', () => {
  var v = Array(16).fill().map(() => X[getRandomInt(X.length)]).join('')
  textElement.value = v;
});

new ClipboardJS('.btn');
