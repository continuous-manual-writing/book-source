var patterns = ['[一二三四五六七八九０-９][一二三四五六七八九０-９.．〜、]*[つの]', '(ひと|ふた|[みよむや]っ|いつ|ここの)つ'];

function compiled(patterns) {
    var o = [];
    for (var k in patterns) {
        o.push(new RegExp(patterns[k], 'g'));
    }
    return o;
}

function validateSentence(sentence) {
    compiled(patterns).forEach(function (pat) {
        var m = null;
        while (m = pat.exec(sentence.content)) {
            addError('適切でない計数表現 "' + m[0] + '" を利用しています。', sentence);
        }
    });
}
