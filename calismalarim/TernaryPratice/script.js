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

// function reverseWordsWithoutArray(sentence) {
//   let result = "";
//   let word = "";

//   for (let i = sentence.length - 1; i >= 0; i--) {
//     if (sentence[i] === " ") {
//       result += word + " ";
//       word = "";
//       console.log(word);
//     } else {
//       word = word + sentence[i];// değiştir
//       console.log(word);
//     }
//   }

//   result += word;
//   console.log(result);
//   return result;
// }

// console.log(reverseWordsWithoutArray("Hello Js World 2023"));

// function fibonacci(n) {
//     let a = 0; // İlk Fibonacci sayısı
//     let b = 1; // İkinci Fibonacci sayısı

//     for (let i = 0; i < n; i++) {
//         console.log(a); // Fibonacci sayısını yazdır
//         let next = a + b; // Bir sonraki Fibonacci sayısını hesapla
//         a = b;
//         b = next;
//     }
// }

// let n = prompt("Fibonacci dizisinin kaç sayısını görmek istersiniz?");
// fibonacci(n);

function fibonacci(n) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
  }
}
let n = prompt("kaç adet sayı gösterilsin");
fibonacci(n);
