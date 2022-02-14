function HitungNilai() {
  var nilai = document.getElementById('nilai').value;

  var grade;

  if (nilai >= 80) {
    grade = 'Memuaskan';
  } else if (nilai > 50 && nilai <= 79) {
    grade = 'Cukup';
  } else if (nilai >= 0 && nilai <= 50) {
    grade = 'Remedial';
  }
  document.getElementById('hasil_nilai').innerHTML = 'Hasil nilai : ' + grade;
}
