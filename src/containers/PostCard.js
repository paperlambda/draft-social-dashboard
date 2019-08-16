import React from 'react'
import styled from 'styled-components'
import { postSetSelectedAction } from '@/store/actions/postActions'
import { connect } from 'react-redux'
import { history } from '@/store'
import PropTypes from 'prop-types'
import { Text } from '@/components'

const PostCard = props => {
  const { post } = props

  const _didSelect = () => {
    props.postSetSelectedAction(post)
    history.push(`/posts/${post.id}`)
  }

  return (
    <Root>
      <Text onClick={() => _didSelect()} variant="title-sm" bold>
        {post.title}
      </Text>
      <Text color="#888888">{post.body}</Text>
    </Root>
  )
}

const Root = styled('div')`
  padding: 15px 20px;

  > div {
    margin-bottom: 8px;
    &:first-child {
      cursor: pointer;
      text-transform: capitalize;
      text-decoration: underline;
    }
  }

  & + div {
    border-top: 1px solid #f8f8f8;
  }
`

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  postSetSelectedAction: PropTypes.func.isRequired
}

export default connect(
  null,
  {
    postSetSelectedAction
  }
)(PostCard)
