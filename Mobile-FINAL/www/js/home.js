var dohome = function(){
    
    var x = document.getElementById("weather app"); //hides weather app
    x.style.display = "none";
    
    var map= document.getElementById("Frame");//hides map
    map.style.display="none";
    
    
    let workspace = document.getElementById("content");
    workspace.innerHTML = "";

    
    let h1 = document.createElement('h2');
    let text = document.createTextNode("Ayman Moubayed's Yelp App");
    h1.appendChild(text);
    workspace.append(h1);
    let h3 = document.createElement('h4');
    text = document.createTextNode("powered by Yelp");
    h3.appendChild(text);
    workspace.appendChild(h3);
    
   
   let pic= document.createElement("IMG");
   pic.setAttribute("src", "images/back.png");
  pic.setAttribute("width", "50%");
  pic.setAttribute("height", "50%");
 
   workspace.appendChild(pic); 
    
 
    
    
   back();// restores weather app
  
   
}