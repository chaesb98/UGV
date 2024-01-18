import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from "react";
import "../css/common.css";

// react-bootstrap/Navbar
// https://react-bootstrap.netlify.app/docs/components/navbar/

function ReactBootstrapNavbars() {

   // 로그인, 로그아웃
   const [isLogin, setIsLogin] = useState(false);
   const name = sessionStorage.name
 
   // 로그인 상태 관리
   useEffect(()=>{
     if(sessionStorage.getItem('member_id') === null){
       console.log('isLogin 상태 = ', isLogin)
     } else {
       // 로그인 상태 변경
       setIsLogin(true)
       console.log('isLogin 상태 = ', isLogin)
     }
   });
 
   const onLogout = () => {
     alert("로그아웃 되셨습니다!");
     // sessionStorage에 저장되어 있는 아이템을 삭제 처리 합니다.
     sessionStorage.removeItem('member_id')
     sessionStorage.removeItem('name')
 
     // '/' url로 이동 처리함(새로고침)
     document.location.href = '/'
   }

   function handleClick(){
    alert("아직 개발중인 페이지입니다.");
  };

  return (
    <Navbar bg="" expand="lg" className="custom-bg-color">
      <Container>
        <Navbar.Brand href="/" className='logo'><img src='/images/ugv_logo.png' alt='로고이미지' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/About">회사소개(About)</Nav.Link> */}
            <NavDropdown title="회사소개" id="basic-nav-dropdown">
              <NavDropdown.Item href="/About">회사소개</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Product">상품 소개</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Location">찾아오시는 길</NavDropdown.Item>            
            </NavDropdown>
            <Nav.Link href="/Delivery">배송안내</Nav.Link>
            {/* <Nav.ㄴLink href="/QnA">자주묻는질문</Nav.ㄴLink> */}
            {/* <Nav.Link href="/Location">회사위치(Location)</Nav.Link> */}
            <NavDropdown title="고객소통란" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={handleClick}>공지사항</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={handleClick}>자유게시판</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={handleClick}>후기 게시판</NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item href="/QnA">자주묻는 질문</NavDropdown.Item>                
            </NavDropdown>
            <NavDropdown title="회원정보" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Signup">회원가입</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={handleClick}>마이페이지 </NavDropdown.Item>             
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Consultation">상담문의 </NavDropdown.Item>      
            </NavDropdown>
          </Nav>
          {/* https://react-bootstrap.netlify.app/docs/forms/form-control */}
          {/* d-flex는 flex 적용 의미함 */}
          <Form className='d-flex'>
           {/* .me-2는 margin-end 0.5rem Size 적용 의미함 */}
           {/* aria-label은 값에 간결한 설명을 제공해서, 문자열을 통해 현재 엘리먼트의 기능/목적을 설명함 */}
          {/* <Form.Control type="search" className='me-2' placeholder="검색어를 입력하세요" aria-label='Search' /> */}
          {/* https://react-bootstrap.netlify.app/docs/components/buttons */}
          {/* <Button variant="outline-success" className='searchBtn'>검색</Button> */}
                
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ReactBootstrapNavbars;