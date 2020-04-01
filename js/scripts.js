$(document).ready(function(){
 
 $("#formOne").submit(function(e){
  $(".name").text($("#name").val());
  $(".date").text($("#date").val());
  $(".starttime").text($("#starttime").val());
  $(".endtime").text($("#endtime").val());
  $(".mymodal").show();
  e.preventDefault();
 })
 
 $(".mymodal button").click(function(){
  $(".mymodal").hide();
 });
  
})