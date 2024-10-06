import React from 'react';
import Banner from '../components/Banner/Banner';
import RestaurantSection from "../components/RestaurantSection/RestaurantSection";

const RestaurantPage: React.FC = () => {
  const breadcrumb = [
    { name: 'Home', link: '/' },
    { name: '맛집', link: '/restaurant' },
  ];

  return (
    <div>
      <Banner
        backgroundImage="/images/destination-single.jpg"
        title="맛집 검색"
        breadcrumb={breadcrumb}
      />
      <RestaurantSection />
    </div>
  );
};

export default RestaurantPage;
