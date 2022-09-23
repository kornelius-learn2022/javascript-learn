const insert = (arg) => {
  document.hitung.hasil.value = document.hitung.hasil.value + arg;
};
const result = () => {
  const angka = document.hitung.hasil.value;
  document.hitung.hasil.value = eval(angka);
};
const del = () => {
  const angka = document.hitung.hasil.value;
  document.hitung.hasil.value = angka.Substring(0, angka.length);
};
const clear = () => {
  document.hitung.hasil.value = "";
};
