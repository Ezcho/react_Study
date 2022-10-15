import React from 'react';
import './Layout.css';


function Layout() {
  return (
  
      <p class= "rigth">




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
  );
}

export default Layout;