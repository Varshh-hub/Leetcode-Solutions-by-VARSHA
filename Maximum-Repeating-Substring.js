var maxRepeating = function(s, w) 
{
    let k = 0;
    let t = w;
    while (s.includes(t)) 
    {
        k++;
        t += w;
    }
    return k;
};
