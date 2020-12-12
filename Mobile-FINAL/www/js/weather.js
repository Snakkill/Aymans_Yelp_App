function hide(){
            var x = document.getElementById("weather app");
            var y= document.getElementById("output");
            if (x.style.display === "none") 
            {
                
                x.style.display = "block"; 
                y.style.display = "none"; 
            } 
            
            else {
                    x.style.display = "none";
                    y.style.display = "block";
            }
        }

var doweather = function() { 
    back();// restores weather app
   let workspace = document.getElementById("content");
    workspace.innerHTML = "";
    var x = document.getElementById("weather app");
    x.style.display = "block"; 
    
    var y= document.getElementById("output");
    y.style.display = "none"; 
    var map= document.getElementById("Frame");//hides map
    map.style.display="none";
}

var back = function() { 

    var x = document.getElementById("input1");
    x.style.display = "block"; 
    
    var y= document.getElementById("output");
    y.style.display = "none"; 
    
}
