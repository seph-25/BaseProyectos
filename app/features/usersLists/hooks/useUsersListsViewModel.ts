import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { STRING, USERS_LISTS } from "@/app/constants";
import type { User } from "../models/User.interface";
import type { UsersListsViewModel } from "../models/UsersListsViewModel.interface";

const useUsersListsViewModel = (): UsersListsViewModel => {
  const [username, setUsername] = useState<string>(
    STRING.Empty
  );
  const [userList, setUserList] = useState<User[]>([]);

  const handleUsernameChange = (
    event: ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
    >
  ): void => {
    setUsername(event.target.value);
  };

  const handleAddUser = (
    event: FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();

    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
      return;
    }

    setUserList((currentUserList) => [
      ...currentUserList,
      {
        id: globalThis.crypto.randomUUID(),
        name: trimmedUsername,
      },
    ]);
    setUsername(STRING.Empty);
  };

  const handleDeleteUser = (userId: string): void => {
    setUserList((currentUserList) =>
      currentUserList.filter((user) => user.id !== userId)
    );
  };

  return {
    addButtonDisabled: !username.trim(),
    addButtonLabel: USERS_LISTS.ADD_BUTTON,
    deleteButtonLabel: USERS_LISTS.DELETE_BUTTON,
    description: USERS_LISTS.DESCRIPTION,
    emptyMessage: USERS_LISTS.EMPTY_MESSAGE,
    handleAddUser,
    handleDeleteUser,
    handleUsernameChange,
    inputLabel: USERS_LISTS.INPUT_LABEL,
    inputPlaceholder: USERS_LISTS.INPUT_PLACEHOLDER,
    listTitle: USERS_LISTS.LIST_TITLE,
    sectionTitleId: USERS_LISTS.SECTION_TITLE_ID,
    title: USERS_LISTS.TITLE,
    userList,
    username,
  };
};

export default useUsersListsViewModel;