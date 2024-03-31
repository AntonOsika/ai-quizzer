import React, { useEffect, useState } from "react";
import { Box, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaTrophy } from "react-icons/fa";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch("https://kvdb.io/BLbtbuWvN1B5uCxdV8Nzk6/leaderboard")
      .then((response) => response.json())
      .then((data) => {
        const sortedScores = Object.entries(data)
          .map(([name, score]) => ({ name, score }))
          .sort((a, b) => b.score - a.score);
        setScores(sortedScores);
      })
      .catch(console.error);
  }, []);

  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        Leaderboard <FaTrophy />
      </Heading>
      <List spacing={3}>
        {scores.map((entry, index) => (
          <ListItem key={index}>
            <ListIcon as={FaTrophy} color="yellow.500" />
            {entry.name} - {entry.score}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Leaderboard;
