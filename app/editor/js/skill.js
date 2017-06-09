var skills1 = [
    "Archäologie (01%)",
    "Charme (15%)",
    "Einschüchtern (15%)",
    "Elektrotechnik (07%)",
    "Erste Hilfe (30%)",
    "Fahren (20%)",
    "Fingerfertigkeit (10%)",
    "Geschichte (05%)",
    "Klettern (20%)",
    "Lauschen (20%)",
    "Mechanik (10%)",
    "Medizin (01%)",
];
var skills2 = [
    "Naturkunde (10%)",
    "Okkultismus (05%)",
    "Orientierung (10%)",
    "Psychologie (10%)",
    "Recherche (20%)",
    "Schleichen (20%)",
    "Schließtechnik (01%)",
    "Schweres Gerät (01%)",
    "Schwimmen (20%)",
    "Schwindeln (05%)",
    "Springen (20%)",
    "Spurensuche (10%)",

];
var skills3 = [
    "Überzeugen (10%)",
    "Verkleiden (05%)",
    "Wahrnemung (25%)",
    "Werfen (20%)",
    "Werte schätzen (05%)"
];

function buildSkillForm(page, skills) {
    for (var i = 0; i < skills.length; i++) {
        var s = skills[i];
        addFormInput(page, "sk" + index, s)
        index++;
    }
}

function addFinanceForm() {
    addFormInput(3, "fin", "Finance")
}

function addFormInput(page, id, label) {
    $('#form_sk' + page).append(
        "<div class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label\">" +
        "<input class=\"mdl-textfield__input\" type=\"text\" pattern=\"-?[0-9]*(\.[0-9]+)?\" id=\"tf_" + id + "\">" +
        "<label class=\"mdl-textfield__label\" for=\"tf_" + id + "\">" + label + "</label>" +
        "<span class=\"mdl-textfield__error\">Input is not a number!</span>" +
        "</div>"
    )
}

function saveSkills(page) {
    var indices = threshholds[page-1];

    for (var i = indices[0]; i < indices[1]; i++) {
        var key = "sk" + i;
        var val = $('#tf_' + key)[0].value;

        saveProficiency(key, val);
    }

    var nextPage = parseInt(page) + 1;
    if (nextPage == 4)
        ipcRenderer.send('open-viewer', character);
    else
        document.getElementById("tab_skills" + nextPage).click();
}

var index = 1;
var tmp = index;
var threshholds = [];

buildSkillForm(1, skills1);
threshholds.push([tmp, index])

tmp = index
buildSkillForm(2, skills2);
threshholds.push([tmp, index])

tmp = index;
buildSkillForm(3, skills3);
threshholds.push([tmp, index])

addFinanceForm();

componentHandler.upgradeDom();