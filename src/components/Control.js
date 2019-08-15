import styled, {css} from "styled-components";

const baseControl = css`
  padding: 10px 15px;
  font-size: 0.9rem;
  border-radius: 8px;
  background: #ffffff;
  color: #000000;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: 1px solid #888888;
  margin-bottom: 8px;s
`

const Input = styled('input')`
  height: ${props => props.theme.height.control};
  ${baseControl}
`

const Textarea = styled('textarea')`
  min-height: 80px;
  ${baseControl}
`

export { Input, Textarea }
