import React from 'react';
import InfoTable from './InfoTable';

const DestinationInfoTable: React.FC = () => {
  const tourInfo = [
    { header: "출발", content: "인천국제공항" },
    { header: "출발 시간", content: "10:20 공항 집합, 10:50 출발" },
    { header: "도착 시간", content: "8:30 도착 예정" },
    {
      header: "포함 항목",
      content: [
        "항공", "공항세 및 유류할증료", "5성급 숙박 시설",
        "식비", "교통", "전문 가이드"
      ],
    },
    { header: "불포함 항목", content: ["입장료", "개인 경비"] },
  ];

  return (
      <div className="container">
          <InfoTable data={tourInfo} />
      </div>
  );
};

export default DestinationInfoTable;
