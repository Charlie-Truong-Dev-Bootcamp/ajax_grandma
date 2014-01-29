$(document).ready(function() {
  $('#submit_button').click(function(){
    //   var data = document.getElementById("grandma_talk").value;
    //   console.log(data);
    // });



    // $(data).submit(function( event ){
      var data = $("#grandma_talk").serialize();
      console.log(data);
      $.ajax({
        type: "POST",
        url: "/",
        data: data,
        success: function(response){
                  $("#grandma_says").html(response.response)}
        // dataType: dataType
      });
    });

  // var post_response = function(response){
  //   $("#grandma_says").html(response);
  // };
});

//append



