import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  font-weight: 500;
  padding: 11px 23px;
  font-size: 18px;
  &.btn-primary, &.btn-primary:hover, &.btn-primary:active, &.btn-primary:visited {
    background-color: ${props => props.theme.bg_colors.B03} !important;
    border: ${props => props.theme.bg_colors.B03} !important;
  }
`;

interface InputProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    color?: string;
    disabled?: boolean;
    value: string | JSX.Element;
    onClick?: (e: React.MouseEvent) => void;
}

const ButtonInput: React.FC<InputProps> = (props: InputProps) => {
  return (
    <StyledButton variant={props.color} onClick={props.onClick} type={props.type} disabled={props.disabled}>{props.value}</StyledButton>
  )
}

ButtonInput.defaultProps = {
    type: 'button',
    color: '#109cf1',
    disabled: false,
    onClick: (e) => null,
}

export default ButtonInput;