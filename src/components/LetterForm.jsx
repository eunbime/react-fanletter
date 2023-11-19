import React, { useContext, useState } from "react";
import styled from "styled-components";
import { data } from "../shared/data";
import uuid from "react-uuid";
import { useDispatch, useSelector } from "react-redux";
import { addLetter } from "redux/modules/letterData";

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 650px;
  margin: 0 auto;
  gap: 0.5rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
`;

const StSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
`;

const StLabel = styled.label`
  padding: 0.5rem 0;
  color: var(--mainWhite);
`;

const StInput = styled.input.attrs({
  required: true,
  maxLength: 20,
  placeholder: "20자 이내로 작성해주세요",
})`
  width: 25rem;
  font-size: small;
  padding: 0.5rem;
  line-height: 1.25rem;
`;

const StTextArea = styled.textarea.attrs({
  required: true,
  maxLength: 150,
  placeholder: "150자 이내로 작성해주세요.",
  cols: 30,
  rows: 15,
})`
  padding: 0.5rem;
  /* 줄바꿈 적용 처리 */
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 5rem;
  margin-top: 1rem;
`;

const StButton = styled.button`
  border: none;
  font-size: medium;
  padding: 0.25rem 1.5rem;
  border-radius: 1rem;
  background-color: var(--aespa4);
  color: var(--mainWhite);
  border: solid 1px var(--mainWhite);
  cursor: pointer;
  &:hover {
    background-color: var(--aespa3);
  }
`;

const LetterForm = ({ setModalOpen }) => {
  const store = useSelector((state) => state);
  console.log(store);
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("카리나");
  const [memberPhoto, setMemberPhoto] = useState("");
  const [selectedMember, setSelectedMember] = useState("");

  let today = new Date();

  const dispatch = useDispatch();

  const handleMember = (e) => {
    const photo = data.find((item) => item.member === e.target.value);
    setMember(e.target.value);
    setMemberPhoto(photo.memberPhoto);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nickname === "" || content === "")
      return alert("닉네임과 내용을 입력해주세요");

    dispatch(
      addLetter({
        id: uuid(),
        nickname,
        content,
        member,
        memberPhoto,
        createdAt: today.toLocaleString(),
        avatar:
          "https://i.namu.wiki/i/M0j6sykCciGaZJ8yW0CMumUigNAFS8Z-dJA9h_GKYSmqqYSQyqJq8D8xSg3qAz2htlsPQfyHZZMmAbPV-Ml9UA.webp",
      })
    );
    setSelectedMember(member);
    setNickname("");
    setContent("");
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <StForm onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <StSection>
            <StLabel>닉네임</StLabel>
            <StInput
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </StSection>
          <StSection>
            <StLabel>내용</StLabel>
            <StTextArea
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </StSection>
          <StSection>
            <StLabel>아티스트를 선택해주세요.</StLabel>
            <select id="member" onChange={handleMember}>
              {data.map((item) => (
                <option key={item.id} value={item.member}>
                  {item.member}
                </option>
              ))}
            </select>
          </StSection>
        </div>
        <ButtonSection>
          <StButton type="submit">등록</StButton>
          <StButton onClick={closeModal}>닫기</StButton>
        </ButtonSection>
      </StForm>
    </div>
  );
};

export default React.memo(LetterForm);
