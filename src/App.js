import "antd/dist/antd.css";
import styled from "styled-components";

// components
import AnimatedCard from "./components/AnimatedCard";

const PaddedHeader = styled.h2`
  padding: 5px 30px;
`;

export default function App() {
  return (
    <>
      <PaddedHeader>Hover over me!!</PaddedHeader>
      <AnimatedCard />
    </>
  );
}
