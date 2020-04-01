
/***** Deliverable 1 *****/
document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector("#header")
    const playerContainer = document.querySelector('.player-container')
    
    
    console.log("Here's your header:", header)

    /***** Deliverable 2 *****/
    header.style.color = 'red'

    /***** Deliverable 3 *****/
    console.log("PLAYERS array looks like this:", PLAYERS)
    PLAYERS.forEach((player) => {
        playerDiv = document.createElement('div')
        playerDiv.innerHTML = 
        `
        <div class="player" data-number="${player.number}">
        <h3>
          ${player.name} (<em>${player.nickname}</em>)
        </h3>
        <img src="${player.photo}" alt="${player.name}">
      </div>
        `
        playerContainer.append(playerDiv)
        
    })

    /***** Deliverable 4 *****/
    const unwantedPlayer = document.querySelector("div [data-number='7']")
    unwantedPlayer.remove()
    
})









