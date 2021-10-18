if (document.readyState=='loading') {
    document.addEventListener('DOMContentLoaded',listo)
}else{
    listo()
}
function listo() {
    ocultar=document.getElementsByClassName('inputs')
    btnOpciones=document.getElementsByClassName('bg-primary text-white')
    for (let i = 0; i < btnOpciones.length; i++) {
        opciones = btnOpciones[i];
        opciones.addEventListener('click',function () {
            ocultar=document.getElementsByClassName('inputs')

            for (let i = 0; i < ocultar.length; i++) {
                 input = ocultar[i];
                 if (input.style.display==='none') {
                    input.style.display='block';
                }else{
                    input.style.display='none';
                }
            }
        })
    }
    //horarios independiente
    horarios=document.getElementsByName('Selhorario');
    for (let i = 0; i < horarios.length; i++) {
        horario = horarios[i];
        horario.addEventListener('change',cambiarHora)
        console.log(horario)
    }
    //butacas independiente
    butacas=document.getElementsByName('Selbutacas');
    for (let i = 0; i < butacas.length; i++) {
        butaca = butacas[i];
        butaca.addEventListener('change',cambiarButaca)
        
    }
    //enviardatos independientes
    enviar=document.getElementsByName('guardar');
    for (let i = 0; i < enviar.length; i++) {
        guardarDato = enviar[i];
        guardarDato.addEventListener('click',guardarDatos)
        
    }
    //cantidad de tickets  independiente
    cantidadTi=document.getElementsByName('tickets');
    for (let i = 0; i < cantidadTi.length; i++) {
        tickets = cantidadTi[i];
        tickets.addEventListener('change',Cantickets)
        tickets.addEventListener('keyup',Cantickets)
    }
}
function cambiarHora(event) {
    horario=event.target;
    horarioValor=horario.value
    if (horarioValor==0) {
        horarioValor=false;
    }if (horarioValor==1) {
        horarioValor="5:00pm-6:30pm";
    } if (horarioValor==2) {
        horarioValor="7:00pm-7:30pm";
    }
    console.log(horarioValor)
    return horarioValor;
}
function cambiarButaca(event) {
    butaca=event.target;
    butacaValor=butaca.value;
    if (butacaValor==0) {
        butacaValor=false;
    }if (butacaValor==1) {
        butacaValor="Premium";
    } if (butacaValor==2) {
        butacaValor="Economica";
    }
    console.log(butacaValor)
    return butacaValor
}
function Cantickets() {
    tickets=event.target;
    CantidadTic=tickets.value
    console.log(CantidadTic)
}
function guardarDatos(event) {
    guardarDato=event.target;
    nombrePeli=guardarDato.id;
    console.log(nombrePeli)
    
}
