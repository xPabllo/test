import React, { useState } from 'react';
import styled from 'styled-components';
import NYMap from './components/NYMap';
import InfoPanel from './components/InfoPanel';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <Container>
      <Title>New York City Interactive Map</Title>
      <NYMap onSelect={setSelected} />
      <InfoPanel selected={selected} />
    </Container>
  );
}

export default App;
