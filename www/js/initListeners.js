
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