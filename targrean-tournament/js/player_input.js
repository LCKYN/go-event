var players_list = document.getElementById("players_list");
var line_counter = document.getElementById("line_counter");

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
