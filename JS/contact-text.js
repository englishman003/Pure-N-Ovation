const App2 = new Vue({

    el: `#app2`,

    data: {

        form: {
            
            name: '',
            phone: '',
            message: '',
            phoneReg: /^[2-9][\d]{2}-[\d]{3}-[\d]{4}$/,

        }

    },

    methods: {

        submitForm(){
            console.log(this);
            if(this.form.name.length === 0 || !this.form.phone.test(this.form.phone) || this.form.message.length === 0){
                alert(`You need to fill out all of the information correctly!`);
                return false;
            }
            else{
                return true;
            }
        }

    },

});