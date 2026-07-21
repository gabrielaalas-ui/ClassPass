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


    scanner.start(

        {
            facingMode: "user"
        },

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


    )


    .catch(error => {


        document.getElementById("message").innerHTML =

            "Camera error: " + error;


    });


}
