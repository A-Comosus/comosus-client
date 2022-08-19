import React from 'react';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Button, Text } from '@src/common/components';
import { useDeleteAccountAPI } from '@src/services';
import { useToggle } from '@src/utils/hooks';
import { useTranslation } from 'react-i18next';
import { AdminSectionItemCard } from '../../components';

export function DangerZone() {
  const { t } = useTranslation('admin');
  const { deleteAccount, isDeleting } = useDeleteAccountAPI();
  const [isOpen, toggleOpen] = useToggle();

  return (
    <AdminSectionItemCard>
      <Button onClick={toggleOpen} variant="accent">
        {t('settings.danger-zone.action')}
      </Button>

      <Modal isOpen={isOpen} onClose={toggleOpen}>
        <ModalOverlay />
        <ModalContent p={['1rem', '2rem']} maxW={['md', '2xl']} bg="#272429">
          <ModalHeader>
            <Text type="admin.h2">{t('settings.danger-zone.action')}</Text>
          </ModalHeader>
          <ModalBody>
            <Text type="admin.normal">{t('settings.danger-zone.message')}</Text>
          </ModalBody>

          <ModalFooter gap="2rem">
            <Button onClick={toggleOpen}>{t('common:button.close')}</Button>
            <Button
              onClick={deleteAccount}
              isLoading={isDeleting}
              variant="accent"
            >
              {t('common:button.delete')}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </AdminSectionItemCard>
  );
}
