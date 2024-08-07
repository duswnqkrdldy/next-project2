const Home = () => {
  return (
    //최상위 main
    <main className="flex container mx-auto ">
      <div>
        <p>왼쪽목록</p>
      </div>
      <div>
        <div>
          <p>상단[회원관리 리스트]</p>
        </div>
        <div>
          <p>상세검색</p>
        </div>
        <div>
          <table>
            <tr>
              <th>번호</th>
              <th>가입일</th>
              <th>이름</th>
              <th>아이디</th>
              <th>회원등급</th>
              <th>구배금액</th>
              <th>포인트</th>
              <th>메일수신여부</th>
            </tr>
            <tr>
              <a href="/user/detail">회원리스트 상세페이지</a>
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
