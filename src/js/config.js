function abrirMenu()
{
    document.getElementById("menu").style.width="100%";
}

function closeMenu()
{
    document.getElementById("menu").style.width="0%";
}


    var contador = 1; //variável pública criada fora da function
	var img1= "./assets/moto_Eletrica1";
	var img2="./assets/moto_Hibrida1";
	var img3="./assets/moto_Personalizada1";
	var tempo= 1500; //1500(milessegundos) : 1000 (milessegundo) = 1.5s
	var exibir=setInterval("Exibindo()",tempo);

    function Exibindo()
    {
        document.images["slide"].src=eval("img"+contador);	
		
		if (contador<3)
			contador++;
		else
			contador=1;
	} 
    


function exibirprod(x)
{
    if( document.getElementById(x).className.indexOf("exibida") ==-1)
    {
      document.getElementById(x).className = document.getElementById(x).className.replace("escondida","exibida");
    }
    else
    {
     document.getElementById(x).className = document.getElementById(x).className.replace("exibida","escondida"); 
    }    
}