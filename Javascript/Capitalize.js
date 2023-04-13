function capitalizeString(str) {
    // Dividir el string en un array de palabras
    const words = str.split(" ");
  
    // Iterar sobre cada palabra
    const capitalizedWords = words.map(word => {
      // Capitalizar la primera letra de cada palabra
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return firstLetter + restOfWord;
    });
  
    // Unir las palabras en un nuevo string
    const capitalizedString = capitalizedWords.join(" ");
    return capitalizedString;
  }
  
  // Ejemplo de uso
  const originalString = "hola mundo";
  const capitalizedString = capitalizeString(originalString);
  console.log(capitalizedString); // "Hola Mundo"
  