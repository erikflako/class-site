$("#go").click(function(){
  var dest = parseInt($("#block").css("margin-left").replace("px", "")) + 100;
    if (dest > 500) {
        $("#block").animate({
            marginLeft: "10px"
          }, 500 );
    }
    else {
      $("#block").animate({
        marginLeft: dest + "px"
      }, 500 );
    }
});

