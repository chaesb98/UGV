import '../css/location.css';
import Bus from "../images_src/location_bus_icon.svg";
import Subway from "../images_src/location_subway_icon.svg";
import Nav from "../images_src/location_navigation_icon.svg";
import Park from "../images_src/location_parking_icon.svg";
import LocationImage from "../images_src/location_image.png";

//  맨위에 global kakao를 선언해서, kakao를 글로벌로 선언해서 사용합니다.
/* global kakao */
import React, {useEffect} from "react";
import Container from "react-bootstrap/Container";

const location_name = "UGV(UGly Vegetable)";

export default function Map(){
    useEffect(()=>{
        kakaoMapScript();
    }, []);


    const kakaoMapScript = () => {
        let container = document.getElementById("map");
        let options = {
            center: new kakao.maps.LatLng(37.5030698, 126.8789856),
            level: 3,
        };
        // map 변수에 kakao map 정보를 대입해 줍니다.
        const map = new kakao.maps.Map(container, options);

        let imageSrc = '/images/marker.png', // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(37.5030698, 126.8789856); // 마커가 표시될 위치입니다

        // 마커를 생성해 줍니다.
        let marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage // 마커이미지 설정 
        });

        // 마커를 지도 위에 표시해 줍니다.
        marker.setMap(map);

        window.addEventListener('resize', function()
        {
            var markerPosition = marker.getPosition(); 
            map.relayout();
            map.setCenter(markerPosition);
        });
    };

    return(
        <>
            <Container>
                <div className="location_common">
                    <h1 className='h1fbg'>{location_name} 찾아오시는 길</h1>
                    {/* 카카오맵 정보가 들어올 id 속성값으로 map을 div 영역에 정의해 줍니다 */}
                    <div id="map"></div>
                    <div className="location_information">
                        <h2>LOCATION INFORMATION</h2>
                        <h2><small>UGV 정보</small></h2><br /><br />
                        <h3 className='bold'>주소 <small> : (08216)서울특별시 구로구 경인로 557 4층</small> </h3>
                        <h3 className='bold'>대표전화번호 <small> : 02-1234-5678</small></h3>
                    </div>
                    <div className='location_information_add'>
                        {/* 교통(traffic) 정보 추가 */}
                        <div className='location_traffic'>
                          <div className='traffic_details'>
                            <img src={Bus} alt="버스 아이콘" />
                            <h2>버스(Bus)</h2>                            
                          </div>
                        <h2><small className='sub_text'> <b>구로역.구로기계공구상가 정류장 하차 <br></br> 운행 버스 : (간선)571, 654, (지선)5630, 6441, 6516, 6613, (마을)구로09, 양천04 </b></small></h2>            
                        </div>
                        <div className='location_traffic'>
                            <div className='traffic_details'>
                            <img src={Subway} alt="지하철 아이콘"/>
                            <h2>지하철(Subway)</h2>
                            </div>            
                            <h2><small className='sub_text'> <b>1호선 구로역 하차 3번 출구 171m (도보 2분)</b></small></h2>
                        </div>
                        <div className='location_traffic'>
                            <div className='traffic_details'>
                            <img src={Nav} alt="네비게이션 아이콘"/>
                            <h2>내비게이션(Navigation)</h2>
                            </div>
                            <h2><small className='sub_text'><b>아이나비 네비, 구글 네비 등 네비게이션 "UGV"혹은 "UGly Vegetable" 검색</b></small></h2>
                        </div>
                        <div className='location_traffic'>
                            <div className='traffic_details'>
                            <img src={Park} alt="주차 아이콘"/>
                            <h2>주차안내(Parking)</h2>
                            </div>
                            <h2><small className='sub_text'><b>건물 1층 유료 주차장 이용</b></small></h2>
                        </div>
                    </div>
                </div>                     
                </Container>    
                <Container>
                    <hr />
                    <div className='location_common'>
                        <h1 className='h1fbg'>약도 이미지</h1>
                        <img className='company_image' src={LocationImage}/>
                       
                    </div>
                </Container> 
        </>        
    );
}


 
