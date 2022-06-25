


// Getting Elements and Pages

let main_loaded = 0;

// let main_menu =  document.querySelector("#menu");
let body = document.querySelector("body");
let view = document.querySelector("#view");
let hidden = document.querySelector("#hidden");
let landing_page = document.querySelector("#landing_page");
let loading_page = document.querySelector("#loading_page");
let load_complete = document.querySelector("#load_complete");
let main_page = document.querySelector("#main_page");
let about_page = document.querySelector("#about_page");
let photos_page = document.querySelector("#photos_page");
let portfolio_page = document.querySelector("#portfolio_page");
let resume_page = document.querySelector("#resume_page");
let contact_page = document.querySelector("#contact_page");

// Sounds

let nav1 = document.querySelector("#nav1");
let loading_sound = document.querySelector("#loading_sound");
let welcome = document.querySelector("#welcome");
let bgm = document.querySelector("#bgm");

// Video

let rickroll = document.querySelector("#rickroll");

// Functions


/* When the website starts, only the landing page will be visible */
function initialize() {
    view.style.display = 'block';
    hidden.style.display = 'none';
    body.style.backgroundColor = "beige";
    nav1.volume = 0.1;
    loading_sound.volume = 0.07;
    welcome.volume = 0.2;
    bgm.volume = 0.1;
}

function landing_button() {
    landing_page.remove(); /*deletes landing*/
    body.style.backgroundColor = "black";
    view.appendChild(loading_page); /*renders loading screen*/
    nav1.play();
    loading_sound.play();
    
    
    
    setTimeout(function(){
    if (main_loaded != 1) {
        load_done(); // runs the load_done command
        }
    }, 5000);
}

function load_done() {
    main_loaded = 1;
    loading_sound.pause()
    loading_page.remove();
    welcome.play();
    view.appendChild(load_complete);


    setTimeout(function(){
        load_complete.remove();
        bgm.play();
        view.appendChild(main_page); // add a delay
        body.style.backgroundColor = "white"; //changes the body background to white
    }, 4000);
}



function to_about_page() {
    view.appendChild(about_page);
    hidden.appendChild(main_page);
}


function to_photos_page() {
    view.appendChild(photos_page);
    hidden.appendChild(main_page);
    bgm.muted = true;
}

function to_portfolio_page() {
    view.appendChild(portfolio_page);
    hidden.appendChild(main_page);
}

function to_resume_page() {
    view.appendChild(resume_page);
    hidden.appendChild(main_page);
}

function to_contact_page() {
    view.appendChild(contact_page);
    hidden.appendChild(main_page);
}

function to_main_page() {
    hidden.appendChild(about_page);
    hidden.appendChild(photos_page);
    hidden.appendChild(portfolio_page);
    hidden.appendChild(resume_page);
    hidden.appendChild(contact_page);
    view.appendChild(main_page);
}

function exit_photos_page() {
    rickroll.pause();
    hidden.appendChild(photos_page);
    view.appendChild(main_page);
    bgm.muted = false;
}

function playSound(audio) {
    audio.currentTime = 0;
    audio.play();

}



// Run code and debug

initialize();


//debugging code here

/*
view.appendChild(nav1);
view.appendChild(loading_sound);
view.appendChild(welcome);
view.appendChild(bgm);
*/
