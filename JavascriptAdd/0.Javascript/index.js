// $(document).ready(function(){
//     $("div").filter(".box").css("background-color", "yellow");
//   });

//   $(document).ready(function(){
//     $(".btn-1").click(function(){
//       $(".box-1").addClass("show");
//       $(".box-2").addClass("hide");
//       $(".box-3").addClass("hide");
//     });
//   });

//   $(document).ready(function(){
//     $(".btn-2").click(function(){
//         $(".box-2").addClass("show");
//         $(".box-2").removeClass("hide");
//         $(".box-1").addClass("hide");
//         $(".box-3").addClass("hide");
//     });
//   });

//   $(document).ready(function(){
//     $(".btn-3").click(function(){
//         $(".box-3").addClass("show");
//         $(".box-3").removeClass("hide");
//         $(".box-2").addClass("hide");
//         $(".box-1").addClass("hide");
//     });
//   });

//   $(document).ready(function(){
//     $(".active").click(function(){
//     $(".box-1").removeClass("hide");
//     $(".box-2").removeClass("hide");
//     $(".box-3").removeClass("hide");
//     });
//   });

var n = 6;
var str = "";
for (let i = n / 2; i < n; i += 2) {
  // print first spaces
  for (let j = 1; j < n - i; j += 2) {
    str += " ";
    console.log(str);
  }
  // print first stars
  for (let j = 1; j < i + 1; j++) {
    str += "*";
    console.log(str);

  }
  // print second spaces
  for (let j = 1; j < n - i + 1; j++) {
    str += " ";
    console.log(str);

  }
  // print second stars
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  str += "\n";
  console.log(str);

}
// lower part
// inverted pyramid
for (let i = n; i > 0; i--) {
  for (let j = 0; j < n - i; j++) {
    str += " ";
    console.log(str);

  }
  for (let j = 1; j < i * 2; j++) {
    str += "*";
    console.log(str);

  }
  str += "\n";
}
console.log(str);