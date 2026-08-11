"use client";

import type { ReactElement } from "react";
import {
  Button,
  FormField,
  Section,
  Text,
  Title,
} from "@/app/components";
import {
  BUTTON,
  INPUT_TYPES,
  STRING,
  TitleVariant,
} from "@/app/constants";
import useUsersListsViewModel from "./hooks/useUsersListsViewModel";

const UsersLists = (): ReactElement => {
  const {
    addButtonDisabled,
    addButtonLabel,
    deleteButtonLabel,
    description,
    emptyMessage,
    handleAddUser,
    handleDeleteUser,
    handleUsernameChange,
    inputLabel,
    inputPlaceholder,
    listTitle,
    sectionTitleId,
    title,
    userList,
    username,
  } = useUsersListsViewModel();

  return (
    <Section
      ariaLabel={sectionTitleId}
      className="mx-auto flex w-full max-w-2xl flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="space-y-2">
        <Title
          id={sectionTitleId}
          variant={TitleVariant.SECONDARY}
          className="text-3xl font-bold tracking-tight text-slate-900"
        >
          {title}
        </Title>
        <Text className="text-sm text-slate-600">{description}</Text>
      </div>

      <form
        onSubmit={handleAddUser}
        className="flex flex-col gap-4 sm:flex-row"
      >
        <FormField
          id="username"
          name="username"
          label={inputLabel}
          value={username}
          onChange={handleUsernameChange}
          type={INPUT_TYPES.TEXT}
          placeholder={inputPlaceholder}
          labelSuffix={STRING.Empty}
          classNameField="rounded-xl border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white"
        />

        <Button
          type="submit"
          variant={BUTTON.BASE}
          disabled={addButtonDisabled}
          className="h-[48px] rounded-xl bg-sky-600 px-5 py-2 font-semibold text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {addButtonLabel}
        </Button>
      </form>

      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <Text className="text-lg font-semibold text-slate-900">
            {listTitle}
          </Text>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
            {userList.length} {userList.length === 1 ? "user" : "users"}
          </span>
        </div>

        {userList.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
            {emptyMessage}
          </div>
        ) : (
          <ul className="space-y-2">
            {userList.map((user) => (
              <li
                key={user.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
              >
                <span className="truncate font-medium text-slate-800">
                  {user.name}
                </span>
                <Button
                  type="button"
                  variant={BUTTON.BASE}
                  onClick={() => handleDeleteUser(user.id)}
                  className="rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                >
                  {deleteButtonLabel}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
};

export default UsersLists;