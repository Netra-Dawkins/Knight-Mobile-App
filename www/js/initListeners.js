
function personnageCreationInit() {
    $('#submit-personnage-creation').on('click', function () {
        const perso = createEmptyPerso();
        const id = app.utils.id().toString();

        perso['id'] = id;

        for (const [key, value] of Object.entries(app.form.convertToData('#form-personnage-creation'))) {
            perso[key] = value;
        }

        let dataArray = JSON.parse(localStorage.getItem("personnages"));
        dataArray[perso["id"]] = perso;
        localStorage.setItem("personnages", JSON.stringify(dataArray));


        localStorage.setItem('currentPersonnage', perso.id);

        location.reload();
    });
}

function homeInit() {
    $('.personnageRedirection').on('click', function (e) {
        localStorage.setItem('currentPersonnage', this.dataset.personnageId);
    });
}

function stuffInit() {
    const stuffs = JSON.parse(localStorage.getItem('stuffs'));

    if (!stuffs) {
        localStorage.setItem('stuffs', JSON.stringify({
            Favoris: [],
            Armes: [],
            Modules: [],
            Capacités: [],
            Pack: [],
        }));
    }


    $('.open-dialog').on('taphold', function () {
        const elements = [this][0].innerText.split('\n\n');

        app.dialog.alert(`
            <input type="text" value="${elements[0]}" />
            <br />
            <input type="text" value="${elements[1]}" />
        `);
    });
}