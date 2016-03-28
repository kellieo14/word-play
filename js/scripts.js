$(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var sentence = $("#input").val().split(" ");
    console.log(sentence);

    sentence.reverse();

    sentence.forEach(function(word) {
      if (word.length >=3) {
        $(".3-word").append(word + " ")
      }
      else {
        $(".2-word").append(word + " ")
      }
    });


  });
});
