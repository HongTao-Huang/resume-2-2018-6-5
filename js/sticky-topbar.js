!function () {
    var view = document.querySelector('#header');
    var contorler = {
        view : null ,
        init : function (view) {
            this.view = view ;
            this.bindEvents.call(this);
        } ,
        bindEvents : function(e){
            window.addEventListener('scroll', ()=>{
                if(window.scrollY > 0){
                    this.active();
                }
                else {
                    this.deleteActive();
                }
            });
        } ,
        active : function () {
            this.view.classList.add('sticky');
        } ,
        deleteActive : function () {
            this.view.classList.remove('sticky');
        }
    }
    contorler.init.call(contorler,view);
}.call();
