# cylindrical-coordinates
Colors can be represented using cylindrical coordinates, in a model named HSV. Say you have a very long vector of HSV color tuples (unordered) defned as (h, s, v) where h is the hue in degrees [0°, 360°), s and v are saturation and value, respectively, in percentage. Your objective is to obtain all pairs of complementary colors from this vector. The complementary color of (h, s, v) is defned as (h + 180°, s, v). How would you implement a function to perform this operation in the most optimized way?



Solution:

Complementary colors in cylindrical color coordinates tend to have a difference of 180deg in Hue.
The following array contains objects of multiple values which are cylindrical coordinates.
var arr = [
  [195, 11, 12],
  [37, 13, 76],
  [165, 65, 52],
  [217, 51, 82],
  [60, 29, 45],
  [240, 21, 44],
  [325, 1, 30],
  [145, 55, 22],
  [20, 99, 51],
  [200, 28, 85],
  [45, 16, 22],
  [225, 64, 10]
]
Our job is to get the complimentary colors paired

I have used a hashmap in order to fetch the keys directly instead of having to loop the array which will result in an increase in time complexity.
