function abrirMenu()
{
    document.getElementById("menu").style.width="100%";
}

function closeMenu()
{
    document.getElementById("menu").style.width="0%";
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