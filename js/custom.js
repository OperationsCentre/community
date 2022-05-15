var conanServerData =
  "https://conan-exiles.com/api/?object=servers&element=detail&key=qdfJdmRt2dSknNcCJAn3hJSSmyO1uejpfYB";

$.getJSON(conanServerData, function (data) {
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

var rustSererData =
  "https://rust-servers.net/api/?object=servers&element=detail&key=c0T0pgPyaS6EnnU1XuTjFh1rmvJdPQz1gnE";

$.getJSON(rustSererData, function (data) {
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

  var uptimeEnt = document.getElementById("rust-uptime");
  var uptime = data.uptime;
  uptimeEnt.innerHTML = uptime;
});

var rustServerDataBattle = "https://api.battlemetrics.com/servers/14481826";

$.getJSON(rustServerDataBattle, function (data) {
  var rustfps = document.getElementById("rust-curfps");
  rustfps.innerHTML = data.data.attributes.details.rust_fps;

  var rustfps = document.getElementById("rust-avgfps");
  rustfps.innerHTML = data.data.attributes.details.rust_fps_avg;

  var lastwipe = document.getElementById("rust-wipe");
  var wipe = data.data.attributes.details.rust_last_wipe;
  console.log(wipe);
  lastwipe.innerHTML = wipe;
});
