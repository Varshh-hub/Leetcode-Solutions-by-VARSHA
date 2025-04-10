/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(f, n) {
    if (n == 0) {
            return true;
        }

        let len = f.length;

        for (let i = 0; i < len; i++) {
            if (f[i] == 0) {
                let lft = (i == 0 || f[i - 1] == 0);
                let rgt = (i == len - 1 || f[i + 1] == 0);

                if (lft && rgt) {
                    f[i] = 1;
                    n--;

                    if (n == 0) {
                        return true;
                    }
                }
            }
        }

        return n == 0; 
};