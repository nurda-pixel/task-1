// Расчёт сложных процентов (начисление раз в год).
// Все значения приводятся к числам, неверный ввод возвращает null.
function calculate(principal, rate, years) {
  const p = Number(principal);
  const r = Number(rate);
  const y = Number(years);

  if (!Number.isFinite(p) || !Number.isFinite(r) || !Number.isFinite(y) || p < 0 || r < 0 || y < 0) {
    return null;
  }

  const total = p * Math.pow(1 + r / 100, y);
  return {
    total: Math.round(total * 100) / 100,
    interest: Math.round((total - p) * 100) / 100,
  };
}

function handleClick() {
  const principalEl = document.getElementById('principal');
  const rateEl = document.getElementById('rate');
  const yearsEl = document.getElementById('years');
  const resultEl = document.getElementById('result');

  // Защита от TypeError: элементы могут отсутствовать на странице
  if (!principalEl || !rateEl || !yearsEl || !resultEl) {
    return;
  }

  const result = calculate(principalEl.value, rateEl.value, yearsEl.value);

  if (result === null) {
    resultEl.textContent = 'Введите корректные неотрицательные числа.';
    resultEl.className = 'error';
    return;
  }

  resultEl.className = '';
  resultEl.textContent =
    'Проценты: ' + result.interest.toLocaleString('ru-RU') +
    ' | Итого: ' + result.total.toLocaleString('ru-RU');
}

if (typeof document !== 'undefined') {
  const button = document.getElementById('calculate-btn');
  if (button) {
    button.addEventListener('click', handleClick);
  }
}

// Экспорт для Jasmine и Webpack (в браузере module не определён)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculate };
}
