import axios from "axios";
import React from "react";
import '../css/login.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import { Input } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot } from "@fortawesome/free-solid-svg-icons";



const Login = () => {

    const fn_signIn = () => {
        var submitYN = false;

        const memberId = document.getElementById('memberId').value;
        const memberPw = document.getElementById('memberPw').value;

        if(document.getElementById("memberId").value.length < 1){
            alert("아이디를 입력해 주세요!");
            document.getElementById("memberId").focus();
            return;
        }

        if(document.getElementById("memberPw").value.length < 1){
            alert("비밀번호를 입력해 주세요!");
            document.getElementById("memberPw").focus();
            return;
        }

        if(!submitYN){
            var submitYN = true;

            const form = new FormData();
            form.append('memberId', memberId);
            form.append('memberPw', memberPw);

            console.log("click login");
            console.log(memberId);
            console.log(memberPw);




            axios.post('http://localhost:9008/loginAction.do',
            form,{
                headers:{
                    'Content-type':'application/json',
                }
            }
            )
            .then((res) => {
                console.log(res.data);
                if(res.data != "N"){
                    alert(res.data + " 회원님, 환영합니다!");
                    // sessionStorage에 id 저장 처리함
                    sessionStorage.setItem("member_id", memberId);
                    // sessionStorage에 name 저장 처리함
                    sessionStorage.setItem("name", res.data);
                    document.location.href="/";
                } else{
                    alert("회원 정보가 없습니다!");
                    // 회원 가입 컴포넌트를 만들고, url을 /signup 설정했을 경우
                    // alert("회원 정보가 없습니다. 회원 가입을 해주시기 바랍니다!");
                    // document.location.href="/signup";
                }
            })
            .catch()
        }
    }
    return (
        <>
           <div className="login_header">
                <h1><p className="loginText">로그인</p></h1>
           </div>
           {/* https://react-bootstrap.netlify.app/docs/layout/grid */}
           <Container fluid="sm">
            <Row className="login_row">
                <Col md={{span:4, offset:4}} id="login_div" >
                {/* https://react-bootstrap.netlify.app/docs/forms/form-control */}                
            <Form id='loginForm'>
                <Form.Group className="form-group mb-4">
                {/* https://reactstrap.github.io/?path=/docs/components-forms--input */}
                 <Input type="id" id="memberId" placeholder="아이디를 입력해 주세요!" />
                </Form.Group>
                <Form.Group className="form-group mb-4">
                <Input type="password" id="memberPw" placeholder="비밀번호를 입력해 주세요!" />
                </Form.Group>
                <div className="d-flex2 align-items-center mb-2">
                    <input id="id_ckb" type="checkbox" /> {/* 아이디 저장 checkbox */}
                    <label htmlFor="id_ckb" className="ms-2">아이디 저장</label>
                    <span className="ms-auto logfind">
                        <a href="/find-id">아이디 찾기</a>
                        <span className="mx-1">|</span>
                        <a href="/find-password">비밀번호 찾기</a>
                    </span>
                </div>
                <div className="form-group d-grid mb-4">
                    <Button id="id_btn" variant="primary" size="lg" onClick={fn_signIn} >로그인</Button>
                </div>
                <div className="snsText">
                        <p>SNS로 로그인하기</p>
                </div>
                <div className="loginSocial loginIcon">
                    <a href="/" className="ic ic1"><img src="/images/ic_kakao.png" alt="카카오로그인"></img></a>
                    <a href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/" className="ic ic2"><img src="/images/ic_naver.png" alt="네이버로그인"></img></a>
                    <a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fwww.google.com%2Fwebhp%3Fhl%3Dko%26sa%3DX%26ved%3D0ahUKEwjTtf79mpCCAxVZCIgKHX9nC_UQPAgJ&ec=GAZAmgQ&hl=ko&passive=true&ifkv=AVQVeywfxlwkNqU_rt55_Qv8BascK9bYGQ7XuyR4LDgK8nLoN9rD9q_RKROMJs4NNuJqc7paqnAp-w&theme=glif&flowName=GlifWebSignIn&flowEntry=ServiceLogin" className="ic ic3"><img src="/images/ic_google.png" alt="구글로그인"></img></a>
                    <a href="/" className="ic ic4"><img src="/images/ic_apple.png" alt="애플로그인"></img></a>
                </div>
                <div className="btnCarrot">
                <a className="btnBottom" href="/signup"><FontAwesomeIcon icon={faCarrot} />가입 후 첫 구매 시 채소꾸러미 무료배송!</a>
                </div>
            </Form>
                </Col>
            </Row>

            </Container>
        </>
    );
};

export default Login;