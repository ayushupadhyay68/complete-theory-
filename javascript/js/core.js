/* let mainheading = document.getElementById("mainheading");

// alert(mainheading.innerHTML);

mainheading.innerHTML = "IND to Win the <u>WC 2024</u>";
// mainheading.style.backgroundColor = "green";
mainheading.style = "background-color:red;color:white;font-family:arial;";

mainheading.setAttribute("title","This is the dynamic Heading Here");

let a = document.getElementsByTagName("a");

// alert(a.length);

a[0].innerHTML = "Read More Content";
// a[0].style = "border-radius:30px; border:2px solid black; display:inline-block; color:black;text-align:center;padding:20px";

// a[0].removeAttribute("class");

let para = document.querySelectorAll(".para");
// alert(para.length);

para[1].innerHTML = "This is just for DOM Checking Purposes, Everything is Alright.";




let para1content = () => {

    alert("I'm Clicked!");

}

para[1].onclick = para1content;

mainheading.addEventListener("mouseover",() => {

   mainheading.style = "background-color:white";

});

mainheading.addEventListener("mouseout",() => {

    mainheading.style.backgroundColor = "red";
 
 }); */

 const title = "Javascript";

let p = document.querySelectorAll("p");

p[0].addEventListener("click", (e) => {
  // alert(e.pageX);

  e.target.innerHTML = "I'm Clicked, I'm Changed.";
  e.target.style = "position:absolute; left:" + e.pageX + "px";
});

document.addEventListener("mousemove", (e) => {
  let x = e.pageX - 40;
  let y = e.pageY - 40;

  document.getElementsByClassName("dot")[0].style = "left:" + x + "px; top:" + y + "px";
});

document.querySelector("a").addEventListener("click", (e) => {
  let c = confirm("Do you want to proceed ahead?");

  if (!c) {
    e.preventDefault();
    return false;
  }
});
let colours = ["red", "green", "blue", "orange", "purple", "gray"];
window.addEventListener("load", (e) => {
  document.querySelector("#loading").style = "display:none;";
  document.querySelector("body").style =
  "background-color:" + colours[Math.round(Math.random() * colours.length)];
});



window.addEventListener("resize", (e) => {
   // alert("hi");
  document.querySelector("body").style =
    "background-color:" + colours[Math.round(Math.random() * colours.length)];
});


document.addEventListener("keyup",(e) => {

   let kcode = e.code.toLowerCase();

   // alert(kcode);

   if(kcode.match("enter")){

      location = "forwardpage.html";

   }

})


// alert(title);


let menu = "home about contact services";

menu = menu.split(" ");

// menu.push("blog","social");

alert(menu);