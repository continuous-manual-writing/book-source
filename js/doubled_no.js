function validateSentence(sentence) {
    var q = []
    var st = 0;
    for (var i = 0; i < sentence.tokens.length; i++) {
	var t = sentence.tokens[i];
	switch (st) {
	case 0:
	    if (t.tags[0] == '助詞' && t.tags[6] == 'の') {
		q.push(t.tags[6]);
		st = 1;
	    }
	    break;
	case 1:
	    if (t.tags[0] == '名詞') {
		q.push(t.tags[6]);
	    } else {
		if (t.tags[0] == '助詞' && t.tags[6] == 'の') {
		    q.push(t.tags[6]);
		    st = 2;
		} else {
		    q = []
		    st = 0;
		}
	    }
	    break;
	case 2:
	    addError("助詞「の」が連続しています: \"〜" + q.join("") + "〜\"", sentence);
	    st = 0;
	    break;
	}
    }
}
