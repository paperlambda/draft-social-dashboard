import React from 'react'
import styled from "styled-components";
import Container from "@/components/Container";

const Navbar = () => {
  return (
    <Root>
      <Container>
        <h3>Draft</h3>
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

export default Navbar
