// Created by SO-C
// source: https://github.com/so-c/redpen-validator
function validateSentence(sentence) {
    sentence.tokens.forEach(function(token, index, ary) {
	if (isKoto(token) ||
	    isTori(token) ||
	    isTsunagi(token) ||
	    isTatsu(token) ||
	    isOmoshiroi(token) ||
	    isUreshii(token) ||
	    isNashi(token) ||
	    isAri(token) ||
	    isEru(token) ||
	    isOmune(token) ||
	    isAgeru(token) ||
      isHajime(token)
	   ) {
	    addError('推奨しない漢字が「' + token.surface + '」で使われています。', sentence);
	}
    });
}

function isKoto(token) {
    if (token.tags[6] === '事' &&
	token.tags[0] === '名詞' &&
	token.tags[1] === '非自立') {
	return true;
    }
    return false;
}

function isTori(token) {
    if (token.tags[6] === '通り' &&
	token.tags[0] === '名詞' &&
	token.tags[1] === '一般') {
	return true;
    }
    return false;
}

function isTsunagi(token) {
    if ((token.tags[6] === '繋ぎ' &&
	 token.tags[0] === '名詞' &&
	 token.tags[1] === '一般') ||
	(token.tags[6] === '繋がり' &&
	 token.tags[0] === '名詞' &&
	 token.tags[1] === '一般') ||
	(token.tags[6] === '繋ぐ' &&
	 token.tags[0] === '動詞' &&
	 token.tags[1] === '自立') ||
	(token.tags[6] === '繋げる' &&
	 token.tags[0] === '動詞' &&
	 token.tags[1] === '自立') ||
	(token.tags[6] === '繋がる' &&
	 token.tags[0] === '動詞' &&
	 token.tags[1] === '自立')
       ) {
	return true;
    }
    return false;
}

function isTatsu(token) {
    if (token.tags[6] === '経つ' &&
	token.tags[0] === '動詞' &&
	token.tags[1] === '自立') {
	return true;
    }
    return false;
}

function isOmoshiroi(token) {
    if (token.tags[6] === '面白い' &&
	token.tags[0] === '形容詞' &&
	token.tags[1] === '自立') {
	return true;
    }
    return false;
}

function isUreshii(token) {
    if (token.tags[6] === '嬉しい' &&
	token.tags[0] === '形容詞' &&
	token.tags[1] === '自立') {
	return true;
    }
    return false;
}

function isNashi(token) {
    if ((token.tags[6] === '無し' &&
	 token.tags[0] === '形容詞' &&
	 token.tags[1] === '自立') ||
	(token.tags[6] === '無し' &&
	 token.tags[0] === '名詞' &&
	 token.tags[1] === '接尾')
       ) {
	return true;
    }
    return false;
}

function isAri(token) {
    if ((token.tags[6] === '有る' &&
	 token.tags[0] === '動詞' &&
	 token.tags[1] === '自立')) {
	return true;
    }
    return false;
}

function isEru(token) {
    if ((token.tags[6] === '得る' &&
	 token.tags[0] === '動詞' &&
	 token.tags[1] === '非自立') ||
	(token.tags[6] === '有り得る' &&
	 token.tags[0] === '動詞' &&
	 token.tags[1] === '自立')
       ) {
	return true;
    }
    return false;
}

function isOmune(token) {
  if (token.tags[6] === '概ね' &&
    token.tags[0] === '副詞' &&
    token.tags[1] === '一般') {
      return true;
    }
    return false;
}

function isAgeru(token) {
    if (token.tags[6] === '上げる' &&
    token.tags[0] === '動詞' &&
    token.tags[1] === '非自立') {
      return true;
    }
    return false;
}

function isHajime(token) {
    if (token.tags[6] === '始め' &&
      token.tags[0] === '名詞' &&
      token.tags[1] === '副詞可能') {
        return true;
    }
    return false;
}

function isTatsu(token) {
    if (token.tags[6] === '経つ' &&
      token.tags[0] === '動詞' &&
      token.tags[1] === '自立') {
        return true;
    }
    return false;
}
