//MACRAME BRACELETS PATTERN GENERATION CODE
//
//METHODS
//This program plot Macrame Bracelets using three methods
//The first method is by human input;
//The second by random symetrical generation;
//And the third by converting binary strings inputed by the user in patterns.
//
//PATTERNS DESCRIPTION
//The odd rows always has a number of knots equal to half the number of strings (num_str/2).
//And the even rows always has a number of knots equal to half the number of strings minus one (num_str/2-1).
//The even rows always skip the border strings;
//And the knots are always made between two adjacent strings.
//
//TYPES OF KNOTS
//There are four types of knots:
//The right-right knot (2): where the human make a double knot (two knots on the right direction) with the left string in the right one. 
//This knot has a color equal to the left string color and results in the change of the left string for the right.
//The left-left knot (-2): where the human make a double knot (two knots on the left direction) with the right string in the left one. 
//This knot has a color equal to the right string color and results in the change of the right string for the left.
//The right-left knot (1): where the human make a double knot (one knot on the right direction and one on the left) with the left string in the right one. 
//This knot has a color equal to the left string color and don't results in any change on the strings order.
//The right-left knot (-1): where the human make a double knot (one knot on the left direction and one on the right) with the right string in the left one. 
//This knot has a color equal to the right string color and don't results in any change on the strings order.
//
//OUTPUT: text and JSON file with the pattern. PNG image with the pattern preview.

