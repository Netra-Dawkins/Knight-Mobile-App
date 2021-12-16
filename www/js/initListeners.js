
function personnageCreationInit() {
    $('#submit-personnage-creation').on('click', function () {
        console.log('ok!');
        const storedData = app.form.convertToData('#form-personnage-creation');
        console.log(storedData);
        if(storedData) {
            console.log(JSON.stringify(storedData));
        } else {
            console.log('No !');
        }
    });
}