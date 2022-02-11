var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
function ValidateName(){
    var name = document.getElementById('contact-name').value;
     
    if(name.length == 0){
      nameError.innerHTML = 'Name is Required';
      return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        return false;
    }
    nameError.innerHTML = 'Valid';
    return true;
}
function ValidatePhone(){
    var phone = document.getElementById('contact-phone').value;
if(phone.length == 0){
    phoneError.innerHTML = 'Phone no should be 10 digits';
    return false;
}

if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = '10 digits required';
    return false;
}
phoneError.innerHTML = 'Valid';
return true;

}
 function ValidateEmail(){
     var email = document.getElementById('contact-email').value;

     if(email.length == 0){
         emailError.innerHTML = 'Email is Required';
         return false;
     }
      
     if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
          emailError.innerHTML = 'Enter Valid Email';
          return false;
     }
      emailError.innerHTML = 'Valid';
      return true;
 }
 function ValidateMessage(){
     var message = document.getElementById('contact-message').value;
     var required = 30;
     var left = required - message.length;

     if(left > 0){
         messageError.innerHTML = left + 'more Characters Required';
        return false;
     }
     messageError.innerHTML = 'Valid';
     return true;
 }
 function ValidateForm(){
     if(!ValidateName() || !ValidatePhone() || !ValidateEmail() || !ValidateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please Correct Above Details';
        setTimeout(function(){  submitError.style.display = 'none';}, 3000);
        return false;
     }
 }
 function ValidateReset(){
     if(!ValidateName() || !ValidatePhone() || !ValidateEmail() || !ValidateMessage()){
         submitError.innerHTML = 'Fine';
         return false;
     }
 }