var Trie = function () {
    this.root = {
        children: {},
        endOfWord: false
    }
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let curr = this.root;
    for (let char of word) {
        if (!curr.children[char]) {
            curr.children[char] = {
                children: {},
                endOfWord: false
            }
        }
        curr = curr.children[char];
    };
    curr.endOfWord = true;

    /** 
     * @param {string} word
     * @return {boolean}
     */
    Trie.prototype.search = function (word) {
        let curr = this.root;
        for(let char of word){
            if(!curr.children[char]) return false;
            curr = curr.children[char];
        }
        if(curr.endOfWord) return true;
        return false;
    };

    /** 
     * @param {string} prefix
     * @return {boolean}
     */
    Trie.prototype.startsWith = function (prefix) {
        let curr = this.root;
        for(let char of prefix){
            if(!curr.children[char]) return false;
            curr = curr.children[char];
        }
        return true;
    };
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */