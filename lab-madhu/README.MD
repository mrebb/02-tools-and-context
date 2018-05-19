<img src="https://travis-ci.org/travis-ci/travis-web.svg?branch=master">
List module
=================
List lib module has below methods that tests for different cases

1) push(): Takes an argument, add to object and return new length of array. Verified for new element and length of array.

2) pop(): Removes the last element from an array and returns that element. This method changes the length of the array. Verified with tests for removed element is returned to caller and length of array is changed after pop.


3) forEach(): Executes a provided function once for each array element and returns undefined. Tested for undefined and iterations.

4) map(): Test that map creates a new array with the results of calling a provided function on every element in the calling array. Also verified that map has a function as input

5) filter(): Test that filter creates a new array with all elements that pass the test implemented by the provided function. Also verified that filter has a function as input

6) reduce(): Test that reduce applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. Also verified that reduce has a function as input.
