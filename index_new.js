function textUpdate() {
    var fontSize = document.getElementById('font-size-input').value;
    var fontSize_value = document.getElementById('font-size');
    
    var cssOutput = document.getElementById('output');
    var textPreview = document.getElementById('text');

    fontSize_value.innerHTML = fontSize + "px";

    cssOutput.innerHTML = "font-size: " + fontSize + "px;";
    textPreview.style.fontSize = fontSize + "px";
}