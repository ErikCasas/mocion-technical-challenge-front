import * as Types from '../../types/schemaTypes';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ComicsQueryVariables = Types.Exact<{
  comicsInput: Types.ComicsInput;
}>;


export type ComicsQuery = { __typename?: 'Query', comics: Array<{ __typename?: 'Comic', id: string, name: string, image: string, issue_number?: number | null, cover_date?: Date | null, volume?: number | null, publisher?: string | null, description: string, person_credits?: Array<string | null> | null }> };


export const ComicsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Comics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"comicsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ComicsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"comicsInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"comicsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"issue_number"}},{"kind":"Field","name":{"kind":"Name","value":"cover_date"}},{"kind":"Field","name":{"kind":"Name","value":"volume"}},{"kind":"Field","name":{"kind":"Name","value":"publisher"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"person_credits"}}]}}]}}]} as unknown as DocumentNode<ComicsQuery, ComicsQueryVariables>;