
document.addEventListener('DOMContentLoaded', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    //Disable the input elements
   // document.getElementById('weather').disabled = true;
   
  //  document.getElementById('map').disabled = true;
  //  document.getElementById('currency').disabled = true;

    //Add onclick listeners
    document.getElementById('login').addEventListener('click', toggleSignIn, false);
    initApp();

    //Make sure user is not signed in on page load.
    firebase.auth().signOut();

}


function toggleSignIn() {
  //If the current user object does not exist
  if (!firebase.auth().currentUser) {
    //Set the auth provider to yahoo
    var provider = new firebase.auth.OAuthProvider('yahoo.com');
    //And sign in with a popup
    firebase.auth().signInWithPopup(provider)
      .then(function (result) { //On Success save the token to session storage and output it to console
        var token = result.credential.accessToken;
        window.sessionStorage.setItem("token",token);
        console.log(result);
        var user = result.user;
        var ws = document.getElementById("content");
        ws.innerHTML = '';
        var p = document.createElement('p');
        p.textContent = "User : " + result.user.email;
        ws.appendChild(p);
        p = document.createElement('p');
        p.textContent = "Token : " + token;
        ws.appendChild(p);

      })
      .catch(function (error) { //On failure alert user or report error to console
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('You have already signed up with a different auth provider for that email.');
        } else {
          console.error(error);
        }
      });
  } else {
    firebase.auth().signOut();
  }

}


function initApp() {
  //Set listeners for Auth State Changed
  firebase.auth().onAuthStateChanged(function (user) {
    //if there is a user enable app functionality
    if (user) {
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      document.getElementById('login').textContent = 'Sign out';
   
    //  document.getElementById('map').disabled = false;
    //  document.getElementById('weather').disabled = false;
    //  document.getElementById('currency').disabled = false;

      //else keep the app disabled or re-disabled it
    } else {
     // document.getElementById("weather").disabled = true;
     //  document.getElementById('map').disabled = true;
    //  document.getElementById('currency').disabled = true;
      document.getElementById('login').textContent = 'Sign in with Yahoo';
    }

  });

}

