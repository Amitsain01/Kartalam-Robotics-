

//-----------------------------------
//login page js 

// ------------------------------




// emailjs

// Initialize EmailJS with your Public Key
emailjs.init('k_C8vYHv65tRyLXF5'); // Replace with your actual Public Key (User ID)

// Form submission handler
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  const serviceID = 'service_sj6wmm3'; // Your Service ID
  const templateID = 'template_efdca48'; // Your Template ID

  // Send email using EmailJS query
  emailjs.sendForm(serviceID, templateID, this)
    .then(
      (response) => {
        console.log('Success:', response); // Log success for debugging
        alert('Your message has been sent successfully!');
      },
      (error) => {
        console.error('Error:', error); // Log error details for debugging
        alert('Failed to send the message. Please check your configuration.');
      }
    );

  // Reset the form after submission
  this.reset();
});

// emailjs for order form 
// Initialize EmailJS with the provided public key
emailjs.init("k_C8vYHv65tRyLXF5");

// Function to calculate total price and send the email
function submitOrderForm() {
    // Collect form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const handType = document.getElementById("handType").value;
    const color = document.getElementById("color").value;
    
    // Initialize total price
    let totalPrice = 0;

    // Calculate base price based on hand type
    if (handType === "basic") totalPrice += 100000;
    if (handType === "advanced") totalPrice += 150000;
    if (handType === "premium") totalPrice += 200000;

    // Add color price
    if (color === "custom") totalPrice += 5000;

    // Collect selected features and add their prices
    const selectedFeatures = [];
    if (document.getElementById("gripOption1").checked) {
        selectedFeatures.push("Grip Option 1 (₹10,000)");
        totalPrice += 10000;
    }
    if (document.getElementById("tempSensor").checked) {
        selectedFeatures.push("Temperature Sensor (₹5,000)");
        totalPrice += 5000;
    }

    // Prepare the template parameters
    const templateParams = {
        to_name: firstName + " " + lastName,
        firstName,
        lastName,
        email,
        handType,
        color,
        totalPrice,
        gripOption1: document.getElementById("gripOption1").checked,
        tempSensor: document.getElementById("tempSensor").checked,
    };

    // Send the email using EmailJS
    emailjs.send("service_sj6wmm3", "template_opa5q8l", templateParams)
        .then(response => {
            console.log("Email sent successfully:", response.status, response.text);
            alert("Thank you for your order! A confirmation email has been sent.");
        })
        .catch(error => {
            console.error("Failed to send email:", error);
            alert("There was an error sending your order. Please try again later.");
        });
}

//form js
function calculatePrice() {
    let price = 0;

    // Get selected hand type and color
    const handType = document.getElementById("kartalamHandType").value;
    const color = document.getElementById("kartalamColor").value;

    // Calculate price for hand type
    if (handType === "basic") price += 100000;
    if (handType === "advanced") price += 150000;
    if (handType === "premium") price += 200000;

    // Add price for custom color
    if (color === "custom") price += 5000;

    // Add price for additional features
    if (document.getElementById("kartalamGripOption1").checked) price += 10000;
    if (document.getElementById("kartalamTempSensor").checked) price += 5000;

    // Display the total price
    const priceDisplay = document.getElementById("kartalamPriceDisplay");
    if (priceDisplay) {
        priceDisplay.innerText = `Total Price: ₹${price}`;
    } else {
        console.error("Price display element not found.");
    }
}





// Attach the submitOrderForm function to the form's submit event
document.getElementById("purchaseForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    submitOrderForm();
});


// Function to calculate price
function calculatePrice() {
  let price = 0;
  const handType = document.getElementById("kartalamHandType").value;
  if (handType === "basic") price += 100000;
  if (handType === "advanced") price += 150000;
  if (handType === "premium") price += 200000;

  const color = document.getElementById("kartalamColor").value;
  if (color === "custom") price += 5000;

  if (document.getElementById("kartalamGripOption1").checked) price += 10000;
  if (document.getElementById("kartalamTempSensor").checked) price += 5000;

  return price;
}



$(document).ready(function() {
	// Banner animation
	var myFunction = function() {
		console.log("done");
	};

	var fullLock = $('#full-lock-svg'),
		lock = $('#lock'),
		lock_body = $('#lock-body'),
		keyhole = $('#keyhole'),
		bottom = $('#bottom'),
		up = $('#up'),
		upPaths = $("#up [id^='up-']"),
		bottomPaths = $("#bottom [id^='bottom-']"),
		key = $("#key"),
		bannerHeadingH2 = $(".banner_heading h2"),
		bannerHeadingH3 = $(".banner_heading h3");

	tlBanner = new TimelineMax({paused: false, repeat: -1, onComplete: myFunction});

	tlBanner
		.set(fullLock, {display: 'block'})
		.fromTo(lock, 1, {
			x: -150,
			autoAlpha: 0,
			ease: Power3.easeOut
		}, {
			x: 0,
			autoAlpha: 1
		})
		.fromTo(up, 1, {
			y: -150,
			autoAlpha: 0,
			ease: Power3.easeOut
		}, {
			y: 0,
			autoAlpha: 1
		}, '-=1')
		.fromTo(bottom, 1, {
			y: 150,
			autoAlpha: 0,
			ease: Power3.easeOut
		}, {
			y: 0,
			autoAlpha: 1
		}, '-=1')
		.to(upPaths, 1, {
			fill: "rgb(8, 8, 8)"
		}, '-=1')
		.to(bottomPaths, 1, {
			fill: "rgba(255, 255, 255, 1)"
		}, '-=1')
		.to(bottomPaths, .7, {
			fill: "rgba(255, 255, 255, 1)"
		}, '.5')
		.to(fullLock, 1, {
			x: 150,
			autoAlpha: 0
		}, '2')
		.fromTo(bannerHeadingH2, 1, {
			y: 150,
			autoAlpha: 0,
			ease: Power3.easeOut
		}, {
			y: 0,
			autoAlpha: 1
		}, '2.5')
		.fromTo(bannerHeadingH3, 1, {
			y: -150,
			autoAlpha: 0,
			ease: Power3.easeOut
		}, {
			y: 0,
			autoAlpha: 1
		}, '2.5')
		.to(bannerHeadingH2, 2, {
			fill: "rgba(0, 0, 0, 1)"
		}, '3.5');
});
