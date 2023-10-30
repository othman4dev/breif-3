
verifyCart();

var listOfPrices = [];

//get all data from 

function verifyCart() {
    let array = JSON.parse(localStorage.getItem('array'));
    var length = JSON.parse(localStorage.getItem('array')).length;
    if (localStorage.getItem('array')) {
    document.getElementById('length').innerText = length;
    }
    document.getElementById('cart-bar').innerHTML = `<span id="inserter" style="display: none;"></span>`
    for (let i = 0; i < length; i++) {
        document.getElementById('inserter').insertAdjacentHTML('beforebegin',`
        <div class="item-cart" onclick="displayItem(this)" id="${i}">
            <div class="product-pic" id="${array[i].proID}" style="max-width: 70px;width: 70px;height: 60px;"></div>
            <div class="item-cart-text"><h5 style="margin:0px;margin-bottom: 10px;margin-top: 20px; ">${array[i].proName}</h5><p style="font-size: 13px;text-align: left;margin: 0px;width: 100%;" class="prices">&nbsp;${array[i].proPrice}</p></div>
            <div class="wrapper-eye"><img src="Assets/eye.png" class="eye"></div>
        </div>
        `);
    }
    if (array.length == 0) {
        document.getElementById('inserter').insertAdjacentHTML('beforebegin',`
        <div class="item-cart" style="justify-content:center;align-items:center;margin-top:10px;margin-bottom:10px">
            <img src="Assets/not.png" style="max-width: 50px;width: 40px;height: 40px;">
            <div class="item-cart-text" style="display:flex;align-items:center;justify-content:flex-start;color:rgb(200,200,200)"><h4>Cart is Empty</h4></div>
        </div>
        `);
    }
}

if (JSON.parse(localStorage.getItem('array')).length > 0) {
    var length = JSON.parse(localStorage.getItem('array')).length;
    document.getElementById('length').innerText = length;
    verifyCart();
}

//All info.

let priceMax = 0;
// For side menu cart.

    function sideCart(e) {
        e.childNodes[5].style.display = 'block';
    }
    function sideCartClose(e) {
        e.style.display = 'none';
    }


// For range input value change.
    function changeValue(e) {
        document.getElementById("range-price").innerText = "$" + e.value*100;
        sortByPrice(e.value*100);
    }

// To remove filter search
    function unCheck() {
        let all = document.querySelectorAll('.radios');
        for (let i = 0; i < 4; i++) {
            all[i].checked = false;
        }
    }
// To get data form product div.
    function transportInfo(e) {
        e = e.parentNode;
        let all = e.childNodes;
        let id = all[1].id;
        let price = all[3].innerText;
        let discription = all[7].innerText;
        let productName = all[7].childNodes[0].innerText;
        let sold = all[11].innerText;
        let rate = all[9].innerText;
        let object = 
        {
            id : id,
            price : price,
            discription : discription,
            sold : sold,
            rate : rate,
            productName : productName,
        }
        localStorage.removeItem('product');
        localStorage.setItem('product',JSON.stringify(object));
        goTo('product');
    }
    
