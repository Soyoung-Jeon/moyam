<template>
    <v-hover v-slot:default="{ hover }">
        <v-card color="#fff" to="/apply/info" class="card" :elevation="hover ? 8 : 2">
            <div class="wrapper">
                <div class="thumbnail">
                    <img :src="thumbnail" />
                </div>
                <div class="contents">
                    <p class="type" :style="typeColor">{{type}}</p>
                    <v-divider></v-divider>
                    <!-- BLOG, MOYAM -->
                    <h2 class="ellipsis-2">[{{local}}] {{title}}</h2>
                    <div class="wrapper wrapper-02">
                        <p class="date">
                            <v-icon color="#aaa" size="18px">mdi-calendar-blank</v-icon>
                            {{date}}
                        </p>
                        <p class="applicant">
                            <v-icon color="#aaa" size="18px">mdi-account</v-icon>
                            {{register}} / {{limit}} 명
                        </p>
                    </div>
                </div>
            </div>
        </v-card>
    </v-hover>
</template>

<script>
    export default {
        props: ["thumbnail", "type", "local", "title", "date", "register", "limit"],
        computed: {
            typeColor() {
                return this.type == "BLOG" ? "color:#3FC628" : "color:#ff5e00"
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        overflow: hidden;
        width: 100%;
        height: 140px;
        border-radius: 4px;
    }
    .thumbnail {
        width: 30%;
        height: 100%;
    }
    .thumbnail > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
    }

    .contents {
        padding: 12px;
        width: 70%;
    }
    .type {
        margin-bottom: 5px;
        display: inline-block;
    }
    h2 {
        margin: 5px 0 15px 0;
        height: 50px;
        font-size: 16px;
    }
    .wrapper-02 {
        height: auto;
        border-radius: 0px;
    }
    .date,
    .applicant {
        color: #aaa;
    }
    .date > i,
    .applicant > i {
        margin-right: 4px;
        vertical-align: bottom;
    }
    .v-card--link:focus:before {
        opacity: 0;
    }
</style>
