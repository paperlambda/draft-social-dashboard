import Text from "@/components/Text";
import React from "react";
import styled from "styled-components";
import {postSetSelectedAction} from "@/store/actions/postActions";
import {connect} from "react-redux";
import {history} from "@/store";

const PostCard = (props) => {
  const { post } = props

  const _didSelect = () => {
    props.postSetSelectedAction(post)
    history.push(`/posts/${post.id}`)
  }

  return (
    <Root>
      <Text onClick={() => _didSelect()} variant="title-sm" bold>{post.title}</Text>
      <Text color="#888888">{post.body}</Text>
      <Text variant="caption">created by {post.userId}</Text>
    </Root>
  )
}

const Root = styled('div')`
  padding: 15px 20px;
  
  > div{
    margin-bottom: 8px;
    &:first-child{
      cursor: pointer;
      text-transform: capitalize;
      text-decoration: underline;
    }
  }
  
  & + div {
    border-top: 1px solid #f8f8f8;
  }
`

export default connect(null, {
  postSetSelectedAction
})(PostCard)


