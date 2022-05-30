// $(document).ready( function() {
//   var arr = $(".tod")
//   var lengthOfArray = arr.length();
//   var timeOfDay = ["12a.m.", "1a.m.", "2 a.m.", "3 a.m.", "4 a.m.", "5 a.m."]
  
//   $(".tod").html("<p class='d-inline text-center'>12 a.m.</p>")
//   for (let i = 1; i < lengthOfArray; i++) {
//     $(".tod").html(`<p class='d-inline text-center'>${i}a.m.</p>`)
    
//   }
// });

var todaysDate = moment()._d;
// var formattedDate = moment(todaysDate,H HH)
var currTime = moment().format('hh a')
console.log(currTime)
var currTimePlus1 = moment().add(1, 'hour')
var formattedCurrTimePlus1 = currTimePlus1.format('hh');
var currTimeminus1 = moment().subtract(1, 'hour');
var currTimeminus2 = moment().subtract(2, 'hour');
var currTimeminus3 = moment().subtract(3, 'hour');
var currTimeminus4 = moment().subtract(4, 'hour');
var currTimeminus5 = moment().subtract(5, 'hour');
var currTimeminus6 = moment().subtract(6, 'hour');
var currTimeminus7 = moment().subtract(7, 'hour');
var currTimeminus8 = moment().subtract(8, 'hour');
var currTimeminus9 = moment().subtract(9, 'hour');
var currTimeminus9 = moment().subtract(10, 'hour');
var currTimeminus9 = moment().subtract(11, 'hour');
var currTimeminus9 = moment().subtract(12, 'hour');
var formattedCurrTimeMinus1 = currTimeminus1.format('hh a')

$('.tod').each(function(index) {
  
  $(this).html(`<p>${moment().hour(0).minute(0).second(0).add(index, 'hour').format('hh a')}</p>`);

}
 );

 

 $('.col-sm-9').on('dblclick' ,(event) => {
  event.preventDefault();
  var targetedDiv = $(event.target);
  // targetedDiv.html("<textarea></textarea>")
  console.log("successful")
  
});
$('.row').on('click', '.saveBtn', function() {
  // var savedInput = $(e.target).val();
  // var parentElId = $(e.target).parent().attr("id")
  var previousEl = $(this).prev()
  console.log(previousEl);
  var prevChild =previousEl.children()
  console.log(prevChild)
  var prevChildVal = prevChild.val()
  console.log(prevChildVal)
  var currStoredItem = localStorage.getItem(previousEl.attr("id"))
  localStorage.setItem(previousEl.attr("id"),prevChildVal)
  // var input = $(this).val();


  // localStorage.setItem(parentElId, savedInput)
})


$(document).ready( function() {
  var todaysDate = moment().format('dddd MMMM DD');
  var showTodaysDate = $('#currentDay').text(`Today is ${todaysDate}`)

  $('textarea').each(function(i) {
    $(this).val(localStorage.getItem(i))
    console.log($('textarea').val())
      
    })});
var militaryTime = moment().format('HH')
    $(document).ready( function() {
      $('.tod').each(function(index) {
        $(this).val(`${moment().hour(0).minute(0).second(0).add(index, 'hour').format('HH')}`);
      }
       );
      $('.tod').each(function() {
        targetedDiv = $(this)
        if( $(this).val() == militaryTime) {
        
          targetedDiv.next().addClass("present");
        } else if ($(this).val() <= militaryTime) {
          
          $(this).next().addClass("past");

        } else {
          $(this).next().addClass("future");

        }
          
        })});


//  var divHtml = $('.timeblock').html();
//  var textArea = $("<textarea />");
//  textArea.val(divHtml);
//  $(".time-block").html(textArea);

