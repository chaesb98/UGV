import React from "react";
// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/footer.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const url = "https://www.kcc.go.kr/user.do";

const Footer = () => {
    return(
        <div className="footer">
            {/* <Container className="footerCon"> */}
            <div className='raw'>
                <br /><br /><br />
                {/* <hr /> */}
                <Row>
                    <Col>
                        <Navbar.Brand href="/" className='logo'><img src='/images/ugv_logo.png' alt='로고이미지' /></Navbar.Brand>
                    </Col>
                    <Col md="auto">
                        <div className="conBtn button"><a href="/Consultation">상담문의</a></div>
                    </Col>
                    <Col xs lg="2">
                        <div className="qnaBtn button"><a href="/QnA">자주묻는 질문</a></div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <p className="leftText text">
                            <span className="bold">오프라인 구매</span> <br/>
                            <span className="bold">월 ~ 금요일</span>9:30 ~ 18:20(점심시간 12:20 ~ 13:30) <br/>
                            <span className="bold">토, 일, 공휴일</span>휴무
                        </p>
                    </Col>
                    <Col>
                        <p className="rightText text">
                            <span className="bold">온라인 구매</span> 
                            <span className="bold">연중무휴</span> <br/>
                            <span className="bold">문의 답변</span> : 10:00 ~ 18 : 00 (점심시간 12:20 ~ 13:30)  
                            <span className="bold"><p className="fotSns">SNS </p> <a href ="https://twitter.com/?lang=ko" target="_blank" className="f_sns">: 트위터</a> / <a href="https://www.instagram.com/" target="_blank" className="f_sns">인스타그램</a> / <a href="https://www.facebook.com/?locale=ko_KR" target="_blank" className="f_sns">페이스북</a></span>
                        </p>
                    </Col>
                </Row>
                <br/><br/>
                <hr/>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="bottomText">
                        <p>Copyright &copy; UGV TEAM PORTFOLO Co.ltd ALL Rights reserved.</p>
                        <p>본 사이트는 상업적 목적이 없는 포트폴리오 목적으로 제작된 작품으로 사진은 구글 이미지를 사용하였습니다.</p>
                        <span>사진 관련 문의 : sj540812@naver.com</span>
                    </Col>
                </Row>
                <br />
            </div>
            {/* </Container> */}
        </div>
    );
};

export default Footer;