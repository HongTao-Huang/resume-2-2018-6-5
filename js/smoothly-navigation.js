!function () {
    var view = document.querySelector('nav.menu');
    var contorler = {
        view : null,
        liTags: null,
        aTags: null,
        init : function(view){
            this.view = view;
            this.initAnimate();
            this.liTags = this.view.querySelectorAll('ul > li');
            this.aTags = this.view.querySelectorAll('ul > li > a');
            this.bindEventsMenu();
            this.bindEventsScrollToElement();
        },
        bindEventsMenu : function () {
            for(let i = 0; i < this.liTags.length; i++){
                this.liTags[i].onmouseenter =  (e)=> {
                    this.active(e.currentTarget);
                };
                this.liTags[i].onmouseleave = (e)=> {
                    this.activeDelete(e.currentTarget);
                }
            }
        },
        active: function(element){
            element.classList.add('active');
        },
        activeDelete: function(element){
            element.classList.remove('active');
        },
        initAnimate : function () {
            /* 缓动  tween插件代码*/
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        scrollToElement : function (element) {
            let targetTop = element.offsetTop - 80;
            let currentTop = window.scrollY;
            let s = (Math.abs(targetTop - currentTop))/ 100;
            let t = s * 300;
            if(t > 900){
                t = 900;
            }
            var coords = { y: currentTop }; // Start at (0, 0)
            var tween = new TWEEN.Tween(coords)
                .to({ y : targetTop }, t)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function() {
                    window.scrollTo(0 , coords.y);
                })
                .start();
        },
        bindEventsScrollToElement: function(){
             for(let i = 0; i < this.aTags.length; i++){
                 this.aTags[i].onclick =  (e)=> {
                     e.preventDefault();
                     let a = e.currentTarget;
                     let href = a.getAttribute('href');
                     let element = document.querySelector(href);
                     this.scrollToElement(element);
                 }
            }
        }
    }
    contorler.init.call(contorler,view);
}.call();


