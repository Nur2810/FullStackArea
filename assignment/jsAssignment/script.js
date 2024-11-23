//___________________________________________-
// 1 Bir dizideki pozitif sayıların karesini alıp, sonucu 50'den büyük olanları döndüren bir fonksiyon yazın.

//let numbers = [12, -5, 8, -3, 19, -7, -2, 5, -10, 25, -1, 7, -4, 15];

// let check = (num) => {
//   return num
//     .filter((num) => num > 0)
//     .map((num) => num * num)
//     .filter((num) => num > 50);
// };

// console.log(check(numbers));

//___________________________________________-
// 2 Bir dizideki tüm sayıların çarpımını hesaplayan bir fonksiyon yazın.
//let numbers = [12, -5, 8, -3, 19, -7, -2, 5, -10, 25, -1, 7, -4, 15];
// let x = 1;
// let multiply = (num) => {
//   num.forEach((num) => {
//     x *= num;
//   });
// };

// multiply(numbers);
// console.log(x);

//___________________________________________-
// 3  Bir dizideki ilk negatif sayının indeksini döndüren bir fonksiyon yazın.
// let numbers = [12, 5, 8, -30, 139, -7, -2, 75, -10, 125, -1, 7, -4, 15];

// let negative = (numbers) => {
//   for (let i in numbers) {
//     if (numbers[i] < 0) {
//       return i;
//     }
//   }
//   return null;
// };
// console.log(negative(numbers));

// let numbers = [12, -5, 8, -3, 19, -7, -2, 5, -10, 25, -1, 7, -4, 15];

// let negative = (num) => {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] < 0) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(negative(numbers));

//___________________________________________-
//4  Bir dizideki kelimelerin hepsini büyük harfe çeviren bir fonksiyon yazın.
// let words = [
//   "apple",
//   "banana",
//   "grape",
//   "orange",
//   "strawberry",
//   "cherry",
//   "kiwi",
//   "watermelon",
//   "blueberry",
//   "mango",
// ];
// let sonuc;

// let UpperCase = (word) => {
//   return word.map((word) => word.toUpperCase());
// };
// console.log(UpperCase(words));

//___________________________________________-
// 5  Bir dizide ilk 50'den büyük sayıyı bulan bir fonksiyon yazın.

// let numbers = [12, -5, 8, -3, 139, -7, -2, 75, -10, 125, -1, 7, -4, 15];

// let gross = (num) => {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > 50) return num[i];
//   }
//   return -1;
// };
// console.log(gross(numbers));

//___________________________________________-
//6 Bir dizideki sayıların karesini alıp, sonucu 100'den küçük olanları döndüren bir fonksiyon yazın.

// let numbers = [12, -5, 8, -30, 139, -7, -2, 75, -10, 125, -1, 7, -4, 15];

// let square = (num) => {
//   {
//     return num.map((num) => num * num).filter((num) => num < 100);
//   }
// };
// console.log(square(numbers));

//___________________________________________-
// 7 Bir dizide tüm elemanların çift sayı olup olmadığını kontrol eden bir fonksiyon yazın.

// let numbers = [12, -5, 8, -30, 139, -7, -2, 75, -10, 125, -1, 7, -4, 15];

// let isEven = (numbers) => {
//   let result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0 && numbers[i] > 0) {
//       result.push(`${numbers[i]} çift`);
//     } else {
//       result.push(`${numbers[i]} tek`);
//     }
//   }
//   return result;
// };
// console.log(isEven(numbers));

//___________________________________________-
//8  Bir diziyi tersten oluşturmak için bir fonksiyon yazın.

// let numbers = [12, -5, 8, -30, 139, -7, -2, 75, -10, 125, -1, 7, -4, 15];

// let reverse = (num) => {
//   return num.reverse();
// };
// console.log(reverse(numbers));

//___________________________________________-
//9 Bir dizide en az bir elemanın 10'un katı olup olmadığını kontrol eden bir fonksiyon yazın.
// let numbers = [12, -5, 80, -30, 139, -7, -20, 75, -10, 125, -1, 70, -4, 15];
// let check = (numbers) => {
//   numbers.forEach((item) =>
//     item % 10 === 0
//       ? console.log(`${item}    -10 un katı-`)
//       : console.log(`${item}   - 10 un katı değil-`)
//   );
// };
// check(numbers);

//___________________________________________-
// 10 Bir dizideki tüm kelimeleri ters çeviren bir fonksiyon yazın.
// let words = [
//   "apple",
//   "banana",
//   "grape",
//   "orange",
//   "strawberry",
//   "cherry",
//   "kiwi",
//   "watermelon",
//   "blueberry",
//   "mango",
// ];

// let reversed = (words) => {
//   const reversedWords = words.map((word) => word.split("").reverse().join(""));
//   return reversedWords;
// };

// console.log(reversed(words));

//___________________________________________-
//11 Bir diziden sadece tek sayıları döndüren bir fonksiyon yazın.

// let numbers = [12, 5, 8, 30, 139, 7, 2, 75, 10, 125, 1, 7, 4, 15];

