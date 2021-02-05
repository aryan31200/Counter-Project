var counts=0;
if(counts==0){
  $(".dec").attr("disabled",true);
}
function backg(counts){
  if(counts%2!=0){
    $("body").css("background-color","grey");
    $(".counter").css("color","red");
  }else{
    $("body").css("background-color","lightblue");
    $(".counter").css("color","white");
  }
}

$(".inc").click(function(){
  counts++;
  $(".counter").text(counts);
  if(counts>=10){
    $(".inc").attr("disabled",true);
  }
  if(counts>0 && counts<10){
    $(".inc").attr("disabled",false);
    $(".dec").attr("disabled",false);
  }
  backg(counts);
});

$(".reset").click(function(){
  counts=0;
  $(".counter").text(counts);
  $("body").css("background-color","lightblue");
  $(".counter").css("color","white");
  $(".inc").attr("disabled",false);
  $(".dec").attr("disabled",true);
})

$(".dec").click(function(){
  if(counts>0)
  counts--;
  $(".counter").text(counts);
  if(counts==0){
    $(".dec").attr("disabled",true);
  }
  if(counts>0 && counts<10){
    $(".inc").attr("disabled",false);
    $(".dec").attr("disabled",false);
  }
  backg(counts);
});
