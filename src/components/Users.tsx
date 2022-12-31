import styled from 'styled-components';
import { useContext, useEffect } from 'react';

import {User} from '../types/User';
import useGetAllUsersQuery from '../queryhooks/useGetAllUsersQuery';
import { UsersContext } from '../state/store';
import Loading from './common/Loading';
import Error from './common/Error';
import Card from './Card';
const NoUsersPNG = require('../assets/no_users_cat.png');

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 40px;
  padding: 10px;
  height: 100%;
  margin-top: 35px;
`;

const Users: React.FC = () => {

  const [getAllUsers, { loading, error }] = useGetAllUsersQuery();
  const { users } = useContext(UsersContext);

  useEffect(() => {
    getAllUsers()
  },[])


  if (loading) {return <Loading />;}
  if (error) {return <Error />;}

  if (!users || users?.length === 0) {
    return <img src={NoUsersPNG} alt={'no users to show'} />
  }
  return (
      <Section>
        {users?.map((userCard: User) => (<Card key={userCard._id} card={userCard} />))}
      </Section>
  );
}

export default Users;