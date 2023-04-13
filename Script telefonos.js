let telefono = "+52 3442621983"

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

return correctedPhoneNumber;