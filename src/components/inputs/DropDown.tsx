import React from 'react';
import Form from 'react-bootstrap/Form';
import styled, {css} from 'styled-components';
import Dropdown from 'react-bootstrap/Dropdown';
import { CgShapeCircle } from "react-icons/cg";

import { styledInputElement, styledLabel } from './style';
import { WorkStatus } from '../../types/User';

interface CircleProps {
  status: string;
  theme?: any;
}
const Circle = styled(CgShapeCircle)`
  color: ${(props: CircleProps) => props.theme.bg_colors.B05};
  margin-right: 7px;

  ${(props: CircleProps) => props.status === WorkStatus.OnVacation && css`
    color: ${(props: CircleProps) => props.theme.text_colors.T03};
  `} 
  ${(props: CircleProps) => props.status === WorkStatus.LunchTime && css`
    color: ${(props: CircleProps) => props.theme.text_colors.T04};
  `} 
  ${(props: CircleProps) => props.status === WorkStatus.Working && css`
    color: ${(props: CircleProps) => props.theme.text_colors.T05};
  `} 
  ${(props: CircleProps) => props.status === WorkStatus.BusinessTrip && css`
    color: ${(props: CircleProps) => props.theme.text_colors.T06};
  `} 
`;

interface TextProps {
  isNarrow?: boolean;
}

const Text = styled.span`
  font-size: ${(props: TextProps) => props.isNarrow ? 12 : 16}px;
  text-transform: capitalize;
`;

const Style ={
  DropDownItem: {
    margin: 0,
    padding: '5px 12px',
    cursor: 'pointer',
  }
}

const Menu = styled(Dropdown.Menu)`
  width: 100%;
`;

const Toggle = styled(Dropdown.Toggle)`
  padding-left: 0;
  width: 100%;
  text-align: inherit;
  
  &::after {
    position: absolute;
    top: 75%;
    transform: translate(0, -75%);
    right: 14px;
    color: ${props => props.theme.bg_colors.B04};
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

const ToggleNarrow = styled(Toggle)`
  padding-bottom: 0;
  &::after {
    top: 62%;
    transform: translate(0, -62%);
  }
`;
const StyledDropdown = styledInputElement(Dropdown);
const NewLabel = styledLabel(Form.Label);

interface DropDownProps {
    label?: string;
    isNarrow?: boolean;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLElement>, key: string, value: string) => void;
    options: string[];
}

const DropDownInput: React.FC<DropDownProps> = (props: DropDownProps) => {

  const onClickHandler = (e: any, option: string) => {props.onChange(e, props.name, option);}

  const getOptionView = (option: string) =>{
    let status = WorkStatus[option as keyof typeof WorkStatus];
    return (
      <Text isNarrow={props.isNarrow}>
        {props.isNarrow && <Circle status={status}/>}
        {status}
      </Text>
    )}

  return (
    <StyledDropdown onSelect={(eventKey: string) => onClickHandler(null, eventKey)}>
      {!props.isNarrow && <NewLabel>{props.label}</NewLabel>}
      {props.isNarrow ? (
        <ToggleNarrow variant="white" >{getOptionView(props.value)}</ToggleNarrow>) : (
          <Toggle variant="white" >{getOptionView(props.value)}</Toggle>)
      }
      <Menu>
        {props.options.map((option: string) => {
          return (
            <Dropdown.Item
              style={Style.DropDownItem}
              className={option}
              as={'p'}
              eventKey={option}
              key={option}
            >
                {getOptionView(option)}
            </Dropdown.Item>
        )})}
      </Menu>
    </StyledDropdown>
  )
}

DropDownInput.defaultProps = {
    label: '',
    isNarrow: false,
}

export default DropDownInput;