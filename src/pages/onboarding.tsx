import React, { useState } from 'react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import styles from './onboarding.module.scss';

import { AppContainer, Button, Text } from '@src/common/components';
import {
  InputGroup,
  Input,
  VStack,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  Box,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export default function Onboarding() {
  const { t } = useTranslation('auth');
  const head = { title: t('onboarding.pageTitle') };
  const handleInputChange = (e) => setInput(e.target.value);
  const [input, setInput] = useState('');
  const [showResults, setShowResults] = useState(false);
  const Continue = () => {
    if (!showResults) {
      setShowResults(true);
      return;
    }
    // else make aontpi call to backend
  };
  const isActive = input.length < 3;
  const tags = [
    '🏢Business',
    '🎨Creative',
    '📚Education',
    '🎶Entertainment',
    '👗Fasion & Beauty',
    '🍕Food & Beverage',
    '⚖️Government & Politics',
    '🍎Health & Wellness',
    '💗Non-profit',
    '💗Other',
    '🖥Tech',
    '✈️Travel & Tourism',
  ];

  const [currentTag, setCurrentTag] = useState('');

  const Tag = ({ tag }) => {
    return (
      <Box
        p="10px 20px"
        borderRadius="20px"
        bg={tag === currentTag ? '#FB446C' : '#ADB2C620'}
        onClick={() => setCurrentTag(tag)}
        _hover={{
          outline: '2px solid #FB446C',
          cursor: 'pointer',
        }}
      >
        <label>{tag}</label>
      </Box>
    );
  };

  const TagChoices = () => (
    <div>
      <Text
        mt="60px"
        fontWeight="bold"
        fontSize={15}
        letterSpacing="-1.5%"
        pb="18px"
      >
        Select one category that best descrbes your A-Comosus:
      </Text>
      <Wrap>
        {tags.map((tag, index) => (
          <WrapItem key={index}>
            <Tag tag={tag} />
          </WrapItem>
        ))}
      </Wrap>
    </div>
  );
  return (
    <AppContainer head={head}>
      <VStack justify="center">
        <InputGroup display="flex" flexDirection="column" p={0} width="660px">
          <Text fontSize={30}>Tell Us About Yourself</Text>
          <Text fontSize={15}>Free forever. No payment needed</Text>
          <Text
            mt="60px"
            fontWeight="bold"
            fontSize={15}
            letterSpacing="-1.5%"
            pb="18px"
          >
            Tell Us Your Name
          </Text>
          <FormControl>
            <Input
              id="username"
              type="text"
              value={input}
              onChange={handleInputChange}
              borderRadius={15}
            />
            {isActive ? (
              <FormHelperText>Enter your name please</FormHelperText>
            ) : (
              <FormErrorMessage>Name is required!</FormErrorMessage>
            )}
          </FormControl>
          {showResults ? <TagChoices /> : null}
          <Button
            variant="solid"
            size="md"
            mt="60px"
            isActive={isActive}
            borderRadius={15}
            onClick={Continue}
            isDisabled={
              _.isEmpty(input) || (showResults && _.isEmpty(currentTag))
            }
          >
            Continue
          </Button>
        </InputGroup>
      </VStack>
    </AppContainer>
  );
}
