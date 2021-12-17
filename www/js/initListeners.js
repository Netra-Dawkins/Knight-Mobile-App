
function personnageCreationInit() {
    $('#submit-personnage-creation').on('click', function () {
        const perso = app.form.convertToData('#form-personnage-creation');
        const id = app.utils.id().toString();

        let dataArray = {};
        if(!localStorage.getItem('personnages')) {
            dataArray[id] = perso;
            localStorage.setItem('personnages', JSON.stringify(dataArray));
        } else {
            dataArray = JSON.parse(localStorage.getItem('personnages'));
            dataArray[id] = perso;
            localStorage.setItem('personnages', JSON.stringify(dataArray));
        }
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