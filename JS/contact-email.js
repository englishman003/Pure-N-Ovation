// Learn Vue.js - Full Course for Beginners - 2019 <-- Video on YouTube to focus on later tonight.

const App = new Vue({
    el: `#app`,
    data: {

        errors: [],

        form: {
            
            name: '',
            email: '',
            message: '',
            emailReg: /[^@]+@[^@]/,


        }

    },

    methods: {

        submitForm(){
            console.log(this);
            if(this.form.name.length === 0 || !this.form.emailReg.test(this.form.email) || this.form.message.length === 0){
                alert(`You need to fill out all of the information correctly!`);
                return false;
            }
            else{
                return true;
            }
        }

    },

    computed: {

        validateEmail(){

            const emailPattern = /[^@]+@[^@]/;
            return emailPattern.test(this.form.email);

        }

    },

});

const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ncluff003@gmail.com',
      pass: 'agent003'
    }
  });
  
  var mailOptions = {
    from: 'ncluff003@gmail.com',
    to: 'superstar_003@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: `That was easy!`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });