let selectedDestination = "";
let scanner;


// Student list
const students = {

    "1001": "John Smith",

    "1002": "Jane Doe"

};


function selectDestination(destination) {

    selectedDestination = destination;

    document.getElementById("message").innerHTML =
        "Preparing camera...";

    startScanner();

}



function startScanner() {

    scanner = new Html5Qrcode("reader");


    Html5Qrcode.getCameras()

    .then(devices => {


        if (devices && devices.length) {


            let cameraId = devices[0].id;


            // Try to find the front camera
            for (let i = 0; i < devices.length; i++) {

                let label = devices[i].label.toLowerCase();

                if (
                    label.includes("front") ||
                    label.includes("user") ||
                    label.includes("facetime")
                ) {

                    cameraId = devices[i].id;

                }

            }



            scanner.start(

                cameraId,

                {
                    fps: 10,
                    qrbox: 250
                },


                function(decodedText) {


                    scanner.stop();


                   let studentName = students[decodedText] || "Unknown Student";


document.getElementById("message").innerHTML =

"✓ Pass Recorded<br><br>" +
studentName +
"<br><br>" +
selectedDestination;;


                },


                function(errorMessage) {

                    // Continue scanning

                }


            );


        }


    })


    .catch(error => {


        document.getElementById("message").innerHTML =

        "Camera error: " + error;


    });


}
