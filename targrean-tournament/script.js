var players_list = document.getElementById("players_list");
var line_counter = document.getElementById("line_counter");

let all_players = [];

players_list.addEventListener("scroll", () => {
    line_counter.scrollTop = players_list.scrollTop;
    line_counter.scrollLeft = players_list.scrollLeft;
});

players_list.addEventListener("keydown", (e) => {
    let { keyCode } = e;
    let { value, selectionStart, selectionEnd } = players_list;
    if (keyCode === 9) {
        // TAB = 9
        e.preventDefault();
        players_list.value = value.slice(0, selectionStart) + "\t" + value.slice(selectionEnd);
        players_list.setSelectionRange(selectionStart + 2, selectionStart + 2);
    }
});

var lineCountCache = 0;
function add_line_counter() {
    var lineCount = players_list.value.split("\n").length;
    var outarr = new Array();
    if (lineCountCache != lineCount) {
        for (var x = 0; x < lineCount; x++) {
            outarr[x] = x + 1 + ".";
        }
        line_counter.value = outarr.join("\n");
    }
    lineCountCache = lineCount;
}

players_list.addEventListener("input", () => {
    add_line_counter();
});

























function get_player_name() {
    let all_player_name = document.getElementById("players_list").value;
    let players_list = all_player_name.split("\n").filter(Boolean);

    return players_list;
}

function pre_process_player(player_data) {
    let player = player_data.split(",").filter(Boolean);

    for (let index = 0; index < player.length; index++) {
        player[index] = player[index].trim();
    }

    player = player.filter(Boolean);

    let temp_player = { name: player[0] };

    if (player.length > 1) {
        temp_player["image1"] = player[1];
    }
    if (player.length > 2) {
        temp_player["image2"] = player[2];
    }
    if (player.length > 3) {
        temp_player["image3"] = player[3];
    }
    return temp_player
}

function add_player() {
    all_players = [];
    let players_list = get_player_name();

    for (let index = 0; index < players_list.length; index++) {
        let player_data = players_list[index];
        all_players.push(pre_process_player(player_data));
    }

    update_player_list_table(all_players);
}


function update_player_list_table(players) {

    let player_name_template = (name) => {
        return `<div class="player-lists-grid-item no_border">${name}</div>`
    };
    let player_detail1_template = (detail) => {
        return `<div class="player-lists-grid-item text_center"></div>`;
        // return `<div class="player-lists-grid-item text_center no_border">${detail}</div>`;
    };
    let player_detail2_template = (detail) => {
        return `<div class="player-lists-grid-item text_center"></div>`;
        // return `<div class="player-lists-grid-item text_center no_border">${detail}</div>`;
    };
    let player_detail3_template = (detail) => {
        return `<div class="player-lists-grid-item text_center"></div>`;
        // return `<div class="player-lists-grid-item text_center no_border">${detail}</div>`;
    };
    let match_history_template = (match_history) => {
        return `<div class="player-lists-grid-item text_center no_border">${match_history}</div>`;
    };

    $(document).ready(function () {

        $('#player_list_table').html("");

        // header
        $('#player_list_table').append(`
            <div class="player-lists-grid-item text_center">Player Name</div>
            <div class="player-lists-grid-item text_center no_border"></div>
            <div class="player-lists-grid-item text_center no_border"></div>
            <div class="player-lists-grid-item text_center no_border"></div>
            <div class="player-lists-grid-item text_center">Match History</div>
            <div class="player-lists-grid-item text_center no_border"></div>
            <div class="player-lists-grid-item text_center">Player Name</div>
            <div class="player-lists-grid-item text_center no_border"></div>
            <div class="player-lists-grid-item text_center no_border"></div>
            <div class="player-lists-grid-item text_center no_border"></div>
            <div class="player-lists-grid-item text_center">Match History</div>
        `);

        for (let index = 0; index < (players.length / 2); index++) {
            const element_a = players[index];
            const element_b = players[players.length - index - 1];

            $('#player_list_table').append(`
                ${player_name_template(String(("00" + (index + 1))).slice(-2) + ". " + element_a["name"])}
                ${player_detail1_template(element_a["image1"] ? element_a["image1"] : "")}
                ${player_detail2_template(element_a["image2"] ? element_a["image2"] : "")}
                ${player_detail3_template(element_a["image3"] ? element_a["image3"] : "")}
                ${match_history_template(element_a["match_history"] ? element_a["match_history"] : "")}
                <div class="player-lists-grid-item text_center no_border"></div>
                ${player_name_template(String(("00" + (players.length - index))).slice(-2) + ". " + element_b["name"])}
                ${player_detail1_template(element_b["image1"] ? element_b["image1"] : "")}
                ${player_detail2_template(element_b["image2"] ? element_b["image2"] : "")}
                ${player_detail3_template(element_b["image3"] ? element_b["image3"] : "")}
                ${match_history_template(element_b["match_history"] ? element_b["match_history"] : "")}
            `);

        }
    });
}
