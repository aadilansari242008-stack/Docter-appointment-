document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const doctor = form.querySelector("select").value;
        const date = form.querySelector('input[type="date"]').value;

        if (doctor === "") {
            alert("Please select a doctor.");
            return;
        }

        alert(
            "✅ Appointment Booked Successfully!\n\n" +
            "Patient: " + name +
            "\nDoctor: " + doctor +
            "\nDate: " + date
        );

        form.reset();
    });

});
function sendWhatsApp() {

let name = document.querySelector('input[type="text"]').value;
let email = document.querySelector('input[type="email"]').value;
let mobile = document.querySelector('input[type="tel"]').value;
let doctor = document.querySelector('select').value;
let date = document.querySelector('input[type="date"]').value;
let time = document.querySelector('input[type="time"]').value;
let problem = document.querySelector('textarea').value;

let message =
"📅 New Appointment%0A%0A" +
"👤 Name: " + name + "%0A" +
"📧 Email: " + email + "%0A" +
"📱 Mobile: " + mobile + "%0A" +
"👨‍⚕️ Doctor: " + doctor + "%0A" +
"📅 Date: " + date + "%0A" +
"⏰ Time: " + time + "%0A" +
"📝 Problem: " + problem;

window.open("https://wa.me/917352585780?text=" + message, "_blank");

}
