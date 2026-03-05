/* global Swal */

const button = document.querySelector("#btn");
const addTip = document.querySelector("#addTip");
const tipSelect = document.querySelector("#tip");

// Скрываем select по умолчанию (на всякий случай)
tipSelect.style.display = "none";

// Показать select по клику
addTip.addEventListener("click", function(e){
    e.preventDefault();
    tipSelect.style.display = "block";
});

// Основная функция расчёта
button.addEventListener("click", function(e){
    e.preventDefault();

    const bill = parseFloat(document.querySelector("#bill").value);
    const people = parseInt(document.querySelector("#people").value);
    const tip = parseFloat(tipSelect.value) || 0;

    // Валидация
    if (!bill || !people || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Пожалуйста, введите корректные значения',
        });
        return;
    }

    // Расчёт
    const accountPerPerson = bill / people;
    const tipPerPerson = (bill * tip) / people;
    const accountSumm = accountPerPerson + tipPerPerson;

    // Вывод
    document.querySelector("#perBill").textContent = accountPerPerson.toFixed(2);
    document.querySelector("#dividedTip").textContent = tipPerPerson.toFixed(2);
    document.querySelector("#billAndTip").textContent = accountSumm.toFixed(2);
});