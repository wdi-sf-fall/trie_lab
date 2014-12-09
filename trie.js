Trie = function(){
  this.characters = {};
};

Trie.prototype.learn = function(word, index){

  index = index || 0;
  // once it has reached the length of the word
  // it should add a property called isWord which should be set to true
    // we're going to need this later when we find all the words

  if(index === word.length){
    this.isWord = true;
  }
  // otherwise we s tart building the Trie
  else if(index < word.length){
    // set a variable equal to the character that we are at
    var char = word[index];
    // create another trie which will either have that character
    // or be a new instance of the Trie (don't want dupes!)
    var subTrie = this.characters[char] || new Trie();
    // tell this subtrie to learn the next word and move to the next letter
    subTrie.learn(word, index+1);
    this.characters[char] = subTrie;

  }
  return this;
};


Trie.prototype.getWords = function(words, currentWord){
  // This function will return all the words which are
  // contained in this Trie.
  // it will use currentWord as a prefix,
  // since a Trie doesn't know about its parents.

  // so where to start?
};

Trie.prototype.find = function(word, index){
  // This function will return the node in the trie
  // which corresponds to the end of the passed in word.
  // Be sure to consider what happens if the word is not in this Trie.

  // so where to start?
};

Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions
  // for a given prefix.
  // It should use find and getWords.

  // so where to start?
};

try{
  module.exports = Trie
} catch(e){

}