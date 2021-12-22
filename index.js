var currentPrompt = 0;
var prompts = [
    'type your name',
    'type an adjective',
    'type a noun',
];

// Put first prompt in all html elements with class prompt
var nextPrompt = function() {
    $('.prompt').html(prompts[currentPrompt]);
}

$('button').click(function() {
    nextPrompt();
})