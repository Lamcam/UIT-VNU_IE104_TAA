// Routing
// profile_favorProduct
// profile_order
// profile_info
$(document).ready(function(){
  $(document).on("click",'.deleteBank',function(){
    console.log("hihh")
  })
})

$(".profile-li").on("click", async function () {
  console.log($(this).index())
  addActiveClass(this, "active-li");
  //  $("section").empty();
  
 
    switch ($(this).index()) {
      case 0:
        $("section").load("./profileInfoT.html")
        break;
  
      case 1:
        $("section").load("./orderT.html")
        break;
      
      case 2:
        $("section").load("./favorProductT.html")
    
      default:
        break;
    }
  


});


  
   
  


