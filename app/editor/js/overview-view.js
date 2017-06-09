const { ipcRenderer } = require('electron')

function saveOverview() {
    var name = $('#tf_name')[0].value,
        job = $('#tf_job')[0].value,
        age = $('#tf_age')[0].value,
        origin = $('#tf_origin')[0].value;

    character.name = name;
    character.job = job;
    character.age = age;
    character.origin = origin;

    document.getElementById("tab_attributes").click();
}

function viewSheet(){
    ipcRenderer.send('open-viewer', character);
}