
const BASE_URL = "http://localhost:3000"
const TEAMS_URL = `${BASE_URL}/teams`
const PLAYERS_URL = `${BASE_URL}/players`

 document.addEventListener("DOMContentLoaded" , function() {
     getAllTeams()

})  


function getAllTeams(){
    fetch(TEAMS_URL)
    .then(response => response.json())
    .then( allTeams => {allTeams.forEach(team => {
            renderSingleTeam(team)})
    })
} 

function getRandomTeam(){

}

function renderSingleTeam(team) {
     
    let teamContainer = document.querySelector("main")
    let teamCard = document.createElement('div') 
    teamCard.dataset.id = team.id
    teamCard.classList.add('card') 
    
    let teamLogo = document.createElement('img')
    teamLogo.classList.add('logo-avatar')
    teamLogo.src = team.logo
    
    let teamName = document.createElement('p') 
    teamName.innerText = team.name 

    let addPlayerButton = document.createElement('button')
    addPlayerButton.classList.add('button')
    addPlayerButton.innerText = "Add Player" 
    addPlayerButton.addEventListener("click",() => addNewPlayer(team.id))

    let playerList = document.createElement("ul")
    playerList.id = `player-list-${team.id}`

    team.players.forEach(play => { renderSinglePlayer (play, playerList)})
   

    teamContainer.append(teamCard) 
    teamCard.append(teamLogo)
    teamCard.append(teamName) 
    teamCard.append(addPlayerButton) 
    teamCard.append(playerList)

    console.log(team)
}  




function addNewPlayer(teamId){
    console.log("add a new player !!")  
}


function renderSinglePlayer() {
}