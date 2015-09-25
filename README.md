# sorta_Sorting_Things_of_Sorts


## Bubble Sort [Best: O(n), Worst:O(N^2)]
Moving left to right, compare two values and place the larger one on the right, continue moving down the list of values until the end is reached. Upon reaching the end, start back at the beginning until no values swap places after passing through the array.


### [4,2,3,1] Bubble Sort
iteration: index: 0,1 --> 1,2 --> 2,3
1st:        2,4,3,1 --> 2,3,4,1 --> 2,3,1,4
2nd:        2,3,1,4 --> 2,1,3,4 --> 2,1,3,4
3rd:        1,2,3,4 --> 1,2,3,4 --> 1,2,3,4



## Selection Sort [Best/Worst: O(N^2)]
Check entire array, find smallest, swap places with item in the front. Repeat starting at next index.

### [3,4,2,1] Selection Sort
iteration: array | sorted sublist
1st:       1,4,2,3  | 1
2nd:       1,2,4,3  | 1,2
3rd:       1,2,3,4  | 1,2,3
4th:       1,2,3,4  | 1,2,3,4



## Insertion Sort [Best: O(N), Worst:O(N^2)]
Take the two leftmost values, sort them. Take the value of the next index, compare it to the sorted values and insert it where it belongs in relation. Repeat.

### [4,1,3,2] Insertion sort
iteration: sorted/unsorted
1:           1,4 / 3,2
2:         1,3,4 / 2
3:       1,2,3,4 /



## Quicksort [Best: O(N lg N), Avg: O(N lg N), Worst:O(N^2)]
Pick a random value, compare every value to it, place bigger ones in one array and smaller ones into another. Pick one of the created arrays and repeat. Unsorted values with no other unsorted values near them are in their correct sorted position.

### [7,2,4,5,3,1,6] Quicksort
iteration: /unsorted/ [sorted]
1:    /2,4,3,1/   [5] /7,6/
2:    [1] /2,4,3/ [5] /7,6/
3:    [1] /[2]/ [3] /[4]/ [5] /7,6/
4:    [1,2,3,4,5] [6] /[7]/




## Mergesort [Best: O(N lg N), Avg: O(N lg N), Worst:O(N lg N)]
Compares elements next to each other and creates multiple sorted arrays of 2. Compares starting elements of two sorted arrays and merges them while sorting remaining elements. Continues on for all arrays of same teir. Repeat until all arrays are merged.

### [7,2,4,5,3,1,6] Mergesort
iteration: start: [7] [2] [4] [5] [3] [1] [6]
1: [2,7] [4,5] [1,3] [6]
2: [2,4,5,7] [1,3,6]
3: [1,2,3,4,5,6,7]

