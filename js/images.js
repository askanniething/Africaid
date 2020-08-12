const images = document.getElementsByClassName("img");
for (const element of images) {
    var num = Math.floor((Math.random() * 16) + 1);
    if (num <= 9) {
        element.src = "images/pic0" + num + ".jpg";
    } else {
        element.src = "images/pic" + num + ".jpg";
    }
}