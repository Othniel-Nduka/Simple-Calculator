$(document).ready(function () {
    $(".theme").click(() => {
        $(".theme").toggleClass("change")
        $(".container").toggleClass("change");
        $(".calculator").toggleClass("change");
        $("input").toggleClass("change");
        // Toggling the theme text
        $(".theme p").text(
            $(".theme p").text() == "Light Mode" ? "Dark Mode" : "Light Mode"
        );
    })

    $(".theme").click(() => {
        $(this).find('i').toggleClass("fa-moon fa-sun");
    })
    
});