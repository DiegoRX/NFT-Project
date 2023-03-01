import React from 'react';
import Link from 'next/link';
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react';

const Footer = () => (
  <Segment
    vertical
    as="footer"
    style={{
      padding: '4em 0em',
      borderTop: '1px solid #f2f2f2',
      backgroundColor: '',
      marginTop: '180px',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="Nosotros" />
            <List>
              <List.Item>
                <Link href="/about">Conoce más</Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Servicios" />
            <List>
              <List.Item>
                <Link href="/">Todos los productos</Link>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Hecho para</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="colophon">
        <p className="colophon-entry">
          Made by{' '}
          <a target="_blank" href="https://sharktechnology.dev/" title="Freepik">
            Shark Technology
          </a>
          {' from '}
          <a target="_blank" href="https://sharktechnology.dev/" title="Flaticon">
            https://sharktechnology.dev/
          </a>
        </p>
      </div>
    </Container>

    <style jsx>{`
      .colophon {
        text-align: center;
        margin-top: 3.2rem;
        font-size: 0.8rem;
      }
      .colophon-entry {
        color: grey;
        margin-bottom: 0;
      }
    `}</style>
  </Segment>
);

export default Footer;
