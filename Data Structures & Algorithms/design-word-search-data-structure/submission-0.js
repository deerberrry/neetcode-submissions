class TrieNode {
    constructor() {
        this.children = new Map();
        this.endOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let cur = this.root

        for(let ch of word) {
            if(!cur.children.has(ch)) {
                cur.children.set(ch, new TrieNode())
            }
            cur = cur.children.get(ch)
        }
        cur.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word, 0, this.root)
    }

    dfs(word, j, root) {
        let cur = root;

        for(let i=j;i<word.length;i++) {
            let ch = word[i]
            if(ch === ".") {
                for(let child of cur.children) {
                    if(this.dfs(word, i+1, child[1])) return true;
                }
                return false;
            }
            else {
                if(!cur.children.has(ch)) return false;
                cur = cur.children.get(ch)
            }
        }
        return cur.endOfWord;
    }
}
