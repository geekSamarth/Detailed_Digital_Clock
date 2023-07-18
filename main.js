const result = document.querySelector('.result');


function accessDateTime(){
   const date = new Date()
   const hour = date.getHours();
   const minutes = date.getMinutes();
   const seconds = date.getSeconds();
//    console.log();
   result.innerHTML = `${hour} ${minutes} ${seconds}`
   // console.log(date.getDate())
   // console.log(date.getFullYear())
   setTimeout(accessDateTime,1000);
}
accessDateTime();