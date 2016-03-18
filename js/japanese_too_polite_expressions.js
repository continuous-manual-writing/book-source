var spokenExpressions = new Array('いらっしゃ', 'ございます', 'おっしゃ','いたします','致します');

function validateSentence(sentence) {
  for (var i = 0; i < spokenExpressions.length; i++) {
    if (sentence.content.indexOf(spokenExpressions[i]) != -1) {
	addError('口語表現 "' + spokenExpressions[i] + '" を利用しています。', sentence);
    }
  }
}
