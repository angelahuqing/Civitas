function checkState() {
  var word = document.getElementById("state").value;
  word = word.toLowerCase();

    if (word == "new jersey"){
       document.getElementById("results").innerHTML = window.location.href = "newjerseyVote.html";
      }else if (word == "new york"){
        document.getElementById("results").innerHTML = window.location.href = "newyorkVote.html";
      }else if (word == "california"){
        document.getElementById("results").innerHTML = window.location.href = "caliVote.html";
      }else if (word == "ohio"){
        document.getElementById("results").innerHTML = window.location.href = "ohioVote.html";
      }else if (word == "texas"){
        document.getElementById("results").innerHTML = window.location.href = "texasVote.html";
      }else if (word == "florida"){
        document.getElementById("results").innerHTML = window.location.href = "floridaVote.html";
      }else if (word == "illinois"){
        document.getElementById("results").innerHTML = window.location.href = "illinoisVote.html";
      }else if (word == "virginia"){
        document.getElementById("results").innerHTML = window.location.href = "virginiaVote.html";
      }else if (word == "pennsylvania"){
        document.getElementById("results").innerHTML = window.location.href = "pennVote.html";
      }else if (word == "massachusetts"){
        document.getElementById("results").innerHTML = window.location.href = "massVote.html";
      }
}
