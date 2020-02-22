<template>
<div class="aside_wrap">
    <aside>
        <div class="wrapper">
            <ul>
                <li>모집기간</li>
                <li>체험발표</li>
                <li>리뷰기간</li>
                <li>모집인원</li>
                <li>신청인원</li>
            </ul>
            <ul>
                <li>2.6 ~ 2.16</li>
                <li>2.17</li>
                <li>2.18 ~ 3.1</li>
                <li>5명</li>
                <li>2명</li>
            </ul>
        </div>

        <div class="btn_wrap">
            <v-btn v-if="isChanged" v-on:click="isChanged = !isChanged" block tile color="#ffa000" dark x-large router-link to="/apply/applyForm">신청하기</v-btn>
            <v-btn v-else block tile color="#ffa000" dark x-large>신청하기</v-btn>
        </div>
    </aside> 
    <!-- <aside>
        <h3>연관 콘텐츠</h3>
        <ul>
            <li></li>
        </ul>
    </aside> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            isChanged: true,
        }
	},
}
</script>

<style scoped>
.aside_wrap { width: 29%;}
.aside_wrap .wrapper { margin-bottom: 16px; padding: 14px 0; border-top: 1px solid #dfdfdf; border-bottom: 1px solid #dfdfdf;}
aside { padding: 40px; width: 100%; background-color: #fff; border: 1px solid #dfdfdf;}
aside ul li { font-size: 16px;}
aside ul li:not(:last-child) { padding-bottom: 8px;}
aside ul:last-child { text-align: right;}

@media all and (max-width:700px) { 
	.aside_wrap { display: none;}
}
</style>