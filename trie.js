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
    // try to understand what this line is doing...it may be very useful to put this script
    // into a seperate js file, and run it using Chrome. You can then add break points and
    // step through this function to check out what is happening in the sources tab
    this.characters[char] = subTrie;

  }
  return this;
};


Trie.prototype.getWords = function(words, currentWord){

  // This function will return all the words which are contained in this Trie.
  // where to start?

  // first thing we need to check to see is if we have reached a word (using our isWord property)
  // if so let's add it to the words array

  // now that we have checked for that...

  // we need to loop through all of the characters in our Trie
  // and let's call this function again, using our array of words (make sure this does not get reset to an empty array)
  // but let's make sure to call it with the next word (which should be the current word plus the next letter)
  // finally, when we have looped through the whole Trie, let's return the array of words

};

Trie.prototype.find = function(word, index){

  // In this function we need to go through our word starting at the index provided
  // we should first check to see if the index is less than the length of the word -1
  // and if so, we should call the function again with the next character in the word
    // make sure our index does not reset to 0
  // once we are at the end of the word (if it is in the trie) we should return the node
  // that corresponds to the end of the previously learned word

};

Trie.prototype.autoComplete = function(prefix){
  // This function will return all completions for a given prefix.
  // It should use find and getWords.

  // this is what we build our Trie for, so what do we need to do?
  // we need to see if our tree contains the prefix (can't autocomplete "taco" if our Trie has "foo")
  // if we have a prefix, let's find all of the words for this subTrie
  // otherwise return an empty array
  // this can be done with 2-5 lines of code!

};

try{
  module.exports = Trie;
} catch(e){

}