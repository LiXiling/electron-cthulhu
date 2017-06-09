var attributes_1 = ['str', 'con', 'siz', 'dex', 'int', 'app', 'pow', 'edu', 'lck'],
    attributes_2 = ['siz', 'int', 'edu'],
    att_names = [
        'Strength', 'Constiution', 'Size', 'Dexterity', 'Intelligence', 'Appearance', 'Power', 'Education', 'Luck'
    ];

function saveAttributes() {
    var allAttributes = attributes_1;

    for (var i = 0; i < allAttributes.length; i++) {
        var attr = allAttributes[i];
        var val = $('#tf_' + attr)[0].value;

        saveProficiency(attr, val);
    }

    deriveAttributes(character);

    document.getElementById("tab_skills1").click();
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

function buildAttributionForm() {
    var allAttributes = attributes_1;

    for (var i = 0; i < allAttributes.length; i++) {
        var attr = allAttributes[i];
        var name = att_names[i];

        $('#form_attr').append(
            "<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">" +
            "<input class=\"mdl-textfield__input\" type=\"text\" pattern=\"-?[0-9]*(\.[0-9]+)?\" id=\"tf_" + attr + "\">" +
            "<label class=\"mdl-textfield__label\" for=\"tf_" + attr + "\">" + name + "</label>" +
            "<span class=\"mdl-textfield__error\">Input is not a number!</span>" +
            "</div>"
        )

    }
}

buildAttributionForm();
componentHandler.upgradeDom();