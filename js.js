// --------------- STICKY MENU --------------- 
var navBar = $(".menu-nav");
var hdrHeight = $("ul").height();
$(window).scroll(function () {
  if ($(this).scrollTop() > hdrHeight + 20) {
    navBar.addClass("navScrolled");

  } else {
    navBar.removeClass("navScrolled");
  }
});

// --------------- SCROLL TO SECTIONS --------------- 
function scrollToDoctor() {
  var element = document.getElementById("doctor-module-titel");
  var offset = 180;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

function scrollToServices() {
  var element = document.getElementById("service-package-titel");
  var offset = 180;
  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = element.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

if (document.getElementById("home")) {
  document.getElementById("home").onclick = e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}

// ---------- CONTACT FORM ---------
const form = document.getElementById('form');
const username = document.getElementById('userName');
const message = document.getElementById('userMessage');
const email = document.getElementById('userEmail');
const error = document.getElementById("error-text");


// form.addEventListener('submit', function (e) {
//   e.preventDefault();
// });

// ---------------- MESSAGE EVENT --------------
document.getElementById("submitBtn").addEventListener("click",
  function validateMessage() {
    var email = document.getElementById('userEmail').value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    const messageError = message.value.length < 5;
    const userNameError = username.value.length < 3;
    const emailError = reg.test(email) == false;

    if (messageError || userNameError || emailError == true) {
      error.style.visibility = "visible";
    } else {
      error.style.visibility = "hidden" }

    if (messageError) {
      document.getElementById("inputContainerMessage").style.border = "1px solid red";


    } else {
      document.getElementById("inputContainerMessage").style.border = "1px solid green";
      // error.style.visibility = "hidden";
    }

    if (userNameError) {
      document.getElementById("inputContainerName").style.border = "1px solid red";

    } else {
      document.getElementById("inputContainerName").style.border = "1px solid green";
      // error.style.visibility = "hidden";
    }

    if (emailError) {
      document.getElementById("inputContainerEmail").style.border = "1px solid red";

    } else {
      document.getElementById("inputContainerEmail").style.border = "1px solid green";
      // error.style.visibility = "hidden";
    }
    return true;
  }
);
// ----------------- NAME EVENT ----------------
// document.getElementById("submitBtn").addEventListener("click",
//   function validateName() {
//     if (username.value.length < 3) {
//       document.getElementById("inputContainerName").style.border = "1px solid red";
//       error.style.visibility = "visible";
//     } else {
//       document.getElementById("inputContainerName").style.border = "1px solid green";
//       error.style.visibility = "hidden";
//     }
//     return true;
//   }
// );
// // ----------------- EMAIL EVENT ----------------
// function myFunction() {
//   var email = document.getElementById('userEmail').value;
//   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//   if (reg.test(email) == false) {
//     document.getElementById("inputContainerEmail").style.border = "1px solid red";
//     error.style.visibility = "visible";
//   } else {
//     document.getElementById("inputContainerEmail").style.border = "1px solid green";
//     error.style.visibility = "hidden";
//   }
//   return true;
// }