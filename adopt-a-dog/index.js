$(function(){
  $(".dog-tile").hover(
  function() {
    $(this).css("border", "2px double rgb(50, 80, 96)");
  });
});


function dogInfo(dog) {
  alert("Name: " + dog.name + "\nBreed: " + dog.breed + "\nAdoption Fees: " + dog.cost);
}

function calculateTotal(dogFee) {
  let fees = dogFee.cost;
  let prevValue = $('#total-cost').html();
  cartTotal =  parseInt(prevValue, 10) + fees;
  alert("Total: " + cartTotal);
  $('#total-cost').html(cartTotal);
}
