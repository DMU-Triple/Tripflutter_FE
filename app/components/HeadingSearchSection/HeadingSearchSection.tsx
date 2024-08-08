import React from 'react';
import Link from 'next/link';

interface HeadingSearchSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const HeadingSearchSection: React.FC<HeadingSearchSectionProps> = ({ title, description, buttonText, buttonLink }) => (
  <div className="row justify-content-center">
    <div className="col-md-9 text-center">
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="mb-0">
        <Link href={buttonLink} className="btn btn-white px-4 py-3">
          {buttonText}
        </Link>
      </p>
    </div>
  </div>
);

export default HeadingSearchSection;
