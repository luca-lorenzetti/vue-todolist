/* Descrizione:
Rifare l'esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista */

var app = new Vue({
    el: '#root',
    data: {
        titleSite: "ToDo List",
        toDoList:["Comprare il pane","Comprare il latte"],
        toDo: ""
    },
    methods:{
      checkInput: function(){
        if(this.toDoList.length > 0){
          this.enterToDo();
        }
      },
      enterToDo: function(){
        
      },
      deleteItem: function(index){
        console.log(`Elimino l'elemneto ${index}`)
        this.toDoList.splice(index,1);
      }
    }
  })