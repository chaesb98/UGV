import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/Consultation.css";

const Consultation = (props) => {
    const [con, setCon] = useState({
        title: '',
        author:'',
        email:'',
        content:'',
    });

    const changeValue = (e) => {
        setCon({
            ...con,
            [e.target.name]:e.target.value
        });
    }

    const submitCon = (e) => {
        e.preventDefault(); // submit이 action을 안타고 자기 할일을 그만함.
        fetch("/Consultation",{
            method:"Post",
            headers:{
                "Content-Type":"application/json; charset=utf-8"
            },
            body:JSON.stringify(con)
        }).then(res=> {
            console.log("정상", res);
            if(res.status === 201){
                return res.json();
            } else{
                return null;
            }
            
        }).then(res=> {
            if(res !== null){
                props.history.push("/");
                alert("문의사항이 등록되었습니다.")
            } else{
                alert("문의사항 등록에 실패하였습니다.")
            }
        });
    }

    return (
        <div className='consultation'>
            <div className='raw'>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1 className='title'>상담문의</h1>
                        <hr className='line' />
                        <Form.Select aria-label="Default select example" className="select" name="">
                            <option>문의유형</option>
                            <option value="1">회원정보 문의</option>
                            <option value="2">쿠폰/포인트 문의</option>
                            <option value="3">주문/결제 관련 문의</option>
                            <option value="4">취소/환불 관련 문의</option>
                            <option value="5">배송 관련 문의</option>
                            <option value="6">주문 전 상품 정보 문의</option>
                            <option value="7">서비스 개선 제안</option>
                            <option value="8">시스템 오류 제보</option>
                            <option value="9">불편 신고</option>
                            <option value="10">기타 문의</option>
                        </Form.Select>
                        <Form onSubmit={submitCon}>
                            <Form.Group className="mb-3 formSmall" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" name="author" onChange={changeValue} placeholder="이름을 입력하세요" />
                            </Form.Group>
                            <Form.Group className="mb-3 formSmall" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" name="email" onChange={changeValue} placeholder="이메일을 입력하세요" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text"name="title" onChange={changeValue} placeholder="제목을 입력하세요" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea"name="content" onChange={changeValue} rows={3} placeholder="문의사항을 입력하세요" />
                            </Form.Group>
                             <Form.Group controlId="formFile" className="mb-3 file" id="file" name="file">
                                <Form.Control type="file" />
                            </Form.Group>
                            <div className="textBox">
                                <Form.Check aria-label="option 1" />
                                <p className="textHD">개인정보 수집 동의</p>
                                <span className="textContent">
                                    1. 수집하는 개인정보 항목 : 이름, 이메일 <br/><br/>
                                    2. 수입 목적 : 문의자 확인, 문의에 대한 회신 등의 처리 <br/><br/>
                                    3. 보유 기간 : 목적 달성 후 파기, 단, 관게법령에 따라 또는 회사 정책에 따른 정보보유사유가 발생하여 보존할 필요가 있는 경우에는 필요한 기간 동안 해당 정보를 보관합니다. 전자상거래 등에서의 소비자 보호에 관한 법류, 전자금융거래법, 통신비밀보호법 등 법령에서 일정기간 정보의 보관을 규정하는 경우, 이 기간 동안 법령의 규정에 따라 개인정보를 보관하며, 다른 목적으로는 절대 이용하지 않습니다.(개인정보처리방침 참고) <br/><br/>
                                    4. 귀하는 회사의 정보수집에 대해 동의하지 않거나 거부할 수 있습니다. 다만, 이때 원활한 문의 및 서비스 이용 등이 제한될 수 있습니다.
                                </span>
                            </div>

                            <div className="d-grid gap-2">
                                <Col md={{ span: 6, offset: 3 }}>
                                    <Button variant="primary" type="submit" size="lg" className="conButton" >
                                        등록하기
                                    </Button>
                                </Col>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Consultation;