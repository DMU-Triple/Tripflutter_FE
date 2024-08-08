import React from 'react';
import InfoTable from './InfoTable';

const HotelInfoTable: React.FC = () => {
  const hotelInfo = [
    { header: "호텔 이름", content: "아틀란티스 호텔" },
    { header: "주소", content: "Thira, Santorini, Santorini Island, 847 00" },
    { header: "체크인 시간", content: "15:00" },
    { header: "체크아웃 시간", content: "12:00" },
    {
      header: "편의 시설",
      content: [
        "무료 와이파이", "조식 포함", "피트니스 센터",
        "수영장", "스파", "비즈니스 센터"
      ],
    },
    { header: "불포함 항목", content: ["미니바 사용료", "룸서비스", "주차료"] },
  ];

  return (
      <div className="container">
          <InfoTable data={hotelInfo} />
      </div>
  );
};

export default HotelInfoTable;
