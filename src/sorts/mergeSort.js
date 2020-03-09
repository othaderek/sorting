const merge = (leftArray, rightArray) => {
    let i = 0;
    let j = 0;
    let sortedArray = [];

    while (i < leftArray.length && j < rightArray.length){
        if (leftArray[i] < rightArray[j]){
            sortedArray.push(leftArray[i])
            i++
        } else {
            sortedArray.push(rightArray[j])
            j++
        }
    }

    while (i < leftArray.length){
        sortedArray.push(leftArray[i])
        i++
    }

    while (j < rightArray.length){
        sortedArray.push(rightArray[j])
        j++
    }
    return sortedArray

}

const mergeSort = (array) => {
    if (array.length <= 1) return array

    let halfArray = Math.ceil(array.length/2)
    let leftArray = mergeSort(array.slice(0, halfArray))
    let rightArray = mergeSort(array.slice(halfArray))
    return merge(leftArray, rightArray);
}

export default mergeSort;
