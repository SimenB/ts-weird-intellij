// ====================================================
// Types
// ====================================================

export interface Query {
  transaction?: Transaction | null;
}

export interface Transaction {
  id: string;

  description: string;
}

// ====================================================
// Arguments
// ====================================================

export interface TransactionQueryArgs {
  id: string;
}

import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export interface QueryResolvers<Context = {}, TypeParent = {}> {
  transaction?: QueryTransactionResolver<
    Transaction | null,
    TypeParent,
    Context
  >;
}

export type QueryTransactionResolver<
  R = Transaction | null,
  Parent = {},
  Context = {}
> = Resolver<R, Parent, Context, QueryTransactionArgs>;
export interface QueryTransactionArgs {
  id: string;
}

export interface TransactionResolvers<Context = {}, TypeParent = Transaction> {
  id?: TransactionIdResolver<string, TypeParent, Context>;

  description?: TransactionDescriptionResolver<string, TypeParent, Context>;
}

export type TransactionIdResolver<
  R = string,
  Parent = Transaction,
  Context = {}
> = Resolver<R, Parent, Context>;
export type TransactionDescriptionResolver<
  R = string,
  Parent = Transaction,
  Context = {}
> = Resolver<R, Parent, Context>;
