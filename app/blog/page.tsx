import React from 'react';
import Banner from '../components/Banner/Banner';
import BlogSection from "../components/BlogSection/BlogSection";

const BlogPage: React.FC = () => {
  const breadcrumb = [
    { name: 'Home', link: '/' },
    { name: '블로그', link: '/blog' },
  ];

  return (
    <div>
      <Banner
        backgroundImage="/images/destination-single.jpg"
        title="블로그 검색"
        breadcrumb={breadcrumb}
      />
      <BlogSection />
    </div>
  );
};

export default BlogPage;
