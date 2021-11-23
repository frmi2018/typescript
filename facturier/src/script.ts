// step 1
class FormInput {
  // step 3 définir les propriétés
  form: HTMLFormElement;
  type: HTMLSelectElement;
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  address: HTMLInputElement;
  country: HTMLInputElement;
  town: HTMLInputElement;
  zip: HTMLInputElement;
  product: HTMLInputElement;
  price: HTMLInputElement;
  quantity: HTMLInputElement;
  tva: HTMLInputElement;
  // step 4 rechercher les éléments nécessaire à la validation du formulaire et les stocker dans les propriétés
  constructor() {
    this.form = document.getElementById("form") as HTMLFormElement;
    this.type = document.getElementById("type") as HTMLSelectElement;
    this.firstName = document.getElementById("firstName") as HTMLInputElement;
    this.lastName = document.getElementById("lastName") as HTMLInputElement;
    this.address = document.getElementById("address") as HTMLInputElement;
    this.country = document.getElementById("country") as HTMLInputElement;
    this.town = document.getElementById("town") as HTMLInputElement;
    this.zip = document.getElementById("zip") as HTMLInputElement;
    this.product = document.getElementById("product") as HTMLInputElement;
    this.price = document.getElementById("price") as HTMLInputElement;
    this.quantity = document.getElementById("quantity") as HTMLInputElement;
    this.tva = document.getElementById("tva") as HTMLInputElement;

    // step 5
    this.submitFormListener();
  }

  // step 6

  private submitFormListener(): void {
    this.form.addEventListener("submit", this.handleFormSubmit.bind(this));
  }

  // step 7 (retourner les valeurs dans un TURPLE)

  private handleFormSubmit(e: Event) {
    e.preventDefault();

    const inputs = this.inputDatas();

    // step 10 afficher les valeurs

    if (Array.isArray(inputs)) {
      const [
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
      ] = inputs;
      console.log(
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
        tva
      );
    }
  }

  // step 8 vérification du format des données saisies

  private inputDatas():
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        number,
        string,
        number,
        number,
        number
      ]
    | void {
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
    } else {
      alert("Les valeurs numériques doivent être > 0 !");
      return;
    }
  }
}

// step 2 instancier
new FormInput();
