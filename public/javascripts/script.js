
function isValidData(str){
    if(str.length < 5) return false;
    if(str.length > 200) return false;
    return true;
}

$(document).ready(function(){
    
    //On User Submit
    $('#user-btn').click(function(){
        var userData = {};
        userData.url = $('#user-url').val();

        // Data is valid
        if(isValidData(userData)){
            console.log("Sending Data.." + userData.url);            
            $.ajax({
                type: "POST",
                url: "/api/url",
                data: JSON.stringify(userData),
                contentType: 'application/json; charset=utf-8',
                dataType: "json",
                success: function(resultData){
                    console.log("Complete");
                    console.log("Data: " + resultData);
                }
            });       

        } else {
            console.log("Invalid Data.")
        }
    });

});