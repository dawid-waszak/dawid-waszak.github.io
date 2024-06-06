navBtns = document.querySelectorAll('.nav-btn');

mobileNav = document.querySelector('.btns-list');

mobileNavBtns = document.querySelectorAll('.nav-mobile-btn');

mobileHamburger = document.querySelector('.hamburger');

storyBtns = document.querySelectorAll('.btn-story');

btnAbout = document.querySelector('.btn-about');

secAbout = document.querySelectorAll('.story-sec');

prevBtn = document.querySelector('.btn-prev');

nextBtn = document.querySelector('.btn-next');

liveDemoBtns = document.querySelectorAll('.btn-livedemo');

githubBtns = document.querySelectorAll('.github-button');

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

btnAbout.addEventListener('click', ()=>{
    document.querySelector('.nav-about').click();
});

function ActiveButton(){
    // Navigation bar
    for(let i=0; i < navBtns.length; i++){
        navBtns[i].addEventListener('click', function(){
            document.querySelector('.active-btn').classList.remove('active-btn');
            this.classList.add('active-btn');
            const element = document.getElementById(this.dataset.id);
            element.scrollIntoView();
        });
    }

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

    for(let i=0; i < githubBtns.length; i++){
        githubBtns[i].addEventListener('click', function(){
            switch(String(this.dataset.game)){
                case "oczko": window.open("https://github.com/dawid-waszak/oczko-js", '_blank').focus();break;
                case "square": window.open("https://github.com/dawid-waszak/the-square-js", '_blank').focus();break;
                case "jam": window.open("https://github.com/dawid-waszak/zombie-apocalypse-Unity3d", '_blank').focus(); break;
                case "card": window.open("https://github.com/dawid-waszak/card-hero-unity3d", '_blank').focus; break;
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

mailBtn = document.querySelector('.contact-btn');
copyAlert = document.querySelector('.copy-alert');

mailBtn.addEventListener('click', () =>{
    navigator.clipboard.writeText(mailBtn.dataset.contact);
    copyAlert.value = "Skopiowano";
    if(!copyAlert.classList.contains('alert-active')){
        copyAlert.classList.add('alert-active');
    }
});

mailBtn.addEventListener('mouseleave', () =>{
    if(copyAlert.classList.contains('alert-active')){
        copyAlert.classList.remove('alert-active');
        copyAlert.value = "";
    }
});