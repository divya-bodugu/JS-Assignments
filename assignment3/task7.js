//Task 7 — Trick Questions (Answer as Comments)

/*
   JS gives an error because there is no object to get values from.
   To avoid the error, we use a default empty object:
   const { a, b } = value ?? {};
   If value is null or undefined, it uses {} instead.
*/


/*
   Yes, map() skips empty spaces in an array just like forEach().
   It only works on elements that have a value.
   A method that does NOT skip holes:
   Array.from()
*/


/*
   [10, 2, 33, 4].sort()
   Output:
   [10, 2, 33, 4]

   This happens because sort() treats numbers as strings by default and
   compares them alphabetically instead of numeric value.
*/


/*
  yes we can skip elements in array destructing by leaving an empty space
   Example:
   const [first, , third] = [10, 20, 30];

   first = 10
   third = 30
   The second value (20) is skipped.
*/


/*
   This is because includes() treats NaN as equal to NaN, while indexOf()
   does not because NaN is not equal to itself with ===.
*/