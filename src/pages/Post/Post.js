import React from 'react'
import {connect} from "react-redux";
import postService from "@/services/postService";
import Text from "@/components/Text";
import Card from "@/components/Card";
import {postSetSelectedAction} from "@/store/actions/postActions";
import styled from "styled-components";
import Container from "@/components/Container";
import Main from "@/components/Main";
import {history} from "@/store";
import Button from "@/components/Button";
import Comments from "./containers/Comments";

const Post = (props) => {
  const { post, match } = props
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    if(post) {
      setLoading(false)
    } else {
      const { id } = match.params
      _getPost(id)
    }
  }, [])

  const _getPost = (id) => {
    return postService.getPost(id).subscribe({
      next: (res) => {
        props.postSetSelectedAction(res)
        setLoading(false)
      },
      error: (err) => {
        console.error(err)
        setLoading(false)
      }
    })
  }

  const _willGoBack = () => {
    history.goBack()
  }

  return (
    <Main>
      <Container>
        <Button onClick={() => _willGoBack()} color="secondary">Back</Button>
        <Root>
          {
            isLoading && <Text>Loading...</Text>
          }
          {
            !isLoading && (
              <>
                <div>
                  <Text variant="title" bold>{post.title}</Text>
                  <Text>{post.body}</Text>
                </div>
                <Comments/>
              </>
            )
          }
        </Root>
      </Container>
    </Main>
  )
}

const Root = styled(Card)`
  padding: 15px 20px;
  margin-top: 20px;
  > div:first-child {
    margin-bottom: 30px;
  }
`

const mapStateToProps = (state) => ({
  post: state.post.selectedPost
})

export default connect(mapStateToProps, {
  postSetSelectedAction
})(Post)
