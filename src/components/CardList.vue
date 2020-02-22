<template>
    <div class="section">
        <div class="form_select">
            <v-combobox
                label="지역을 선택하세요."
                v-model="chips"
                :items="items"
                chips
                clearable
                multiple
                solo
                color="#FFA000"
            >
                <template v-slot:selection="{ attrs, item, select, selected }">
                    <v-chip
                        color="#FFA000"
                        v-bind="attrs"
                        :input-value="selected"
                        input
                        close
                        @click="select"
                        @click:close="remove(item)"
                    >
                        <p>{{ item }}</p>
                    </v-chip>
                </template>
            </v-combobox>
        </div>
        <div class="form_type">
            <v-tabs v-model="selectedTab" background-color="#F8F8F8" color="#FFA000" centered>
                <v-tab>전체</v-tab>
                <v-tab>MOYAM</v-tab>
                <v-tab>BLOG</v-tab>
            </v-tabs>
        </div>
        <div class="btn_wrap">
            <v-btn tile color="#ffa000" dark large router-link to="/register/registerForm">등록</v-btn>
        </div>
        <v-container grid-list-xl>
            <v-layout row>
                <v-flex
                    xs12
                    sm12
                    md6
                    lg6
                    xl6
                    v-for="(cardContent, index) in cardContents"
                    :key="index"
                >
                    <app-card
                        v-bind:thumbnail="cardContent.thumbnail"
                        v-bind:type="cardContent.type"
                        v-bind:local="cardContent.local"
                        v-bind:title="cardContent.title"
                        v-bind:date="cardContent.date"
                        v-bind:register="cardContent.register"
                        v-bind:limit="cardContent.limit"
                    ></app-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    import Card from "../components/Card.vue"

    export default {
        components: {
            "app-card": Card
        },
        // watch: {
        //     // selectedTab: function(v) {
        //     // 	console.log(1);
        //     // },
        //     chips: function(items) {
        //         
        //     }
        // },
        computed: {
            cardContents: function() {
                let tempCardContents = []
                let result = []
                var selectedType = ""

                if (this.selectedTab == 0) {
                    selectedType = "ALL"
                } else if (this.selectedTab == 1) {
                    selectedType = "MOYAM"
                } else if (this.selectedTab == 2) {
                    selectedType = "BLOG"
                } else {
                    console.error("invalid selected")
                    return
				}

                for (var i in this.originCardContents) {
                    var cardContent = this.originCardContents[i]
                    if (selectedType == "ALL" || cardContent.type == selectedType) {
                        tempCardContents.push(cardContent)
                    }
				}

                for (var k in tempCardContents) {
                    var tempCardContent = tempCardContents[k]

                    if (this.chips.length != 0) {
                        for (var j in this.chips) {
                            var chip = this.chips[j]
                            if (tempCardContent.local == chip) {
                                result.push(tempCardContent)
                            }
                        }
                    } else {
                        result.push(tempCardContent)
                    }
                }
                return result
            }
        },
        methods: {
            remove(item) {
                this.chips.splice(this.chips.indexOf(item), 1)
                this.chips = [...this.chips]
            }
        },
        data() {
            return {
                chips: [],
                items: [
                    "강남/논현",
                    "강동/천호",
                    "강서/목동",
                    "건대/왕십리",
                    "관악/신림",
                    "교대/사당",
                    "노원/강북",
                    "명동/이태원",
                    "삼성/선릉",
                    "송파/잠실",
                    "수유/동대문",
                    "신촌/이대",
                    "압구정/신사",
                    "여의도/영등포",
                    "종로/대학로",
                    "홍대/마포"
                ],
                originCardContents: [],
                selectedTab: 0,
                selectedChip: "",
                cur_cards: []
            }
        },
        created() {
            let data = [
                {
                    thumbnail: "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20160908_182%2F1473306329400mM8iS_JPEG%2F176858527548364_0.jpeg&type=m862_636",
                    type: "BLOG",
                    local: "강남/논현",
                    title: "장남식당 논현점",
                    date: "2.9 ~ 2.14",
                    register: "2",
                    limit: "10"
                },
                {
                    thumbnail: "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20190917_37%2F1568723527734nzFEx_JPEG%2FvG4NA7YvnkDuSUfYhf2ErpLA.jpeg.jpg&type=m862_636",
                    type: "MOYAM",
                    local: "강동/천호",
                    title: "스파이스마켓 천호 현대백화점",
                    date: "2.9 ~ 2.14",
                    register: "0",
                    limit: "5"
                },
                {
                    thumbnail: "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20170418_34%2F1492487778116zhygp_JPEG%2F186368528636634_1.jpeg&type=m1000_692",
                    type: "BLOG",
                    local: "강서/목동",
                    title: "브롱스 마곡발산점",
                    date: "2.9 ~ 2.14",
                    register: "5",
                    limit: "10"
                },
                {
                    thumbnail: "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fblogfiles.naver.net%2F20160304_48%2Fkimyulzzzz_1457020023445G6i0b_JPEG%2F20160303_173719.jpg%23740x650&type=m862_636",
                    type: "BLOG",
                    local: "건대/왕십리",
                    title: "열불날개 건대점",
                    date: "2.9 ~ 2.14",
                    register: "5",
                    limit: "10"
                },
                {
                    thumbnail: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAxMTBfMTY3%2FMDAxNTc4NTg0NTE5NjU3.i0cgDD2C8jUuoc4gVohthnKptBeKQas3ww-os6E8z5Yg.JtjQaB3_EmtEKBaINCnGnsHydqh_uySVZCJ3KuBZJYUg.JPEG.suaddua94%2FKakaoTalk_Photo_2020-01-10-00-13-11-23.jpeg&type=sc960_832",
                    type: "BLOG",
                    local: "관악/신림",
                    title: "프랑스 홍합집 서울대 근처",
                    date: "2.9 ~ 2.14",
                    register: "4",
                    limit: "10"
                },
                {
                    thumbnail: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA3MTNfMjM1%2FMDAxNTYzMDAwODA2Mjgx.g3IrO4KN_RVsBJ_KFc031qpRry-0u-3Yulh5a5RmyTkg.-rAE7lVsCBzFxd_3BmhwPlJJ2ykW1-jP09jDPgUFtAEg.JPEG.vinocai%2FDSC05845.jpg&type=sc960_832",
                    type: "MOYAM",
                    local: "교대/사당",
                    title: "방배동 떡마당",
                    date: "2.9 ~ 2.14",
                    register: "6",
                    limit: "10"
                },
                {
                    thumbnail: "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20150901_242%2F1441041456169ycMQK_JPEG%2FSUBMIT_1366445979118_13465494.jpg&type=m862_636",
                    type: "BLOG",
                    local: "교대/사당",
                    title: "남도술상",
                    date: "2.9 ~ 2.14",
                    register: "8",
                    limit: "10"
                },
                {
                    thumbnail: "https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTA3MzBfMjE0%2FMDAxNTY0NDEzNDM3NTgz.RYqqvjj0vZNpyRvp20SNnIl8wJMWg9q97Cc1I7ox3ysg.RagdGEsYpMqvS33CoJ3L5QVtCNo0LzMCQUEmoNW-bYAg.JPEG.powertheone%2F29.JPG&type=m862_636",
                    type: "BLOG",
                    local: "강동/천호",
                    title: "탕의신 홍대포 명일점",
                    date: "2.9 ~ 2.14",
                    register: "4",
                    limit: "5"
                }
            ]

            for (let i = 0; i < data.length; i++) {
                this.originCardContents.push(data[i])
			}
        }
    }
</script>

<style scoped>
    .form_select {
        padding: 0 12px;
        margin: 0 auto;
        max-width: 600px;
    }
    .v-list-item__title {
        padding-left: 10px;
    }
    .form_type {
        margin-bottom: 12px;
    }
    .btn_wrap { padding: 0 20px; text-align: right;}
</style>
