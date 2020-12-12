





document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log("navigator.geolocation works well");
          navigator.geolocation.getCurrentPosition(onSuccess, onError,
                { enableHighAccuracy: true, timeout: 20000 });
    }
      

var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n'); };


    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

  
//navigator.geolocation.getCurrentPosition(onSuccess, onError);



function hide(){
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
            

        
           var token = "139SiL9OvyPI6q9jBUU5Kksv8a_P30YzcesJb3Phumcww10-ss3ymhnIm_CfeGeFB5q6bZo1GNv2fjdgTaLQfZNiMEwzBZCQpQV_lljWE50dGYLIq2yW1_zGX-fTX3Yx";
                
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                    console.log(this.response);
                    document.getElementById("content").innerHTML = "";
                    var data = document.createElement('p');
                    data.innerText = this.response;
                    displayinfo=JSON.parse(this.response);
                  
                    
                    document.getElementById("name1").textContent=(displayinfo.businesses[0].name);
                    document.getElementById("rating1").textContent=(displayinfo.businesses[0].review_count);
                    document.getElementById("review_count1").textContent=(displayinfo.businesses[0].rating);
                     var distance=displayinfo.businesses[0].distance;
                    document.getElementById("distance1").textContent=(parseInt(distance));
                    var adress=displayinfo.businesses[0].location.address1+", "+displayinfo.businesses[0].location.city+", "+displayinfo.businesses[0].location.zip_code;
                    document.getElementById("adress1").textContent=(adress);
                    document.getElementById("cat1").textContent=(displayinfo.businesses[0].categories[0].title);
                    document.getElementById("p_number1").textContent=(displayinfo.businesses[0].display_phone);
                    document.getElementById("avalible_for1").textContent=(displayinfo.businesses[0].transactions);
                        
                    document.getElementById("name2").textContent=(displayinfo.businesses[1].name);
                    document.getElementById("rating2").textContent=(displayinfo.businesses[1].review_count);
                    document.getElementById("review_count2").textContent=(displayinfo.businesses[1].rating);
                     var distance=displayinfo.businesses[1].distance;
                    document.getElementById("distance2").textContent=(parseInt(distance));
                    var adress=displayinfo.businesses[1].location.address1+", "+displayinfo.businesses[1].location.city+", "+displayinfo.businesses[1].location.zip_code;
                    document.getElementById("adress2").textContent=(adress);
                    document.getElementById("cat2").textContent=(displayinfo.businesses[1].categories[0].title);
                    document.getElementById("p_number2").textContent=(displayinfo.businesses[1].display_phone);
                    document.getElementById("avalible_for2").textContent=(displayinfo.businesses[1].transactions);    
                        
                    document.getElementById("name3").textContent=(displayinfo.businesses[2].name);
                    document.getElementById("rating3").textContent=(displayinfo.businesses[2].review_count);
                    document.getElementById("review_count3").textContent=(displayinfo.businesses[2].rating);
                    var distance=displayinfo.businesses[2].distance;
                    document.getElementById("distance3").textContent=(parseInt(distance));
                    var adress=displayinfo.businesses[2].location.address1+", "+displayinfo.businesses[2].location.city+", "+displayinfo.businesses[2].location.zip_code;
                    document.getElementById("adress3").textContent=(adress);
                   document.getElementById("cat3").textContent=(displayinfo.businesses[2].categories[0].title);
                    document.getElementById("p_number3").textContent=(displayinfo.businesses[2].display_phone);
                    document.getElementById("avalible_for3").textContent=(displayinfo.businesses[2].transactions);   
                        
                     document.getElementById("name4").textContent=(displayinfo.businesses[3].name);
                    document.getElementById("rating4").textContent=(displayinfo.businesses[3].review_count);
                    document.getElementById("review_count4").textContent=(displayinfo.businesses[3].rating);
                    var distance=displayinfo.businesses[3].distance;
                    document.getElementById("distance4").textContent=(parseInt(distance));
                    var adress=displayinfo.businesses[3].location.address1+", "+displayinfo.businesses[3].location.city+", "+displayinfo.businesses[3].location.zip_code;
                    document.getElementById("adress4").textContent=(adress);
                    document.getElementById("cat4").textContent=(displayinfo.businesses[3].categories[0].title);
                    document.getElementById("p_number4").textContent=(displayinfo.businesses[3].display_phone);
                    document.getElementById("avalible_for4").textContent=(displayinfo.businesses[3].transactions);       
                        
                        
                     document.getElementById("name5").textContent=(displayinfo.businesses[4].name);
                    document.getElementById("rating5").textContent=(displayinfo.businesses[4].review_count);
                    document.getElementById("review_count5").textContent=(displayinfo.businesses[4].rating);
                    var distance=displayinfo.businesses[4].distance;
                    document.getElementById("distance5").textContent=(parseInt(distance));
                    var adress=displayinfo.businesses[4].location.address1+", "+displayinfo.businesses[4].location.city+", "+displayinfo.businesses[4].location.zip_code;
                    document.getElementById("adress5").textContent=(adress);
                    document.getElementById("cat5").textContent=(displayinfo.businesses[4].categories[0].title);
                    document.getElementById("p_number5").textContent=(displayinfo.businesses[4].display_phone);
                    document.getElementById("avalible_for5").textContent=(displayinfo.businesses[4].transactions);      
                        
         
                    }
                
    };
          
            xhr.open('GET', 'https://api.yelp.com/v3/businesses/search?term='+inputVal2+'&location='+inputVal);  

    
            xhr.setRequestHeader("Authorization", "Bearer " + token);
            xhr.send();
                
        var x = document.getElementById("input1");
        x.style.display = "none"; 
        var y= document.getElementById("output");
        y.style.display = "block"; 
           
            
        }


