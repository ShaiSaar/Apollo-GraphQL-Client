import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import { RiDeleteBin6Line } from "react-icons/ri";

import {User, WorkStatus} from '../types/User';
import useDeleteUserQuery from '../queryhooks/useDeleteUserQuery';
import useUpdateUserQuery, { setUserVariables } from '../queryhooks/useUpdateUserQuery';
import DropDownInput from './inputs/DropDown';

const profileImg = require('../assets/profile.png');
const LoadingGif = require('../assets/loading.gif');

const DeleteIcon = styled(RiDeleteBin6Line)`
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 0px;
  color: ${props => props.theme.text_colors.T03};
  cursor: pointer;
`
const Title = styled(Card.Title)`
  text-transform: capitalize;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
`

const UserCard = styled(Card)`
    width: 330px;
    height: 175px;
    padding: 25px;
    border: none;
    box-shadow: 1px 2px 4px 1px ${props => props.theme.bg_colors.B07};
    display: flex;
    gap: 20px;
    position: relative;
    flex-direction: row;
    transition: all 0.5s ease-in-out;

    & * {
      transition:  all 0.5s ease-in-out;
    }

    &:hover {
      & ${DeleteIcon} {
        font-size: 20px;
      }
      box-shadow: -1px 2px 19px 2px ${props => props.theme.bg_colors.B06};
    }
`;

const UserImage = styled(Image)`
  width: 125px;
  height: 125px;
  align-self: center;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex: 1;
  width: 135px;
`;


interface CardProps {
  card: User;
}

const CardComponent: React.FC<CardProps> = ({card}: CardProps) => {

  const [deleteUserRequest, { loading: deleteLoading }] = useDeleteUserQuery(card._id);
  const [updateUserRequest, { loading: updateLoading }] = useUpdateUserQuery();
  
  const getCardImg = () => {
    if(deleteLoading || updateLoading) return LoadingGif;
    return !!card.img ? card.img : profileImg;
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLElement>, key: string, option: string) => {
    if(option !== card.workStatus) updateUserRequest(setUserVariables(card, option));
  }

  return (
    <UserCard key={card._id}>
      <DeleteIcon onClick={() => deleteUserRequest()}/>
      <UserImage alt={'employee logo'} src={getCardImg()} roundedCircle={true}/>
      <Details>
          <Title title={card.name}>{card.name}</Title>
          <DropDownInput
            isNarrow={true}
            name="workStatus"
            value={card.workStatus} 
            onChange={onChangeHandler}
            options={[...Object.keys(WorkStatus)]}
          />
      </Details>
    </UserCard>
  )
}

export default CardComponent;