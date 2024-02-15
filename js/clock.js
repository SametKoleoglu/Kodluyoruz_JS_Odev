function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("myClock").innerText += time;

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var currentDate = date.toLocaleDateString("en-US", options);
  document.getElementById("myDate").innerText += currentDate;

  // Saniyenin her saniye bir artışını göstermek için saniye değeri kullanılır
  var seconds = date.getSeconds();
  document.getElementById("mySeconds").innerText += seconds;

  setInterval(showTime(), 1000); // Her saniye güncellenmesi için 1000 milisaniye (1 saniye) bekler.
}

function setName() {
  var name = prompt("Adınızı giriniz:");
  document.getElementById("myName").innerText = name;
}

setName(); // Otomatik olarak isim sormak için sayfa yüklendiğinde çalıştırılır.
showTime(); // Saat, tarih ve saniye bilgisini göstermek için saat sayfasının yüklenmesini beklemeden çalıştırılır.
