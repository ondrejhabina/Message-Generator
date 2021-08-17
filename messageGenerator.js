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
    //method to determine a comment based on what god was selected to speak 
    commentGen() {
        let comment = '';
        if (this.godGen() == 'Odin') {
            comment = 'You life will be touched by wisdom.';
            return comment;
        } else if (this.godGen() == 'Freya') {
            comment = 'Look out for love and lust.';
            return comment;
        } else if (this.godGen() == 'Thor') {
            comment = 'Try and be slower to anger.';
            return comment;
        } else if (this.godGen() == 'Loki') {
            comment = 'Watch. Your. Every. Step.';
            return comment;
        } else if (this.godGen() == 'Balder') {
            comment = 'Dont let your vanity lead to your doom.';
            return comment;
        } else if (this.godGen() == 'Hod') {
            comment = 'Trust only those who earn it.';
            return comment;
        } else if (this.godGen() == 'Heimdall') {
            comment = 'Your eyesight is unrivaled.';
            return comment;
        } else if (this.godGen() == 'Tyr') {
            comment = 'Offence is the best defense';
            return comment;
        } else {
            comment = 'Something went wrong';
            return comment;
        }
    },
    //putting the message together
    genMessage() {
        let god = this.godGen();
        let verb = this.verbGen();
        let phrase = this.phraseGen();
        let adj = this.adjectiveGen();
        let comment = this.commentGen();
        let message = `Oracles says this: ${god} ` + `${verb} `+ `${phrase}, `+ `${adj}. `+ `${comment}`;
        return message;
    }
}

console.log(messageGen.genMessage());