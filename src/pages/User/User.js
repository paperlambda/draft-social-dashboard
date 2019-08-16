import React from 'react'
import userService from '../../services/userService'
import { connect } from 'react-redux'
import { userSetSelectedAction } from '../../store/actions/userActions'
import Posts from './containers/Posts'
import Albums from './containers/Albums'
import Main from '@/components/Main'
import Container from '@/components/Container'
import Text from '@/components/Text'
import styled from 'styled-components'
import Flex from '@/components/Flex'
import { Link } from 'react-router-dom'
import Button from '@/components/Button'
import PropTypes from 'prop-types'

const User = props => {
  const { match, user } = props
  const [isLoading, setLoading] = React.useState(true)
  const [tab, setTab] = React.useState('albums')

  React.useEffect(() => {
    if (user) {
      setLoading(false)
    } else {
      const { id } = match.params
      _getUser(id)
    }
  }, [])

  const _getUser = id => {
    setLoading(true)
    return userService.getUserDetail(id).subscribe({
      next: res => {
        props.userSetSelectedAction(res)
        setLoading(false)
      },
      error: err => {
        console.error(err)
        setLoading(false)
      }
    })
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Main>
      <Container>
        <Link to="/">
          <Button color="secondary">Back</Button>
        </Link>
        <UserCard>
          <Text variant="title" bold>
            {user.name}
          </Text>
          <Text color="#999999">{user.username}</Text>
          <ContactInfo>
            <Text>Phone: {user.phone}</Text>
            <Text>Mail: {user.email}</Text>
            <Text>Website: {user.website}</Text>
          </ContactInfo>
          <Tab>
            <TabHeader jc="flex-start">
              <div className={[tab === 'posts' && 'active']}>
                <a onClick={() => setTab('posts')}>
                  <Text>Posts</Text>
                </a>
              </div>
              <div className={[tab === 'albums' && 'active']}>
                <a onClick={() => setTab('albums')}>
                  <Text>Albums</Text>
                </a>
              </div>
            </TabHeader>
            {tab === 'posts' && <Posts />}
            {tab === 'albums' && <Albums />}
          </Tab>
        </UserCard>
      </Container>
    </Main>
  )
}

const UserCard = styled('div')`
  background: #ffffff;
  margin-top: 10px;
  padding: 15px 20px;
`

const ContactInfo = styled('div')`
  margin-top: 10px;
`

const Tab = styled('div')`
  margin-top: 50px;
`

const TabHeader = styled(Flex)`
  margin-bottom: 15px;
  > div {
    width: 150px;
    background: #f1f1f1;
    a {
      cursor: pointer;
      display: block;
      height: 100%;
      padding: 8px 0px;
      text-align: center;
    }

    &.active {
      background: #ffffff;
      border: 1px solid #cccccc;
      border-bottom: none;
    }
  }
`

User.propTypes = {
  user: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.object
  }),
  userSetSelectedAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  user: state.user.selectedUser
})

export default connect(
  mapStateToProps,
  {
    userSetSelectedAction
  }
)(User)
