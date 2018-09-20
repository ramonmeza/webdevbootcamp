$(document).ready(function() {
    // Check off specific todos by clicking them
    $("ul").on("click", "li", function() {
        $(this).toggleClass("completed-item");
    });

    // Click on X to delete item
    $("ul").on("click", "span", function(event) {
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
        });
        event.stopPropagation();
    });

    // Add item to the list
    $("input[type='text']").on("change", function() {
        var todoItem = $(this).val();
        $("ul").append("<li><span>X</span> " + todoItem + "</li>");
        $(this).val("");
    });

    // Expand and shrink the input
    $(".expand").on("click", function() {
        var icon = $(".expand i");

        if(icon.hasClass("fa-plus")) {
            // Change to minus
            icon.removeClass("fa-plus");
            icon.addClass("fa-minus");
        } else {
            // Change to minus
            icon.removeClass("fa-minus");
            icon.addClass("fa-plus");
        }

        // Toggle hidden
        $("input").toggle();
    });
});