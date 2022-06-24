import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './onboarding.module.scss';
import {
  InputGroup,
  Input,
  VStack,
  FormControl,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { AppContainer, Button, Text } from '@src/common/components';
import $ from 'jquery';
export default function Onboarding() {
  const { t } = useTranslation('auth');
  const head = { title: t('sign-up.title') };
  const handleInputChange = (e) => setInput(e.target.value);
  const [input, setInput] = useState('');
  const [showResults, setShowResults] = useState(false);
  const Continue = () => setShowResults(true);
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

  // const AddActiveClass = () => {
  //   $(document).ready(function () {
  //     $('.tags').click(function () {
  //       $('.tags').removeClass('active');
  //       // $(".tab").addClass("active"); // instead of this do the below
  //       $(this).addClass('active');
  //     });
  //   });
  // };
  // const [active, setIsActive] = useState(false);
  const AddActiveClass = (event) => {
    event.currentTarget.style.backgroundColor = '#FB446C';
  };
  const listItems = tags.map((tag) => (
    // eslint-disable-next-line react/jsx-key
    <Button
      variant="solid"
      className={tag}
      size="md"
      mt="60px"
      borderRadius={15}
      onClick={AddActiveClass}
    >
      {tag}
    </Button>
  ));
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
      <div>{listItems}</div>
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
          <Button
            variant="solid"
            size="md"
            mt="60px"
            isActive={isActive}
            borderRadius={15}
            onClick={Continue}
          >
            Continue
          </Button>
          {showResults ? <TagChoices /> : null}
        </InputGroup>
      </VStack>
    </AppContainer>
  );
}
