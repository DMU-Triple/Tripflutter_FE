import React from 'react';
import Banner from '../components/Banner/Banner';
import SearchSection from "../components/SearchSection/SearchSection";
import RecommendationCard from '../components/RecommendationCard/RecommendationCard';
import HotelInfoTable from '../components/InfoTable/HotelInfoTable';
import Review from '../components/Review/Review';

interface HotelDetailProps {
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

const HotelDetailPage: React.FC<HotelDetailProps> = ({ image, oldPrice, newPrice, durationOrNights, name, stars, reviewsOrRatings, link, imageAlt }) => {
  const breadcrumb = [
    { name: 'Home', link: '/' },
    { name: '호텔', link: '/hotel' },
    { name: '호텔 상세', link: '/hotel-detail' },
  ];

  return (
    <div>
      <Banner
        backgroundImage="/images/destination-single.jpg"
        title="호텔 상세"
        breadcrumb={breadcrumb}
      />

      <SearchSection />

      <RecommendationCard 
        image="/images/hotel-1.jpg"
        oldPrice="50만원"
        newPrice="30만원"
        durationOrNights="4박 5일"
        name="그리스"
        stars={5}
        reviewsOrRatings={123}
        link="/destination-detail"
        imageAlt="Destination Image"
      />

      <HotelInfoTable />

      <Review />
    </div>
  );
};

export default HotelDetailPage;
