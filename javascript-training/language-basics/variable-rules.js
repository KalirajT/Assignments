//Syntax to store data : Declaration variable = data ;


//Variable is all about the name of the location where we are storing the data. Variable = A named container that stores data

//Rules to declare a variable while storing the data 

//String data in JS
let empName = "Kaliraj Karthik";

//1. Variable name must not be a reserved keyword. 
// let const = "Kaliraj Karthik";

//2. Variable name must not be a literal. (true, false, null, undefined)
// let true = "Kaliraj Karthik";

//3. Variable name must not start with a number.
// let 1empName = "Kaliraj Karthik";

//4. Variable name must not contain special characters except $ and _.
// let emp@Name = "Kaliraj Karthik";

//5. Variable name must not contain spaces.
// let emp Name = "Kaliraj Karthik";

//6. Variable should be unique always. 
// let empName = "Ram Kumar";


//Standarrds to be followed while declaring a variable

//1. Variable name should be meaningful and self-explanatory. 
let c = 2233; //Not a good variable name
let carNumber = 2233; //Good variable name

//2. Variable name should follow below naming conventions : camelCase, PascalCase, Underscore_case
//Regular variables, methods, or functions are to be declared using camel case. (languageBasicsOfJavaScript)
//Constant values should be declared with underscore_case(UPPER_SNAKE_CASE) with complete upper case characters. (PI_VALUE , COMPANY_NAME)
//Class name should follow Pascal case. (LanguageBasicsOfJavaScript)

//3. Avoid abbreviations unless they are common.
let empNm = "Karthi"; // Hard to read
let usrDtls = {};     // Hard to read
let employeeName = "Karthi";  // Good
let userDetails = {};         // Good