// document.write() search result page with product info.
    function displayItem(e) {
        let id = e.id;
        let array = JSON.parse(localStorage.getItem('array'));
        let object = 
        {
            id : array[id].proID,
            price : array[id].proPrice,
            discription : array[id].proDescription,
            sold : array[id].proSold,
            rate : array[id].proRate,
            productName : array[id].proName,
        }
        localStorage.removeItem('product');
        localStorage.setItem('product',JSON.stringify(object));
        goTo('product');
    }
    // controll number of items of every product.
    function minusOne(e) {
        let count = parseInt(e.nextElementSibling.innerText);
        count--;
        e.nextElementSibling.innerText = count;
        if (e.parentNode.previousElementSibling.previousElementSibling.childNodes[0].checked == true) {
            
        }
    }
    function addOne(e,i) {
        let count = parseInt(e.previousElementSibling.innerText);
        count++;
        e.previousElementSibling.innerText = count;
        let make = 'input' + i;
        if (document.getElementById(make).checked) {
            //Code here to get product info and push it to the 
            //function that adds the price to the total.
        }
    }
    // for 
    function setValue(e) {
        e.value = parseInt(e.id);
    }
    function set(e) {
        let all = document.querySelectorAll('.sizes');
        for (let i = 0; i < 4; i++) {
            all[i].style.boxShadow = ('none');
        }
        e.style.boxShadow = ('#FF8A00 0 0 0 2px');
    }
    function searchIt(e) {
        document.getElementById('search-icon').style.display = ("block");
        if (e.value == '') {
            document.getElementById('search-icon').style.display = ("none");
        }
    }
    function results() {
        let val = document.getElementById('search').value;
        localStorage.setItem('search',val);
        window.location.href = "search.html";
    }
    function addLike(e) {
        let source =  document.getElementById('heart');
        let likes = document.getElementById('likes-num');
        if (source.alt == 'not-liked') {
            source.src = 'Assets/redHeart.svg';
            source.alt = 'liked';
            let likesNum = parseInt(likes.innerText);
            likes.innerText = likesNum + 1;
        } else if(source.alt == 'liked') {
            source.src = 'Assets/heart.svg';
            source.alt = 'not-liked';
            let likesNum = parseInt(likes.innerText);
            likes.innerText = likesNum - 1;
        }
    }
    function selectAll(e) {
        if (e.checked == true) {
            let others = document.querySelectorAll('.selectMe');
            for (let i = 0; i < others.length; i++) {
                if (others[i].checked == false) {
                    others[i].click();
                }
                document.getElementById('select-or-no').innerText = 'Unselect all';
            }
        } else if (e.checked == false) {
            let others = document.querySelectorAll('.selectMe');
            for (let i = 0; i < others.length; i++) {
                if (others[i].checked == true) {
                    others[i].click();
                }
                document.getElementById('select-or-no').innerText = 'Select all products';
            }
        }
    }
    function checkIfAllIsChecked() {
        let count = 0;
        let others = document.querySelectorAll('.selectMe');
        for (let i = 0; i < others.length; i++) {
            if (others[i].checked == true) {
                count++;
            }
        }
        if (count == others.length) {
            document.getElementById('select-or-no').innerText = 'Unselect all';
            document.getElementById('checking').checked = true;
        }
    }
    function addToTotal(price,shipping,element,i) {
        let make = 'count' + i ;
        if (element.checked == true) {
            let totalElement = document.getElementById('total-money');
            let count = parseInt(document.getElementById(make).innerText);
            let productPrice = price*count;
            let totalPrice = parseInt(totalElement.innerText);
            totalElement.innerText = totalPrice + productPrice + shipping;
            document.getElementById('fee-fee').innerText = parseInt(document.getElementById('fee-fee').innerText) + shipping;
            document.getElementById('price-too').innerText = parseInt(document.getElementById('price-too').innerText) + productPrice;
            let history = 
            {
                identifier : i,
                count : count,
                price : price,
                shipping : shipping,
            }
            listOfPrices[i] = history;
            localStorage.setItem('items',listOfPrices);
        } else if(element.checked == false) {
            let totalElement = document.getElementById('total-money');
            let count = listOfPrices[i].count;
            let productPrice = listOfPrices[i].price*count;
            let totalPrice = parseInt(totalElement.innerText);
            let shipping = listOfPrices[i].shipping;
            totalElement.innerText = totalPrice - (productPrice + shipping);
            document.getElementById('fee-fee').innerText = parseInt(document.getElementById('fee-fee').innerText) - shipping;
            document.getElementById('price-too').innerText = parseInt(document.getElementById('price-too').innerText) - productPrice;
            let history = 
            {
                identifier : 0,
                count : 0,
                price : 0,
                shipping : 0,
            }
            listOfPrices[i] = history;
            localStorage.setItem('items',listOfPrices);
        }
    }
    function searchForIt(e) {
        document.getElementById('search').value = e.innerText;
        document.getElementById('search-icon').style.display = ('block');
    }
    function sortByPrice(e) {
        let all = document.querySelectorAll('.case');
        for (let i = 0; i < all.length; i++) {
            let temp = all[i].childNodes[3];
            if (e < parseInt(temp.innerText)) {
                all[i].style.display = ('none');
            }
            if (e >= parseInt(temp.innerText)) {
                all[i].style.display = ('flex');
            }
        }
    }
    function goTo(index) {
        let address = index + '.html';
        window.location.href = address;
    }
    let arrayOfItems = JSON.parse(localStorage.getItem('array'));
