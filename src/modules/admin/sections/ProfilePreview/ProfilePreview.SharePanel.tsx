import React from 'react';
import { useTranslation } from 'react-i18next';
import { useUser } from '@src/common/contexts';

import { VStack } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { Text } from '@src/common/components';
import { QRCodeSVG } from 'qrcode.react';

type SharePanelProps = {
  isOpen: boolean;
  onClose: () => void;
};
export default function SharePanel({ isOpen, onClose }: SharePanelProps) {
  const {
    user: { username },
  } = useUser();
  const { t } = useTranslation('admin');

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{t('link.share.heading')}</DrawerHeader>

        <DrawerBody>
          <VStack>
            <Text>{t('link.share.qr-code')}</Text>
            <QRCodeSVG
              value={`${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/${username}`}
            />
            <Text>
              {`${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}/${username}`}
            </Text>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
