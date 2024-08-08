import React from 'react';

interface HeadingSectionProps {
  subheading: string;
  heading: string;
  description: string;
}

const HeadingSection: React.FC<HeadingSectionProps> = ({ subheading, heading, description }) => (
  <div className="row justify-content-center pb-5">
    <div className="col-md-12 heading-section text-center ftco-animate">
      <span className="subheading">{subheading}</span>
      <h2 className="mb-4">{heading}</h2>
      <p>{description}</p>
    </div>
  </div>
);

export default HeadingSection;
