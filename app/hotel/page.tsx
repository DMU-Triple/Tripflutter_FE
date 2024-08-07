import React from 'react';
import Banner from '../components/Banner/Banner';
import SearchSection from "../components/SearchSection/SearchSection";
import HotelRecommendations from "../components/HotelRecommendations/HotelRecommendations";

const HotelPage: React.FC = () => {
  const breadcrumb = [
    { name: 'Home', link: '/' },
    { name: '호텔', link: '/hotel' },
  ];

  return (
    <div>
      <Banner
        backgroundImage="/images/destination-single.jpg"
        title="호텔 검색"
        breadcrumb={breadcrumb}
      />
      <SearchSection />
      <HotelRecommendations />
    </div>
  );
};

export default HotelPage;
