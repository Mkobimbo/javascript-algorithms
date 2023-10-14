function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let numberToInsert = arr[i];
        while(j >= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j+1] = numberToInsert;
    }
    return arr;
}

// Big-O = O(n^2)