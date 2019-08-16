import React from 'react'
import { usersGetAction } from '@/store/actions/userActions'
import { connect } from 'react-redux'
import Posts from './containers/Posts'
import { postsGetAction } from '@/store/actions/postActions'
import AddPost from './containers/AddPost'
import Container from '@/components/Container'
import Main from '@/components/Main'
import Users from './containers/Users'
import Grid from '@/components/Grid'
import Text from '@/components/Text'
import PropTypes from 'prop-types'

const Home = props => {
  React.useEffect(() => {
    props.usersGetAction()
    props.postsGetAction()
  }, [])

  return (
    <Main>
      <Container>
        <Grid template="auto 300px">
          <div>
            <AddPost />
            <Text variant="title" bold>
              Posts
            </Text>
            <Posts />
          </div>
          <div>
            <Text variant="title" bold>
              Users
            </Text>
            <Users />
          </div>
        </Grid>
      </Container>
    </Main>
  )
}

Home.propTypes = {
  usersGetAction: PropTypes.func.isRequired,
  postsGetAction: PropTypes.func.isRequired
}

export default connect(
  null,
  {
    usersGetAction,
    postsGetAction
  }
)(Home)
