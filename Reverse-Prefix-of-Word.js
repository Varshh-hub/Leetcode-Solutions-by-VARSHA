/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) 
{
    let idx = -1;
    for (let i = 0; i < word.length; i++) 
    {
        if (word[i] === ch) 
        {
            idx = i;
            break;
        }
    }
    if (idx === -1) 
    {
        return word;
    }
    let arr = word.split('');
    let left = 0, right = idx;
    while (left < right) 
    {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr.join('');
};
