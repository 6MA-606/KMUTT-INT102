function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

function cssCopy() {
    var copyText = document.getElementById("css-code");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function startUp() {

    function checkSize() {
        sidebar = document.querySelector('.sidebar');
        grid = document.querySelector('.grid');
        content = document.querySelector('.content');
        if (window.innerWidth <= 1230) {
            //sidebar.style.display = "none";
            grid.style.display = "block";
            content.style.margin = "0 4.5vw 0 4.5vw";
        } else {
            //sidebar.style.display = "block";
            grid.style.display = "grid";
        }
    }

    window.onresize = checkSize;

    fontFamily = document.querySelector("#font-family-checkbox");
    fontList = document.querySelector("#font-families-list");
    cssOutput = document.getElementById("css-output");
    fontFamily.addEventListener('change', () => {
        fontList.disabled = fontFamily.checked ? false : true;
        if (fontList.disabled) {
            document.getElementById("css-font-family").innerHTML = "";
        } else {
            document.getElementById("css-font-family").innerHTML = "font-family: " + fontList.value + ";<br>";
        }
    });

    fontList.addEventListener('change', () => {
        if (fontFamily.checked) {
            document.getElementById("css-font-family").innerHTML = "font-family: " + fontList.value + ";<br>";
            document.getElementById("text").style.fontFamily = fontList.value;
        }
    });

    colorPicker = document.querySelector("#text-color-picker");
    customColorPicker = document.getElementById('custom-color-picker');
    colorPicker.addEventListener('input', (event) => {
        var cinput = document.getElementById('text-color-input');
        customColorPicker.style.backgroundColor = event.target.value
        cinput.value = event.target.value;
        textUpdate();
    });

    textShadow = document.querySelector('#text-shadow-checkbox');
    textShadow.addEventListener('change', () => {
        var s_input = document.getElementById('text-shadow-ui');
        s_input.style.display = textShadow.checked ? "block" : "none";
        document.getElementById('css-text-shadow').style.display = textShadow.checked ? "inline" : "none";
        textUpdate();
    });

    shadowColorPicker = document.querySelector("#shadow-color-picker");
    customShadowColorPicker = document.getElementById('custom-shadow-color-picker');
    shadowColorPicker.addEventListener('input', (event) => {
        var s_colorInput = document.getElementById('shadow-color-input');
        customShadowColorPicker.style.backgroundColor = event.target.value
        s_colorInput.value = event.target.value;
        textUpdate();
    });

    decoration = document.querySelector("#text-decoration-checkbox");
    decoration.addEventListener('change', () => {
        var d_input = document.getElementById('text-decoration-input');
        d_input.style.display = decoration.checked ? "inline" : "none";
        textUpdate();
    });

    overline = document.querySelector("#overline-checkbox");
    overline.addEventListener('change', () => {
        textUpdate();
    });

    underline = document.querySelector("#underline-checkbox");
    underline.addEventListener('change', () => {
        textUpdate();
    });

    lineThrough = document.querySelector("#line-through");
    lineThrough.addEventListener('change', () => {
        textUpdate();
    });

    previewBg = document.querySelector('#preview-bg');
    customPreviewBg = document.getElementById('custom-preview-bg');
    previewBox = document.getElementById('preview-box');
    previewBg.addEventListener('input', (event) => {
        customPreviewBg.style.backgroundColor = event.target.value;
        previewBox.style.backgroundColor = event.target.value;
    });

    textUpdate();
}
function textUpdate() {
    var fsize = document.getElementById('font-size');
    var text = document.getElementById('text');
    var fsinput = document.getElementById('font-size-input').value;
    var tinput = document.getElementById('text-input').value;
    var cinput = document.getElementById('text-color-input').value;
    var html_span = document.getElementById('html-span');

    fsize.innerHTML = text.style.fontSize;
    html_span.innerHTML = '&lt;span class="header-text"&gt;' + tinput + '&lt;/span&gt';
    text.innerHTML = tinput;
    text.style.fontSize = fsinput + "px";
    text.style.color = cinput;

    colorPicker.value = cinput;
    customColorPicker.style.backgroundColor = cinput;

    document.getElementById("css-font-size").innerHTML = "font-size: " + fsinput + "px;<br>";
    document.getElementById("css-color").innerHTML = "color: " + cinput + ";<br>";
    if (textShadow.checked) {
        var hs_value = document.getElementById("hs-input").value;
        var vs_value = document.getElementById("vs-input").value;
        var blur_radius = document.getElementById("blur-input").value;
        var sc_input = document.getElementById("shadow-color-input").value;
        var s_opacity = document.getElementById('opacity-input').value;
        var hex_opacity = decimalToHex(Math.ceil((255 / 100) * s_opacity), 2);

        shadowColorPicker.value = sc_input;
        customShadowColorPicker.style.backgroundColor = sc_input;

        document.getElementById("hs-value").innerHTML = hs_value + "px";
        document.getElementById("vs-value").innerHTML = vs_value + "px";
        document.getElementById("blur-value").innerHTML = blur_radius + "px";
        document.getElementById("opacity-value").innerHTML = s_opacity + "%";

        document.getElementById("css-text-shadow").innerHTML = "text-shadow: " + sc_input + hex_opacity + " " + hs_value + "px " + vs_value + "px " + blur_radius + "px;<br>";
        text.style.textShadow = sc_input + hex_opacity + " " + hs_value + "px " + vs_value + "px " + blur_radius + "px";
    } else {
        document.getElementById("css-text-shadow").innerHTML = "";
        text.style.textShadow = null;
    }
    if (decoration.checked == false) {
        document.getElementById("css-text-decoration").innerHTML = "text-decoration: none;<br>";
        text.style.textDecoration = "none";
    } else {
        var dec_style = "";
        if (underline.checked == true) {
            dec_style += overline.checked ? "underline " : "underline";
        }
        if (overline.checked == true) {
            dec_style += "overline";
        }
        if (lineThrough.checked == true) {
            dec_style += overline.checked || underline.checked ? " line-through" : "line-through";
        }
        if (dec_style == "") {
            dec_style = "none";
        }
        document.getElementById("css-text-decoration").innerHTML = "text-decoration: " + dec_style + ";<br>";
        text.style.textDecoration = dec_style;
    }
}
window.onload = startUp;