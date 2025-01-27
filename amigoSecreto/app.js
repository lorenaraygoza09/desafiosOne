let amigos = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value.trim();
  //trim() elimina espacios vacios en el texto
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    console.log(nombreAmigo);
    //agregar al nuevo nombre al array amigos
    amigos.push(nombreAmigo);
    //limpiar el input para el siguiente nombre
    document.getElementById("amigo").value = "";
    console.log(amigos);
    //llamar a la funcion para actualizar la lista
    imprimirAmigos();
  }
}

function imprimirAmigos() {
  //obtener el contenedor de la lista
  const ulListaAmigos = document.getElementById("listaAmigos");
  //limpiar la lista existente para evitar duplicados
  listaAmigos.innerHTML = "";
  //iterar el array y agregar un li por cada nombre añadido
  for (let i = 0; i < amigos.length; i++) {
    //crear un elemento li con cada iteracion
    const li = document.createElement("li");
    //añade el texto asignado al elemento li
    li.textContent = amigos[i];
    //agregar li al contenedor
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
    //limpia los nombres añadidos anteriormente para que solo quede el nombre sorteado
    const ulListaAmigos = document.getElementById("listaAmigos");
    ulListaAmigos.innerHTML = "";
  let amigoSorteado;
  if (amigos.length < 1) {
    console.log("No se ha añadido ningún nombre.");
  } else {
    amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    console.log(amigoSorteado);
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigoSorteado) {
    let li = document.createElement("li");
    li.textContent = "Tu amigo secreto es " + amigoSorteado;
    resultado.appendChild(li);
  }
}