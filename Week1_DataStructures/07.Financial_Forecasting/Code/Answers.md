Recursion:
    Recursion is a programming technique where a method calls itself to solve smaller instances of the same problem and the corresponding function is called a recursive function.
    It is particularly useful for problems that can be broken into smaller subproblems.

4. Analysis:
Time Complexity of Recursive Algorithm:

The time complexity of the simple recursive algorithm is O(n), here n is the number of years. This is because the function makes one recursive call for each year, reducing the years parameter by 1 in each call until it reaches 0.

Optimization of Recursive Solution:

When we use recursion, sometimes the same values get calculated many times, which wastes time. To fix this, we can use a method called memoization. It means we store the result for each year (or step) once we calculate it, either in an array or a map. Then, if we need that value again, we just use the stored one instead of doing the work again. This way, we avoid extra work and make the program faster. The time complexity stays O(n), but it's much more efficient.

