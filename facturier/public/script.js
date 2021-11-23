"use strict";
// step 1
class FormInput {
    // step 4 rechercher les éléments nécessaire à la validation du formulaire et les stocker dans les propriétés
    constructor() {
        this.form = document.getElementById("form");
        this.type = document.getElementById("type");
        this.firstName = document.getElementById("firstName");
        this.lastName = document.getElementById("lastName");
        this.address = document.getElementById("address");
        this.country = document.getElementById("country");
        this.town = document.getElementById("town");
        this.zip = document.getElementById("zip");
        this.product = document.getElementById("product");
        this.price = document.getElementById("price");
        this.quantity = document.getElementById("quantity");
        this.tva = document.getElementById("tva");
        // step 5
        this.submitFormListener();
    }
    // step 6
    submitFormListener() {
        this.form.addEventListener("submit", this.handleFormSubmit.bind(this));
    }
    // step 7 (retourner les valeurs dans un TURPLE)
    handleFormSubmit(e) {
        e.preventDefault();
        const inputs = this.inputDatas();
        // step 10 afficher les valeurs
        if (Array.isArray(inputs)) {
            const [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva,] = inputs;
            console.log(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva);
        }
    }
    // step 8 vérification du format des données saisies
    inputDatas() {
        const type = this.type.value;
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const address = this.address.value;
        const country = this.country.value;
        const town = this.town.value;
        const zip = this.zip.valueAsNumber;
        const product = this.product.value;
        const price = this.price.valueAsNumber;
        const quantity = this.quantity.valueAsNumber;
        const tva = this.tva.valueAsNumber;
        // step 9 vérification si valeurs numériques > 0 avant affichage
        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [
                type,
                firstName,
                lastName,
                address,
                country,
                town,
                zip,
                product,
                price,
                quantity,
                tva,
            ];
        }
        else {
            alert("Les valeurs numériques doivent être > 0 !");
            return;
        }
    }
}
// step 2 instancier
new FormInput();
