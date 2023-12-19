# Exercices

## React Redux

Installer Redux Toolkit : `npm i @reduxjs/toolkit`

Installer React Redux : `npm i react-redux`

Importer le dossier `store` du project précédent.

Dans `src/index.tsx` utiliser `Provider` de React Redux

Utiliser l'extension React DevTools et en particulier le dispatcher pour vérifier le bon fonctionnement du store en dispatchant des actions :

```
{
  type: 'todos/addTodo',
  payload: { id: 0.345634653464, title: 'XYZ', completed: false },
}
```

```
{
  type: 'todos/updateNewTodo',
  payload: 'XYZ123',
}
```

Dans `src/todos/Todos.tsx` remplacer `items` et `newTodos` venant de `useState` par 2 variables de mêmes noms qui récupère les clés correspondantes dans le state en utilisant `useSelector`

Remplacer les appels `setItems` et `setNewTodos` par 2 appel à `dispatch` (récupéré avec `useDispatch`) et les actions creators correspondants.

Implémenter la suppression de la todo (au click du bouton moins) en complétant les actions creators et le reducer.


