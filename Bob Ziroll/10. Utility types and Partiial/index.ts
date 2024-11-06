/*
 * Like a function, they take other types in as a parameter and return a new type, with some changes made to it.
 * Built-in to TypeScript; perfor commonly-needed modifications to existing types
 * User "Generics" syntax using angle brackets (<>)
 */

/*
 * What does the Partial type do?
 * This modifies the type you pass in and turns all properties into optional properties.
 */

type UpdatedUser = Partial<User>; // this makes all the fields optional. So with this, you can only pass in the fields that you want to update.

const updateUser = (id: number, updates: UpdatedUser) => {
  const foundUser = users.find((user) => user.id === id);
  if (!foundUser) {
    throw new Error(`User with ${id} not found!!`);
  }
  Object.assign(foundUser, updates);
};
