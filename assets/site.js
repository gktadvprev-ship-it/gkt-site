{const f=document.getElementById("waform");
if(f){f.addEventListener("submit",e=>{e.preventDefault();const v=id=>document.getElementById(id).value.trim();const err=document.getElementById("f-err");
if(!v("f-nome")){err.textContent="Informe seu nome.";return}if(!document.getElementById("f-ok").checked){err.textContent="Marque a concordância para continuar.";return}
err.textContent="";const t=`Olá! Vim pelo site.\nNome: ${v("f-nome")}\nCidade: ${v("f-cidade")}\nAssunto: ${v("f-area")}\nResumo: ${v("f-msg")}`;
location.href="https://wa.me/5551999443190?text="+encodeURIComponent(t)})}}