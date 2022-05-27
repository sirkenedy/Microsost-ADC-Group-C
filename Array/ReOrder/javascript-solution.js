function reOrderEvenFirst(data)
{
    let currentEvenNumberIndex = -1;
    for (let i = 0; i < data.length; i++) {
        for (let j = i; j < data.length; j++) {
            if (data[j] % 2 == 0)
                if (currentEvenNumberIndex < 0) currentEvenNumberIndex =  j;
        }
        if(currentEvenNumberIndex < 0) return data;
        let temp = data[i];
        data[i] = data[currentEvenNumberIndex];
        data[currentEvenNumberIndex] = temp;
        currentEvenNumberIndex = -1;
    }
}

// TIME COMPLEXITY - O(n^2)
//  SPACE COMPLEXITY - O(1)

console.log(reOrderEvenFirst([1,3,2,6,7,8,2,12,5,90,3,6,76,77,34,2]))