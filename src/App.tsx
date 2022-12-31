import styled from 'styled-components';
import {useCallback, useState} from 'react';
import { HiPlus } from "react-icons/hi";
import Modal from './components/common/Modal';
import CreateNewUser from './components/CreateUser';
import Users from './components/Users';
import Button from './components/inputs/Button';

const Container = styled.div`
  padding: 5px 60px;
  background-color: ${props => props.theme.bg_colors.B08};
`;

const Header = styled.header`
  padding: 10px;
`;

const ButtonText = styled.span`
  display: flex;
  align-items: center;
  letter-spacing: 0.7px;
  font-weight: 500;
`;

const PlusBTN = styled(HiPlus)`
  font-size: 23px;
  margin-left: 10px;
`;

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const closeModalHandler = useCallback(() => (setIsOpen(false)), []);

  const getCreateButton = () => (<ButtonText>{'Create'}<PlusBTN/></ButtonText>);
  return (
    <Container>
      <Header>
        <Button color="primary" value={getCreateButton()} onClick={() => setIsOpen(true)} />
      </Header>
      <Users />
      <Modal
        show={isOpen}
        header={'Create New User'}
        onHide={() => setIsOpen(false)}
      >
        <CreateNewUser closeModal={closeModalHandler}/>
      </Modal>
    </Container>
  );
}

export default App;
