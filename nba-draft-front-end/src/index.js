
const BASE_URL = "http://localhost:3000"
const TEAMS_URL = `${BASE_URL}/teams`
const PLAYERS_URL = `${BASE_URL}/players`

 document.addEventListener("DOMContentLoaded" , function() {
    //getRandomTeams()
    getAllTeams()

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
        let randomTeam = allTeams[Math.floor(Math.random() * allTeams.length)]
        let newTeamArray = []
        newTeamArray.push(randomTeam)
        console.log(randomTeam)
        newTeamArray.forEach(team => {renderSingleTeam(team)})
    })

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
    teamName.innerText = `${team.location}  ${team.name}` 
    
    let playerList = document.createElement("ul")
    playerList.id = `player-list-${team.id}`

    team.players.forEach(play => { renderSinglePlayer (play, playerList)})
   
    teamContainer.append(teamCard) 
    teamCard.append(teamLogo)
    teamCard.append(teamName) 
    teamCard.append(playerList)
    console.log(team)

}  

function addNewPlayer(teamId){
    console.log("add a new player !!")  
}


function renderSinglePlayer(players, playerList) {
    let playerLi = document.createElement('li')
    playerLi.id = `player-${players.id}`
    playerLi.innerText = `${players.name}`
    playerList.append(playerLi) 

    const tradePlayerBtn = document.createElement('button')
    tradePlayerBtn.innerText = "Trade"
    tradePlayerBtn.dataset.playerID = players.id 
    tradePlayerBtn.addEventListener('click',tradePlayer)
    tradePlayerBtn.classList.add('button')
    playerList.append(tradePlayerBtn)
}   



function tradePlayer(event) {
    console.log('Trade this Player!! ')
}