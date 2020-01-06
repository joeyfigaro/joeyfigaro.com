import React from 'react'
import { typography, space } from 'styled-system'

import JSBadge from '../../../images/badges/JS.svg'
import UXBadge from '../../../images/badges/UX.svg'
import UIBadge from '../../../images/badges/UI.svg'
import CIBadge from '../../../images/badges/CI.svg'
import CDBadge from '../../../images/badges/CD.svg'

import styled from '../../../theme'
import { Row, Column } from '../../Flex'
import Divider from '../../Divider'

import Section from './Section'

const ColumnHeader = styled.h2(typography, space, {
  textTransform: 'uppercase',
  fontFamily: 'Cartograph CF',
  marginBottom: 32
})

const ListItem = styled.p(typography, space, {
  marginBottom: 16,
  color: '#ffffff'
})
const Link = ListItem.withComponent('a')

const Experience = () => (
  <Section>
    <Divider>Experience</Divider>
    <Row
      justify="space-between"
      align="flex-start"
      width={[3 / 4, 3 / 4, 1008]}
      flexDirection={['column', 'row']}
    >
      <Column justify="flex-start" align="flex-start" mb={[32, 0]}>
        <ColumnHeader fontSize={[13, 14]}>Proficiencies</ColumnHeader>
        <Row pb={16}>
          <UXBadge style={{ marginRight: 16 }} />
          <UIBadge style={{ marginRight: 16 }} />
          <JSBadge />
        </Row>
        <Row justify="flex-start">
          <CIBadge style={{ marginRight: 16 }} />
          <CDBadge style={{ marginRight: 16 }} />
        </Row>
      </Column>
      <Column align="flex-start" width={[1, '35%']} mb={[32, 0]}>
        <ColumnHeader fontSize={[13, 14]}>Libraries & Tech</ColumnHeader>
        <Row align="flex-start" flexDirection={['column', 'row']}>
          <Column align="flex-start">
            <ListItem>React</ListItem>
            <ListItem>React Native</ListItem>
            <ListItem>GraphQL</ListItem>
            <ListItem>Node</ListItem>
            <ListItem>Postgres</ListItem>
            <ListItem>Mongo</ListItem>
            <ListItem>Knex/Mongoose</ListItem>
            <ListItem>Express</ListItem>
            <ListItem>Fastify</ListItem>
            <ListItem>Gatsby</ListItem>
          </Column>
          <Column align="flex-start" mb={[32, 0]}>
            <ListItem>Redux</ListItem>
            <ListItem>Overmind</ListItem>
            <ListItem>Redux Saga</ListItem>
            <ListItem>Redux Thunk</ListItem>
            <ListItem>Redis</ListItem>
            <ListItem>Jest</ListItem>
            <ListItem>React Testing Library</ListItem>
            <ListItem>Tape</ListItem>
          </Column>
        </Row>
      </Column>
      <Column align="flex-start" mb={[32, 0]}>
        <ColumnHeader fontSize={[13, 14]}>Platforms</ColumnHeader>
        <Row>
          <Column align="flex-start">
            <ListItem>AWS</ListItem>
            <ListItem>Digital Ocean</ListItem>
          </Column>
        </Row>
      </Column>
      <Column align="flex-start" mb={[32, 0]}>
        <ColumnHeader fontSize={[13, 14]}>Previous Companies</ColumnHeader>
        <Row>
          <Column align="flex-start">
            <Link href="https://measure.com">Measure</Link>
            <Link href="https://painless1099.com">Painless1099</Link>
            <Link href="https://mobelux.com">Mobelux</Link>
            <Link href="https://macrumors.com">MacRumors</Link>
            <Link href="https://capitalone.com">Capital One</Link>
          </Column>
        </Row>
      </Column>
    </Row>
  </Section>
)

export default Experience
