
const BASE_URL = "http://localhost:3000"
const TEAMS_URL = `${BASE_URL}/teams`
const PLAYERS_URL = `${BASE_URL}/players`

 document.addEventListener("DOMContentLoaded" , function() {
    getRandomTeams()
    getallPlayers() 
})  

function getAllTeams(){
    fetch(TEAMS_URL)
    .then(response => response.json())
    .then( allTeams => {allTeams.forEach(team => {
            renderSingleTeam(team)})
    })
} 

 function getRandomTeams(){
     fetch(TEAMS_URL)
    .then(response => response.json())
    .then( allTeams => { 
        for ( i =0 ; i < 12 ; i++) {
            var index = Math.floor(Math.random() * allTeams.length)
            var pickedTeam = allTeams[index] 
            allTeams.splice(index,1)
            renderSingleTeam(pickedTeam) 
        }
    })
 } 

function renderSingleTeam(team) { 

    let teamContainer = document.querySelector('main')
    // let teamContainer = document.querySelector('#teams-container')
    let teamCard = document.createElement('div') 
    teamCard.dataset.id = team.id
    teamCard.classList.add('card') 
    
    let teamLogo = document.createElement('img')
    teamLogo.classList.add('logo-avatar')
    teamLogo.src = team.logo
    
    let addPlayerButton = document.createElement('button')
    addPlayerButton.innerText = "Add New Player"
    addPlayerButton.classList.add('button')
    addPlayerButton.addEventListener('click', addNewPlayer)

    let teamName = document.createElement('p') 
    teamName.innerText = `${team.location}  ${team.name}` 
    
    let playerList = document.createElement('ul')
    playerList.id = `player-list-${team.id}`

    team.players.forEach(plr => {renderSinglePlayer(plr, playerList)})

    teamContainer.append(teamCard) 
    teamCard.append(teamLogo)
    teamCard.append(teamName) 
    teamCard.append(playerList)     
    teamCard.append(addPlayerButton)

}  

function getallPlayers() {
    fetch(PLAYERS_URL)
    .then(response => response.json())
    .then( allplayers => {
        allplayers.forEach(player => renderAllplayers(player))
    })
}
function renderAllplayers(player) {
    
    // let playersContainer = document.querySelector('#players-container') 
    let playersContainer = document.querySelector('#players-container') 
    let playerCard = document.createElement('div')
    playerCard.classList.add('card') // change to 'card'
    playerCard.dataset.id = `player-${player.id}`
    
    let playername = document.createElement('h2')
    let playerPosition = document.createElement('h3')
    let playercountry = document.createElement('h2')
    let playercollege = document.createElement('h2') 
    let pickPlayer = document.createElement('button')
    let profilePlayer = document.createElement('button')
    let retirePlayer = document.createElement('button')
    let draftPick = document.createElement('h2')
    
    playername.innerText = player.player_name
    playercountry.innerText = player.country
    playercollege.innerText = player.college 
    pickPlayer.innerText = "Pick Player"
    profilePlayer.innerText = "View Stats"
    retirePlayer.innerText = "Retrire Player"

    pickPlayer.addEventListener('click', addNewPlayer)
    profilePlayer.addEventListener('click', getProfile)
    retirePlayer.addEventListener('click', retirePlayer)
    
    playersContainer.append(playerCard)  
    playerCard.append(playername)
    playerCard.append(playercountry)
    playerCard.append(playercollege) 
    playerCard.append(pickPlayer) 
    playerCard.append(profilePlayer)   
    playerCard.append(retirePlayer) 
      
    console.log(player) 
     
}


function renderSinglePlayer(player, playerList) {
    let playerLi = document.createElement('li')
    playerLi.id = `player-${player.id}`
    playerLi.innerText = `${player.player_name} (${player.player_position})`
    
    const tradePlayerBtn = document.createElement('button')
    tradePlayerBtn.innerText = "Trade"
    tradePlayerBtn.dataset.playerID = player.id 
    tradePlayerBtn.addEventListener('click',() => tradePlayer(playerLi.id))
    tradePlayerBtn.classList.add('trade')
    
    playerList.append(playerLi) 
    playerList.append(tradePlayerBtn)
}   




function addNewPlayer(teamId){
    console.log("add a new player !!")   
}

function tradePlayer(event,playerID) {
    console.log('Trade this Player!!') 
}

function getProfile(event) {
    console.log('inside profile view!!')

} 