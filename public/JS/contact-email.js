// Learn Vue.js - Full Course for Beginners - 2019 <-- Video on YouTube to focus on later tonight.



const App = new Vue({
    el: `#App`,
    data: {

        title: `Get In Touch`,

        form: {

            fNamePlaceholder: `Enter Your First Name`,
            lNamePlaceholder: `Enter Your Last Name`,
            emailPlaceholder: `Enter Your Email`,
            subjectPlaceholder: `Enter Your Subject`,
            messagePlaceholder: `Enter Your Message`,

            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',

            emailReg: /[^@]+@[^@]/,
            messageMax: 5000,


        }

    },

    methods: {

        submitForm() {
            console.log(this);
            if (this.form.firstName.length < 3 || this.form.lastName.length === 0 || !this.form.emailReg.test(this.form.email) || this.form.subject.length < 3 || this.form.message.length < 25) {
                alert(`You need to fill out all of the information correctly!`);
                return false;
            } else {
                let emailForm = document.getElementById('emailForm');
                emailForm.submit();
                return console.log('Email has been sent.');
            }
        }

    },

    computed: {

        validateEmail() {

            const emailPattern = /[^@]+@[^@]/;
            return emailPattern.test(this.form.email);

        }

    },

});