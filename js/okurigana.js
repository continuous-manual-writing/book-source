// created by ClearCode
// see http://www.clear-code.com/blog/2015/8/29.html

var message = "your sentence has validation error : {0}";

function isTargetVerb(token) {
    if (token.tags[0] == '動詞' &&
	token.tags[1] == '自立' &&
	token.tags[4] == '一段' &&
	token.tags[5] == '未然形') {
	return true;
    } else {
	return false;
    }
}

function isRaRemovedWord(token, token2) {
    if (isTargetVerb(token) &&
	token2.tags[0] == '動詞' &&
	token2.tags[1] == '接尾' &&
	token2.tags[6] == 'れる') {
	return true;
    } else {
	return false;
    }
}

function validateSentence(sentence) {
    for (var i = 0; i < sentence.tokens.length; i++) {
	if (i + 1 < sentence.tokens.length &&
	    isRaRemovedWord(sentence.tokens[i],
			    sentence.tokens[i + 1])) {
	    addValidationError(sentence, 'ら抜き言葉を使用しています。');
	    //sentence.tokens.forEach(print);
	}
    }
}
