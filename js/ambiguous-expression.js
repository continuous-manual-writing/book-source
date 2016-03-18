var ambiguousExpressions = new Array('若干','適切','少々','簡単','思う','なんとなく');

function validateSentence(sentence) {
  for (var i = 0; i < ambiguousExpressions.length; i++) {
    if (sentence.content.indexOf(ambiguousExpressions[i]) != -1) {
	addError('曖昧な表現 "' + ambiguousExpressions[i] + '" を利用しています。', sentence);
    }
  }
}
