let selectedDestination = "";


function selectDestination(destination) {


    selectedDestination = destination;


    document.getElementById("message").innerHTML =

    "Ready to scan for: " + destination;


    startScanner();


}



function startScanner(){


    let scanner = new Html5Qrcode("reader");



    scanner.start(

        {
            facingMode: "environment"
        },


        {
            fps: 10,
            qrbox: 250
        },


        function(decodedText){


            scanner.stop();



            document.getElementById("message").innerHTML =

            "QR Code Found: " + decodedText;



        },


        function(errorMessage){

            // Ignore scanning errors while searching

        }

    );


}
