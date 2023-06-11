function handleSubtrair(){
    let valueItens = document.querySelector('#valueItens')
    if(valueItens.innerHTML > 0){
        valueItens.innerHTML -= 1
    }
}
function handleAdd(){
    let valueItens = document.querySelector('#valueItens')
    valueItens.innerHTML = Number(valueItens.innerHTML) + 1
}

function image1(){
    let imageProduct = document.querySelector('#imageProduct')
    imageProduct.src = './images/image-product-1.jpg'
}
function image2(){
    let imageProduct = document.querySelector('#imageProduct')
    imageProduct.src = './images/image-product-2.jpg'
}
function image3(){
    let imageProduct = document.querySelector('#imageProduct')
    imageProduct.src = './images/image-product-3.jpg'
}
function image4(){
    let imageProduct = document.querySelector('#imageProduct')
    imageProduct.src = './images/image-product-4.jpg'
}