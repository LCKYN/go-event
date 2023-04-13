var data = [
    {
        "name": "Jumper",
        "time": new Date("04/07/2023 11:40 PM"),
        "tactic": "4-3-3",
        "backfield": 4,
        "midfield": 3,
        "forward": 3,
        "image": "https://cdn.discordapp.com/attachments/1087752910756126752/1093938277855285308/image.png",
    },
    {
        "name": "Ford",
        "time": new Date("04/07/2023 11:38 PM"),
        "tactic": "4-3-3",
        "backfield": 4,
        "midfield": 3,
        "forward": 3,
        "image": "https://cdn.discordapp.com/attachments/1087752910756126752/1093937877689323530/image.png",
    },
    {
        "name": "Arona",
        "time": new Date("04/07/2023 11:38 PM"),
        "tactic": "4-2-3-1",
        "backfield": 4,
        "midfield": 5,
        "forward": 1,
        "image": "https://cdn.discordapp.com/attachments/1087752910756126752/1093937824845271040/image.png",
    },
    {
        "name": "AuiAuii",
        "time": new Date("04/07/2023 11:38 PM"),
        "tactic": "4-1-1-4",
        "backfield": 4,
        "midfield": 2,
        "forward": 4,
        "image": "https://cdn.discordapp.com/attachments/1087752910756126752/1093937763407106149/Screenshot_2023-04-03_212737.png",
    },
    {
        "name": "Melly69",
        "time": new Date("04/07/2023 11:38 PM"),
        "tactic": "4-3-3",
        "backfield": 4,
        "midfield": 3,
        "forward": 3,
        "image": "https://cdn.discordapp.com/attachments/1087752910756126752/1093937762341748888/image.png",
    },
    {
        "name": "c1ONUTx",
        "time": new Date("04/07/2023 11:38 PM"),
        "tactic": "4-3-3",
        "backfield": 4,
        "midfield": 3,
        "forward": 3,
        "image": "https://cdn.discordapp.com/attachments/1087752910756126752/1093937760756305930/image.png",
    },
    {
        "name": "DEK_NA_HEE",
        "time": new Date("04/07/2023 11:38 PM"),
        "tactic": "4-3-3",
        "backfield": 4,
        "midfield": 3,
        "forward": 3,
        "image": "https://cdn.discordapp.com/attachments/1087752910756126752/1093937750060826764/image.png",
    },
    {
        "name": "MarkzanaRak",
        "time": new Date("04/07/2023 11:37 PM"),
        "tactic": "4-3-3",
        "backfield": 4,
        "midfield": 3,
        "forward": 3,
        "image": "https://cdn.discordapp.com/attachments/1087752910756126752/1093937699158765578/efot.PNG",
    },
    // {
    //     "name": "",
    //     "time": new Date(""),
    //     "tactic": "",
    //     "backfield": ,
    //     "midfield": ,
    //     "forward": ,
    //     "image": "",
    // }
]

document.getElementById("search").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let tactic = document.getElementById("full_tactic").value;
    let backfield = tactic ? tactic.split("-")[0] : document.getElementById("backfield").value;
    let midfield = tactic ? tactic.split("-")[1] : document.getElementById("midfield").value;
    let forward = tactic ? tactic.split("-")[2] : document.getElementById("forward").value;
    show_data(name, parseInt(backfield), parseInt(midfield), parseInt(forward));

});

function show_data(name, backfield, midfield, forward) {
    let main = document.getElementById("show_data");
    main.innerHTML = "";

    let res = data.sort(function(a,b){
        return new Date(b.time) - new Date(a.time);
      });

    if (name) {
        res = res.filter(data => new RegExp(name, "i").exec(data.name));
    }
    if (backfield) {
        res = res.filter(data => data.backfield == backfield);
    }
    if (midfield) {
        res = res.filter(data => data.midfield == midfield);
    }
    if (forward) {
        res = res.filter(data => data.forward == forward);
    }

    let count = 0;

    for (const tactic in res) {
        const tactic_box = document.createElement("div");
        tactic_box.className = "flex_column_center small_margin";

        const tactic_name = document.createElement("label");
        tactic_name.className = "small_margin";
        tactic_name.innerText = `(${res[tactic].tactic}) By ${res[tactic].name} - ${res[tactic].time.toLocaleString().split(',')[0]}`;

        const tactic_image = document.createElement("img");
        tactic_image.className = "image3";
        tactic_image.src = res[tactic].image;

        tactic_box.appendChild(tactic_name);
        tactic_box.appendChild(tactic_image);

        main.appendChild(tactic_box);

        count += 1;

        if (count > 20)
            break;
    }
}
