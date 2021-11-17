import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { merge, bounce, tada } from "react-animations";
import { Card } from "antd";

// style
import "../styles/AnimatedCard.css";

const { Meta } = Card;

// merged animation
const bounceTada = merge(bounce, tada);

const animationType = keyframes`${bounceTada}`;
const animationDuration = `2s`;

const AnimatedDiv = styled.div`
  animation: ${animationDuration} ${animationType};
`;

export default function AnimatedCard() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => setIsHover(true);
  const handleMouseOut = () => setIsHover(false);

  return (
    <div
      className="card-container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHover ? (
        <AnimatedDiv>
          <Card
            hoverable
            className="card-240-w"
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </AnimatedDiv>
      ) : (
        <Card
          hoverable
          className="card-240-w"
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      )}
    </div>
  );
}
