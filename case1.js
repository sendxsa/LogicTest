function HitungPecahan() {
  
  var uang = document.getElementById('uang').value;
  var seratusribu, limapuluhribu, duapuluhribu, limaribu, seratus, limapuluh;
  var a, b, c, d, e, f;
  jumlah = parseInt(uang);

  seratusribu = jumlah % 100000;
  a = (jumlah - seratusribu) / 100000;
  document.getElementById('seratus_ribu').innerHTML = 'Jumlah Rp.100.000 : ' + a + ' Lembar';

  limapuluhribu = seratusribu % 50000;
  b = (seratusribu - limapuluhribu) / 50000;
  document.getElementById('limapuluh_ribu').innerHTML = 'Jumlah Rp.50.000 : ' + b + ' Lembar';

  duapuluhribu = limapuluhribu % 20000;
  c = (limapuluhribu - duapuluhribu) / 20000;
  document.getElementById('duapuluh_ribu').innerHTML = 'Jumlah Rp.20.000 : ' + c + ' Lembar';

  limaribu = duapuluhribu % 5000;
  d = (duapuluhribu - limaribu) / 5000;
  document.getElementById('limaribu').innerHTML = 'Jumlah Rp.5000 : ' + d + ' Lembar';

  seratus = limaribu % 100;
  e = (limaribu - seratus) / 100;
  document.getElementById('seratus').innerHTML = 'Jumlah Rp.100 : ' + e + ' Lembar';

  limapuluh = seratus % 50;
  f = (seratus - limapuluh) / 50;
  document.getElementById('limapuluh').innerHTML = 'Jumlah Rp.50 : ' + f + ' Lembar';
}
