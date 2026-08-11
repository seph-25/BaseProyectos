import type { ChangeEvent, FormEvent } from "react";
import type { User } from "./User.interface";

export interface UsersListsViewModel {
  addButtonDisabled: boolean;
  addButtonLabel: string;
  deleteButtonLabel: string;
  description: string;
  emptyMessage: string;
  handleAddUser: (
    event: FormEvent<HTMLFormElement>
  ) => void;
  handleDeleteUser: (userId: string) => void;
  handleUsernameChange: (
    event: ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
    >
  ) => void;
  inputLabel: string;
  inputPlaceholder: string;
  listTitle: string;
  sectionTitleId: string;
  title: string;
  userList: User[];
  username: string;
}
