import React from 'react';

import {
  AspectRatio,
  Box,
  Center,
  HStack,
  IconButton,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Text } from '@src/common/components';
import { motion } from 'framer-motion';
import { useToggle } from '@src/utils/hooks';
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTwitter,
} from 'react-icons/fa';

type TeamsProps = {
  teams: Team[];
};
export default function Teams({ teams }: TeamsProps) {
  return (
    <VStack maxW="1600px">
      <Text>Teams</Text>
      <Wrap justify="center" spacing="0">
        {teams.map((team, index) => (
          <Team key={index} team={team} index={index} />
        ))}
      </Wrap>
    </VStack>
  );
}

type TeamProps = {
  team: Team;
  index: number;
};
const Team = ({ team, index }: TeamProps) => {
  const teamColors = {
    color: '#FFFFFF',
    developer: '#3A72C0',
    uiux: '#38AAB1',
    ba: '#82B135',
    admin: '#C033C2',
    devops: '#C57A36',
    advisors: '#A93535',
  };

  const colors = [
    '#3A72C0',
    '#C033C2',
    '#C57A36',
    '#38AAB1',
    '#82B135',
    '#A93535',
  ];

  return (
    <>
      <WrapItem>
        {/* <FlipCard /> */}
        <FlipCard title={team.name} bgColor={colors[index]}>
          <Text textAlign="center" fontSize={16} fontWeight={700}>
            {team.description ??
              'Well.... There supposed to be descriptions here... 😥'}
          </Text>
        </FlipCard>
      </WrapItem>
      {team.members.map((member, _index) => (
        <WrapItem key={_index}>
          <FlipCard
            title={member.name ?? member.login}
            bgColor={`${colors[index]}B3`}
            bgImage={member.avatar_url}
          >
            <VStack>
              <Text textAlign="center" fontSize={24} fontWeight={600}>
                {team.name}
              </Text>
              <HStack>
                <FaMapMarkerAlt />
                <Text textAlign="center" fontSize={20} fontWeight={500}>
                  {member.location}
                </Text>
              </HStack>
              <Text textAlign="center" fontSize={16} fontWeight={500}>
                {member.bio}
              </Text>
              <Text textAlign="center" fontSize={16} fontWeight={500}>
                {member.email}
              </Text>
              <HStack>
                <IconButton
                  icon={<FaTwitter />}
                  aria-label="twitter"
                  rounded="full"
                  bg={colors[index]}
                />
                <IconButton
                  icon={<FaLinkedin />}
                  aria-label="twitter"
                  rounded="full"
                  bg={colors[index]}
                />
                <IconButton
                  icon={<FaGithub />}
                  aria-label="twitter"
                  rounded="full"
                  bg={colors[index]}
                />
              </HStack>
            </VStack>
          </FlipCard>
        </WrapItem>
      ))}
    </>
  );
};

type FlipCardProps = {
  children: React.ReactNode;
  title: string;
  bgColor: string;
  bgImage?: string;
};
const FlipCard = ({ children, title, bgColor, bgImage }: FlipCardProps) => {
  const [isFlipped, toggleFlipped] = useToggle();

  const variants = {
    default: { rotateY: 0 },
    flipped: { rotateY: 180 },
  };

  return (
    <AspectRatio
      w="350px"
      ratio={1}
      style={{ perspective: '1000px' }}
      color="white"
    >
      <Box
        onClick={() => toggleFlipped()}
        position="relative"
        style={{
          transition: 'transform 0.1s',
          transformStyle: 'preserve-3d',
        }}
      >
        <Box
          as={motion.div}
          variants={variants}
          animate={isFlipped ? 'flipped' : 'default'}
          position="absolute"
          w="100%"
          h="100%"
          style={{
            backfaceVisibility: 'hidden',
            MozBackfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          bgImage={bgImage}
          bgSize="cover"
          bgRepeat="no-repeat"
        >
          <Center bg={bgColor} w="100%" h="100%">
            <Text
              fontSize={30}
              fontWeight={700}
              letterSpacing="3px"
              textTransform="uppercase"
              textAlign="center"
            >
              {title}
            </Text>
          </Center>
        </Box>

        <Center
          as={motion.div}
          variants={variants}
          animate={isFlipped ? 'default' : 'flipped'}
          position="absolute"
          w="100%"
          h="100%"
          p="20px"
          style={{
            backfaceVisibility: 'hidden',
            MozBackfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
          bg={bgColor}
        >
          {children}
        </Center>
      </Box>
    </AspectRatio>
  );
};
