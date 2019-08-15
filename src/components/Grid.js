import styled from "styled-components";

const Grid = styled('div')`
 display: grid;
 grid-template-columns: ${props => props.template || 'repeat(auto-fill, minmax(200px, 1fr))'} ;
 grid-gap: ${props => props.gap || '1rem'} ;
`

export default Grid