// let oddNumCheck = (numbers) => {
//   let oddNum = numbers.map((numbers) =>
//     numbers % 2 === 1 ? console.log(numbers) : null
//   );
// };

// oddNumCheck(numbers);

//___________________________________________-
// 12  Bir dizideki her elemana indeksini ekleyip yeni bir dizi döndüren bir fonksiyon yazın.

// let words = [
//   "apple",
//   "banana",
//   "grape",
//   "orange",
//   "strawberry",
//   "cherry",
//   "kiwi",
//   "watermelon",
//   "blueberry",
//   "mango",
// ];

// let indexWord;

// let indexWordF = (word) => {
//   return word.map((word, i) => `${i}${word}`);
// };

// console.log(indexWordF(words));

//___________________________________________-
// 13 Bir dizideki en büyük sayıyı bulan bir fonksiyon yazın.

// let numbers = [12, -5, 80, -30, 139, -7, -20, 75, -10, 125, -1, 7000, -4, 15];
// let maxNum = numbers[0];
// let max = (numbers) => {
//   for (let i of numbers) {
//     i > maxNum ? (maxNum = i) : null;
//   }
//   return maxNum;
// };
// console.log(max(numbers));

// //___________________________________________-
// 14 Bir dizideki her elemanı 3 artıran bir fonksiyon yazın (diziyi yerinde değiştirerek).
//yeni dizi oluşturma!

// let numbers = [12, -5, 80, -30, 139, -7, -20, 75, -10, 125, -1, 7000, -4, 15];

// let plus = (numbers) => {
//   for (let i in numbers) {
//     numbers[i] += 3;
//   }
//   return numbers;
// };
// console.log(plus(numbers));

// //___________________________________________-
//15 Bir dizide ilk defa 10 olan elemanın indeksini döndüren bir fonksiyon yazın.
// let numbers = [12, -5, 90, -30, 139, -7, -20, 75, 10, 125, -1, 7000, -4, 15];

// let tenCheck = () => {
//   return numbers.indexOf(10);
// };

// console.log(tenCheck(numbers));

//16  Bir dizide tüm sayıların pozitif olup olmadığını kontrol eden bir fonksiyon
// yazın.
// let numbers = [12, -5, 90, -30, 139, -7, -20, 75, 10, 125, -1, 7000, -4, 15];
// let result = "";
// let checkPositive = (numbers) => {
//   for (let i in numbers) {
//     result +=
//       numbers[i] > 0 ? `${numbers[i]} positive  ` : `${numbers[i]} negative   `;
//     result += "\n";
//   }

//   return result;
// };
// console.log(checkPositive(numbers));

//-2.yol foreach kullanımı

// let numbers = [12, -5, 90, -30, 139, -7, -20, 75, 10, 125, -1, 7000, -4, 15];
// let result = "";
// let checkPositive = (numbers) => {
//   numbers.forEach((i) => {
//     result += i > 0 ? `${i} positive  ` : `${i} negative   `;
//     result += "\n";
//   });
//   return result;
// };
// console.log(checkPositive(numbers));

//17 Bir dizideki 4 karakterden uzun kelimeleri döndüren bir fonksiyon yazın.
// let words = [
//   "ple",
//   "banana",
//   "pe",
//   "ngsssse",
//   "strawberry",
//   "cry",
//   "kwi",
//   "n",
//   "blueberry",
//   "maaaago",
// ];
// let result = "";
// let checkLength = (words) => {
//   words.forEach((i) => {
//     result += i.length > 4 ? `${i}\n` : "";
//   });
//   return result;
// };
// console.log(checkLength(words));

//___________________________________________-
// 18  Bir dizideki alt dizileri düz bir liste haline getiren bir fonksiyon yazın.

// let nestedArrays = [[1, 4, 2, 3], [4, 5], [6, 5, 7, 8], [9]];

// let flatArray = (nestedArrays) => {
//   return nestedArrays.join(",");
// };

// console.log(flatArray(nestedArrays));

//___________________________________________-
//19  Bir dizideki kelimeleri harflere ayırıp düz bir liste haline getiren bir fonksiyon yazın.
// let words = [
//   "apple",
//   "banana",
//   "grape",
//   "orange",
//   "strawberry",
//   "cherry",
//   "kiwi",
//   "watermelon",
//   "blueberry",
//   "mango",
// ];

// let flatArray = (words) => {
//   let result = [];
//   words.forEach((word) => {
//     result.push(...word); // ... yı öğrendim spread operatörü olarak da geçiyor split ile de açabilirdik
//   });

//   return result;
// };

// console.log(flatArray(words));

//___________________________________________-
// 20 Bir dizide çift sayıların toplamını hesaplayan bir fonksiyon yazın.

// let numbers = [12, 5, 8, 30, 139, 7, 2, 75, 10, 125, 1, 7, 4, 15];
// let result = 0;

// let oddPlus = (numbers) => {
//   numbers.forEach((num) => {
//     num % 2 === 0 ? (result += num) : null;
//   });
//   return result;
// };
// console.log(oddPlus(numbers));

