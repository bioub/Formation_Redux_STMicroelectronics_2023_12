# Exercices Redux

## Reducer

Compléter le reducer dans `src/store/reducer.ts` de façon traiter les 2 cas suivants :

- sur l'action type `'UPDATE_NEW_TODO'` mettre à jour la clé `newTodo` du state avec l'action payload

- sur l'action type `'ADD_TODO'` ajouter au tableau `items` la valeur de l'action payload

Vérifier en exécutant `npm start` que les résultats sont cohérents.

## Bonnes pratiques

Créer 2 actions creators dans `src/store/actions.ts` :

- `updateNewTodo` qui crééera l'action type `'UPDATE_NEW_TODO'`
- `addTodo` qui crééera l'action type `'ADD_TODO'`

Dans `src/index.ts` transformer les `dispatch` pour qu'il utiliser les actions creators.

Créer 3 selector dans `src/store/selectors.ts` :

- itemsSelector qui récupère la clé items du state
- newTodoSelector qui récupère la clé newTodo du state
- todosCompletedSelector qui récupère uniquement les todos dont la clé `completed` vaut `true`

Exemple :

```
import { RootState, Todo } from "./types";

export function todosCompletedSelector(state: RootState): Todo[] {

}
```

Dans `src/index.ts` transformer dans le `.subscribe` le `console.log` par :

```
console.log(todosCompletedSelector(store.getState()));
```

## Redux Toolkit

Désinstaller `redux`

Installer `@reduxjs/toolkit`

Dans `src/index.ts` remplacer `legacy_createStore` par `configureStore` de Redux Toolkit

Dans `src/actions.ts` remplacer les actions creators écrit manuellement par des actions creators générés avec `createAction`

Dans `src/reducers.ts` remplacer le reducer par `createReducer`, simplifier le code immuable en l'écrivant de façon muable et laisser Immer faire la transformation.



