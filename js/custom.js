var conanServerData = 'https://conan-exiles.com/api/?object=servers&element=detail&key=pPErjPgTNAqpdedOFkVcIFYJeF2JXdWYR88'

$.getJSON(conanServerData, function(data) {
    var progressbar = document.getElementById("conan-population");
    var playercount = data.players;
    var playermax = data.maxplayers;
    progressbar.value = playercount;

    progressbar.max = playermax;

    var currentplayerstext = playercount + "/" + playermax;
    progressbar.setAttribute("data-text", currentplayerstext);

    var servername = document.getElementById("conan-servername");
    servername.innerHTML = data.hostname;

    var rustrank = document.getElementById("conan-rank");
    var rank = data.rank;
    rustrank.innerHTML = data.rank;

});