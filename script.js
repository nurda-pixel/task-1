const calculate = () => {
  const principalEl = document.getElementById("principal");
  const rateEl = document.getElementById("rate");
  const timeEl = document.getElementById("time");
  const result = document.getElementById("result");

  // Защита от TypeError: если элемента нет на странице, выходим
  if (!principalEl || !rateEl || !timeEl || !result) {
    return;
  }

  // Приводим значения из полей ввода (строки) к числам
  const p = Number(principalEl.value);
  const r = Number(rateEl.value);
  const t = Number(timeEl.value);

  if (!Number.isFinite(p) || !Number.isFinite(r) || !Number.isFinite(t)) {
    result.innerHTML = "<div>Please enter valid numbers.</div>";
    return;
  }

  const simpleInterest = (p * r * t) / 100;
  const amount = p + simpleInterest;

  result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};

// Экспорт для Jasmine и Webpack (в браузере module не определён)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { calculate };
}
