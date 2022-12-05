const currentYearElement = document.querySelector('#current-year');
currentYearElement.textContent = new Date().getFullYear();

const ageLuis = document.querySelector('#luisAge');
if (ageLuis) {
  ageLuis.textContent = new Date().getFullYear() - 1997;
}

const ageCaio = document.querySelector('#caioAge');
if (ageCaio) {
  ageCaio.textContent = new Date().getFullYear() - 1996;
}

const ageYago = document.querySelector('#yagoAge');
if (ageYago) {
  ageYago.textContent = new Date().getFullYear() - 1999;
}