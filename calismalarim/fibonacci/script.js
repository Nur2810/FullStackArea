function fibonacci(n) {
  let a = 0; // İlk Fibonacci sayısı
  let b = 1; // İkinci Fibonacci sayısı

 for(let i=0;i<=n;i++){
console.log(a);
let next=a+b;
a=b;
b=next;
 }
  
}

fibonacci(15); // Fibonacci fonksiyonunu çağır
