#~MACRAME BRACELETS PATTERN GENERATION CODE~

##~METHODS~

This program plots Macrame Bracelets using three methods:

- The first method is by human input;
- The second by random symetrical generation;
- And the third by converting binary strings inputed by the user in patterns.

##~PATTERNS DESCRIPTION~

The odd rows always has a number of knots equal to half the number of strings (num_str/2).

And the even rows always has a number of knots equal to half the number of strings minus one (num_str/2-1).

The even rows always skip the border strings;

And the knots are always made between two adjacent strings.

##~TYPES OF KNOTS~

There are four types of knots:

- The right-right knot (2): where the human make a double knot (two knots on the right direction) with the left string in the right one.
~*This knot has a color equal to the left string color and results in the change of the left string for the right.*~

- The left-left knot (-2): where the human make a double knot (two knots on the left direction) with the right string in the left one. 
~*This knot has a color equal to the right string color and results in the change of the right string for the left.*~

- The right-left knot (1): where the human make a double knot (one knot on the right direction and one on the left) with the left string in the right one. 
~*This knot has a color equal to the left string color and don't results in any change on the strings order.*~

- The right-left knot (-1): where the human make a double knot (one knot on the left direction and one on the right) with the right string in the left one. 
~*This knot has a color equal to the right string color and don't results in any change on the strings order.*~


##~OUTPUT~
 
  - Text and JSON files with the pattern strings. 
  
  - PNG image with the pattern preview.


