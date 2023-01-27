export const SELECTED_USER = "SELECT_USER";

export const selectedUserAction = (selectedUser) => {
  return {
    type: SELECTED_USER,
    payload: selectedUser,
  };
};
