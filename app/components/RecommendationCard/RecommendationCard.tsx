import React from 'react';
import Link from 'next/link';

interface RecommendationCardProps {
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

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  image,
  oldPrice,
  newPrice,
  durationOrNights,
  name,
  stars,
  reviewsOrRatings,
  link,
  imageAlt,
}) => (
  <div className="col-md-6 col-lg-4 ftco-animate">
    <div className="project">
      <div className="img">
        {oldPrice && (
          <div className="vr">
            <span>특가</span>
          </div>
        )}
        <Link href={link}>
          <img src={image} className="img-fluid" alt={imageAlt} />
        </Link>
      </div>
      <div className="text">
        {oldPrice && (
          <h4 className="price">
            <span className="old-price mr-2">{oldPrice}</span>
            {newPrice}
          </h4>
        )}
        {!oldPrice && <h4 className="price">{newPrice}</h4>}
        <span>{durationOrNights}</span>
        <h3>
          <Link href={link}>{name}</Link>
        </h3>
        <div className="star d-flex clearfix">
          <div className="mr-auto float-left">
            {[...Array(stars)].map((_, index) => (
              <span key={index} className="ion-ios-star" />
            ))}
          </div>
          <div className="float-right">
            <span className="rate">
              <Link href="#">({reviewsOrRatings})</Link>
            </span>
          </div>
        </div>
      </div>
      <Link href={image} className="icon image-popup d-flex justify-content-center align-items-center">
        <span className="icon-expand" />
      </Link>
    </div>
  </div>
);

export default RecommendationCard;
