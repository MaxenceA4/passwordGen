    function generatePassword() {
    let length = document.getElementById("length").value;
    let letters = document.getElementById("letters").checked;
    let numbers = document.getElementById("numbers").checked;
    let symbols = document.getElementById("symbols").checked;

    let password = "";
    let chars = "";

    if (letters) {
    chars += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
    if (numbers) {
    chars += "0123456789";
}
    if (symbols) {
    chars += "!§$%&/()=?*+#-.,;:_";
}

    for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
}

    document.getElementById("output").value = password;
}

    function copyPassword() {
    let copyText = document.getElementById("output");
    let textToCopy = copyText.textContent || copyText.innerText;

    navigator.clipboard.writeText(textToCopy)
    .then(() => {
    alert("Copied the text: " + textToCopy);
})
    .catch((err) => {
    console.error("Unable to copy text: " + err);
});
}

    document.getElementById("length").addEventListener("input", function () {
    document.getElementById("liveLengthOutput").value = document.getElementById("length").value;
});

    document.getElementById("letters").addEventListener("change", function () {
    eitherLettersOrNumbersHaveToBeChecked();
});
    document.getElementById("numbers").addEventListener("change", function () {
    eitherLettersOrNumbersHaveToBeChecked();
});

    function eitherLettersOrNumbersHaveToBeChecked() {
    let letters = document.getElementById("letters").checked;
    let numbers = document.getElementById("numbers").checked;
    // if one is deactivated, disable the other
    switch (letters) {
    case true:
    document.getElementById("numbers").disabled = false;
    break;
    case false:
    document.getElementById("numbers").disabled = true;
    break;
}
    switch (numbers) {
    case true:
    document.getElementById("letters").disabled = false;
    break;
    case false:
    document.getElementById("letters").disabled = true;
    break;
}
}


    document.getElementById("length").addEventListener("change", generatePassword);
    document.getElementById("letters").addEventListener("change", generatePassword);
    document.getElementById("numbers").addEventListener("change", generatePassword);
    document.getElementById("symbols").addEventListener("change", generatePassword);
    generatePassword();
