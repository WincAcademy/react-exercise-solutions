import { Button as CButton } from '@chakra-ui/react';

export const Button = ({ clickFn, ...props }) => (
  <CButton colorScheme="teal" onClick={clickFn} {...props}>
    {props.children}
  </CButton>
);
