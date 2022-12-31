import { useSnackbar } from 'react-simple-snackbar';
import styled from 'styled-components';
import { MdOutlineError, MdInfo, MdCheckCircle } from "react-icons/md";

const ErrorIcon = styled(MdOutlineError)`
    color: ${props => props.theme.text_colors.T03};
    font-size: 25px;
    padding-right: 8px;
`;

const InfoIcon = styled(MdInfo)`
    color: ${props => props.theme.text_colors.T04};
    font-size: 25px;
    padding-right: 8px;
`;

const CheckIcon = styled(MdCheckCircle)`
    color: ${props => props.theme.text_colors.T05};
    font-size: 25px;
    padding-right: 8px;
`;

export enum Types {
    INFO = 'info',
    ERROR = 'error',
    SUCCESS = 'success',

}

const icon = {
    [Types.ERROR]: <ErrorIcon/>,
    [Types.INFO]: <InfoIcon/>,
    [Types.SUCCESS]: <CheckIcon/>,
}

export default function useSnackbarHook (duration: number = 5000) {
    const [openSnackbar] = useSnackbar()
    const openSnackBarHandler = (text: string, type: Types = Types.INFO) => {
        openSnackbar(
            <p>
                {icon[type]}
                {text}
            </p>
            , duration)
    }
    return {
        openSnackBarHandler,
    };
}
