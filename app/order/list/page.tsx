const Home = () => {
  return (
    //최상위 main
    <main className="flex container mx-auto ">
      <div>
        <p>왼쪽목록</p>
      </div>
      <div>
        <div>
          <p>상단[주문관리 리스트]</p>
        </div>
        <div>
          <p>상세검색</p>
        </div>
        <div>
          <table>
            <tr>
              <th>번호</th>
              <th>주문유형</th>
              <th>주문일시</th>
              <th>주문번호</th>
              <th>상품정보</th>
              <th>주문고객</th>
              <th>결제금액</th>
              <th>결재상태</th>
              <th>주문 및 배송상태</th>
            </tr>
            <tr>
              <td colSpan={9}>
                <a href="/order/detail">리스트 상세페이지</a>
              </td>
            </tr>
          </table>
          <div>
            <p>배송정보</p>
          </div>
          <div>
            <p>결재정보</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
