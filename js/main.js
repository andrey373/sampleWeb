
let App = {
    data(){
        return{
            listItem: ['About me', 'Relationships', 'Requirements', 'Users', 'Sign Up'],
            listMenuMobile: ['About me', 'Relationships', 'Users', 'Sign Up', 'Terms and Conditions'],
            listMenuMobileTwo: ['How it works', 'Partnership', 'Help', 'Level testimonial', 'Contact us'],
            listMenuMobileThree: ['Articles', 'Our news', 'Testimonials', 'Licenses', 'Privacy Policy'],
            users: [],
            num: 9,
            imgType: ['jpg', 'png', 'jpeg', 'webp', 'svg']
        }
    },
    mounted(){
        this.getUser();
        this.scrollMenu();
    },
    methods:{
        getUser(){
            const urlUsers = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${this.num}`;

            fetch(urlUsers)
                .then((response) => {
                    if(response.status < 400){
                        return response.json();
                    }else{
                        console.error('error!');
                    }
                }).then((json) => {
                    this.users.push(...json.users);
                })
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
        },

        showMenu(){
            const mobileMenu = document.querySelector('.mobile_block_menu');
            mobileMenu.parentElement.classList.add('overlay_active');
            document.body.classList.add('noscroll');
        },

        closeOverlay(evt){
            evt.target.closest('.overlay').classList.remove('overlay_active');
            document.body.classList.remove('noscroll');
        },

        scrollMenu(){
            const headerTop = document.querySelector('.header_top');
            window.onscroll = () => {
                if(window.pageYOffset > 300){
                    headerTop.classList.add('scroll_header');
                }else{
                    headerTop.classList.remove('scroll_header');
                }
            }
        },

        showMoreUser(){
            this.num += 3;
            this.getUser();
            this.users = [];
            // console.log(this.num++);
        }
    }
    // computed:{}

};

Vue.createApp(App).mount('#app');

