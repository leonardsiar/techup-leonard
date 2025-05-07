var age=20
console.log(age)
age =60


var password="techup"

var isMale=false
var isLoggedIn=false

var blog_posts = ["Today was a good day", "The sky is blue", 
    "It's raining heavily now"]
    
    
    if (isMale == true) {
        console.log("You are male")
    } else{
        console.log("You are not male")
    }
    while (age < 70) {
        console.log("Your age is " + age );
        age = age + 1;
    }
    function sayHello() {
        // Get the value from the input field
        const username = document.getElementById("usernameInput").value;

        // Check if the input is empty
        if (username === "") {
            alert("Please enter your name.");
            return;
        }
        // Display the greeting message
        // in the HTML element with id "greeting"
        // Use template literals to include the username

        document.getElementById("greeting").innerHTML = `<p>Hello, ${username}!</p>`
    }

