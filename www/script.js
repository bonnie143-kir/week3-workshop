$(document).ready(function() {
    console.log("Page ready!");
    $("#loginform").submit(function(event) {
        event.preventDefault();
        ajaxPost();
    });

    function ajaxPost(){
        var formData ={
            email: $("#email").val(), 
            upwd: $("#upwd").val()
        }
        $.ajax({
            type: "POST", contentType: "application/json",
            url: window.location + "api/login", data: JSON.stringify(formData), dataType: 'json',
            success : function(user) {
                if (user.valid == true) {
                    $("#loginform").addClass("success");
                    $("#loginform").removeClass("fail");
                    document.getElementById("errormsg").style.display="none";
                }else {
                    $("#loginform").removeClass("success");
                    $("#loginform").addClass("fail");
                    document.getElementById("errormsg").style.display="block";
                }
             $("#postResultDiv").html("<p>" + "Post success! <br>" + "Email address: " + user.email + "</br>" + "Password: " + user.upwd + "</br>" +"Valid user: " + user.valid + "</p>");
            },
            error: function(e){
                alert("Error!");
                console.log("ERROR: ", e);
            }
        });
      resetData();
    }
    function resetData(){
        $("#email").val("");
        $("#upwd").val("");
    } 
    
});