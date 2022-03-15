let radiologia = [
  {
    hora: 1100,
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: 1130,
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: 1500,
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: 1530,
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: 1600,
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
];

let traumatologia = [
  {
    hora: 1500,
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
  {
    hora: 1530,
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: 1100,
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: 1600,
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
  {
    hora: 1130,
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
];

let dental = [
  {
    hora: 1530,
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17666419-0",
    prevision: "FONASA",
  },
  {
    hora: 1600,
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14989389-K",
    prevision: "FONASA",
  },
  {
    hora: 1100,
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9878782-1",
    prevision: "FONASA",
  },
  {
    hora: 1130,
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15345241-3",
    prevision: "ISAPRE",
  },
  {
    hora: 1500,
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16445345-9",
    prevision: "ISAPRE",
  },
];
// referencias

let divHorasRadiologia = document.querySelector("#horasRadiologia");
let divHorasTraumatologias = document.querySelector("#horasTraumatologias");
let divHorasDental = document.querySelector("#horasDental");

function mostrarHoras(hora, div) {
  let primeraHora = hora[0];
  let ultimaHora = hora[hora.length - 1];
  let nuevoParrafo = document.createElement("p");
  let contenidoParrafo = document.createTextNode(
    `Primera atencnion: ${primeraHora.paciente} - ${primeraHora.prevision} | Ultima atencnion: ${ultimaHora.paciente} - ${ultimaHora.prevision} `
  );
  nuevoParrafo.appendChild(contenidoParrafo);
  div.appendChild(nuevoParrafo);
}

function recorrer(item) {
  return item.map(function (atencion) {
    return `
            <tr>
              <td>${atencion.hora}</td>
              <td>${atencion.especialista}</td>
              <td>${atencion.paciente}</td>
              <td>${atencion.rut}</td>
              <td>${atencion.prevision}</td>
            </tr>
          `;
  });
}
mostrarHoras(radiologia, divHorasRadiologia);
mostrarHoras(traumatologia, divHorasTraumatologias);
mostrarHoras(dental, divHorasDental);

document.write(`
  <table>
    <thead>
      <tr>
        <th>Hora</th>
        <th>Medico</th>
        <th>Paciente</th>
        <th>Rut</th>
        <th>Prevision</th>
      </tr>
    </thead>
    <tbody>
    ${recorrer(radiologia)}
    ${recorrer(traumatologia)}
    ${recorrer(dental)}
    </tbody>
  </table>
`);
