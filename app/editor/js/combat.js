var t = $('#tb_combat')[0];
var r = t.rows;


function saveCombat() {

    for (var i = 1; i < r.length; i++) {
        var c = r[i].cells;

        for (var j = 0; j < c.length; j++) {
            var txt = c[j].textContent;

            if (txt != '')
                character["cb_" + i + "_" + j] = txt
        }
    }

    console.log(character)
}