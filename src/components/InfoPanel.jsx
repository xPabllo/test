import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-top: 20px;
  max-width: 400px;
`;

const locationInfo = {
  'Manhattan': 'The most densely populated borough, known for its iconic skyline and cultural attractions.',
  'Brooklyn': 'The most populous borough, famous for its distinct culture, art scene, and diverse neighborhoods.',
  'Queens': 'The largest borough by area, known for its cultural diversity and residential neighborhoods.',
  'Bronx': 'The northernmost borough, home to Yankee Stadium and the Bronx Zoo.',
  'Staten Island': 'The least populated borough, connected to Manhattan by the Staten Island Ferry.',
  'Central Park': 'An 843-acre urban park in Manhattan, visited by 42 million people annually.',
  'Statue of Liberty': 'A symbol of freedom and democracy, located on Liberty Island in New York Harbor.',
  'Times Square': 'Major commercial intersection and tourist destination in Midtown Manhattan.',
  'Brooklyn Bridge': 'A historic bridge connecting Manhattan and Brooklyn across the East River.',
};

const InfoPanel = ({ selected }) => {
  return (
    <Panel>
      <h2>{selected || 'Select a location'}</h2>
      <p>{selected ? locationInfo[selected] : 'Click on any borough or landmark to learn more.'}</p>
    </Panel>
  );
};

export default InfoPanel;
