import React from 'react';
import Divide from 'components/Divide';
import Button from 'components/Button';
import { Container } from '@material-ui/core';

//////////////////////// COMPONENT ////////////////////////
export default function Home(props) {
  const actions = [
    {
      label: `Console Log`,
      handler: () => console.log(`Hello World`),
      hide: false,
    },
  ];

  return (
    <>
      <Container maxWidth='xl'>
        <Divide spacer tip='Hello World' actions={actions}>
          Hello World
        </Divide>
        <Button color='primary' variant='contained' size='large' onClick={() => console.log(`Hello World`)}>
          My Button
        </Button>
      </Container>
    </>
  );
}
