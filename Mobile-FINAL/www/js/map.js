
var domap = function() { //This function should be used to build the map in the content element
   
    back();// restores weather app
    var x = document.getElementById("weather app"); //hides weather app
    x.style.display = "none";
    let workspace = document.getElementById("content");
    workspace.innerHTML = "";
  
   let h1 = document.createElement('h1');
                let text = document.createTextNode("Please Use Yelp app first before viewing map");
                h1.appendChild(text);
                workspace.append(h1);
    
    let ifrm = document.createElement('iframe');
    ifrm.setAttribute('width', '800');
    ifrm.setAttribute('height', '1000');   
    
    let ifrm2 = document.createElement('iframe');
    ifrm2.setAttribute('width', '800');
    ifrm2.setAttribute('height', '1000');  
    
    let ifrm3 = document.createElement('iframe');
    ifrm3.setAttribute('width', '800');
    ifrm3.setAttribute('height', '1000');  
    
    let ifrm4 = document.createElement('iframe');
    ifrm4.setAttribute('width', '800');
    ifrm4.setAttribute('height', '1000'); 
    
    let ifrm5 = document.createElement('iframe');
    ifrm5.setAttribute('width', '800');
    ifrm5.setAttribute('height', '1000'); 
    
    
    var location1 = localStorage.getItem('location1');
    ifrm.setAttribute('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyBMc9eQ-xBwLJCF03YOAm6N1bZzCOy9RjQ&q="+location1);  
    workspace.append(ifrm);
    
    var location2 = localStorage.getItem('location2');
    ifrm2.setAttribute('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyBMc9eQ-xBwLJCF03YOAm6N1bZzCOy9RjQ&q="+location2);  
    workspace.append(ifrm2);
    
    var location3 = localStorage.getItem('location3');
    ifrm3.setAttribute('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyBMc9eQ-xBwLJCF03YOAm6N1bZzCOy9RjQ&q="+location3);  
    workspace.append(ifrm3);
    
    var location4 = localStorage.getItem('location4');
    ifrm4.setAttribute('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyBMc9eQ-xBwLJCF03YOAm6N1bZzCOy9RjQ&q="+location4);  
    workspace.append(ifrm4);
    
    var location5 = localStorage.getItem('location5');
    ifrm5.setAttribute('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyBMc9eQ-xBwLJCF03YOAm6N1bZzCOy9RjQ&q="+location5);  
    workspace.append(ifrm5);
}