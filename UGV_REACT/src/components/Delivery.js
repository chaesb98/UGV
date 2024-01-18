import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ReactPlayer from "react-player";
import Button from 'react-bootstrap/Button';
import '../css/delivery.css';
import AOS from "aos";


// https://react-bootstrap.netlify.app/docs/components/buttons

class Community extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className='del_main'>
                        <img src='/images/del1.png' ></img>
                    </div>
                    <div className='anotherdel'>
                        <ul className='delspace'>
                            <li><a href='#'>당일배송</a></li>
                            <li><a href='#'>택배배송</a></li>
                        </ul>
                    </div>
                    <div id='tab1'>
                        <div className='inner'>
                            <div className='deltoptext'>
                                <h2 className='delguide'>UGV 새벽배송 안내</h2>
                                <img src='/images/clock.png' className='clock' alt='시계'></img>
                                <p className='delguide2'>오늘 밤 10시까지 주문 시 다음날 오전 7시 이전까지 배송 가능!</p>
                                <img src='/images/dawn.png' className='dawn' alt='새벽배송'></img>
                            </div>
                            <div className='delbottext'>
                                <h3 className='delseven'>주 7일 연중무휴 새벽배송</h3>
                                <p className='delseven2'>- - - -365일 매일매일 새로운 채소를 만나보세요- - - -</p>
                                <img src='/images/days.png' className='days'></img>
                            </div>
                            <div className='delarea'>
                                <h2>당일배송이 가능한 지역을 확인하세요 ☞ <button className='delsearch' >검색</button></h2>
                            </div>
                            <div className='delbest'>
                                <h3 className='delthree'>UGV 새벽배송의 장점</h3>
                                <ul className='del_info'>
                                    <li><a>▶ 중간 유통 과정 없이 산지에서 문앞까지 누구보다 빠르고 신선하게🛍️</a></li>
                                    <li><a>▶ 냉동, 냉장, 상온으로 분리해 포장하고, 냉장 차량으로 문앞까지 신선도 유지🧊</a></li>
                                    <li><a>▶ 냉동 박스부터 1차 포장재까지 친환경 종이를 사용한 1회용품 최소화🍀</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </Container>                
            </div>
        );
   }
}


export default Community;