let table = base.getTable("tbl5V1LVSbjBRdY8U");
let field = table.getField("Motivo de bloqueo automático");
// Name of the element you want to delete
let reasonToRemove = "Vacaciones"
// Id of the record you want to update
let recordToUpdate ="rec9hjP72HwAAqdnO"

// Load all of the records in the table
let result = await table.selectRecordsAsync({fields: [field]});

let record = result.getRecord(recordToUpdate)
let updadatedRecord = await table.updateRecordAsync(recordToUpdate,{
"Motivo de bloqueo automático": record.getCellValue("Motivo de bloqueo automático").filter(option=>option.name!==reasonToRemove)
})