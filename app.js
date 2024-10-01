let products=[
    {headline:'White Chair',price:'₹7999',name:'Ultra Comfort',image:'https://images.unsplash.com/photo-1554104707-a76b270e4bbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNoYWlyfGVufDB8fDB8fHww'},
    {headline:'Sofa',price:'₹1999',name:'Traditional',image:'https://plus.unsplash.com/premium_photo-1673125287024-c6edab262607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNoYWlyfGVufDB8fDB8fHww'},
    {name:'Ancient',price:'₹4999',headline:'Wooden Chest Box.',image:'https://images.unsplash.com/photo-1517467139951-f5a925c9f9de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yfGVufDB8fDB8fHww'},
    {name:'Yellow Chair',price:'₹7999',headline:'Ultra Comfort',image:'https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?q=80&w=840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name:'Wooden Chair',price:'₹1999',headline:'Ultra Comfort',image:'https://plus.unsplash.com/premium_photo-1704686580555-6f31384f756a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name:'Unique Chair',price:'₹4999',headline:'Great back support.',image:'https://plus.unsplash.com/premium_photo-1704686579466-7792fa8dc063?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'},
];

let popularProducts=[
    {name:'Yellow Chair',price:'₹7999',headline:'Ultra Comfort',image:'https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?q=80&w=840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name:'Wooden Chair',price:'₹1999',headline:'Traditional',image:'https://plus.unsplash.com/premium_photo-1704686580555-6f31384f756a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name:'Unique Chair',price:'₹4999',headline:'Great back support.',image:'https://plus.unsplash.com/premium_photo-1704686579466-7792fa8dc063?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'},
    {name:'Yellow Chair',price:'₹7999',headline:'Ultra Comfort',image:'https://plus.unsplash.com/premium_photo-1705169612592-32610774a5d0?q=80&w=840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name:'Wooden Chair',price:'₹1999',headline:'Ultra Comfort',image:'https://plus.unsplash.com/premium_photo-1704686580555-6f31384f756a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name:'Unique Chair',price:'₹4999',headline:'Great back support.',image:'https://plus.unsplash.com/premium_photo-1704686579466-7792fa8dc063?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'},
];


function addProducts(){
    let prodClutter='';
products.forEach((product,index)=>{
    prodClutter+=`<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                    <img class="w-full h-full object-cover" src="${product.image}" alt="product_image"> 
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.headline}</h1>
                    <div class=" flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.name}</h3>
                            <h4 class="font-semibold mt-2">${product.price}</h4>
                        </div>
                        <button data-index='${index}' class="addbutton w-10 h-10 rounded-full shader text-yellow-400">
                        <i data-index='${index}' class="addbutton ri-add-line"></i></button>
                    </div>
                </div>
            </div>`;
           

    
});
document.querySelector('.products').innerHTML=prodClutter;
}

function addPopularProducts(){
    let popularClutter='';
    popularProducts.forEach((product)=>{
        popularClutter+=`<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}" alt="popular">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.headline}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.name}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
                    </div>
                </div>`;

    })
    document.querySelector('.populars').innerHTML=popularClutter;
}


let cart=[];

function addToCart(){
document.querySelector('.products ')
.addEventListener('click',(details)=>{
    if(details.target.classList.contains('addbutton')){
        cart.push(products[details.target.dataset.index]);
        console.log(cart);
    }
});

}

function showCart(){
    document.querySelector('.carticon')
    .addEventListener('click',()=>{
       
        if(document.querySelector('.cartexpand').style.display==='block'){
            document.querySelector('.cartexpand').style.display='none';
        } else{
            document.querySelector('.cartexpand').style.display='block';
        }
                    
                
        let clutter='';
        cart.forEach((product)=>{
            
            clutter+=`<div class="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg  overflow-hidden">
                <img w-full h-full object-cover  src="${product.image}">
            </div>
            <div>
                <h3 class="font-semibold">${product.headline}</h3>
                <h5 class="text-sm font-semibold opacity-80">${product.price}</h5>
            </div>
        </div>`;
        })
        document.querySelector('.cartexpand').innerHTML=clutter;
        



    })
}



addProducts();
addPopularProducts();
addToCart();
showCart();

