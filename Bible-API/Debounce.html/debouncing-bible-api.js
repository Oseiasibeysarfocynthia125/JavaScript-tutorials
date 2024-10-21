// access the button,input,reference tag and preview tag

let textVerse = document.querySelector('#textVerse')
let textReference = document.querySelector('#reference')
let textPreview= document.querySelector('#preview')
let loader =document.querySelector('#preloader')
loader.style.display = "none"
//Base point
let BASE_POINT =('https://bible-api.com/')
// create an event for the button
textVerse.addEventListener('input', getBibleRequest)

//create a function to request user data
function getBibleRequest(){
    loader.style.display = "flex"
    // get the verse value
    let verse =textVerse.value
    console.log(`${BASE_POINT}${verse}`);
    fetch(`${BASE_POINT}${verse}`).then(function(res){
        return res.json()
    }).then(function(data){
        textReference.innerHTML=data.reference
        textPreview.innerHTML= data.text
        loader.style.display = "none"
    })
}




