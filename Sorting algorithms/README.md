Problem - Given an array of integers, sort the array.

const arr = [-6, 20, 8, -4];

INSERTION SORT IDEA
-- Virtually split the array into a sorted and unsorted part.
-- Assume that the first element is already sorted and remaining elements are unsorted.
-- Select an unsorted element and compare with all elements in the sorted part.
-- If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else shift the larger elements in the sorted part towards the right.
-- Insert the selected element at the right index
-- Repeat till all the unsorted elements are placed in the right order.