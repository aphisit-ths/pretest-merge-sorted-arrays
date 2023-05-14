import {mergeAndSortArrays} from "./app";

const input = [1,3,5,7,9]
const input2 = [2,4,6,8,10]
const expectedResult = [1,2,3,4,5,6,7,8,9,10];

const inputWithImbalanceSize = [0,1,3]
const expectedImbalance = [0,1,2,3,4,6,8,10]

const inputWithSomeDuplicateValue = [10,10,11,11,20,20]
const expectedSomeDuplicateValue = [1,3,5,7,9 ,10,10,11,11,20,20]

const inputWithAllDuplicateValue = [6,6,6,6,6]
const expectedAllDuplicateValue = [1,3,5,6,6,6,6,6,7,9]


const inputWithEmptyArray:number[] = []

describe('Merge Sorted Arrays', () => {
    it('should merge 2 sorted array', () => {
        const mergedArray = mergeAndSortArrays(input,input2)
        expect(mergedArray).toEqual(expectedResult);
    });


    it('should merge when one side is empty array (collection 1)', function () {
        const merged = mergeAndSortArrays(inputWithEmptyArray,input2)
        expect(merged).toEqual(input2)
    });

    it('should merge when one side is empty array (collection 2)', function () {
        const merged = mergeAndSortArrays(input ,inputWithEmptyArray)
        expect(merged).toEqual(input)
    });

    it('should merge when both side is empty array', function () {
        const merged = mergeAndSortArrays(inputWithEmptyArray ,inputWithEmptyArray)
        expect(merged).toEqual(inputWithEmptyArray)
    });

    it('should merge when imbalance array (collection 1)', () => {
        const mergedResultWithImbalance = mergeAndSortArrays(inputWithImbalanceSize,input2)
        expect(mergedResultWithImbalance).toEqual(expectedImbalance);
    });

    it('should merge when imbalance array (collection 2)', () => {
        const sortedNumbers = mergeAndSortArrays(input2,inputWithImbalanceSize)
        expect(sortedNumbers).toEqual(expectedImbalance);
    });

    it('should merge when array has some duplicate value (collection 1)', () => {
        const sortedNumbers = mergeAndSortArrays(inputWithSomeDuplicateValue,input)
        expect(sortedNumbers).toEqual(expectedSomeDuplicateValue);
    });

    it('should merge when array has some duplicate value (collection 2)', () => {
        const sortedNumbers = mergeAndSortArrays(input ,inputWithSomeDuplicateValue)
        expect(sortedNumbers).toEqual(expectedSomeDuplicateValue);
    });

    it('should merge when array has all duplicate value (collection 1)', () => {
        const sortedNumbers = mergeAndSortArrays(inputWithAllDuplicateValue ,input)
        expect(sortedNumbers).toEqual(expectedAllDuplicateValue);
    });

    it('should merge when array has all duplicate value (collection 2)', () => {
        const sortedNumbers = mergeAndSortArrays(input ,inputWithAllDuplicateValue)
        expect(sortedNumbers).toEqual(expectedAllDuplicateValue);
    });


});