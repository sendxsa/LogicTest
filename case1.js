function HitungPecahan() {
  /*
  var uang, temp;
  var data = [100000, 50000, 20000, 5000, 100, 50];
  var i, jml;
  var uang = document.getElementById('uang').value;
  var temp = uang;

  for (i = 0; i <= 6; i++) {
    jml = temp / data[i];
    temp = temp - data[i] * jml;
    document.getElementById('pecahan').innerHTML = 'Jumlah : ' + data[i] + jml + ' Lembar';
  }
  */
  /*main(){
   
  long int uang,temp,data[7]={100000,50000,20000,10000,5000,2000,1000};
  int i,jml;
   
  printf("\nMasukan Jumlah Uang : ");scanf("%li",&uang);
  printf("\n========================================");
   
  temp=uang;
  printf("\nOutput Pecahan Uang : ");
  for(i=0;i<=6;i++){
      jml = temp / data[i];
      temp = temp - (data[i]*jml);
   
      printf("\n%d) %li : %d",i,data[i],jml);
      if(temp == 0) {
          break;
      }
  }
   
  getch();
   
  }
  */

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
