const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  quantity: 0
}]

const vessels = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}]



function buyIceCream(scoopName) {
  let scoop = iceCream.find(scoop => scoop.name == scoopName)
  scoop.quantity++
  drawCart()
  drawTotal()
}

function buyVessel(vesselName) {
  let cone = vessels.find(v => v.name == vesselName)
  cone.quantity++
  drawCart()
  drawTotal()
}

function buyTopping(toppingName) {
  let topping = toppings.find(t => t.name == toppingName)
  topping.quantity++
  drawCart()
  drawTotal()
}

function drawCart() {
  let template = ''
  iceCream.forEach(scoop => {
    if (scoop.quantity > 0) {
      template += `
      <section class="row card">
          <div class="col-4">${scoop.name}</div>
          <div class="col-4">Price: ${scoop.price}</div>
          <div class="col-4">Quantity: ${scoop.quantity}</div>
          </section>
      `
    }
  })
  vessels.forEach(v => {
    if (v.quantity > 0) {
      template += `
      <section class="row card">
          <div class="col-4">${v.name}</div>
          <div class="col-4">Price: ${v.price}</div>
          <div class="col-4">Quantity: ${v.quantity}</div>
          </section>
      `
    }
  })
  toppings.forEach(t => {
    if (t.quantity > 0) {
      template += `
      <section class="row card">
          <div class="col-4">${t.name}</div>
          <div class="col-4">Price: ${t.price}</div>
          <div class="col-4">Quantity: ${t.quantity}</div>
          </section>
      `
    }
  })
  document.getElementById('cart-items').innerHTML = template
  drawTotal()
}

function drawTotal() {
  let total = 0
  iceCream.forEach(scoop => {
    total += scoop.price * scoop.quantity
  })
  vessels.forEach(v => {
    total += v.price * v.quantity
  })
  toppings.forEach(t => {
    total += t.price * t.quantity
  })
  document.getElementById('total').innerText = total.toFixed(2)
}


function checkout() {
  if (window.confirm('Is Cart Correct?')) {

    iceCream.forEach(scoop => {
      scoop.quantity = 0
    })
    vessels.forEach(v => {
      v.quantity = 0
    })
    toppings.forEach(t => {
      t.quantity = 0
    })
  }
  drawCart()
}

function removeItem() {

}