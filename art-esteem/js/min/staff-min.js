$(document).ready(function(){function t(t){"Erica Wheeler-Dubin"===t&&i.html("This is info for: "+t),"Someone Else"===t&&i.html("This is info for: "+t),"Instructor #1"===t&&s.html("This is info for: "+t),"Instructor #2"===t&&s.html("This is info for: "+t),"Instructor #3"===t&&s.html("This is info for: "+t),"Instructor #4"===t&&s.html("This is info for: "+t)}var i=$(".staff-info"),s=$(".instructor-info");$(".staff-list > li, .instructor-list > li").on("click",function(){var n=$(this).data("member"),o=$(this).parent().attr("class");"staff-list"===o&&(i.fadeOut(),setTimeout(function(){t(n),i.fadeIn()},500)),"instructor-list"===o&&(s.fadeOut(),setTimeout(function(){t(n),s.fadeIn()},500))})});