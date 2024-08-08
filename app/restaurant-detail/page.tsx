import React from 'react';
import Banner from '../components/Banner/Banner';
import SearchSection from "../components/SearchSection/SearchSection";
import RecommendationCard from '../components/RecommendationCard/RecommendationCard';
import RestaurantInfoTable from '../components/InfoTable/RestaurantInfoTable';
import Review from '../components/Review/Review';

interface RestaurantDetailProps {
  image: string;
  oldPrice?: string;
  newPrice: string;
  durationOrNights: string;
  name: string;
  stars: number;
  reviewsOrRatings: number;
  link: string;
  imageAlt: string;
}

const RestaurantDetailPage: React.FC<RestaurantDetailProps> = ({ image, oldPrice, newPrice, durationOrNights, name, stars, reviewsOrRatings, link, imageAlt }) => {
  const breadcrumb = [
    { name: 'Home', link: '/' },
    { name: '맛집', link: '/restaurant' },
    { name: '맛집 상세', link: '/restaurant-detail' },
  ];

  return (
    <div>
      <Banner
        backgroundImage="/images/destination-single.jpg"
        title="맛집 상세"
        breadcrumb={breadcrumb}
      />

      <SearchSection />

      <RecommendationCard 
        image="/images/resto-1.jpg"
        oldPrice="50만원"
        newPrice="30만원"
        durationOrNights="4박 5일"
        name="그리스"
        stars={5}
        reviewsOrRatings={123}
        link="/destination-detail"
        imageAlt="Destination Image"
      />

      <RestaurantInfoTable />

      <Review />
    </div>
  );
};

export default RestaurantDetailPage;
