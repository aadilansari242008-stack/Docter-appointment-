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
    let email = document.querySelector('input[type="email"]').value.trim();
    let mobile = document.querySelector('input[type="tel"]').value.trim();
    let doctorName = doctor.options[doctor.selectedIndex].text;
    let doctorFee = doctor.value;
    let date = dateInput.value;
    let time = timeInput.value;
    let problem = document.querySelector("textarea").value.trim();

    if (name === "") {
        alert("Enter your name.");
        return;
    }

    if (email === "") {
        alert("Enter your email.");
        return;
    }

    if (mobile === "") {
        alert("Enter your mobile number.");
        return;
    }

    if (doctor.value === "") {
        alert("Please select a doctor.");
        return;
    }

    if (date === "") {
        alert("Please select appointment date.");
        return;
    }

    if (time === "") {
        alert("Please select appointment time.");
        return;
    }

    let message =
`🏥 MediBook Appointment

👤 Patient: ${name}

📱 Mobile: ${mobile}

📧 Email: ${email}

👨‍⚕️ Doctor: ${doctorName}

💰 Fee: ₹${doctorFee}

📅 Date: ${date}

⏰ Time: ${time}

📝 Problem: ${problem}`;

    let phone = "917352585780";

    let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
