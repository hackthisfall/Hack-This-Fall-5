"use client";

import { Flex, Image } from "@chakra-ui/react";
import HeroSection from "../components/Virtual/HeroSection";

const Page = () => {
  return (
    <>
      <a
        id="mlh-trust-badge"
        style={{
          display: "block",
          maxWidth: "100px",
          minWidth: "60px",
          position: "fixed",
          right: "50px",
          top: 0,
          width: "10%",
          zIndex: 10000,
        }}
        href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black"
        target="_blank"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-black.svg"
          alt="Major League Hacking 2025 Hackathon Season"
          className="w-full"
          style={{ width: "100%" }}
        ></Image>
      </a>
      <Flex background="#F9F5F2" w="100vw" h="100dvh">
        <HeroSection />
      </Flex>
    </>
  );
};

export default Page;
