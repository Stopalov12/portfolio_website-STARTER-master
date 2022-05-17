import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>Welcome to <br/>My Personal Portfolio</SectionTitle>
 <SectionText>I'm an enthusiastic developer ready to embrace challenges and build awesome applications.</SectionText>
 <Button onClick={()=>window.location='https://www.linkedin.com/in/stoyan-topalov-326aa4218/'}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;