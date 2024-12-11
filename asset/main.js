const { createApp } = Vue;

createApp({
    data() {
        return {
            usuarios: [],
            user6: null, // Usuario con ID 6
            otherUsers: [] // Otros usuarios
        };
    },
    methods: {
        cargarUsuarios() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    this.usuarios = response.data;
                    this.user6 = this.usuarios.find(user => user.id === 6); // Obtener usuario con ID 6
                    this.otherUsers = this.usuarios.filter(user => user.id !== 6); // Filtrar otros usuarios
                })
                .catch(error => {
                    console.error('Error fetching users:', error);
                });
        }
    },
    mounted() {
        this.cargarUsuarios(); // Cargar usuarios al montar el componente
    }
}).mount('#app');