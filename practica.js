const { createApp } = Vue 

createApp({
  data() {
    return {
      saludar: 'Hola mundo',
      mensaje: 'otra cosa',
      numero: 10,
      lista: ['1', '2', '3', '4', '5'],
      activo: false
    }
  }
}).mount('#app')


 