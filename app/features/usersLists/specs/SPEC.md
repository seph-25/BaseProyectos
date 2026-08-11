# Users list feature

## Intent
Create a small user management feature that lets the user add a username and remove users from the list.

## In scope
- A title for the section
- A label with an input field for a new username
- An add action to insert the username into the list
- A list of all users
- A delete action for each user

## Out of scope
- Backend persistence
- User authentication
- Sorting or filtering

## Requirements
- The input should accept a username value and ignore empty or whitespace-only entries.
- Every new username should appear inside the list immediately.
- Each listed user should have a delete button.
- The list should update in real time after deletion.

## Edge cases & errors
- Empty values must not be added.
- The UI should remain usable even with multiple users.

## Constraints
- Reuse the project's shared component primitives (`Section`, `Title`, `FormField`, `Button`, `Text`).
- Keep the feature self-contained in `app/features/usersLists`.
- Store feature copy in `app/constants` and consume it from the ViewModel.

## Acceptance criteria
- [ ] The page shows a clear title.
- [ ] The user can enter a username with an associated label and input.
- [ ] The user can add a username to the list.
- [ ] The user can delete each username from the list.