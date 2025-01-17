import { Card,Button ,Text,Image, CardBody, CardFooter, Box} from '@chakra-ui/react'
import React from 'react'

export default function Page2() {
  return (
    <Box display="flex" flexWrap="wrap" gapY="20px" gapX="20px" justifyContent="space-around">
{/*card1*/}
<Card.Root maxW="2xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src="./robo face.jpg"
        alt="Placeholder Image"
        objectFit="cover"
      />
      <Card.Body>
        <Text fontSize="md" fontWeight="bold">1.suzuki Robo</Text>
      </Card.Body>
      <Card.Footer>
        <Button colorScheme="teal" size="sm" color="white">
          Learn More
        </Button>
      </Card.Footer>
    </Card.Root>
{/*card2*/}

    <Card.Root maxW="2xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
        
    <Image src='./robo face.jpg' objectFit="cover"/>
    <Card.Body>
    <Text fontSize="md" fontWeight="bold">2.suzuki Robo</Text>
    </Card.Body>
    <Card.Footer>
          <Button colorScheme="teal" size="sm" color="white">
          Learn More
        </Button>
    </Card.Footer>
    </Card.Root>

{/*card3*/}
    

<Card.Root maxW="2xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src="./robo face.jpg"
        alt="Placeholder Image"
        objectFit="cover"
      />
      <Card.Body>
        <Text fontSize="md" fontWeight="bold">3.suzuki Robo</Text>
      </Card.Body>
      <Card.Footer>
        <Button colorScheme="teal" size="sm" color="white">
          Learn More
        </Button>
      </Card.Footer>
    </Card.Root>
{/*card4*/}

    <Card.Root maxW="2xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
        
    <Image src='./robo face.jpg' objectFit="cover"/>
    <Card.Body>
    <Text fontSize="md" fontWeight="bold">4.suzuki Robo</Text>
    </Card.Body>
    <Card.Footer>
          <Button colorScheme="teal" size="sm" color="white">
          Learn More
        </Button>
    </Card.Footer>
    </Card.Root>


        
{/*card5*/}

<Card.Root maxW="2xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image
        src="./robo face.jpg"
        alt="Placeholder Image"
        objectFit="cover"
      />
      <Card.Body>
        <Text fontSize="md" fontWeight="bold">5.suzuki Robo</Text>
      </Card.Body>
      <Card.Footer>
        <Button colorScheme="teal" size="sm" color="white">
          Learn More
        </Button>
      </Card.Footer>
    </Card.Root>
{/*card6*/}

    <Card.Root maxW="2xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
        
    <Image src='./robo face.jpg' objectFit="cover"/>
    <Card.Body>
    <Text fontSize="md" fontWeight="bold">6.suzuki Robo</Text>
    </Card.Body>
    <Card.Footer>
          <Button colorScheme="teal" size="sm" color="white">
          Learn More
        </Button>
    </Card.Footer>
    </Card.Root>

  

  

    </Box>
  )
}
