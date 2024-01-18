import React, { Component } from 'react';
import Container from 'react-bootstrap/esm/Container';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/board.css';

import $ from "jquery";

class Board extends Component {
    render() {
        return (
            <>
                <Container>
                    <div className='board_contain'>
                        <div className='board_pic'>
                        </div>
                        <div className='board_desc'>
                            <h2 className="kor_point"><span className="green kor_point">UG</span>ly <span className="green kor_point">V</span>egetable</h2>
                            <h3>UGV의 후기를 만나보세요!</h3>
                            <div className='board_list'>
                                <ul>
                                    <li className='boList'>
                                        <span>반신반의 하면서 구매를 했는데 생각보다 맛도 좋고 아주 만족중입니다! 재구매 할 예정이에요.</span>
                                        <a href='/' className='plusBtn'></a>
                                        {/* <a href='/'><img src='../images/plus.svg' alt="First Slide" className='plusBtn' /></a> */}
                                    </li>
                                    <li className='boList' >
                                        <span>벌써 4번째 주문입니다. 입소문이 났는지 엄마들 인스타에서도 보이더군요. 계속 먹을 수 있게 품질 유지해주세요!</span>
                                        <a href='/' className='plusBtn'></a>
                                        {/* <a href='/'><img src='../images/plus.svg' alt="First Slide" className='plusBtn' /></a> */}
                                    </li>
                                    <li className='boList'>
                                        <span>유지비를 만나고부터 믿음이 생겼어요,, 포장부터 신선도까지 챙겨보내줘서 믿고 주문합니다. 해서 토마토쥬스도 꾸준히먹어보려구요</span>
                                        <a href='/' className='plusBtn'></a>
                                        {/* <a href='/'><img src='../images/plus.svg' alt="First Slide" className='plusBtn' /></a> */}
                                    </li>
                                    <li className='boList'>
                                        <span>포장박스까지 깔끔하게 도착했네요 선물하기도 좋겠어요 도착하자마자 한팩을 마셨는데 새로운 맛이었어요 가끔 토마토주스 사 마시면 그냥 달달했는데 이건 좀 다르네요 토마토스파게티에 넣어 추가해 먹어도 좋을 것 같은 느낌이에요 이름대로 그대로 토마토즙입니다</span>
                                        <a href='/' className='plusBtn'></a>
                                        {/* <a href='/'><img src='../images/plus.svg' alt="First Slide" className='plusBtn' /></a> */}
                                    </li>
                                </ul>
                            </div>
                            <a href='/' className='board_more'>더보기</a>
                        </div>
                    </div>
                </Container>
            </>
        );
    }
}

export default Board;