import React from 'react';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img
} from './styles';

import { Button } from '../ButtonElementsStyle';

interface IInfoSectionProps {
  homeObjOne: {
    id: string;
    lightBg: boolean;
    lightText: boolean;
    lightTextDesc: boolean;
    topLine: string;
    headLine: string;
    description: string;
    buttonLabel: string;
    imgStart: boolean;
    img: string;
    alt: string;
    dark: boolean;
    primary: boolean;
    darkText: boolean;
  };
}

const InfoSection: React.FC<IInfoSectionProps> = ({ homeObjOne }) => {
  return (
    <>
      <InfoContainer lightBg={homeObjOne.lightBg} id={homeObjOne.id}>
        <InfoWrapper>
          <InfoRow imgStar={homeObjOne.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{homeObjOne.topLine}</TopLine>
                <Heading lightText={homeObjOne.lightText} >{homeObjOne.headLine}</Heading>
                <Subtitle darkText={homeObjOne.darkText} >{homeObjOne.description}</Subtitle>
                <BtnWrap>
                  <Button to="home">{homeObjOne.buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={homeObjOne.img} alt={homeObjOne.alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection;