function saveAttributes() {
    var allAttributes = attributes_1.concat(attributes_2);

    for (var i = 0; i < allAttributes.length; i++) {
        var attr = allAttributes[i];
        var val = $('#tf_' + attr)[0].value;

        if (val == '') continue;

        character[attr + '_b'] = val;
        character[attr + '_2'] = Math.ceil(parseInt(val) / 2);
        character[attr + '_5'] = Math.ceil(parseInt(val) / 5);
    }

    deriveAttributes(character);

    ipcRenderer.send('open-viewer', character);
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
}