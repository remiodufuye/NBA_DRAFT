
const BASE_URL = "http://localhost:3000"
const TEAMS_URL = `${BASE_URL}/teams`
const PLAYERS_URL = `${BASE_URL}/players`

 document.addEventListener("DOMContentLoaded" , function() {
    getRandomTeams()
    getallPlayers() 
})  


 function getRandomTeams(){
     fetch(TEAMS_URL)
    .then(response => response.json())
    .then( allTeams => { 
        for ( i =0 ; i < 4 ; i++) {
            var index = Math.floor(Math.random() * allTeams.length)
            var pickedTeam = allTeams[index] 
            allTeams.splice(index,1)
            renderSingleTeam(pickedTeam) 
        }
    })
 } 

function renderSingleTeam(team) { 

    let teamContainer = document.querySelector('main')
    let teamCard = document.createElement('div') 
    teamCard.dataset.id = team.id
    teamCard.classList.add('card') 
    
    let teamLogo = document.createElement('img')
    teamLogo.classList.add('logo-avatar')
    teamLogo.src = team.logo
    
    let teamName = document.createElement('p') 
    teamName.innerText = `${team.location}  ${team.name}` 
    
    let playerList = document.createElement('ul')
    playerList.id = `player-list-${team.id}`

    let playerButton = document.createElement('button')
    playerButton.classList.add('button')
    playerButton.innerText = "Add New Player"

    playerButton.addEventListener("click" ,  () => )
    team.players.forEach(play => { renderSinglePlayer (play, playerList)})   

    teamContainer.append(teamCard) 
    teamCard.append(teamLogo)
    teamCard.append(teamName) 
    teamCard.append(playerList) 
    teamCard.append(playerButton)

}  

function getallPlayers() {
    fetch(PLAYERS_URL)
    .then(response => response.json())
    .then( allplayers => {
        allplayers.forEach(player => renderAllplayers(player))
    })
}
function renderAllplayers(player) {
    
    let playersContainer = document.querySelector('#players-container') 
    let playerCard = document.createElement('div')
    playerCard.classList.add('card') // change to 'card'
    playerCard.dataset.id = `player-${player.id}`
    
    let playername = document.createElement('h2')
    let playercountry = document.createElement('h2')
    let playercollege = document.createElement('h2') 
    let pickPlayer = document.createElement('button')
    let profilePlayer = document.createElement('button')
    let draftPick = document.createElement('h2')
    
    playername.innerText = player.player_name
    playercountry.innerText = player.country
    playercollege.innerText = player.college 
    pickPlayer.innerText = "Pick Player"
    profilePlayer.innerText = "View Stats"
    pickPlayer.addEventListener('click', addNewPlayer)
    profilePlayer.addEventListener('click', getProfile)
    
    playersContainer.append(playerCard)  
    playerCard.append(playername)
    playerCard.append(playercountry)
    playerCard.append(playercollege) 
    playerCard.append(pickPlayer) 
    playerCard.append(profilePlayer)     
    console.log(player) 
     
}


function renderSinglePlayer(player, playerList) {
    let playerLi = document.createElement('li')
    playerLi.id = `player-${player.id}`
    playerLi.innerText = `${player.player_name}`
    playerList.append(playerLi) 
    const tradePlayerBtn = document.createElement('button')
    tradePlayerBtn.innerText = "Trade"
    tradePlayerBtn.dataset.playerID = player.id 
    tradePlayerBtn.addEventListener('click',tradePlayer)
    tradePlayerBtn.classList.add('button')
    playerList.append(tradePlayerBtn)
}   


function addNewPlayer(teamId){
    console.log("add a new player !!")   
}

function tradePlayer(event) {
    console.log('Trade this Player!!') 
}

function getProfile(event) {
    console.log('inside profile view!!')

} 