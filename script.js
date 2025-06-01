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
// Optional: Lightbox
$(document).on("click", ".gallery img", function () {
  const src = $(this).attr("src");
  const modal = `
    <div id="lightbox" style="
      position:fixed;top:0;left:0;width:100%;height:100%;
      background:rgba(0,0,0,0.8);display:flex;
      align-items:center;justify-content:center;z-index:1000;">
      <img src="${src}" style="max-width:90%;max-height:90%;" />
    </div>
  `;
  $("body").append(modal);
});

// Close on click anywhere
$(document).on("click", "#lightbox", function () {
  $(this).remove();
});
