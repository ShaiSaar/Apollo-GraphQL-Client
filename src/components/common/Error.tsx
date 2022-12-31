import styled from 'styled-components';

const ServerErrorGif = require('../../assets/server_error.gif');

const Wrapper = styled.div`
    margin: auto;
    width: fit-content;
`;

const Text = styled.p`
    text-align: center;
    font-size: 19px;
    &::first-letter{
        text-transform: capitalize;
    }
`;

interface Props {
    size?: number;
    message?: string;
}
const Error: React.FC<Props> = ({size, message}: Props) => {
    return (
        <Wrapper>
            <img width={size} alt={'Error...'} src={ServerErrorGif} />
            <Text>{message}</Text>
        </Wrapper>
    );
}
Error.defaultProps ={
    size: 220,
    message: 'sorry, an error has occurred',
 }
 
export default Error;