  // Set the date we're counting down to
  var countDownDate = new Date("Apr 10, 2025 23:59:59").getTime();

  // Update the countdown every 1 second
  var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);



    // Set the date we're counting down to
    var countDownDate = new Date("Apr 10, 2025 23:59:59").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();
  
      // Find the distance between now and the countdown date
      var distance = countDownDate - now;
  
      // Time calculations for days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the result in the element with id="countdown"
      document.getElementById("countdown2").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
  
      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown2").innerHTML = "EXPIRED";
      }
    }, 1000);


    document.getElementById('accept-all').addEventListener('click', function() {
        // Handle cookie acceptance logic here
        document.getElementById('cookie-banner-container').style.display = 'none';
      });

      document.getElementById('cookie-settings').addEventListener('click', function() {
        // Handle cookie settings logic here
        alert('Cookie settings functionality to be implemented.');
      });

  