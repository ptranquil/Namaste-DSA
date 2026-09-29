/**
 * @param {string} s
 * @return {string}
 */

// EVEN - ODD logic
var reorganizeString = function (s) {
    let freq = {};
    let maxFreq = 0;
    for (let c of s) {
        freq[c] = (freq[c] || 0) + 1;
        maxFreq = Math.max(maxFreq, freq[c])
    }
    let n = s.length;
    if (maxFreq > Math.ceil(n / 2)) {
        return "";
    }

    // As the value are lowercase english character, this wont take TC is O(26)
    let chars = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
    let res = new Array(n);

    let i = 0;
    for (let ch of chars) {
        let count = freq[ch];
        while (count > 0) {
            if (i >= n) i = 1;
            res[i] = ch;
            i = i + 2;
            count--
        }
    }
    return res.join("")
};



// Using PQ
/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {

    const freq = new Map();
    for (const ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1)
    }

    const pq = new MaxPriorityQueue((item) => item.freq);

    for (const [ch, count] of freq) {
        pq.enqueue({ ch, freq: count });
    }


    let res = "";
    let prev = null;
    while (!pq.isEmpty()) {

        const curr = pq.dequeue();
        res += curr.ch;
        curr.freq--;

        // Reinsert the previously used character 
        if (prev && prev.freq > 0) {
            pq.enqueue(prev);
        }

        // Hold the current character for the next iteration 
        prev = curr;
    }
    return res.length === s.length ? res : "";
};