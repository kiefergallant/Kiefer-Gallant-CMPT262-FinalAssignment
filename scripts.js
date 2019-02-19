// Author: Kiefer Gallant
// Date: Feb 19 2019
/* Description of Whole Script: This script does a number of things. There are scripts that
open and close the mobile navigation there are scripts that generate content for the contact page
there are scripts that make the mouseover of the pictures on the vacation packages page and there are
scripts that animate a airplane flying and there are scripts that display the date on the home page
Course: CMPT 262
Assignment: Final Assignment

*/


// These functions open and close the mobile navigation
function openMobileNav(){
  document.getElementById('mobilenav').style.width='100%';
}

function closeMobileNav(){
  document.getElementById('mobilenav').style.width='0';
}


// These functions are for the contact us page
if (document.body.getAttribute('id') === 'contact') {

  function namesArray(){
    var names = ['Jane Doe','Jon Doe','Jane Doe','Jon Doe'];
    return names
  }

  function phoneNumbersArray(){
    var phoneNumbers = ['123-456-7891','987-765-5342','155-262-6526','515-123-5161',];
    return phoneNumbers;
  }

  // This function outputs the arrays above to the contact us page
  function generateContact(){
    for (var i = 0; i < namesArray().length; i++) {
      console.log(namesArray()[i]);
      var contactDiv = document.getElementById('contactDiv');
      var names = document.createTextNode(namesArray()[i] + " " + phoneNumbersArray()[i]);
      var namesParagraph = document.createElement('p');
      namesParagraph.appendChild(names);
      namesParagraph.style.display = 'flex';
      namesParagraph.style.justifyContent = 'center';
      namesParagraph.style.textAlign = 'center';
      namesParagraph.style.alignItems = 'center';
      namesParagraph.style.fontSize = '2.0em';

      contactDiv.appendChild(namesParagraph);
      }
    }

    generateContact();
}

// These functions will create the mouseover effect for the vacation packages
if (document.body.getAttribute('id') === 'snowboardpackages') {

  function marmot(){
    var marmotlogo = document.getElementById('marmotlogo');
    marmotlogo.addEventListener('mouseover',function(){
      marmotlogo.src = './images/marmotbasinmap300.jpg'
    })
    marmotlogo.addEventListener('mouseout',function(){
      marmotlogo.src = './images/marmot300.jpg'
    })
  }
  marmot();

  function sunpeaks(){
    var sunpeakslogo = document.getElementById('sunpeakslogo');
    sunpeakslogo.addEventListener('mouseover',function(){
      sunpeakslogo.src = './images/sunpeaksmap300.jpg'
    })
    sunpeakslogo.addEventListener('mouseout',function(){
      sunpeakslogo.src = './images/sunpeaks300.png'
    })
  }
  sunpeaks();


  function silverstar(){
    var silverstarlogo = document.getElementById('silverstarlogo');
    silverstarlogo.addEventListener('mouseover',function(){
      silverstarlogo.src = './images/silverstarmap300.jpg';
    })
    silverstarlogo.addEventListener('mouseout', function(){
      silverstarlogo.src = './images/silverstar300.jpg';
    })
  }
  silverstar();


  // This code will animate the airplane that flies across the vacation package screen
  // catwalk is a function and it will run every 5 milliseconds
  var cat = document.getElementById('cat');
  var catTimer = setInterval(catWalk,5);
  var walkForwards = true;

  function catWalk(){
    if (cat.offsetLeft >= document.body.offsetWidth - cat.offsetWidth){
      walkForwards = false;
    }
    if (cat.offsetLeft <= 0){
      walkForwards = true;
    }
    if (walkForwards){
      cat.style.transform = 'scaleX(1)';
      cat.style.left = cat.offsetLeft + 1 + 'px';
    } else{
      cat.style.transform = 'scaleX(-1)';
      cat.style.left = cat.offsetLeft - 1 + 'px';


    }
  }
}


// This code will display the date on the home page
if (document.body.getAttribute('id') === 'home') {

  function displayDate(){
    var d = new Date();
    document.getElementById("footerHeading").innerHTML = d;
  }

  displayDate();

}
