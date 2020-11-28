
$(document).ready(function () {
    var currentDate = moment().format("dddd MMMM Do YYYY")
    $("#currentDay").text(currentDate);
    updateTexts();
});

// confirming current time and assigning it to a color
function timeZone() {

    var eventTime = moment().hour();
    var currentTime = $('.row');

    currentTime.each(function () {
        var myString = $(this).attr('id');
        // added substring to take only last 3 characters of string so parseInt take first number rather than "hr-"
        var match = parseInt(myString.substring(3));
        if (match < 9) {
            match += 12;
        }
        // adding the colors for past, present, and future
        let time = $(this)[0];
        if (eventTime === match) {
            $(time).addClass('present')
        }
        else if (eventTime > match) {
            $(time).addClass('past')
        }
        else if (eventTime < match) {
            $(time).addClass('future')
        }
    })
}

// save to local storage
timeZone();
storage = window.localStorage;
// the key = time
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}
// grabs the item from local storage
function getItemLocalStorage(key) {
    let item = localStorage.getItem(key);
    if (item == null) return "";
    return item;
}

let texts = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

// updates text when you refresh your page
function updateTexts() {
    for (text of texts) {
        let item = getItemLocalStorage(text);
        if (item != null) {
            let textAreaKey = text + "text";
            document.getElementById(textAreaKey).value = item;
        }
    }
}