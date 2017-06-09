const { ipcRenderer } = require('electron')

var c = {};

function saveOverview() {
    var name = $('#tf_name')[0].value,
        job = $('#tf_job')[0].value,
        age = $('#tf_age')[0].value,
        origin = $('#tf_origin')[0].value;

    c.name = name;
    c.job = job;
    c.age = age;
    c.origin = origin;
    console.log(c);

    document.getElementById("tab_attributes").click()
}

var attributes_1 = ['str', 'con', 'siz', 'dex', 'int', 'app', 'pow', 'edu'],
    attributes_2 = ['siz', 'int', 'edu'];

function saveAttributes() {
    var allAttributes = attributes_1.concat(attributes_2);

    for (var i = 0; i < allAttributes.length; i++){
        var attr = allAttributes[i];
        var val = $('#tf_' + attr)[0].value;
        c[attr + '_b'] = val;
        c[attr + '_2'] = Math.ceil(parseInt(val) / 2);
        c[attr + '_5'] = Math.ceil(parseInt(val) / 5);    
    }

    c.lck = $('#tf_lck')[0].value;

    ipcRenderer.send('open-viewer', c)
}

function shuffleAttributes() {
    for (var i = 0; i < attributes_1.length; i++) {
        var att = attributes_1[i];
        $('#tf_' + att)[0].parentElement.MaterialTextfield.change(dice(3, 6) * 5);
    }

    for (var i = 0; i < attributes_2.length; i++) {
        var att = attributes_2[i];
        $('#tf_' + att)[0].parentElement.MaterialTextfield.change(dice(2, 6, 6) * 5);
    }

    $('#tf_lck')[0].parentElement.MaterialTextfield.change(dice(3, 6) * 5);
}

function dice(n, d, c = 0) {
    var sum = c;

    for (var i = 0; i < n; i++) {
        sum += Math.floor((Math.random() * d) + 1);
    }

    return sum;
}