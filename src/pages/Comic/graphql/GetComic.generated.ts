import * as Types from '../../../types/schemaTypes';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ComicQueryVariables = Types.Exact<{
  comicId: Types.Scalars['ID']['input'];
}>;


export type ComicQuery = { __typename?: 'Query', comic: { __typename?: 'Comic', id: string, name: string, person_credits?: Array<string | null> | null, description: string, image: string, issue_number?: number | null, cover_date?: Date | null, volume?: number | null, publisher?: string | null, isLiked?: boolean | null } };


export const ComicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Comic"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comicId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comicId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"person_credits"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"issue_number"}},{"kind":"Field","name":{"kind":"Name","value":"cover_date"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}},{"kind":"Field","name":{"kind":"Name","value":"publisher"}},{"kind":"Field","name":{"kind":"Name","value":"isLiked"}}]}}]}}]} as unknown as DocumentNode<ComicQuery, ComicQueryVariables>;