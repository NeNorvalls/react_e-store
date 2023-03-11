import React from 'react';
import styled from 'styled-components';

const HeroCard = styled.div`
  min-height: 100vh;
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  text-align: center;
  color: #fff;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 24px;
`;

const Home = () => {
  return (
    <div>
      <HeroCard>
        <HeroImage src="./public/assets/bg.jpg" alt="Background" />
        <HeroOverlay>
          <HeroContent>
            <HeroTitle>Welcome to our store</HeroTitle>
            <HeroText>Discover our latest collection</HeroText>
          </HeroContent>
        </HeroOverlay>
      </HeroCard>
    </div>
  );
};

export default Home;
