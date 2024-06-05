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

gameFrame = document.querySelector('.game');

liveDemoCon = document.querySelector('.live-demo-con');

liveDemoCloseBtn = document.querySelector('.live-demo-close');

var activePage = 1;

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
                }
            }
        });
    }

    liveDemoCloseBtn.addEventListener('click', function(){
        liveDemoCon.classList.remove('live-demo-active');
        gameFrame.src = "";
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