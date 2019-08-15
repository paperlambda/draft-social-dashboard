import styled from "styled-components";

const Flex = styled('div')`
  display: flex;
  justify-content: ${props => props.jc || 'center'};
  align-items: ${props => props.ai || 'center'};
`

export default Flex
