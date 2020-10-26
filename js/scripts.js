$(document).ready(function() {
  const iceCream = ["chocolate", "vanilla", "pistachio", "salted caramel"];
  iceCream.forEach(function(flavor) {
    $(".iceCream").append("<p>" + flavor + "</p>");
  });
});