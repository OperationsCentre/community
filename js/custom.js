var rustSererData = 'https://rust-servers.net/api/?object=servers&element=detail&key=5vFm4JoByS3EurCBP03CyMpiPfRitI5aM8q'

$.getJSON(rustSererData, function(data) {
    var progressbar = document.getElementById("rust-population");
    var playercount = data.players;
    var playermax = data.maxplayers;
    //var playercount = 20;
    progressbar.value = playercount;

    progressbar.max = playermax;

    var currentplayerstext = playercount + "/" + playermax;
    progressbar.setAttribute("data-text", currentplayerstext);

    var servername = document.getElementById("rust-servername");
    servername.innerHTML = data.hostname;

    var rustrank = document.getElementById("rust-rank");
    var rank = data.rank;
    rustrank.innerHTML = data.rank;
});

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

var rustServerDataBattle = 'https://api.battlemetrics.com/servers/12487918'

$.getJSON(rustServerDataBattle, function(data) {
    var rustfps = document.getElementById("rust-curfps");
    rustfps.innerHTML = data.data.attributes.details.rust_fps;

    var rustfps = document.getElementById("rust-avgfps");
    rustfps.innerHTML = data.data.attributes.details.rust_fps_avg;
    /*
    var rustfps = document.getElementById("rust-description")
    var description = data.data.attributes.details.rust_description
    description = description.replaceAll("\n", "<br>")
    rustfps.innerHTML = description*/
});



var discordAPI = 'https://discord.com/api/guilds/651455552517570586/widget.json'

const containerOriginal = document.getElementById("live_discord").innerHTML;

var iMax = 8;
$.getJSON(discordAPI, function(data) {
    const container = document.getElementById("live_discord");
    const template = document.getElementById("template");

    var i = 0;

    while (data.members[i] != undefined && i < iMax) {
        const user = template.content.cloneNode(true);

        var para = user.getElementById("name");
        var image = user.getElementById("image");

        para.innerHTML = data.members[i].username;
        image.src = data.members[i].avatar_url;

        container.appendChild(user);
        i = i + 1;

    }
});

function setMaxUsers() {
    const button = document.getElementById("showmorediscordusers");
    if (iMax === 40) {
        button.innerHTML = "Show More";
        iMax = 8;
    } else {
        iMax = 40;
        button.innerHTML = "Show Less";
    }


    $.getJSON(discordAPI, function(data) {
        const container = document.getElementById("live_discord");
        container.innerHTML = containerOriginal;
        const template = document.getElementById("template");

        var i = 0;

        while (data.members[i] != undefined && i < iMax) {
            const user = template.content.cloneNode(true);

            var para = user.getElementById("name");
            var image = user.getElementById("image");

            para.innerHTML = data.members[i].username;
            image.src = data.members[i].avatar_url;

            container.appendChild(user);
            i = i + 1;

        }
    });
};