import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  InputGroup,
  Input,
  VStack,
  FormControl,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { AppContainer, Button, Text } from '@src/common/components';
export default function Onboarding() {
  const { t } = useTranslation('auth');
  const head = { title: t('sign-up.title') };
  const handleInputChange = (e) => setInput(e.target.value);
  const [input, setInput] = useState('');
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
  const listItems = tags.map((tag) => <li>{tag}</li>);
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
              <FormHelperText>Your name is too short!</FormHelperText>
            ) : (
              <FormErrorMessage>Name is required.</FormErrorMessage>
            )}
          </FormControl>
          <Button
            variant="solid"
            size="md"
            mt="60px"
            isActive={isActive}
            borderRadius={15}
          >
            Continue
          </Button>
        </InputGroup>
        <div>
          <ul>{listItems}</ul>
        </div>
      </VStack>
    </AppContainer>
  );
}