function getcords(){
     
    
     navigator.geolocation.getCurrentPosition(
      function(position) {
        var  lat=position.coords.latitude;
       var   lon=position.coords.longitude;
           lat=lat.toFixed(3);
            lon=lon.toFixed(3);
          lat=lat.toString();
          lon=lon.toString();
          var inputVal2 = document.getElementById("input2").value;
          var url = 'https://api.yelp.com/v3/businesses/search?term='+inputVal2+'&latitude='+lat+'&longitude='+lon;
          
          
          
},
      function() {
          alert('Error getting location');
      }); 
    
       return url;
          
        
          
}
      
         
         
         
              
async function getLoc() {

    

            
           try{
               navURL = getcords()
            
           
          

        
           var token = "139SiL9OvyPI6q9jBUU5Kksv8a_P30YzcesJb3Phumcww10-ss3ymhnIm_CfeGeFB5q6bZo1GNv2fjdgTaLQfZNiMEwzBZCQpQV_lljWE50dGYLIq2yW1_zGX-fTX3Yx";
                
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                    console.log(this.response);
                    document.getElementById("content").innerHTML = "";
                    var data = document.createElement('p');
                    data.innerText = this.response;
                    displayinfo=JSON.parse(this.response);
                  
                    
                    document.getElementById("name1").textContent=(displayinfo.businesses[0].name);
                    document.getElementById("rating1").textContent=(displayinfo.businesses[0].review_count);
                    document.getElementById("review_count1").textContent=(displayinfo.businesses[0].rating);
                     var distance=displayinfo.businesses[0].distance;
                    document.getElementById("distance1").textContent=(parseInt(distance));
                    var adress=displayinfo.businesses[0].location.address1+", "+displayinfo.businesses[0].location.city+", "+displayinfo.businesses[0].location.zip_code;
                    document.getElementById("adress1").textContent=(adress);
                    document.getElementById("cat1").textContent=(displayinfo.businesses[0].categories[0].title);
                    document.getElementById("p_number1").textContent=(displayinfo.businesses[0].display_phone);
                    document.getElementById("avalible_for1").textContent=(displayinfo.businesses[0].transactions);
                        
                    document.getElementById("name2").textContent=(displayinfo.businesses[1].name);
                    document.getElementById("rating2").textContent=(displayinfo.businesses[1].review_count);
                    document.getElementById("review_count2").textContent=(displayinfo.businesses[1].rating);
                     var distance=displayinfo.businesses[1].distance;
                    document.getElementById("distance2").textContent=(parseInt(distance));
                    var adress=displayinfo.businesses[1].location.address1+", "+displayinfo.businesses[1].location.city+", "+displayinfo.businesses[1].location.zip_code;
                    document.getElementById("adress2").textContent=(adress);
                    document.getElementById("cat2").textContent=(displayinfo.businesses[1].categories[0].title);
                    document.getElementById("p_number2").textContent=(displayinfo.businesses[1].display_phone);
                    document.getElementById("avalible_for2").textContent=(displayinfo.businesses[1].transactions);    
                        
                    document.getElementById("name3").textContent=(displayinfo.businesses[2].name);
                    document.getElementById("rating3").textContent=(displayinfo.businesses[2].review_count);
                    document.getElementById("review_count3").textContent=(displayinfo.businesses[2].rating);
                    var distance=displayinfo.businesses[2].distance;
                    document.getElementById("distance3").textContent=(parseInt(distance));
                    var adress=displayinfo.businesses[2].location.address1+", "+displayinfo.businesses[2].location.city+", "+displayinfo.businesses[2].location.zip_code;
                    document.getElementById("adress3").textContent=(adress);
                   document.getElementById("cat3").textContent=(displayinfo.businesses[2].categories[0].title);
                    document.getElementById("p_number3").textContent=(displayinfo.businesses[2].display_phone);
                    document.getElementById("avalible_for3").textContent=(displayinfo.businesses[2].transactions);   
                        
                     document.getElementById("name4").textContent=(displayinfo.businesses[3].name);
                    document.getElementById("rating4").textContent=(displayinfo.businesses[3].review_count);
                    document.getElementById("review_count4").textContent=(displayinfo.businesses[3].rating);
                    var distance=displayinfo.businesses[3].distance;
                    document.getElementById("distance4").textContent=(parseInt(distance));
                    var adress=displayinfo.businesses[3].location.address1+", "+displayinfo.businesses[3].location.city+", "+displayinfo.businesses[3].location.zip_code;
                    document.getElementById("adress4").textContent=(adress);
                    document.getElementById("cat4").textContent=(displayinfo.businesses[3].categories[0].title);
                    document.getElementById("p_number4").textContent=(displayinfo.businesses[3].display_phone);
                    document.getElementById("avalible_for4").textContent=(displayinfo.businesses[3].transactions);       
                        
                        
                     document.getElementById("name5").textContent=(displayinfo.businesses[4].name);
                    document.getElementById("rating5").textContent=(displayinfo.businesses[4].review_count);
                    document.getElementById("review_count5").textContent=(displayinfo.businesses[4].rating);
                    var distance=displayinfo.businesses[4].distance;
                    document.getElementById("distance5").textContent=(parseInt(distance));
                    var adress=displayinfo.businesses[4].location.address1+", "+displayinfo.businesses[4].location.city+", "+displayinfo.businesses[4].location.zip_code;
                    document.getElementById("adress5").textContent=(adress);
                    document.getElementById("cat5").textContent=(displayinfo.businesses[4].categories[0].title);
                    document.getElementById("p_number5").textContent=(displayinfo.businesses[4].display_phone);
                    document.getElementById("avalible_for5").textContent=(displayinfo.businesses[4].transactions);      
                        
         
                    }
                
    };
          
            xhr.open('GET', navURL);  

    
            xhr.setRequestHeader("Authorization", "Bearer " + token);
            xhr.send();
                
        var x = document.getElementById("input1");
        x.style.display = "none"; 
        var y= document.getElementById("output");
        y.style.display = "block"; 
           }
    catch(err){
            alert("no");
    }
    
   
    
}
   

      


    