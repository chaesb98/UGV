import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/Product.css';
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';


function CardExample() {
  return (
    <>
    <Container>
      <div className="margin">
        <h1>못난이 농산물</h1>
      </div>
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/tomato.png" />
        <Card.Body>
          <Card.Title>토마토</Card.Title>
          <Card.Text>
            울퉁불퉁 멋진 몸매를 가졌지만, 울퉁불퉁해서 규격 외 농산물로 분류된 토마토에요! 신선하고 맛있는 토마토는 노화방지에 좋아요~!
          </Card.Text>
          <Button variant="secondary">품절!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/radish.png" />
        <Card.Body>
          <Card.Title>무</Card.Title>
          <Card.Text>
            무는 위와 기관지에 좋아요. 생긴 것은 조금 특이해 보이지만, 맛과 영양은 예쁜 무에 뒤지지 않는답니다! 자유분방하게 생긴 무는 웃음을 주기도 하죠.
          </Card.Text>
          <Button variant="secondary">품절!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/pumpkin.png" />
        <Card.Body>
          <Card.Title>호박</Card.Title>
          <Card.Text>
            개성있게 생긴 호박들이지만, 혈액순환과 면역력 증진에 효능이 있어요. 얼룩도 있고 흉터도 있지만 우리에게 도움을 주는 착한 호박이에요!!
          </Card.Text>
          <Button variant="secondary">품절!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/cabbage.png" />
        <Card.Body>
          <Card.Title>양배추</Card.Title>
          <Card.Text>
            농약과 화학 비료를 사용하지 않아 벌레들이 너무 맛있게 먹어버린 양배추에요. 구멍은 조금 많이 생겼지만 다이어트와 피부미용에 좋답니다!
          </Card.Text>
          <Button variant="secondary">품절!</Button>
        </Card.Body>
      </Card>
    </div>
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/Cucumber.png" />
        <Card.Body>
          <Card.Title>오이</Card.Title>
          <Card.Text>
            크기도 작고 울퉁불퉁 허리도 휘었지만 오이지나 피클로 활용하기엔 딱 좋아요! 오이는 변비와 체중조절에 효과적이랍니다!!
          </Card.Text>
          <Button variant="secondary">품절!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/carrot.png" />
        <Card.Body>
          <Card.Title>당근</Card.Title>
          <Card.Text>
            크기가 작고 수염이 많아 상품성이 떨어진다는 이유로 UGV와 만나게 된 당근이에요. 철분이 풍부하고 작아서 귀여운 당근이랍니다!!
          </Card.Text>
          <Button variant="secondary">품절!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/Eggplant.png" />
        <Card.Body>
          <Card.Title>가지</Card.Title>
          <Card.Text>
            길쭉길쭉한 가지는 아니지만, 작고 동글동글 귀여운 가지는 피부 미용에 도움을 줘요. 외국에서는 계란처럼 동글동글 귀여운 가지가 더 흔하다네요!
          </Card.Text>
          <Button variant="secondary">품절!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/paprika.png" />
        <Card.Body>
          <Card.Title>파프리카</Card.Title>
          <Card.Text>
           납작하게 눌리기도하고, 크기도 제각각이지만 알록달록한 빛깔은 잃지 않았습니다! 달달하고 아삭아삭한 파프리카는 기미, 주근깨 예방에 좋아요.
          </Card.Text>
          <Button variant="secondary">품절!</Button>
        </Card.Body>
      </Card>
      
    </div>

      <div className="margin">
        <h1>손질 채소 세트 </h1>
      </div>

      <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/set1.png" />
        <Card.Body>
          <Card.Title>파불고기 채소 세트</Card.Title>
          <Card.Text>
            1 ~ 2인분. 손질 파채 + 양파채+ 당근 어슷썰기 + 새송이 세로썰기 (양념장과 고기는 포함되지 않은 상품입니다.)
          </Card.Text>
          <Button variant="secondary">품절!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/set2.png" />
        <Card.Body>
          <Card.Title>생선조림 채소 세트</Card.Title>
          <Card.Text>
           1 ~2인분. 조림용 무 + 감자 + 대파 + 고추 + 양파채 (양념장과 생선은 포함되지 않은 상품입니다.)
          </Card.Text>
          <Button variant="secondary">품절!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/set3.png" />
        <Card.Body>
          <Card.Title>된장찌개 채소 세트</Card.Title>
          <Card.Text>
           1 ~ 2인분. 찌개용 감자 + 무 + 애호박 + 양파 (양념장은 포함되지 않은 상품입니다.)
          </Card.Text>
          <Button variant="secondary">품절!</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="images/set4.png" />
        <Card.Body>
          <Card.Title>ABC 주스용 과일</Card.Title>
          <Card.Text>
            1잔용. 주스용 사과(Apple) + 비트(Beet) + 당근(Carrot) 세트 (갈려있지 않은 상태입니다.)
          </Card.Text>
          <Button variant="secondary">품절!</Button>
        </Card.Body>
      </Card>
    </div>

     <div className="margin">
        <h1>정기 배송 서비스</h1>
      </div>
      <Card className="text-center mb150">
      <Card.Header>신선한 제철 농산물을 깨끗하게 손질하여 안전하게 배송해드립니다!</Card.Header>
      <Card.Body>
      <Card.Text> 집에서 간편하게 신선한 제철 농산물을 받아보세요. <br /> 까다롭게 엄선된 농산물을 깨끗하게 손질하여 바로 드실 수 있도록 집 앞까지 배송해드립니다! <br /> 이번에는 어떤 맛있는 농산물이 도착할지 두근대는 마음에 UGV에서 배송하는 날만 기다리게 될거에요. <br /> 배송되는 농산물은 시기와 상황에 따라 변경되며, 사전 고지되지 않습니다. 또한 농산물의 종류로 인한 교환 및 환불은 불가합니다. <br /> 알레르기 등으로 섭취하지 못하는 농산물이 있다면 구독신청 하실 때 미리 요청사항에 작성해주세요.<br /> 신선하고 건강한 농산물이 선물처럼 찾아가겠습니다~!</Card.Text>
        <Image src="images/delivery.png" fluid />
        <Card.Text> </Card.Text>
        <Button variant="danger">구독하러 가기!</Button>
      </Card.Body>
    </Card>

    </Container>
    </>
  );
}

export default CardExample;