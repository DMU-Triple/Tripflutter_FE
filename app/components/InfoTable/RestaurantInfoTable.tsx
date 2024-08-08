import React from 'react';
import InfoTable from './InfoTable';

const RestaurantInfoTable: React.FC = () => {
    const restaurantInfo = [
        { header: "식당 이름", content: "노스티모" },
        { header: "주소", content: "서울 서초구 서초대로 125 2층 201호" },
        { header: "운영 시간", content: "10:00 - 22:00" },
        {
          header: "메뉴",
          content: [
            "호리아티키샐러드 - 19,000원", 
            "페타 치즈 플레이트 - 16,000원", 
            "그리스 올리브와 페타 - 12,000원"
          ],
        },
        { header: "가격대", content: "12,000원 - 50,000원" },
        {
          header: "제공 서비스",
          content: [
            "무료 와이파이", 
            "예약 가능", 
            "주차 가능"
          ],
        },
        {
          header: "특별 메뉴",
          content: [
            "매일 새로운 셰프 추천 메뉴", 
            "주말 특별 브런치"
          ],
        },
    ];

    return (
        <div className="container">
            <InfoTable data={restaurantInfo} />
        </div>
    );
};

export default RestaurantInfoTable;
