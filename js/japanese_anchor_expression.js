var patterns = ['[一二三四五六七八九０-９]+章', '[一二三四五六七八九０-９]+節'];

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
            addError('適切でない章節アンカー "' + m[0] + '" を利用しています。', sentence);
        }
    });
}
