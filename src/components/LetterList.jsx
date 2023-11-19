import { LetterContext } from "context/LetterContext";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const StLetter = styled.ul`
  max-width: 650px;
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--mainWhite);
  border-radius: 1rem;
  transition: 0.3s;
  &:hover {
    background-color: #eee;
  }
`;

const ProFileContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 0 1rem 0;
  border-bottom: solid 1px #d4d4d4;
`;

const MemberProfile = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: gray;
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

const StContent = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 550px;
  height: 20px;
`;

const LetterList = ({ selectedMember }) => {
  const location = useLocation();
  const filteredLetters = location.state;

  const [letterList, setLetterList] = useContext(LetterContext);

  useEffect(() => {
    if (filteredLetters) setLetterList(filteredLetters);
  }, [filteredLetters]);

  return (
    <StList>
      {letterList
        .filter((item) => {
          return item.member === selectedMember || selectedMember === "";
        })
        .map((item) => {
          const {
            id,
            nickname,
            content,
            createdAt,
            member,
            avatar,
            memberPhoto,
          } = item;

          return (
            <Link
              to={`/letter/${id}`}
              key={id}
              state={{
                data: item,
              }}
            >
              <StLetter>
                <ProFileContainer>
                  <li>
                    <MemberProfile>
                      <img src={avatar} alt="" width="50px" />
                    </MemberProfile>
                    <span>From.{nickname}</span>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <MemberProfile>
                      <img
                        src={memberPhoto}
                        alt="member-profile"
                        width="50px"
                      />
                    </MemberProfile>
                    <span>To.{member}</span>
                  </li>
                </ProFileContainer>
                <li>{createdAt}</li>
                <StContent>{content}</StContent>
              </StLetter>
            </Link>
          );
        })}
    </StList>
  );
};

export default React.memo(LetterList);
