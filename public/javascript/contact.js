
$(document).ready(function() {
    $("body").removeClass("fade-out");
});

function validateForm() {
    var x = document.forms["contact"]["first-name"].value;
    var y = document.forms["contact"]["last-name"].value;
    var z = document.forms["contact"]["email"].value;
    var a = document.forms["contact"]["description"].value;
    
    if (x == "") {
        alert("First Name is required");
        return false;
    }
    else if (y == "") {
        alert("Last Name is required");
        return false;
    }

    else if (z == "") {
        alert("E-mail address is required");
        return false;
    }

    else if (a == "") {
        alert("Description of request is required");
        return false;
    }
    else {
        $("#confirmation").css("display", "inline-block");
        $(".contact-form").css("display", "none");
    }
}
