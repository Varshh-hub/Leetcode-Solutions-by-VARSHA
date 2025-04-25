var checkRecord = function(s) {
    let aCount = 0;
    let lCount = 0;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch === 'A') {
            aCount++;
            lCount = 0;
            if (aCount >= 2) {
                return false;
            }
        } else if (ch === 'L') {
            lCount++;
            if (lCount >= 3) {
                return false;
            }
        } else {
            lCount = 0;
        }
    }

    return true;
};
