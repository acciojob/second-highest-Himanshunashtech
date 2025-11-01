function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }
    
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    let secondMax = -Infinity;
    let foundSecond = false;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max && arr[i] > secondMax) {
            secondMax = arr[i];
            foundSecond = true;
        }
    }
    
    if (!foundSecond) {
        return -Infinity;
    }
    
    return secondMax;
}
}