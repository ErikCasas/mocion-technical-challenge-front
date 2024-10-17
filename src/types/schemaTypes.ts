export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: Date; output: Date; }
};

export type Comic = {
  __typename?: 'Comic';
  cover_date?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  issue_number?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  person_credits?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  publisher?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['Int']['output']>;
};

export type ComicsInput = {
  filter?: InputMaybe<FilterInput>;
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  nickname: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type FilterInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderByInput>;
  publisher?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type OrderByInput = {
  direction: SortDirection;
  field: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  comic: Comic;
  comics: Array<Comic>;
  user: User;
};


export type QueryComicArgs = {
  id: Scalars['ID']['input'];
};


export type QueryComicsArgs = {
  comicsInput: ComicsInput;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  favoriteComics?: Maybe<Array<Comic>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
};
