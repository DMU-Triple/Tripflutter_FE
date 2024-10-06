import React from 'react';
import HeadingSection from '../HeadingSection/HeadingSection';
import RecommendationCard from '../RecommendationCard/RecommendationCard';

const destinations = [
  {
    image: 'images/destination-1.jpg',
    oldPrice: '왕복 50만원부터',
    newPrice: '왕복 30만원부터',
    duration: '15일 투어',
    name: '구르트넬렌, 스위스',
    stars: 5,
    reviews: 120,
  },
  {
    image: 'images/destination-2.jpg',
    oldPrice: '',
    newPrice: '왕복 40만원부터',
    duration: '15일 투어',
    name: '구르트넬렌, 스위스',
    stars: 5,
    reviews: 120,
  },
  {
    image: 'images/destination-3.jpg',
    oldPrice: '',
    newPrice: '왕복 50만원부터',
    duration: '15일 투어',
    name: '구르트넬렌, 스위스',
    stars: 5,
    reviews: 120,
  },
  {
    image: 'images/destination-4.jpg',
    oldPrice: '왕복 50만원부터',
    newPrice: '60만원',
    duration: '15일 투어',
    name: '구르트넬렌, 스위스',
    stars: 5,
    reviews: 120,
  },
  {
    image: 'images/destination-5.jpg',
    oldPrice: '',
    newPrice: '왕복 100만원부터',
    duration: '15일 투어',
    name: '구르트넬렌, 스위스',
    stars: 5,
    reviews: 120,
  },
  {
    image: 'images/destination-6.jpg',
    oldPrice: '',
    newPrice: '왕복 150만원부터',
    duration: '15일 투어',
    name: '구르트넬렌, 스위스',
    stars: 5,
    reviews: 120,
  },
];

const TravelDestinationsSection: React.FC = () => (
  <section className="ftco-section">
    <div className="container">
      <HeadingSection 
        subheading="추천 여행지"
        heading="지금 여행가기 좋은 나라"
        description="트리플러터가 인기있는 여행지를 추천해드릴께요"
      />
      <div className="row">
        {destinations.map((destination, index) => (
          <RecommendationCard 
            key={index}
            image={destination.image}
            oldPrice={destination.oldPrice}
            newPrice={destination.newPrice}
            durationOrNights={destination.duration}
            name={destination.name}
            stars={destination.stars}
            reviewsOrRatings={destination.reviews}
            link="/destination-detail"
            imageAlt="Destination Image"
          />
        ))}
      </div>
    </div>
  </section>
);

export default TravelDestinationsSection;
