import * as Types from '../../../types/schemaTypes';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AddFavoriteComicMutationVariables = Types.Exact<{
  comicId: Types.Scalars['ID']['input'];
}>;


export type AddFavoriteComicMutation = { __typename?: 'Mutation', addFavoriteComic: { __typename?: 'Comic', id: string, isLiked?: boolean | null } };


export const AddFavoriteComicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddFavoriteComic"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comicId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addFavoriteComic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"comicId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comicId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}}]}}]}}]} as unknown as DocumentNode<AddFavoriteComicMutation, AddFavoriteComicMutationVariables>;