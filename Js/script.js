// alert("workingggg")
$(document).ready(function() {
    $("#design").click(function(){
        // action on mouse toggles over design
      $(".firstClick").toggle();
      $("#design-show").toggle();
      $("#design-show").css("textAlign","center");
      $("p,h6")
      .on("mouseenter",function() {
        $(this).css({
          "font-weight":"bolder"
        });
      }) 
    //    action on mouseleave to restore to default
      .on("mouseleave", function(){
        var styles={
          fontWeight:"normal"
        }
      })
    })
  })
  $(document).ready(function() {
    $("#develop").click(function(){
        // action on mouse toggles over design
      $(".secondClick").toggle();
      $("#develop-show").toggle();
      $("#develop-show").css("textAlign","center");
      $("p,h6")

      .on("mouseenter",function() {
        $(this).css({
          "font-weight":"bolder"
        });
      }) 
    //    action on mouseleave to restore to default
      .on("mouseleave", function(){
        var styles={
          fontWeight:"normal"
        }
      })
    })
  })


  $(document).ready(function() {
      //    action on mouseenter on the product management
    $("#product").click(function(){
      $(".thirdClick").toggle();
      $("#product-show").toggle();
      $("#product-show").css("textAlign","center");
      $("p,h6")
      .on("mouseenter",function() {
        $(this).css({
          "font-weight":"bolder"
        });
      })
     //    action on mouseleave to restore to default
      .on("mouseleave", function(){
        var styles={
          fontWeight:"normal"
        }
      })
    })
  })

  $(document).ready(function(){

    $("column1").mouseover(function(){
      $(".overlay4").css({opacity: '1'});
    }).mouseout(function(){
      $(".overlay4").css({opacity: '0'});
    });
  
    });

$(document).ready(function() {
  $("#blanks").submit(function(event) {

      var nameOneInput = $("input#firstName").val();
      var nameTwoInput = $("input#surName").val();
      var emailInput = $("input#emailAddress").val();
      // var nameInput = $("input#maritalStatus").val();
      // var emailInput = $("input#Emailaddress").val();
      // var messageInput = $("input#car").val();
      $(".firstName").text(nameOneInput);
      $(".surName").text(nameTwoInput);
      $(".emailAddress").text(emailInput);

      // alert("working")

     $("#onSubmit").show();

     event.preventDefault();
  });

});



$(document).ready(function(){
$("Id4").mouseover(function(){
$(".overlay4").show({opacity: '1'});
}).mouseout(function(){
$(".overlay4").hide({opacity: '0'});

});

});