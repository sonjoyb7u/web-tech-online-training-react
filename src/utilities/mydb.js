// Use localStorage as my DB Server for now ... 
const getLocalStorageKey = () => localStorage.getItem('buy_cart')

const updateBuyCartDb = buy_cart => {
    localStorage.setItem('buy_cart', JSON.stringify(buy_cart))
}

const addToDb = id => {
    // console.log(id);
    // let localStorageKeyExists = localStorage.getItem(id)
    const localStorageKeyExists = getLocalStorageKey()
    // console.log(localStorageKeyExists);
    let buy_cart_obj = {}
    if(localStorageKeyExists === null) {
        // localStorage.setItem(id, 1)
        buy_cart_obj[id] = 1
    }
    else {
        // const addNewQuantity = parseInt(localStorageKeyExists) + 1
        // localStorage.setItem(id, addNewQuantity)
        buy_cart_obj = JSON.parse(localStorageKeyExists) // convert JSON object to js object ...
        if(buy_cart_obj[id]) {
            const addNewQuantity = buy_cart_obj[id] + 1
             buy_cart_obj[id] = addNewQuantity
        }
        else {
            buy_cart_obj[id] = 1
        }
    }
    updateBuyCartDb(buy_cart_obj)
    
}

const removeFromDb = (id) => {
    const localStorageKeyExists = getLocalStorageKey()
    let buy_cart_obj = {}
    if(localStorageKeyExists) {
        buy_cart_obj = JSON.parse(localStorageKeyExists)
        delete buy_cart_obj[id]
        updateBuyCartDb(buy_cart_obj)
    }
}

const getCartFromLocalStorageDb = () => {
  const localStorageKeyExists = getLocalStorageKey();
  return localStorageKeyExists ? JSON.parse(localStorageKeyExists) : {};
}

const clearCart = () => {
    localStorage.removeItem('buy_cart')
}

export {addToDb, removeFromDb as deleteFromDb, getCartFromLocalStorageDb, clearCart}