#INSERTION SORT
Problem - Given an array of integers, sort the array.

const arr = [-6, 20, 8, -4];

INSERTION SORT IDEA
-- Virtually split the array into a sorted and unsorted part.
-- Assume that the first element is already sorted and remaining elements are unsorted.
-- Select an unsorted element and compare with all elements in the sorted part.
-- If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else shift the larger elements in the sorted part towards the right.
-- Insert the selected element at the right index
-- Repeat till all the unsorted elements are placed in the right order.


#QUICK SORT
Problem - Given an array of integers, sort the array.

const arr = [-6, 20, 8, -4];

QUICK SORT IDEA
-- Identify the pivot element in the array
  - Pick the first element as pivot 
  - Pick last element as pivot (or approach)
  - Pick a random element as pivot
  - Pick median as pivot
-- Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array.
-- Repeat the process for the individual 'left' and 'right' arrays until you have an array of length 1 which is sorted by definition.
-- Repeatedly concatenate the left array, pivot and right array till one sorted array remains.

#MERGE SORT
Problem - Given an array of integers, sort the array

const arr = [-6, 20, 8, -4];

MERGE SORT IDEA
-- Divide the array into sub arrays, each containing only one element(An array with one element is considered sorted)
--Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array 