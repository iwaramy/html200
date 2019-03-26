

$(function(){
  $(".dog-tile").hover(
  function() {
    $(this).css("box-shadow", "0 8px 10px 0 rgba(0, 0, 0, 0.9)");
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
