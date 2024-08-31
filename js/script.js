/*
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": 
cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, 
che quindi viene aggiunto alla lista dei todo esistenti.
*/

const { createApp } = Vue

createApp({

    data() {
        return {
            todos: [
                {
                    text: "Finire l'esercizio",
                    done: true,
                },
                {
                    text: "Preferibilmente senza piangere",
                    done: true,
                },
                {
                    text: "Cheering up!",
                    done: true,
                },
            ],
            inputTodo: ""
        }
    },

    methods: {
        deleteTodo(i) {
            /* 
            "splice" permette di eliminare un elemento. 
            Nelle parentesi vuole l'indice dell'elemento da eliminare, quanti elementi eliminare a partire dall'indice.
            */
            this.todos.splice(i, 1);
        },
        createTodo() {
            this.todos.push(this.inputTodo)
        }
    },

}).mount('#app')