function setup() {
  //Colors Declaration
  color_white = color(255);
  color_red = color(255,0,0);
  color_orange = color(255,127,0);
  color_yellow = color(255,255,0);
  color_green = color(0,255,0);
  color_cyan = color(0,255,255);
  color_blue = color(0,0,255);
  color_purple = color(255,0,255);
  color_gray = color(127);
  color_black = color(0);
  
  //DATA INPUT
  //Number of strings (X Axis)  
  let num_str = 16;
  //Number of lines  (Y Axis)
  let num_lines = 32; 
  //Squares Size
  let sqr_size = 8;
  //Number of Squares
  if (num_str % 2 == 0) {  
  num_sqr = num_str/2;}
  else {num_sqr = (num_str-1)/2;}
  
  //INPUT STRINGS COLORS (from border to center)
  //Add comment slashes on the next for loop if you want to declare all the colors manually (not symmetrical color patterns)
  str_color=[color_red, color_yellow, color_red, color_yellow, color_red, color_yellow, color_red, color_yellow,
color_red, color_yellow, color_red, color_yellow, color_red, color_yellow, color_red, color_yellow];
  
str_color_init=str_color;
  //Duplicate the String Colors Array to get a Symetrical Image
  for (let i=0; i<num_str/2; i++)
  {
    str_color[num_str/2+i]=str_color[num_str/2-i-1];
  }
  
  //BACKGROUND CREATION
  createCanvas(num_sqr*sqr_size, num_lines*sqr_size);
  background(color_white);
  
  //Uncomment or add comment slash to chose the method of generation of the pattern
  let macrame_pattern = [];
  
  //MANUAL INPUT OF MACRAME PATTERN 
  //(2 for right-right displacement, -2 for left-left displacement)
  //(1 for right-left knot without displacement, -1 for left-right knot without displacement)  
  macrame_pattern[0] = [2, 1, 2, 1]; 
  macrame_pattern[1] = [2, 1, 1];
  macrame_pattern[2] = [1, 1, 1, 1]; 
  macrame_pattern[3] = [2, 1, -2];
 
 //GENERATE RANDOM MACRAME PATTERN
 //Change pattern size to the number of rows of choice
 /*let pattern_size = 4;
 choices=[2,-2,1,-1]; 
 for (let j=0; j<pattern_size; j++){
 macrame_pattern[j]=[];
 if (j%2 == 0){for(let i=0; i<num_str/4; i++){
    macrame_pattern[j][i]=random(choices);}}
  else {for(let i=0; i<num_str/4-1; i++){
      macrame_pattern[j][i]=random(choices);}}}*/
      
 //ENCODE BINARY NUMBERS ON THE PATTERN
/* let bin = [];
 //Change the binary string to the number or ASCII character of your choice
 //Remember that the even rows (in code language odd) must have one bit less then the odd rows 
 bin[0] = '11101001';   //233
 bin[1] = '1111011';    //123
 bin[2] = '10010000';   //144
 bin[3] = '1001100';    //76
 let bin_len = bin.length;
 for (let j=0; j<bin_len; j++){
  macrame_pattern[j]=[];
  let bin_width=bin[j].length;
  for(let i=0; i<bin_width; i++){
   macrame_pattern[j][i]=int(bin[j][i])+1;}}*/
 
 //Add comment slashes if you want to manually input all of your pattern (not symmetrical patterns)
 //Duplicate the Macrame Array to get a Symetrical Image
 let pattern_len = macrame_pattern.length;
 for (let j=0; j<pattern_len; j++){
    let pattern_width = macrame_pattern[j].length;
    for(let i=0; i<pattern_width; i++){
      if (j%2 == 0){
        macrame_pattern[j][pattern_width+i]=-macrame_pattern[j][pattern_width-i-1];}
      else {
        macrame_pattern[j][pattern_width+i+1]=-macrame_pattern[j][pattern_width-i-1];
        macrame_pattern[j][pattern_width]=1;}}}

 //Don't change if you don't know what your are doing. 
 //DRAW THE INITIAL SQUARES OF THE PATTERN
 let str1 = 0;
 let str2 = 0;
 for (let j=0; j<pattern_len; j++)
  {
    let pattern_width = macrame_pattern[j].length;
    for(let i=0; i<pattern_width; i++)
    {
      if (j%2 == 0)
      {if (macrame_pattern[j][i] == 2) 
       {
         str1 = str_color[2*i];
         str2 = str_color[2*i+1];
         draw_Square(sqr_size*i, j*sqr_size, sqr_size, str1);
         str_color[2*i] = str2;
         str_color[2*i+1] = str1;
       }
       if (macrame_pattern[j][i] == -2)
       { str1 = str_color[2*i];
         str2 = str_color[2*i+1];
         draw_Square(sqr_size*i, j*sqr_size, sqr_size, str2);
         str_color[2*i] = str2;
         str_color[2*i+1] = str1;
       }
       if (macrame_pattern[j][i] == 1)
       { str1 = str_color[2*i]; 
       draw_Square(sqr_size*i, j*sqr_size, sqr_size, str1);}
       if (macrame_pattern[j][i] == -1)
       { str2 = str_color[2*i+1];
       draw_Square(sqr_size*i, j*sqr_size, sqr_size, str2);}}
       
      else
      {if (macrame_pattern[j][i] == 2) 
       { str1 = str_color[2*i+1];
         str2 = str_color[2*i+2];
         draw_Square(sqr_size*i+sqr_size/2, j*sqr_size, sqr_size, str1);
         str_color[2*i+1] = str2;
         str_color[2*i+2] = str1;
       }
       if (macrame_pattern[j][i] == -2)
       { str1 = str_color[2*i+1];
         str2 = str_color[2*i+2];
         draw_Square(sqr_size*i+sqr_size/2, j*sqr_size, sqr_size, str2);
         str_color[2*i+1] = str2;
         str_color[2*i+2] = str1;
       }
       if (macrame_pattern[j][i] == 1)
       { str1 = str_color[2*i+1];
       draw_Square(sqr_size*i+sqr_size/2, j*sqr_size, sqr_size, str1);}
       if (macrame_pattern[j][i] == -1)
       { str2 = str_color[2*i+2];
       draw_Square(sqr_size*i+sqr_size/2, j*sqr_size, sqr_size, str2);}}     
      }
    }
    
 //REPEAT THE PATTERN UNTIL GET TO THE NUMBER OF LINES
 for ( let j=pattern_len; j<num_lines; j++){
    let pattern_width = macrame_pattern[j%pattern_len].length;
    for(let i=0; i<pattern_width; i++)
    {
      if (j%2 == 0)
      {if (macrame_pattern[j%pattern_len][i] == 2) 
       {
         str1 = str_color[2*i];
         str2 = str_color[2*i+1];
         draw_Square(sqr_size*i, j*sqr_size, sqr_size, str1);
         str_color[2*i] = str2;
         str_color[2*i+1] = str1;
       }
       if (macrame_pattern[j%pattern_len][i] == -2)
       { str1 = str_color[2*i];
         str2 = str_color[2*i+1];
         draw_Square(sqr_size*i, j*sqr_size, sqr_size, str2);
         str_color[2*i] = str2;
         str_color[2*i+1] = str1;
       }
       if (macrame_pattern[j%pattern_len][i] == 1)
       { str1 = str_color[2*i]; 
       draw_Square(sqr_size*i, j*sqr_size, sqr_size, str1);}
       if (macrame_pattern[j%pattern_len][i] == -1)
       { str2 = str_color[2*i+1];
       draw_Square(sqr_size*i, j*sqr_size, sqr_size, str2);}}
       
      else
      {if (macrame_pattern[j%pattern_len][i] == 2) 
       { str1 = str_color[2*i+1];
         str2 = str_color[2*i+2];
         draw_Square(sqr_size*i+sqr_size/2, j*sqr_size, sqr_size, str1);
         str_color[2*i+1] = str2;
         str_color[2*i+2] = str1;
       }
       if (macrame_pattern[j%pattern_len][i] == -2)
       { str1 = str_color[2*i+1];
         str2 = str_color[2*i+2];
         draw_Square(sqr_size*i+sqr_size/2, j*sqr_size, sqr_size, str2);
         str_color[2*i+1] = str2;
         str_color[2*i+2] = str1;
       }
       if (macrame_pattern[j%pattern_len][i] == 1)
       { str1 = str_color[2*i+1];
       draw_Square(sqr_size*i+sqr_size/2, j*sqr_size, sqr_size, str1);}
       if (macrame_pattern[j%pattern_len][i] == -1)
       { str2 = str_color[2*i+2];
       draw_Square(sqr_size*i+sqr_size/2, j*sqr_size, sqr_size, str2);}}
    }    
  }
  
  //SAVE THE PATTERN AND THE IMAGE OF THE BRACELET
  let pattern = [];
  for (let j=0; j<pattern_len; j++)
  { let pattern_width = macrame_pattern[j].length;
    pattern[j]=[];
    for(let i=0; i<pattern_width; i++)
    {  if (macrame_pattern[j][i] == 2) 
       {pattern[j][i] = 'right-right';}
       if (macrame_pattern[j][i] == -2)
       {pattern[j][i] = 'left-left';}
       if (macrame_pattern[j][i] == 1)
       {pattern[j][i] = 'right-left';}
       if (macrame_pattern[j][i] == -1)
       {pattern[j][i] = 'left-right';}}
  }
  save("method_pattern_color_number.png");
  save(pattern,"method_pattern_color_number.json");
  save(pattern,"method_pattern_color_number.txt");
}

function draw_Square(pos_x,pos_y,size,Color) 
{
  fill(Color);
  noStroke();
  square(pos_x,pos_y,size);
}