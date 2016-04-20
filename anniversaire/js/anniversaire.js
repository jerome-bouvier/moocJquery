$(function () {
    var $bouton = $('#special');
    var i = 0;
    $bouton.on("click", function () {
        i++;
        if (i <= 4) {
            console.log("Clic " + i + " fois");
            $("li").eq(i).css("visibility", "visible");
            if (i === 4) {
                $("ul#messages li").text("HAPPY BIRTHDAY");
            }
        };
    });
});
