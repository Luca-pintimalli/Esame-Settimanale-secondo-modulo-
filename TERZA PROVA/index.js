// Anno da mettere di fianco al marchio nel footer 
document.getElementById('year').innerText = new Date().getFullYear();


const generateBeerCard = function (beersArray) {
    const row = document.getElementById('beers-row')
    beersArray.forEach((beer) => {
        const newCol = document.createElement('div')
        newCol.classList.add('col')
        newCol.innerHTML = `

        <div class="card h-100 d-flex flex-column ">
         <img src="${beer.imageUrl}" class="card-img-top" alt="img-beer">
         <div class="card-body d-flex flex-column justify-content-around ">

             <h5 class="card-title"> ${beer.name} </h5>
             <p class="card-text"> ${beer.brand} </p>
             <p class="card-text"> ${beer.description} </p>

             <div class= "d-flex justify-content-between " >
               <button class="btn btn-primary">BUY ${beer.price} </button>
               <a href="details.html?eventId=${beer._id} " class="btn btn-primary">INFO </a>
             </div  

         </div>
        </div>

        








        `
        row.appendChild(newCol)
    });

}

const getBeers = function(){
    fetch("https://striveschool-api.herokuapp.com/api/product/",{
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZWEwNzgxODQ0MjAwMTUzNzU5MWMiLCJpYXQiOjE3MTUzMzM2MzksImV4cCI6MTcxNjU0MzIzOX0.yqeY-ngyxrTpjbHCLZOF879FsRnLJJNkrhAalxUOtD4"
        }
    } )

    .then((response) => {
        if (response.ok) {
            console.log(response)
            return response.json()

        } else {
            throw new Error ("Errore server")
        }
    })
    .then((array) => {
        console.log('ARRAY', array)
        generateBeerCard(array)
    })
    .catch((err) => {
        console.log("Errore!", err )
    })
}

getBeers(); 
