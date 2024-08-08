import React from 'react';
import ReviewItem from './ReviewItem';

const Review: React.FC = () => {
    const reviews = [
        { name: '김여행', date: '2024.07.12 2:21pm', comment: '그리스 맛집 추천해주세요.', imageUrl: '/images/person_1.jpg' },
        { name: '김여행', date: '2024.07.12 2:21pm', comment: '그리스 여행 일정 추천해주세요.', imageUrl: '/images/person_1.jpg' },
    ];

  return (
    <div>
        <h3 className="mb-5">리뷰</h3>
        <ul className="comment-list">
            {reviews.map((review, index) => (
            <ReviewItem key={index} name={review.name} date={review.date} comment={review.comment}
                imageUrl={review.imageUrl} />
            ))}
        </ul>
    </div>
  );
};

export default Review;
