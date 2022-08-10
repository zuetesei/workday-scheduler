// Display today's date
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

$(document).ready(function() {
    // save btn listening event 
    $(".saveBtn").on("click", function() {
        // event.preventDefault();
        var time = $(this).parent().attr("id");
        var plan = $(this).siblings(".plan-content").val();
        localStorage.setItem(time, plan);
    })

    function timeTracker() {
        var thisMoment = moment().hour();
        // loop over time blocks
        $(".time-block").each(function () {
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);

            // add and remove classes according to time 
            if (hourBlock < thisMoment) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (hourBlock === thisMoment) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }

        })
         
    }
    // THEN the text for that event is saved in local storage
    // jQuery retrieve items from local storage 
    $("#hour9 .plan").val(localStorage.getItem("hour9"));
    $("#hour10 .plan").val(localStorage.getItem("hour10"));
    $("#hour11 .plan").val(localStorage.getItem("hour11"));
    $("#hour12 .plan").val(localStorage.getItem("hour12"));
    $("#hour13 .plan").val(localStorage.getItem("hour13"));
    $("#hour14 .plan").val(localStorage.getItem("hour14"));
    $("#hour15 .plan").val(localStorage.getItem("hour15"));
    $("#hour16 .plan").val(localStorage.getItem("hour16"));
    $("#hour17 .plan").val(localStorage.getItem("hour17"));

    timeTracker();
})

// function timeBlockColor() {
//     var hour = moment().hours();
//     console.log(hour)

//     $(".time-block").each(function() {
//         var currentHour = $(this).attr("id").split("-")[1];
//         console.log(this)
//         console.log(currentHour)

//     if (currentHour > hour) {
//         $(this).addClass("future")
//     } else if (currentHour == hour) {
//         $(this).addClass("present")       
//     } else {
//         $(this).addClass("past")
//     }
// })
// }

// timeBlockColor()



//     // time blocks 
//     $(".time-block").each(function() {
//         var timeBlock = parseInt($(this).attr("id"));
//         console.log(this)
//         console.log(currentHour)

//         if (currentHour > hour) {
//             $(this).addClass("future")
//         } else if (currentHour === hour) {
//             $(this).addClass("present")       
//         } else {
//            $(this).addClass("past")
//         }
// });


// // DEFINING VARIABLES 
// var saveBtn = $(".saveBtn")

// // FUNCTIONS
// /* WHEN I open the planner
// THEN the current day is displayed at the top of the calendar */ 
// $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// /* WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future */

// // WHEN I click the save button for that time block


// /* WHEN I refresh the page
// THEN the saved events persist */
// function dailyPlanner() {
//     $(".hour").each(function() {
//         var currentHour = $(this).text();
//         var currentPlan = localStorage.getItem(currentHour);

//         console.log(this)

//         if(currentPlan !== null) {
//             $(this).siblings(".plan").val(currentPlan)
//         }
//     })

// }

// dailyPlanner()