//fonksiyonlar

// -----Isınma soruları-------
//___________________________________________-

//Sayının Tek mi Çift mi Olduğunu Bulma: Kullanıcıdan alınan sayının
//tek mi çift mi olduğunu kontrol eden bir fonksiyon yazın.

// let sayi = +prompt("bir sayı girin:");

// const tekCift = (a) => {
//   return a % 2 === 0 ? "çift" : "tek";
// };

// console.log(tekCift(sayi));
//___________________________________________-
// Sayı 5'in Katı mı? Kullanıcının girdiği
// bir sayının 5'in katı olup olmadığını kontrol eden bir fonksiyon yazın.

// let sayi = +prompt("bir sayı girin:");

// const kontrol = (a) => {
//   return a % 5 === 0 ? "5in katı" : "5in katı değiil";
// };
// console.log(kontrol(sayi));

//___________________________________________-

// Pozitif mi Negatif mi? Kullanıcının girdiği sayının
// pozitif, negatif veya sıfır olup olmadığını belirleyen bir fonksiyon yazın.

// let sayi = +prompt("bir sayı girin:");

// const kontrol = (a) => {
//   return a < 0 ? "negatif" : a > 0 ? "pozitif" : "sıfır";
// };
// console.log(kontrol(sayi));
//___________________________________________-

// Sayıyı Mutlak Değere Çevirme: Kullanıcının girdiği
//  negatif bir sayıyı pozitif hale getiren bir fonksiyon yazın (örn. 8  8.

// // let sayi = +prompt("bir sayı girin:");

// const mutlak = (a) => {
//   return a * -1;
// };
// console.log(mutlak(sayi));

//___________________________________________-

// Bir Sayının Karesini Bulma: Kullanıcının girdiği sayının karesini
// hesaplayan bir fonksiyon yazın.

// let sayi = +prompt("bir sayı girin:");
// const kare = (a) => {
//   return a * a;
// };
// console.log(kare(sayi));

//___________________________________________-

// Girilen Sayının Kaç Basamaklı Olduğunu Bulma: Kullanıcıdan alınan
// sayının kaç basamaklı olduğunu bulan bir fonksiyon yazın (örn. 234  3 basamak).

// let sayi = prompt("bir sayı girin:");
// const basamak = (a) => {
//   let basamakSayisi = String(sayi).length;
//   return basamakSayisi;
// };
// console.log(basamak(sayi));

//___________________________________________-

// Girilen İki Sayının Toplamını Bulma: Kullanıcıdan iki sayı alarak
// bu sayıların toplamını hesaplayan bir fonksiyon yazın.

// let sayi1 = +prompt("birinci sayıyı girin:");
// let sayi2 = +prompt("ikinci sayıyı girin:");
// let toplam = 0;

// const topla = (a, b) => {
//   toplam = a + b;
//   return toplam;
// };

// console.log(topla(sayi1, sayi2));

//___________________________________________-

// 10 ve 20 Arasında mı? Kullanıcının girdiği bir sayının 10 ile 20 arasında
// olup olmadığını kontrol eden bir fonksiyon yazın.

// let sayi = +prompt("bir sayı girin:");

// const kontrol = (a) => {
//   if (sayi < 20 && sayi > 10) {
//     return "evet 10 ve 20 arasında";
//   } else {
//     return "değil";
//   }
// };

// console.log(kontrol(sayi));

//___________________________________________-

// Dikdörtgen Alanı Hesaplama: Kullanıcıdan dikdörtgenin
//  uzun ve kısa kenarlarını alarak alanını hesaplayan bir fonksiyon yazın.

// let sayi1 = +prompt("uzun kenarı girin:");
// let sayi2 = +prompt("kısa kenarı girin:");

// const hesapla = (a, b) => {
//   return a * b;
// };
// console.log(hesapla(sayi1, sayi2));

//___________________________________________-

// Sayı Pozitifse 1 Ekle, Negatifse 1 Çıkar: Kullanıcının girdiği
//  sayının pozitifse 1 ekleyen, negatifse 1 çıkaran bir fonksiyon yazın.

// let sayi = +prompt("bir sayı girin:");

// const yap = (a) => {
//   if (a < 0) {
//     return a - 1;
//   }
//   if (a > 0) {
//     return a + 1;
//   } else {
//     return "sıfır";
//   }
// };
// console.log(yap(sayi));

//loop çözümleri

// 1 Kullanıcının girdiği bir sayının asal olup olmadığını kontrol eden bir program yazın.

// let sayi = prompt("asal kontrolü için bir sayı giriniz:");
// function asalSayiBul(sayi) {
//   if (sayi < 2) {
//     return false;
//   }
//   if (sayi === 2) {
//     return true;
//   }
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(asalSayiBul(sayi) ? "asaldır" : "asal değildir");

// --------------------------

//  2 Bir dizideki en büyük ve en küçük sayıları bulan bir fonksiyon yazın (dizi yok, sadece sayılar).
// let max = 0;

// let sayi1;
// let sayi2;
// let sayi3;

