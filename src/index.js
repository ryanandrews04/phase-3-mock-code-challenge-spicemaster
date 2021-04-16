
let titleH2 = document.querySelector('h2.title')
let spiceImg = document.querySelector('img.detail-image')
let ingredientsUl = document.querySelector('ul.ingredients-list')
let updateNameForm = document.querySelector('form#update-form')
let updateIngredientForm = document.querySelector('form#ingredient-form')
let displayedSpice = {}

fetch("http://localhost:3000/spiceblends/1")
.then((r) => r.json())
.then((spiceBlendObj) => {

    titleH2.innerText = spiceBlendObj.title
    spiceImg.src = spiceBlendObj.image
    displayedSpice = spiceBlendObj

    

    let arrayOfIngredients = spiceBlendObj.ingredients
    arrayOfIngredients.forEach((ing) => {
        let ingredientLi = document.createElement('li')
        ingredientLi.innerText = ing.name
        ingredientsUl.append(ingredientLi)

    })

})

updateNameForm.addEventListener('submit', (e) => {
        
    e.preventDefault()
    let newSpiceTitle = updateNameForm.title.value

    fetch("http://localhost:3000/spiceblends/1", {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: newSpiceTitle
  })
})
  .then((r) => r.json())
  .then((updatedSpice) => {
        titleH2.innerText = updatedSpice.title
        displayedSpice.title = updatedSpice.title
  })

    
})

updateIngredientForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let ingredientUpdateLi = document.createElement('li')
    fetch("http://localhost:3000/spiceblends/1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name = 
        }),
      })
        .then((r) => r.json())
        .then((spiceblendObj) => console.log(spiceblendObj));
      
        ingredientUpdateLi.innerText = updateIngredientForm.name.value
        ingredientsUl.append(ingredientUpdateLi)
})
