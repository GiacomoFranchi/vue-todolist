const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            newText: '',
            todoArray:[
                {
                    todo: "Fare colazione",
                    attivo : true
                },
                {
                    todo: "Lavare i denti",
                    attivo : true
                },
                {
                    todo: "Godersi un buon cartone",
                    attivo : true
                }
            ],
            newTodo:{
                todo: "",
                attivo: true,
            }
        }
    },
    methods:{
        togliDaRiga: function(index){
            this.todoArray[index].attivo = false
        },
        prendiDaInput: function(){
            this.newTodo.todo = this.newText
            this.newText = ""
            this.todoArray.push(this.newTodo)
        }
    }
})
app.mount("#app")