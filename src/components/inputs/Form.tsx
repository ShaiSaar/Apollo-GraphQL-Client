import Form from 'react-bootstrap/Form';

import { styledFromWrapper } from './style';

const NewForm = styledFromWrapper(Form);

interface FormProps {
    children: JSX.Element|JSX.Element[];
    onSubmit: (e: React.SyntheticEvent) => void;
}

const FormWrapper: React.FC<FormProps> = (props: FormProps) => {
  return (
    <NewForm onSubmit={props.onSubmit}>{props.children}</NewForm>
  )
}

export default FormWrapper;