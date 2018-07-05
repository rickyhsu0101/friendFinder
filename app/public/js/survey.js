$(document).ready(function(){
  $("#submit").on("click", function(event){
    event.preventDefault();
    console.log("in submit");
    var answerArray = [];
    console.log($("input[name='q1']:checked").val());
    for(var i = 1; i <= 10; i++){
      
      switch($("input[name='q"+i+"']:checked").val()){
        case "1":
          answerArray.push(1);
          break;
        case "2":
          answerArray.push(2);
          break;
        case "3":
          answerArray.push(3);
          break;
        case "4":
          answerArray.push(4);
          break;
        case "5":
          answerArray.push(5);
          break;
        default:
          break;
      }
    };
    if(answerArray.length ==10 && $("#inputName").val().length >0 && $("#inputImage").val().length>0){
      var obj = {};
      obj.name = $("#inputName").val();
      obj.photo = $("#inputImage").val();
      obj.scores = answerArray;
      $.ajax({
        method: "POST",
        url: "/api/survey",
        data: obj
      }).done(function(response){
        console.log(response);
        $("#friendName").text(response.name);
        $("#friendImage").attr("src", response.photo);
        $("#friendModal").modal("show");
        
      });
    }else{
      alert("Please Complete Survey!");
    }
  });
});