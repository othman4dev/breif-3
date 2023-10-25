let items = JSON.parse(localStorage.getItem('array'));
if (items.length == 0) {
    document.getElementById('invisible').insertAdjacentHTML('beforebegin',`
    <div class="product-buy special">
    <div class="idk">
        <div class="product-pic not" id="nothing" style="border-radius: 15pt;margin-top: 0px;transform: none;"></div>
        <img src="Assets/not.png" style="width:80px;height:80px;margin-right:20px;margin-top:20px">
        <h2 class="cart-message">Cart is Empty</h2>
    </div>
    <div class="counter last">
        
    </div>
</div>
    `);
}
for (let i = 0; i < items.length; i++) {
    
    
    let ship = parseInt(items[i].proPrice) / 100;
    let shipping = Math.floor(ship);
    if (shipping < 5) {
        shipping = 5;
    }
    if (shipping > 100) {
        shipping = 100;
    }
    if (!items[i].count) {
        items[i].count = 1;
    }
    document.getElementById('invisible').insertAdjacentHTML('beforebegin',`
    <div class="product-buy special" style="position:relative;">
            <div class="input-box"><input type="checkbox" name="select" class="selectMe" onchange="checkIfAllIsChecked();addToTotal(${items[i].proPrice},${shipping},this,${i})" id="input${i}"></div>
            <div class="idk">
                <div class="product-pic not" id="${items[i].proID}" style="border-radius: 15pt;margin-top: 0px;transform: none;"></div>
                <div class="details" style="flex-grow:1;min-width:fit-content">
                    <p style="margin-left: 20px;margin-top: 30px;">${items[i].proName}</p>
                    <div style="background-color: #cfe7f3;height: 30px;display: flex;align-items: center;border-radius: 15pt;font-size: 12px;width: 150px;justify-content: center;color:grey ;margin-left: 15px;">Selected Variants</div>
                    <p style="margin-left: 20px;margin-top: 9px">$${items[i].proPrice}</p>
                    <p style="font-size: 10px;color:grey ;margin-left: 20px;margin-top: -10px;">Shipping: $${shipping}</p>
                </div>
                <div class="trash-counter">
                    <img src="Assets/trash.svg" alt="" style="width:25px;cursor:pointer" onclick="deleteThisItem(${i})">
                    <div class="counter last">
                        <button id="moins" onclick="minusOne(this)">-</button>
                        <p id="count${i}" class="count">${items[i].count}</p>
                        <button id="plus" onclick="addOne(this,${i})">+</button>
                    </div>
                <div>
            </div>
        </div>
    `)
}