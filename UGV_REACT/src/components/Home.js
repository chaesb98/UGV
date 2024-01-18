// aos 라이브러리 적용 및 활용
// 1단계 : 터미널을 열고 다음의 커맨드를 입력 실행
// npm install aos --save
// 2단계 : AOS 활용 컴포넌트(aos, useEffect) 임포트
// import React, { useEffect } from "react";
// import AOS from "aos";
// 3단계 : AOS CSS 적용(예제에서는 css 폴더 생성 후에
//         AOS 공식 홈페이지 배포 aos.css 파일을 넣어주었음)
// import "./css/aos.css";
// 4단계 : useEffect 함수 활용 AOS 초기화 처리
// useEffect(() => {
//   AOS.init();
// })
// 5단계 : AOS 홈페이지에서 속성 및 설정 값 적용 확인
// https://michalsnik.github.io/aos/

import React, { useEffect } from "react";
import AOS from "aos";
import Board from "./Board";
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

import '../css/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/home.css';

import $ from "jquery";

// Carousels 맨 위에 Examples
// https://react-bootstrap.netlify.app/docs/components/carousel/

const Home = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    })
    return(   
        <>
            <div className="wrapper">                
                <div className="main_raw">
                    <div className="carousel_tabs_cont">
                        <div className="carouselcont">
                        <Carousel>
                            <Carousel.Item>
                                <img 
                                className='d-block w-100'
                                src='../images/banner1.svg'
                                alt="First Slide" />
                            </Carousel.Item>
                            <Carousel.Item>  
                                <img
                                className='d-block w-100'
                                src='/images/banner2.svg'
                                alt="Second Slide" />      
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className='d-block w-100'
                                src='/images/banner3.svg'
                                alt="Second Slide" />        
                            </Carousel.Item>
                            </Carousel>
                        </div>         
                    </div>

                    <div className="cont2">
                        <div className="cont2_intro">
                            <h2 className="kor_point"><span className="brown kor_point">UG</span>ly <span className="brown kor_point">V</span>egetable</h2>
                            <p><span className="orange kor_point">못난이</span><br></br> 야채들을 소개합니다!</p>
                            <div className="intro_flex">
                                <div className="veg_intro" data-aos="fade-up" data-aos-duration="2000">
                                    <img src='../images/kiwi.png'
                                    alt="First info" />
                                    <div className="caption">
                                        <h4>하트 모양 키위</h4>
                                        <p>영양 듬뿍 받고 자란 하트 모양 키위에요! </p>
                                        <p>하트 모양이라 더 맛있어요!</p>
                                    </div>
                                </div>
                                <div className="veg_intro"
                                data-aos="fade-up"
                                data-aos-duration="3000">
                                    <img src='../images/strawberry.png'
                                    alt="First info" />
                                    <div className="caption">
                                        <h4>울퉁불퉁 딸기</h4>
                                        <p>모양이 울퉁불퉁 하지만 달고 맛있어요!</p>
                                        <p>신선하고 가격도 착하답니다!</p>
                                    </div>
                                </div>
                                <div className="veg_intro"
                                data-aos="fade-up"
                                data-aos-duration="4000">
                                    <img src='../images/chung.png'
                                    alt="First info" />
                                    <div className="caption">
                                        <h4>못난이 청경채</h4>
                                        <p>못생겼다고 놀리지 마세요! </p>
                                        <p>생긴건 다르지만 맛은 똑같답니다!</p>
                                    </div>
                                </div>
                            </div>
                            <Link to="/about" className="info_more">더 알아보기</Link>
                        </div>
                    </div>

                    <div className="cont3">
                        <Board />
                    </div>

                </div>
            </div>   

        </>     
    );
};
export default Home;

$(function(){
    $(".media01").delay(100).animate({opacity:1, top: 0}, 600, "swing")
    $(".media02").delay(100).animate({opacity:1, top: 0}, 600, "swing")
    $(".media03").delay(100).animate({opacity:1, top: 0}, 600, "swing")
    $(".media04").delay(100).animate({opacity:1, top: 0}, 600, "swing")
    $(".media05").delay(100).animate({opacity:1, top: 0}, 600, "swing")
});