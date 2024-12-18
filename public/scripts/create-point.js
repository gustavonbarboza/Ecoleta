
function populateUFs() { 
  const ufSelect = document.querySelector ("select[name=uf]")

  fetch ("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then( res => res.json() )
  .then ( states => {

    for ( const state of states ) {
      ufSelect.innerHTML += `<option value ="${state.id}">${state.nome}</option>`
    }

  } )
}

populateUFs()


function getCities(event) {
  const citySelect = document.querySelector ("[name=city]")
  const stateInput = document.querySelector ("[name=states]")

  const ufValue = event.target.value

  const indexOfSelectedState = event.target.selectedIndex 
  stateInput.value = event.target.options[indexOfSelectedState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  citySelect.innerHTML = "<option value>Selecione a cidade</option> "
  citySelect.disable = true

  fetch (url)
  .then( res => res.json() )
  .then ( cities => {

    for ( const city of cities ) {
      citySelect.innerHTML += `<option value ="${city.nome}">${city.nome}</option>`
    }

    citySelect.disabled = false
  } )
}


document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)


//Itens de coleta
const itensToCollect = document.querySelectorAll(".itens-grid li")

for (const item of itensToCollect) {
  item.addEventListener ("click", handleSelectedItem)
}

const collectedItens = document.querySelector("input[name=itens]")

let selectedItens = []

function handleSelectedItem(event) {
  const itemLi = event.target
  //adicionar ou remover uma classe com javascript
  itemLi.classList.toggle("selected")

  const itemId = itemLi.dataset.id

  console.log('ITEM ID:', itemId)
  
  const alreadySelected = selectedItens.findIndex( item => {
      const itemFound = item == itemId //isso sera true ou falso
      return itemFound

    })

  if( alreadySelected >= 0 ) {
    //tirar da selecao
    const filteredItens = selectedItens.filter( item => {
        const itensIsDifferent = item != itemId
        return itensIsDifferent
    })
    
    selectedItens = filteredItens
  } 
  
  else {
    selectedItens.push(itemId)
  }


  console.log ('selectedItens: ', selectedItens)
  collectedItens.value = selectedItens

}