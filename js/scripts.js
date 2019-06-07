$(document).ready(function() {
  $("#submitButton").click(function(event){
    event.preventDefault();
    // console.log("clicked");
    var pizza = $("select#pizza").val();
    // console.log(pizza);
    var thunderstorms = $("select#thunderstorms").val();
    // console.log(thunderstorms);
    var hiking = $("select#hiking").val();
    var coffee = $("select#coffee").val();
    var paulie = $("select#paulie").val();
    var name = $("input#name").val();
    // console.log("name");
    $(".name").text(name);
    if (pizza === "yes" && thunderstorms === "yes" && hiking === "yes" && coffee === "yes" && paulie === "yes"){
      // console.log("pizza yes.");
      $(".programming-language").hide();
      $("#ruby").show();
    } else if (pizza === "no" && thunderstorms === "no" && hiking === "no" && coffee === "no" && paulie === "no"){
      // console.log("paulie no");
      $(".programming-language").hide();
      $("#python").show();
    } else {
      $(".programming-language").hide();
      $("#rust").show();
    }






    //   else if (pizza === "yes" && thunderstorms === "yes" && hiking === "yes" && coffee === "yes" && paulie === "no"){
    //     $(".programming-language").hide();
    // }































  });

});
