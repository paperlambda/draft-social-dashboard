import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Modal = props => {
  const { show, children, willClose } = props

  if (!show) {
    return null
  }

  return (
    <Root onClick={() => willClose()}>
      <ModalBody>{children}</ModalBody>
    </Root>
  )
}

const Root = styled('div')`
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9;
`

const ModalBody = styled('div')`
  margin: 10vh auto;
  max-width: 500px;
  max-height: 90vh;
  overflow: auto;
`

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  willClose: PropTypes.func.isRequired
}

export default Modal
