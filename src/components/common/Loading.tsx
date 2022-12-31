import styled from 'styled-components';

const LoadingGif = require('../../assets/loading.gif');

const Wrapper = styled.div`
    margin: auto;
    width: fit-content;
`;

interface Props {
    size?: number
}
const Loading: React.FC<Props> = ({size}: Props) => {
    return (
        <Wrapper>
            <img width={size} alt={'Loading...'} src={LoadingGif} />
        </Wrapper>
    );
}
 Loading.defaultProps ={
    size: 90,
 }
 
export default Loading;