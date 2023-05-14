/**
 * Merge two sorted Array
 *
 * @remarks Don't allow to use any sort function
 *
 * @param collection - The 1st collection as sorted integer array
 * @param collection2 - The 2nd collection as sorted integer array
 *
 * @return merged 2 collection and sorted value
 *
 */
export function mergeAndSortArrays(collection: number[], collection2: number[]): number[] {
    try {
        // result array
        const resultArray:number[] = []

        // size of collection
        const leftSize = collection.length
        const rightSize = collection2.length

        // iteration
        let i = 0
        let j = 0

        while (i < leftSize && j < rightSize){

            // current value
            let currentLeft= collection[i]
            let currentRight= collection2[j]

            if(currentLeft < currentRight){
                resultArray.push(currentLeft)
                i++
            }else {
                resultArray.push(currentRight)
                j++
            }
        }

        while (i < leftSize){
            resultArray.push(collection[i])
            i++
        }

        while (j < rightSize){
            resultArray.push(collection2[j])
            j++
        }

        return resultArray

    }catch (e) {
        throw e
    }
}