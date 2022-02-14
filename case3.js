function View() {
  var data = document.getElementById('input').value;
  temp = data;

  jumlah = 1000000 * Math.floor(temp / 1000000);
  a = jumlah;

  jumlah = 100000 * Math.floor(temp / 100000);
  b = jumlah - a;

  jumlah = 10000 * Math.floor(temp / 10000);
  c = jumlah - a - b;

  jumlah = 1000 * Math.floor(temp / 1000);
  d = jumlah - a - b - c;

  jumlah = 100 * Math.floor(temp / 100);
  e = jumlah - a - b - c - d;

  jumlah = 10 * Math.floor(temp / 10);
  f = jumlah - a - b - c - d - e;

  jumlah = 1 * Math.floor(temp / 1);
  g = jumlah - a - b - c - d - e - f;

  document.getElementById('baris1').innerHTML = a;
  document.getElementById('baris2').innerHTML = b;
  document.getElementById('baris3').innerHTML = c;
  document.getElementById('baris4').innerHTML = d;
  document.getElementById('baris5').innerHTML = e;
  document.getElementById('baris6').innerHTML = f;
  document.getElementById('baris7').innerHTML = g;
}
