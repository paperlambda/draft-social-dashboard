import React from 'react'
import styled from 'styled-components'
import Container from '@/components/Container'
import Text from '@/components/Text'
import Flex from '@/components/Flex'

const Navbar = () => {
  return (
    <Root>
      <Container>
        <Nav jc="flex-start">
          <Text variant="title" color="#ffffff" bold>
            DRAFT
          </Text>
        </Nav>
      </Container>
    </Root>
  )
}

const Root = styled('div')`
  position: fixed;

  height: 55px;
  width: 100%;

  background: ${props => props.theme.color.blue};
  color: #ffffff;
  box-shadow: 0px 0px 3px 0px #cccccc;
`

const Nav = styled(Flex)`
  height: 100%;
  > div {
    margin: 0;
  }
`

export default Navbar
