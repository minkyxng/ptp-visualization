// function openTextFile() {
//     var input = document.createElement("input");
//     input.type = "file";
//     input.accept = ".\log\ptplog_slave.txt";
//     input.onchange = function (event) {
//         processFile(event.target.files[0]);
//     };
//     input.click();
// }
// function processFile(file) {
//     var reader = new FileReader();
//     reader.onload = function () {
//         output.innerText = reader.result;
//     };
//     reader.readAsText(file, /* optional */ "euc-kr");
// }
