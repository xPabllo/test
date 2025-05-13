import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 600px;
  height: 600px;
  position: relative;
`;

const SVGMap = styled.svg`
  width: 100%;
  height: 100%;
`;

const Borough = styled.path`
  fill: ${props => props.$isSelected ? '#4a90e2' : '#78909c'};
  stroke: white;
  stroke-width: 2;
  transition: fill 0.3s ease;

  &:hover {
    fill: #4a90e2;
    cursor: pointer;
  }
`;

const LocationMarker = styled.circle`
  fill: #e53935;
  stroke: white;
  stroke-width: 1;
  cursor: pointer;
  transition: r 0.3s ease;

  &:hover {
    r: 8;
  }
`;

const locations = [
  { name: "Central Park", x: 300, y: 250 },
  { name: "Statue of Liberty", x: 270, y: 400 },
  { name: "Times Square", x: 290, y: 270 },
  { name: "Brooklyn Bridge", x: 320, y: 350 },
];

const NYMap = ({ onSelect }) => {
  return (
    <MapContainer>
      <SVGMap viewBox="0 0 600 600">
        {/* Manhattan */}
        <Borough
          d="M280,200 L310,180 L320,300 L290,400 L270,380 Z"
          onClick={() => onSelect('Manhattan')}
        />
        {/* Brooklyn */}
        <Borough
          d="M320,300 L400,320 L420,400 L300,420 L290,400 Z"
          onClick={() => onSelect('Brooklyn')}
        />
        {/* Queens */}
        <Borough
          d="M320,200 L450,220 L470,350 L400,320 L320,300 Z"
          onClick={() => onSelect('Queens')}
        />
        {/* Bronx */}
        <Borough
          d="M280,150 L400,170 L450,220 L320,200 L310,180 Z"
          onClick={() => onSelect('Bronx')}
        />
        {/* Staten Island */}
        <Borough
          d="M200,400 L270,380 L290,400 L300,420 L250,450 Z"
          onClick={() => onSelect('Staten Island')}
        />

        {/* Location Markers */}
        {locations.map((loc, index) => (
          <LocationMarker
            key={index}
            cx={loc.x}
            cy={loc.y}
            r={6}
            onClick={() => onSelect(loc.name)}
          />
        ))}
      </SVGMap>
    </MapContainer>
  );
};

export default NYMap;
