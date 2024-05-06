document.getElementById('matriculeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var matriculeInput = document.getElementById('matricule').value;
    var vide = document.getElementById('videMessage');
    var valide = document.getElementById('valideMessage');
    var error = document.getElementById('errorMessage');
    var regex = /^[0-9]{4}(A[ABD-Z](0[0-9]|1[0-2])|AC(00|06|08)|BA00)$/;
    if(matriculeInput.trim()===''){
      vide.textContent = 'Le champ est vide!';
      valide.textContent = '';
      error.textContent = '';
      document.getElementById('matricule').value = '';
    }
    else if(regex.test(matriculeInput)) {
      valide.textContent = 'La matricule est Valide!';
      error.textContent = '';
      vide.textContent = '';
      document.getElementById('matricule').value = '';

    } else {
      error.textContent = 'La matricule est Invalid!'
      valide.textContent = '';
      vide.textContent = '';
      document.getElementById('matricule').value = '';
    }
  });
