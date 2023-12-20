const baseApiUrl = 'https://jsonplaceholder.typicode.com';

export async function getAllTodos() {
  const res = await fetch(`${baseApiUrl}/todos`);
  const data = await res.json();
  return data;
}
