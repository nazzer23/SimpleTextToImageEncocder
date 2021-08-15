function convertToImage(text) {
    var canvas = document.getElementById("testing");
    var canvasContext = canvas.getContext("2d");
    var result = [];
    var data = chunkString(text, 3);

    for (let i = 0; i < data.length; i++) {
        let count = 0;
        result[i] = [];
        for (let a = 0; a < 3; a++) {
            let val = 0;
            count++;
            if (data[i].length >= count) {
                val = data[i].charCodeAt(a);
            }
            switch (count) {
                case 1:
                    result[i]["r"] = val;
                    break;
                case 2:
                    result[i]["g"] = val;
                    break;
                case 3:
                    result[i]["b"] = val;
                    break;
            }
        }
    }
    canvas.width = result.length;
    for (let i = 0; i < result.length; i++) {
        let rgbData = result[i];
        canvasContext.fillStyle = `rgb(${rgbData["r"]}, ${rgbData["g"]}, ${rgbData["b"]})`;
        canvasContext.fillRect(i, 0, 1, 1);
    }
    document.getElementById("imageTag").src = canvas.toDataURL();
}

function chunkString(str, length) {
    return str.match(new RegExp('.{1,' + length + '}', 'g'));
}