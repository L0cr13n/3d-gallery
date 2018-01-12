var carousel = $(".carousel"),
	colorBallContainer = $(".colorBallContainer")
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="p"){
    currdeg = currdeg - 60;
	
  }
  if(e.data.d=="n"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
    colorBallContainer.css({
		"-webkit-transform": "rotate("+currdeg+"deg)",
		"-moz-transform": "rotate("+currdeg+"deg)",
		"-o-transform": "rotate("+currdeg+"deg)",
		"transform": "rotate("+currdeg+"deg)"
  });
}