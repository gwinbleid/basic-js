class VigenereCipheringMachine {

  constructor(mode = true) {
    this.mode = mode === false ? 'reverse' : 'direct';
  }

  _charcode(item) {
    return item.charCodeAt(0) - 65;
  }

  _ciphering(message, key, decrypt) {
    let keyIndex = 0, keyChar, output = [];
    message = message.toUpperCase(), key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if ('A' <= message[i] && message[i] <= 'Z') {
        keyChar = key[keyIndex % key.length];
        output.push(
            String.fromCharCode(
                ((this._charcode(message[i]) + (decrypt ? 26 - this._charcode(keyChar) : this._charcode(keyChar)))
                    % 26 + 65)
            )
        )

        keyIndex++;
      } else {
        output.push(message[i]);
      }
    }

    return this.mode === 'direct' ? output.join('') : output.reverse().join('');
  }

  encrypt(message, key) {
    if(!message || !key) throw new Error();
    return this._ciphering(message, key, false);
  }

  decrypt(message, key) {
    if(!message || !key) throw new Error();
    return this._ciphering(message, key, true);
  }
}


module.exports = VigenereCipheringMachine;
