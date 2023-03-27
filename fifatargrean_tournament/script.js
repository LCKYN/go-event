function myHandler(textbox_id){
    let number = textbox_id.slice(-1);
    let group = textbox_id.slice(-3, -2);
    document.getElementById(`round2_${number}_${group}`).textContent = $(`#${textbox_id}`).val();
}

function round2_winner(button_id){
    let winner_number = button_id.slice(-1);
    let group = button_id.slice(-3, -2);
    let next_group = Math.floor((parseInt(group)+1) / 2);
    let next_group_number = parseInt((parseInt(group)-1) % 2) + 1;
    if (winner_number == "1"){
        $(`#li_round2_${group}_1`).addClass("winner");
        document.getElementById(`round3_${next_group}_${next_group_number}`).textContent = $(`#round2_${group}_1`)[0].outerText;
        $(`#li_round2_${group}_2`).removeClass("winner");
    }
    else{

        $(`#li_round2_${group}_2`).addClass("winner");
        document.getElementById(`round3_${next_group}_${next_group_number}`).textContent = $(`#round2_${group}_2`)[0].outerText;
        $(`#li_round2_${group}_1`).removeClass("winner");
    }
}

function round3_winner(button_id){
    let winner_number = button_id.slice(-1);
    let group = button_id.slice(-3, -2);
    let next_group = Math.floor((parseInt(group)+1) / 2);
    let next_group_number = parseInt((parseInt(group)-1) % 2) + 1;
    if (winner_number == "1"){
        $(`#li_round3_${group}_1`).addClass("winner");
        document.getElementById(`round4_${next_group}_${next_group_number}`).textContent = $(`#round3_${group}_1`)[0].outerText;
        $(`#li_round3_${group}_2`).removeClass("winner");
    }
    else{

        $(`#li_round3_${group}_2`).addClass("winner");
        document.getElementById(`round4_${next_group}_${next_group_number}`).textContent = $(`#round3_${group}_2`)[0].outerText;
        $(`#li_round3_${group}_1`).removeClass("winner");
    }
}


function round4_winner(button_id){
    let winner_number = button_id.slice(-1);
    let group = button_id.slice(-3, -2);
    let next_group = Math.floor((parseInt(group)+1) / 2);
    let next_group_number = parseInt((parseInt(group)-1) % 2) + 1;
    if (winner_number == "1"){
        $(`#li_round4_${group}_1`).addClass("winner");
        document.getElementById(`round5_${next_group}_${next_group_number}`).textContent = $(`#round4_${group}_1`)[0].outerText;
        $(`#li_round4_${group}_2`).removeClass("winner");
    }
    else{

        $(`#li_round4_${group}_2`).addClass("winner");
        document.getElementById(`round5_${next_group}_${next_group_number}`).textContent = $(`#round4_${group}_2`)[0].outerText;
        $(`#li_round4_${group}_1`).removeClass("winner");
    }
}

function round5_winner(button_id){
    let winner_number = button_id.slice(-1);
    let group = button_id.slice(-3, -2);
    let next_group = Math.floor((parseInt(group)+1) / 2);
    let next_group_number = parseInt((parseInt(group)-1) % 2) + 1;
    if (winner_number == "1"){
        $(`#li_round5_${group}_1`).addClass("winner");
        document.getElementById(`round6_${next_group}_${next_group_number}`).textContent = $(`#round5_${group}_1`)[0].outerText;
        $(`#li_round5_${group}_2`).removeClass("winner");
    }
    else{

        $(`#li_round5_${group}_2`).addClass("winner");
        document.getElementById(`round6_${next_group}_${next_group_number}`).textContent = $(`#round5_${group}_2`)[0].outerText;
        $(`#li_round5_${group}_1`).removeClass("winner");
    }
}
