const saveButton = $('.saveBtn');

// function that loads the html before the JavaScript
$( document ).ready(function() {
  updateCurrentTime();
  hourBlocks();

});
// function to update the current time using dayjs
function updateCurrentTime() {
  const today = dayjs();
  $('#currentDay').text(today.format('dddd, MMM D, YYYY, h:mm:ss a'));

}
// updates the seconds on the time
setInterval(updateCurrentTime, 1000);

// retrieves the content from local storage
for (let i = 9; i < 18; i++) {
$(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}

// click event to add the saved values into the timeblocks
saveButton.on('click', function () {
  const text = $(this).siblings(".description").val();
  const time = $(this).parent().attr("id");
  
  localStorage.setItem(time, text);
  
})

// function to update the current hour and apply styling based on past, present, or future
function hourBlocks() {
const currentHour = dayjs().hour();

$('.time-block').each(function () {

const timeBlock = parseInt($(this).attr("id").split("hour-")[1]);

if (currentHour === timeBlock) {
  $(this).addClass('present');
} else if (currentHour > timeBlock) {
  $(this).addClass('past');
} else if (currentHour < timeBlock) {
  $(this).addClass('future');
}
})

};




 