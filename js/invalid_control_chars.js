function validateSentence(sentence) {
    // allowed control characters are: TAB, CR, LF, CLS (Page Separator in Emacs),
    var pat = new RegExp('([\x00\x01-\x08\x0b\x0e-\x1f])', 'g');

    while (m = pat.exec(sentence.content)) {
	ch = m[1].charCodeAt(0)
        addError('不正なコントロールシーケンス "' + '^'+String.fromCharCode(ch + 'A'.charCodeAt(0) - 1) + '" (' + ch + ') を利用しています。', sentence);
    }
}
