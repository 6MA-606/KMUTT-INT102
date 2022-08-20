function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

function startUp() {
    const colorPicker = document.querySelector("#cpicker");
    colorPicker.addEventListener('change', (event) => {
        var cinput = document.getElementById('cinput');
        cinput.value = event.target.value;
        update();
    });

    const shadow = document.querySelector("#shadow");
    shadow.addEventListener('change', () => {
        var s_input = document.getElementById('shadow-input');
        if (shadow.checked == true) {
            s_input.style.display = "block";
        } else {
            s_input.style.display = "none";
        }
        update();
    });

    const s_color = document.querySelector("#sc-picker");
    s_color.addEventListener('change', (event) => {
        var s_colorInput = document.getElementById('sc-input');
        s_colorInput.value = event.target.value;
        update();
    });

    const decoration = document.querySelector("#decoration");
    decoration.addEventListener('change', () => {
        var d_input = document.getElementById('d-input');
        if (decoration.checked == true) {
            d_input.style.display = "inline";
        } else {
            d_input.style.display = "none";
        }
        update();
    });

    const underline = document.querySelector("#underline");
    underline.addEventListener('change', () => {
        update();
    });
}
function update() {
    var fsize = document.getElementById('fsize');
    var text = document.getElementById('text');
    var fsinput = document.getElementById('fsinput').value;
    var tinput = document.getElementById('tinput').value;
    var cinput = document.getElementById('cinput').value;

    fsize.innerHTML = text.style.fontSize;
    text.innerHTML = tinput;
    text.style.fontSize = fsinput + "px";
    text.style.color = cinput;
    document.getElementById("output").innerHTML = "font-size: " + fsinput + "px;<br>" + "color: " + cinput + ";<br>";
    if (shadow.checked == true) {
        var hs_value = document.getElementById("hs-input").value;
        var vs_value = document.getElementById("vs-input").value;
        var blur_radius = document.getElementById("blur-input").value;
        var sc_input = document.getElementById("sc-input").value;
        var s_opacity = document.getElementById('opacity-input').value;
        var hex_opacity = decimalToHex(Math.ceil((255 / 100) * s_opacity), 2);

        document.getElementById("hs-value").innerHTML = hs_value + "px";
        document.getElementById("vs-value").innerHTML = vs_value + "px";
        document.getElementById("blur-value").innerHTML = blur_radius + "px";
        document.getElementById("opacity-value").innerHTML = s_opacity + "%";

        document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "text-shadow: " + hs_value + " " + vs_value + " " + blur_radius + " " + sc_input + hex_opacity + ";<br>";
        text.style.textShadow = sc_input + hex_opacity + " " + hs_value + "px " + vs_value + "px " + blur_radius + "px";
    } else {
        text.style.textShadow = null;
    }
    if (decoration.checked == false) {
        document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "text-decoration: none;";
        text.style.textDecoration = "none";
    } else {
        if (underline.checked == true) {
            document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "text-decoration: underline;";
            text.style.textDecoration = "underline";
        } else {
            document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + "text-decoration: none;";
            text.style.textDecoration = "none";
        }
    }
}
window.onload = startUp;