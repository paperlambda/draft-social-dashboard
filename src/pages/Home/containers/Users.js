import React from 'react'
import {connect} from "react-redux";
import {history} from "@/store";
import {userSetSelectedAction} from "@/store/actions/userActions";
import styled from "styled-components";
import Flex from "@/components/Flex";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Card from "@/components/Card";

const Users = (props) => {
  const { isLoading, users, error } = props

  const _didClickUser = (user) => {
    props.userSetSelectedAction(user)
    history.push(`/users/${user.id}`)
  }

  if(isLoading){
    return (<p>Loading...</p>)
  }

  return (
    <List>
      {
        users.map((user) => (
          <Flex jc="space-between" key={user.id} >
            <div>
              <Text bold>{user.name}</Text>
              <Text variant="caption">{user.username}</Text>
            </div>
            <Button color="inverted" onClick={() => _didClickUser(user)}>
              View
            </Button>
          </Flex>
        ))
      }
    </List>
  )
}

const List = styled(Card)`
  margin-top: 10px;
  > div {
    padding: 15px 20px;
    & + div {
      border-top: 1px solid #f8f8f8;
    }
  }
`

const mapStateToProps = (state) => ({
  isLoading: state.user.isLoading,
  users: state.user.users,
  error: state.user.error
})

export default connect(mapStateToProps, {
  userSetSelectedAction,
})(Users)