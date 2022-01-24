import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//const arr = ["nitisa", " saurabh", " sujata"]
// in React v16 it's possible for render()
//to return an array of elements.




/*
//episode 14
const name =" Nili";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links =" https://www.w3schools.com/" ;
*/
/*
.heading{
  color: #fa9191;
  text-align: center;
  text-transform: capitalize;
  font-weight: bold;
  text-shadow: 0px 2px 4px #ffe9c5;
  margin: 50px 0;
  font-family: 'Josefin Sans', sans-serif;
  }
*/
/*
const heading = { 
  color:"#fa9191",
  textTransform: "capitalize",
  textAlign: "center",
  fontWeight: "bold",
  textShadow: "0px 2px 4px #ffe9c5",
  margin:' 50px 0',
  fontFamily: '"Josefin Sans", sans-serif',
};
ReactDOM.render(
<>
<h1 style={ heading}>My name is{name} </h1>

<div className="img_div">
<img src={img1} alt = "randomImages" /> 
 <img src={img2} alt = "randomImages" /> 
 <a href= {links} target= "_blank">
 <img src={img3} alt = "randomImages" /> 
 </a>
</div>
</>,
document.getElementById("root")
);
*/





/*
//episode 13 jsx attributes
const name = "Nili";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links =" https://www.w3schools.com/" 

ReactDOM.render(
  <>
 <h1 contentEditable="true" > My name is {name}</h1>
 <img src={img1} alt = "randomImages" /> 
 <img src={img2} alt = "randomImages" /> 
 <a href= {links} target= "_blank">
 <img src={img3} alt = "randomImages" /> 
 </a>
 </>,

 document.getElementById("root")
);

*/

/*
//episode 12 challenge-2
const name = "Nili";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

ReactDOM.render(
<>
<h1>Hello, My name is {name} </h1>
<p>current date is ={currDate}</p>
<p>current time is = {currTime} </p>
</>,
document.getElementById("root")
);
*/


/* episode 10 and 11
const fname = "nili";
const lname = " sakya";
ReactDOM.render(
<>
<h1> {`My first name is ${fname} and last name is ${lname}`} </h1>
<p> My lucky number is {2+3}</p>
<p> My lucky number is {Math.random()}</p>
</>,
document.getElementById("root")
);
*/

//By react using array
/*
ReactDOM.render(
  [
  <h1> Hello world!!!!</h1>,
  <p> Plz like and share</p>,
  <h2> Please subscribe my channel</h2>,
],
  document.getElementById('root')
);
*/

// Another method using div for multiple elements in render
//episode 8
/*
ReactDOM.render(
  <React.Fragment>
  <h1> Hello world!!!!</h1>
  <p> Plz like and share</p>
  <h2> Please subscribe my channel</h2>
  </React.Fragment>,
  document.getElementById('root')
);
*/


//episode 9 challenge-1
/*
ReactDOM.render(
<>
<h1> Thapa Technical Netflix Pick</h1>
<p> Here the list of my fav 5 netflix series</p>
<ol>
 <li> DARK</li>
 <li> Extra curricular</li>
 <li>My Holo Love</li>
 <li>My first-2 Love</li>
 <li> Mr Robot</li>
</ol>
</>,
document.getElementById("root")
);
*/

//render using syntactic sugar
/*
ReactDOM.render(
  <>
  <h1> Hello world!!!!</h1>
  <p> Plz like and share</p>
  <h2> Please subscribe my channel</h2>
  </>,  //syntactic sugar for fragment
  document.getElementById('root')
);
*/

/*
//By babel
ReactDOM.render(
  React.createElement("h1", null, "thapa technical like"),
  document.getElementById("root")
);

//By js
var h1 = document.createElement("h1");
h1.innerHTML = "Thapa technical subscribe";
document.getElementById("root").appendChild(h1);
*/


//Episode 17
/*
import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

let curDate = new Date(2021,19,5,1);
curDate = curDate.getHours();
let greeting = " ";
const cssStyle = { };

if (curDate>=1 && curDate<12) {
 greeting = " Good Morning";
 cssStyle.color = " green";
} else if( curDate >=12 && curDate <19) {
  greeting = " Good Afternoon";
  cssStyle.color = " orange";
} else {
  greeting = " Good Night";
  cssStyle.color = " black";
}

ReactDom.render(
  <>
  <div> <h1> Hello sir,<span style={cssStyle}> {greeting} </span></h1>
  </div>
  </>,
document.getElementById("root")
);
*/


//episode 19
/*
import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import './index.css';

ReactDom.render(
 <App/>,
document.getElementById("root")
);
*/
