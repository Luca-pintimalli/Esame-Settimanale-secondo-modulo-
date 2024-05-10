//recuperiamo i dati del form 
class beer {
    constructor(_name , _brand , _description , _price, _imageUrl ){
        this.name = _name
        this.brand = _brand
        this.description = _description
        this.price = _price
        this.imageUrl = _imageUrl
    }

}




const submitBeer = function (e){
    e.preventDefault()
    const nameInput = document.getElementById('name'); 
    const brandInput = document.getElementById('brand')
    const descriptionInput = document.getElementById('description')
    const priceInput = document.getElementById('price')
    const imageUrl = document.getElementById('imageUrl')

    const beerFromForm = new beer(
        nameInput.value,
        brandInput.value,
        descriptionInput.value,
        priceInput.value,
        imageUrl.value

    )
    console.log('BIRRE DA INVIARE ALLE API', beerFromForm)
   
    //inviamo i dati all api , con il metodo post 
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: 'POST', 
        body: JSON.stringify(beerFromForm), 
        headers: {
            'Content-type' : 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZWEwNzgxODQ0MjAwMTUzNzU5MWMiLCJpYXQiOjE3MTUzMzM2MzksImV4cCI6MTcxNjU0MzIzOX0.yqeY-ngyxrTpjbHCLZOF879FsRnLJJNkrhAalxUOtD4"

        },


    })
    .then((response) => {
        if (response.ok) {
            alert('Birra salvata nel Catalogo!')
           

        } else {
            throw new Error ("Errore server")
        }
    })
   
    .catch((err) => {
        console.log("Errore!", err )
        alert(err)
    })
}    
document.getElementById("event-form").addEventListener('submit', submitBeer)
