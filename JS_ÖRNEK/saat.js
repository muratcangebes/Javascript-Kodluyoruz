let user = prompt("Adinizi girin : ")

let myName = document.querySelector("#myName")

if(user.length <= 0){
    alert("Lütfen bir isim giriniz !")
    location.reload(); // sayfa yenileme !
}else {
    myName.innerHTML = `${user}`
}

function time() {
  var günler =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
  let date = new Date()

  let saat = date.getHours()
  var dakika = date.getMinutes();
  var saniye = date.getSeconds();
  var gün= date.getDay();

  document.getElementById("myClock").innerHTML = saat+":"+dakika+":"+saniye+" | "+günler[gün];
}
setInterval(time,1000)

