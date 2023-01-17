"use strict";

// alert($("#my-p1a").html());

// $(".codeup").css("border", "1px solid red");

// $("li").css("font-size", "20px");
//
// $("h1, p, li").css("background-color", "yellow");
//
// alert($('h1').html());

// $("*").css("background-color", "yellow");

// (function () {
//
//     console.log(jQuery.fn.jquery);
//
//     console.log($.fn.jquery);
//
// })();
//
// $(function() {
//
//     alert( 'The DOM has finished loading!' );
//
// });
//
// $(document).ready(function (){
//     alert( 'The DOM has finished loading! Part deux' )
// });



// Add jQuery code that will change the background color of an h1 element when clicked.
$("h1").click(function() {
        $(this).css("background-color", "cornflowerblue");
    }
)


// Make all paragraphs have a font size of 18px when they are double clicked.
// $("p").dblclick(function () {
//         $("p").css("font-size", "18px")
//     }
// )
$("p").dblclick(function () {
        $(this).css("font-size", "18px")
    }
)


// Set all li text color to red when the mouse is hovering; reset to black when it is not.
$("li").hover(hoverOn, hoverOff)

// function hoverOn() {
//     $("li").css("color", "red")
// }
// function hoverOff() {
//     $("li").css("color", "black")
// }

function hoverOn() {
    $(this).css("color", "red")
}
function hoverOff() {
    $(this).css("color", "black")
}