let character = {};
var attributes_1 = ['str', 'con', 'siz', 'dex', 'int', 'app', 'pow', 'edu', 'lck'],
    attributes_2 = ['siz', 'int', 'edu'];

function deriveAttributes(c) {
    c.sp = c.pow_b * 1;
    c.mp = c.pow_5;
    c.hp = Math.floor((parseInt(c.con_b) + parseInt(c.siz_b)) / 10);

}


function dice(n, d, c = 0) {
    var sum = c;

    for (var i = 0; i < n; i++) {
        sum += Math.floor((Math.random() * d) + 1);
    }

    return sum;
}