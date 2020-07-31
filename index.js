console.log("Hello !!")

var download = require('download-file')
 
var url = "https://github.com/qontract/qontract/releases/download/0.13.1/qontract.jar"
 
var options = {
    directory: "./qontract/lib/test",
    filename: "qontract.jar"
}
 
download(url, options, function(err){
    if (err) throw err
    console.log("meow")
})