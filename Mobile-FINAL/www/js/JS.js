



document.addEventListener("deviceready", onDeviceReady, false); //location event listner 
    function onDeviceReady() {
        console.log("navigator.geolocation works well");
          navigator.geolocation.getCurrentPosition(onSuccess, onError,
                { enableHighAccuracy: true, timeout: 20000 });
    }
      

var onSuccess = function(position) {
        };


    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

  
//navigator.geolocation.getCurrentPosition(onSuccess, onError);



function hide(){    //hides info
            var x = document.getElementById("input1");
            var y= document.getElementById("output")
            if (x.style.display === "none") 
            {
                
                x.style.display = "block"; 
                y.style.display = "none"; 
            } 
            
            else {
                    x.style.display = "none";
                    y.style.display = "block"
            }
        }
         

async function getInfo(){
            
 // Selecting the input element and get its value 
            var inputVal = document.getElementById("input").value;
            var inputVal2 = document.getElementById("input2").value;
            var res = inputVal.split(",");
            var lat = res[0];
            var lon=res[1];
    console.log(lat);
    console.log(lon);
            if (inputVal.length < 28){
                url='https://api.yelp.com/v3/businesses/search?term='+inputVal2+'&location='+inputVal;
            }
            else{
                url='https://api.yelp.com/v3/businesses/search?term='+inputVal+'&latitude='+lat+'&longitude='+lon;
            }

        
           var token = "YELP TOKEN HERE";
                
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                    console.log(this.response);
                    document.getElementById("content").innerHTML = "";
                    var data = document.createElement('p');
                    data.innerText = this.response;
                    displayinfo=JSON.parse(this.response);
                  
                    
                    document.getElementById("name1").textContent=(displayinfo.businesses[0].name);
                        
                    localStorage.setItem('name1', displayinfo.businesses[0].name); 

                    document.getElementById("rating1").textContent=(displayinfo.businesses[0].review_count);
                    document.getElementById("review_count1").textContent=(displayinfo.businesses[0].rating);
                     var distance=displayinfo.businesses[0].distance;
                    document.getElementById("distance1").textContent=(Math.round(parseInt(distance)/1609));
                    var adress=displayinfo.businesses[0].location.address1+", "+displayinfo.businesses[0].location.city+", "+displayinfo.businesses[0].location.zip_code;
                    document.getElementById("adress1").textContent=(adress);
                    document.getElementById("cat1").textContent=(displayinfo.businesses[0].categories[0].title);
                    document.getElementById("p_number1").textContent=(displayinfo.businesses[0].display_phone);
                    document.getElementById("avalible_for1").textContent=(displayinfo.businesses[0].transactions);
                    var coords = displayinfo.businesses[0].coordinates.latitude+','+displayinfo.businesses[0].coordinates.longitude;
                    document.getElementById("location1").textContent=(coords);
                    localStorage.setItem('location1', coords);    
                        
                    document.getElementById("name2").textContent=(displayinfo.businesses[1].name);
                         localStorage.setItem('name2', displayinfo.businesses[1].name); 

                    document.getElementById("rating2").textContent=(displayinfo.businesses[1].review_count);
                    document.getElementById("review_count2").textContent=(displayinfo.businesses[1].rating);
                     var distance=displayinfo.businesses[1].distance;
                    document.getElementById("distance2").textContent=(Math.round(parseInt(distance)/1609));
                    var adress=displayinfo.businesses[1].location.address1+", "+displayinfo.businesses[1].location.city+", "+displayinfo.businesses[1].location.zip_code;
                    document.getElementById("adress2").textContent=(adress);
                    document.getElementById("cat2").textContent=(displayinfo.businesses[1].categories[0].title);
                    document.getElementById("p_number2").textContent=(displayinfo.businesses[1].display_phone);
                    document.getElementById("avalible_for2").textContent=(displayinfo.businesses[1].transactions);    
                    var coords = displayinfo.businesses[1].coordinates.latitude+','+displayinfo.businesses[1].coordinates.longitude;
                    document.getElementById("location2").textContent=(coords);
                    localStorage.setItem('location2', coords);    
                        
                        
                    document.getElementById("name3").textContent=(displayinfo.businesses[2].name);
                         localStorage.setItem('name3', displayinfo.businesses[2].name); 

                    document.getElementById("rating3").textContent=(displayinfo.businesses[2].review_count);
                    document.getElementById("review_count3").textContent=(displayinfo.businesses[2].rating);
                    var distance=displayinfo.businesses[2].distance;
                    document.getElementById("distance3").textContent=(Math.round(parseInt(distance)/1609));
                    var adress=displayinfo.businesses[2].location.address1+", "+displayinfo.businesses[2].location.city+", "+displayinfo.businesses[2].location.zip_code;
                    document.getElementById("adress3").textContent=(adress);
                   document.getElementById("cat3").textContent=(displayinfo.businesses[2].categories[0].title);
                    document.getElementById("p_number3").textContent=(displayinfo.businesses[2].display_phone);
                    document.getElementById("avalible_for3").textContent=(displayinfo.businesses[2].transactions);   
                    
                    var coords = displayinfo.businesses[2].coordinates.latitude+','+displayinfo.businesses[2].coordinates.longitude;
                    document.getElementById("location3").textContent=(coords);
                    localStorage.setItem('location3', coords);    
                        
                        
                     document.getElementById("name4").textContent=(displayinfo.businesses[3].name);
                         localStorage.setItem('name4', displayinfo.businesses[3].name); 
                    document.getElementById("rating4").textContent=(displayinfo.businesses[3].review_count);
                    document.getElementById("review_count4").textContent=(displayinfo.businesses[3].rating);
                    var distance=displayinfo.businesses[3].distance;
                    document.getElementById("distance4").textContent=(Math.round(parseInt(distance)/1609));
                    var adress=displayinfo.businesses[3].location.address1+", "+displayinfo.businesses[3].location.city+", "+displayinfo.businesses[3].location.zip_code;
                    document.getElementById("adress4").textContent=(adress);
                    document.getElementById("cat4").textContent=(displayinfo.businesses[3].categories[0].title);
                    document.getElementById("p_number4").textContent=(displayinfo.businesses[3].display_phone);
                    document.getElementById("avalible_for4").textContent=(displayinfo.businesses[3].transactions);       
                    
                    var coords = displayinfo.businesses[3].coordinates.latitude+','+displayinfo.businesses[3].coordinates.longitude;
                    document.getElementById("location4").textContent=(coords);
                    localStorage.setItem('location4', coords);        
                        
                     document.getElementById("name5").textContent=(displayinfo.businesses[4].name);
                    localStorage.setItem('name5', displayinfo.businesses[4].name); 
                    document.getElementById("rating5").textContent=(displayinfo.businesses[4].review_count);
                    document.getElementById("review_count5").textContent=(displayinfo.businesses[4].rating);
                    var distance=displayinfo.businesses[4].distance;
                    document.getElementById("distance5").textContent=(Math.round(parseInt(distance)/1609));
                    var adress=displayinfo.businesses[4].location.address1+", "+displayinfo.businesses[4].location.city+", "+displayinfo.businesses[4].location.zip_code;
                    document.getElementById("adress5").textContent=(adress);
                    document.getElementById("cat5").textContent=(displayinfo.businesses[4].categories[0].title);
                    document.getElementById("p_number5").textContent=(displayinfo.businesses[4].display_phone);
                    document.getElementById("avalible_for5").textContent=(displayinfo.businesses[4].transactions);      
                     var coords = displayinfo.businesses[4].coordinates.latitude+','+displayinfo.businesses[4].coordinates.longitude;
                    document.getElementById("location5").textContent=(coords);
                    localStorage.setItem('location5', coords);    
         
                    }
                
    };
          
            xhr.open('GET', url);  

    
            xhr.setRequestHeader("Authorization", "Bearer " + token); // calls API and puts info into index html elements
            xhr.send();
                
        var x = document.getElementById("input1");
        x.style.display = "none"; 
        var y= document.getElementById("output");
        y.style.display = "block"; 
           
            
        }


