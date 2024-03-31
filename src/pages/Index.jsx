import React from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";

const Index = () => {
  const [newQuestion, setNewQuestion] = React.useState("");
  const handleNewQuestion = (event) => setNewQuestion(event.target.value);
  const submitNewQuestion = () => {};
  const addQuestionPlaceholder = () => {};

  return (
    <Box>
      <Text>Submit a new question:</Text>
      <Input value={newQuestion} onChange={handleNewQuestion} placeholder="Enter a new question" />
      <Button onClick={submitNewQuestion} colorScheme="green" mt={2}>
        Submit Question
      </Button>
      <Box>
        <Text>Submit a new question:</Text>
        <Input value={newQuestion} onChange={handleNewQuestion} placeholder="Enter a new question" />
        <Button onClick={submitNewQuestion} colorScheme="green" mt={2}>
          Submit Question
        </Button>
        <Button onClick={addQuestionPlaceholder} colorScheme="blue" mt={2}>
          Add Question Placeholder
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