// const maax=function(sayi1, sayi2, sayi3) {
//   if (sayi1 < sayi2 && sayi2 > sayi3) {
//     max = sayi2;
//   } else if (sayi1 > sayi2 && sayi1 > sayi3) {
//     max = sayi1;
//   } else {
//     max = sayi3;
//   }
//   return max;
// }
// console.log("en büyük:", maax(455, 455, 337));

// let min;
// let sayi1;
// let sayi2;
// let sayi3;

// const minn=function(sayi1, sayi2, sayi3){
//     min=sayi1;
//     if(min>sayi2)
//     {
//         min=sayi2;
//     }
//     if(min>sayi3)
//     {
//         min=sayi3;
//     }
//     return min;
// }
// console.log(minn(13,56,99));

// ------------

// 3  Kullanıcının girdiği bir kelimenin palindrom olup
// olmadığını kontrol eden bir fonksiyon yazın.

// let kelime = prompt("palindrom kontrolü için bir kelime girin");

// const palindrom = (kelime) => {
//   //eğer kelimeyi tersten yazdırdığımda ilk haline eşitse true
//   let degisken = "";
//   for (let i = kelime.length - 1; i >= 0; i--) {
//     degisken = degisken + kelime[i];
//   }
//   //   if (degisken === kelime) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   return degisken === kelime;
// };

// palindrom(kelime)
//   ? console.log("değer palindromdur")
//   : console.log("değer palindrom değildir");

// ---------------

// 4   1 ile 50 arasında rastgele bir sayı tahmin etme oyunu yazın ve
// kullanıcı doğru tahmin edene kadar devam etsin.

// let sayi = Math.trunc(Math.random() * 50 + 1);
// let tahmin = 0;
// do {
//   tahmin = Number(prompt("1 ile 50 arasında sayı gir:"));
//   if (tahmin < 1 || tahmin > 50) {
//     continue;
//   }

// } while (tahmin != sayi);
// console.log("bravo");

// --------------------

// 5   Kullanıcıdan alınan sayının faktöriyelini hesaplayan bir fonksiyon yazın.
// let sayi = Number(prompt("bir sayı girin:"));
// const faktoriyel = (sayi) => {
//   let fak = 1;
//   for (let i = 1; i < sayi + 1; i++) {
//     fak = fak * i;
//   }
//   return fak;
// };
// console.log(faktoriyel(sayi));

// ---------------------

// 1     1'den N'e kadar olan sayıların toplamını ve ortalamasını hesaplayan bir program yazın.

// let N = Number(prompt("bir sayi giriniz:"));
// const hesapla = (N) => {
//   let toplam = 0;
//   for (let i = 1; i <= N; i++) {
//     toplam += i;
//   }
//   let ort = toplam / N;
//   return { toplam, ort };// iki değer return etmeyi öğrendim :)
// };
// let sonuc = hesapla(N);
// console.log(`Toplam: ${sonuc.toplam}`);
// console.log(`Ortalama: ${sonuc.ort}`);

// --------------------

// 2.   Bir dizideki tüm elemanların toplamını ve ortalamasını hesaplayan bir fonksiyon yazın (dizi yok, sadece sayılar).

// const topOrt = (sayi1, sayi2, sayi3) => {
//   let toplam = 0;
//   let ort = 0;
//   toplam = sayi1 + sayi2 + sayi3;
//   ort = toplam / 3;
//   return { toplam, ort };
// };
// let sonuc = topOrt(5, 8, 21);
// console.log(`Toplam: ${sonuc.toplam}`);
// console.log(`Ortalama: ${sonuc.ort}`);

// -----------------

// 3.   Kullanıcının girdiği bir metindeki sesli harflerin sayısını hesaplayan bir program yazın.

// let metin = prompt("bir metin girin:");
// const sesliHarfSay = (metin) => {
//   let sayac = 0;
//   for (let i = 0; i < metin.length; i++) {
//     if (
//       metin[i] == "a" ||
//       metin[i] == "e" ||
//       metin[i] == "i" ||
//       metin[i] == "ı" ||
//       metin[i] == "o" ||
//       metin[i] == "ö" ||
//       metin[i] == "u" ||
//       metin[i] == "ü"
//     ) {
//       sayac++;
//     }
//   }
//   return sayac;
// };
// console.log(sesliHarfSay(metin));

// _-----------------------

// . 4.  Fibonacci dizisini belirli bir sayıya kadar yazdıran bir program yazın.

// function fibonacci(n) {
//     let a = 0; // İlk Fibonacci sayısı
//     let b = 1; // İkinci Fibonacci sayısı

//    for(let i=0;i<=n;i++){
//   console.log(a);
//   let next=a+b;
//   a=b;
//   b=next;
//    }

//   }

//   fibonacci(15); // Fibonacci fonksiyonunu çağır

// ----------------------------

// 5    Kullanıcının girdiği bir kelimenin içindeki sesli harfleri bulup, her birinin sayısını gösteren bir program yazın.

