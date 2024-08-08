import React from 'react';
import HeadingSection from '../HeadingSection/HeadingSection';
import RecommendationCard from './RecommendationCard';

const hotels = [
    {
      image: 'images/hotel-1.jpg',
      oldPrice: '30만원',
      price: '10만원',
      nights: '3박',
      name: '그리스 럭셔리 호텔',
      stars: 5,
      ratings: 120,
    },
    {
      image: 'images/hotel-2.jpg',
      price: '20만원',
      nights: '3박',
      name: '그리스 럭셔리 호텔',
      stars: 5,
      ratings: 120,
    },
    {
      image: 'images/hotel-3.jpg',
      price: '30만원',
      nights: '3박',
      name: '그리스 럭셔리 호텔',
      stars: 5,
      ratings: 120,
    },
];

const HotelRecommendations: React.FC = () => (
  <section className="ftco-section">
    <div className="container">
      <HeadingSection 
        subheading="추천 호텔"
        heading="가장 가까운 호텔 찾기"
        description="트리플러터가 여행 동선을 고려하여 호텔을 추천해드릴께요"
      />
      <div className="row">
        {hotels.map((hotel, index) => (
          <RecommendationCard 
            key={index}
            image={hotel.image}
            oldPrice={hotel.oldPrice}
            newPrice={`${hotel.price} / 1박`}
            durationOrNights={hotel.nights}
            name={hotel.name}
            stars={hotel.stars}
            reviewsOrRatings={hotel.ratings}
            link="/hotel-detail"
            imageAlt="Hotel Image"
          />
        ))}
      </div>
    </div>
  </section>
);

export default HotelRecommendations;
