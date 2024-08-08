import React from 'react';

interface InfoTableProps {
  data: {
    header: string;
    content: string | string[];
  }[];
}

const InfoTable: React.FC<InfoTableProps> = ({ data }) => {
  return (
    <div className="col-md-12 info-wrap">
      <table className="table">
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.header}</th>
              <td>
                {Array.isArray(item.content) ? (
                  <ul>
                    {item.content.map((contentItem, i) => (
                      <li key={i}>{contentItem}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.content}</p>
                )}
              </td>
            </tr>
          ))}
          <tr>
            <th scope="row">지도</th>
            <td>
              {/* <div id="map"></div> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;
