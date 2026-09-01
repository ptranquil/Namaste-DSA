var lemonadeChange = function(bills) {
    let map = new Map();

    for(let bill of bills){
        let freq = map.get(bill) || 0;
        if(bill === 5){
            map.set(bill, freq + 1)
        } else if (bill === 10){
            let freq = map.get(5) || 0;
            if(freq === 0) return false;

            map.set(5, freq-1);
            map.set(10, (map.get(10)||0)+1);
        } else {
            let tens = map.get(10);
            let fives = map.get(5);

            if (tens > 0 && fives > 0) {
                map.set(5, fives-1);
                map.set(10, tens-1);
            } else if (fives >= 3) {
                map.set(5, fives-3);
            } else {
                return false;
            }
        }
    }


    return true;
};