# Given an array of strings words and an integer k, return the k most frequent strings.

# Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

 

class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:

        freq_words = {}
        for word in words:
            freq_words[word] = freq_words.get(word, 0) + 1

        sorted_values = sorted(freq_words, key=lambda word: (-freq_words[word], [word]))
       
        lexSortedKeys = [item for item in sorted_values]
       
        return lexSortedKeys[0:k]

