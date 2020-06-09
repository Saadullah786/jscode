

                    // ALERT

// 1. Write a script to greet your website visitor using JS alert
// box.
// 2. Write a script to display following message on your web
// page
alert("Error! Please enter a valid password");


// 3. Write a script to display following message on your web
// page: (Hint : Use line break)
alert("Welcom to JS Land...\nHappy Coding!");


// 4. Write a script to display following messages in sequence:

alert("Welcom to JS Land...");

// alert("Happy Coding!\n");  un cmplete


// 5. Generate the following message through browser’s
// developer console:

console.log("Hello... I can run JS through my web browser's console")


                        //    VARIABLES FOR STRINGS
                        //       Assignment # 2 
// 1. Declare a variable called username.
// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name

var username = "Saadullah" ;
var myName   =  "Aslam"    ;
var fulName  =  username+myName ;
alert(fulName);


// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message = "Hello World" ;
alert(message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

var a = "Jhone Doe" ;
var b = "15 Years Old" ;
var c = "Certified Mobile Application Development" ;

alert (a);
alert (b);
alert (c);

// 5. Write a script to display the following alert using one JS
// variable

var a = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert (a);

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "example@example.com" ;
var mail = "My email address is " ;
var output = mail + email ;
alert(output);


// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A smarter\nway to learn JavaScript" ;
var way = "I am trying to learn from the Book ";
var display = way + book ;
alert(display);


// 8. Write a script to display this in browser through JS

document.write("Yah! I can write HTML content through Javascript");

// 9. Store following string in a variable and show in alert and
// browser through JS

var a = "▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"

alert(a);



                        // VARIABLES FOR NUMBERS
                            // ASSINGMENT # 3


// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 23 ;

alert("I am"+" "+age+" "+"years old");

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var visit = 15 ;

alert("You have visited this site"+" "+visit+" "+"times") ;

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 1996 ;

document.write("My birth year is"+" "+birthYear+"<br>"+"Data type of my declared variable is number <br>");


// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var a = "Jhon Doe" ;
var b = "T-Shirt(s)" ;
var c = 5 ;

document.write(a+" "+"ordered"+" "+c+" "+b+" "+"on XYZ Clothing store");

                       // VARIABLE NAMES: LEGAL & ILLEGAL
                            // ASSINGMENT # 4



// 1. Declare 3 variables in one statement.
// 2. Declare 5 legal & 5 illegal variable names.
// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

var $my_1stVariable =  2 ;
var $name,_name =  4 ;
var name =  6 ;

document.write("<h1>Rules for naming JS variables</h1><br><br><br>Variable names can only contain numbers $, and _ . For example $my_1stVariable<br>Variables must begin with a $ or _. For example $name, _name or name<br>Variable names are case sensitive<br>Variable names should not be JS keywords");

                            // MATH EXPRESSIONS 
                            //  ASSINGMENT # 5



// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.


var a = 3 ;
var b = 5 ;
document.write("Sum of"+" "+a+" "+"and"+" "+b+" "+"is"+" "+(a+b)+"<br>");


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

document.write("Subtract of"+" "+a+" "+"and"+" "+b+" "+"is"+" "+(a-b)+"<br>");


document.write("Multiplication of"+" "+a+" "+"and"+" "+b+" "+"is"+" "+(a*b)+"<br>");

var a = 10 ;
var b = 5  ;


document.write("Division of"+" "+a+" "+"and"+" "+b+" "+"is"+" "+(a/b)+"<br>");


document.write("Modulus of"+" "+a+" "+"and"+" "+b+" "+"is"+" "+(a%b)+"<br>");


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value


var a = "?" ;

document.write("Value after variable declaration is:"+" "+a+" .<br>");

var a = 5 ;
var b = 7 ;
var c = 6 ;

document.write("Initial value :"+" "+a+"<br>");

document.write("Value after increment is: "+(++a)+"<br>") ;

var a = (b+c) ; 

document.write("Value after addition is: "+(b+c)+"<br>") ;

var a = --a ;

document.write("Value after decreament is: "+a+"<br>") ;

document.write("The reminder is: "+(a%3)+"<br><br>") ;


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var a = 600 ;

document.write("Total cost of buy 5 tickets to a movie is "+(a*5)+"PKR<br><br><br>") ;


// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var a = 4 ;

document.write("<h1>Table of 4</h1><br>4 x 1 = "+(a*1)+"<br>"+"4 x 2 = "+(a*2)+"<br>"+"4 x 3 = "+(a*3)+"<br>"+"4 x 4 = "+(a*4)+"<br>"+"4 x 5 = "+(a*5)+"<br>"+"4 x 6 = "+(a*6)+"<br>"+"4 x 7 = "+(a*7)+"<br>"+"4 x 8 = "+(a*8)+"<br>"+"4 x 9 = "+(a*9)+"<br>"+"4 x 10 = "+(a*10)+"<br>");



// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var c= 25 ;
var f = 70 ;

document.write("25°C is "+(f-32)*5/9+"°C <br>"+"70°F is "+(c*9/5+32)+"<br><br><br>");


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var item1 = 650 ;
var item2 = 100 ;
var charges = 100 ;

document.write("<h1>Shopping Cart</h1><br><br>Price of item 1 is "+item1+"<br><br>Quantity of item 1 is 3<br><br>Price of item 2 is "+item2+"<br><br>Quantity of item 2 is 7<br><br>Shipping Charges "+charges+"<br><br><br>Total cost of your order is "+(item1*3+item2*7+charges)+"<br><br><br><br>");


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


var totalMarks = 980 ;
var obtainedMArks = 804 ;

document.write("<h1>Marks Sheet</h1><br><br>Total Marks: "+totalMarks+"<br><br>Obtained Marks: "+obtainedMArks+"<br><br>Percentage: "+(obtainedMArks/totalMarks*100)+"%") ;


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var usDollar = 104.80 ;
var saudiRiyals = 28;

document.write("<h1>Currency in PKR</h1><br><br><br>Total Currency in PKR:"+(usDollar*10+saudiRiyals*25)) ;