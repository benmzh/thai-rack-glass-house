var currentDate = new Date(new Date().getTime());
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear()
document.write("<b>" + day + "/" + month + "/" + year + "</b>")