function getcords(){ //gets coords when nav button is pressed
     
    
     navigator.geolocation.getCurrentPosition(
      function(position) {
        var  lat = String(position.coords.latitude);
       var   lon = String(position.coords.longitude);
        
       document.getElementById('input').value = position.coords.latitude+','+position.coords.longitude;
          
},
      function() {
          alert('Error getting location');
      }); 
    
       
          
        
          
}

function fav1(){  //fav list takes into local storage 
     
    var fav = localStorage.getItem('name1');
    var counter=  localStorage.getItem('counter'); 
     if (isNaN(counter) || counter==null)  {
        counter=  '0'; 
    }
    counter=parseInt(counter);
    alert(fav+" has been added to your favorite list")
    localStorage.setItem(counter, fav); 
    counter=counter+1;
    counter=counter.toString();
    localStorage.setItem('counter', counter);  
    
}
        
function fav2(){
     
    var fav = localStorage.getItem('name2');
    var counter=  localStorage.getItem('counter'); 
     if (isNaN(counter) || counter==null)  {
        counter=  '0'; 
    }
    counter=parseInt(counter);
    alert(fav+" has been added to your favorite list")
    localStorage.setItem(counter, fav); 
    counter=counter+1;
    counter=counter.toString();
    localStorage.setItem('counter', counter);  
}

