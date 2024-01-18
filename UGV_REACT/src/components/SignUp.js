import axios from "axios";
import React from "react";
import '../css/signup.css'; // 별도로 스타일 파일을 정의해주세요.
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import { Input } from "reactstrap";



const Signup = () => {

    const fn_signUp = () => {
        var submitYN = false;

        const memberName = document.getElementById('memberName').value;
        const memberId = document.getElementById('memberId').value;
        const memberPw = document.getElementById('memberPw').value;
        const memberEmail = document.getElementById('memberEmail').value;

        if (document.getElementById('memberId').value.length < 1) {
            alert("아이디를 입력해 주세요!");
            document.getElementById('memberId').focus();
            return;
        }

        if (document.getElementById('memberPw').value.length < 1) {
            alert("비밀번호를 입력해 주세요!");
            document.getElementById('memberPw').focus();
            return;
        }

        if (document.getElementById('memberEmail').value.length < 1) {
            alert("이메일을 입력해 주세요!");
            document.getElementById('memberEmail').focus();
            return;
        }

        if (!submitYN) {
            submitYN = true;

            const form = new FormData();
            form.append('memberName', memberName);
            form.append('memberId', memberId);
            form.append('memberPw', memberPw);
            form.append('memberEmail', memberEmail);

            console.log('click signup');

            axios.post('http://localhost:9008/signupAction.do',
                form, {
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
            )
            .then((res) => {
                console.log(res.data);
                if (res.data === 'S') {
                    alert("회원 가입이 완료되었습니다!");
                    document.location.href = "/Home"; // Redirect to the login page
                } else if (res.data === 'D') {
                    alert("이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요.");
                } else {
                    alert("회원 가입에 실패했습니다. 다시 시도해주세요.");
                }
            })
            .catch((error) => {
                console.error(error);
                alert("회원 가입 중 오류가 발생했습니다.");
            });
        }
    }

    return (
        <>
           <div className="signup_header">
                <h1><p className="signupText">회원 가입</p></h1>
           </div>
           <Container fluid="sm">
            <Row className="signup_row">
                <Col md={{span: 4, offset: 4}} id="signup_div">
            <Form id='signupForm'>
                <Form.Group className="form-group mb-4">
                    <Input type="text" id="memberName" placeholder="성명을 입력해 주세요!" />
                </Form.Group>
                <Form.Group className="form-group mb-4">
                    <Input type="text" id="memberId" placeholder="사용할 아이디를 입력해 주세요!" />
                </Form.Group>
                <Form.Group className="form-group mb-4">
                    <Input type="password" id="memberPw" placeholder="비밀번호를 입력해 주세요!" />
                </Form.Group>
                <Form.Group className="form-group mb-4">
                    <Input type="email" id="memberEmail" placeholder="이메일을 입력해 주세요!" />
                </Form.Group>
                <div className="d-flex align-items-center mb-2">
                    <input id="id_ckb" type="checkbox" />
                    <label htmlFor="id_ckb" className="ms-2">약관에 동의합니다</label>
                </div>
                <div className="form-group d-grid mb-4">
                    <Button id="signup_btn" variant="primary" size="lg" onClick={fn_signUp}>회원 가입</Button>
                </div>
                <div className="snsText">
                        <p>SNS로 가입하기</p>
                    </div>
                <div className="loginSocial loginIcon signupmargin">

                    <a href="/" className="ic ic1"><img src="/images/ic_kakao.png" alt="카카오로그인" /></a>
                    <a href="/" className="ic ic2"><img src="/images/ic_naver.png" alt="네이버로그인" /></a>
                    <a href="/" className="ic ic3"><img src="/images/ic_google.png" alt="구글로그인" /></a>
                    <a href="/" className="ic ic4"><img src="/images/ic_apple.png" alt="애플로그인" /></a>
                </div>
            </Form>
                </Col>
            </Row>
           </Container>
        </>
    );
};

export default Signup;