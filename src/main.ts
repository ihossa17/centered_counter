import { factory } from './factory';

let count = factory(0, 1);

const start_at_control = document.getElementById('start_at') as HTMLInputElement;

const step_control = document.getElementById('step') as HTMLInputElement;

const count_button = document.querySelector('.count_button') as HTMLButtonElement;

const current_count = document.querySelector('.current_count') as HTMLSpanElement;

const isNumeric = (val: string): boolean => {
  return !isNaN(Number(val));
};

const validateFields = () => {
  const errorElement = document.querySelector('.error') as HTMLSpanElement;

  if (!start_at_control.value || !step_control.value) {
    !errorElement && (current_count.innerHTML = 'All inputs must be filled');
    return true;
  }
  if (!isNumeric(start_at_control.value) || !isNumeric(step_control.value)) {
    !errorElement && (current_count.innerHTML = 'Please enter a valid number');
    return true;
  }

  return false;
};

function update_count() {
  const isErrorFields = validateFields();

  if (isErrorFields) {
    return;
  }

  const resultValue = count();
  current_count.innerHTML = String(resultValue);
}

function update_count_and_reset_counter() {
  const isErrorFields = validateFields();

  if (isErrorFields) {
    return;
  }

  count = factory(Number(start_at_control.value), Number(step_control.value));
  current_count.innerHTML = String(start_at_control.value);
}

start_at_control?.addEventListener('input', () => {
  update_count_and_reset_counter();
});

step_control?.addEventListener('input', () => {
  update_count_and_reset_counter();
});

count_button.addEventListener('click', update_count);
