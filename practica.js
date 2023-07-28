const { createApp } = Vue 

createApp({
  data() {
    return {
      saludar: 'Hola mundo',
      mensaje: 'otra cosa',
      numero: 10,
      lista: ['1', '2', '3', '4', '5'],
      activo: true
    }
  }
}).mount('#app')

// var app5 = new Vue({
//   el: '#app-5',
//   data: {
//     message: 'Hola Vue.js!'
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message.split('').reverse().join('')
//     }
//   }
// });

// document.onload = new Vue({
    
//     el: '#app',
//     data: {
//         saludar: 'Hola desde la instancia app',
//         numero: 10,
//         lista:['1','2','3'],
//         activo: true
//         }
// });

// var app2 = new Vue({
//     el: '#app-2',
//     data: {
//       message: 'Usted cargó esta página el ' + new Date().toLocaleString()
//     }
//   });

//   var app3 = new Vue({
//     el: '#app-3',
//     data: {
//       seen: true
//     }
//   });

 