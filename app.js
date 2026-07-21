let selectedDestination = "";
let scanner;


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


            let frontCamera = devices.find(camera =>

                camera.label.toLowerCase().includes("front")

            );


            let cameraToUse = frontCamera
                ? frontCamera.id
                : devices[0].id;



            scanner.start(

                cameraToUse,

                {
                    fps: 10,
                    qrbox: 250
                },


                function(decodedText) {


                    scanner.stop();


                    document.getElementById("message").innerHTML =

                    "QR Code Found: " + decodedText;


                },


                function(errorMessage) {

                    // Scanner continues searching

                }


            );


        }


    })


    .catch(error => {


        document.getElementById("message").innerHTML =

        "Camera error: " + error;


    });


}
