class Trie{

  constructor(){

      this.children ={}
      this.endWord = false;
  }
  insert(word){

      let newNode = this

      for(let i=0;i<word.length;i++){

          const char = word[i];

          if(!newNode.children[char]){

              newNode.children[char] = new Trie()
          }
          newNode = newNode.children[char]
      }
      newNode.endWord = true;
  }
  Search(word){

      let newNode = this
       

      for(let i=0;i<word.length;i++){
          const char = word[i]
          if(!newNode.children[char]){

              return false
          }
          newNode = newNode.children[char]
      }
      return newNode.endWord
  }


  autocomplete(prefix) {
      let newNode = this;
      let words = [];
      for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i];
        if (!newNode.children[char]) {
          return words;
        }
        newNode = newNode.children[char];
      }
      this.displayWords(prefix, newNode   );
    }
  

   displayWords(prefix="" , newNode=this) {
  if (newNode.endWord) {
    console.log(prefix);
  }

  for (const [char, child] of Object.entries(newNode.children)) {
    this.displayWords(prefix + char, child);
  }
}


}

const trie = new Trie()

trie.insert("rashid")
trie.insert("arjun")
trie.insert("shamil")
trie.insert("raaa")
trie.insert("abayr")


trie.autocomplete("r");
console.log(trie.Search("raaa"));