import { Modal } from "antd";
import React from "react";

const ModaList = ({ setIsModalOpen, isModalOpen, galer }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <img className="w-full " src={galer} alt="" />
      </Modal>
    </>
  );
};

export default ModaList;
