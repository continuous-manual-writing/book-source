function validateSentence(sentence) {
    var pat = new RegExp("[\uff61-\uff9f]+", 'g');

    while (m = pat.exec(sentence.content)) {
	var marked = m[0]
        addError('半角カナ文字 "' + marked + '" を利用しています。', sentence);
    }

    if (sentence.content.contains("\u3099") || sentence.content.contains("\u309a")) {
        addError('Unicode Normalization Form D を利用しています。', sentence);
    }
}