function fav3(){
     
    var fav = localStorage.getItem('name3');
    var counter=  localStorage.getItem('counter'); 
     if (isNaN(counter) || counter==null)  {
        counter=  '0'; 
    }
    counter=parseInt(counter);
    alert(fav+" has been added to your favorite list")
    localStorage.setItem(counter, fav); 
    counter=counter+1;
    counter=counter.toString();
    localStorage.setItem('counter', counter);  
}
function fav4(){
     
    var fav = localStorage.getItem('name4');
    var counter=  localStorage.getItem('counter'); 
     if (isNaN(counter) || counter==null)  {
        counter=  '0'; 
    }
    counter=parseInt(counter);
    alert(fav+" has been added to your favorite list")
    localStorage.setItem(counter, fav); 
    counter=counter+1;
    counter=counter.toString();
    localStorage.setItem('counter', counter);  
}
function fav5(){
     
    var fav = localStorage.getItem('name5');
    var counter=  localStorage.getItem('counter'); 
     if (isNaN(counter) || counter==null)  {
        counter=  '0'; 
    }
    counter=parseInt(counter);
    alert(fav+" has been added to your favorite list")
    localStorage.setItem(counter, fav); 
    counter=counter+1;
    counter=counter.toString();
    localStorage.setItem('counter', counter);  
    
}

function signin(){ //sign in disables buttons if susscuful api request and log in or created account
    
    
    
    let workspace = document.getElementById("content");
    workspace.innerHTML = "";
   
    var form = document.createElement("form");
    var element1 = document.createElement("input"); 
    var element2 = document.createElement("input");  

    let h1 = document.createElement('h1');
    let text = document.createTextNode("Sign-IN or Create a New Account!");
    h1.appendChild(text);
    
    var linebreak = document.createElement("BR");
    h1.appendChild(linebreak);
    workspace.append(h1);
    

    form.appendChild(element1);  
    workspace.appendChild(form);
  
    var linebreak = document.createElement("BR");
    h1.appendChild(linebreak);
    workspace.append(h1);
    
    form.appendChild(element2);
    form.method = "POST";
    h1.appendChild(linebreak);
    
    workspace.append(h1);
    workspace.appendChild(form);

   
    var btn = document.createElement("BUTTON");  //submit button makes calls to login DB
    btn.innerHTML = "Create Account";
    btn.id = "CA";
     
  btn.addEventListener("click", function(e) {
      url="https://lamp.cse.fau.edu/~dbenne11/whendiagram/add_user.php?username="+element1.value+"&pw="+element2.value;
     
      
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         displayinfo=JSON.parse(this.response);
        
          if(displayinfo.account_creation == "success") {
              alert("Your logged in!");
         document.getElementById("home").disabled = false;
         document.getElementById("map").disabled = false;
         document.getElementById("weather").disabled = false;
         document.getElementById("currency").disabled = false;
         document.getElementById("myLogin").style.display = "none";
         document.getElementById("mySignout").style.display = "block"; 
       }
    }
};
xhttp.open("GET", url, true);
xhttp.send();
      
      
});

    workspace.append(btn);
    
    
    var btn2 = document.createElement("BUTTON");  //submit button makes calls to login DB
    btn2.innerHTML = "Sign-IN";
    btn2.id = "SI";
     
  btn2.addEventListener("click", function(e) {
      url="https://lamp.cse.fau.edu/~dbenne11/whendiagram/login.php?pw="+element2.value+"&username="+element1.value;
    
      
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         displayinfo=JSON.parse(this.response);
       if(displayinfo.login == "success") {
           alert("Your logged in");
         document.getElementById("home").disabled = false;
         document.getElementById("map").disabled = false;
         document.getElementById("weather").disabled = false;
         document.getElementById("currency").disabled = false;
         document.getElementById("myLogin").style.display = "none";
         document.getElementById("mySignout").style.display = "block"; 
       }
    }
};
xhttp.open("GET", url, true);
xhttp.send();
      
      
});   
    

   workspace.append(btn2);  
}      

function signout(){ //sign out disables buttons and unhides sign in button
    
        document.getElementById("home").click(); 
         document.getElementById("home").disabled = true;
         document.getElementById("map").disabled = true;
         document.getElementById("weather").disabled = true;
         document.getElementById("currency").disabled = true;
         document.getElementById("myLogin").style.display = "block";
         document.getElementById("mySignout").style.display = "none"; 
}
    
