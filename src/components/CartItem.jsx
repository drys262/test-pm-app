import React from 'react'
import PropTypes from 'prop-types';
import { Box, Flex, Text, IconButton } from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'

const CartItem = ({ name, quantity, onIncrement, onDecrement }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={2}>
      <Flex justify="space-between" align="center">
        <Text fontSize="lg">{name}</Text>
        <Flex align="center">
          <IconButton
            size="sm"
            icon={<MinusIcon />}
            onClick={onDecrement}
            variant="unstyled"
            mr={2}
          />
          <Box
            mt={2}
            p={2}
            borderWidth="1px"
            borderRadius="md"
            backgroundColor="#F2F2F2"
          >
            <Text>{quantity}</Text>
          </Box>
          <IconButton
            size="sm"
            icon={<AddIcon />}
            onClick={onIncrement}
            variant="unstyled"
            ml={2}
          />
        </Flex>
      </Flex>
    </Box>
  )
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default CartItem
