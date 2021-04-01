function myFunction() {
    var x = document.getElementById("sidenav");
    if (x.style.right === "0px") {
      x.style.right = "-3000px";
    } else {
      x.style.right = "0px";
    }
    var x = document.getElementById("leftclose");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function nextStep() {
    if (document.getElementById("step1")) {
      if (document.getElementById("step1").style.display == "none") {
        document.getElementById("step1").style.display = "block";
        document.getElementById("step2").style.display = "none";
      } else {
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
      }
    }
  }