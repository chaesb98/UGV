import React, { Component } from 'react';
import ReactPlayer from "react-player";
import '../css/react_player.css';
import '../css/about.css';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import Swiper styles
import 'swiper/css';



// https://react-bootstrap.netlify.app/docs/components/buttons


class About extends Component {
    render() {
        const slickSettings = {
            slidesToShow: 3, // 한 번에 세 개의 이미지를 표시
            slidesToScroll: 3, // 세 개의 이미지씩 전진
            autoplay: true,
            autoplaySpeed: 2500,
        };

        return (
            <div>
                <div className="banner">
                    <h1 className='one'>회사 소개</h1>
                    <div className='img_hug'>
                        <img src='/images/banner.png'></img>
                    </div>
                    
                    <h2 className='two'>UN 식량농업기구에 따르면 전세계에서 버려지는 음식물의 3분의 1은 
                        표준 규격에서 부족하다는 이유로 수확단계에서 선별돼 버려지는 농산물입니다. <br></br>
                        표준 규격이 되는 기준은 모양,색깔,품질,크기 등 아주 다양하지만,<br></br>
                        저는 매주 UGV(유지비)에서 표준 미달인 못난이 과일과 야채를 받아 먹고 있습니다. <br></br>
                        UGV(유지비)에서는 버려질뻔한 못생긴 (하지만 맛은 좋은) 과일이나 야채를 싼 값에 <br></br>
                        사들여 대형마트보다 저렴한 가격에 판매하는 온라인 마트입니다.<br></br>
                        농가도 살리고, 음식물 쓰레기도 줄이고, 식량난도 해결하여, 맛있는 야채와 과일을 싼 가격에 맛볼 수 있습니다.<br></br> 
                        또한, 저희 UGV(유지비)는 수익금의 10 퍼센트는 식량난 해결을 위해 노력하는 단체에 기부하고 있습니다.<br></br>
                        못난이 야채를 사먹는게 근본적인 문제를 해결해 주진 못하겠지만,식량을 공급하는 공급자 선택하는 소비자의 인식이 바뀌어야합니다.<br></br><br></br>
                        농산물의 폐기는 유통과 소비 모든 단계에서 사회적 손실을 야기합니다.<br></br>
                        UGV(유지비)는 불필요한 낭비를 줄여 환경 보호에 기여하고, 농부의 노력에 대한 정당한 보상을 제공합니다.</h2>
        
                </div>

                <div className="banner_2">
                    <h1 className='one'>저희 UGV는 이런 농산물을 다룹니다.</h1>
                     <div className="aboutcarousel">
                    <div className="aboutcont">
                        <Slider {...slickSettings}>
                            <div>
                                <img
                                    className='slickimg'
                                    src='/images/about_berry.png'
                                    alt="Slide 1"
                                />
                            </div>
                            <div>
                                <img
                                    className='slickimg'
                                    src='/images/about_potato.png'
                                    alt="Slide 2"
                                />
                            </div>
                            <div>
                                <img
                                    className='slickimg'
                                    src='/images/about_tomato.png'
                                    alt="Slide 3"
                                />
                            </div>
                            <div>
                                <img
                                    className='slickimg'
                                    src='/images/about_apple.png'
                                    alt="Slide 1"
                                />
                            </div>
                            <div>
                                <img
                                    className='slickimg'
                                    src='/images/about_heart.png'
                                    alt="Slide 2"
                                />
                            </div>
                            <div>
                                <img
                                    className='slickimg'
                                    src='/images/about_cu.png'
                                    alt="Slide 3"
                                />
                            </div>
                            {/* Add more images in groups of three as needed */}
                        </Slider>
                    </div>
                </div>
                    <h2 className='two'> 저희 UGV는 산지의 문제를 해결하고 산지와 소비자를 더 가깝게 연결하고자 합니다. <br></br>
                        깁급하게 판로가 필요한 농산물부터 친환경 생산 철학을 지지하며 자란 농산물까지,<br></br>
                       기존의 시장 기준과 관행을 깨고 UGV만의 소싱 원칙으로 새로운 유통 체계를 만들어갑니다. <br></br>
                        </h2>
                       
                </div>
                <Container>
               
                <div className='raw'>
                
                <h3 className='three'>저희 UGV의 소개 영상을 공개합니다!</h3>
                <div className='player'>
                    <ReactPlayer
                    // 컴포넌트에서 유튜브 동영상 위치 지정
                    url='https://www.youtube.com/watch?v=PqxCeoWxcrU'
                    // 자동 실행 설정(true)
                    playing={true}                   
                    // 음소거 설정(true)
                    // 참고로, 자동 재생 설정은 playing과 muted를 true로 설정해야 합니다.
                    muted={true}
                    // 플레이어 컨트롤 노출 설정(true)
                    controls={true}
                    // 반복 재생 설정(true)
                    loop={true}

                    className ="playerClass"
                    />
                </div>               
            </div>
            </Container>
        </div>
        
     );
     
   }
}


export default About;