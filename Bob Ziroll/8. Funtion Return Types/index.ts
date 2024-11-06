type User = {
  id: number;
  name: string;
  role: UserRole;
};

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, name: "Pranaav", role: "admin" },
  { id: nextUserId++, name: "Vitthal", role: "guest" },
  { id: nextUserId++, name: "Joe", role: "member" },
];

function fetchUserDetails(username: string): User {
  const user = users.find((user) => user.name === username);
  if (!user) {
    throw new Error(`User with ${username} not found!!`);
  }
  return user;
}

function fetchUserRoles(username: string): User["role"] {
  const user = users.find((user) => user.name === username);
  if (!user) {
    throw new Error(`User with ${username} not found!!`);
  }
  return user.role;
}
