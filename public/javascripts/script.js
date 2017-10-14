
function isValidData(str){
    if(str.length < 5) return false;
    if(str.length > 200) return false;
    return true;
}

$(document).ready(function(){
    
    //On User Submit
    $('.submit').click( function(){
        var userData = $('#user-url').val();
        if(isValidData(userData)){
            console.log(userData);            
        } else {
            console.log("Invalid Data.")
        }
    });

});