//This script is only for data storage and data sort and data transfer between pages.
    function pushData(e) {
        let parents = e.parentNode;
        let all = parents.childNodes;
        let ID = all[1].id;
        let price = all[3].innerText;
        let title = all[7].childNodes[0].innerText;
        let desc = all[7].innerText;
        let sold = all[11].innerText;
        let ship = all[5].innerText;
        let rate = all[9].innerText;
        let product = 
        {
            proName : title,
            proDescription : desc,
            proID : ID,
            proPrice : price,
            proSold : sold,
            proShip : ship,
            proRate : rate,
        };;
        arrayOfItems.push(product);
        localStorage.setItem('array',JSON.stringify(arrayOfItems));
    }
    function clearCart() {
        let dialog = document.getElementById('dialog-clear');
        dialog.style.display = ('flex');
    }
    function deleteIt() {
        let arrayOfItems = JSON.parse(localStorage.getItem('array'));
        arrayOfItems = [];
        localStorage.setItem('array',JSON.stringify(arrayOfItems));
        window.location.reload();
        dialog.style.display = ('none');
    }
    function changeToAdded(e) {
        e.childNodes[0].src = 'Assets/added2.png';
        if (e.childNodes[0].src != 'Assets/added2.png') {
            document.getElementById('none').insertAdjacentHTML('beforebegin',`
            <div class="pop-up" id="pop">
                <p>Added to cart</p>
                <img src="Assets/check.svg" alt="" class="check">
            </div>
            `);
            document.getElementById('pop').style.display = ("flex");
            document.getElementById('pop').style.animationName = ("goUp");
            setTimeout(function () {
                document.getElementById('pop').style.animationName = ("none");
                document.getElementById('pop').style.display = ("none");
            },1000);
        }
        var array = JSON.parse(localStorage.getItem('array'));
        var length = JSON.parse(localStorage.getItem('array')).length;
        document.getElementById('length').innerText = length;
        verifyCart();
    }
    function plus(e) {
        let count = parseInt(e.previousElementSibling.innerText);
        e.previousElementSibling.innerText = count + 1;
    }
    function minus(e) {
        let count = parseInt(e.nextElementSibling.innerText);
        e.nextElementSibling.innerText = count - 1;
        if (count <= 1) {
            e.nextElementSibling.innerText = 1;
        }
        
    }
    function shift(e) {
        e.previousElementSibling.style.animationName = ('shift');
    }
    function noShift(e) {
        if (!e.value) {
            e.previousElementSibling.style.animationName = ('none');
        }
    }
    function keepShift(e) {
        e.previousElementSibling.style.top = '-23px';
        if (!e.value) {
            e.previousElementSibling.style.top = '0%';
        }
    }
    function sendMessage(e) {
        ValidateEmail();
        validateInput('name');
        validateInput('message');
        if (ValidateEmail() == true && validateInput('name') == true && validateInput('message') == true) {
            let date = new Date();
            let fixDATE = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + "  ( " + date.getHours() + ' : ' + date.getMinutes() + ' )';
        let object =
        {
            fullname : document.getElementById('name').value,
            email : document.getElementById('email').value,
            message : document.getElementById('message').value,
            date : fixDATE,
        }
        localStorage.setItem('message',JSON.stringify(object));
        document.getElementById('main').innerHTML = `
        <form class="forum" id="forum">
            <div class="last-wrapper">
                <h1>Thanks you, We got your message.</h1>
                <img src="Assets/check.svg" alt="">
            </div>
            <div id="message-1">
                <button>sent</button>
                <p>${object.fullname} :</p>
                <p class="scroll-if-long">${object.message}</p>
                <small>${object.date}</small>
                <img src="Assets/edit.png" style="width: 30px;height: 30px;opacity: 0.5;cursor: pointer;" alt="" onclick="goBack()">
                <img src="Assets/trash.svg" style="width:25px;height:25px;" onclick="clearMessage();" alt="">
            </div>
        </form>
            `;
        }
    }
    function ValidateEmail() {

        let input = document.getElementById('email');

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
        if (input.value.match(validRegex)) {
            
            input.setCustomValidity("");

            return true;
      
        } else {
      
            input.setCustomValidity("Invalide E-mail address.");
            
            return false;
      
        }
      
      }
    function validateInput(id) {
        let input = document.getElementById(id);
        if (input.value == null || input.value == "") {
            input.setCustomValidity('You have to fill this feild in order to continue.');
            return false;
        } else {
            input.setCustomValidity('');
            return true;
        }
    }
    function goBack() {
        let object = JSON.parse(localStorage.getItem('message'));
        document.getElementById('forum').innerHTML = `
        <div class="wrapper-label"><label for="name" class="label-shift"><p>Full name</p><input type="text" value="${object.fullname}" name="name" id="name" class="small-input" onfocus="shift(this)" onblur="noShift(this)" onkeyup="keepShift(this)" spellcheck="false" autocomplete="off" required></label></div>
        <div class="wrapper-label"><label for="email" class="label-shift"><p>Email</p><input type="email" value="${object.email}" name="email" id="email" class="small-input" onfocus="shift(this)" onblur="noShift(this)" onkeyup="keepShift(this)" spellcheck="false" autocomplete="off" required></label></div>
        <div class="wrapper-label" style="display: flex;"><p class="shift-p">Your message</p><textarea name="" id="message" rows="10" class="textarea" onfocus="shift(this)" onblur="noShift(this)" onkeyup="keepShift(this)" spellcheck="false" autocomplete="off" required>${object.message}</textarea></div>
        <input type="submit" onclick="sendMessage(this)">
        `;
        shift(document.getElementById('name'));
        shift(document.getElementById('email'))
        shift(document.getElementById('message'));
    }
    function clearMessage() {
        localStorage.removeItem('message');
        window.location.reload();
    }
    function deleteThisItem(i) {
        arrayOfItems.splice(i,1);
        localStorage.setItem('array',JSON.stringify(arrayOfItems));
        window.location.reload();
    }
    function showFilters(e) {
        let src = e.src;
        if (src == 'http://127.0.0.1:3000/Assets/menu.svg') {
            e.src = 'Assets/ex.svg';
            document.getElementById('navi').style.animationName = 'none';
            document.getElementById('navi').style.display = "grid";
            let all = document.getElementsByClassName('accessoires');
            let height = document.getElementById('navi').offsetHeight;
            document.getElementById('navi').animate(
            [
                // étapes/keyframes
                { height: "0px" },
                { height: `${height}px` },
              ],
              {
                // temporisation
                duration: 1000,
                iterations: 1,
              },
            );
            for (let i = 0; i < all.length; i++) {
                all[i].animate(
                    [
                      // étapes/keyframes
                      { transform: `-${height}px` },
                      { transform: '0px' },
                    ],
                    {
                      // temporisation
                      duration: 1000,
                      iterations: 1,
                    },
                )
            }
        } else if (src == 'http://127.0.0.1:3000/Assets/ex.svg') {
            e.src = 'Assets/menu.svg';
            let height = document.getElementById('navi').offsetHeight;
            let all = document.getElementsByClassName('accessoires');
            document.getElementById('navi').animate(
                    [
                    // étapes/keyframes
                    { height: `${height}px` },
                    { height: "0px" },
                  ],
                  {
                    // temporisation
                    duration: 1000,
                    iterations: 1,
                  },
                );
                for (let i = 0; i < all.length; i++) {
                    all[i].animate(
                        [
                          // étapes/keyframes
                          { transform: '0px' },
                          { transform: `-${height}px`},
                        ],
                        {
                          // temporisation
                          duration: 1000,
                          iterations: 1,
                        },
                    )
                }
            setTimeout(function () {
                document.getElementById('navi').style.display = "none";
            },1000);
        }
        
    }
    function showNAV(e) {
        if (e.src == 'http://127.0.0.1:3000/Assets/menu.svg') {
            e.src = 'Assets/ex.svg';
            e.insertAdjacentHTML('beforebegin', document.getElementById('nav').outerHTML);
            document.getElementById('nav').style.display = 'flex';
        } else if (e.src == 'http://127.0.0.1:3000/Assets/ex.svg') {
            e.src = 'Assets/menu.svg';
            document.getElementById('nav').style.display = 'none';
        }
    }
    // Function to check Whether both passwords 
            // is same or not. 
            function checkPassword() { 
                let password1 = document.getElementById('pass1');
                let password2 = document.getElementById('pass2');
                let firstName = document.getElementById('fName').value;
                let lastName = document.getElementById('lName').value;
                let email = document.getElementById('email').value;
                // If Not same return False.     
                if (password1.value !== password2.value) { 
                    password1.setCustomValidity("Passwords don't match.");
                } 
                // If same return True. 
                else{ 
                    let user = 
                    {
                        firstName : firstName,
                        lastName : lastName,
                        email : email,
                        password : password1.value,
                    }
                    
                    localStorage.setItem('user',JSON.stringify(user));

                    window.location.href = 'index.html';
                }
            }