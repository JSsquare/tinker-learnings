// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]


const groupAnagrams = function(strs) {
    let map = new Map();
    
    for(let str of strs){
        let sortedStr = str.split('').sort().join('');
        if(map.has(sortedStr)){
            map.get(sortedStr).push(str);
        } else {
            map.set(sortedStr, [str]);
        }
    }
    
    return Array.from(map.values()); 
};