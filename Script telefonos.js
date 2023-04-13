let telefono = "+52 3442621983"

/* const startsWith = telefono.substring(0, 3);

const correctedPhoneNumber = startsWith === '+54' 
  ? telefono.charAt(3) !== '9' ? '+549' + telefono.substring(3) : telefono 
  : startsWith === '+52' 
    ? telefono.charAt(3) !== '1' ? '+521' + telefono.substring(3) : telefono 
    : startsWith === '+549' 
      ? telefono.length === 12 ? telefono : '+549' + '9' + telefono.substring(5) 
      : startsWith === '+521' 
        ? telefono.length === 12 ? telefono : '+521' + '1' + telefono.substring(5) 
        : telefono;


console.log(correctedPhoneNumber);
return correctedPhoneNumber;
 */

let correctedPhoneNumber = telefono;

const startsWith = telefono.substring(0, 3)

if (startsWith === '+54') {
  if (telefono.charAt(3) !== '9') {
    correctedPhoneNumber = '+549' + telefono.substring(3);
  }
} else if (startsWith === '+52') {
  if (telefono.charAt(3) !== '1') {
    correctedPhoneNumber = '+521' + telefono.substring(3);
  }
}



console.log(correctedPhoneNumber);
return correctedPhoneNumber;