$(document).ready(function() {



$("#submitButton").click(function(event){
  event.preventDefault();
  console.log("clicked");
  var pizza = $("select#pizza").val();
  // console.log(pizza);
  var thunderstorms = $("select#thunderstorms").val();
  // console.log(thunderstorms);
  var hiking = $("select#hiking").val();
  var coffee = $("select#coffee").val();
  var sopranos = $("select#sopranos").val();

if (pizza === "yes" && thunderstorms === "yes" && hiking === "yes" && coffee === "yes" && sopranos === "yes"){
    console.log("pizza yes.");
    $(".programming-language").hide();
    $("#ruby").show();
} else if (pizza === "no" && thunderstorms === "no" && hiking === "no" && coffee === "no" && sopranos === "no"){
    console.log("sopranos no");
    $(".programming-language").hide();
    $("#python").show();
} else {
  $(".programming-language").hide();
  $("#rust").show();
}






//   else if (pizza === "yes" && thunderstorms === "yes" && hiking === "yes" && coffee === "yes" && sopranos === "no"){
//     $(".programming-language").hide();
// }































});

});
