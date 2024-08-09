"use client";

import { Flex, Image } from "@chakra-ui/react";
import HeroSection from "../components/Virtual/HeroSection";
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import HumansSection from '../components/Virtual/HumansSection';
import TracksSection from '../components/Virtual/TracksSection';
import PreviousPartnersSection from '../components/Virtual/PreviousPartnersSection';
import FaqSection from '../components/Virtual/FaqSection';
import Header from '../components/Header';

const Page = () => {
  const [currentSection, setCurrentSection] = useState('HOME'); 

  return (
    <>
      <a
        id="mlh-trust-badge"
        style={{
          display: 'block',
          maxWidth: '100px',
          minWidth: '60px',
          position: 'fixed',
          right: '50px',
          top: 0,
          width: '10%',
          zIndex: 10000,
        }}
        href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black"
        target="_blank"
      >
        <Image
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-black.svg"
          alt="Major League Hacking 2025 Hackathon Season"
          className="w-full"
          style={{ width: '100%' }}
        ></Image>
      </a>
      <Flex
        background="#F9F5F2"
        w="100vw"
        overflowX="hidden"
        minH="100dvh"
        flexDir="column"
        gap="7rem"
        pb="8rem"
      >
        <Header
          setCurrentSection={setCurrentSection}
          currentSection={currentSection}
        />
        <InView
          style={{ width: '100%' }}
          id="HOME"
          as="div"
          threshold={0.7}
          onChange={(inView, entry) => inView && setCurrentSection('HOME')}
        >
          <HeroSection />
        </InView>
        <InView
          style={{ width: '100%' }}
          id="TRACKS"
          as="div"
          threshold={0.7}
          onChange={(inView, entry) => inView && setCurrentSection('TRACKS')}
        >
          <TracksSection />
        </InView>
        <InView
          style={{ width: '100%' }}
          id="HUMANS"
          as="div"
          threshold={0.7}
          onChange={(inView, entry) => inView && setCurrentSection('HUMANS')}
        >
          <HumansSection />
        </InView>
        <InView
          style={{ width: '100%' }}
          id="PARTNERS"
          as="div"
          threshold={0.7}
          onChange={(inView, entry) => inView && setCurrentSection('PARTNERS')}
        >
          <PreviousPartnersSection />
        </InView>
        <InView
          style={{ width: '100%' }}
          id="FAQ"
          as="div"
          threshold={0.7}
          onChange={(inView, entry) => inView && setCurrentSection('FAQ')}
        >
          <FaqSection />
        </InView>
      </Flex>
    </>
  );
};

export default Page;