function validateSentence(sentence) {
    var pat = new RegExp("[\u4e00-\u9faf]{6,}", 'g');

    while (m = pat.exec(sentence.content)) {
        addError('長い熟語 "' + m[0] + '" (' + m[0].length + ') が使われています。', sentence);
    }
}
