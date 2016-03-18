function validateSentence(sentence) {
    var pat = new RegExp('([`])', 'g');

    while (m = pat.exec(sentence.content)) {
	ch = m[1]
        addError('不正な文字 "' + ch + '" を利用しています。', sentence);
    }
}
