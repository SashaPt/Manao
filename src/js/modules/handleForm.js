import { controlScroll } from './popUp.js';

const validateFields = (fields, currentField) => {
  const urlPattern = new RegExp(
    /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i
  );
  let val = true;

  fields.forEach((field) => {
    const error = field.parentNode.querySelector('.error');
    if (field.required && !field.value) {
      if (field == currentField || !currentField) {
        if (error) error.textContent = 'Поле является обязательным';
        field.classList.add('invalid');
      }
      val = false;
      return;
    }
    if (field.type === 'url' && !urlPattern.test(field.value)) {
      if (field == currentField || !currentField) {
        if (error) error.textContent = 'Введите корректный адрес сайта';
        field.classList.add('invalid');
      }
      val = false;
      return;
    }
    if (error) error.textContent = '';
    field.classList.remove('invalid');
  });
  return val;
};

const parseData = (fields) => {
  return [...fields].map((field) => {
    const label = field.parentNode.querySelector('.label-name').textContent;
    const value = field.type == 'checkbox' ? field.checked : field.value;
    return { label, value };
  });
};

const onSubmit = (e, fields) => {
  e.preventDefault();

  const isValid = validateFields(fields);
  if (!isValid) return;

  const data = parseData(fields);
  console.table(data);

  fields.forEach((field) => {
    field.type == 'checkbox' ? (field.checked = false) : (field.value = '');
  });

  const popUp = document.querySelector('.pop-up');
  if (popUp) {
    popUp.classList.add('visible');
    controlScroll(popUp);
  }
};

export const handleForm = (form) => {
  const formSubmit = form.querySelector('button[type="submit"]');
  const fields = form.querySelectorAll('input, textarea');

  fields.forEach((field) => {
    field.addEventListener('change', () => {
      validateFields(fields, field);
    });
  });

  if (formSubmit) {
    formSubmit.addEventListener('click', (e) => onSubmit(e, fields, formSubmit));
  }
};
