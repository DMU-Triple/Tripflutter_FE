import React from 'react';
import Banner from '../components/Banner/Banner';
import SearchSection from "../components/SearchSection/SearchSection";
import RecommendationCard from '../components/RecommendationCard/RecommendationCard';
import BlogInfoTable from '../components/InfoTable/BlogInfoTable';
import Review from '../components/Review/Review';

interface BlogDetailProps {
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

const BlogDetailPage: React.FC<BlogDetailProps> = ({ image, oldPrice, newPrice, durationOrNights, name, stars, reviewsOrRatings, link, imageAlt }) => {
  const breadcrumb = [
    { name: 'Home', link: '/' },
    { name: '블로그', link: '/blog' },
    { name: '블로그 상세', link: '/blog-detail' },
  ];

  return (
    <div>
      <Banner
        backgroundImage="/images/destination-single.jpg"
        title="블로그 상세"
        breadcrumb={breadcrumb}
      />

      <SearchSection />

      <RecommendationCard 
        image="/images/image_1.jpg"
        oldPrice="50만원"
        newPrice="30만원"
        durationOrNights="4박 5일"
        name="그리스"
        stars={5}
        reviewsOrRatings={123}
        link="/destination-detail"
        imageAlt="Destination Image"
      />

      <BlogInfoTable />

      <Review />
    </div>
  );
};

export default BlogDetailPage;
