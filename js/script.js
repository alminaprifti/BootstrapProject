var countDate = new Date("Feb 14, 2021 00:00:00").getTime();

function newYear() {
  var now = new Date().getTime();
  gap = countDate - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(gap / day);
  var h = Math.floor((gap % day) / hour);
  var m = Math.floor((gap % hour) / minute);
  var s = Math.floor((gap % minute) / second);

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}

setInterval(function () {
  newYear();
}, 1000);

$(function(){

  $("#shopcart-items").slideUp();
  $(".cart").on("click", function () {
  $("#shopcart-items").slideToggle();
  });

  $("#items-basket").text("(" + ($("#list-item").children().length) + ")");

  
  $(".item").on("click", function () {
    $("#shopcart-items").slideDown();
   setTimeout(function(){
      $("#shopcart-items").slideUp();
   }, 2000)
    //add items to basket
    $(this).each(function () {
      var name = $(this).children(".item-detail").children("h4").text();
      var remove = "<button class='remove'> X </button>";
      var cena = "<span class='eachPrice'>" + (parseFloat($(this).children(".item-detail").children(".prices").children(".price").text())) + "</span>";
      $("#list-item").append("<li>" + name + "&#09; - &#09;" + cena + "$" + remove + "</li>");

      //number of items in basket
      $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
      $("#items-basket").text();
      
        //calculate total price
        var totalPrice = 0;
          $(".eachPrice").each(function (){ 
            var cenaEach = parseFloat($(this).text());
            totalPrice+=cenaEach;
          });
          $("#total-price").text(totalPrice + "$");
    });

    //remove items from basket
    $(".remove").on("click", function () {
      $(this).parent().remove();

          var totalPrice = 0;
          $(".eachPrice").each(function (){ 
            var cenaEach = parseFloat($(this).text());
            totalPrice+=cenaEach;
          });
          $("#total-price").text(totalPrice + "$");
      $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
    });
  });
})
