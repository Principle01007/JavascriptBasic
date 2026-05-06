let texto1 = "Me encanta la música de Charly garcia";
let texto2 = "me encanta la música de Led Zeppelin";
let texto3 = "Encanta la música de calle 13.";
let texto4 = "La musica de Meshuggah.";
let texto5 = "Música de Daft Punk.";
let texto6 = "Me gusta Diplo.";
let texto7 = "No me gusta Diplo";

let regex = /Zeppelin$/i;

// verifica si los textos contienen la palabra Me
console.log(regex.test(texto1));
console.log(regex.test(texto2));
console.log(regex.test(texto3));
console.log(regex.test(texto4));
console.log(regex.test(texto5));
console.log(regex.test(texto6));
console.log(regex.test(texto7));
 
