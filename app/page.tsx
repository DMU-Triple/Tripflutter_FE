import React from 'react';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import SearchSection from "./components/SearchSection/SearchSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import DestinationSection from "./components/DestinationSection/DestinationSection";
import TravelDestinationsSection from "./components/TravelDestinationsSection/TravelDestinationsSection";
import HotelSection from "./components/HotelSection/HotelSection";
import HotelRecommendations from "./components/RecommendationCard/HotelRecommendations";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import RestaurantSection from "./components/RestaurantSection/RestaurantSection";
import BlogSection from "./components/BlogSection/BlogSection";

const Home: React.FC = () => {
  return (
    <div>
      <WelcomeMessage />
      <SearchSection />
      <ServicesSection />
      <DestinationSection />
      <TravelDestinationsSection />
      <HotelSection />
      <HotelRecommendations />
      <TestimonialSection />
      <RestaurantSection />
      <BlogSection />
    </div>
  );
};

export default Home;
