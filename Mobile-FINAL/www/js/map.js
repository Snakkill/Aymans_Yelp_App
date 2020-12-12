var showmap = function(){   

 var map= document.getElementById("Frame");
 map.style.display="block";

    
    
    }
var domap = function() { //This function should be used to build the map in the content element
    
    //TODO : ADD MAP CONTENT
    back();// restores weather app
    var x = document.getElementById("weather app"); //hides weather app
    x.style.display = "none";
    let workspace = document.getElementById("content");
    workspace.innerHTML = "";
   
   let h1 = document.createElement('h1');
                let text = document.createTextNode("Please Use Weather app first before viewing map");
                h1.appendChild(text);
                workspace.append(h1);
    showmap();
}

