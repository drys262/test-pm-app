import {
  Box,
  Image,
  Text,
  Button,
  Container,
  Heading,
  Select,
  Spinner,
  Stack,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useGetFruits } from './services/search'
import CartItem from './components/CartItem'
import CompassImage from './images/compass.png';

function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data, isLoading } = useGetFruits()
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = () => {
    const item = data.data.find(
      (product) => product.id === parseInt(searchTerm),
    )
    setCartItems([...cartItems, { quantity: 1, name: item.name, id: item.id }])
  }

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  return (
    <Container maxW="container.lg" width="60%">
      <Heading as="h1" size="xl">
        Add Products
      </Heading>
      <br />

      <Stack direction="row" spacing={4} align="center">
        {!isLoading && (
          <Select
            placeholder="Select an option"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          >
            {data &&
              data.data.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
          </Select>
        )}
        <Button
          colorScheme="gray"
          onClick={handleAddToCart}
          disabled={isLoading}
        >
          {isLoading ? <Spinner size="sm" /> : 'Add'}
        </Button>
      </Stack>

      <br />

      <Box>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              onIncrement={() => handleIncrement(item.id)}
              onDecrement={() => handleDecrement(item.id)}
            />
          ))
        ) : (
          <Box textAlign="center" display="flex" flexDirection="column" alignItems="center" mt={40}>
            <Image src={CompassImage} alt="Empty Cart" />
            <Text mt={4} fontSize="lg" fontWeight="bold">
              No products added to the cart.
            </Text>
          </Box>
        )}
      </Box>
    </Container>

  )
}

export default Search
