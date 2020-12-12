var docurrency = function(){
    
    console.log("GETTING CURRENCY");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let currency = JSON.parse(this.responseText);
            console.log(currency);
            buildcurrency(currency);
        }
    };
     url = 'https://api.exchangeratesapi.io/latest?base=USD'
        
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


function buildcurrency(currency){
    let workspace = document.getElementById("content");
    workspace.innerHTML = "";
    
   // var table=document.createElement("TABLE");
   // table.setAttribute("Country","Conversion rate to USD")
   // workspace.appendChild(table);
    let h4 = document.createElement('h1');
    let text2 = document.createTextNode("Current Currency Exchange Rates Compared to $1 USD ");
    h4.appendChild(text2);
    workspace.append(h4);
    
    
    for(x in currency.rates){
       let h1 = document.createElement('h1');
        let text = document.createTextNode(x +"  "+ currency.rates[x]);
        h1.appendChild(text);
        workspace.append(h1);
    }
     
    back();// restores weather app
    var x = document.getElementById("weather app"); //hides weather app
    x.style.display = "none";
    back();// restores weather app
      var map= document.getElementById("Frame");//hides map
    map.style.display="none";
}

