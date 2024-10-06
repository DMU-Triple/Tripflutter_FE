"use client";

import React from "react";
import styles from "./WelcomeMessage.module.css";
import HeadingSection from "../HeadingSection/HeadingSection";
import CreateTripButton from "../CreateTripButton/CreateTripButton";
import Link from "next/link";

const WelcomeMessage: React.FC = () => {
  return (
    <section>
      <HeadingSection 
        subheading="당신을 위한 여행 계획 사이트"
        heading="지금 바로 당신의 여행을 시작하세요"
        description="트리플러터에서 쉽고 빠르게 여행 계획을 세워보세요"
      />
      <Link href={"/trip-planning"}> <CreateTripButton />
        </Link>
    </section>
  );
};

export default WelcomeMessage;
