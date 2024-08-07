import React from 'react';
import DayDescriptionItem from './DayDescriptionItem';

const dayDescriptions = [
    {
      day: 1,
      description: "그리스 4박 5일 투어 - 첫째 날",
      details: [
        "아테네 도착",
        "호텔 체크인 및 휴식",
        "시내 투어: 신타그마 광장, 에르무 거리",
        "저녁식사: 현지 레스토랑",
        "숙소로 이동 및 휴식"
      ],
    //   imageUrl: 'images/bg_1.jpg'
    },
    {
      day: 2,
      description: "그리스 4박 5일 투어 - 둘째 날",
      details: [
        "아침식사 후 산토리니로 이동",
        "산토리니 도착 및 호텔 체크인",
        "피라마을 투어",
        "오이아 마을에서 일몰 감상",
        "저녁식사: 오이아 마을"
      ],
    //   imageUrl: 'images/bg_1.jpg'
    },
    {
      day: 3,
      description: "그리스 4박 5일 투어 - 셋째 날",
      details: [
        "아침식사 후 미코노스 섬으로 이동",
        "미코노스 섬 투어: 미코노스 타운, 작은 베네치아",
        "점심식사: 현지 식당",
        "파라다이스 해변에서 휴식",
        "저녁식사 및 숙소 이동"
      ],
    //   imageUrl: 'images/bg_1.jpg'
    },
    {
      day: 4,
      description: "그리스 4박 5일 투어 - 넷째 날",
      details: [
        "아침식사 후 델포이로 이동",
        "델포이 유적지 투어: 아폴로 신전, 델포이 박물관",
        "점심식사: 델포이 마을",
        "델포이 자연경관 감상",
        "저녁식사 후 아테네로 복귀"
      ],
    //   imageUrl: 'images/bg_1.jpg'
    },
    {
      day: 5,
      description: "그리스 4박 5일 투어 - 다섯째 날",
      details: [
        "아침식사 후 아테네 자유시간",
        "플라카 지구 산책 및 쇼핑",
        "점심식사: 플라카 지구",
        "아크로폴리스 방문",
        "공항으로 이동 및 출국"
      ],
      imageUrl: 'images/bg_1.jpg'
    },
  ];

const DayDescription: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        {dayDescriptions.map(({ day, description, details, imageUrl }) => (
          <DayDescriptionItem
            key={day}
            day={day}
            description={description}
            details={details}
            imageUrl={imageUrl}
          />
        ))}

        <div className="col-md-12 tour-wrap">
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">출발</th>
                <td><p>인천국제공항</p></td>
              </tr>
              <tr>
                <th scope="row">출발 시간</th>
                <td><p>10:20 공항 집합, 10:50 출발</p></td>
              </tr>
              <tr>
                <th scope="row">도착 시간</th>
                <td><p>8:30 도착 예정</p></td>
              </tr>
              <tr>
                <th scope="row">포함 항목</th>
                <td>
                  <ul>
                    <li>항공</li>
                    <li>공항세 및 유류할증료</li>
                    <li>5성급 숙박 시설</li>
                  </ul>
                  <ul>
                    <li>식비</li>
                    <li>교통</li>
                    <li>전문 가이드</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th scope="row">불포함 항목</th>
                <td>
                  <ul>
                    <li>입장료</li>
                    <li>개인 경비</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th scope="row">지도</th>
                <td>
                  {/* <div id="map"></div> */}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-12 tour-wrap">
          <p>
            <a href="#" className="btn btn-primary py-3 px-4">예약하기</a>
            <a href="#" className="btn btn-secondary py-3 px-4">공유</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DayDescription;
