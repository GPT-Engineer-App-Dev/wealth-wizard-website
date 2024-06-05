import { Box, Container, Flex, Heading, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" justify="space-between" align="center" mb={8} p={4} bg="gray.100" borderRadius="md">
        <Heading as="h1" size="lg">
          Financial Times
        </Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} mx={2}>Home</Link>
          <Link as={RouterLink} to="/world" p={2} mx={2}>World</Link>
          <Link as={RouterLink} to="/business" p={2} mx={2}>Business</Link>
          <Link as={RouterLink} to="/markets" p={2} mx={2}>Markets</Link>
          <Link as={RouterLink} to="/opinion" p={2} mx={2}>Opinion</Link>
          <Link as={RouterLink} to="/tech" p={2} mx={2}>Tech</Link>
        </Flex>
      </Flex>

      {/* Main Headline Section */}
      <Box mb={8}>
        <Heading as="h2" size="xl" mb={4}>Main Headline Article</Heading>
        <Text fontSize="lg">
          This is the main headline article. It is prominently displayed to catch the reader's attention.
        </Text>
      </Box>

      {/* Grid Layout for Additional Articles */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} mb={8}>
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md" mb={2}>Article 1</Heading>
          <Text>This is a brief summary of the first article.</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md" mb={2}>Article 2</Heading>
          <Text>This is a brief summary of the second article.</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md" mb={2}>Article 3</Heading>
          <Text>This is a brief summary of the third article.</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md" mb={2}>Article 4</Heading>
          <Text>This is a brief summary of the fourth article.</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md" mb={2}>Article 5</Heading>
          <Text>This is a brief summary of the fifth article.</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h3" size="md" mb={2}>Article 6</Heading>
          <Text>This is a brief summary of the sixth article.</Text>
        </Box>
      </SimpleGrid>

      {/* Footer */}
      <Box as="footer" p={4} bg="gray.100" borderRadius="md">
        <Flex justify="space-between">
          <Link as={RouterLink} to="/contact" p={2}>Contact Information</Link>
          <Link as={RouterLink} to="/privacy" p={2}>Privacy Policy</Link>
          <Link as={RouterLink} to="/terms" p={2}>Terms of Service</Link>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;