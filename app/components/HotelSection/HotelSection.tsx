// components/HotelSection.js
import React from 'react';
import HeadingSearchSection from '../HeadingSearchSection/HeadingSearchSection';

const HotelSection: React.FC = () => (
  <section className="ftco-intro img" id="hotel-section" style={{ backgroundImage: "url(/images/bg_4.jpg)", backgroundSize: '2000px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
    <div className="container">
      <HeadingSearchSection 
        title="전세계 호텔 특가"
        description="트리플러터가 전세계 최저가 호텔을 추천해드릴께요"
        buttonText="호텔 검색"
        buttonLink="#"
      />
    </div>
  </section>
);

export default HotelSection;
