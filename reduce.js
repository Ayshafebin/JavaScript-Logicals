const arr = 
[{
    name : 'fan',
    price : 2000
},
{
    name : 'ac',
    price : 21000
},{
    name : 'pillow',
    price : 200
}]

const totalprice =  arr.reduce((totalamount, item) => {
    return totalamount + item.price;
},0)
console.log(totalprice);

// Adhayadh, initial value aaya 0 enna value ayrikum totalamount ll undaava. ee arr le ooroo elementsneeyum totalamount(0) ll 0+2000 ingane cheyyum. angane veendum adtha objectil kayary ee kittiya amount + 21000 cheyyum.angane cheydh cheydh adtha object illatha case ll ee value return cheyyum. totalpricelk assign cheydh kittum.