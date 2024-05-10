

const addressBarContent = new URLSearchParams(location.search)
console.log(addressBarContent)
 const eventId = addressBarContent.get('eventId')





//dopo svariati tentativi non sono riuscito a recuperarmi la fetch , ho provato con l'autorizzazione ma niente , non capisco dove sbaglio


const getEventData = function () {
    fetch( "https://striveschool-api.herokuapp.com/api/product/" + eventId, {
        headers: {
            'Content-type' : 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZWEwNzgxODQ0MjAwMTUzNzU5MWMiLCJpYXQiOjE3MTUzMzM2MzksImV4cCI6MTcxNjU0MzIzOX0.yqeY-ngyxrTpjbHCLZOF879FsRnLJJNkrhAalxUOtD4"

        },

    })
    

   
    .then((response) => {
        if (response.ok) {
            return response.json()

        } else {
            throw new Error ("Errore server")
        }
    })
    .then((event) => {
        console.log('DETTAGLI RECUPERATI', event)
        document.getElementById('name').innerText = event.name
        document.getElementById('brand').innerText = event.brand
        document.getElementById('description').innerText = event.description
        document.getElementById('price').innerText = event.price



    })
    .catch((err) => {
        console.log("Errore!", err )
    })
}

getEventData(); 

const deleteEvent = function () {
    fetch(`https://striveschool-api.herokuapp.com/api/agenda/${eventId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          alert('RISORSA ELIMINATA')
          location.assign('index.html') 
        } else {
          alert('ERRORE - RISORSA NON ELIMINATA')
        }
      })
      .catch((err) => {
        console.log('ERR', err)
      })
  }
  
  
  const editButton = document.getElementById('edit-button')
  editButton.addEventListener('click', function () {
    location.assign(`backoffice.html?eventId=${eventId}`)
  })