
document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');
    const btnCustom = document.getElementById('btnCustom');
    
    const bill = document.getElementById("number");
    const people = document.getElementById("people");
    
    const amount = document.querySelector(".amount strong");
    const total = document.querySelector('.total strong');
    
    const reset = document.getElementById("reset");

    // Funzione per calcolare la mancia e il totale
    function calculateTip(percentage) {
      const billValue = parseFloat(bill.value);
      const peopleCount = parseInt(people.value);
      
      if (!billValue || peopleCount <= 0) {
        amount.innerHTML = `<strong>$0.00</strong>`;
        total.innerHTML = `<strong>$0.00</strong>`;
        return;
      }

      const tipAmount = (billValue * (percentage / 100)) / peopleCount;
      const totalAmount = (billValue + billValue * (percentage / 100)) / peopleCount;

      amount.innerHTML = `<strong>$${tipAmount.toFixed(2)}</strong>`;
      total.innerHTML = `<strong>$${totalAmount.toFixed(2)}</strong>`;
    }

    // Event listeners per i pulsanti percentuali
    btn1.onclick = () => calculateTip(5);
    btn2.onclick = () => calculateTip(10);
    btn3.onclick = () => calculateTip(15);
    btn4.onclick = () => calculateTip(25);
    btn5.onclick = () => calculateTip(50);
    btnCustom.onclick = () => calculateTip(Math.random()*100)

    
    // Reset dei campi
    reset.onclick = function() {
      bill.value = '';
      people.value = '';
      amount.innerHTML = `<strong>$0.00</strong>`;
      total.innerHTML = `<strong>$0.00</strong>`;
    };
  });
