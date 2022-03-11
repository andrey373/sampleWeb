
let App = {
    data(){
        return{
            listItem: ['About me', 'Relationships', 'Requirements', 'Users', 'Sign Up'],
            urlUsers: 'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=9',
            users: [],
            imgType: ['jpg', 'png', 'jpeg', 'webp', 'svg']
        }
    },
    mounted(){
        this.getUser();
    },
    methods:{
        async getUser(){
            try {
                const respons = await fetch(this.urlUsers)
                const result = await respons.json()
                this.users = result.users;
            } catch (error) {   
                console.error(error);
            }
        },

        checkFile(event){
            console.log(event.target.files[0].type);
            const fileType = event.target.files[0].type;
            this.imgType.forEach(elt => {
                if(fileType !== elt){
                    const labelFile = event.target.parentNode;
                    const inputFileText = labelFile.querySelector('.input_file_text'); 
                    inputFileText.classList.add('input_file_error');
                    inputFileText.innerText = 'Item';
                    labelFile.querySelector('.input_file_btn').classList.add('input_file_btn_error');
                }
            });
        }
    }
    // computed:{}

};

Vue.createApp(App).mount('#app');

