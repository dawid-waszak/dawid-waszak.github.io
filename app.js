navBtns = document.querySelectorAll('.nav-btn');

mobileNav = document.querySelector('.btns-list');

mobileNavBtns = document.querySelectorAll('.nav-mobile-btn');

mobileHamburger = document.querySelector('.hamburger');

storyBtns = document.querySelectorAll('.btn-story');

secAbout = document.querySelectorAll('.story-sec');

prevBtn = document.querySelector('.btn-prev');

nextBtn = document.querySelector('.btn-next');

liveDemoBtns = document.querySelectorAll('.btn-livedemo');

gameFrame = document.querySelector('.game');

liveDemoCon = document.querySelector('.live-demo-con');

liveDemoCloseBtn = document.querySelector('.live-demo-close');

body = document.querySelector('body');

var activePage = 1;

var gameWindowActive = false;

window.addEventListener("keydown", function(e) { 
    if(gameWindowActive == true){
        if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) { 
            e.preventDefault();
            e.stopPropagation(); 
        } 
    }
}, false);

function ActiveButton(){

    // Live demo
    for(let i=0; i < liveDemoBtns.length; i++){
        liveDemoBtns[i].addEventListener('click', function(){
            var gameName = '';
            if(!liveDemoCon.classList.contains('live-demo-active')){
                switch(String(this.dataset.game)){
                    case "oczko":{
                        liveDemoCon.classList.add('live-demo-active');
                        gameFrame.src = "Games/Oczko/game.html";break;
                    }
                    case "square":{
                        liveDemoCon.classList.add('live-demo-active');
                        gameFrame.src = "Games/TheSquare/square.html";break;
                    }
                    case "jam":{
                        liveDemoCon.classList.add('live-demo-active');
                        gameFrame.src = "Games/WEB/game-jam.html";break;
                    }
                    case "card":{
                        liveDemoCon.classList.add('live-demo-active');
                        gameFrame.src = "Games/CARD_GAME/card.html";break;
                    }
                }
                gameWindowActive = true;
                gameFrame.focus();
            }
        });
    }

    liveDemoCloseBtn.addEventListener('click', function(){
        liveDemoCon.classList.remove('live-demo-active');
        gameFrame.src = "";
        gameWindowActive = false;
    });

    mobileHamburger.addEventListener('click', function(){
        if(mobileNav.classList.contains('mobile-active')){
            mobileNav.classList.remove('mobile-active');
        }
        else{
            mobileNav.classList.add('mobile-active');
        }
    });

    for(let i=0; i < mobileNavBtns.length; i++){
        mobileNavBtns[i].addEventListener('click', function(){
            if(mobileNav.classList.contains('mobile-active')){
                mobileNav.classList.remove('mobile-active');
            }
        });
    }

}

ActiveButton();

const hidden_elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show')
        }
    })
});

hidden_elements.forEach(item => {
    observer.observe(item);
});

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = (elemTop <= window.innerHeight * 0.5) && (elemBottom >= window.innerHeight * 0.5);
    
    return isVisible;
}

const sections = Array.from(document.querySelectorAll("section"));
const header = document.querySelector("header");

sections.push(header);

document.addEventListener("scroll", (event) => {
    sections.forEach(item => {
        if(isScrolledIntoView(item)){
            navBtns.forEach(btn => {
                if(item.id == btn.dataset.id){
                    document.querySelector('.active-btn').classList.remove('active-btn');
                    btn.classList.add('active-btn'); return;
                }
            });
        }
    })
});