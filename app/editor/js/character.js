let character = {};

function deriveAttributes(c) {
    if (c.pow_b == '') return;

    c.sp = c.pow_b * 1;
    c.mp = c.pow_5;

    if (c.con_b == '' || c.siz_b == '') return;
    c.hp = Math.floor((parseInt(c.con_b) + parseInt(c.siz_b)) / 10);

}


function dice(n, d, c = 0) {
    var sum = c;

    for (var i = 0; i < n; i++) {
        sum += Math.floor((Math.random() * d) + 1);
    }

    return sum;
}

function saveProficiency(key, val) {
    if (val == '') return;

    character[key + '_b'] = val;
    character[key + '_2'] = Math.ceil(parseInt(val) / 2);
    character[key + '_5'] = Math.ceil(parseInt(val) / 5);
}