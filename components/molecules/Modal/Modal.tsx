import { Modal } from 'antd';
import React from 'react';
import { ModalProps } from '../modal.props';
import { Modal as ModalUtil } from '../../../utils/model_utils';

export const ModalComponent = React.forwardRef((propsValues: ModalProps, ref) => {
  const {
    component: RenderInner,
    props,
    closable = true,
    onClose = () => {},
    closeModal = () => {},
    isOpen,
    width = '80vw',
    height = '80vh',
    title,
    className = 'modal-container',
    modalFooter,
    closeable = true,
    closeIcon = false,
    centered = true,
  } = propsValues;

  const onModalClose = (isClose: any) => {
    if (!closable) return;
    if (isClose) {
      closeModal();
      onClose();
    }
    ModalUtil.close();
  };

  return (
    <Modal
      open={isOpen}
      title={title}
      onCancel={onModalClose}
      footer={modalFooter ? modalFooter : null}
      width={width}
      className={className}
      closeIcon={closeIcon}
      closable={closeable}
      centered={centered}
    >
      <div
        style={{
          position: 'relative',
          height: '100%',
        }}
      >
        {RenderInner && <RenderInner inModal={true} {...props} />}
      </div>
    </Modal>
  );
});
