// ADD BANNER CLASS. 
const newDiv = document.createElement('div');
newDiv.classList.add('banner'); 
const parent=document.querySelector('body');
parent.appendChild(newDiv);
console.log(newDiv);



// ADD NAVBAR CLASS.
const nav=document.createElement('div');
nav.classList.add('nav');
nav.setAttribute("id","header");
console.log(nav);
newDiv.insertAdjacentElement('afterbegin', nav);



// ADD LOGO IN NAVBAR.
const logo=document.createElement('h1');
logo.innerHTML="LOGO";
logo.classList.add('logo');
nav.insertAdjacentElement('afterbegin',logo);


// ADD MENU IN NAVBAR.
const menu=document.createElement('div');
menu.classList.add('menu');
menu.innerHTML=
            " <ul><li><a>Home</a></li> <li><a>About Us</a></li> <li><a>Servics</a></li>  <li><a>Team</a></li>   <li><a>Info</a></ul> ";
nav.insertAdjacentElement('beforeend',menu);

//  NAVBAR END.





// CONTENT START.
const content=document.createElement("div");
content.classList.add("content");
console.log(content);
newDiv.insertAdjacentElement('beforeend', content);
content.innerHTML="<h1>DESIGN YOUR WEBSITE</h1> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita asperiores distinctio, deserunt tempora harum modi adipisci ab atque optio debitis labore aut molestiae dignissimos incidunt, doloribus iusto in? Dolorum, earum.</p>"
content.setAttribute("id","head");


// BUTTON 1.
   const btn=document.createElement("div");
   btn.classList.add("btn");
   console.log(btn);
   newDiv.insertAdjacentElement('beforeend', btn);
   btn.innerHTML="<button>MORE INFO</button> <button>READ MORE</button>";


// ABOUT US.
const about = document.createElement('div');
about.classList.add("about");
about.setAttribute("id" ,"about");
console.log(about);
newDiv.insertAdjacentElement("afterend",about);


// DETAILS IN ABOUT US.
const container=document.createElement("div");
container.classList.add("container");
console.log(container);
about.insertAdjacentElement("afterbegin" ,container);

  

// DATA OF ABOUT US.
const data=document.createElement("div");
data.classList.add("data");
console.log(data);
container.insertAdjacentElement("afterbegin",data);


// TITLE OF ABOUT US IN DATA.
 const title=document.createElement("div");
 title.classList.add("title");
 console.log(title);
 data.insertAdjacentElement("afterbegin",title);
 title.innerHTML="<h1 style='color:green'>About Us</h1> <br> <h4 style='font-size:25px'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, voluptate!</h4> <br><br>  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sit modi perspiciatis ipsam, voluptas accusamus beatae ex aliquid porro sed? Assumenda sunt nesciunt illum dolor error iure ex, culpa corrupti? Animi, blanditiis ratione vitae sunt id commodi nulla ad fugiat.</p> ";


//  BUTTON 2.
const btn2=document.createElement("div");
btn2.classList.add("btn2");
console.log(btn2);
title.insertAdjacentElement('beforeend', btn2);
btn2.innerHTML="<button>Chnage</button>" ;
btn.setAttribute("id" ,"btn2");

//  CONTENT OF ABOUT US IN DATA.
 


// IMG OF ABOUT US.
const image=document.createElement("div");
image.classList.add("image");
console.log(image);
container.insertAdjacentElement("beforeend",image);
image.innerHTML="<img src='https://wallpapercave.com/wp/QyJrTNH.jpg' alt='image'>";





// EVENTLISTNER IN NAVBAR
document.getElementById("header").addEventListener("mouseover",funA);

document.getElementById("header").addEventListener("mouseout",funB);


function funA(){
    document.getElementById("header").style.background="gray";
};

function funB (){
     document.getElementById("header").style.background="black";
};







// USING EVENT FOR NEW PAGE.
const evnt=document.createElement("div");
evnt.classList.add("color");
evnt.setAttribute("id","color");
console.log(evnt);
about.insertAdjacentElement("afterend",evnt);




