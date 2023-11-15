const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            newText: '',
            todoArray:[
                {
                    todo: "Fare colazione",
                    attivo : true,
                    fatto: false
                },
                {
                    todo: "Lavare i denti",
                    attivo : true,
                    fatto: false
                },
                {
                    todo: "Godersi un buon cartone",
                    attivo : true,
                    fatto: false
                }
            ],
            newTodo:{
                todo: "",
                attivo: true,
                fatto: false
            }
        }
    },
    methods:{
        togliDaRiga: function(index){
            this.todoArray[index].attivo = false
            .remove
        },
        prendiDaInput: function(newText){
            this.newTodo.todo = newText
            this.newText = ""
            this.todoArray.push({...this.newTodo})
        },
        sbarra: function(index){
            this.todoArray[index].fatto = true
        }
    }
})
app.mount("#app")