import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Layout.css';

function Layout() {
  return (
    <p>
      <p class = "left">
        <span className = 'left'>
          <div className = "top"></div>
      
          <img src = "img/img1.jpg" alt ="img1" className = "profile_pic"/>
          <br/>
          <b className='h1'>Dongyoungcho</b>
          <br/><br/>
          <b className='h2'>Seoultech </b>
          <br/>
          <b className='h2'>Computer Science </b>
          <br/>
          <img src = "img/kakaotalk.png" className="contact" a href = "#!"/>
          
          <br/>
         <img src = "img/maps.png" className="contact"/>
        <b className = 'h2'>서울시 노원구 공릉동 593-5</b>
         
         </span>
         
         
         
      </p>
      <p class= "rigth">
        <div className = "ingi">인기글</div>
        
        <table className = "img">
          <tr>
            <td>
              <img src = "img/img3.jpg" className="hot"/>
              <br/><a href="#!" className = "hot_text">[java]Java의 Object클래스</a>
              
            </td>
            <td>
              <img src = "img/img2.jpg" className="hot"/>
              <br/><a href="#!"className = "hot_text">[Unity]작업 환경 구성하기</a>
            </td>
            <td>
              <img src = "img/img4.jpg" className="hot"/>
              <br/><a href="#!"className = "hot_text">[일상]M2 Macbook Pro 언박싱!</a>
            </td>
          </tr>
          <tr>
            <td>
              <img src = "img/img5.jpg" className="hot"/>
              <br/><a href="#!"className = "hot_text">[Unity]작업 환경 구성하기</a>
              
            </td>
            <td>
              <img src = "img/img6.jpg" className="hot"/>
              <br/><a href="#!"className = "hot_text">[Java]Java lang패키지</a>
            </td>
            <td>
              <img src = "img/img7.jpg" className="hot"/>
              <br/><a href="#!"className = "hot_text">피보나치킨</a>
            </td>
          </tr>


        </table>

        <hr/>



      <table class="board-table">
                <thead>
                <tr>
                    <th scope="col" class="th-num">번호</th>
                    <th scope="col" class="th-title">제목</th>
                    <th scope="col" class="th-date">등록일</th>
                    <th scope="col" class="th-date">카테고리</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>3</td>
                    <th>
                      <a href="#!">[java]Java의 Object클래스</a>
                      <p>테스트</p>
                    </th>
                    <td>2022.03.24</td>
                    <td>Java</td>
                </tr>

                <tr>
                    <td>2</td>
                    <th><a href="#!">[Unity]작업 환경 구성하기</a></th>
                    <td>2022.06.15</td>
                    <td>Unity</td>
                </tr>

                <tr>
                    <td>1</td>
                    <th><a href="#!">오리를 맛있게 굽는법</a></th>
                    <td>2021.12.15</td>
                    <td>일상</td>
                </tr>
                </tbody>
            </table>
        

      </p>
    </p>
  );
}

export default Layout;