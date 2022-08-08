// DEFINING VARIABLES 
var saveBtn = $(".saveBtn")

// FUNCTIONS
/* WHEN I open the planner
THEN the current day is displayed at the top of the calendar */ 
$("#currentDay").text(moment().format('dddd MMMM do YYYY'));

/* WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future */
function timeBlockColor() {
    var hour = moment().hours();
    console.log(hour)

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
})
}

// WHEN I click the save button for that time block
saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".plan").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, plan);
})

/* WHEN I refresh the page
THEN the saved events persist */
function dailyPlanner() {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);

        console.log(this)

        if(currentPlan !== null) {
            $(this).siblings(".plan").val(currentPlan)
        }
    })

}

timeBlockColor()
dailyPlanner()