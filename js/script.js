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
        toDo: "",
        toDoEdit: "",
        indexEdit: 0,
        modal: false
    },
    methods:{
      checkInput: function(edit){
        if(edit){
          if( this.toDoEdit != "" && isNaN(this.toDoEdit) ){
            this.enterToDo(this.toDoEdit.toLowerCase(),edit);
            this.toggleModal();
          }
        }
        else if( this.toDo != "" && isNaN(this.toDo) ){
          this.enterToDo(this.toDo.toLowerCase(),edit);
        }
      },
      enterToDo: function(elem,edit){
        if(edit){
          this.toDoList[this.indexEdit] = this.toDoEdit;
          this.toDoEdit = "";
        }
        else{
          this.toDoList.push(elem.charAt(0).toUpperCase() + elem.slice(1))
          this.toDo = "";
        }
      },
      deleteItem: function(index){
        console.log(`Elimino l'elemneto ${index}`)
        this.toDoList.splice(index,1);
      },
      toggleModal: function(index){
        this.modal = !this.modal;

        if( this.modal){
          this.toDoEdit = this.toDoList[index];
          this.indexEdit = index;
        }
      }
    }
  })