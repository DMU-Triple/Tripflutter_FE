import React from 'react';
import InfoTable from './InfoTable';

const BlogInfoTable: React.FC = () => {
  const blogInfo = [
    { header: "제목", content: "그리스 4박 5일 여행 일정 및 경비" },
    { header: "작성자", content: "김동양" },
    { header: "작성 날짜", content: "2024-08-07" },
    { header: "카테고리", content: "여행" },
    { header: "태그", content: ["유럽", "여행 팁", "아테네"] },
    {
      header: "블로그 내용",
      content: [
        "이번 여행에서는 그리스의 아름다움을 만끽할 수 있었습니다.",
        "아테네의 역사적인 유적지와 산토리니의 환상적인 일몰을 경험했습니다.",
        "자세한 여행 경로와 팁은 다음과 같습니다: ...",
      ],
    },
  ];

  return (
    <div className="container">
      <InfoTable data={blogInfo} />
    </div>
  );
};

export default BlogInfoTable;
