const form = document.getElementById('contactForm');
const alert = document.querySelector(".alert");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuJBKf93f4WY_3hBY_8_YinJSbmB11ULc",
    authDomain: "cyberprojectdemo.firebaseapp.com",
    databaseURL: "https://cyberprojectdemo-default-rtdb.firebaseio.com",
    projectId: "cyberprojectdemo",
    storageBucket: "cyberprojectdemo.appspot.com",
    messagingSenderId: "1091115741208",
    appId: "1:1091115741208:web:dccce91cbe208e46ac536d",
    measurementId: "G-49X2MD0Z9V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database()

const ref = database.ref("messages")


form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    //console.log(name, email, message);





    ref.push({
        name: name,
        email: email,
        message: message
    })

    alert.style.display = "block"

    setTimeout(() => {
        alert.style.display = "none"
    }, 2000)

    // form.reset()

})



// form.addEventListener("submit", (e) => {

//     e.preventDefault();
//     console.log("HELOOO ")
// })