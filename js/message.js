!function () {
    var view = document.querySelector('#siteMessage');

    var model = {
        init : function(){
            let APP_ID = 'Od7Bd3gkNYWSgfwPaFUh2m0j-gzGzoHsz';
            let APP_KEY = '8KIkSeoNSMheHVhmossNbGGK';
            AV.init({appId: APP_ID, appKey: APP_KEY});
        },
        save : function(leanClass , name , content){
            let Class = AV.Object.extend(leanClass);
            let leanclass = new Class();
            return leanclass.save({
                name: name ,
                content: content
            })
        },
        fetch : function(leanClass){
            let query = new AV.Query(leanClass);
            return query.find();
        }
    };

    var contorller = {
        view : null ,
        model : null,
        messageList : null,
        form : null,
        init : function(view){
            this.view = view;
            this.model = model;
            this.messageList = document.querySelector('#messageList');
            this.form = document.querySelector('#messageForm');
            this.model.init();
            this.loadfetch('Message');
            this.bindEvents();
        },
        addLi : (eventAttributes)=>{
            let li = document.createElement('li');
            li.innerText = `${eventAttributes.name}:${eventAttributes.content}`;
            this.messageList.appendChild(li);
        }
        ,
        saveObject : function(leanClass){
            let content = this.form.querySelector(`input[name = 'content']`).value;
            let name = this.form.querySelector(`input[name = 'name']`).value;
            this.model.save(leanClass , name , content)
            .then((e)=>{
                this.addLi(e.attributes);
                this.form.querySelector(`input[name = 'content']`).value = '';
                this.form.querySelector(`input[name = 'name']`).value = '';
            });
        },
        loadfetch : function(leanClass){
            this.model.fetch(leanClass).then( (items)=> {
                console.log(items);
                let array = items.map((item)=> item.attributes);
                array.forEach((item) => {
                    console.log(item)
                    this.addLi(item);
                });
            })
        },
        bindEvents : function(){
            this.form.addEventListener('submit',(e)=>{
                e.preventDefault();
                this.saveObject('Message');
            })
        }
    };

    contorller.init.call(contorller,view);
}.call();



