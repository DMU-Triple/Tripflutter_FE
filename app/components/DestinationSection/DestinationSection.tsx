// components/DestinationSection.tsx
import React from 'react';
import Link from 'next/link';
import HeadingSearchSection from '../HeadingSearchSection/HeadingSearchSection';

const DestinationSection: React.FC = () => {
  return (
    <section className="ftco-intro img" id="destination-section" style={{ backgroundImage: "url(/images/bg_3.jpg)", backgroundSize: '2000px', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="overlay" />
      <div className="container">
        <HeadingSearchSection 
          title="여행지 검색"
          description="떠나고 싶은 여행지를 선택하세요. 여행 준비부터 계획까지 트리플러터가 도와드릴께요!"
          buttonText="여행지 검색"
          buttonLink="#"
        />
      </div>
    </section>
  );
};

export default DestinationSection;
