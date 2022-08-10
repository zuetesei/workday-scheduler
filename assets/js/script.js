$(document).ready(function() {
    var currentMoment = moment().format("MMMM Do YYYY");
    var currentDate = document.getElementById("currentDay");
    currentDate.innerHTML = currentMoment;
    var hour = moment().format("HH");

    // time blocks 
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));
        console.log(this)
        console.log(currentHour)

    if (currentHour > hour) {
        $(this).addClass("future")
    } else if (currentHour === hour) {
        $(this).addClass("present")       
    } else {
        $(this).addClass("past")
    }
});

$("saveBtn").click(function(event) {
    event.preventDefault();
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();
    localStorage.setItem(time, plan);
})
    // THEN the text for that event is saved in local storage
    // jQuery retrieve items from local storage 
    $("#hour-09 .plan").val(localStorage.getItem("hour-9"));
    $("#hour-10 .plan").val(localStorage.getItem("hour-10"));
    $("#hour-11 .plan").val(localStorage.getItem("hour-11"));
    $("#hour-12 .plan").val(localStorage.getItem("hour-12"));
    $("#hour-13 .plan").val(localStorage.getItem("hour-13"));
    $("#hour-14 .plan").val(localStorage.getItem("hour-14"));
    $("#hour-15 .plan").val(localStorage.getItem("hour-15"));
    $("#hour-16 .plan").val(localStorage.getItem("hour-16"));
    $("#hour-17 .plan").val(localStorage.getItem("hour-17"));
})


// // DEFINING VARIABLES 
// var saveBtn = $(".saveBtn")

// // FUNCTIONS
// /* WHEN I open the planner
// THEN the current day is displayed at the top of the calendar */ 
// $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// /* WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future */
// function timeBlockColor() {
//     var hour = moment().hours();
//     console.log(hour)

//     $(".time-block").each(function() {
//         var currentHour = parseInt($(this).attr("id"));
//         console.log(this)
//         console.log(currentHour)

//     if (currentHour > hour) {
//         $(this).addClass("future")
//     } else if (currentHour === hour) {
//         $(this).addClass("present")       
//     } else {
//         $(this).addClass("past")
//     }
// })
// }

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

// timeBlockColor()
// dailyPlanner()