const red=document.createElement("div");
red.classList.add("red");
red.setAttribute("id","red");
evnt.insertAdjacentElement("afterbegin",red);
red.innerHTML="<h1>1</h1>";


const green=document.createElement("div");
green.classList.add("green");
green.setAttribute("id","green");
evnt.insertAdjacentElement("beforeend",green);
green.innerHTML="<h1>2</h1>";


const blue=document.createElement("div");
blue.classList.add("blue");
blue.setAttribute("id","blue");
evnt.insertAdjacentElement("beforeend",blue);
blue.innerHTML="<h1>3</h1>";


const yellow=document.createElement("div");
yellow.classList.add("yellow");
yellow.setAttribute("id","yellow");
evnt.insertAdjacentElement("beforeend", yellow);
yellow.innerHTML="<h1>4</h1>";


const test=document.createElement("div");
test.classList.add("test");
test.setAttribute("id","test");
evnt.insertAdjacentElement("afterend",test);




// EVENT START.
// RED.
document.getElementById("red").addEventListener("mouseover", overRed);
document.getElementById("red").addEventListener("mouseout", outRed);

function overRed (){
      document.getElementById("red").style.background="gray";
      
}

function outRed(){
    document.getElementById("red").style.background="red";
}


// GREEN
document.getElementById("green").addEventListener("click", function(){
    document.getElementById("green").style.background="darkgoldenrod";

});

// BLUE/YELLOW
document.getElementById("blue").addEventListener("click", function(){
    document.getElementById("yellow").style.background="cornflowerblue";
    
});

document.getElementById("yellow").addEventListener("click", function(){
     document.getElementById("blue").style.visibility="hidden";
});





// EVENT FOCUS/BLUR ON FORM.
const form=document.createElement("form");
form.classList.add("form");
form.setAttribute("id","form");
form.setAttribute("name","resform");
console.log(form);
evnt.insertAdjacentElement("afterend",form);



const fdiv=document.createElement("div");
fdiv.setAttribute("id","fm" );
console.log(fdiv);
form.insertAdjacentElement("afterbegin",fdiv);
fdiv.innerHTML="<label>User</label> <input type='text' name='user' id='input1' class='input'  onfocus='focusfunction(this)' onblur='blurfunction(this)'  oninput='inputFunction(this)'> <br> <label>Password</label> <input type='text' name='password' id='input2' class='input'  onfocus='focusfunction(this)'   onblur='blurfunction(this)'> <br><label>Confirm Password</label> <input type='text' name='cpassword' id='input3' class='input'  onfocus='focusfunction(this)' onblur='blurfunction(this)'>  <br><input type='submit'/>";




// validation in form by event.
function focusfunction(element){
  element.style.background='gray';
}

function blurfunction(element){
    element.style.background='';
  }
 


//   ONINPUT EVENT.
  function inputFunction(element){
      let vl=element.value;
      document.getElementById("test").innerHTML=vl;
  };


// CONTAINER.
const contain=document.createElement("div");
contain.classList.add("contain");
contain.setAttribute("id","contain");
console.log(contain);
test.insertAdjacentElement("afterend",contain)



const btn1=document.createElement("button");
btn1.classList.add('btn1');
btn1.setAttribute("id","set-text");
btn1.innerText="set-text";
contain.insertAdjacentElement("beforeend",btn1);

const btn3=document.createElement("button");
btn3.classList.add('btn3');
btn3.setAttribute("id","clear-text");
btn3.innerText="clear-text";
contain.insertAdjacentElement("beforeend",btn3);



const textarea =document.createElement("textarea");
textarea.classList.add("story");
contain.insertAdjacentElement("afterbegin",textarea);




const story=document.body.querySelector(".story");
const setText=document.body.querySelector("#set-text");
setText.addEventListener("click", ()=>{
    story.textContent="it was a dark and stormy night....";
});
const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});

