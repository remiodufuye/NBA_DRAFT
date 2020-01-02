
const BASE_URL = "http://localhost:3000"
const TEAMS_URL = `${BASE_URL}/teams`
const PLAYERS_URL = `${BASE_URL}/players`

 document.addEventListener("DOMContentLoaded" , function() {
    event.preventDefault()
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
    let teamCard = document.createElement('div') 
    teamCard.dataset.id = team.id
    teamCard.classList.add('card') 
    
    let teamLogo = document.createElement('img')
    teamLogo.classList.add('logo-avatar')
    teamLogo.src = team.logo
    
    let addPlayerButton = document.createElement('button')
    addPlayerButton.innerText = "Add New Player"
    addPlayerButton.classList.add('button')
    
    let teamName = document.createElement('p') 
    teamName.innerText = `${team.location}  ${team.name}` 
    
    let playerList = document.createElement('ul')
    playerList.id = `team-list-${team.id}`
    
    team.players.forEach(plr => {renderSinglePlayer(plr, playerList)})
    
    addPlayerButton.addEventListener('click', () => addNewPlayer(team.id, playerList))

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
    let playersContainer = document.querySelector('#players-container') 
    let playerCard = document.createElement('div')
    playerCard.classList.add('card') 
    playerCard.dataset.id = `player-${player.id}`
    
    let playername = document.createElement('h2')
    let playercollege = document.createElement('h2') 
    let pickPlayer = document.createElement('button')
    let profilePlayer = document.createElement('button')
    let retirePlayer = document.createElement('button')
    let seasonJoined = document.createElement('h2')
    
    playername.innerText = player.player_name
    playercollege.innerText = `College: ${player.college}` 
    pickPlayer.innerText = "Pick Player"
    profilePlayer.innerText = "View Stats"
    retirePlayer.innerText = "Retrire Player"
    seasonJoined.innerText = ` Joined NBA: ${player.season}`

    pickPlayer.addEventListener('click', addNewPlayer)
    profilePlayer.addEventListener('click', () => getProfile(player.id))
    retirePlayer.addEventListener('click', ()=> removePlayer(player.id,playerCard , player.player_name))
    
    playersContainer.append(playerCard)  
    playerCard.append(playername)
    playerCard.append(playercollege) 
    playerCard.append(seasonJoined) 
    playerCard.append(pickPlayer) 
    playerCard.append(profilePlayer)   
    playerCard.append(retirePlayer) 

    // console.log(player) 
     
}


function renderSinglePlayer(player, playerList) {
    let playerLi = document.createElement('li')
    playerLi.id = `player-${player.id}`
    playerLi.innerText = `${player.player_name} (${player.player_position})`
    
    const tradePlayerBtn = document.createElement('button')
    tradePlayerBtn.innerText = "Trade"
    tradePlayerBtn.dataset.playerID = player.id 
    tradePlayerBtn.addEventListener('click',() => tradePlayer(player.id,playerLi,tradePlayerBtn))
    tradePlayerBtn.classList.add('trade')
    
    playerList.append(playerLi) 
    playerList.append(tradePlayerBtn)
}   


function removePlayer(playerID,playerCard,playerName) {

   const configOptions = {
        method:"DELETE",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
   } 

   fetch(`${BASE_URL}/players/${playerID}`, configOptions) 
   .then(res => res.json())
   .then(data => {
       playerCard.remove()
       const playerLiItem = document.getElementById(`player-${player.id}`)
       playerLiItem.remove() 
    })
   .catch(error => console.log(error))

   alert(`${playerName} Will Be Retired !!`) 

}


function addNewPlayer(teamId,playerList){

    const configOptions = {
        method:"POST",
        headers: {
         "Content-Type":"application/json",
         "Accept":"application/json"
        } ,
        body: JSON.stringify({team_id:teamId})
    }

    const playerCount = playerList.childElementCount
 
    if (playerCount < 5) {
        fetch(PLAYERS_URL,configOptions)
        .then(res => res.json())
        .then(player => {
            const teamID = player.team_id
            const team = document.getElementById(`team-list-${teamID}`)
            renderSinglePlayer(player,team)
            renderAllplayers(player)
        } ).then(error => console.log(error))
    }

    
    console.log("add a new player !!")   
}




function tradePlayer(playerID ,playerLi,playerButton) {
  
        playerLi.remove()
        playerButton.remove()

} 


function getProfile(profileID) {
    
    fetch(`http://localhost:3000/players/${profileID}`) 
    .then(res => res.json())
    .then(data => DisplayProfile(data))
    .catch(error => console.log(error)) 
} 


function DisplayProfile(player) {

    console.log(player)
    
    let myModal = document.getElementById('myModal')
    
    let myModalContent = document.createElement('div')
    myModalContent.classList.add('modal-content')
    
    let myModalSpan = document.createElement('span')
    myModalSpan.classList.add('close')
    myModalSpan.innerText = 'x'
    
    let myModalSpanContent = document.createElement('p')

    myModalSpanContent.innerText = "Is This Working!!" 
    myModal.append(myModalContent)
    myModalContent.append(myModalSpan)
    myModalSpan.append(myModalSpanContent) 
    
    myModal.style.display = "block" ; 
    
    var span = document.getElementsByClassName("close")[0];
    
     span.onclick =  function() {
        myModalSpan.style.display = "none"

        window.onclick = function(event) {
            if (event.target == myModal) {
                myModal.style.display = "none" 
            }
          }

    }
    

    console.log('inside profile/stats view!!')


} 

// id: 190
// player_name: "Karl-Anthony Towns"
// player_position: "Point Guard"
// team_abbreviation: "FAKER"
// age: 19
// player_height: 203.2
// player_weight: 108.86208
// college: "Northern Oklahoma Institute"
// country: "USA"
// draft_year: 2003
// draft_round: 1
// draft_number: 1
// gp: 79
// pts: 20.9
// reb: 5.5
// ast: 5.9
// net_rating: 2.6
// oreb_pct: 0.035
// dreb_pct: 0.116
// usg_pct: 0.28
// ts_pct: 0.488
// ast_pct: 0.268
// season: "2003-04"
// team_id: 275