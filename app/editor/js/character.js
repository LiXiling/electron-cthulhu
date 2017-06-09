let character = {};

function deriveAttributes(c) {
    computeMental(c)
    computePhysical(c)
}

function computeMental(c) {
    if (c.pow_b == '') return;

    c.sp = c.pow_b * 1;
    c.mp = c.pow_5;
}

function computePhysical(c) {
    if (c.con_b == '' || c.siz_b == '') return;
    c.hp = Math.floor((parseInt(c.con_b) + parseInt(c.siz_b)) / 10);

    var phys = parseInt(c.con_b) + parseInt(c.siz_b);

    if (phys < 65) {
        c.db = "-2";
        c.build = "-2";
    } else if (phys < 85) {
        c.db = "-1";
        c.build = "-1"
    } else if (phys < 125) {
        c.db = "0";
        c.build = "0"
    } else if (phys < 165) {
        c.db = "+1D4";
        c.build = "+1"
    } else if (phys < 205) {
        c.db = "+1D6";
        c.build = "+2"
    }
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