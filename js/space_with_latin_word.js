function validateSentence(sentence) {
    var shard = "[^A-Za-z0-9 !@#$%^&*()_+=[\\]\\\\{}|=<>,.{};':\",./<>?（）［］｛｝-]";
    var word = "[A-Za-z0-9 !@#$%^&*()_+=[\\]\\\\{}|=<>,.{};':\",./<>?（）｛｝［］-]+";
    var pat = new RegExp(shard + "\\s+(" + word + ")\\s+" + shard, 'g');

    while (m = pat.exec(sentence.content)) {
	word = m[1]
	if (!word.contains(' ')) {
            addError('単語 "' + word + '" の周囲にスペースが入っています。', sentence);
	}
    }
}
