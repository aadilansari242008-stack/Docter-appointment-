// Doctor Fee Update
const doctor = document.getElementById("doctor");
const fee = document.getElementById("fee");

doctor.addEventListener("change", function () {
    if (this.value === "") {
        fee.innerHTML = "Appointment Fee : ₹0";
    } else {
        fee.innerHTML = "Appointment Fee : ₹" + this.value;
    }
});

// Date Rule (8 AM ke baad next day)
const dateInput = document.getElementById("date");

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
    let time = document.getElementById("time").value;
    let problem = document.querySelector("textarea").value.trim();

    if(name==="" || email==="" || mobile===""){
        alert("Please fill all details.");
        return;
    }

    if(doctor.value===""){
        alert("Please select a doctor.");
        return;
    }

    if(time===""){
        alert("Please select a time slot.");
        return;
    }

    let message =
`🏥 MediBook Appointment

👤 Patient : ${name}

📧 Email : ${email}

📱 Mobile : ${mobile}

👨‍⚕️ Doctor : ${doctorName}

💰 Fee : ₹${doctorFee}

📅 Date : ${date}

⏰ Time : ${time}



    let phone = "917352585780";

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
    );

    alert("Appointment details are ready to send on WhatsApp.");
}
