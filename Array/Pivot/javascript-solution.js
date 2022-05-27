function pivotRearrangement(data, pivot) {
    data.forEach((currentElement, index) => {
        if(currentElement > data[pivot] && index < pivot) {
            let temp = currentElement;
            data[index] = data[pivot];
            data[pivot] = temp;
            pivot = index;
        } else if(currentElement < data[pivot] && index > pivot) {
            let temp = currentElement;
            data[index] = data[pivot];
            data[pivot] = temp;
            pivot = index;
        } else {
        }
        // console.log(data, pivot);
    });
    return data;
}

console.log(pivotRearrangement([1,3,1,2,5,9,6,76,4,78,90,45,34,12,4], 7))