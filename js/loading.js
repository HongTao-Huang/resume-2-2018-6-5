!function () {
    var view = document.querySelector('#upload');
    var contorler = {
        view : null,
        init : function(view){
            this.view = view;
            this.setTimerloading.call(this);
        },
        setTimerloading : function(){
            setTimeout(function () {
                view.classList.remove('active');
            },1);
        }
    }
    /****************加载动画********************************/
    contorler.init.call(contorler,view);
}.call();
