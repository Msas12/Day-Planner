$(document).ready(function(){
    $('#currentDay').text(moment().utc().format("MMM Do YYYY"))
    $('#currentTime').text(moment().format("hh:mma"))

    // Global variables
    var currentHour = moment().format('HH')
    

    $('textarea').each(function(index, value) {
        var elementHour = parseInt($(this).attr("data-hour"))

        if (elementHour == currentHour){
            value.style.backgroundColor = "#ff6961";

        }else if (elementHour<currentHour) {
            value.style.backgroundColor = "#9e9e9e"

        }else {
            value.style.backgroundColor = "#77dd77"
            
        }
     });

     $('.save-button').on('click', function(){
         var buttonHour = ($(this).attr("data-hour"))
         console.log(buttonHour)
        
     })


})