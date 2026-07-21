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


            scanner.start(

                devices[devices.length - 1].id,

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

                    // scanning continues

                }


            );


        }


    })


    .catch(error => {


        document.getElementById("message").innerHTML =

        "Camera error: " + error;


    });


}