// let metin = prompt("bir metin girin:");
// const sesliHarfSay = (metin) => {
//   let sayaca = 0;
//   let sayace = 0;
//   let sayaci = 0;
//   let sayacaii = 0;
//   let sayacu = 0;
//   let sayacuu = 0;
//   let sayaco = 0;
//   let sayacoo = 0;

//   for (let i = 0; i < metin.length; i++) {
//     if (metin[i] == "a") {
//       sayaca++;
//     }
//     if (metin[i] == "e") {
//       sayace++;
//     }
//     if (metin[i] == "i") {
//       sayaci++;
//     }
//     if (metin[i] == "ı") {
//       sayacaii++;
//     }
//     if (metin[i] == "o") {
//       sayaco++;
//     }
//     if (metin[i] == "ö") {
//       sayacoo++;
//     }
//     if (metin[i] == "u") {
//       sayacu++;
//     }
//     if (metin[i] == "ü") {
//       sayacuu++;
//     }
//   }
//   if (sayaca > 0) console.log("a harfinden " + sayaca + " adet vardır.");
//   if (sayace > 0) console.log("e harfinden " + sayace + " adet vardır.");
//   if (sayaci > 0) console.log("i harfinden " + sayaci + " adet vardır.");
//   if (sayacaii > 0) console.log("ı harfinden " + sayacaii + " adet vardır.");
//   if (sayaco > 0) console.log("o harfinden " + sayaco + " adet vardır.");
//   if (sayacoo > 0) console.log("ö harfinden " + sayacoo + " adet vardır.");
//   if (sayacu > 0) console.log("u harfinden " + sayacu + " adet vardır.");
//   if (sayacuu > 0) console.log("ü harfinden " + sayacuu + " adet vardır.");
// };
// sesliHarfSay(metin);

//_____________________________-ternary

//1  Sayıyı Sınıflandırma: Bir sayının pozitif, negatif veya sıfır olup olmadığını
//belirleyin ve "Pozitif", "Negatif" veya "Sıfır" olarak döndürün.

// let sayi = 4;

// let sonuc = sayi > 0 ? "pozitif" : sayi < 0 ? "negatif" : "sıfır";
// console.log(sonuc);

//2  Kredi Başvuru Durumu: Bir kişinin kredi puanı 700 veya
// daha yüksekse "Kredi onaylandı", 500 ile 699 arasındaysa
// "Ek belgeler gerekli", 500'ün altındaysa "Kredi
//  reddedildi" döndürün.

// let krediPuan = 300;
// let durum =
//   krediPuan >= 700
//     ? "Kredi onaylandı"
//     : krediPuan >= 500
//     ? "Ek belgeler gerekli"
//     : "Kredi reddedildi";

//     console.log(durum);

// 3  Sıcaklık Durumu: Bir sıcaklık değerine göre "Donma noktası altında", "Oda sıcaklığında" veya "Kaynama noktasında" olup olmadığını belirleyin.

// let sicaklik=2;
// let durum =
//   sicaklik < 0
//     ? "donma noktası altında"
//     : sicaklik >= 0 && sicaklik <= 30
//     ? "Oda sıcaklığında"
//     : sicaklik > 100
//     ? "Kaynama noktasında"
//     : "Kaynama noktasına ulaşılmadı";
// console.log(durum);

// 4  Öğrenci Başarı Durumu: Bir öğrencinin notuna göre "Harika", "İyi", "Orta", "Kötü" gibi başarı düzeylerini belirleyin 90100 Harika, 8089 İyi, 7079 Orta, 069 Kötü).

// let not = 69;
// let durum = not > 89 ? "harika" : not > 79 ? "iyi" : not > 69 ? "orta" : "kötü";
// console.log(durum);

// 5  Yaş Grubu: Bir kişinin yaşına göre "Çocuk", "Genç", "Yetişkin", "Yaşlı" olarak kategorize edin 012 Çocuk, 1324 Genç, 2564 Yetişkin, 65 ve üstü: Yaşlı).

// let yas = 57;
// let durum =
//   yas < 13 ? "çocuk" : yas < 25 ? "genç" : yas < 64 ? "yetişkin" : "yaşlı";
// console.log(durum);

// 6  Bir Ürünün İndirim Durumu: Bir ürün fiyatı 100 TL veya üzerindeyse %20 indirim, 5099 TL arasında ise %10 indirim, altındaysa indirim yok olarak yeni fiyatı hesaplayın.

// let fiyat = 67;
// let indirim =
//   fiyat > 99 ? "%20 indirim" : fiyat > 50 ? "%10 indirim" : "indirim yok";
// console.log(indirim);

//7  Bir Kullanıcının Üyelik Durumu: Bir kullanıcı üye ise "Üye girişi yapıldı", değilse "Misafir girişi" mesajı verin. Ek olarak, kullanıcı üye ise aktif veya pasif durumunu kontrol edin.

// let uyelik=false;
// let aktif=true;
// let durum= uyelik ? (aktif ? "Üye girişi yapıldı"  : "Üyeliğiniz pasif") : "Misafir girişi" ;
// console.log(durum);

