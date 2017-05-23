$(document).ready(function() {
  $("#products").submit(function(event) {
    var product = $("#selection").val();
    var color = $("input:radio[name=color]:checked").val();

    $("#product").text(product);
    $("#color").text(color);
    $("#contact").show();

    event.preventDefault();
  });

  $("#contact").submit(function(event) {
    var name = $("#name").val();
    var address = $("#address").val();
    var email = $("#email").val();
    var phone = $("#phone").val();

    var contact = name + "<br/>" + address + "<br/>" + email + "<br/>" + phone;
    $("div#receipt p:first-of-type").html(contact);
    $("#receipt").show();

    event.preventDefault();
  });
});
