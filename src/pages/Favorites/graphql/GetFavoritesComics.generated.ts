import * as Types from '../../../types/schemaTypes';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type FavoritesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type FavoritesQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, favoriteComics?: Array<{ __typename?: 'Comic', id: string, name: string, image: string }> | null } };


export const FavoritesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Favorites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"favoriteComics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<FavoritesQuery, FavoritesQueryVariables>;