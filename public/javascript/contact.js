
$(document).ready(function() {
    $("body").removeClass("fade-out");
    
    $("#submit").click(function() {
        $("#confirmation").css("display", "inline-block");
        $(".contact-form").css("display", "none");
    });
});
