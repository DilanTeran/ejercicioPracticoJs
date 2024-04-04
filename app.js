const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Fisica 1",
        nota: 7
    },{
        nombre: "Calculo",
        nota: 8
    },{
        nombre: "Bases de datos",
        nota: 9
    },{
        nombre: "Matematicas discretas",
        nota: 7
    },{
        nombre: "Programacion",
        nota: 8
    }
]

const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if (materia == undefined) reject("La materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*1400);
    })
}

const devolverMaterias = async ()=>{
    let materia = []
    for (let i = 0; i < materias.length; i++){
        materia[i] = await obtenerMateria(i);
        let newHTMLCODE = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>
        `;
        materiasHTML.innerHTML += newHTMLCODE;
    }
}

devolverMaterias()