// if(uyelik)
//    { if(aktif)
//     {console.log("aktf üye girişi yapıldı");}
//     else
//     {console.log("üyeliğiniz pasif");}
//    }
// else
//    {
//     console.log("misafir girişi");
//    }

// 8  İki Değer Karşılaştırması: İki sayıyı karşılaştırarak "İkisi de eşit", "Birinci daha büyük", "İkinci daha büyük" olarak sonuç döndürün.

// let sayi1=3;
// let sayi2=77;
// let durum =
//   sayi1 == sayi2
//     ? "İkisi de eşit"
//     : sayi1 > sayi2
//     ? "sayi1 sayi2den büyük"
//     : "sayi2 sayi1den büyük";
// console.log(durum);

//9  Ders Seçimi: Bir öğrencinin ders seçimine göre "Temel", "Orta", "İleri" seviyesinde olduğunu belirleyin Başlangıç: 13, Orta: 46, İleri: 710.

// let secim=4;
// let durum = secim < 4 ? "başlangıç" : secim < 7 ? "orta" : "ileri";
// console.log(durum);

//10  Bölüm Seçimi: Bir öğrencinin notuna göre hangi bölümde okuyabileceğini belirleyin: "Mühendislik" 80 ve üstü), "İktisat" 6079, "Sosyal Bilimler" 0 59.

// let not=60;
// let bolum= not> 80 ?"mühendislik": not >59  ? "iktisat" : "sosyal bilimler";
// console.log(bolum);

//AND OR -----------------------------
// 1. Kullanıcı Adı Belirleme

// let userName = prompt("kullanıcı adı giriniz:");
// let Name = userName || "Misafir";
// console.log(`Merhaba, ${Name}!`);

// // 2. Ürün Fiyatı Gösterme

// let indirimliFiyat = 300;
// let kampanyaFiyati = 350;
// let normalFiyat = 400;
// let fiyat = indirimliFiyat || kampanyaFiyati || normalFiyat || "Fiyat Yok";
// console.log(fiyat);

// // 3. İletişim Tercihi Belirleme
// // Bir kullanıcının telefon numarası veya
// // e-posta adresi yoksa, varsayılan olarak "İletişim bilgisi eksik" mesajı döndürün.

// let tel = "";
// let mail = "";

// let message = tel || mail || "İletişim bilgisi eksik";
// console.log(message);

// // 4. Adres Bilgisi Sağlama
// // Bir kullanıcının üç farklı adres bilgisi olabilir:
// // `evAdresi`, `isAdresi`, veya `postaKutusu`. Tüm bilgiler eksikse "Adres yok" döndürün.

// let evAdresi = "";
// let isAdresi = "";
// let postaKutusu = "";
// let message = evAdresi || isAdresi || postaKutusu || "Adres yok";
// console.log(message);

// // 5. Varsayılan Dil Belirleme
// // Bir uygulamada `kullaniciDili`, `tarayiciDili`, ve `varsayilanDil` gibi dil
// // seçenekleri bulunmaktadır.
// // Eğer tüm seçenekler yoksa, "Dil seçilmedi" döndürün.

// let kullaniciDili;
// let tarayiciDili;
// let varsayilanDil;
// let message = kullaniciDili || tarayiciDili || varsayilanDil || "Dil seçilmedi";
// console.log(message);

// // 6. Profil Resmi Gösterme
// // Bir kullanıcının `profilFotografi`, `varsayilanAvatar`, ve `defaultImage`
// // gibi profil resmi seçenekleri var.
// // Eğer hepsi eksikse "Resim yok" mesajı döndürün.

// let profilFotografi;
// let varsayilanAvatar;
// let defaultImage;
// let message =
//   profilFotografi || varsayilanAvatar || defaultImage || "Resim yok";
// console.log(message);

// // 7. Kullanıcı Bilgileri
// // Bir kullanıcının adı, soyadı ve takma adı olabilir.
// // Eğer hiçbir bilgi yoksa "Anonim" döndürün.

// let ad;
// let soyad;
// let takmaAd;
// let message = ad || soyad || takmaAd || "Anonim";
// console.log(message);

// // 8. Yaş Bilgisi Gösterme
// // Bir kullanıcı ya `yas`, `dogumYili`, veya `tahminiYas` bilgisine sahip.
// // Eğer hiçbir yaş bilgisi yoksa "Yaş bilinmiyor" döndürün.

// let yas;
// let dogumYili;
// let tahminiYas;
// let message = yas || dogumYili || tahminiYas || "Yaş bilinmiyor";
// console.log(message);

// // 9. Oyun Skoru Belirleme
// // Bir oyunda `anaSkor`, `yedekSkor`, ve `varsayilanSkor` bilgisi bulunmaktadır.
// // Hepsi `falsy` ise "Skor yok" döndürün.

// let anaSkor = "";
// let yedekSkor = "";
// let varsayilanSkor = "";
// let message = anaSkor || yedekSkor || varsayilanSkor || "Skor yok";
// console.log(message);

