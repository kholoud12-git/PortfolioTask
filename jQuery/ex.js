$(document).ready(function () {
    $(".color-mode").click(function () {
        $(".color-mode img ").toggleClass("replaced");
    });
    $(".color-mode").click(function () {
        $(".color-mode span").toggleClass("texted");
    });
    $(".color-mode").click(function () {
        $(".navbar-brand img").toggleClass("replacePerson");
    });
    $(".color-mode").click(function () {
        $("body").toggleClass("bodyDark");
    });
    $(".color-mode").click(function () {
        $(".navbar").toggleClass("navDark");
    });
    $(".color-mode").click(function (){
        $(".leftarrow").toggleClass("leftarrowdark")
    })
    $(".color-mode").click(function (){
        $(".rightarrow").toggleClass("rightarrowdark")
    })
    $(".color-mode").click(function () {
        $("#about-text,#abouts,#projects,#resumes,#contacts,.navbar-brand span").toggleClass("navLink");
    });
    $(".color-mode").click(function () {
        $(".github").toggleClass("darkgithub");
    });
    $(".color-mode").click(function () {
        $(".linked").toggleClass("darklinked");
    });

    // $(".nav-link").hover(function(){
    //     $(this).slideUp(1000);
    //     }, function(){
    //     $(this).slideDown(1000);
    //   });
      
});