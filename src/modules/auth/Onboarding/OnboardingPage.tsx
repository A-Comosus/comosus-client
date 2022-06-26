import React, { useState } from 'react';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';

import { Button, Text } from '@src/common/components';
import {
  InputGroup,
  Input,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  Box,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export default function OnboardingPage() {
  const { t } = useTranslation('auth');
  const handleInputChange = (e) => setInput(e.target.value);
  const [input, setInput] = useState('');
  const [showResults, setShowResults] = useState(false);
  const Continue = () => {
    if (!showResults) {
      setShowResults(true);
      return;
    }
    // else make api call to backend
  };
  const isActive = input.length < 3;
  const tags = [
    t('onboarding.tags.Business'),
    t('onboarding.tags.Creative'),
    t('onboarding.tags.Education'),
    t('onboarding.tags.Entertainment'),
    t('onboarding.tags.Fasion'),
    t('onboarding.tags.Food'),
    t('onboarding.tags.Government'),
    t('onboarding.tags.Health'),
    t('onboarding.tags.Non-profit'),
    t('onboarding.tags.Other'),
    t('onboarding.tags.Tech'),
    t('onboarding.tags.Travel'),
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
        {t('onboarding.category')}
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
    <InputGroup display="flex" flexDirection="column" p={0} width="660px">
      <Text fontSize={30}>{t('onboarding.introduction')}</Text>
      <Text fontSize={15}>{t('onboarding.service')}</Text>
      <Text
        mt="60px"
        fontWeight="bold"
        fontSize={15}
        letterSpacing="-1.5%"
        pb="18px"
      >
        {t('onboarding.askName')}
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
          <FormHelperText>{t('onboarding.error.required')}</FormHelperText>
        ) : (
          <FormErrorMessage>
            {t('onboarding.error.invalid-name')}
          </FormErrorMessage>
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
        isDisabled={_.isEmpty(input) || (showResults && _.isEmpty(currentTag))}
      >
        {t('onboarding.continue')}
      </Button>
    </InputGroup>
  );
}