// // 10. Çevrimiçi Durum Kontrolü
// // Bir kullanıcının `aktifDurum`, `sonGiris`, veya `beklemeDurumu`
// // gibi çevrimiçi durumu olabilir.
// // Hepsi `falsy` ise "Çevrimdışı" mesajı döndürün.

// let aktifDurum = "";
// let sonGiris = "";
// let beklemeDurumu = "";
// let message = aktifDurum || sonGiris || beklemeDurumu || "Çevrimdışı";
// console.log(message);

// /* -------------------------------------------------------------------------- */

// // 1. Kullanıcı Girişi Kontrolü
// // Bir kullanıcının `kullaniciAdi` ve `sifre` bilgileri varsa giriş
// // yapmasını sağlayın, yoksa "Giriş bilgileri eksik" mesajı döndürün.

// let kullaniciAdi = "nur";
// let sifre = "password";
// let message =
//   (kullaniciAdi && sifre && "Giriş başarılı") || "Giriş bilgileri eksik";
// console.log(message);

// // 2. Sipariş Tamamlanma Durumu
// // Bir siparişin tamamlanması için `odemeYapildi` ve `urunHazir` olması gerekmektedir.
// // Eğer ikisi de sağlanıyorsa "Sipariş tamamlandı" mesajı döndürün,
// // değilse "Sipariş beklemede" döndürün.

// let odemeYapildi = "";
// let urunHazir = "";
// let message =
//   (odemeYapildi && urunHazir && "Sipariş Tamamlandı") || "Sipariş beklemede";
// console.log(message);

// // 3. İndirim Uygulama
// // Bir üründe hem `indirimKoduGirildi` hem de `urunSepette` ise indirim uygulanır. Aksi halde "İndirim uygulanamaz" mesajı döndürün.

// let indirimKoduGirildi = "";
// let urunSepette = "";
// let message =
//   (indirimKoduGirildi && urunSepette && "indirim uygulandı") ||
//   "indirim uygulanmaz";
// console.log(message);

// // 4. Randevu Onayı
// // Bir randevu için hem `tarihOnaylandi` hem de `saatOnaylandi` sağlanıyorsa "Randevu onaylandı" mesajı döndürün, değilse "Onay bekleniyor" döndürün.

// let tarihOnaylandi = "";
// let saatOnaylandi = "";
// let message =
//   (tarihOnaylandi && saatOnaylandi && "Randevu onaylandı") || "Onay bekleniyor";
// console.log(message);

// // 5. Profil Tamamlanma Durumu
// // Bir profil hem `profilFoto` hem de `hakkindaBilgisi` içeriyorsa, "Profil tamamlandı" döner. Değilse, "Profil eksik" döner.

// let profilFoto = "";
// let hakkindaBilgisi = "";
// let message =
//   (profilFoto && hakkindaBilgisi && "Profil tamamlandı") || "Profil eksik";
// console.log(message);

// // 6. Gönderi Paylaşma
// // Bir gönderi paylaşmak için hem `baslik` hem de `icerik` dolu olmalıdır. Yoksa "Gönderi eksik" mesajı döner.

// let baslik = "";
// let icerik = "";
// let message =
//   (baslik && icerik && " Gönderi paylaşılabilir") || "Gönderi eksik";
// console.log(message);

// // 7. Kredi Onayı
// // Bir kredi başvurusu, `krediPuanı` ve `gelirDurumu` uygunsa onaylanır. Aksi halde "Onaylanmadı" döner.

// let krediPuanı = "";
// let gelirDurumu = "";
// let message =
//   (krediPuanı && gelirDurumu && "Krediniz onaylandı") || "Krediniz onaylanmadı";
// console.log(message);

// // 8. Etkinlik Katılımı
// // Bir etkinliğe katılmak için hem `biletAlindi` hem de `yasSiniriUygun` olmalıdır. Aksi halde "Katılım sağlanamaz" döner.

// let biletAlindi = "";
// let yasSiniriUygun = "";
// let message =
//   (biletAlindi && yasSiniriUygun && "Katılım sağlanabilir") ||
//   "katılım sağlanamaz";
// console.log(message);

// // 9. Dosya Yükleme Durumu
// // Bir dosyanın yüklenebilmesi için `dosyaSecildi` ve `izinVerildi` olmalıdır. Aksi halde "Dosya yüklenemiyor" mesajı döner.

// let dosyaSecildi = "";
// let izinVerildi = "";
// let message =
//   (dosyaSecildi && izinVerildi && "dosya yüklenebilir") || "dosya yüklenemez";
// console.log(message);

// // 10. Rezervasyon Onayı
// // Bir otel rezervasyonunun tamamlanması için hem `odemeOnaylandi` hem de `odaHazir` olmalıdır. Aksi halde "Rezervasyon beklemede" döner.

// let odemeOnaylandi = "";
// let odaHazir = "";
// let message =
//   (odemeOnaylandi && odaHazir && "Rezervasyon Onaylandı") ||
//   "Rezervasyon Beklemede";
// console.log(message);

// DATA TYPES ------------------------------

