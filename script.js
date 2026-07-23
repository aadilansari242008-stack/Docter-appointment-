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
