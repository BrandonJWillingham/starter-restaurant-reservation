export default function sortByDate(reservations, compareDate){
    // console.log(reservations)
    if(Array.isArray(reservations)){
        if(reservations.length <= 1){
            return reservations
        }


        const middle = Math.floor(reservations.length /2)

        const left = reservations.splice(0,middle)
        // console.log("left: ", left)
        const right = reservations
        // console.log("right: ", right)
        
        const leftSorted = sortByDate(left,compareDate)
        const rightSorted = sortByDate(right,compareDate)

        // console.log("sortByDate: ",leftSorted, rightSorted)

        return merge(compareDate, leftSorted, rightSorted)
    }
    
    console.log(reservations)
    return reservations
}


function merge(compare,leftSorted,rightSorted){
    const sorted = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftSorted.length && rightIndex < rightSorted.length){
        const comparison = compare(leftSorted[leftIndex],rightSorted[rightIndex])

        

        if(comparison < 0){
            sorted.push(leftSorted[leftIndex])
            leftIndex++
        } else{
            sorted.push(rightSorted[rightIndex])
            rightIndex++
        }
    }
    // console.log("merge sorted:", sorted)
    return sorted.concat(
        leftIndex < leftSorted.length ? leftSorted.slice(leftIndex) : rightSorted.slice(rightIndex)
    )
}
