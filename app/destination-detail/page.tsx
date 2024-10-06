import React from 'react';
import Banner from '../components/Banner/Banner';
import SearchSection from "../components/SearchSection/SearchSection";
import RecommendationCard from '../components/RecommendationCard/RecommendationCard';
import DayDescription from '../components/DayDescription/DayDescription';
import InfoTable from '../components/InfoTable/InfoTable';
import Review from '../components/Review/Review';

interface DestinationDetailProps {
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

const DestinationDetailPage: React.FC<DestinationDetailProps> = ({ image, oldPrice, newPrice, durationOrNights, name, stars, reviewsOrRatings, link, imageAlt }) => {
  const breadcrumb = [
    { name: 'Home', link: '/' },
    { name: '여행지', link: '/destination' },
    { name: '여행지 상세', link: '/destination-detail' },
  ];

  return (
    <div>
      <Banner
        backgroundImage="/images/destination-single.jpg"
        title="여행지 상세"
        breadcrumb={breadcrumb}
      />

      <SearchSection />

      <RecommendationCard 
        image="/images/destination-single.jpg"
        oldPrice="200만원"
        newPrice="100만원"
        durationOrNights="4박 5일"
        name="그리스"
        stars={5}
        reviewsOrRatings={123}
        link="/destination-detail"
        imageAlt="Destination Image"
      />

      <DayDescription />

      <InfoTable data={tourInfo} /> 

      <Review />
    </div>
  );
};

export default DestinationDetailPage;
