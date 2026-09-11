// ========================================
// PERMANENT CLAIM WEBSITE
// OFFICIAL JAVASCRIPT RECORD SYSTEM
// ========================================


// ----------------------------------------
// 1. OPEN OFFICIAL RECORD
// ----------------------------------------

const openButton = document.querySelector(".official-button");

if (openButton) {

    openButton.addEventListener("click", function () {

        const recordSection = document.querySelector(".record");

        if (recordSection) {

            recordSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// ----------------------------------------
// 2. CLAIM VERIFICATION
// ----------------------------------------

function verifyClaim() {

    const result = document.getElementById("verificationResult");

    if (!result) {
        return;
    }


    // First message

    result.innerHTML = "Accessing official records...";


    // Second message

    setTimeout(function () {

        result.innerHTML = "Checking subject...";

    }, 1000);


    // Third message

    setTimeout(function () {

        result.innerHTML = "Checking claim date...";

    }, 2000);


    // Fourth message

    setTimeout(function () {

        result.innerHTML = "Checking permanence clause...";

    }, 3000);


    // Fifth message

    setTimeout(function () {

        result.innerHTML = "Checking Tapir documentation...";

    }, 4000);


    // Final result

    setTimeout(function () {

        result.innerHTML =
            "✓ CLAIM VERIFIED<br><br>" +
            "ADAN IS HER BBY.<br><br>" +
            "CLAIM STATUS: PERMANENT";

    }, 5000);

}


// ----------------------------------------
// 3. PAGE LOADED MESSAGE
// ----------------------------------------

document.addEventListener("DOMContentLoaded", function () {

    console.log("Official claim records loaded.");

});


// ----------------------------------------
// 4. PREVENT ACCIDENTAL FORM SUBMISSION
// ----------------------------------------

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        const activeElement = document.activeElement;

        if (activeElement && activeElement.tagName === "BUTTON") {

            event.preventDefault();

        }

    }

});


// ----------------------------------------
// 5. MUSIC PLAYER
// ----------------------------------------

const anthem = document.querySelector("audio");

if (anthem) {

    anthem.addEventListener("play", function () {

        console.log("Official claim anthem activated.");

    });


    anthem.addEventListener("pause", function () {

        console.log("Official claim anthem paused.");

    });

}


// ----------------------------------------
// 6. PHOTO EXHIBIT LOG
// ----------------------------------------

const exhibits = document.querySelectorAll(".exhibit img");

exhibits.forEach(function (photo, index) {

    photo.addEventListener("click", function () {

        console.log(
            "Exhibit " + String.fromCharCode(65 + index) + " accessed."
        );

    });

});


// ----------------------------------------
// 7. OFFICIAL RECORD LOADED
// ----------------------------------------

console.log("--------------------------------");
console.log("OFFICIAL CLAIM RECORD");
console.log("--------------------------------");
console.log("Subject: Adan");
console.log("Designation: Her Bby");
console.log("Alias: Tapir");
console.log("Claim Date: 02.06.2026");
console.log("Status: PERMANENT");
console.log("Expiration: NONE");
console.log("--------------------------------");
