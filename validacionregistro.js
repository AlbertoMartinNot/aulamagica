function valDNI(){
    var valor=document.getElementById("dni").value;
    var si=true;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 
    if( !(/^\d{8}[A-Za-z]$/.test(valor)) ) {
      si=false;
    }
 
    if(valor.charAt(8).toUpperCase() != letras[(valor.substring(0, 8))%23]) {
      si=false;
    }

    if(!si){
      document.getElementById("vdni").innerHTML=" el dni no es valido";
    }else{
      document.getElementById("vdni").innerHTML=" ";
    }
    return si;
  }

  function valUsu(){
    var valor=document.getElementById("usu").value;
    var si=true;

    if(!(/^[A-Za-z][A-Za-z0-9]*/.test(valor))){
      si=false;
    }

    if(/\:|\-|\¡|\#|\?|\ç|\,|\;|\$|\%|\&|\/|\(|\)|\=|\*|\+|\"/.test(valor)){
      si=false;
    }

    if(!si){
      document.getElementById("vusu").innerHTML=" el usuario no es valido";
    }else{
      document.getElementById("vusu").innerHTML=" ";
    }
    return si;
  }

  function valPass(){
    var valor=document.getElementById("psw").value;
    var si=true;

    if(!(/\w/.test(valor))){
      si=false;
    }

    if (valor.length<5) {
      si=false;
    }

    if(!si){
      document.getElementById("vpsw").innerHTML=" la contrasenia no es valida, debe tener mas de 5 caracteres";
    }else{
      document.getElementById("vpsw").innerHTML=" ";
    }
    return si;

  }

  function valCorreo(){
    var valor=document.getElementById("correo").value;
    var si=true;

    if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valor))){
      si=false;
    }
    if(!si){
      document.getElementById("vemail").innerHTML=" la direccion email no es valida";
    }else{
      document.getElementById("vemail").innerHTML=" ";
    }
    return si;
  }

  function valTodo(){
    var v1,v2,v3,v4;
    v1=valDNI();
    v2=valUsu();
    v3=valPass();
    v4=valCorreo();


    if(v1==true&&v2==true&&v3==true&&v4==true){
      document.getElementById("enviar").removeAttribute("disabled");
    }
  }