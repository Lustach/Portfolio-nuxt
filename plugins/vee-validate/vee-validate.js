// глобальный конфиг

import { extend, configure } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'Обязательное поле'
})
extend('email', {
  ...email,
  message: 'Невалидный e-mail'
})

// const config = {
//   // classes: {
//   //   valid: 'is-valid',
//   //   invalid: 'is-invalid'
//   // },
//   // bails: true,
//   // skipOptional: true,
//   // mode: 'aggressive',
//   // useConstraintAttrs: true
//   mode: custom
// }

// function custom (context) {
//   // console.log(context,'CONTEWXT')
//   // if(!context.flags.changed){
//   //   this.$refs.emailOrPhone.reset()
//   //   return
//   // }
//   if (context.flags.required && !context.value && !context.flags.validated) {
//     console.log('123215215')
//     return {
//       on: ['blur']
//     }
//   }
//   if (context.flags.dirty) {
//     this.$refs.emailOrPhone.reset()
//     return
//   }
//   return {
//     on: ['change']
//   }
// }

// configure(config)
