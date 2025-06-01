// script.js

function showSection(id) {
  $("section").addClass("hidden");
  $("#" + id).removeClass("hidden");
}

$("#contactForm").submit(function (e) {
  e.preventDefault();
  const name = $("#name").val();
  const email = $("#email").val();
  const message = $("#message").val();

  if (name && email && message) {
    $("#formMessage").text("Thank you for contacting us, " + name + "!");
    $(this).trigger("reset");
  } else {
    $("#formMessage").text("Please fill out all fields.");
  }
});
