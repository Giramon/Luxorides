document.getElementById("main-action").onclick=function () {
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
}
document.getElementById("price-action").onclick=function() {
    if (document.getElementById ("name").value == "") {
        alert("Заполните поле имя");
    } else if (document.getElementById ("phone").value == "") {
        alert("Заполните поле номер");
    } else if (document.getElementById ("car").value == "") {
        alert("Заполните поле Автомобиль");
    }else {
        alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время");
    }
}
