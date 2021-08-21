function findElement(elementId){
 return document.getElementById(elementId);
}

let extraMemory = findElement('extra-memory');
let extraStorage = findElement('extra-storage');
let extraCharge = findElement('extra-charge');
let totalCost = findElement('total-charge');
let totalPrice = findElement('total');


// find price innerText and convert to number
function getCurrentPrice(fieldName){
  let field = document.getElementById(fieldName);
  let fieldText = field.innerText;
  let textNum = parseFloat(fieldText);
  return textNum;
}

function updateTotal(){
let base_price = getCurrentPrice('best-price');
let memory_price = getCurrentPrice('extra-memory');
let storage_price = getCurrentPrice('extra-storage');
let delivery_charge = getCurrentPrice('extra-charge');
let totalMacPrice = base_price + memory_price + storage_price + delivery_charge;
return totalMacPrice;
}

// eventListener create
function eventListener(id, field, value){
    document.getElementById(id).addEventListener('click', function(){
      field.innerText = value;

      // update total price
      totalCost.innerText = updateTotal();
      totalPrice.innerText = updateTotal();
    });
}

eventListener('memory-1', extraMemory, 0);
eventListener('memory-2', extraMemory, 180);
eventListener('storage-1', extraStorage, 0);
eventListener('storage-2', extraStorage, 100);
eventListener('storage-3', extraStorage, 180);
eventListener('delivery-free', extraCharge, 0);
eventListener('delivery-charge', extraCharge, 20);

// promo code apply
document.getElementById('promo-code').addEventListener('click', function(){
  let promoCode = document.getElementById('promo-text');
  let promoCodeValue = promoCode.value;
  if(promoCodeValue == 'stevekaku'){
    totalPrice.innerText = updateTotal() - updateTotal()/5;
  }
  else if(promoCodeValue == ''){
    alert('Please enter promo code')
  }
  else{
    alert('Promo code not matching');
  }
  promoCode.value = '';
  
})













