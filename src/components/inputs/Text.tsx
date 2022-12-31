import Form from 'react-bootstrap/Form';

import { styledInputElement, styledLabel } from './style';

const NewInput = styledInputElement(Form.Control)
const NewLabel = styledLabel(Form.Label);

interface TextInputProps {
    type?: string;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>, key: string, value: string) => void;
}

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  return (
    <Form.Group>
    {props.label && <NewLabel>{props.label}</NewLabel>}
    <NewInput 
      type={props.type} 
      name={props.name} 
      value={props.value} 
      maxLength={20}
      onChange={(e:React.ChangeEvent<HTMLInputElement>) => props.onChange(e, e.target.name, e.target.value)} placeholder={props.placeholder} 
    />
    </Form.Group>
  )
}

TextInput.defaultProps = {
    type: 'text',
    label: '',
    disabled: false,
    placeholder: '',

}

export default TextInput;
