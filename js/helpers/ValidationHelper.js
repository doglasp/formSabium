class ValidationHelper {
  constructor() {
    throw new Error("Esta classe não pode ser instanciada");
  }

  static validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  static validateAge(age) {
    return age >= 18;
  }

  static validateBirthday(date){
    let toDate = new Date();  
    return (new Date(date).getTime() <= toDate.getTime());
  }

  static validateSex(sex){
      return sex != '0';
  }
}
