import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from '../context';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};


export type Query = {
  __typename?: 'Query';
  categoryPagination: CategoryPagination;
  ping: Ping;
  me: User;
};

export type Ping = {
  __typename?: 'Ping';
  fieldA: Scalars['String'];
  fieldB: Scalars['String'];
  fieldC: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  categoryCreate: Category;
  categoryUpdate: Category;
  categoryDelete: Category;
  login: Scalars['String'];
  register: User;
};


export type MutationCategoryCreateArgs = {
  input: CategoryCreateInput;
};


export type MutationCategoryUpdateArgs = {
  input: CategoryUpdateInput;
};


export type MutationCategoryDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  input?: Maybe<LoginInput>;
};


export type MutationRegisterArgs = {
  input?: Maybe<RegisterInput>;
};

export type CategoryPagination = {
  __typename?: 'CategoryPagination';
  items: Array<Category>;
  count: Scalars['Int'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  uid: Scalars['String'];
  slug: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  parent?: Maybe<Category>;
  children: Array<Category>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  uid: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
};

export type CategoryCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
};

export type CategoryUpdateInput = {
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<Partial<Scalars['DateTime']>>;
  Query: ResolverTypeWrapper<{}>;
  Ping: ResolverTypeWrapper<Partial<Ping>>;
  String: ResolverTypeWrapper<Partial<Scalars['String']>>;
  Mutation: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']>>;
  CategoryPagination: ResolverTypeWrapper<Partial<CategoryPagination>>;
  Category: ResolverTypeWrapper<Partial<Category>>;
  User: ResolverTypeWrapper<Partial<User>>;
  CategoryCreateInput: ResolverTypeWrapper<Partial<CategoryCreateInput>>;
  CategoryUpdateInput: ResolverTypeWrapper<Partial<CategoryUpdateInput>>;
  LoginInput: ResolverTypeWrapper<Partial<LoginInput>>;
  RegisterInput: ResolverTypeWrapper<Partial<RegisterInput>>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Partial<Scalars['DateTime']>;
  Query: {};
  Ping: Partial<Ping>;
  String: Partial<Scalars['String']>;
  Mutation: {};
  Int: Partial<Scalars['Int']>;
  CategoryPagination: Partial<CategoryPagination>;
  Category: Partial<Category>;
  User: Partial<User>;
  CategoryCreateInput: Partial<CategoryCreateInput>;
  CategoryUpdateInput: Partial<CategoryUpdateInput>;
  LoginInput: Partial<LoginInput>;
  RegisterInput: Partial<RegisterInput>;
  Boolean: Partial<Scalars['Boolean']>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  categoryPagination?: Resolver<ResolversTypes['CategoryPagination'], ParentType, ContextType>;
  ping?: Resolver<ResolversTypes['Ping'], ParentType, ContextType>;
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type PingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Ping'] = ResolversParentTypes['Ping']> = {
  fieldA?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldB?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldC?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  categoryCreate?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCategoryCreateArgs, 'input'>>;
  categoryUpdate?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCategoryUpdateArgs, 'input'>>;
  categoryDelete?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCategoryDeleteArgs, 'id'>>;
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationLoginArgs, never>>;
  register?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationRegisterArgs, never>>;
};

export type CategoryPaginationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CategoryPagination'] = ResolversParentTypes['CategoryPagination']> = {
  items?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  DateTime?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Ping?: PingResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  CategoryPagination?: CategoryPaginationResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
