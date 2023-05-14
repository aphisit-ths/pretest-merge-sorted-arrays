import {mergeSortedArrays} from "./app";

// default case
const input = [1,3,5,7,9]
const input2 = [2,4,6,8,10]
const expectedResult = [1,2,3,4,5,6,7,8,9,10];

// imbalance size
const inputWithImbalanceSize = [0,1,3]
const expectedImbalance = [0,1,2,3,4,6,8,10]

// some duplicate values
const inputWithSomeDuplicateValue = [2,2,4,4,4,10,10,11,11,20,20]
const expectedSomeDuplicateValue = [1,2,2,3,4,4,4,5,7,9,10,10,11,11,20,20]

// all duplicate values
const inputWithAllDuplicateValue = [6,6,6,6,6]
const expectedAllDuplicateValue = [1,3,5,6,6,6,6,6,7,9]
const expectedAllBothDuplicateValue = [6,6,6,6,6,6,6,6,6,6]

// empty array
const inputWithEmptyArray:number[] = []

describe('Merge Sorted Arrays', () => {

    it('T01: should merge 2 sorted array', () => {
        const mergedArray = mergeSortedArrays(input,input2)
        expect(mergedArray).toEqual(expectedResult);
    });

    it('T02: should merge when one side is empty array (collection 1)', function () {
        const merged = mergeSortedArrays(inputWithEmptyArray,input2)
        expect(merged).toEqual(input2)
    });

    it('T02: should merge when one side is empty array (collection 2)', function () {
        const merged = mergeSortedArrays(input ,inputWithEmptyArray)
        expect(merged).toEqual(input)
    });

    it('T04: should merge when both side is empty array', function () {
        const merged = mergeSortedArrays(inputWithEmptyArray ,inputWithEmptyArray)
        expect(merged).toEqual(inputWithEmptyArray)
    });

    it('T05: should merge when imbalance array (collection 1)', () => {
        const mergedResultWithImbalance = mergeSortedArrays(inputWithImbalanceSize,input2)
        expect(mergedResultWithImbalance).toEqual(expectedImbalance);
    });

    it('T06: should merge when imbalance array (collection 2)', () => {
        const merged = mergeSortedArrays(input2,inputWithImbalanceSize)
        expect(merged).toEqual(expectedImbalance);
    });

    it('T07: should merge when array has some duplicate value (collection 1)', () => {
        const merged = mergeSortedArrays(inputWithSomeDuplicateValue,input)
        expect(merged).toEqual(expectedSomeDuplicateValue);
    });

    it('T08: should merge when array has some duplicate value (collection 2)', () => {
        const merged = mergeSortedArrays(input ,inputWithSomeDuplicateValue)
        expect(merged).toEqual(expectedSomeDuplicateValue);
    });

    it('T09 :should merge when array has all duplicate value (collection 1)', () => {
        const merged = mergeSortedArrays(inputWithAllDuplicateValue ,input)
        expect(merged).toEqual(expectedAllDuplicateValue);
    });

    it('T10: should merge when array has all duplicate value (collection 2)', () => {
        const merged = mergeSortedArrays(input ,inputWithAllDuplicateValue)
        expect(merged).toEqual(expectedAllDuplicateValue);
    });

    it('T11: should merge when array has all duplicate value', () => {
        const merged = mergeSortedArrays(inputWithAllDuplicateValue ,inputWithAllDuplicateValue)
        expect(merged).toEqual(expectedAllBothDuplicateValue);
    });


});