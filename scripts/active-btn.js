

//menu-toggle btn

$(document).ready(function(){
    $('.toggle-active').click(function(){
        $('.toggle-active').toggleClass('active')
        $('.menu').toggleClass('active')
        $('.container-fluid').toggleClass('active')
        $('').removeClass('active');
        $('').removeClass('active');
        $('').removeClass('active');
        $('').removeClass('active');
        $('').removeClass('active');
        $('').removeClass('active');
    })
})





//menu-active btn

$(document).ready(function(){
    $('#btn-menu-1').click(function(){
        $('#btn-menu-1').toggleClass('active')
        $('').toggleClass('active')
        $('#btn-menu-2').removeClass('active');
        $('#btn-menu-3').removeClass('active');
        $('#btn-menu-4').removeClass('active');
        $('#btn-menu-5').removeClass('active');
        $('#btn-menu-6').removeClass('active');
        $('#btn-menu-7').removeClass('active');
    })
})

$(document).ready(function(){
    $('#btn-menu-2').click(function(){
        $('#btn-menu-2').toggleClass('active')
        $('').toggleClass('active')
        $('#btn-menu-1').removeClass('active');
        $('#btn-menu-3').removeClass('active');
        $('#btn-menu-4').removeClass('active');
        $('#btn-menu-5').removeClass('active');
        $('#btn-menu-6').removeClass('active');
        $('#btn-menu-7').removeClass('active');
    })
})

$(document).ready(function(){
    $('#btn-menu-3').click(function(){
        $('#btn-menu-3').toggleClass('active')
        $('').toggleClass('active')
        $('#btn-menu-1').removeClass('active');
        $('#btn-menu-2').removeClass('active');
        $('#btn-menu-4').removeClass('active');
        $('#btn-menu-5').removeClass('active');
        $('#btn-menu-6').removeClass('active');
        $('#btn-menu-7').removeClass('active');
    })
})

$(document).ready(function(){
    $('#btn-menu-4').click(function(){
        $('#btn-menu-4').toggleClass('active')
        $('').toggleClass('active')
        $('#btn-menu-1').removeClass('active');
        $('#btn-menu-2').removeClass('active');
        $('#btn-menu-3').removeClass('active');
        $('#btn-menu-5').removeClass('active');
        $('#btn-menu-6').removeClass('active');
        $('#btn-menu-7').removeClass('active');
    })
})

$(document).ready(function(){
    $('#btn-menu-5').click(function(){
        $('#btn-menu-5').toggleClass('active')
        $('').toggleClass('active')
        $('#btn-menu-1').removeClass('active');
        $('#btn-menu-2').removeClass('active');
        $('#btn-menu-3').removeClass('active');
        $('#btn-menu-4').removeClass('active');
        $('#btn-menu-6').removeClass('active');
        $('#btn-menu-7').removeClass('active');
    })
})

$(document).ready(function(){
    $('#btn-menu-6').click(function(){
        $('#btn-menu-6').toggleClass('active')
        $('').toggleClass('active')
        $('#btn-menu-1').removeClass('active');
        $('#btn-menu-2').removeClass('active');
        $('#btn-menu-3').removeClass('active');
        $('#btn-menu-4').removeClass('active');
        $('#btn-menu-5').removeClass('active');
        $('#btn-menu-7').removeClass('active');
    })
})

$(document).ready(function(){
    $('#btn-menu-7').click(function(){
        $('#btn-menu-7').toggleClass('active')
        $('#btn-menu-1').removeClass('active');
        $('#btn-menu-2').removeClass('active');
        $('#btn-menu-3').removeClass('active');
        $('#btn-menu-4').removeClass('active');
        $('#btn-menu-5').removeClass('active');
        $('#btn-menu-6').removeClass('active');
    })
})


// Pages Этапы /////

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


// Pages-Plan План График //


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



// Panel /////


