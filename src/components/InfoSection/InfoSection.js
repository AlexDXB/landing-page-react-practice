import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRaw,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtntWrap,
  Column2,
  ImgWrap,
  Img,
} from "./InfoSectionElements";
import { Button } from "../HeroSection/ButtonElement";
const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  dark,
  dark2,
  primary,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRaw imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtntWrap>
                  <Button
                    to="home"
                    smooth="+true"
                    duration={500}
                    spy="+true"
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtntWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRaw>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
