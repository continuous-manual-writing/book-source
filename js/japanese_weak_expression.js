var weakExpressions = new Array('かもしれ','思う','思います','俯瞰');

function validateSentence(sentence) {
  for (var i = 0; i < weakExpressions.length; i++) {
    if (sentence.content.indexOf(weakExpressions[i]) != -1) {
      addError('弱い表現 "' + weakExpressions[i] + '" を利用しています。', sentence);
    }
  }
}
