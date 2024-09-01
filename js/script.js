/*
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

*/

const { createApp } = Vue

createApp({

    data() {
        return {
            todos: [
                {
                    text: "Finire l'esercizio",
                    done: false,
                },
                {
                    text: "Preferibilmente senza piangere",
                    done: false,
                },
                {
                    text: "Cheering up!",
                    done: false,
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
            // pusho la nuova task se l'input dell'utente non è vuoto.
            // elimino la possibilità di aggiungere degli spazi
            if (this.inputTodo.trim() != '') {

                // per pushare un input in un oggetto aggiungere le graffe e scrivere la sintassi del contenuto dell'oggetto
                this.todos.push({ text: this.inputTodo });
                this.inputTodo = '';
            };
        },
    },

}).mount('#app')