<template>
    <main>
        <div class="error-wrap">
            <div>
                <p>404</p>
                <p>PAGE NOT FOUND</p>
                <p>요청하는 페이지를 찾을 수 없습니다.</p>
                <p><router-link to="/">메인 페이지로 돌아가기</router-link></p>
            </div>
            <!-- <div v-else>
                <p>잘못된 접근입니다.</p>
                <nuxt-link to="/">메인 페이지로 돌아가기</nuxt-link>
            </div> -->
        </div>
    </main>
</template>

<script>
    export default {
        props: ["error"]
    }
</script>

<style scoped>
.error-wrap { position: relative; width: 100%; height: 100vh;}
.error-wrap > div { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 600px; text-align: center;}
p:nth-child(1) { font-family: 'TmonMonsori'; font-size: 180px; color: #F5A623; letter-spacing: 4px; line-height: 100%;}
p:nth-child(2) { font-family: 'TmonMonsori'; font-size: 48px; color: #dadada;}
p:nth-child(3) { padding-bottom: 40px; font-size: 18px; font-weight: 300;}
p:nth-child(4) a { padding: 12px 20px; display: inline-block; background-color: #f5a623; font-size: 14px; font-weight: 400; color: #fff;}

/* 반응형 모바일 */
@media all and (max-width:600px) { 
main { margin: 80px auto 50px auto;}
p:nth-child(1) { font-size: 80px; }
p:nth-child(2) { font-size: 24px;}
p:nth-child(3) { font-size: 16px;}
}

</style>