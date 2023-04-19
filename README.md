![ops psi mammoliti](https://user-images.githubusercontent.com/66747959/231828975-ab0754ac-d29d-451a-83b6-228dad38be92.jpg)
# Scripts PsiMammoliti
Este repositorio contiene varios scripts que pueden ser útiles para implementar en diferentes escenarios de Make o automations de Airtable. Los scripts de este repositorio están organizados por carpetas según el lenguaje de programación utilizado para su desarrollo. Dentro de dichas carpetas, los scripts están ordenados alfabéticamente y cada uno cumple una función específica. A continuación se describe brevemente lo que hace cada uno:

## 📁 Carpeta Javascript:

### Capitalize.js:
Este script contiene una función que capitaliza la primera letra de cada palabra en una cadena de texto. La función divide el texto en un array de palabras, capitaliza la primera letra de cada palabra y luego las une nuevamente en una nueva cadena de texto. Esta función puede ser útil para normalizar nombres o títulos de manera uniforme.

### Dates.js:
Este script contiene un código que permite calcular los días transcurridos desde una fecha de inicio de vacaciones hasta la fecha actual. El script utiliza la función Date() para obtener la fecha actual y la fecha de inicio de vacaciones almacenada en una variable llamada "vacacionesDesde". Luego, calcula la diferencia de tiempo en milisegundos entre ambas fechas, la convierte a días y muestra el resultado en la consola utilizando la función console.log().

### Teléfonos.js:
Este script contiene un código que corrige los números de teléfono que no están en el formato correcto. Si el número de teléfono comienza con "+54" o "+52", la función verifica si el cuarto dígito es el número "9" o "1", respectivamente. Si el número no cumple con este formato, la función agrega el número correcto para asegurarse de que esté en el formato adecuado. Este script puede ser útil para normalizar los números de teléfono en un formato específico antes de enviar mensajes o realizar llamadas.

### delete_element_from_multiselect.js:
Este script permite eliminar un elemento específico de un campo multiselect en una tabla de Airtable. El script utiliza la API de Airtable para obtener los registros de la tabla y actualiza el registro específico que se desea modificar.

Para utilizar este script, se deben seguir los siguientes pasos:

1. Abrir el script y definir la variable "table" como la tabla en la que se desea eliminar el elemento del campo multiselect.
2. Definir la variable "field" como el campo multiselect en el que se desea eliminar el elemento.
3. Definir la variable "reasonToRemove" como el nombre del elemento que se desea eliminar.
4. Definir la variable "recordToUpdate" como el ID del registro que se desea actualizar.

El script cargará todos los registros de la tabla y buscará el registro específico que se desea actualizar utilizando el ID del registro. Luego, obtendrá el valor actual del campo multiselect en el registro y filtrará los elementos del campo para excluir el elemento que se desea eliminar. Finalmente, actualizará el registro con el nuevo valor del campo multiselect sin el elemento eliminado. Es importante tener en cuenta que este script está diseñado para modificar un registro específico y eliminar un elemento específico del campo multiselect. Si se desea eliminar el mismo elemento de varios registros, se debe ejecutar el script varias veces, cambiando el valor de "recordToUpdate" por cada registro que se desee modificar.
