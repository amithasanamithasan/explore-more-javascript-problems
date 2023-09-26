// [45, 21, 6, 98, 56];

//  array object 
 const phones = [
     { name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
     { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver' },
     { name: 'iphone', camera: 7, storage: '32gb', price: 82000, color: 'silver' },
     { name: 'Xaomi', camera: 17, storage: '32gb', price: 52000, color: 'silver' },
     { name: 'Oppo', camera: 25, storage: '32gb', price: 20000, color: 'black' },
     { name: 'Nokia', camera: 6, storage: '32gb', price: 44000, color: 'golden' },
     { name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'silver' },
 ];
//   function use 
 function cheapestPhone(phones){
     let cheapest = phones[0];
     for(let i = 0; i < phones.length; i++){
         const phone = phones[i];
        //   console.log(phone);
         if(phone.price < cheapest.price){
             cheapest = phone;
         }
     }
     return cheapest;
 }

 const mySelection = cheapestPhone(phones);
 console.log(mySelection);

//  ----output 
// {
//     name: 'Oppo',
//     camera: 25,
//     storage: '32gb',
//     price: 20000,
//     color: 'black'
//   }
// highest camera output i buy it 
// const Cameraphone = [
//     { name: 'Samsung', camera: 40, storage: '32gb', price: 36000, color: 'silver' },
//     { name: 'Walton', camera: 20, storage: '32gb', price: 22000, color: 'silver' },
//     { name: 'iphone', camera: 50, storage: '32gb', price: 82000, color: 'silver' },
//     { name: 'Xaomi', camera: 45, storage: '32gb', price: 52000, color: 'silver' },
//     { name: 'Oppo', camera: 30, storage: '32gb', price: 20000, color: 'black' },
//     { name: 'Nokia', camera: 25, storage: '32gb', price: 44000, color: 'golden' },
//     { name: 'HTC', camera: 35, storage: '32gb', price: 62000, color: 'silver' },
// ];
// const HighestCamera=null;
 
// const BestPixel =0;
//  function highestcamera(phones){
  
//       for(let i=0; i<phones.length; i++){
       
//          const Camera=phones[i];
//          if(Camera.camera<BestPixel){
//              BestPixel=Camera.Camera;
//              HighestCamera=Camera;
             


//          }
//         //   console.log(camera);
//       }
//     //   return Camera;
//      return HighestCamera;
//  }

//  const bestcamera = highestcamera(phones);
// //   console.log(phones);
//  console.log(HighestCamera);



const Cphones = [
    { name: 'Samsung', camera: 40, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 20, storage: '32gb', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 50, storage: '32gb', price: 82000, color: 'silver' },
    { name: 'Xaomi', camera: 45, storage: '32gb', price: 52000, color: 'silver' },
    { name: 'Oppo', camera: 30, storage: '32gb', price: 20000, color: 'black' },
    { name: 'Nokia', camera: 25, storage: '32gb', price: 44000, color: 'golden' },
    { name: 'HTC', camera: 35, storage: '32gb', price: 62000, color: 'silver' },
];

let highestCameraPhone = null;
let highestCameraValue = 0;

for (let i = 0; i < Cphones.length; i++) {
    if (Cphones[i].camera > highestCameraValue) {
        highestCameraValue = Cphones[i].camera;
        highestCameraPhone = Cphones[i];
    }
}

console.log("Phone with the highest camera:", highestCameraPhone);