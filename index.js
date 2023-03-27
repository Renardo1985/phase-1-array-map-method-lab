const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => 
{   
    const upper = tutorials.map(convertString);
    return upper;
}
  

function convertString(string)
{
const str = string.split(" ");
 for (let i = 0; i < str.length; i++) 
 { 
  str[i] = str[i].charAt(0).toLocaleUpperCase()+ str[i].slice(1)  
 }
 const convert = str.join(" ");
 return convert;
}