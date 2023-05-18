function checkMilk() {
    var userInput = document.getElementById("milkInput").value;
  
    if (userInput.toLowerCase() === "normal milk") {
      document.getElementById("response").textContent = "Yes, yes a good milk! Do you know this one? Why did the cow start a fight with his buddy? There was real beef between them! HAHAHAHAHAAHAHAHHAAHAHA";
    } else if (userInput.toLowerCase() === "oat milk") {
      document.getElementById("response").textContent = "Uhhhh, t-oat-ally the best milk ever!!! *chuckle*";
    } else if (userInput.toLowerCase() === "soy milk") {
        document.getElementById("response").textContent = "Yummy! Soy what you want, this milk is the best!   ............*akward silence*";
    } else if (userInput.toLowerCase() === "coconut milk") {
        document.getElementById("response").textContent = "COCONUT MILK?!? Bleghhhh!!! You must be coco-nuts...";
    } else if (userInput.toLowerCase() === "peanut milk") {
        document.getElementById("response").textContent = "Mhhh! Did you know there is a rumor going around about peanut butter? I don't want to SPREAD it though!!!! LMAOOOOO";
    } else if (userInput.toLowerCase() === "hazelnut milk") {
        document.getElementById("response").textContent = "You have excellent taste! Here is a little joke for you: What did the hazelnut spread say to the interrogator? I'm NUTELLAn ya nothing! thihihihihihi";
    } else if (userInput.toLowerCase() === "almond milk") {
        document.getElementById("response").textContent = "Yummy! Hey, what do you call an almond in a space suit? An astronut!!! bahahahahahah";
    } else if (userInput.toLowerCase() === "rice milk") {
        document.getElementById("response").textContent = "YESSS! Rice, rice, baby!"; }
    else if (userInput.toLowerCase() === "cow milk") {
            document.getElementById("response").textContent = "Yummy! Do you know how cows say 'thank you for dinner' in Spanish? Moo-chas grass-ias. ;----) HAR HAR"; }  
    else {
        var searchQuery = userInput + " pun";
        var searchURL = "https://www.google.com/search?q=" + encodeURIComponent(searchQuery);
        var link = '<a href="' + searchURL + '" target="_blank">here</a>';
        response.innerHTML = userInput + "? Wow, I've never heard of that one. But you can find some puns on it " + link + "!";
      }
    }
  

  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      checkMilk();
    }
  });
  