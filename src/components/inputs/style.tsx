import styled from "styled-components";

export const styledInputElement  = (el: any ) => {
   const NewElement = styled(el)`
    border: none;
    border-radius: inherit;
    border-bottom: 1px solid ${props => props.theme.bg_colors.B05};
    padding-left: 0;
    
    &:focus {
        outline: none;
        box-shadow: none;
    }
    `;
    return NewElement
}

export const styledLabel  = (el: any ) => {
   const NewElement = styled(el)`
        color: ${props => props.theme.bg_colors.B05};
        font-size: 11px;
        font-weight: 100;
    `;
    return NewElement
}

export const styledFromWrapper  = (el: any ) => {
   const NewElement = styled(el)`
        padding: 0px 15px 3px 15px;
    `;
    return NewElement
}