$(document).ready(function() {
    $(".eucountry").draggable();
    $(".country").draggable();
    $(".ukcountry").draggable();

    $("#EU").droppable({
        drop: function(event, ui) {
            if ($(ui.draggable).hasClass("eucountry")) {
                $(ui.draggable).css("background-color", "green");
            }

            if ($(ui.draggable).hasClass("country")) {
                $(ui.draggable).css("background-color", "red");
            }
            if ($(ui.draggable).hasClass("ukcountry")) {
               $(ui.draggable).css("background-color", "red");
                var brexit = confirm("As if, try again");


            }
        }
    });

    $("#not").droppable({
        drop: function(event, ui) {
            if ($(ui.draggable).hasClass("eucountry")) {
                $(ui.draggable).css("background-color", "red");
            }

            if ($(ui.draggable).hasClass("country")) {
                $(ui.draggable).css("background-color", "green");
            }

            if ($(ui.draggable).hasClass("ukcountry")) {
                $(ui.draggable).css("background-color", "green");
            }

        }
    });
});
