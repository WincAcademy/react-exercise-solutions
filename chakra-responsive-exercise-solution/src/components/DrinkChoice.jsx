import {
	Center,
	Flex,
	Heading,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { Button } from './ui/Button';

export const DrinkChoice = ({ drink, onClick }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Center flexDir={'column'} gap={4}>
			<Heading fontSize={'2xl'} color="gray.600">
				Your choice: {drink.name}
			</Heading>
			<Image
				src={drink.imgUrl}
				w={100}
				h={100}
				borderRadius={'2xl'}
				alt={drink.alt}
			/>
			<Text>Your drink will be ready in a few minutes</Text>
			<Flex mt={4}>
				<Button onClick={onOpen} mr={4}>
					Confirm order
				</Button>
				<Button onClick={() => onClick()} variant="ghost">
					Change selection
				</Button>
			</Flex>

			<Modal size={['full', 'md']} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Confirm your order</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						height={['full', 'fit-content']}
						display="flex"
						justifyContent="center"
						alignItems={['center', 'flex-start']}
						flexDir="column"
					>
						<Text>1x {drink.name}</Text>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="teal" mr={4}>
							Confirm
						</Button>
						<Button variant="ghost" onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Center>
	);
};
