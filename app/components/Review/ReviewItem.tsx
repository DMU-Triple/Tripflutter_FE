import React from 'react';

interface ReviewItemProps {
  name: string;
  date: string;
  comment: string;
  imageUrl: string;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ name, date, comment, imageUrl }) => {
  return (
    <li className="comment">
      <div className="vcard bio">
        <img src={imageUrl} alt={`${name}'s picture`} />
      </div>
      <div className="comment-body">
        <h3>{name}</h3>
        <div className="meta">{date}</div>
        <p>{comment}</p>
      </div>
    </li>
  );
};

export default ReviewItem;
