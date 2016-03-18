var redundantExpressions =
  new Array('することが', 'ことも', '可能で', '可能と', 'ことにします',
  'ことにして', '言えます', 'しかしながら' , '一面においては', 'その結果として', 'このような', 'そのような', '意味において', 'まず初', 'まず最初','完全に','となって','そういった','を行う','をおこなう','するもの','したもの', '特に', '万一','かどうか', 'させること','行なった' , 'ことは','ことによって', 'してやり', 'してやる','のではないか', 'となります','一番最初','では次に','いますので','一切','きっと','する方法で','まずはじめ','するのです');

function validateSentence(sentence) {
  for (var i = 0; i < redundantExpressions.length; i++) {
    if (sentence.content.indexOf(redundantExpressions[i]) != -1) {
	addError('冗長な表現 "' + redundantExpressions[i] + '" を利用しています。', sentence);
    }
  }
}
