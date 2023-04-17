var all_players = [];

let summit_player_button = document.getElementById("summit_player_button");
summit_player_button.addEventListener("click", add_player);

function add_player() {
    // read data from players_list, split by new line, filter out empty lines
    let players_list = document.getElementById("players_list").value.split("\n").map(player => player.trim()).filter(Boolean);


    for (let player in players_list) {
        player = players_list[player].split(",").map(player => player.trim()).filter(Boolean);
        if (!player[0]) continue;
        if (all_players.some(player_object => player_object.name === player[0])) continue;

        player_object = {
            "name": player[0],
            "image1": null,
            "image2": null,
            "image3": null,
            "match_history": [],
        };

        if (player.length > 1) {
            player_object["image1"] = player[1];
        }
        if (player.length > 2) {
            player_object["image2"] = player[2];
        }
        if (player.length > 3) {
            player_object["image3"] = player[3];
        }
        all_players.push(player_object);
    }
    all_players = all_players.sort((a, b) => a.name.localeCompare(b.name))
    add_to_player_list();
}

var count_number_player = 1;
function add_to_player_list() {
    let display_players = document.getElementById("display_players_list");

    for (let player in all_players) {
        if (display_players.querySelector(`[id="${all_players[player].name}"]`)) continue;

        const main = document.createElement("div");
        main.className = "player-grid-container";

        const number = document.createElement("div");
        const name = document.createElement("div");
        const image1 = document.createElement("div");
        const image2 = document.createElement("div");
        const image3 = document.createElement("div");
        const match_history = document.createElement("div");

        number.innerText = `${count_number_player}.`;
        number.className = "player-grid-item text_right";

        name.id = all_players[player].name;
        name.className = "player-grid-item";
        name.innerText = all_players[player].name;

        image1.id = `${all_players[player].name}_image1`;
        image1.className = "player-grid-item";

        image2.id = `${all_players[player].name}_image2`;
        image2.className = "player-grid-item";

        image3.id = `${all_players[player].name}_image3`;
        image3.className = "player-grid-item";

        match_history.id = `${all_players[player].name}_match_history`;
        match_history.className = "player-grid-item";

        main.appendChild(number);
        main.appendChild(name);
        main.appendChild(image1);
        main.appendChild(image2);
        main.appendChild(image3);
        main.appendChild(match_history);

        display_players.appendChild(main);

        count_number_player += 1;
    }
}
