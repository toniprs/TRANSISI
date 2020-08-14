function myfunction() {
   var task = document.getElementById("cek").innerHTML = "menyelesaikan tugas front end coding";
   var status = document.getElementById("text0").innerHTML="Waiting";
  
   if (task.onclick() == true) {
    status.style.display = "inline";
   } else {
    status.style.display = "none";
   }

}

function fungsiku() {
    var checkBox = document.getElementById("item");
    var text = document.getElementById("text1");
    
    if (checkBox.checked == true){
      text.style.display = "inline";
    } else {
       text.style.display = "none";
    }
  }