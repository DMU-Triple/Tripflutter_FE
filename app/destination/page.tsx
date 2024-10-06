import React from 'react';
import Banner from '../components/Banner/Banner';
import SearchSection from "../components/SearchSection/SearchSection";
import TravelDestinationsSection from "../components/TravelDestinationsSection/TravelDestinationsSection";

const DestinationPage: React.FC = () => {
  const breadcrumb = [
    { name: 'Home', link: '/' },
    { name: '여행지', link: '/destination' },
  ];

  return (
    <div>
      <Banner
        backgroundImage="/images/destination-single.jpg"
        title="여행지 검색"
        breadcrumb={breadcrumb}
      />
      <SearchSection />
      <TravelDestinationsSection />
    </div>
  );
};

export default DestinationPage;
