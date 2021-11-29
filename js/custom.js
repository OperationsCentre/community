var staticURL = 'https://rust-servers.net/api/?object=servers&element=detail&key=5vFm4JoByS3EurCBP03CyMpiPfRitI5aM8q'

$.getJSON(staticURL, function(data) {
    var progressbar = document.getElementById("rust-population")
    var playercount = data.players
    var playermax = data.maxplayers
        //var playercount = 20
    progressbar.value = playercount

    progressbar.max = playermax

    var currentplayerstext = playercount + "/" + playermax
    progressbar.setAttribute("data-text", currentplayerstext)

    var servername = document.getElementById("rust-servername")
    servername.innerHTML = data.hostname

    var rustrank = document.getElementById("rust-rank")
    var rank = data.rank
    console.log(rank)
    rustrank.innerHTML = data.rank

});