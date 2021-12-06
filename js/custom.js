var rustSererData = 'https://rust-servers.net/api/?object=servers&element=detail&key=5vFm4JoByS3EurCBP03CyMpiPfRitI5aM8q'

$.getJSON(rustSererData, function(data) {
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

var conanServerData = 'https://conan-exiles.com/api/?object=servers&element=detail&key=pPErjPgTNAqpdedOFkVcIFYJeF2JXdWYR88'

$.getJSON(conanServerData, function(data) {
    var progressbar = document.getElementById("conan-population")
    var playercount = data.players
    var playermax = data.maxplayers
    progressbar.value = playercount

    progressbar.max = playermax

    var currentplayerstext = playercount + "/" + playermax
    progressbar.setAttribute("data-text", currentplayerstext)

    var servername = document.getElementById("conan-servername")
    servername.innerHTML = data.hostname

    var rustrank = document.getElementById("conan-rank")
    var rank = data.rank
    console.log(rank)
    rustrank.innerHTML = data.rank
});

var rustServerDataBattle = 'https://api.battlemetrics.com/servers/12487918'

$.getJSON(rustServerDataBattle, function(data) {
    var rustfps = document.getElementById("rust-curfps")
    rustfps.innerHTML = data.data.attributes.details.rust_fps

    var rustfps = document.getElementById("rust-avgfps")
    rustfps.innerHTML = data.data.attributes.details.rust_fps_avg
        /*
        var rustfps = document.getElementById("rust-description")
        var description = data.data.attributes.details.rust_description
        description = description.replaceAll("\n", "<br>")
        rustfps.innerHTML = description*/
});