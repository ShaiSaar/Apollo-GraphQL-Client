import { useState, useCallback } from 'react';

import useCreateUserQuery from '../queryhooks/useCreateUserQuery';
import { User, WorkStatus } from '../types/User';
import Loading from './common/Loading';
import TextInput from './inputs/Text';
import Form from './inputs/Form';
import Button from './inputs/Button';
import DropDown from './inputs/DropDown';

const initializeUser: Partial<User> = {
  name: '',
  workStatus: WorkStatus.Working
}

interface CreateNewUserProps {
  closeModal: () => void;
}

const CreateNewUser: React.FC<CreateNewUserProps> = (props: CreateNewUserProps) => {
  const [user, setUser] = useState<Partial<User>>(initializeUser)
  const [saveUser, { loading }]  = useCreateUserQuery(user);
  
  const onSubmit = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    saveUser().then((data:  any) => {
        setUser(initializeUser);
        props.closeModal();

    })}, [])
  
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLElement>, key: string, value: string) => {
    setUser((prevState) => ({...prevState, [key]: value}))
  },[])

  if (loading) {return <Loading />;}

  return (
    <Form onSubmit={onSubmit}>
      <TextInput 
        type={'text'}
        name={'name'}
        label={'User name:'}
        value={user.name!}
        onChange={onChange}
      />
      <DropDown
        label={'Status:'}
        name="workStatus"
        value={user.workStatus!} 
        onChange={onChange}
        options={[...Object.keys(WorkStatus)]}
      />
      <br/>
      <Button color="primary" type="submit" disabled={!user?.name || !user?.workStatus} value={'Create'}/>
      <Button color="white" value={'Cancel'} onClick={(e: React.MouseEvent) => props.closeModal()}/>
    </Form>
  )
}

export default CreateNewUser;