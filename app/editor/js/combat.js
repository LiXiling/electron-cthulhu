var t = $('#tb_combat')[0];
var r = t.rows;

for (var i = 1; i < r.length; i++){
    var c = r[i].cells;

    for (var j = 0; j < c.length; j++){
        var txt = c[j].textContent;

        if (txt != '') console.log(txt);
    }
}