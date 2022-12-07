import { Button as CButton } from '@chakra-ui/react';

export const Button = ({ onClick, ...props }) => (
	<CButton colorScheme="teal" onClick={onClick} {...props}>
		{props.children}
	</CButton>
);
