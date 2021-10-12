function submitForm() {
  if (validateForm()) {
    if (confirm("Apakah anda sudah yakin?")) {
      window.location.href = "succes.html";
    }
  }
}

function backForm() {
  window.location.href = "index.html";
}

function validateForm() {
  if (document.forms["formMahasiswa"]["nama"].value == "") {
    alert("Nama Tidak Boleh Kosong");
    document.forms["formMahasiswa"]["nama"].focus();
    return false;
  }

  if (document.forms["formMahasiswa"]["nrp"].value == "") {
    alert("NRP Tidak Boleh Kosong");
    document.forms["formMahasiswa"]["nrp"].focus();
    return false;
  } else if (isNaN(document.forms["formMahasiswa"]["nrp"].value)) {
    alert("NRP Harus Berupa Angka");
    document.forms["formMahasiswa"]["nrp"].focus();
    return false;
  }

  if (document.forms["formMahasiswa"]["domisili"].value == "") {
    alert("Domisili Tidak Boleh Kosong");
    document.forms["formMahasiswa"]["domisili"].focus();
    return false;
  }

  if (document.forms["formMahasiswa"]["email"].value == "") {
    alert("Email Tidak Boleh Kosong");
    document.forms["formMahasiswa"]["email"].focus();
    return false;
  }
  if (document.forms["formMahasiswa"]["email"].value.indexOf("@") == -1) {
    alert("Pastikan format email yang dimasukkan sudah benar.");
    document.forms["formMahasiswa"]["email"].focus();
    return false;
  }
  if (document.forms["formMahasiswa"]["email"].value.indexOf(".") == -1) {
    alert("Pastikan format email yang dimasukkan sudah benar.");
    document.forms["formMahasiswa"]["email"].focus();
    return false;
  }

  if (document.forms["formMahasiswa"]["jurusan"].selectedIndex < 1) {
    alert("Anda Belum Memilih Jurusan.");
    document.forms["formMahasiswa"]["jurusan"].focus();
    return false;
  }

  if (document.forms["formMahasiswa"]["vaksin"].value < 1) {
    alert("Anda Belum Memilih Status Vaksinasi.");
    document.forms["formMahasiswa"]["vaksin"].focus();
    return false;
  }

  return true;
}
