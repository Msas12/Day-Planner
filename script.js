$(document).ready(function(){
    $('#currentDay').text(moment().utc().format("MMM Do YYYY"))
    $('#currentTime').text(moment().format("hh:mma"))

    // Global variables
    var currentHour = moment().format('HH')
    
    // Function to change color of each hour based on time of day
    $('textarea').each(function(index, value) {
        var elementHour = parseInt($(this).attr("data-hour"))

        // Red for current hour
        if (elementHour == currentHour){
            value.style.backgroundColor = "#ff6961";
        
        // Grey for past events
        }else if (elementHour<currentHour) {
            value.style.backgroundColor = "#9e9e9e"

        // Green for future events
        }else {
            value.style.backgroundColor = "#77dd77"
            
        }
     });

     // Empty array to store values eneted into textarea inputed by user
     var eventItems = []





     // Function to save Events in text area when save button is clicked
     $('.save-button').on('click', function(){
         // Variable to specify what save button is being clicked
         var saveButtonHour = ($(this).attr("data-hour"))
         console.log(saveButtonHour)

         // Variable for value of text field of specific save button
         var inputValue = $(this).parent().siblings('.event-text').val()
         console.log(inputValue)
        //  // Variable to specify what hour the input is in
        //  var inputHour = $(this).parent().siblings('.event-text').attr("data-hour")
        //  console.log(inputHour)

         eventItems.push(inputValue)

        localStorage.setItem('events', JSON.stringify(eventItems))

        
    })
    
    // Gets items from localStorage on initialization
    function init (){
        var storedEventItems = JSON.parse(localStorage.getItem("events"))

            if (storedEventItems !== "") {
                eventsItems = storedEventItems;
                $('.event-text').html(eventItems)
            }
    }

// Initializing function call
init()


})