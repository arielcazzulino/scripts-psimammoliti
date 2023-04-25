function actualizarHorariosLibres() {
  let api_key = "insert api key";
  let base_id = "insert base ID";
  let max_records = 1000; // máximo número de registros por solicitud

  let url = "https://api.airtable.com/v0/" + base_id + "/Psicologas";

  let offset = ""; // inicializar el valor de offset como una cadena vacía
  let all_records = []; // array para almacenar todos los registros

  // recuperar todos los registros utilizando la paginación
  do {
    let response = UrlFetchApp.fetch(url + "?maxRecords=" + max_records + "&offset=" + offset, {
      headers: {
        Authorization: "insert Bearer Token"
      }
    });
    let data = JSON.parse(response.getContentText());
    let psicologas = data.records;

    // agregar los registros actuales al array de todos los registros
    all_records = all_records.concat(psicologas);

    // actualizar el valor de offset para la próxima solicitud
    offset = data.offset;
  } while (offset !== undefined);

  // Iterar sobre los registros de la tabla de Psicologas
  all_records.forEach(psicologa => {
    let disponibilidades = psicologa.fields["Disponibilidades 72hs"]; 
    let id = psicologa.id;
    let horarios_disponibles = 0;
    if(disponibilidades !== undefined && disponibilidades !== null){
      horarios_disponibles = Object.keys(disponibilidades).length
    }

    // Actualizar el campo "Horarios libres" con el número total de horarios disponibles
    let update_url = "https://api.airtable.com/v0/" + base_id + "/Psicologas/" + id;
    let payload = JSON.stringify({
      "fields": {
        "Horarios libres": horarios_disponibles,
        "Script horarios libres": true
      }
    })
    UrlFetchApp.fetch(update_url, {
      method: "PATCH",
      headers: {
        Authorization: "insert Bearer Token",
        "Content-Type": "application/json"
      },
      payload: payload
    });
  });
}