import React from 'react';
import HeadingSection from '../HeadingSection/HeadingSection';
import RecommendationCard from '../RecommendationCard/RecommendationCard';

interface Restaurant {
  id: number;
  imageUrl: string;
  altText: string;
  price: string;
  location: string;
  name: string;
  rating: number;
  numberOfReviews: number;
  link: string;
}

export const restaurantsData: Restaurant[] = [
  {
    id: 1,
    imageUrl: '/images/resto-1.jpg',
    altText: 'Restaurant Image',
    price: '1만원',
    location: '베른, 스위스',
    name: '레스토 바',
    rating: 5,
    numberOfReviews: 120,
    link: '/restaurant-detail',
  },
  {
    id: 2,
    imageUrl: '/images/resto-2.jpg',
    altText: 'Restaurant Image',
    price: '2만원',
    location: '베른, 스위스',
    name: '레스토 바',
    rating: 5,
    numberOfReviews: 120,
    link: '/restaurant-detail',
  },
  {
    id: 3,
    imageUrl: '/images/resto-3.jpg',
    altText: 'Restaurant Image',
    price: '3만원',
    location: '베른, 스위스',
    name: '레스토 바',
    rating: 5,
    numberOfReviews: 120,
    link: '/restaurant-detail',
  },
];

const RestaurantSection: React.FC = () => (
  <section className="ftco-section" id="restaurant-section">
    <div className="container">
      <HeadingSection 
        subheading="추천 식당"
        heading="전세계 인기 맛집 추천"
        description="트리플러터가 구글 평점 4.0 이상 현지인 찐 맛집 추천해드릴께요"
      />
      <div className="row">
        {restaurantsData.map((restaurant) => (
          <RecommendationCard
            key={restaurant.id}
            image={restaurant.imageUrl}
            oldPrice={undefined}
            newPrice={`메뉴는 ${restaurant.price}부터`}
            durationOrNights={restaurant.location}
            name={restaurant.name}
            stars={restaurant.rating}
            reviewsOrRatings={restaurant.numberOfReviews}
            link={restaurant.link}
            imageAlt={restaurant.altText}
          />
        ))}
      </div>
    </div>
  </section>
);

export default RestaurantSection;
