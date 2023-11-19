const SELECT_MEMBER = "selectMember/SELECT_MEMBER";

export const selectMember = (payload) => {
  return { type: SELECT_MEMBER, payload };
};

const selectedMember = (state = "", action) => {
  switch (action.type) {
    case SELECT_MEMBER:
      return {
        selectedMember: action.payload,
      };
    default:
      return state;
  }
};

export default selectedMember;
