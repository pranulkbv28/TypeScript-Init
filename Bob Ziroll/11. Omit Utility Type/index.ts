/**
 * What does the Omit type do?
 * Omit takes in a type AND a string (or union of strings) property name(s), and returns a new type with those properties removed.
 */

const addNewUser = (
  newUser: Omit<
    User,
    "id" /* | "role" */
  > /* here, we are omitting the id and additionally we can omit multiple properties */
): User => {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
  return user;
};

addNewUser({ name: "New Joe", role: "guest" }); // the reason we are using Omit here and not Partial, is because we do not want to pass id in this, and at the same time, we do not want the other properties to be optional
