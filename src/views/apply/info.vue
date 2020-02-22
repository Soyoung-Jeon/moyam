<template>
	<div>
		<div class="img-wrap">
			<img src="https://search.pstatic.net/common/?autoRotate=true&quality=95&src=http%3A%2F%2Fldb.phinf.naver.net%2F20160908_277%2F1473306329664aYFtf_JPEG%2F176858527548364_2.jpeg&type=m862_636">
		</div>
		<div class="text-wrap">
			<ul>
				<li><v-icon color="#ec8e00" size="16px" class="pr-1 mb-1">mdi-check-bold</v-icon>제공내역</li>
				<li>[4인 제한] 50,000원 이용권</li>
			</ul>
			<ul>
				<li><v-icon color="#ec8e00" size="16px" class="pr-1 mb-1">mdi-check-bold</v-icon>방문 및 예약안내</li>
				<li>시간 : 16:00 ~ 20:00</li>
				<li>장소 : 서울 강남구 봉은사로5길 10 장남식당</li>
				<li>1일 전 예약 필수 / 당일 예약 불가</li>
				<li>※주말 저녁시간대에는 매장이 붐벼 체험이 어려울 수 있으니, 가급적 평일 및 주말점심 방문 권장드립니다.</li>
				<li class="map">
					<table cellpadding="0" cellspacing="0" width="462"> <tr> <td style="border:1px solid #cecece;"><a href="https://v4.map.naver.com/?menu=location&lng=4a3f25301186c0b3432822cf5ada47d3&mapMode=0&lat=15a80260dcf13bc241af9afd806c18af&dlevel=11&enc=b64" target="_blank"><img src="http://prt.map.naver.com/mashupmap/print?key=p1582268784238_-1343937769" width="460" height="340" alt="지도 크게 보기" title="지도 크게 보기" border="0" style="vertical-align:top;"/></a></td> </tr> <tr> <td> <table cellpadding="0" cellspacing="0" width="100%"> <tr> <td height="30" bgcolor="#f9f9f9" align="left" style="padding-left:9px; border-left:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="font-family: tahoma; font-size: 11px; color:#666;">2020.2.21</span>&nbsp;<span style="font-size: 11px; color:#e5e5e5;">|</span>&nbsp;<a style="font-family: dotum,sans-serif; font-size: 11px; color:#666; text-decoration: none; letter-spacing: -1px;" href="https://v4.map.naver.com/?menu=location&lng=4a3f25301186c0b3432822cf5ada47d3&mapMode=0&lat=15a80260dcf13bc241af9afd806c18af&dlevel=11&enc=b64" target="_blank">지도 크게 보기</a> </td> <td width="98" bgcolor="#f9f9f9" align="right" style="text-align:right; padding-right:9px; border-right:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="float:right;"><span style="font-size:9px; font-family:Verdana, sans-serif; color:#444;">&copy;&nbsp;</span>&nbsp;<a style="font-family:tahoma; font-size:9px; font-weight:bold; color:#2db400; text-decoration:none;" href="https://www.navercorp.com" target="_blank">NAVER Corp.</a></span> </td> </tr> </table> </td> </tr> </table>
				</li>
			</ul>
			<ul>
				<li><v-icon color="#ec8e00" size="16px" class="pr-1 mb-1">mdi-check-bold</v-icon>미션사항</li>
				<li>블로그 리뷰 1회</li>
			</ul>
			<ul>
				<li><v-icon color="#ec8e00" size="16px" class="pr-1 mb-1">mdi-check-bold</v-icon>미션내용</li>
				<li>- 리뷰 제목에 매장명을 기재해 주시고, 매장 위치 및 지도, 연락처를 소개해 주세요..</li>
				<li>- 매장 인테리어 및 제공 받으신 서비스를 15장 이상 , 동영상(15초 이상)을 촬영해주세요. (촬영시 타인의 초상권문제가 있을수 있으니 타인의 얼굴이 노출되지 않도록 참고 부탁드립니다.)</li>
				<li>- 저온 숙성한 고기 초벌해서 나오는 점 소개해 주세요.</li>
				<li>- 가격 변동된 부분 리뷰에 언급 부탁드립니다.</li>
			</ul>
			<ul>
				<li><v-icon color="#ec8e00" size="16px" class="pr-1 mb-1">mdi-check-bold</v-icon>유의사항</li>
				<li>초과비용 본인 부담 / 타쿠폰 중복적용 불가 / 핸드폰카메라 촬영불가 / 테이크 아웃 불가</li>
			</ul>
		</div>
		<v-divider></v-divider>  	
		<v-alert class="caution" outlined type="error">
			<ul>
				<li>선정 인원은 업체 사정상 추후 변경될 수 있습니다.</li>
				<li>선택, 기입사항은 업체 사정상 변경되어 선정될 수 있습니다.</li>
				<li>신청하신 본인이 체험해야 합니다. (대리체험 가능한 상품 예외)</li>
				<li>제공 받으신 체험 상품은 재판매하실 수 없습니다.</li>
			</ul>
		</v-alert>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.img-wrap { margin-top: 30px; width: 100%;}
.map { margin-top: 20px; max-width: 460px;}
.img-wrap img, .map table, .map img { width: 100%; height: auto;}

.text-wrap { padding: 40px 0;}
.text-wrap > ul:not(:last-child) { margin-bottom: 24px;}
.text-wrap > ul li:first-child { padding-bottom: 8px; font-size: 16px; color: #ec8e00;}
.caution { margin: 40px 0 0 0;}
.caution li { font-weight: 100; color: #ff5252;}

</style>



			
		