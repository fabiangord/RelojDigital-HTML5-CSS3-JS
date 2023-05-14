const mostrarReloj = ()=>{
    let fecha = new Date()
    let hora = formatoHora(fecha.getHours())
    let minutos = formatoHora(fecha.getMinutes())
    let segundos = formatoHora(fecha.getSeconds())

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    const dias = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', ]
    const diaSemana = dias[fecha.getDay()]
    let dia = formatoFecha(fecha.getDate())
    let mes = meses[fecha.getMonth()]
    let fullFecha = `${diaSemana} ${dia}/${mes}`

    
    document.querySelector('.hora').textContent = `${hora}:${minutos}:${segundos}`
    document.querySelector('.fecha').textContent = fullFecha;

    document.querySelector('.contenedor').classList.toggle('animar');
    
}





const formatoHora = (hora)=>{
    if(hora < 10){
        hora = '0'+ hora
    }
    return hora
}


const formatoFecha = (fecha)=>{
    if(fecha < 10){
        fecha = '0'+ fecha
    }
    return fecha
}

setInterval(mostrarReloj, 1000)

