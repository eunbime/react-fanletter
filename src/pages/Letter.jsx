import React, { useContext, useState } from "react";
import { data } from "../shared/data";
import LetterForm from "../components/LetterForm";
import LetterList from "../components/LetterList";
import styled from "styled-components";
import { LetterContext } from "context/LetterContext";

const StContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const StButtonSection = styled.section`
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const StFilterMember = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: none;
  gap: 1rem;
`;

const StBox = styled.div`
  width: 7rem;
  height: 7rem;
  margin-bottom: 0.25rem;
  transform: ${(props) => (props.selected ? "scale(1.1)" : "scale(1)")};
  border-radius: 100px;
  /* border: ${(props) =>
    props.selected ? "2.5px solid transparent" : "none"}; */
  border: 2.5px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      to right,
      var(--aespaMain) 0%,
      #44107a 29%,
      var(--aespa5) 67%,
      var(--aespa4) 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  transition: 0.3s;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.selected ? "0px 0px 10px 5px #eee" : "0px 0px 15px 1px #666"};
  &:hover {
    transform: scale(1.1);
  }
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 650px;
  height: 3rem;
  border-radius: 2rem;
  background-color: var(--mainWhite);
  font-size: medium;
  color: #666;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #eee;
  }
`;

function Letter() {
  const [letterList, , selectedMember, setSelectedMember] =
    useContext(LetterContext);
  console.log(letterList);

  const [modalOpen, setModalOpen] = useState(false);

  const selectedMemberHandler = (selectedMember) => {
    setSelectedMember(selectedMember);
  };

  const handleModal = () => {
    setModalOpen(true);
  };

  return (
    <StContainer>
      <StButtonSection>
        {data.map((item) => (
          <StFilterMember
            key={item.id}
            onClick={() => selectedMemberHandler(item.member)}
            selected={selectedMember === item.member}
          >
            <StBox selected={selectedMember === item.member}>
              <img
                src={item.memberPhoto}
                alt=""
                width="120rem"
                style={{ objectFit: "cover" }}
              />
            </StBox>
            <span>{item.member}</span>
          </StFilterMember>
        ))}
      </StButtonSection>

      {modalOpen ? (
        <LetterForm setModalOpen={setModalOpen} />
      ) : (
        <InputBox onClick={handleModal}>
          아티스트를 위한 팬레터를 작성해주세요!
        </InputBox>
      )}

      <LetterList selectedMember={selectedMember} />
    </StContainer>
  );
}

export default Letter;
