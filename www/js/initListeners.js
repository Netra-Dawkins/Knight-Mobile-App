
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

function statsInit() {
    const personnages = JSON.parse(localStorage.getItem("personnages"));

    $('.open-dialog-aspect').on('taphold', function () {
        const statName = this.dataset.statName;
        const aspectDiv = this.querySelector("div");
        var dialog = app.dialog.create({
            title: "Modifier l'Aspect",
            text: `
               <div class="statistic col-50">
                  <span class="statistic-name">${this.querySelector("span").innerHTML}</span>
                  <div class="statistic-value">
                      <input type="number" class="statistic-input" value="${aspectDiv.innerHTML}"/>
                  </div>
               </div>
            `,
            buttons: [{text: '<i class="icon f7-icons">checkmark_2</i>'}],
            onClick: function (dialog, index) {
                personnages[localStorage.getItem('currentPersonnage')]['stats'][statName] = dialog.$el.find('.statistic-input').val();
                localStorage.setItem("personnages", JSON.stringify(personnages));
                aspectDiv.innerHTML = dialog.$el.find('.statistic-input').val();
            }
        }).open();
    });

    $('.open-dialog-carac').on('taphold', function () {
        const statName = this.dataset.statName;

        var dialog = app.dialog.create({
            title: "Modifier la Caractéristique",
            text: `
               <div class="statistic col-25">
                  <span class="statistic-name">${this.querySelector("span").innerHTML}</span>
                  <div class="statistic-value">
                      <input id="statistic-input-base" type="number" class="statistic-input" value="${this.querySelector("div").firstChild.data}"/>
                  </div>
                  <div class="statistic-value">
                      <input id="statistic-input-od" type="number" class="statistic-input" value="${this.querySelector("div").lastChild.innerText}"/>
                  </div>
               </div>
            `,
            buttons: [{text: '<i class="icon f7-icons">checkmark_2</i>'}],
            onClick: function (dialog, index) {
                personnages[localStorage.getItem('currentPersonnage')]['stats'][statName]['base'] = dialog.$el.find('#statistic-input-base').val();
                personnages[localStorage.getItem('currentPersonnage')]['stats'][statName]['od'] = dialog.$el.find('#statistic-input-od').val();
                localStorage.setItem("personnages", JSON.stringify(personnages));
            }
        }).open();
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