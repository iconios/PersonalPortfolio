// HamburgerMenu function
function hamburgermenu() {
    // declare the required HTML elements
    let menuButton = document.getElementById('dropDownItems-container');
    let mask = document.getElementById('mask');
    let hamburgermenuBar1 = document.getElementById("bar1"), hamburgermenuBar2 = document.getElementById("bar2"), hamburgermenuBar3 = document.getElementById("bar3");

    // state change based on the status of style-display value    
    ( menuButton.style.display == 'none' ) ? ( showDropDown() ) : ( hideDropDown() );

    function showDropDown() {
        mask.style.display = 'block';
        menuButton.style.display = 'block';
        hamburgermenuBar1.style.transform = 'translate(0, 11px) rotate(45deg)';
        hamburgermenuBar1.style.transition = '0.4s';
        hamburgermenuBar2.style.opacity = '0';
        hamburgermenuBar3.style.transform = 'translate(0, -11px) rotate(-45deg)';
        hamburgermenuBar3.style.transition = '0.4s';
    }

    function hideDropDown() {
        menuButton.style.display = 'none';
        mask.style.display = 'none';
        hamburgermenuBar1.style.transform = 'rotate(0deg)';
        hamburgermenuBar1.style.transition = '0.4s';
        hamburgermenuBar2.style.opacity = '1';
        hamburgermenuBar3.style.transform = 'rotate(0deg)';
        hamburgermenuBar3.style.transition = '0.4s';
    }

}

//Google Translate function
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}


function slide() {
    // Get the elements
    let slideContainer = document.getElementsByClassName('slider-container');
    let slides = slideContainer.children;

    // Store the total number of images
    let slideCount = slides.length;
    let activeSlide = 0;

    // To change the images dynamically every 5secs
    setInterval(()=> {
        slides[activeSlide].classList.remove('active');
        activeSlide++;
        if (activeSlide == slideCount) {
            activeSlide = 0;
        }
        slides[activeSlide].classList.add('active');
    }, 5000);

}

