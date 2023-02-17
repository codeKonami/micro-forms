import { Operator, solver } from './solver';

window.addEventListener('error', (event) => {
  const { message, error } = event;
  handleError(error || message);
});

try {
  const button = document.getElementById('compute');
  const left = document.getElementById('left') as HTMLInputElement;
  const right = document.getElementById('right') as HTMLInputElement;
  const operator = document.getElementById('operator') as HTMLInputElement;
  const solution = document.getElementById('result') as HTMLInputElement;

  if (!button || !left || !right || !operator) {
    throw new Error('Missing elements.');
  }

  button.addEventListener('click', () => {
    const leftValue = left.valueAsNumber;
    const rightValue = right.valueAsNumber;
    const operatorValue = operator.value as Operator;

    const result = solver({ left: leftValue, right: rightValue, operator: operatorValue });

    solution.value = (result || 0).toFixed(2);
  });

  window.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      button.click();
    }
  });
} catch (error) {
  handleError(error);
}

function handleError(error: string | Error) {
  console.error(error);
  alert(error);
}
