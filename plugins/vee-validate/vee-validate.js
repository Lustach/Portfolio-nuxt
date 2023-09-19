import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Обязательное поле",
});
extend("email", {
  ...email,
  message: "Невалидный e-mail",
});
