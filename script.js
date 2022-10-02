const fileInput = document.querySelector("input"),
downloadBtn = document.querySelector("button");

downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
});

// alert (fileInput.value);
alert ("https://cors-anywhere.herokuapp.com/" + fileInput.value);

function fetchFile(url) {
    fetch("https://circumvent-cors.herokuapp.com/" + url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        downloadBtn.innerText = "Download File";
        URL.revokeObjectURL(tempUrl);
        aTag.remove();


    }).catch(() => {
        alert("Failed to download file!");
        downloadBtn.innerText = "Download File";
    });
}


// var http_request;
// http_request = new XMLHTTPRequest();
// http_request.onreadystatechange = function () { /* .. */ };
// http_request.open("POST", "https://sso.moxio.com");
// http_request.withCredentials = true;
// http_request.setRequestHeader("Content-Type", "application/json");
// http_request.send({ 'request': "authentication token" });
// Trying to circumvent this with {mode: 'no-cors'} does not work as one might 
// expect: although 'no-cors' will ignore the CORS headers of the server the response 
// content will then be inaccessible to your javascript code