// 1.Soru
// let pi = Math.PI;
// let r = prompt("Bir yarı çap değeri girin: ");
// let alan = pi * r * r;
// let cevre = 2 * pi * r;

// console.log(`Dairenin alanı:${alan}`);
// console.log(`Dairenin çevresi:${cevre}`);

// 2.Soru

// let sayi = prompt("Bir ondalıklı sayı giriniz:");
// let buyuk = Math.ceil(sayi);
// let kucuk = Math.floor(sayi);
// console.log(`Sayının büyük değeri:${buyuk}`);
// console.log(`Sayının küçük değeri:${kucuk}`);

// 3.soru

// let sayi = Math.random() * 100;
// console.log(Math.trunc(sayi));

//4.soru

// let sayi1 = prompt("1.sayıyı girin:");
// let sayi2 = prompt("2.sayıyı girin:");
// let sayi3 = prompt("3.sayıyı girin:");
// let sayi4 = prompt("4.sayıyı girin:");
// let sayi5 = prompt("5.sayıyı girin:");
// let buyuk = Math.max(sayi1, sayi2, sayi3, sayi4, sayi5);
// let kucuk = Math.min(sayi1, sayi2, sayi3, sayi4, sayi5);
// console.log(`Girilen En Büyük Sayı:${buyuk} ve Girilen En Küçük Sayı:${kucuk}`);

//5.soru

// let sayi = prompt("Bir sayı giriniz: ");
// let sayi2 = Number(sayi);
// console.log(sayi2);

//6.soru

// let sayi1 = prompt("1.sayıyı girin:");
// let sayi2 = prompt("2.sayıyı girin:");
// let uslusayi=Math.pow(sayi1,sayi2);
// console.log(uslusayi);

// 7.soru

// let sayi = prompt("Bir sayı giriniz: ");
// let sayi2 = Math.sqrt(sayi);
// console.log(sayi2);

// 8.soru

// let cumle1 = prompt("birinci cümle:");
// let cumle2 = prompt("ikinci cümle:");
// console.log(`${cumle1} ${cumle2}`);

// 9.soru

// let kelime=prompt("bir kelime giriniz:");
// let uzunluk=kelime.length;
// console.log(uzunluk);

// 10.soru

// let kelime = prompt("bir kelime giriniz:");
// kelime[2]="Z";

// console.log(kelime);
// stringler immutable olduğundan parça olarak değiştirilmez!!!

// 11.soru

// let sayi1 = prompt("1.sayıyı girin:");
// let sayi2 = prompt("2.sayıyı girin:");
// let sayi1Num = Number(sayi1);
// let sayi2Num = Number(sayi2);
// let esitMi = sayi1Num === sayi2Num;

// console.log(esitMi ? "Sayılar eşit." : "Sayılar eşit değil.");

//12.soru

// let deger = prompt("bir değer girin?:");
// let control = typeof deger;
// let sayiMi = isNaN(control);
// console.log(control);
// console.log(sayiMi ? "girilen değer string'tir" : "girilen değer sayıdır.");

//Girilen her değer Stringtir.

//13.soru

// let dogumYili = prompt("Doğum yılınızı giriniz:");
// Number(dogumYili);
// let yil = 2024;
// let yas = yil - dogumYili;
// console.log(`yaşınız:${yas}`);

// 14.soru

// let sayi1=null; //null
// console.log(typeof sayi1);

//let sayi1; //undefined
//console.log(typeof sayi1);

//null: Bilinçli olarak boş bırakılan bir değeri ifade eder, tipi hatalı olarak "object" döner.
//undefined: Değişkene değer atanmamış ya da açıkça undefined atanmış bir durumda görülür, tipi "undefined" döner.

//15.soru

// let sayi = prompt("Bir sayı giriniz: ");
// let sayi2 = Number(sayi);

// console.log(`sayının karesi:${Math.pow(sayi2, 2)}  sayının küpü:${Math.pow(sayi2, 3)}`);

//16.soru

// let kelime=prompt("bir kelime giriniz:");

// for (let i = 0; i < kelime.length; i++) {
//     const element = kelime[i];
//     console.log(element);
// }

//17.soru

// let today=new Date();
// console.log(
//   `${today.getDate()}/${
//     today.getMonth() + 1
//   }/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`
// );

//18.soru

// let sayi = prompt("Bir ondalıklı sayı giriniz:");
// console.log(Math.trunc(sayi));

//19.soru

// let sayi1 = prompt("1.sayıyı girin:");
// let sayi2 = prompt("2.sayıyı girin:");
// let sayi3 = prompt("3.sayıyı girin:");
// let sayi1Num = Number(sayi1);
// let sayi2Num = Number(sayi2);
// let sayi3Num = Number(sayi3);
// let toplam = (sayi1Num + sayi2Num + sayi3Num) / 3;
// console.log(`Girilen sayıların ortlaması${toplam}`);

//20.soru

// let dizi = [0,1,2,3,4,5,6,7,8]
// console.log(dizi[0]);
// console.log(dizi[dizi.length-1]);
