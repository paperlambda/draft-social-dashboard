import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled('button')`
  ${props => {
  switch (props.color) {
    case 'primary':
      return css`
          background: ${props.theme.color.blue};
          color: white;
          border: 1px solid transparent;
        `
    case 'secondary':
      return css`
          background: #ffffff;
          color: ${props.theme.color.blue};
          border: 1px solid #ffffff;
        `
    case 'inverted':
      return css`
          background: transparent;
          color: ${props.theme.color.blue};
          border: 1px solid ${props.theme.color.blue};
          
          &:hover,&:focus{
            background: ${props.theme.color.blue};
            color: white;
            border: 1px solid transparent;
          }
        `
  }
}}
  
  width: ${props => (props.block ? '100%' : 'auto')}
  
  font-family: 'Noto Sans', sans-serif;
  height: ${props => props.theme.height.control};
  padding: 0px 15px;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 8px;
  
  cursor: pointer;
  pointer-events: auto;
  box-sizing: border-box;
  outline: none;
  
  &:disabled{
    background: #cccccc;
    color: #888888;
    cursor: not-allowed;
    
  }
`

Button.propTypes = {
  block: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', 'inverted'])
}

Button.defaultProps = {
  color: 'primary',
  block: false
}

export default Button
