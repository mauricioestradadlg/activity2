class User {
    constructor(nombre, comentario) {
        this.nombre = nombre;
        this.comentario = comentario;
    }
}

const comentariosIniciales = [
    new User("Mau", "Quisiera visitar CDMX!!"),
    new User("Betty", "Cancun es mi segundo hogar :D."),
    new User("Diego", "Oaxaca es muy bonito."),
    new User("Manuel", "Hubieran puesto Los Cabos en la lista :(."),
    new User("Alan", "Vayan al Coco Bongo en Cancun, muy cool la verdad.")
];

const users = [...comentariosIniciales];

function comentarios() {
    var name = document.getElementById("nombre").value;
    var commentary = document.getElementById("comentario").value;

    var usuario = new User(name, commentary);
    users.push(usuario);

    window.alert("Comentario enviado con éxito!");
    console.log(users);

    mostrarListaDeComentarios();
}

function mostrarListaDeComentarios() {
    const usersElement = document.getElementById("listaComentarios");

    // Limpiar la lista antes de volver a mostrar
    usersElement.innerHTML = "";

    users.forEach(usuario => {
        const listItem = document.createElement("li");
        listItem.textContent = `${usuario.nombre}: ${usuario.comentario}`;
        usersElement.appendChild(listItem);
    });
}

mostrarListaDeComentarios();




