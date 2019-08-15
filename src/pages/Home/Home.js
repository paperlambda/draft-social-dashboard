import React from 'react'
import {usersGetAction} from '@/store/actions/userActions';
import {connect} from "react-redux";
import Posts from "./containers/Posts";
import {postsGetAction} from "@/store/actions/postActions";
import AddPost from "./containers/AddPost";
import Container from "@/components/Container";
import Main from "@/components/Main";
import Users from "./containers/Users";
import Grid from "@/components/Grid";
import Text from "@/components/Text";

const Home = (props) => {

  React.useEffect(() => {
    props.usersGetAction()
    props.postsGetAction()
  }, [])

  return (
    <Main>
      <Container>
        <Grid template="auto 300px">
          <div>
            <Text variant="title" bold>Posts</Text>
            <AddPost />
            <Posts/>
          </div>
          <div>
            <Text variant="title" bold>Users</Text>
            <Users/>
          </div>
        </Grid>
      </Container>
    </Main>
  )
}


export default connect(null, {
  usersGetAction,
  postsGetAction
})(Home)
