const main = document.querySelector('main')
const count = document.querySelector('.count')

const cart = [
    {
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80',
        name: ' Nike',
        description: "Red nike's sneakers for sport special version",
        price: '₽100.00',
        id: 1,
    },
    {
        image: 'https://static.zara.net/photos///2022/I/0/3/p/2795/701/250/2/w/438/2795701250_6_1_1.jpg?ts=1655821470347',
        name: 'Юбка',
        description: 'White skirt with lines on, summer style',
        price: '₽15.99',
        id: 2,
    },
    {
        image: 'https://fabrilife.com/image-gallery/61a794e19d4b4-square.jpg',
        name: 'Майка',
        description: 'White shirt with ocean picture on',
        price: '₽23.99',
        id: 1,
    },
    {
        image: 'https://sneakernews.com/wp-content/uploads/2022/10/air-jordan-12-gc-25-years-in-china-1.jpg',
        name: 'Air Jordan',
        description: 'Air jordan special white black style sneakers',
        price: '₽155.99',
        id: 2,
    },
]

count.textContent = JSON.parse(localStorage.getItem('cards')).length


const promise = new Promise((resolve, reject) => {
    let newData = cart.map(items => addToHtml(items))
    main.innerHTML = newData
    resolve()
}) 
.then(cart => {
    const cartBtn = document.querySelectorAll('.cartBtn')

    cartBtn.forEach(item => {
        item.addEventListener('click', () => {
            let image = item.closest('.box').querySelector('img').getAttribute('src')
            let name = item.closest('.box').querySelector('h1').innerText
            let description = item.closest('.box').querySelector('p').innerText
            let price = item.closest('.box').querySelector('.des').innerText
            window.location.reload()
            
            const saveItem = getItem('cards')
            setItem('cards', 
                [
                    ...saveItem, 
                    {
                        image: image,
                        name: name,
                        description: description,
                        price: price,
                    }
                ])
        })
    })
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
            <button>Купить</button>
            <button class="cartBtn">В корзину</button>
        </section>
    </div>
    `
}

//------------------------------------------------------

window.addEventListener('DOMContentLoaded', () => {
    if (!getItem('cards')) {
        setItem('cards', [])
    }
})

function setItem (key, value) {
    return localStorage.setItem(key, JSON.stringify(value))
}

function getItem (key) {
    return JSON.parse(localStorage.getItem(key))
}