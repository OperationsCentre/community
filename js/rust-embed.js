//var discordAPI = 'https://discord.com/api/guilds/651455552517570586/members'

//const containerOriginal = document.getElementById("live_discord").innerHTML;
/*
var iMax = 8;
$.getJSON(discordAPI, function(data) {
    console.log(data)

    
});
*/

/*

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
*/