// function getdata(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("success");
//         },4000)
//     })    
// }

// //Async Await..............
// (async function() {
//     console.log("gettin data1........")
//     await getdata(1)
//     console.log("gettin data2........")
//     await getdata(2)
//     console.log("gettin data3........")
//     await getdata(3)
//     console.log("gettin data4........")
//     await getdata(4)
//     console.log("gettin data4........")
//     await getdata(5)
//     console.log("gettin data4........")
//     await getdata(6)
//     console.log("gettin data4........")
//     await getdata(7)
//     console.log("gettin data4........")
//     await getdata(8)

    
    
// })();


// //promises............

// // getdata(0)
// //     .then(()=>{
// //         console.log("gettin data1........")
// //         return getdata(1)
// //        .then(()=>{
// //         console.log("gettin data2........")
// //           return  getdata(2)
// //         })
// //        .then((res)=>{
// //         console.log("gettin data3........")
// //         return  getdata(3)
// //         })
// //         .then(()=>{
// //             console.log("gettin data4........")
// //         return  getdata(4);
// //         })
        
// // })



// //callback hell.........

// // console.log("gettin data1........")
// // getdata(1,()=>{
// //     console.log("gettin data2........")
// //     getdata(2,()=>{
// //         console.log("gettin data3........")
// //         getdata(3,()=>{
// //             console.log("gettin data4........")
// //             getdata(4,()=>{

// //             })

// //         })

// //     })

// // }
// // )


let cartItems = 0;
let totalPrice = 0;


function addToCart(price) {
  cartItems++;
  totalPrice += price;
  document.querySelector("#cart").innerText = `cartItem:${cartItems}`;
  document.querySelector(".total-price").innerText = `Toatal_Price:$${totalPrice}`;
  
}
