`const $fileInput = <HTMLInputElement>document.getElementById("file");
$fileInput.addEventListener(
  "change",
  function(event) {
    // -- busy doing application work --

    // clean up after file input
    $fileInput.value = "";
  },
  false
);`;
