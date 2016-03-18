var emotionalExpressions = new Array('非常に', 'とても', 'ありえない', '悲しい', 'とてつも', '途方も', '熾烈', '低レベル', '万一', '執拗', '一目で', '大変','完遂','もちろん','すぐれた');

function validateSentence(sentence) {
  for (var i = 0; i < emotionalExpressions.length; i++) {
    if (sentence.content.indexOf(emotionalExpressions[i]) != -1) {
	addError('感情的な表現 "' + emotionalExpressions[i] + '" を利用しています。', sentence);
    }
  }
}
