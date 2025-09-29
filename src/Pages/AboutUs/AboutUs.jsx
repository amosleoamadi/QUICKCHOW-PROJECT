import React from "react";
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <AboutContainer>
      <Section>
        <Title>The QuickChow Story</Title>
        <Description>Every day starts with a great breakfast for busy professionals and workers. Mornings often mean skipping meals or settling for less.
        We create a food experience that starts with breakfast. From the fresh ingredients to quick delivery, we understand what you need.
        But QuickChow is more than a delivery app. It focuses on creating and managing your day. Whether you're a professional in the office or at home, QuickChow is there.</Description>
      </Section>
     
      <Section>
        <Title>Our Mission</Title>
        <Description>At QuickChow, our mission is to transform people's mornings.
        We are committed to bringing breakfast to busy professionals, workers, students, and early risers with a seamless food experience that's accessible and of great quality. From our carefully curated menus to lightning-fast delivery, every QuickChow order is designed to help you fuel up and sharpen your focus for the day.</Description>
      </Section>

      <Section>
        <Title>Vision</Title>
        <Description>At QuickChow, we envision a world where every morning begins with ease, nourishment, and delight—no more rushed breakfasts.
        To become the global leader in breakfast delivery, offering a seamless experience with just one tap, providing the energy and focus you need through our delivery network, quality breakfasts that customers love to shape the future of food.</Description>
      </Section>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  min-height: 100vh;
`;

const Section = styled.section`
  margin-bottom: 3rem;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  text-align: justify;
`;

export default AboutUs;
