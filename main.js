function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);
  
    text_speak.rate = 1.5;
    text_speak.volume = 1;
    text_speak.pitch = 1;
  
    window.speechSynthesis.speak(text_speak);
  }



  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none'; 
    }, 2000); 
});




/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
            .discover__container,
            .experience__data, .experience__overlay,
            .place__card,
            .sponsor__content,
            .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
            .video__description,
            .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
            .video__content,
            .subscribe__form`,{
    origin: 'right',
    interval: 100,
})

$(document).ready(function(){
    $('.card-container').click(function(){
        $(this).toggleClass("spread");
    });
});


const themeButton = document.getElementById('theme-button');
const selectedTheme = localStorage.getItem('selected-theme');
const darkTheme = 'dark';
const iconTheme = 'ri-sun-line';

  // Validate if the user previously chose a theme
if (selectedTheme) {
    document.body.setAttribute('data-theme', selectedTheme);
        if (selectedTheme === darkTheme) {
            themeButton.classList.add(iconTheme);
        }
}

  // Activate/Deactivate the theme manually with the button
    themeButton.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === darkTheme) {
            document.body.setAttribute('data-theme', 'light');
            themeButton.classList.remove(iconTheme);
            localStorage.setItem('selected-theme', 'light');
        } else {
            document.body.setAttribute('data-theme', darkTheme);
            themeButton.classList.add(iconTheme);
            localStorage.setItem('selected-theme', darkTheme);
        }
    });
  


    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    
    function resize() {
        var box = c.getBoundingClientRect();
        c.width = box.width;
        c.height = box.height;
    }
    
    var light = {
        x: 160,
        y: 200
    }
    
    var colors = ["#f5c156", "#e6616b", "#5cd3ad"];
    
    function drawLight() {
        ctx.beginPath();
        ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
        var gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
        gradient.addColorStop(0, "#3b4654");
        gradient.addColorStop(1, "#2c343f");
        ctx.fillStyle = gradient;
        ctx.fill();
    
        ctx.beginPath();
        ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
        gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5);
        gradient.addColorStop(0, "#fff");
        gradient.addColorStop(1, "#3b4654");
        ctx.fillStyle = gradient;
        ctx.fill();
    }
    
    function Box() {
        this.half_size = Math.floor((Math.random() * 50) + 1);
        this.x = Math.floor((Math.random() * c.width) + 1);
        this.y = Math.floor((Math.random() * c.height) + 1);
        this.r = Math.random() * Math.PI;
        this.shadow_length = 2000;
        this.color = colors[Math.floor((Math.random() * colors.length))];
      
        this.getDots = function() {
    
            var full = (Math.PI * 2) / 4;
    
    
            var p1 = {
                x: this.x + this.half_size * Math.sin(this.r),
                y: this.y + this.half_size * Math.cos(this.r)
            };
            var p2 = {
                x: this.x + this.half_size * Math.sin(this.r + full),
                y: this.y + this.half_size * Math.cos(this.r + full)
            };
            var p3 = {
                x: this.x + this.half_size * Math.sin(this.r + full * 2),
                y: this.y + this.half_size * Math.cos(this.r + full * 2)
            };
            var p4 = {
                x: this.x + this.half_size * Math.sin(this.r + full * 3),
                y: this.y + this.half_size * Math.cos(this.r + full * 3)
            };
    
            return {
                p1: p1,
                p2: p2,
                p3: p3,
                p4: p4
            };
        }
        this.rotate = function() {
            var speed = (60 - this.half_size) / 20;
            this.r += speed * 0.002;
            this.x += speed;
            this.y += speed;
        }
        this.draw = function() {
            var dots = this.getDots();
            ctx.beginPath();
            ctx.moveTo(dots.p1.x, dots.p1.y);
            ctx.lineTo(dots.p2.x, dots.p2.y);
            ctx.lineTo(dots.p3.x, dots.p3.y);
            ctx.lineTo(dots.p4.x, dots.p4.y);
            ctx.fillStyle = this.color;
            ctx.fill();
    
    
            if (this.y - this.half_size > c.height) {
                this.y -= c.height + 100;
            }
            if (this.x - this.half_size > c.width) {
                this.x -= c.width + 100;
            }
        }
        this.drawShadow = function() {
            var dots = this.getDots();
            var angles = [];
            var points = [];
    
            for (dot in dots) {
                var angle = Math.atan2(light.y - dots[dot].y, light.x - dots[dot].x);
                var endX = dots[dot].x + this.shadow_length * Math.sin(-angle - Math.PI / 2);
                var endY = dots[dot].y + this.shadow_length * Math.cos(-angle - Math.PI / 2);
                angles.push(angle);
                points.push({
                    endX: endX,
                    endY: endY,
                    startX: dots[dot].x,
                    startY: dots[dot].y
                });
            };
    
            for (var i = points.length - 1; i >= 0; i--) {
                var n = i == 3 ? 0 : i + 1;
                ctx.beginPath();
                ctx.moveTo(points[i].startX, points[i].startY);
                ctx.lineTo(points[n].startX, points[n].startY);
                ctx.lineTo(points[n].endX, points[n].endY);
                ctx.lineTo(points[i].endX, points[i].endY);
                ctx.fillStyle = "#2c343f";
                ctx.fill();
            };
        }
    }
    
    var boxes = [];
    
    function draw() {
        ctx.clearRect(0, 0, c.width, c.height);
        drawLight();
    
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].rotate();
            boxes[i].drawShadow();
        };
        for (var i = 0; i < boxes.length; i++) {
            collisionDetection(i)
            boxes[i].draw();
        };
        requestAnimationFrame(draw);
    }
    
    resize();
    draw();
    
    while (boxes.length < 14) {
        boxes.push(new Box());
    }
    
    window.onresize = resize;
    c.onmousemove = function(e) {
        light.x = e.offsetX == undefined ? e.layerX : e.offsetX;
        light.y = e.offsetY == undefined ? e.layerY : e.offsetY;
    }
    
    
    function collisionDetection(b){
      for (var i = boxes.length - 1; i >= 0; i--) {
        if(i != b){ 
          var dx = (boxes[b].x + boxes[b].half_size) - (boxes[i].x + boxes[i].half_size);
          var dy = (boxes[b].y + boxes[b].half_size) - (boxes[i].y + boxes[i].half_size);
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < boxes[b].half_size + boxes[i].half_size) {
              boxes[b].half_size = boxes[b].half_size > 1 ? boxes[b].half_size-=1 : 1;
              boxes[i].half_size = boxes[i].half_size > 1 ? boxes[i].half_size-=1 : 1;
          }
        }
      }
    }
