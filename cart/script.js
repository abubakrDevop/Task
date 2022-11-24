const main = document.querySelector('main')

const cart = JSON.parse(localStorage.getItem('cards'))

const promise = new Promise((resolve, reject) => {
    let newData = cart.map(items => addToHtml(items))
    main.innerHTML = newData
    resolve()
}) 


function addToHtml({image, name, description, price, id}) {
    return `
    <div class="box">
        <img src="${image}" alt="images">
        <section class="info">
            <h1>${name}</h1>
            <p>${price}</p>
            <p class="des">${description}</p>
        </section>
        <section class="buttons">
            <button>Buy Now</button>
            <button class="cartBtn">Delete</button>
        </section>
    </div>
    `
}