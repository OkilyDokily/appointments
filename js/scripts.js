$(document).ready(function(){
 
 $("#formOne").submit(function(e){
  $(".mymodal").show();
  e.preventDefault();
 })
 
 $(".mymodal button").click(function(){
  $(".mymodal").hide();
 });
  
})