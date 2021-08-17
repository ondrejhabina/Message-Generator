//Message generator that is the oracle of the Nordic gods

//template message: god + verb + phrase + adj example: Odin tore his book vigorously :)

//Object containing everything
const messageGen = {
    //arrays holding strings to mix up
    _gods: ['Odin', 'Freya', 'Thor', 'Loki', 'Balder', 'Hod', 'Heimdall', 'Tyr'],
    _verbs: ['works with', 'screws', 'listens to', 'hurts', 'kills', 'praises', 'respects', 'worries about', 'hunts for'], 
    _phrases: ['your mama', 'this world of miscreants' , 'Surtrs chances to rule', 'the Dwarven princess',
     'your day', 'your future', 'your past mistakes', 'the realm of dreams', 'Raynor and Tassadar', 'lovely bear',
      'a wrongfully accused inmate', 'your last wonderful day', 'sands of time', 'worthless gnats'],
    _adjectives: ['passionately', 'lazily', 'lustily', 'woefully', 'vengefully', 'wonderfully', 'emotionlessly', 'emotively', 'hastily', 'loudly'],
    //getters
    get gods() {
        return this._gods;
    },
    get verbs() {
        return this._verbs;
    },
    get phrases() {
        return this._phrases;
    },
    get adjectives() {
        return this._adjectives;
    },
    // methods for determining each string by number generators
    godGen() {
        let godIndex = Math.floor(Math.random() * this.gods.length);
        return this.gods[godIndex];
    },
    verbGen() {
        let verbIndex = Math.floor(Math.random() * this.verbs.length);
        return this.verbs[verbIndex];
    },
    phraseGen() {
        let phraseIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[phraseIndex];
    },
    adjectiveGen() {
        let adjIndex = Math.floor(Math.random() * this.adjectives.length);
        return this.adjectives[adjIndex];
    },
    //putting the message together
    genMessage() {
        let god = this.godGen();
        let verb = this.verbGen();
        let phrase = this.phraseGen();
        let adj = this.adjectiveGen();     
        function commentGen() { //function to determine the final comment
            let comment = '';
            if (god == 'Odin') {
                comment = 'You life will be touched by wisdom.';
            } else if (god == 'Freya') {
                comment = 'Look out for love and lust.';
            } else if (god == 'Thor') {
                comment = 'Try and be slower to anger.';
            } else if (god == 'Loki') {
                comment = 'Watch. Your. Every. Step.';
            } else if (god == 'Balder') {
                comment = 'Dont let your vanity lead to your doom.';
            } else if (god == 'Hod') {
                comment = 'Trust only those who earn it.';
            } else if (god == 'Heimdall') {
                comment = 'Your eyesight is unrivaled.';
            } else if (god == 'Tyr') {
                comment = 'Offence is the best defense'; //node messageGenerator.js
            } else {
                comment = 'Something went wrong';
            }
            return comment;
        }
        let comment = commentGen();
        let message = `Oracles says this: ${god} ` + `${verb} `+ `${phrase}, `+ `${adj}. `+ `${comment}`;
        return message;
    }
}

console.log(messageGen.genMessage());