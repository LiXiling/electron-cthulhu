const { ipcRenderer } = require('electron')

var c = {};

function saveOverview() {
    var name = $('#tf_name')[0].value,
        job = $('#tf_job')[0].value,
        age = $('#tf_age')[0].value,
        origin = $('#tf_origin')[0].value;

    if (name == '' || job == '') {
        return false;
    }

    c.name = name;
    c.job = job;
    c.age = age;
    c.origin = origin;
    console.log(c);

    document.getElementById("tab_attributes").click()
}

function saveAttributes() {
    var str = $('#tf_str')[0].value;
    c.str_b = str;
    c.str_2 = Math.floor(parseInt(str) / 2);
    c.str_5 = Math.floor(parseInt(str) / 5);


    ipcRenderer.send('open-viewer', c)
}