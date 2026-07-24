    const doctor = document.getElementById("doctor");
const fee = document.getElementById("fee");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");

// Doctor Fee Update
doctor.addEventListener("change", function () {
    if (this.value === "") {
        fee.innerHTML = "Appointment Fee : ₹0";
    } else {
        fee.innerHTML = "Appointment Fee : ₹" + this.value;
    }
});

// 8 AM Rule
let today = new Date();

if (today.getHours() >= 8) {
    today.setDate(today.getDate() + 1);
}

let yyyy = today.getFullYear();
let mm = String(today.getMonth() + 1).padStart(2, "0");
let dd = String(today.getDate()).padStart(2, "0");

let minDate = `${yyyy}-${mm}-${dd}`;

dateInput.min = minDate;
dateInput.value = minDate;

// WhatsApp Booking
function sendWhatsApp() {

    let name = document.querySelector('input[type="text"]').value.trim();
    let age = document.getElementById("age").value.trim();
    let gender = document.getElementById("gender").value;
    let email = document.querySelector('input[type="email"]').value.trim();
    let mobile = document.querySelector('input[type="tel"]').value.trim();

    let village = document.getElementById("village").value.trim();
    let postoffice = document.getElementById("postoffice").value.trim();
    let district = document.getElementById("district").value.trim();
    let state = document.getElementById("state").value.trim();
    let pincode = document.getElementById("pincode").value.trim();

    let doctorName = doctor.options[doctor.selectedIndex].text;
    let doctorFee = doctor.value;

    let date = dateInput.value;
    let time = timeInput.value;

    let problem = document.querySelector("textarea").value.trim();

    if (
        name === "" ||
        age === "" ||
        gender === "" ||
        email === "" ||
        mobile === "" ||
        village === "" ||
        postoffice === "" ||
        district === "" ||
        state === "" ||
        pincode === "" ||
        doctor.value === "" ||
        date === "" ||
        time === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }

    let message =
`🏥 MediBook Appointment

👤 Name : ${name}

🎂 Age : ${age}

🚻 Gender : ${gender}

📱 Mobile : ${mobile}

📧 Email : ${email}

🏠 Village : ${village}

📮 Post Office : ${postoffice}

🏙️ District : ${district}

🗺️ State : ${state}

📌 PIN Code : ${pincode}

👨‍⚕️ Doctor : ${doctorName}

💰 Fee : ₹${doctorFee}

📅 Date : ${date}

⏰ Time : ${time}

📝 Problem : ${problem}`;

    let phone = "917352585780";

    let url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
                                      }
