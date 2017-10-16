
//Clipboard.js
new Clipboard('#copyToClip');



// Functions
function isValidData(str){
    if(str.length < 5) return false;
    if(str.length > 200) return false;
    return true;
}



$(document).ready(function(){
    

    //Update Short url
    function updateShortUrl(newShortUrl){
        var HOST_URL = "localhost:3000/li/";
        $('.link').text(HOST_URL + newShortUrl);
        $('.link').attr('href', "li/" + newShortUrl);
    }


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
                    console.log("Data: " + resultData.shortUrl);
                    updateShortUrl(resultData.shortUrl);
                }
            });       

        } else {
            console.log("Invalid Data.")
        }
    });

});