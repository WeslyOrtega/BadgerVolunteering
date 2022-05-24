import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useRanger } from "react-ranger";
import ReactDOM from "react-dom";

export const Track = styled("div")`
  display: inline-block;
  height: 32px;
  width: 291px;
  margin: 0 5%;
`;

export const Segment = styled("div")`
  background: ${(props) =>
    props.index === 0
      ? "#8CD4C4"
      : props.index === 1
      ? "rgba(140,212,196,.33)"
      : props.index === 2};
  border: "solid 1px #377968";
  height: 100%;
`;

export const Handle = styled("div")`
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 10%;
  font-size: 0.8rem;
  white-space: nowrap;
  color: #f2bc41;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  opacity: ${(props) => (props.active ? "100%" : "0%")};
  transform: ${(props) =>
    props.active ? "translateY(-150%) scale(1.3)" : "translateY(0) scale(0.9)"};
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

function Slider({ sendResponse, home }) {
  const [values, setValues] = useState([50]);
  const [response] = useState([
    "not a match",
    "not really",
    "maybe",
    "now we're talking!",
    "nailed it!",
  ]);

  const onClick = (e) => {
    if (sendResponse) sendResponse(e);
  };

  const { getTrackProps, segments, handles } = useRanger({
    min: 0,
    max: 100,
    stepSize: 25,
    values,
    onChange: setValues,
  });

  return (
    <>
      <Track {...getTrackProps()}>
        {segments.map(({ getSegmentProps }, i) => (
          <Segment {...getSegmentProps()} index={i} />
        ))}
        {handles.map(({ value, active, getHandleProps }) => (
          <button
            {...getHandleProps({
              style: {
                width: "32px",
                height: "32px",
                outline: "none",
                borderRadius: "5%",
                background:
                  "linear-gradient(to bottom, #FFCA53 45%, #F2BC41 55%)",
                border: "solid 1px #377968",
              },
            })}
            onClick={onClick(value)}
          >
            {!home && <Handle active={active}>{response[value / 25]}</Handle>}
          </button>
        ))}
      </Track>
      
    </ >
  );
}



export default Slider;
