var docurrency = function(){
    
    let workspace = document.getElementById("content");
    workspace.innerHTML = "";
    
   
    let h1 = document.createElement('h1');
    let text2 = document.createTextNode("Fav List");
    h1.appendChild(text2);
    workspace.append(h1);
    var linebreak = document.createElement("BR");
    h1.appendChild(linebreak);
    
    workspace.append(h1);
    
    var counter=  localStorage.getItem('counter'); 
    counter=parseInt(counter);
    var x=0;
    var list = [];
    while(x< counter){
   
        list.push(localStorage.getItem(x.toString())) ;
        
        x=x+1;
    }
    x=0;
   var btn = document.createElement("BUTTON"); 
    while(x< counter){
    
    
    
    //workspace.appendChild(h1);
    let text = document.createTextNode(list[x]);
    h1.appendChild(text);
    
      
    btn = document.createElement("BUTTON");  
    btn.innerHTML = "delete";
    btn.id = x.toString();
     
  btn.addEventListener("click", function(e) {
    alert("Button Id: " + this.id);
    localStorage.removeItem(this.id);
    var x=0;
    counter=localStorage.getItem('counter'); //update list and counter
    var temp=[];
    
      while (x<counter){
        
       var tempVal=localStorage.getItem(x.toString());
       
        if (typeof(tempVal) != "undefined") { 
            
            if(tempVal){ 
            //alert(tempVal);
            temp.push(tempVal);
                       }
            
       }
        
          x=x+1;
          
       }
   
     x=0;
      counter=counter-1;
      
      localStorage.setItem('counter',counter.toString());
      while (x<counter){
          alert(x.toString());
          alert(temp[x]);
          localStorage.setItem(x.toString(),temp[x]);
                      x=x+1;
       }   
          
    
      
    
});
        
        
    h1.appendChild(btn);
    workspace.append(h1);
    var linebreak = document.createElement("BR");
    h1.appendChild(linebreak);
    
    x=x+1;
    }

    back();// restores weather app
    var x = document.getElementById("weather app"); //hides weather app
    x.style.display = "none";
    back();// restores weather app
      var map= document.getElementById("Frame");//hides map
    map.style.display="none";
    
    
    var wipe_button = document.createElement("BUTTON");
    wipe_button.innerHTML = 'Wipe All Data (be careful, this cant be undone)';
    wipe_button.onclick = function(){
    x=0;
     localStorage.clear();
    

  };
   workspace.append(wipe_button); 
}


