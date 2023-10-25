let object = JSON.parse(localStorage.getItem('product'));
document.getElementById('div-for-img').id = object.id;
document.getElementById('second-div-img').id = object.id;
document.getElementById('product-name').innerText = object.productName;
document.getElementById('discrip').innerText = object.discription;
document.getElementById('rate-fill').innerHTML = `<img src="Assets/star.svg" alt="" class="star">` + object.rate;
document.getElementById('rate2-fill').innerText = object.rate;
document.getElementById('sold').innerText = object.sold;
document.getElementById('price-fill').innerText = object.price;

function pushData2() {
    let product =
{
    proName : object.productName,
    proDescription : object.discription,
    proID : object.id,
    proPrice : object.price,
    proSold : object.sold,
    proShip : object.ship,
    count : parseInt(document.getElementById('count').innerText),
};
    arrayOfItems.push(product);
    localStorage.setItem('array', JSON.stringify(arrayOfItems));
    verifyCart();
}
for (let i = 1; i < 5; i++) {
    var numb = object.id.match(/\d/g);
    numb = numb.join("");
    let makePic = 'pic-' + numb + '-' + i;
    document.getElementById('pic-place'+i).id = makePic;
    document.getElementById(makePic).style.backgroundImage = `url(products/${numb - 1}-${i}.webp)`;
    document.getElementById(makePic).style.backgroundPosition = 'center';
    document.getElementById(makePic).style.backgroundSize = 'cover';
}