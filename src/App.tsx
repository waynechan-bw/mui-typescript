import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';

/**
 * 1. Render Car List with from data stored in carList and priceList,
 *    sort the list by car price in ascending order and display them as follow:
 *    make | model | type | price
 *
 * 2. Create a search box, search cars by make & model with case insensitive
 *  e.g
 *    - search Honda - the list renders 2 cars
 *    - search Vezel - the list renders 1 car
 *    - search A3 Vezel - the list renders 2 cars
 */

const carList = [
  { id: 1, make: "Mitsubishi", model: "Lancer", type: "Used" },
  { id: 2, make: "Honda", model: "Vezel", type: "New" },
  { id: 3, make: "Honda", model: "Civic", type: "Used" },
  { id: 4, make: "Audi", model: "A3", type: "New" },
  { id: 5, make: "Audi", model: "A4", type: "Used" },
  { id: 6, make: "Audi", model: "A7", type: "New" },
  { id: 7, make: "BMW", model: "i8", type: "Used" },
  { id: 8, make: "BMW", model: "i10", type: "Used" },
];

const priceList = [
  { car_id: 8, price: 10000 },
  { car_id: 2, price: 4000 },
  { car_id: 3, price: 3000 },
  { car_id: 1, price: 2000 },
  { car_id: 4, price: 1000 },
  { car_id: 6, price: 5000 },
  { car_id: 5, price: 6000 },
  { car_id: 7, price: 7000 },
];
export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Create React App example in TypeScript
        </Typography>
        <img src="https://raw.githubusercontent.com/waynechan-bw/charting-library-examples/master/result.gif" />
      </Box>
    </Container>
  );
}
