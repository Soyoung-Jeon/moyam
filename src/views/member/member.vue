<template>
    <div class="member_wrap">
        <v-card class="pa-10 member_card" :elevation="10" tile>
            <h1><router-link to="/">MOYAM</router-link></h1>
            <v-divider></v-divider>
            <router-view></router-view>
        </v-card>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.member_wrap { position: relative; width: 100%; height: 100vh; background-color: #ffcf21;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='238' height='238' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23ffa000' fill-opacity='0.47' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E"); background-repeat: initial;}
.member_card { position: absolute; top: 50%; left: 50%; width: 480px; transform: translate(-50%, -50%);}
.member_wrap h1 { margin-bottom: 10px;}
.member_wrap h1 a { display: block; font-family: 'Anja-Eliane'; font-size: 48px; color: #ffa000; letter-spacing: 2px; text-align: center;}

@media all and (max-width:700px) { 
	.member_card { width: 90%;}
}
</style>