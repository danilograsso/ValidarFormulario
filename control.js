var form = document.querySelector('form');
var fname = document.getElementById('email');
var fclave = document.getElementById('lclave');
var submit = document.getElementById('submit');


  form.onsubmit = function(e) {
    if (email.value === '' && lclave.value === '') {
      alert('El formulario no ha podido enviarse.\nPor favor ingrese su usuario y contraseña.')
      return false;
    }
    
    else if (email.value === ''){
      alert('El formulario no ha podido enviarse.\nPor favor ingrese su usuario.')
      return false;
    }
      else if (lclave.value === '') {
        e.preventDefault();
        alert ('El formulario no ha podido enviarse.\nPor favor ingrese su contraseña');
        return false;
      } 
    
    else 
    {
      alert("Los datos han sido ingresados correctamente.\nMuchas gracias.");
      return true;
    }
  } 

