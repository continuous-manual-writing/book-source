var markers = ['〜', '？', '！', '~', '?', '!']

function validateSentence(sentence) {
    for (var i = 0; i < markers.length; i++) {
	if (sentence.content.endsWith(markers[i])) {
	    addError('感情的な文末尾 "' + markers[i] + '" を利用しています。', sentence);
	}
    }
}
