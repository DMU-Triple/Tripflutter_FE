import React from 'react';

interface DayDescriptionItemProps {
  day: number;
  description: string;
  details: string[];
  imageUrl?: string;
}

const DayDescriptionItem: React.FC<DayDescriptionItemProps> = ({ day, description, details, imageUrl }) => {
  return (
    <div className="col-md-12 tour-wrap">
      <div className="day-wrap">
        <h3 className="pl-5">Day {day}</h3>
        <p>{description}</p>
        <ul>
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        {imageUrl && <img src={imageUrl} className="img-fluid" alt="Day Image" />}
      </div>
    </div>
  );
};

export default DayDescriptionItem;
