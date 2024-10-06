import React from 'react';
import HeadingSection from '../HeadingSection/HeadingSection';
import BlogEntry from './BlogEntry';

interface BlogEntry {
  id: number;
  imageUrl: string;
  date: { day: number; year: number; month: string };
  title: string;
  excerpt: string;
  author: string;
  commentsCount: number;
}

const BlogSection: React.FC = () => {
  const blogEntries: BlogEntry[] = [
    {
      id: 1,
      imageUrl: 'images/image_1.jpg',
      date: { day: 12, year: 2019, month: 'april' },
      title: '도쿄 자유여행 3박 4일 여행 경비 및 코스 추천',
      excerpt: '안보면 손해!! 일본 가기 전에 꼭 알아야 할 10가지. 도쿄 자유여행 3박 4일 여행 경비 및 코스 추천',
      author: '김여행',
      commentsCount: 3,
    },
    {
      id: 2,
      imageUrl: 'images/image_2.jpg',
      date: { day: 12, year: 2019, month: 'april' },
      title: '도쿄 자유여행 3박 4일 여행 경비 및 코스 추천',
      excerpt: '안보면 손해!! 일본 가기 전에 꼭 알아야 할 10가지. 도쿄 자유여행 3박 4일 여행 경비 및 코스 추천',
      author: '김여행',
      commentsCount: 3,
    },
    {
      id: 3,
      imageUrl: 'images/image_3.jpg',
      date: { day: 12, year: 2019, month: 'april' },
      title: '도쿄 자유여행 3박 4일 여행 경비 및 코스 추천',
      excerpt: '안보면 손해!! 일본 가기 전에 꼭 알아야 할 10가지. 도쿄 자유여행 3박 4일 여행 경비 및 코스 추천',
      author: '김여행',
      commentsCount: 3,
    },
  ];

  return (
    <section className="ftco-section bg-light" id="blog-section">
      <div className="container">
        <HeadingSection 
          subheading="추천 블로그"
          heading="지금 가장 핫한 여행 블로그"
          description="트리플러터가 지금 가장 한핫 인기 블로그를 추천해드릴께요"
        />
        <div className="row d-flex">
          {blogEntries.map((entry) => (
            <BlogEntry
              key={entry.id}
              imageUrl={entry.imageUrl}
              date={entry.date}
              title={entry.title}
              excerpt={entry.excerpt}
              author={entry.author}
              commentsCount={entry.commentsCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
