function encodeAndDecodeMessages() {
    let encodeTextBox = document.getElementsByTagName('textarea')[0];
    let encodeBtn = document.getElementsByTagName('button')[0];

    let decodeTextBox = document.getElementsByTagName('textarea')[1];
    let decodeBtn = document.getElementsByTagName('button')[1];

    encodeBtn.addEventListener('click', encodeMessage);
    decodeBtn.addEventListener('click', decodeMessage);

    function encodeMessage() {
        let message = encodeTextBox.value;
        let newMessage = '';

        for (let i = 0; i < message.length; i++) {
            let newSymbol = String.fromCodePoint(message[i].charCodeAt(0) + 1);

            newMessage += newSymbol;
        }
        decodeTextBox.value = newMessage;
        encodeTextBox.value = '';
        decodeBtn.disabled = false;
    }

    function decodeMessage() {
        let message = decodeTextBox.value;
        let newMessage = '';

        for (let i = 0; i < message.length; i++) {
            let newSymbol = String.fromCharCode(message[i].charCodeAt(0) - 1);

            newMessage += newSymbol;
        }
        decodeTextBox.value = newMessage;
        decodeBtn.disabled = true;
    }
}