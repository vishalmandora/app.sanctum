<template>
    <div class="dashboard">
        <h1>Dashboard</h1>
        <center>
            <table>
                <tr>
                    <th>Name</th>
                    <th>E-Mail</th>
                </tr>
                <tr v-if="user">
                    <th>{{ user.name }}</th>
                    <th>{{ user.email }}</th>
                </tr>
            </table>
        </center>
        <button @click="logout" style="margin-top: 10px;">Logout</button>
    </div>
</template>

<script>
    import axios from 'axios';

    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'http://localhost:8000';

    export default {
        name: 'Dashboard',

        data() {
            return {
                user: null,
            }
        },

        created() {
        },

        mounted() {
            this.fetch();
        },

        methods: {
            fetch() {
                axios.get('/api/user').then(response => {
                    this.user = response.data;
                });
            },

            logout() {
                axios.post('/logout').then(response => {
                    this.$router.push({name: 'Home'});
                });
            }
        }
    }
</script>

<style scoped>
    table {
        border-spacing: 10px 10px;
    }

    table, th, td, tr {
        border: 1px solid black;
    }
</style>
