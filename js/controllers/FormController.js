/**
 *
 */

class FormController {
  constructor() {
    //criar uma variável que contém a função document.querySelector e liga nova variável ao document
    let $ = document.querySelector.bind(document);

    this._inputName = $("#name");
    this._inputEmail = $("#email");
    this._inputCpf = $("#cpf");
    this._inputAge = $("#age");
    this._inputDate = $("#date");
    this._inputSex = $("#sex");
    this._inputError = $("#error");
    this._sucessMessage = $("#successMessage");
    this._hasErrors = false;
  }

  add(event) {
    event.preventDefault();

    //valida campos
    this._sucessMessage.style.display = 'none';
    this._hasErrors = false;
    this.nameValidation();
    this.emailValidation();
    this.cpfValidation();
    this.ageValidation();
    this.dateValidation();
    this.sexValidation();

    //mostra mensagem de sucesso
    if(this._hasErrors == false){
      this._sucessMessage.style.display = 'block';
    }
  }

  //Cria e mostra as mensagens de erro
  nameValidation(){
    let ul = document.querySelector("#name-error");
    ul.innerHTML = "";
    if(this._inputName.value == ""){
      this._hasErrors = true;
      return this.showErrors(this._inputName, 'Campo nome não pode ser vazio!', ul);
    }
    this._inputName.className = "valid";
  }

  emailValidation() {
    let ul = document.querySelector("#email-error");
    ul.innerHTML = "";
    if (!ValidationHelper.validateEmail(this._inputEmail.value)) {
      this._hasErrors = true;
      return this.showErrors(this._inputEmail, 'Email inválido, fazer digidar novamente!', ul);
    }
    this._inputEmail.className = "valid";
  }

  cpfValidation() {
    let ul = document.querySelector("#cpf-error");
    ul.innerHTML = "";
    if (!ValidateCPF.validateCpf(this._inputCpf.value)) {
      this._hasErrors = true;
      return this.showErrors(this._inputCpf, 'Cpf inválido! Por favor digite somente os números do seu cpf.', ul);
    }
    this._inputCpf.className = "valid";
  }

  ageValidation() {
    let ul = document.querySelector("#age-error");
    ul.innerHTML = "";
    if (!ValidationHelper.validateAge(this._inputAge.value)) {
      this._hasErrors = true;
      return this.showErrors(this._inputAge, 'Para realizar este cadastro é necessário ter pelo menos 18 anos!', ul);
    }
    this._inputAge.className = "valid";
  }

  dateValidation() {
    let ul = document.querySelector("#date-error");
    ul.innerHTML = "";
    if (!ValidationHelper.validateBirthday(this._inputDate.value)) {
      this._hasErrors = true;
      return this.showErrors(this._inputDate, 'Sua data de nascimento deve ser menor que a data atual!', ul);
    }
    this._inputDate.className = "valid";
  }

  sexValidation() {
    let ul = document.querySelector("#sex-error");
    ul.innerHTML = "";
    if (!ValidationHelper.validateSex(this._inputSex.value)) {
      this._hasErrors = true;
      return this.showErrors(this._inputSex, 'É necessário escolher uma das opções da lista!', ul);
    }
    this._inputSex.className = "valid";
  }

  showErrors(element, mensagem, ul) {
    element.className = "invalid";
    let li = document.createElement("li");
    li.textContent = mensagem;
    ul.appendChild(li);
  }
}
