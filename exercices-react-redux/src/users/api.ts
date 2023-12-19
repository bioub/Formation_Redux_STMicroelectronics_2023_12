const baseApiUrl = 'https://jsonplaceholder.typicode.com';

export async function getAllUsers() {
  const res = await fetch(`${baseApiUrl}/users`);
  const data = await res.json();
  return data;
}

export async function getUserById(id: number) {
  const res = await fetch(`${baseApiUrl}/users/${id}`);
  const data = await res.json();
  return data;
}
