const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

//"Tıklanan butona  göre hesaplama yapacak bir fonksiyon tanımladım. 
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    // Çıktıda '%' varsa, değerlendirmeden önce onu '/100' ile değiştirdim.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    // Eğer DEL düğmesine basıldıysa, çıktının son karakterini kaldırın.
    output = output.toString().slice(0, -1);
  } else {
    //Eğer çıktı boşsa ve tıklanan buton özel bir karakterse, geri dönün. 
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

//Butonlara bir eventlistener() ekleyin ve tıklamada calculate() fonksiyonunu çağırın.
buttons.forEach((button) => {
  //Buton tıklayıcısı, dataset değerini argüman olarak kullanarak calculate() fonksiyonunu çağırmalıdır.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});