import React from "react";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import '../css/qna.css';

// https://react-bootstrap.netlify.app/docs/components/accordion/

function QnA() {
  return (
    <>
    <Container>
      <div className="margin">
        <h1 className="h1bg">자주 묻는 질문</h1>
      </div>
      <div className="accordion_wrap">
    {/* 아래 defaultActiveKey="0"을 설정하면 0번이 기본으로 열려 있게 됩니다.
        원하지 않을 경우, 초기값은 ""로 설정합니다.  */}
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Q1. UGV는 무슨 의미인가요?</Accordion.Header>
        <Accordion.Body>
        저희 <span className="red">UGV(유지비, UGly Vegetable)는 상품성은 조금 떨어지지만, 신선하고 맛있는 못난이 과일과 채소를 판매</span>합니다. UGV에는 못난이 채소라는 뜻과 1인 가구의 (생계) 유지비를 지키기 위한 서비스라는 뜻이 담겨있습니다. 혼자 생활하는 1인 가구가 지속적으로 증가하는 요즘, 비싼 농산물을 부담없는 가격에 합리적인 양만 구매할 수 있는 곳이 있었으면 좋겠다는 마음에서 시작하게 되었습니다. <br /><br /> UGV는 주목받지 못하는 논과 밭, 농부와 작물들에 지속적으로 관심을 갖고 농작물의 진정한 가치를 알리기 위해 노력합니다. 상품성이 떨어진다는 이유로 폐기되는 농산물들은 지구온난화를 가속화시키고, 사회적 &middot; 경제적으로 큰 손실을 야기합니다. 불필요한 손실을 막고, 소비자가 현명하게 소비를 할 수 있으며, 농업인이 합리적인 노력의 결실을 볼 수 있는 <span className="red">지속가능한 소비 및 생산</span>의 과정에 함께하겠습니다. 조금은 못생기고, 상처가 있더라도 건강하고 신선한 식재료가 가치를 여러분께 전하겠습니다. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Q2. UGV에서 판매하는 농산물들은 왜 가격이 저렴한가요?</Accordion.Header>
        <Accordion.Body>
        색 &middot; 크기 &middot; 모양 &middot; 상처 등 외적 기준에 따른 선별을 거쳐 표준 규격에 미치지 못하는 농산물들을 '규격 외 농산물'이라고 합니다. 색이 예쁘지 않아서, 크기가 너무 크거나 작아서, 모양이 일정하지 않아서, 상처가 생겨서 유통되지 못하는 농산물들이 연간 수억 톤에 달합니다. 농림축산식품부의 2018년 조사에 따르면 농산물 생산량의 10~30%가 등급외 농산물에 해당합니다. 규격 외 농산물들은 가공이 가능한 경우 즙이나 말랭이, 건조 플레이크 등으로 활용되기도 하지만 끝내 폐기되는 농산물도 많습니다. 이렇게 규격 외 농산물로 분류되어 버려지는 농산물들은 가격 상승의 원인이 되기도 합니다. <br /><br /> <span className="red">보기에는 예쁘지 않더라도 먹기에 충분히 괜찮은 농산물들을 적극 이용하여 합리적인 가격에 좋은 품질의 농산물을 제공</span>할 수 있게 되었습니다. 우리 땅에서 친환경적인 방법으로 재배한 신선한 제철 작물이니 걱정 없이 믿고 드셔도 됩니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Q3. 교환 및 환불 기준이 어떻게 되나요?</Accordion.Header>
        <Accordion.Body>
        UGV에서는 최대한 신선한 농산물을 안전하게 보내드리기 위해 애쓰지만,기후나 배송 등의 문제로 간혹 상품에 문제가 생기는 경우가 발생하기도 합니다. <br /><br /> 받으신 상품에 문제가 있는 경우에는 상품을 받으신 날부터 <span className="red">3일 이내에 교환 및 환불을 요청</span>하실 수 있습니다. 신선 식품인 관계로 고객님의 부주의로 인하여 발생한 문제는 책임지지 않습니다. 상담시에 상품의 정확한 상태를 파악할 수 있도록 설명과 함께 사진을 첨부해주시면 빠른 상담을 도와드리겠습니다. 상품에 문제가 있는 것으로 확인되면 배송비는 UGV가 부담합니다. <br /><br /> <span className="red">고객님의 부주의 혹은 단순 변심으로 인한 교환 및 환불은 왕복 배송비를 부담</span> 하셔야합니다. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Q4. 포장재는 회수해 가시나요?</Accordion.Header>
        <Accordion.Body>
        지속 가능한 생산 및 소비를 추구하는 만큼, 포장재도 <span className="red">친환경 포장재를 사용</span>하고 있습니다. 플라스틱 사용을 지양하고, 생분해 비닐 및 종이 포장재 등 친환경 패키징을 추구합니다. <br /><br /> 현재에는 <span className="red">수도권 지역을 중심으로 포장재와 다회용 아이스박스 회수 서비스를 운영</span>하고 있습니다. UGV에서 제공된 다회용 아이스박스와 포장재만 회수하며, 이외의 기타 종이 포장재 및 아이스팩 등은 회수하지 않으니 확인 부탁드립니다. <br /><br /> 포장재 회수 방법은 다음과 같습니다. <br /> ① 상품 수령 후 아이스박스에서 송장을 제거해 주세요. <br /> ② 다음 주문 시에 포장재 회수 옵션을 클릭하세요. <br /> ③ 아이스박스 내에 포장재를 넣어 배송지 앞에 두세요. <br /><br /> 훼손이 심한 포장재 및 아이스박스 등은 회수하지 않으며, 회수 불가 사유를 따로 안내해 드리지 않습니다. 포장재와 다회용 아이스박스가 성공적으로 회수되면 500포인트가 적립됩니다. <br /><br /> 해당 서비스가 조금 더 다양한 지역으로 확대될 수 있도록 많은 관심과 참여 부탁드립니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Q5. 대량구매도 가능한가요?</Accordion.Header>
        <Accordion.Body>
        UGV는 1인 가구를 위한 식재료를 소량 판매하는 것을 원칙으로합니다. 다만 폐기되는 규격 외 농산물을 조금이라도 더 활용할 수 있으면 좋을 것 같아 대량구매를 하실 수 있도록 <span className="red">농가와 연계해드리는 서비스를 제공</span>하고 있습니다. <br /><br /> 대량구매를 희망하신다면 ugv@gmail.com으로 문의 주시면 담당자가 확인한 후 답변 드리도록 하겠습니다. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Q6. 엘리베이터가 없는 고층 건물도 배송이 되나요?</Accordion.Header>
        <Accordion.Body>
        UGV는 자체 배송을 진행하고 있습니다. 자체 배송 상품의 경우 <span className="red">엘리베이터가 없는 5층 이상의 배송지는 구매 수량이 제한되며, 추가 운임비가 발생</span>할 수 있습니다. 또한, 이 경우 추가 배송이나 반품이 불가할 수 있습니다. <br /><br /> 농가 직배송 상품과 일반 배송 상품은 택배사 규정에 따르며 주문이 취소되거나 원활한 배송이 어려울 수 있으니 양해 부탁드립니다. 택배사 규정은 각 택배사의 홈페이지에서 확인 할 수 있습니다. <br /><br />엘리베이터가 없는 고층 배송지는 주문 시에 1층 혹은 공동 현관(공동 출입문) 수령으로 선택하시면 엘리베이터가 없는 건물이어도 정상 배송 가능함을 안내해 드립니다. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </Container>
    </>
  );
}

export default QnA;