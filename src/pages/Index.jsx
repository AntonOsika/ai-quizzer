import React, { useState } from "react";
import { Box, Button, Heading, Text, VStack, Select, useToast, Flex, keyframes } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const questions = [
  {
    question: "What does FOOM stand for in the context of AGI?",
    options: ["Fast Onset Of Madness", "Fairly Obvious Optimization Mistake", "Friendly Omnipotent Overlord Machine", "None of the above"],
    answer: "None of the above",
  },
  {
    question: "What is the primary goal of the AGI House?",
    options: ["Hosting wild parties", "Fostering collaboration among AI researchers", "Building Skynet", "Debating the merits of different pizza toppings"],
    answer: "Fostering collaboration among AI researchers",
  },
  {
    question: "Who is Eliezer Yudkowsky?",
    options: ["A famous AI researcher", "The founder of AGI House", "A character from a sci-fi novel", "A type of sushi roll"],
    answer: "A famous AI researcher",
  },
  {
    question: "What does 'e/acc' mean in the context of AI safety?",
    options: ["Existential Acceleration", "Ethical Accumulation", "Electronic Account", "Eccentric Acrobatics"],
    answer: "Existential Acceleration",
  },
  {
    question: "What is the most likely outcome of an unaligned AGI?",
    options: ["World peace", "Endless paperclips", "A utopian society", "The perfect cup of coffee"],
    answer: "Endless paperclips",
  },
  {
    question: "Where is AGI House located?",
    options: ["New York", "San Francisco", "London", "Tokyo"],
    answer: "San Francisco",
  },
  {
    question: "Which of the following is NOT a core value of AGI House?",
    options: ["Collaboration", "Responsibility", "Secrecy", "Curiosity"],
    answer: "Secrecy",
  },
  {
    question: "AGI House aims to bring back the _____ life to Silicon Valley.",
    options: ["startup", "hackathon", "corporate", "party"],
    answer: "hackathon",
  },
  {
    question: "AGI House believes in the power of _____ to drive innovation.",
    options: ["money", "competition", "curiosity", "luck"],
    answer: "curiosity",
  },
];

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Index = () => {
  const [numQuestions, setNumQuestions] = useState(5);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const toast = useToast();

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Wrong!",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }

    if (currentQuestion + 1 < numQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  const renderQuestion = () => {
    const question = questions[currentQuestion];
    return (
      <VStack spacing={4}>
        <Text fontSize="xl">{question.question}</Text>
        {question.options.map((option, index) => (
          <Button key={index} onClick={() => handleAnswer(option)} colorScheme="blue" size="lg" width="100%">
            {option}
          </Button>
        ))}
      </VStack>
    );
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        AGI Quiz <FaRobot />
      </Heading>
      {!quizStarted && !quizCompleted && (
        <VStack spacing={4}>
          <Text fontSize="xl">Select the number of questions:</Text>
          <Select value={numQuestions} onChange={(e) => setNumQuestions(parseInt(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </Select>
          <Button onClick={startQuiz} colorScheme="green" size="lg">
            Start Quiz
          </Button>
        </VStack>
      )}
      {quizStarted && !quizCompleted && (
        <VStack spacing={8}>
          <Text fontSize="2xl">
            Question {currentQuestion + 1} of {numQuestions}
          </Text>
          {renderQuestion()}
        </VStack>
      )}
      {quizCompleted && (
        <VStack spacing={8}>
          <Text fontSize="4xl" animation={`${spin} 2s linear infinite`}>
            🎉 Congratulations! 🎉
          </Text>
          <Text fontSize="2xl">
            You scored {score} out of {numQuestions}
          </Text>
          <Button onClick={resetQuiz} colorScheme="blue" size="lg">
            Play Again
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default Index;
