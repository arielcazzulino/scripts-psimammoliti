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
