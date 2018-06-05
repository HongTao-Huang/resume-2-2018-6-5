!function () {
    let specialTags = document.querySelectorAll('[data-x]');
    for(let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset');
    }

    setTimeout(function () {
        findClosestAndRemoveOffset();
    },1000);

    window.addEventListener('scroll',function () {
        findClosestAndRemoveOffset();
    });


    /********************helper************************************/
    function findClosestAndRemoveOffset() {
        let specialTags = document.querySelectorAll('[data-x]');
        let minIndex = 0;
        for(let i = 1; i < specialTags.length; i++){
            if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
                minIndex = i;
            }
        }
        specialTags[minIndex].classList.remove('offset');
        for(let i = 0; i < specialTags.length; i++) {
            let id = specialTags[i].id;
            let aTag = document.querySelector('a[href ="#'+ id +'"]');
            let liTag = aTag.parentNode;
            if(i === minIndex){
                liTag.classList.add('highlight');
            } else {
                liTag.classList.remove('highlight');
            }
        }
    }
}.call();
