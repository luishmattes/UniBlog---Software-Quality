
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model T_Account
 * 
 */
export type T_Account = $Result.DefaultSelection<Prisma.$T_AccountPayload>
/**
 * Model T_Perfil
 * 
 */
export type T_Perfil = $Result.DefaultSelection<Prisma.$T_PerfilPayload>
/**
 * Model T_Post
 * 
 */
export type T_Post = $Result.DefaultSelection<Prisma.$T_PostPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more T_Accounts
 * const t_Accounts = await prisma.t_Account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more T_Accounts
   * const t_Accounts = await prisma.t_Account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.t_Account`: Exposes CRUD operations for the **T_Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_Accounts
    * const t_Accounts = await prisma.t_Account.findMany()
    * ```
    */
  get t_Account(): Prisma.T_AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_Perfil`: Exposes CRUD operations for the **T_Perfil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_Perfils
    * const t_Perfils = await prisma.t_Perfil.findMany()
    * ```
    */
  get t_Perfil(): Prisma.T_PerfilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.t_Post`: Exposes CRUD operations for the **T_Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more T_Posts
    * const t_Posts = await prisma.t_Post.findMany()
    * ```
    */
  get t_Post(): Prisma.T_PostDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    T_Account: 'T_Account',
    T_Perfil: 'T_Perfil',
    T_Post: 'T_Post'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "t_Account" | "t_Perfil" | "t_Post"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      T_Account: {
        payload: Prisma.$T_AccountPayload<ExtArgs>
        fields: Prisma.T_AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          findFirst: {
            args: Prisma.T_AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          findMany: {
            args: Prisma.T_AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>[]
          }
          create: {
            args: Prisma.T_AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          createMany: {
            args: Prisma.T_AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.T_AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>[]
          }
          delete: {
            args: Prisma.T_AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          update: {
            args: Prisma.T_AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          deleteMany: {
            args: Prisma.T_AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.T_AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.T_AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>[]
          }
          upsert: {
            args: Prisma.T_AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_AccountPayload>
          }
          aggregate: {
            args: Prisma.T_AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_Account>
          }
          groupBy: {
            args: Prisma.T_AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_AccountCountArgs<ExtArgs>
            result: $Utils.Optional<T_AccountCountAggregateOutputType> | number
          }
        }
      }
      T_Perfil: {
        payload: Prisma.$T_PerfilPayload<ExtArgs>
        fields: Prisma.T_PerfilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_PerfilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_PerfilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>
          }
          findFirst: {
            args: Prisma.T_PerfilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_PerfilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>
          }
          findMany: {
            args: Prisma.T_PerfilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>[]
          }
          create: {
            args: Prisma.T_PerfilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>
          }
          createMany: {
            args: Prisma.T_PerfilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.T_PerfilCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>[]
          }
          delete: {
            args: Prisma.T_PerfilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>
          }
          update: {
            args: Prisma.T_PerfilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>
          }
          deleteMany: {
            args: Prisma.T_PerfilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.T_PerfilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.T_PerfilUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>[]
          }
          upsert: {
            args: Prisma.T_PerfilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PerfilPayload>
          }
          aggregate: {
            args: Prisma.T_PerfilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_Perfil>
          }
          groupBy: {
            args: Prisma.T_PerfilGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_PerfilGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_PerfilCountArgs<ExtArgs>
            result: $Utils.Optional<T_PerfilCountAggregateOutputType> | number
          }
        }
      }
      T_Post: {
        payload: Prisma.$T_PostPayload<ExtArgs>
        fields: Prisma.T_PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.T_PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.T_PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>
          }
          findFirst: {
            args: Prisma.T_PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.T_PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>
          }
          findMany: {
            args: Prisma.T_PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>[]
          }
          create: {
            args: Prisma.T_PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>
          }
          createMany: {
            args: Prisma.T_PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.T_PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>[]
          }
          delete: {
            args: Prisma.T_PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>
          }
          update: {
            args: Prisma.T_PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>
          }
          deleteMany: {
            args: Prisma.T_PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.T_PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.T_PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>[]
          }
          upsert: {
            args: Prisma.T_PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$T_PostPayload>
          }
          aggregate: {
            args: Prisma.T_PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateT_Post>
          }
          groupBy: {
            args: Prisma.T_PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<T_PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.T_PostCountArgs<ExtArgs>
            result: $Utils.Optional<T_PostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    t_Account?: T_AccountOmit
    t_Perfil?: T_PerfilOmit
    t_Post?: T_PostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type T_AccountCountOutputType
   */

  export type T_AccountCountOutputType = {
    id_Perfil_Account: number
  }

  export type T_AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_Perfil_Account?: boolean | T_AccountCountOutputTypeCountId_Perfil_AccountArgs
  }

  // Custom InputTypes
  /**
   * T_AccountCountOutputType without action
   */
  export type T_AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_AccountCountOutputType
     */
    select?: T_AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * T_AccountCountOutputType without action
   */
  export type T_AccountCountOutputTypeCountId_Perfil_AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PerfilWhereInput
  }


  /**
   * Count Type T_PerfilCountOutputType
   */

  export type T_PerfilCountOutputType = {
    id_Post_Perfil: number
  }

  export type T_PerfilCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_Post_Perfil?: boolean | T_PerfilCountOutputTypeCountId_Post_PerfilArgs
  }

  // Custom InputTypes
  /**
   * T_PerfilCountOutputType without action
   */
  export type T_PerfilCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_PerfilCountOutputType
     */
    select?: T_PerfilCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * T_PerfilCountOutputType without action
   */
  export type T_PerfilCountOutputTypeCountId_Post_PerfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model T_Account
   */

  export type AggregateT_Account = {
    _count: T_AccountCountAggregateOutputType | null
    _avg: T_AccountAvgAggregateOutputType | null
    _sum: T_AccountSumAggregateOutputType | null
    _min: T_AccountMinAggregateOutputType | null
    _max: T_AccountMaxAggregateOutputType | null
  }

  export type T_AccountAvgAggregateOutputType = {
    id_Account: number | null
  }

  export type T_AccountSumAggregateOutputType = {
    id_Account: number | null
  }

  export type T_AccountMinAggregateOutputType = {
    id_Account: number | null
    nome_Account: string | null
    email_Account: string | null
    matricula_Account: string | null
    password_Account: string | null
    createdAt_Account: Date | null
    updatedAt_Account: Date | null
  }

  export type T_AccountMaxAggregateOutputType = {
    id_Account: number | null
    nome_Account: string | null
    email_Account: string | null
    matricula_Account: string | null
    password_Account: string | null
    createdAt_Account: Date | null
    updatedAt_Account: Date | null
  }

  export type T_AccountCountAggregateOutputType = {
    id_Account: number
    nome_Account: number
    email_Account: number
    matricula_Account: number
    password_Account: number
    createdAt_Account: number
    updatedAt_Account: number
    _all: number
  }


  export type T_AccountAvgAggregateInputType = {
    id_Account?: true
  }

  export type T_AccountSumAggregateInputType = {
    id_Account?: true
  }

  export type T_AccountMinAggregateInputType = {
    id_Account?: true
    nome_Account?: true
    email_Account?: true
    matricula_Account?: true
    password_Account?: true
    createdAt_Account?: true
    updatedAt_Account?: true
  }

  export type T_AccountMaxAggregateInputType = {
    id_Account?: true
    nome_Account?: true
    email_Account?: true
    matricula_Account?: true
    password_Account?: true
    createdAt_Account?: true
    updatedAt_Account?: true
  }

  export type T_AccountCountAggregateInputType = {
    id_Account?: true
    nome_Account?: true
    email_Account?: true
    matricula_Account?: true
    password_Account?: true
    createdAt_Account?: true
    updatedAt_Account?: true
    _all?: true
  }

  export type T_AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Account to aggregate.
     */
    where?: T_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Accounts to fetch.
     */
    orderBy?: T_AccountOrderByWithRelationInput | T_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_Accounts
    **/
    _count?: true | T_AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_AccountMaxAggregateInputType
  }

  export type GetT_AccountAggregateType<T extends T_AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateT_Account]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_Account[P]>
      : GetScalarType<T[P], AggregateT_Account[P]>
  }




  export type T_AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_AccountWhereInput
    orderBy?: T_AccountOrderByWithAggregationInput | T_AccountOrderByWithAggregationInput[]
    by: T_AccountScalarFieldEnum[] | T_AccountScalarFieldEnum
    having?: T_AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_AccountCountAggregateInputType | true
    _avg?: T_AccountAvgAggregateInputType
    _sum?: T_AccountSumAggregateInputType
    _min?: T_AccountMinAggregateInputType
    _max?: T_AccountMaxAggregateInputType
  }

  export type T_AccountGroupByOutputType = {
    id_Account: number
    nome_Account: string
    email_Account: string
    matricula_Account: string
    password_Account: string
    createdAt_Account: Date
    updatedAt_Account: Date
    _count: T_AccountCountAggregateOutputType | null
    _avg: T_AccountAvgAggregateOutputType | null
    _sum: T_AccountSumAggregateOutputType | null
    _min: T_AccountMinAggregateOutputType | null
    _max: T_AccountMaxAggregateOutputType | null
  }

  type GetT_AccountGroupByPayload<T extends T_AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_AccountGroupByOutputType[P]>
            : GetScalarType<T[P], T_AccountGroupByOutputType[P]>
        }
      >
    >


  export type T_AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Account?: boolean
    nome_Account?: boolean
    email_Account?: boolean
    matricula_Account?: boolean
    password_Account?: boolean
    createdAt_Account?: boolean
    updatedAt_Account?: boolean
    id_Perfil_Account?: boolean | T_Account$id_Perfil_AccountArgs<ExtArgs>
    _count?: boolean | T_AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Account"]>

  export type T_AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Account?: boolean
    nome_Account?: boolean
    email_Account?: boolean
    matricula_Account?: boolean
    password_Account?: boolean
    createdAt_Account?: boolean
    updatedAt_Account?: boolean
  }, ExtArgs["result"]["t_Account"]>

  export type T_AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Account?: boolean
    nome_Account?: boolean
    email_Account?: boolean
    matricula_Account?: boolean
    password_Account?: boolean
    createdAt_Account?: boolean
    updatedAt_Account?: boolean
  }, ExtArgs["result"]["t_Account"]>

  export type T_AccountSelectScalar = {
    id_Account?: boolean
    nome_Account?: boolean
    email_Account?: boolean
    matricula_Account?: boolean
    password_Account?: boolean
    createdAt_Account?: boolean
    updatedAt_Account?: boolean
  }

  export type T_AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Account" | "nome_Account" | "email_Account" | "matricula_Account" | "password_Account" | "createdAt_Account" | "updatedAt_Account", ExtArgs["result"]["t_Account"]>
  export type T_AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_Perfil_Account?: boolean | T_Account$id_Perfil_AccountArgs<ExtArgs>
    _count?: boolean | T_AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type T_AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type T_AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $T_AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_Account"
    objects: {
      id_Perfil_Account: Prisma.$T_PerfilPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Account: number
      nome_Account: string
      email_Account: string
      matricula_Account: string
      password_Account: string
      createdAt_Account: Date
      updatedAt_Account: Date
    }, ExtArgs["result"]["t_Account"]>
    composites: {}
  }

  type T_AccountGetPayload<S extends boolean | null | undefined | T_AccountDefaultArgs> = $Result.GetResult<Prisma.$T_AccountPayload, S>

  type T_AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<T_AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_AccountCountAggregateInputType | true
    }

  export interface T_AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_Account'], meta: { name: 'T_Account' } }
    /**
     * Find zero or one T_Account that matches the filter.
     * @param {T_AccountFindUniqueArgs} args - Arguments to find a T_Account
     * @example
     * // Get one T_Account
     * const t_Account = await prisma.t_Account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends T_AccountFindUniqueArgs>(args: SelectSubset<T, T_AccountFindUniqueArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {T_AccountFindUniqueOrThrowArgs} args - Arguments to find a T_Account
     * @example
     * // Get one T_Account
     * const t_Account = await prisma.t_Account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends T_AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, T_AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountFindFirstArgs} args - Arguments to find a T_Account
     * @example
     * // Get one T_Account
     * const t_Account = await prisma.t_Account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends T_AccountFindFirstArgs>(args?: SelectSubset<T, T_AccountFindFirstArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountFindFirstOrThrowArgs} args - Arguments to find a T_Account
     * @example
     * // Get one T_Account
     * const t_Account = await prisma.t_Account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends T_AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, T_AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_Accounts
     * const t_Accounts = await prisma.t_Account.findMany()
     * 
     * // Get first 10 T_Accounts
     * const t_Accounts = await prisma.t_Account.findMany({ take: 10 })
     * 
     * // Only select the `id_Account`
     * const t_AccountWithId_AccountOnly = await prisma.t_Account.findMany({ select: { id_Account: true } })
     * 
     */
    findMany<T extends T_AccountFindManyArgs>(args?: SelectSubset<T, T_AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_Account.
     * @param {T_AccountCreateArgs} args - Arguments to create a T_Account.
     * @example
     * // Create one T_Account
     * const T_Account = await prisma.t_Account.create({
     *   data: {
     *     // ... data to create a T_Account
     *   }
     * })
     * 
     */
    create<T extends T_AccountCreateArgs>(args: SelectSubset<T, T_AccountCreateArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_Accounts.
     * @param {T_AccountCreateManyArgs} args - Arguments to create many T_Accounts.
     * @example
     * // Create many T_Accounts
     * const t_Account = await prisma.t_Account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends T_AccountCreateManyArgs>(args?: SelectSubset<T, T_AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_Accounts and returns the data saved in the database.
     * @param {T_AccountCreateManyAndReturnArgs} args - Arguments to create many T_Accounts.
     * @example
     * // Create many T_Accounts
     * const t_Account = await prisma.t_Account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_Accounts and only return the `id_Account`
     * const t_AccountWithId_AccountOnly = await prisma.t_Account.createManyAndReturn({
     *   select: { id_Account: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends T_AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, T_AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_Account.
     * @param {T_AccountDeleteArgs} args - Arguments to delete one T_Account.
     * @example
     * // Delete one T_Account
     * const T_Account = await prisma.t_Account.delete({
     *   where: {
     *     // ... filter to delete one T_Account
     *   }
     * })
     * 
     */
    delete<T extends T_AccountDeleteArgs>(args: SelectSubset<T, T_AccountDeleteArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_Account.
     * @param {T_AccountUpdateArgs} args - Arguments to update one T_Account.
     * @example
     * // Update one T_Account
     * const t_Account = await prisma.t_Account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends T_AccountUpdateArgs>(args: SelectSubset<T, T_AccountUpdateArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_Accounts.
     * @param {T_AccountDeleteManyArgs} args - Arguments to filter T_Accounts to delete.
     * @example
     * // Delete a few T_Accounts
     * const { count } = await prisma.t_Account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends T_AccountDeleteManyArgs>(args?: SelectSubset<T, T_AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_Accounts
     * const t_Account = await prisma.t_Account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends T_AccountUpdateManyArgs>(args: SelectSubset<T, T_AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Accounts and returns the data updated in the database.
     * @param {T_AccountUpdateManyAndReturnArgs} args - Arguments to update many T_Accounts.
     * @example
     * // Update many T_Accounts
     * const t_Account = await prisma.t_Account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_Accounts and only return the `id_Account`
     * const t_AccountWithId_AccountOnly = await prisma.t_Account.updateManyAndReturn({
     *   select: { id_Account: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends T_AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, T_AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_Account.
     * @param {T_AccountUpsertArgs} args - Arguments to update or create a T_Account.
     * @example
     * // Update or create a T_Account
     * const t_Account = await prisma.t_Account.upsert({
     *   create: {
     *     // ... data to create a T_Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_Account we want to update
     *   }
     * })
     */
    upsert<T extends T_AccountUpsertArgs>(args: SelectSubset<T, T_AccountUpsertArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountCountArgs} args - Arguments to filter T_Accounts to count.
     * @example
     * // Count the number of T_Accounts
     * const count = await prisma.t_Account.count({
     *   where: {
     *     // ... the filter for the T_Accounts we want to count
     *   }
     * })
    **/
    count<T extends T_AccountCountArgs>(
      args?: Subset<T, T_AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_AccountAggregateArgs>(args: Subset<T, T_AccountAggregateArgs>): Prisma.PrismaPromise<GetT_AccountAggregateType<T>>

    /**
     * Group by T_Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends T_AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_AccountGroupByArgs['orderBy'] }
        : { orderBy?: T_AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, T_AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_AccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_Account model
   */
  readonly fields: T_AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    id_Perfil_Account<T extends T_Account$id_Perfil_AccountArgs<ExtArgs> = {}>(args?: Subset<T, T_Account$id_Perfil_AccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the T_Account model
   */
  interface T_AccountFieldRefs {
    readonly id_Account: FieldRef<"T_Account", 'Int'>
    readonly nome_Account: FieldRef<"T_Account", 'String'>
    readonly email_Account: FieldRef<"T_Account", 'String'>
    readonly matricula_Account: FieldRef<"T_Account", 'String'>
    readonly password_Account: FieldRef<"T_Account", 'String'>
    readonly createdAt_Account: FieldRef<"T_Account", 'DateTime'>
    readonly updatedAt_Account: FieldRef<"T_Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * T_Account findUnique
   */
  export type T_AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * Filter, which T_Account to fetch.
     */
    where: T_AccountWhereUniqueInput
  }

  /**
   * T_Account findUniqueOrThrow
   */
  export type T_AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * Filter, which T_Account to fetch.
     */
    where: T_AccountWhereUniqueInput
  }

  /**
   * T_Account findFirst
   */
  export type T_AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * Filter, which T_Account to fetch.
     */
    where?: T_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Accounts to fetch.
     */
    orderBy?: T_AccountOrderByWithRelationInput | T_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Accounts.
     */
    cursor?: T_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Accounts.
     */
    distinct?: T_AccountScalarFieldEnum | T_AccountScalarFieldEnum[]
  }

  /**
   * T_Account findFirstOrThrow
   */
  export type T_AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * Filter, which T_Account to fetch.
     */
    where?: T_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Accounts to fetch.
     */
    orderBy?: T_AccountOrderByWithRelationInput | T_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Accounts.
     */
    cursor?: T_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Accounts.
     */
    distinct?: T_AccountScalarFieldEnum | T_AccountScalarFieldEnum[]
  }

  /**
   * T_Account findMany
   */
  export type T_AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * Filter, which T_Accounts to fetch.
     */
    where?: T_AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Accounts to fetch.
     */
    orderBy?: T_AccountOrderByWithRelationInput | T_AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_Accounts.
     */
    cursor?: T_AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Accounts.
     */
    skip?: number
    distinct?: T_AccountScalarFieldEnum | T_AccountScalarFieldEnum[]
  }

  /**
   * T_Account create
   */
  export type T_AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a T_Account.
     */
    data: XOR<T_AccountCreateInput, T_AccountUncheckedCreateInput>
  }

  /**
   * T_Account createMany
   */
  export type T_AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_Accounts.
     */
    data: T_AccountCreateManyInput | T_AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_Account createManyAndReturn
   */
  export type T_AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * The data used to create many T_Accounts.
     */
    data: T_AccountCreateManyInput | T_AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_Account update
   */
  export type T_AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a T_Account.
     */
    data: XOR<T_AccountUpdateInput, T_AccountUncheckedUpdateInput>
    /**
     * Choose, which T_Account to update.
     */
    where: T_AccountWhereUniqueInput
  }

  /**
   * T_Account updateMany
   */
  export type T_AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_Accounts.
     */
    data: XOR<T_AccountUpdateManyMutationInput, T_AccountUncheckedUpdateManyInput>
    /**
     * Filter which T_Accounts to update
     */
    where?: T_AccountWhereInput
    /**
     * Limit how many T_Accounts to update.
     */
    limit?: number
  }

  /**
   * T_Account updateManyAndReturn
   */
  export type T_AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * The data used to update T_Accounts.
     */
    data: XOR<T_AccountUpdateManyMutationInput, T_AccountUncheckedUpdateManyInput>
    /**
     * Filter which T_Accounts to update
     */
    where?: T_AccountWhereInput
    /**
     * Limit how many T_Accounts to update.
     */
    limit?: number
  }

  /**
   * T_Account upsert
   */
  export type T_AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the T_Account to update in case it exists.
     */
    where: T_AccountWhereUniqueInput
    /**
     * In case the T_Account found by the `where` argument doesn't exist, create a new T_Account with this data.
     */
    create: XOR<T_AccountCreateInput, T_AccountUncheckedCreateInput>
    /**
     * In case the T_Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_AccountUpdateInput, T_AccountUncheckedUpdateInput>
  }

  /**
   * T_Account delete
   */
  export type T_AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
    /**
     * Filter which T_Account to delete.
     */
    where: T_AccountWhereUniqueInput
  }

  /**
   * T_Account deleteMany
   */
  export type T_AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Accounts to delete
     */
    where?: T_AccountWhereInput
    /**
     * Limit how many T_Accounts to delete.
     */
    limit?: number
  }

  /**
   * T_Account.id_Perfil_Account
   */
  export type T_Account$id_Perfil_AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    where?: T_PerfilWhereInput
    orderBy?: T_PerfilOrderByWithRelationInput | T_PerfilOrderByWithRelationInput[]
    cursor?: T_PerfilWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_PerfilScalarFieldEnum | T_PerfilScalarFieldEnum[]
  }

  /**
   * T_Account without action
   */
  export type T_AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Account
     */
    select?: T_AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Account
     */
    omit?: T_AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_AccountInclude<ExtArgs> | null
  }


  /**
   * Model T_Perfil
   */

  export type AggregateT_Perfil = {
    _count: T_PerfilCountAggregateOutputType | null
    _avg: T_PerfilAvgAggregateOutputType | null
    _sum: T_PerfilSumAggregateOutputType | null
    _min: T_PerfilMinAggregateOutputType | null
    _max: T_PerfilMaxAggregateOutputType | null
  }

  export type T_PerfilAvgAggregateOutputType = {
    id_Perfil: number | null
    id_Account_Perfil: number | null
  }

  export type T_PerfilSumAggregateOutputType = {
    id_Perfil: number | null
    id_Account_Perfil: number | null
  }

  export type T_PerfilMinAggregateOutputType = {
    id_Perfil: number | null
    nome_Perfil: string | null
    email_Perfil: string | null
    matricula_Perfil: string | null
    foto_Perfil: string | null
    descricao_Perfil: string | null
    createdAt_Perfil: Date | null
    updatedAt_Perfil: Date | null
    id_Account_Perfil: number | null
  }

  export type T_PerfilMaxAggregateOutputType = {
    id_Perfil: number | null
    nome_Perfil: string | null
    email_Perfil: string | null
    matricula_Perfil: string | null
    foto_Perfil: string | null
    descricao_Perfil: string | null
    createdAt_Perfil: Date | null
    updatedAt_Perfil: Date | null
    id_Account_Perfil: number | null
  }

  export type T_PerfilCountAggregateOutputType = {
    id_Perfil: number
    nome_Perfil: number
    email_Perfil: number
    matricula_Perfil: number
    foto_Perfil: number
    descricao_Perfil: number
    createdAt_Perfil: number
    updatedAt_Perfil: number
    id_Account_Perfil: number
    _all: number
  }


  export type T_PerfilAvgAggregateInputType = {
    id_Perfil?: true
    id_Account_Perfil?: true
  }

  export type T_PerfilSumAggregateInputType = {
    id_Perfil?: true
    id_Account_Perfil?: true
  }

  export type T_PerfilMinAggregateInputType = {
    id_Perfil?: true
    nome_Perfil?: true
    email_Perfil?: true
    matricula_Perfil?: true
    foto_Perfil?: true
    descricao_Perfil?: true
    createdAt_Perfil?: true
    updatedAt_Perfil?: true
    id_Account_Perfil?: true
  }

  export type T_PerfilMaxAggregateInputType = {
    id_Perfil?: true
    nome_Perfil?: true
    email_Perfil?: true
    matricula_Perfil?: true
    foto_Perfil?: true
    descricao_Perfil?: true
    createdAt_Perfil?: true
    updatedAt_Perfil?: true
    id_Account_Perfil?: true
  }

  export type T_PerfilCountAggregateInputType = {
    id_Perfil?: true
    nome_Perfil?: true
    email_Perfil?: true
    matricula_Perfil?: true
    foto_Perfil?: true
    descricao_Perfil?: true
    createdAt_Perfil?: true
    updatedAt_Perfil?: true
    id_Account_Perfil?: true
    _all?: true
  }

  export type T_PerfilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Perfil to aggregate.
     */
    where?: T_PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Perfils to fetch.
     */
    orderBy?: T_PerfilOrderByWithRelationInput | T_PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_Perfils
    **/
    _count?: true | T_PerfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_PerfilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_PerfilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_PerfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_PerfilMaxAggregateInputType
  }

  export type GetT_PerfilAggregateType<T extends T_PerfilAggregateArgs> = {
        [P in keyof T & keyof AggregateT_Perfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_Perfil[P]>
      : GetScalarType<T[P], AggregateT_Perfil[P]>
  }




  export type T_PerfilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PerfilWhereInput
    orderBy?: T_PerfilOrderByWithAggregationInput | T_PerfilOrderByWithAggregationInput[]
    by: T_PerfilScalarFieldEnum[] | T_PerfilScalarFieldEnum
    having?: T_PerfilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_PerfilCountAggregateInputType | true
    _avg?: T_PerfilAvgAggregateInputType
    _sum?: T_PerfilSumAggregateInputType
    _min?: T_PerfilMinAggregateInputType
    _max?: T_PerfilMaxAggregateInputType
  }

  export type T_PerfilGroupByOutputType = {
    id_Perfil: number
    nome_Perfil: string
    email_Perfil: string
    matricula_Perfil: string
    foto_Perfil: string | null
    descricao_Perfil: string | null
    createdAt_Perfil: Date
    updatedAt_Perfil: Date
    id_Account_Perfil: number
    _count: T_PerfilCountAggregateOutputType | null
    _avg: T_PerfilAvgAggregateOutputType | null
    _sum: T_PerfilSumAggregateOutputType | null
    _min: T_PerfilMinAggregateOutputType | null
    _max: T_PerfilMaxAggregateOutputType | null
  }

  type GetT_PerfilGroupByPayload<T extends T_PerfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_PerfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_PerfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_PerfilGroupByOutputType[P]>
            : GetScalarType<T[P], T_PerfilGroupByOutputType[P]>
        }
      >
    >


  export type T_PerfilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Perfil?: boolean
    nome_Perfil?: boolean
    email_Perfil?: boolean
    matricula_Perfil?: boolean
    foto_Perfil?: boolean
    descricao_Perfil?: boolean
    createdAt_Perfil?: boolean
    updatedAt_Perfil?: boolean
    id_Account_Perfil?: boolean
    idAccont_Perfil?: boolean | T_AccountDefaultArgs<ExtArgs>
    id_Post_Perfil?: boolean | T_Perfil$id_Post_PerfilArgs<ExtArgs>
    _count?: boolean | T_PerfilCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Perfil"]>

  export type T_PerfilSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Perfil?: boolean
    nome_Perfil?: boolean
    email_Perfil?: boolean
    matricula_Perfil?: boolean
    foto_Perfil?: boolean
    descricao_Perfil?: boolean
    createdAt_Perfil?: boolean
    updatedAt_Perfil?: boolean
    id_Account_Perfil?: boolean
    idAccont_Perfil?: boolean | T_AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Perfil"]>

  export type T_PerfilSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Perfil?: boolean
    nome_Perfil?: boolean
    email_Perfil?: boolean
    matricula_Perfil?: boolean
    foto_Perfil?: boolean
    descricao_Perfil?: boolean
    createdAt_Perfil?: boolean
    updatedAt_Perfil?: boolean
    id_Account_Perfil?: boolean
    idAccont_Perfil?: boolean | T_AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Perfil"]>

  export type T_PerfilSelectScalar = {
    id_Perfil?: boolean
    nome_Perfil?: boolean
    email_Perfil?: boolean
    matricula_Perfil?: boolean
    foto_Perfil?: boolean
    descricao_Perfil?: boolean
    createdAt_Perfil?: boolean
    updatedAt_Perfil?: boolean
    id_Account_Perfil?: boolean
  }

  export type T_PerfilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Perfil" | "nome_Perfil" | "email_Perfil" | "matricula_Perfil" | "foto_Perfil" | "descricao_Perfil" | "createdAt_Perfil" | "updatedAt_Perfil" | "id_Account_Perfil", ExtArgs["result"]["t_Perfil"]>
  export type T_PerfilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idAccont_Perfil?: boolean | T_AccountDefaultArgs<ExtArgs>
    id_Post_Perfil?: boolean | T_Perfil$id_Post_PerfilArgs<ExtArgs>
    _count?: boolean | T_PerfilCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type T_PerfilIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idAccont_Perfil?: boolean | T_AccountDefaultArgs<ExtArgs>
  }
  export type T_PerfilIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idAccont_Perfil?: boolean | T_AccountDefaultArgs<ExtArgs>
  }

  export type $T_PerfilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_Perfil"
    objects: {
      idAccont_Perfil: Prisma.$T_AccountPayload<ExtArgs>
      id_Post_Perfil: Prisma.$T_PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Perfil: number
      nome_Perfil: string
      email_Perfil: string
      matricula_Perfil: string
      foto_Perfil: string | null
      descricao_Perfil: string | null
      createdAt_Perfil: Date
      updatedAt_Perfil: Date
      id_Account_Perfil: number
    }, ExtArgs["result"]["t_Perfil"]>
    composites: {}
  }

  type T_PerfilGetPayload<S extends boolean | null | undefined | T_PerfilDefaultArgs> = $Result.GetResult<Prisma.$T_PerfilPayload, S>

  type T_PerfilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<T_PerfilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_PerfilCountAggregateInputType | true
    }

  export interface T_PerfilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_Perfil'], meta: { name: 'T_Perfil' } }
    /**
     * Find zero or one T_Perfil that matches the filter.
     * @param {T_PerfilFindUniqueArgs} args - Arguments to find a T_Perfil
     * @example
     * // Get one T_Perfil
     * const t_Perfil = await prisma.t_Perfil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends T_PerfilFindUniqueArgs>(args: SelectSubset<T, T_PerfilFindUniqueArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_Perfil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {T_PerfilFindUniqueOrThrowArgs} args - Arguments to find a T_Perfil
     * @example
     * // Get one T_Perfil
     * const t_Perfil = await prisma.t_Perfil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends T_PerfilFindUniqueOrThrowArgs>(args: SelectSubset<T, T_PerfilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Perfil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PerfilFindFirstArgs} args - Arguments to find a T_Perfil
     * @example
     * // Get one T_Perfil
     * const t_Perfil = await prisma.t_Perfil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends T_PerfilFindFirstArgs>(args?: SelectSubset<T, T_PerfilFindFirstArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Perfil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PerfilFindFirstOrThrowArgs} args - Arguments to find a T_Perfil
     * @example
     * // Get one T_Perfil
     * const t_Perfil = await prisma.t_Perfil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends T_PerfilFindFirstOrThrowArgs>(args?: SelectSubset<T, T_PerfilFindFirstOrThrowArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_Perfils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PerfilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_Perfils
     * const t_Perfils = await prisma.t_Perfil.findMany()
     * 
     * // Get first 10 T_Perfils
     * const t_Perfils = await prisma.t_Perfil.findMany({ take: 10 })
     * 
     * // Only select the `id_Perfil`
     * const t_PerfilWithId_PerfilOnly = await prisma.t_Perfil.findMany({ select: { id_Perfil: true } })
     * 
     */
    findMany<T extends T_PerfilFindManyArgs>(args?: SelectSubset<T, T_PerfilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_Perfil.
     * @param {T_PerfilCreateArgs} args - Arguments to create a T_Perfil.
     * @example
     * // Create one T_Perfil
     * const T_Perfil = await prisma.t_Perfil.create({
     *   data: {
     *     // ... data to create a T_Perfil
     *   }
     * })
     * 
     */
    create<T extends T_PerfilCreateArgs>(args: SelectSubset<T, T_PerfilCreateArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_Perfils.
     * @param {T_PerfilCreateManyArgs} args - Arguments to create many T_Perfils.
     * @example
     * // Create many T_Perfils
     * const t_Perfil = await prisma.t_Perfil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends T_PerfilCreateManyArgs>(args?: SelectSubset<T, T_PerfilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_Perfils and returns the data saved in the database.
     * @param {T_PerfilCreateManyAndReturnArgs} args - Arguments to create many T_Perfils.
     * @example
     * // Create many T_Perfils
     * const t_Perfil = await prisma.t_Perfil.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_Perfils and only return the `id_Perfil`
     * const t_PerfilWithId_PerfilOnly = await prisma.t_Perfil.createManyAndReturn({
     *   select: { id_Perfil: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends T_PerfilCreateManyAndReturnArgs>(args?: SelectSubset<T, T_PerfilCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_Perfil.
     * @param {T_PerfilDeleteArgs} args - Arguments to delete one T_Perfil.
     * @example
     * // Delete one T_Perfil
     * const T_Perfil = await prisma.t_Perfil.delete({
     *   where: {
     *     // ... filter to delete one T_Perfil
     *   }
     * })
     * 
     */
    delete<T extends T_PerfilDeleteArgs>(args: SelectSubset<T, T_PerfilDeleteArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_Perfil.
     * @param {T_PerfilUpdateArgs} args - Arguments to update one T_Perfil.
     * @example
     * // Update one T_Perfil
     * const t_Perfil = await prisma.t_Perfil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends T_PerfilUpdateArgs>(args: SelectSubset<T, T_PerfilUpdateArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_Perfils.
     * @param {T_PerfilDeleteManyArgs} args - Arguments to filter T_Perfils to delete.
     * @example
     * // Delete a few T_Perfils
     * const { count } = await prisma.t_Perfil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends T_PerfilDeleteManyArgs>(args?: SelectSubset<T, T_PerfilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PerfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_Perfils
     * const t_Perfil = await prisma.t_Perfil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends T_PerfilUpdateManyArgs>(args: SelectSubset<T, T_PerfilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Perfils and returns the data updated in the database.
     * @param {T_PerfilUpdateManyAndReturnArgs} args - Arguments to update many T_Perfils.
     * @example
     * // Update many T_Perfils
     * const t_Perfil = await prisma.t_Perfil.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_Perfils and only return the `id_Perfil`
     * const t_PerfilWithId_PerfilOnly = await prisma.t_Perfil.updateManyAndReturn({
     *   select: { id_Perfil: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends T_PerfilUpdateManyAndReturnArgs>(args: SelectSubset<T, T_PerfilUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_Perfil.
     * @param {T_PerfilUpsertArgs} args - Arguments to update or create a T_Perfil.
     * @example
     * // Update or create a T_Perfil
     * const t_Perfil = await prisma.t_Perfil.upsert({
     *   create: {
     *     // ... data to create a T_Perfil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_Perfil we want to update
     *   }
     * })
     */
    upsert<T extends T_PerfilUpsertArgs>(args: SelectSubset<T, T_PerfilUpsertArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PerfilCountArgs} args - Arguments to filter T_Perfils to count.
     * @example
     * // Count the number of T_Perfils
     * const count = await prisma.t_Perfil.count({
     *   where: {
     *     // ... the filter for the T_Perfils we want to count
     *   }
     * })
    **/
    count<T extends T_PerfilCountArgs>(
      args?: Subset<T, T_PerfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_PerfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PerfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_PerfilAggregateArgs>(args: Subset<T, T_PerfilAggregateArgs>): Prisma.PrismaPromise<GetT_PerfilAggregateType<T>>

    /**
     * Group by T_Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PerfilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends T_PerfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_PerfilGroupByArgs['orderBy'] }
        : { orderBy?: T_PerfilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, T_PerfilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_PerfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_Perfil model
   */
  readonly fields: T_PerfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_Perfil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_PerfilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    idAccont_Perfil<T extends T_AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, T_AccountDefaultArgs<ExtArgs>>): Prisma__T_AccountClient<$Result.GetResult<Prisma.$T_AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    id_Post_Perfil<T extends T_Perfil$id_Post_PerfilArgs<ExtArgs> = {}>(args?: Subset<T, T_Perfil$id_Post_PerfilArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the T_Perfil model
   */
  interface T_PerfilFieldRefs {
    readonly id_Perfil: FieldRef<"T_Perfil", 'Int'>
    readonly nome_Perfil: FieldRef<"T_Perfil", 'String'>
    readonly email_Perfil: FieldRef<"T_Perfil", 'String'>
    readonly matricula_Perfil: FieldRef<"T_Perfil", 'String'>
    readonly foto_Perfil: FieldRef<"T_Perfil", 'String'>
    readonly descricao_Perfil: FieldRef<"T_Perfil", 'String'>
    readonly createdAt_Perfil: FieldRef<"T_Perfil", 'DateTime'>
    readonly updatedAt_Perfil: FieldRef<"T_Perfil", 'DateTime'>
    readonly id_Account_Perfil: FieldRef<"T_Perfil", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * T_Perfil findUnique
   */
  export type T_PerfilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * Filter, which T_Perfil to fetch.
     */
    where: T_PerfilWhereUniqueInput
  }

  /**
   * T_Perfil findUniqueOrThrow
   */
  export type T_PerfilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * Filter, which T_Perfil to fetch.
     */
    where: T_PerfilWhereUniqueInput
  }

  /**
   * T_Perfil findFirst
   */
  export type T_PerfilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * Filter, which T_Perfil to fetch.
     */
    where?: T_PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Perfils to fetch.
     */
    orderBy?: T_PerfilOrderByWithRelationInput | T_PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Perfils.
     */
    cursor?: T_PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Perfils.
     */
    distinct?: T_PerfilScalarFieldEnum | T_PerfilScalarFieldEnum[]
  }

  /**
   * T_Perfil findFirstOrThrow
   */
  export type T_PerfilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * Filter, which T_Perfil to fetch.
     */
    where?: T_PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Perfils to fetch.
     */
    orderBy?: T_PerfilOrderByWithRelationInput | T_PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Perfils.
     */
    cursor?: T_PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Perfils.
     */
    distinct?: T_PerfilScalarFieldEnum | T_PerfilScalarFieldEnum[]
  }

  /**
   * T_Perfil findMany
   */
  export type T_PerfilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * Filter, which T_Perfils to fetch.
     */
    where?: T_PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Perfils to fetch.
     */
    orderBy?: T_PerfilOrderByWithRelationInput | T_PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_Perfils.
     */
    cursor?: T_PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Perfils.
     */
    skip?: number
    distinct?: T_PerfilScalarFieldEnum | T_PerfilScalarFieldEnum[]
  }

  /**
   * T_Perfil create
   */
  export type T_PerfilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * The data needed to create a T_Perfil.
     */
    data: XOR<T_PerfilCreateInput, T_PerfilUncheckedCreateInput>
  }

  /**
   * T_Perfil createMany
   */
  export type T_PerfilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_Perfils.
     */
    data: T_PerfilCreateManyInput | T_PerfilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_Perfil createManyAndReturn
   */
  export type T_PerfilCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * The data used to create many T_Perfils.
     */
    data: T_PerfilCreateManyInput | T_PerfilCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * T_Perfil update
   */
  export type T_PerfilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * The data needed to update a T_Perfil.
     */
    data: XOR<T_PerfilUpdateInput, T_PerfilUncheckedUpdateInput>
    /**
     * Choose, which T_Perfil to update.
     */
    where: T_PerfilWhereUniqueInput
  }

  /**
   * T_Perfil updateMany
   */
  export type T_PerfilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_Perfils.
     */
    data: XOR<T_PerfilUpdateManyMutationInput, T_PerfilUncheckedUpdateManyInput>
    /**
     * Filter which T_Perfils to update
     */
    where?: T_PerfilWhereInput
    /**
     * Limit how many T_Perfils to update.
     */
    limit?: number
  }

  /**
   * T_Perfil updateManyAndReturn
   */
  export type T_PerfilUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * The data used to update T_Perfils.
     */
    data: XOR<T_PerfilUpdateManyMutationInput, T_PerfilUncheckedUpdateManyInput>
    /**
     * Filter which T_Perfils to update
     */
    where?: T_PerfilWhereInput
    /**
     * Limit how many T_Perfils to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * T_Perfil upsert
   */
  export type T_PerfilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * The filter to search for the T_Perfil to update in case it exists.
     */
    where: T_PerfilWhereUniqueInput
    /**
     * In case the T_Perfil found by the `where` argument doesn't exist, create a new T_Perfil with this data.
     */
    create: XOR<T_PerfilCreateInput, T_PerfilUncheckedCreateInput>
    /**
     * In case the T_Perfil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_PerfilUpdateInput, T_PerfilUncheckedUpdateInput>
  }

  /**
   * T_Perfil delete
   */
  export type T_PerfilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
    /**
     * Filter which T_Perfil to delete.
     */
    where: T_PerfilWhereUniqueInput
  }

  /**
   * T_Perfil deleteMany
   */
  export type T_PerfilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Perfils to delete
     */
    where?: T_PerfilWhereInput
    /**
     * Limit how many T_Perfils to delete.
     */
    limit?: number
  }

  /**
   * T_Perfil.id_Post_Perfil
   */
  export type T_Perfil$id_Post_PerfilArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    where?: T_PostWhereInput
    orderBy?: T_PostOrderByWithRelationInput | T_PostOrderByWithRelationInput[]
    cursor?: T_PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: T_PostScalarFieldEnum | T_PostScalarFieldEnum[]
  }

  /**
   * T_Perfil without action
   */
  export type T_PerfilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Perfil
     */
    select?: T_PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Perfil
     */
    omit?: T_PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PerfilInclude<ExtArgs> | null
  }


  /**
   * Model T_Post
   */

  export type AggregateT_Post = {
    _count: T_PostCountAggregateOutputType | null
    _avg: T_PostAvgAggregateOutputType | null
    _sum: T_PostSumAggregateOutputType | null
    _min: T_PostMinAggregateOutputType | null
    _max: T_PostMaxAggregateOutputType | null
  }

  export type T_PostAvgAggregateOutputType = {
    id_Perfil_Post: number | null
  }

  export type T_PostSumAggregateOutputType = {
    id_Perfil_Post: number | null
  }

  export type T_PostMinAggregateOutputType = {
    id_Post: string | null
    title_Post: string | null
    content_Post: string | null
    image_Post: string | null
    createdAt_Post: Date | null
    updatedAt_Post: Date | null
    id_Perfil_Post: number | null
  }

  export type T_PostMaxAggregateOutputType = {
    id_Post: string | null
    title_Post: string | null
    content_Post: string | null
    image_Post: string | null
    createdAt_Post: Date | null
    updatedAt_Post: Date | null
    id_Perfil_Post: number | null
  }

  export type T_PostCountAggregateOutputType = {
    id_Post: number
    title_Post: number
    content_Post: number
    image_Post: number
    createdAt_Post: number
    updatedAt_Post: number
    id_Perfil_Post: number
    _all: number
  }


  export type T_PostAvgAggregateInputType = {
    id_Perfil_Post?: true
  }

  export type T_PostSumAggregateInputType = {
    id_Perfil_Post?: true
  }

  export type T_PostMinAggregateInputType = {
    id_Post?: true
    title_Post?: true
    content_Post?: true
    image_Post?: true
    createdAt_Post?: true
    updatedAt_Post?: true
    id_Perfil_Post?: true
  }

  export type T_PostMaxAggregateInputType = {
    id_Post?: true
    title_Post?: true
    content_Post?: true
    image_Post?: true
    createdAt_Post?: true
    updatedAt_Post?: true
    id_Perfil_Post?: true
  }

  export type T_PostCountAggregateInputType = {
    id_Post?: true
    title_Post?: true
    content_Post?: true
    image_Post?: true
    createdAt_Post?: true
    updatedAt_Post?: true
    id_Perfil_Post?: true
    _all?: true
  }

  export type T_PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Post to aggregate.
     */
    where?: T_PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Posts to fetch.
     */
    orderBy?: T_PostOrderByWithRelationInput | T_PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: T_PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned T_Posts
    **/
    _count?: true | T_PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: T_PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: T_PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: T_PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: T_PostMaxAggregateInputType
  }

  export type GetT_PostAggregateType<T extends T_PostAggregateArgs> = {
        [P in keyof T & keyof AggregateT_Post]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateT_Post[P]>
      : GetScalarType<T[P], AggregateT_Post[P]>
  }




  export type T_PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: T_PostWhereInput
    orderBy?: T_PostOrderByWithAggregationInput | T_PostOrderByWithAggregationInput[]
    by: T_PostScalarFieldEnum[] | T_PostScalarFieldEnum
    having?: T_PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: T_PostCountAggregateInputType | true
    _avg?: T_PostAvgAggregateInputType
    _sum?: T_PostSumAggregateInputType
    _min?: T_PostMinAggregateInputType
    _max?: T_PostMaxAggregateInputType
  }

  export type T_PostGroupByOutputType = {
    id_Post: string
    title_Post: string | null
    content_Post: string | null
    image_Post: string | null
    createdAt_Post: Date
    updatedAt_Post: Date
    id_Perfil_Post: number
    _count: T_PostCountAggregateOutputType | null
    _avg: T_PostAvgAggregateOutputType | null
    _sum: T_PostSumAggregateOutputType | null
    _min: T_PostMinAggregateOutputType | null
    _max: T_PostMaxAggregateOutputType | null
  }

  type GetT_PostGroupByPayload<T extends T_PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<T_PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof T_PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], T_PostGroupByOutputType[P]>
            : GetScalarType<T[P], T_PostGroupByOutputType[P]>
        }
      >
    >


  export type T_PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Post?: boolean
    title_Post?: boolean
    content_Post?: boolean
    image_Post?: boolean
    createdAt_Post?: boolean
    updatedAt_Post?: boolean
    id_Perfil_Post?: boolean
    idPerfil_Post?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Post"]>

  export type T_PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Post?: boolean
    title_Post?: boolean
    content_Post?: boolean
    image_Post?: boolean
    createdAt_Post?: boolean
    updatedAt_Post?: boolean
    id_Perfil_Post?: boolean
    idPerfil_Post?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Post"]>

  export type T_PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Post?: boolean
    title_Post?: boolean
    content_Post?: boolean
    image_Post?: boolean
    createdAt_Post?: boolean
    updatedAt_Post?: boolean
    id_Perfil_Post?: boolean
    idPerfil_Post?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["t_Post"]>

  export type T_PostSelectScalar = {
    id_Post?: boolean
    title_Post?: boolean
    content_Post?: boolean
    image_Post?: boolean
    createdAt_Post?: boolean
    updatedAt_Post?: boolean
    id_Perfil_Post?: boolean
  }

  export type T_PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Post" | "title_Post" | "content_Post" | "image_Post" | "createdAt_Post" | "updatedAt_Post" | "id_Perfil_Post", ExtArgs["result"]["t_Post"]>
  export type T_PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idPerfil_Post?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }
  export type T_PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idPerfil_Post?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }
  export type T_PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    idPerfil_Post?: boolean | T_PerfilDefaultArgs<ExtArgs>
  }

  export type $T_PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "T_Post"
    objects: {
      idPerfil_Post: Prisma.$T_PerfilPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Post: string
      title_Post: string | null
      content_Post: string | null
      image_Post: string | null
      createdAt_Post: Date
      updatedAt_Post: Date
      id_Perfil_Post: number
    }, ExtArgs["result"]["t_Post"]>
    composites: {}
  }

  type T_PostGetPayload<S extends boolean | null | undefined | T_PostDefaultArgs> = $Result.GetResult<Prisma.$T_PostPayload, S>

  type T_PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<T_PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: T_PostCountAggregateInputType | true
    }

  export interface T_PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['T_Post'], meta: { name: 'T_Post' } }
    /**
     * Find zero or one T_Post that matches the filter.
     * @param {T_PostFindUniqueArgs} args - Arguments to find a T_Post
     * @example
     * // Get one T_Post
     * const t_Post = await prisma.t_Post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends T_PostFindUniqueArgs>(args: SelectSubset<T, T_PostFindUniqueArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one T_Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {T_PostFindUniqueOrThrowArgs} args - Arguments to find a T_Post
     * @example
     * // Get one T_Post
     * const t_Post = await prisma.t_Post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends T_PostFindUniqueOrThrowArgs>(args: SelectSubset<T, T_PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostFindFirstArgs} args - Arguments to find a T_Post
     * @example
     * // Get one T_Post
     * const t_Post = await prisma.t_Post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends T_PostFindFirstArgs>(args?: SelectSubset<T, T_PostFindFirstArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first T_Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostFindFirstOrThrowArgs} args - Arguments to find a T_Post
     * @example
     * // Get one T_Post
     * const t_Post = await prisma.t_Post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends T_PostFindFirstOrThrowArgs>(args?: SelectSubset<T, T_PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more T_Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all T_Posts
     * const t_Posts = await prisma.t_Post.findMany()
     * 
     * // Get first 10 T_Posts
     * const t_Posts = await prisma.t_Post.findMany({ take: 10 })
     * 
     * // Only select the `id_Post`
     * const t_PostWithId_PostOnly = await prisma.t_Post.findMany({ select: { id_Post: true } })
     * 
     */
    findMany<T extends T_PostFindManyArgs>(args?: SelectSubset<T, T_PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a T_Post.
     * @param {T_PostCreateArgs} args - Arguments to create a T_Post.
     * @example
     * // Create one T_Post
     * const T_Post = await prisma.t_Post.create({
     *   data: {
     *     // ... data to create a T_Post
     *   }
     * })
     * 
     */
    create<T extends T_PostCreateArgs>(args: SelectSubset<T, T_PostCreateArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many T_Posts.
     * @param {T_PostCreateManyArgs} args - Arguments to create many T_Posts.
     * @example
     * // Create many T_Posts
     * const t_Post = await prisma.t_Post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends T_PostCreateManyArgs>(args?: SelectSubset<T, T_PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many T_Posts and returns the data saved in the database.
     * @param {T_PostCreateManyAndReturnArgs} args - Arguments to create many T_Posts.
     * @example
     * // Create many T_Posts
     * const t_Post = await prisma.t_Post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many T_Posts and only return the `id_Post`
     * const t_PostWithId_PostOnly = await prisma.t_Post.createManyAndReturn({
     *   select: { id_Post: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends T_PostCreateManyAndReturnArgs>(args?: SelectSubset<T, T_PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a T_Post.
     * @param {T_PostDeleteArgs} args - Arguments to delete one T_Post.
     * @example
     * // Delete one T_Post
     * const T_Post = await prisma.t_Post.delete({
     *   where: {
     *     // ... filter to delete one T_Post
     *   }
     * })
     * 
     */
    delete<T extends T_PostDeleteArgs>(args: SelectSubset<T, T_PostDeleteArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one T_Post.
     * @param {T_PostUpdateArgs} args - Arguments to update one T_Post.
     * @example
     * // Update one T_Post
     * const t_Post = await prisma.t_Post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends T_PostUpdateArgs>(args: SelectSubset<T, T_PostUpdateArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more T_Posts.
     * @param {T_PostDeleteManyArgs} args - Arguments to filter T_Posts to delete.
     * @example
     * // Delete a few T_Posts
     * const { count } = await prisma.t_Post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends T_PostDeleteManyArgs>(args?: SelectSubset<T, T_PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many T_Posts
     * const t_Post = await prisma.t_Post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends T_PostUpdateManyArgs>(args: SelectSubset<T, T_PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more T_Posts and returns the data updated in the database.
     * @param {T_PostUpdateManyAndReturnArgs} args - Arguments to update many T_Posts.
     * @example
     * // Update many T_Posts
     * const t_Post = await prisma.t_Post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more T_Posts and only return the `id_Post`
     * const t_PostWithId_PostOnly = await prisma.t_Post.updateManyAndReturn({
     *   select: { id_Post: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends T_PostUpdateManyAndReturnArgs>(args: SelectSubset<T, T_PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one T_Post.
     * @param {T_PostUpsertArgs} args - Arguments to update or create a T_Post.
     * @example
     * // Update or create a T_Post
     * const t_Post = await prisma.t_Post.upsert({
     *   create: {
     *     // ... data to create a T_Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the T_Post we want to update
     *   }
     * })
     */
    upsert<T extends T_PostUpsertArgs>(args: SelectSubset<T, T_PostUpsertArgs<ExtArgs>>): Prisma__T_PostClient<$Result.GetResult<Prisma.$T_PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of T_Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostCountArgs} args - Arguments to filter T_Posts to count.
     * @example
     * // Count the number of T_Posts
     * const count = await prisma.t_Post.count({
     *   where: {
     *     // ... the filter for the T_Posts we want to count
     *   }
     * })
    **/
    count<T extends T_PostCountArgs>(
      args?: Subset<T, T_PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], T_PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a T_Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends T_PostAggregateArgs>(args: Subset<T, T_PostAggregateArgs>): Prisma.PrismaPromise<GetT_PostAggregateType<T>>

    /**
     * Group by T_Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {T_PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends T_PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: T_PostGroupByArgs['orderBy'] }
        : { orderBy?: T_PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, T_PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetT_PostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the T_Post model
   */
  readonly fields: T_PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for T_Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__T_PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    idPerfil_Post<T extends T_PerfilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, T_PerfilDefaultArgs<ExtArgs>>): Prisma__T_PerfilClient<$Result.GetResult<Prisma.$T_PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the T_Post model
   */
  interface T_PostFieldRefs {
    readonly id_Post: FieldRef<"T_Post", 'String'>
    readonly title_Post: FieldRef<"T_Post", 'String'>
    readonly content_Post: FieldRef<"T_Post", 'String'>
    readonly image_Post: FieldRef<"T_Post", 'String'>
    readonly createdAt_Post: FieldRef<"T_Post", 'DateTime'>
    readonly updatedAt_Post: FieldRef<"T_Post", 'DateTime'>
    readonly id_Perfil_Post: FieldRef<"T_Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * T_Post findUnique
   */
  export type T_PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * Filter, which T_Post to fetch.
     */
    where: T_PostWhereUniqueInput
  }

  /**
   * T_Post findUniqueOrThrow
   */
  export type T_PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * Filter, which T_Post to fetch.
     */
    where: T_PostWhereUniqueInput
  }

  /**
   * T_Post findFirst
   */
  export type T_PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * Filter, which T_Post to fetch.
     */
    where?: T_PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Posts to fetch.
     */
    orderBy?: T_PostOrderByWithRelationInput | T_PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Posts.
     */
    cursor?: T_PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Posts.
     */
    distinct?: T_PostScalarFieldEnum | T_PostScalarFieldEnum[]
  }

  /**
   * T_Post findFirstOrThrow
   */
  export type T_PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * Filter, which T_Post to fetch.
     */
    where?: T_PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Posts to fetch.
     */
    orderBy?: T_PostOrderByWithRelationInput | T_PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for T_Posts.
     */
    cursor?: T_PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of T_Posts.
     */
    distinct?: T_PostScalarFieldEnum | T_PostScalarFieldEnum[]
  }

  /**
   * T_Post findMany
   */
  export type T_PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * Filter, which T_Posts to fetch.
     */
    where?: T_PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of T_Posts to fetch.
     */
    orderBy?: T_PostOrderByWithRelationInput | T_PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing T_Posts.
     */
    cursor?: T_PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` T_Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` T_Posts.
     */
    skip?: number
    distinct?: T_PostScalarFieldEnum | T_PostScalarFieldEnum[]
  }

  /**
   * T_Post create
   */
  export type T_PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * The data needed to create a T_Post.
     */
    data: XOR<T_PostCreateInput, T_PostUncheckedCreateInput>
  }

  /**
   * T_Post createMany
   */
  export type T_PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many T_Posts.
     */
    data: T_PostCreateManyInput | T_PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * T_Post createManyAndReturn
   */
  export type T_PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * The data used to create many T_Posts.
     */
    data: T_PostCreateManyInput | T_PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * T_Post update
   */
  export type T_PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * The data needed to update a T_Post.
     */
    data: XOR<T_PostUpdateInput, T_PostUncheckedUpdateInput>
    /**
     * Choose, which T_Post to update.
     */
    where: T_PostWhereUniqueInput
  }

  /**
   * T_Post updateMany
   */
  export type T_PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update T_Posts.
     */
    data: XOR<T_PostUpdateManyMutationInput, T_PostUncheckedUpdateManyInput>
    /**
     * Filter which T_Posts to update
     */
    where?: T_PostWhereInput
    /**
     * Limit how many T_Posts to update.
     */
    limit?: number
  }

  /**
   * T_Post updateManyAndReturn
   */
  export type T_PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * The data used to update T_Posts.
     */
    data: XOR<T_PostUpdateManyMutationInput, T_PostUncheckedUpdateManyInput>
    /**
     * Filter which T_Posts to update
     */
    where?: T_PostWhereInput
    /**
     * Limit how many T_Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * T_Post upsert
   */
  export type T_PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * The filter to search for the T_Post to update in case it exists.
     */
    where: T_PostWhereUniqueInput
    /**
     * In case the T_Post found by the `where` argument doesn't exist, create a new T_Post with this data.
     */
    create: XOR<T_PostCreateInput, T_PostUncheckedCreateInput>
    /**
     * In case the T_Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<T_PostUpdateInput, T_PostUncheckedUpdateInput>
  }

  /**
   * T_Post delete
   */
  export type T_PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
    /**
     * Filter which T_Post to delete.
     */
    where: T_PostWhereUniqueInput
  }

  /**
   * T_Post deleteMany
   */
  export type T_PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which T_Posts to delete
     */
    where?: T_PostWhereInput
    /**
     * Limit how many T_Posts to delete.
     */
    limit?: number
  }

  /**
   * T_Post without action
   */
  export type T_PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the T_Post
     */
    select?: T_PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the T_Post
     */
    omit?: T_PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: T_PostInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const T_AccountScalarFieldEnum: {
    id_Account: 'id_Account',
    nome_Account: 'nome_Account',
    email_Account: 'email_Account',
    matricula_Account: 'matricula_Account',
    password_Account: 'password_Account',
    createdAt_Account: 'createdAt_Account',
    updatedAt_Account: 'updatedAt_Account'
  };

  export type T_AccountScalarFieldEnum = (typeof T_AccountScalarFieldEnum)[keyof typeof T_AccountScalarFieldEnum]


  export const T_PerfilScalarFieldEnum: {
    id_Perfil: 'id_Perfil',
    nome_Perfil: 'nome_Perfil',
    email_Perfil: 'email_Perfil',
    matricula_Perfil: 'matricula_Perfil',
    foto_Perfil: 'foto_Perfil',
    descricao_Perfil: 'descricao_Perfil',
    createdAt_Perfil: 'createdAt_Perfil',
    updatedAt_Perfil: 'updatedAt_Perfil',
    id_Account_Perfil: 'id_Account_Perfil'
  };

  export type T_PerfilScalarFieldEnum = (typeof T_PerfilScalarFieldEnum)[keyof typeof T_PerfilScalarFieldEnum]


  export const T_PostScalarFieldEnum: {
    id_Post: 'id_Post',
    title_Post: 'title_Post',
    content_Post: 'content_Post',
    image_Post: 'image_Post',
    createdAt_Post: 'createdAt_Post',
    updatedAt_Post: 'updatedAt_Post',
    id_Perfil_Post: 'id_Perfil_Post'
  };

  export type T_PostScalarFieldEnum = (typeof T_PostScalarFieldEnum)[keyof typeof T_PostScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type T_AccountWhereInput = {
    AND?: T_AccountWhereInput | T_AccountWhereInput[]
    OR?: T_AccountWhereInput[]
    NOT?: T_AccountWhereInput | T_AccountWhereInput[]
    id_Account?: IntFilter<"T_Account"> | number
    nome_Account?: StringFilter<"T_Account"> | string
    email_Account?: StringFilter<"T_Account"> | string
    matricula_Account?: StringFilter<"T_Account"> | string
    password_Account?: StringFilter<"T_Account"> | string
    createdAt_Account?: DateTimeFilter<"T_Account"> | Date | string
    updatedAt_Account?: DateTimeFilter<"T_Account"> | Date | string
    id_Perfil_Account?: T_PerfilListRelationFilter
  }

  export type T_AccountOrderByWithRelationInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    matricula_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
    id_Perfil_Account?: T_PerfilOrderByRelationAggregateInput
  }

  export type T_AccountWhereUniqueInput = Prisma.AtLeast<{
    id_Account?: number
    email_Account?: string
    matricula_Account?: string
    AND?: T_AccountWhereInput | T_AccountWhereInput[]
    OR?: T_AccountWhereInput[]
    NOT?: T_AccountWhereInput | T_AccountWhereInput[]
    nome_Account?: StringFilter<"T_Account"> | string
    password_Account?: StringFilter<"T_Account"> | string
    createdAt_Account?: DateTimeFilter<"T_Account"> | Date | string
    updatedAt_Account?: DateTimeFilter<"T_Account"> | Date | string
    id_Perfil_Account?: T_PerfilListRelationFilter
  }, "id_Account" | "email_Account" | "matricula_Account">

  export type T_AccountOrderByWithAggregationInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    matricula_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
    _count?: T_AccountCountOrderByAggregateInput
    _avg?: T_AccountAvgOrderByAggregateInput
    _max?: T_AccountMaxOrderByAggregateInput
    _min?: T_AccountMinOrderByAggregateInput
    _sum?: T_AccountSumOrderByAggregateInput
  }

  export type T_AccountScalarWhereWithAggregatesInput = {
    AND?: T_AccountScalarWhereWithAggregatesInput | T_AccountScalarWhereWithAggregatesInput[]
    OR?: T_AccountScalarWhereWithAggregatesInput[]
    NOT?: T_AccountScalarWhereWithAggregatesInput | T_AccountScalarWhereWithAggregatesInput[]
    id_Account?: IntWithAggregatesFilter<"T_Account"> | number
    nome_Account?: StringWithAggregatesFilter<"T_Account"> | string
    email_Account?: StringWithAggregatesFilter<"T_Account"> | string
    matricula_Account?: StringWithAggregatesFilter<"T_Account"> | string
    password_Account?: StringWithAggregatesFilter<"T_Account"> | string
    createdAt_Account?: DateTimeWithAggregatesFilter<"T_Account"> | Date | string
    updatedAt_Account?: DateTimeWithAggregatesFilter<"T_Account"> | Date | string
  }

  export type T_PerfilWhereInput = {
    AND?: T_PerfilWhereInput | T_PerfilWhereInput[]
    OR?: T_PerfilWhereInput[]
    NOT?: T_PerfilWhereInput | T_PerfilWhereInput[]
    id_Perfil?: IntFilter<"T_Perfil"> | number
    nome_Perfil?: StringFilter<"T_Perfil"> | string
    email_Perfil?: StringFilter<"T_Perfil"> | string
    matricula_Perfil?: StringFilter<"T_Perfil"> | string
    foto_Perfil?: StringNullableFilter<"T_Perfil"> | string | null
    descricao_Perfil?: StringNullableFilter<"T_Perfil"> | string | null
    createdAt_Perfil?: DateTimeFilter<"T_Perfil"> | Date | string
    updatedAt_Perfil?: DateTimeFilter<"T_Perfil"> | Date | string
    id_Account_Perfil?: IntFilter<"T_Perfil"> | number
    idAccont_Perfil?: XOR<T_AccountScalarRelationFilter, T_AccountWhereInput>
    id_Post_Perfil?: T_PostListRelationFilter
  }

  export type T_PerfilOrderByWithRelationInput = {
    id_Perfil?: SortOrder
    nome_Perfil?: SortOrder
    email_Perfil?: SortOrder
    matricula_Perfil?: SortOrder
    foto_Perfil?: SortOrderInput | SortOrder
    descricao_Perfil?: SortOrderInput | SortOrder
    createdAt_Perfil?: SortOrder
    updatedAt_Perfil?: SortOrder
    id_Account_Perfil?: SortOrder
    idAccont_Perfil?: T_AccountOrderByWithRelationInput
    id_Post_Perfil?: T_PostOrderByRelationAggregateInput
  }

  export type T_PerfilWhereUniqueInput = Prisma.AtLeast<{
    id_Perfil?: number
    email_Perfil?: string
    matricula_Perfil?: string
    AND?: T_PerfilWhereInput | T_PerfilWhereInput[]
    OR?: T_PerfilWhereInput[]
    NOT?: T_PerfilWhereInput | T_PerfilWhereInput[]
    nome_Perfil?: StringFilter<"T_Perfil"> | string
    foto_Perfil?: StringNullableFilter<"T_Perfil"> | string | null
    descricao_Perfil?: StringNullableFilter<"T_Perfil"> | string | null
    createdAt_Perfil?: DateTimeFilter<"T_Perfil"> | Date | string
    updatedAt_Perfil?: DateTimeFilter<"T_Perfil"> | Date | string
    id_Account_Perfil?: IntFilter<"T_Perfil"> | number
    idAccont_Perfil?: XOR<T_AccountScalarRelationFilter, T_AccountWhereInput>
    id_Post_Perfil?: T_PostListRelationFilter
  }, "id_Perfil" | "email_Perfil" | "matricula_Perfil">

  export type T_PerfilOrderByWithAggregationInput = {
    id_Perfil?: SortOrder
    nome_Perfil?: SortOrder
    email_Perfil?: SortOrder
    matricula_Perfil?: SortOrder
    foto_Perfil?: SortOrderInput | SortOrder
    descricao_Perfil?: SortOrderInput | SortOrder
    createdAt_Perfil?: SortOrder
    updatedAt_Perfil?: SortOrder
    id_Account_Perfil?: SortOrder
    _count?: T_PerfilCountOrderByAggregateInput
    _avg?: T_PerfilAvgOrderByAggregateInput
    _max?: T_PerfilMaxOrderByAggregateInput
    _min?: T_PerfilMinOrderByAggregateInput
    _sum?: T_PerfilSumOrderByAggregateInput
  }

  export type T_PerfilScalarWhereWithAggregatesInput = {
    AND?: T_PerfilScalarWhereWithAggregatesInput | T_PerfilScalarWhereWithAggregatesInput[]
    OR?: T_PerfilScalarWhereWithAggregatesInput[]
    NOT?: T_PerfilScalarWhereWithAggregatesInput | T_PerfilScalarWhereWithAggregatesInput[]
    id_Perfil?: IntWithAggregatesFilter<"T_Perfil"> | number
    nome_Perfil?: StringWithAggregatesFilter<"T_Perfil"> | string
    email_Perfil?: StringWithAggregatesFilter<"T_Perfil"> | string
    matricula_Perfil?: StringWithAggregatesFilter<"T_Perfil"> | string
    foto_Perfil?: StringNullableWithAggregatesFilter<"T_Perfil"> | string | null
    descricao_Perfil?: StringNullableWithAggregatesFilter<"T_Perfil"> | string | null
    createdAt_Perfil?: DateTimeWithAggregatesFilter<"T_Perfil"> | Date | string
    updatedAt_Perfil?: DateTimeWithAggregatesFilter<"T_Perfil"> | Date | string
    id_Account_Perfil?: IntWithAggregatesFilter<"T_Perfil"> | number
  }

  export type T_PostWhereInput = {
    AND?: T_PostWhereInput | T_PostWhereInput[]
    OR?: T_PostWhereInput[]
    NOT?: T_PostWhereInput | T_PostWhereInput[]
    id_Post?: StringFilter<"T_Post"> | string
    title_Post?: StringNullableFilter<"T_Post"> | string | null
    content_Post?: StringNullableFilter<"T_Post"> | string | null
    image_Post?: StringNullableFilter<"T_Post"> | string | null
    createdAt_Post?: DateTimeFilter<"T_Post"> | Date | string
    updatedAt_Post?: DateTimeFilter<"T_Post"> | Date | string
    id_Perfil_Post?: IntFilter<"T_Post"> | number
    idPerfil_Post?: XOR<T_PerfilScalarRelationFilter, T_PerfilWhereInput>
  }

  export type T_PostOrderByWithRelationInput = {
    id_Post?: SortOrder
    title_Post?: SortOrderInput | SortOrder
    content_Post?: SortOrderInput | SortOrder
    image_Post?: SortOrderInput | SortOrder
    createdAt_Post?: SortOrder
    updatedAt_Post?: SortOrder
    id_Perfil_Post?: SortOrder
    idPerfil_Post?: T_PerfilOrderByWithRelationInput
  }

  export type T_PostWhereUniqueInput = Prisma.AtLeast<{
    id_Post?: string
    AND?: T_PostWhereInput | T_PostWhereInput[]
    OR?: T_PostWhereInput[]
    NOT?: T_PostWhereInput | T_PostWhereInput[]
    title_Post?: StringNullableFilter<"T_Post"> | string | null
    content_Post?: StringNullableFilter<"T_Post"> | string | null
    image_Post?: StringNullableFilter<"T_Post"> | string | null
    createdAt_Post?: DateTimeFilter<"T_Post"> | Date | string
    updatedAt_Post?: DateTimeFilter<"T_Post"> | Date | string
    id_Perfil_Post?: IntFilter<"T_Post"> | number
    idPerfil_Post?: XOR<T_PerfilScalarRelationFilter, T_PerfilWhereInput>
  }, "id_Post">

  export type T_PostOrderByWithAggregationInput = {
    id_Post?: SortOrder
    title_Post?: SortOrderInput | SortOrder
    content_Post?: SortOrderInput | SortOrder
    image_Post?: SortOrderInput | SortOrder
    createdAt_Post?: SortOrder
    updatedAt_Post?: SortOrder
    id_Perfil_Post?: SortOrder
    _count?: T_PostCountOrderByAggregateInput
    _avg?: T_PostAvgOrderByAggregateInput
    _max?: T_PostMaxOrderByAggregateInput
    _min?: T_PostMinOrderByAggregateInput
    _sum?: T_PostSumOrderByAggregateInput
  }

  export type T_PostScalarWhereWithAggregatesInput = {
    AND?: T_PostScalarWhereWithAggregatesInput | T_PostScalarWhereWithAggregatesInput[]
    OR?: T_PostScalarWhereWithAggregatesInput[]
    NOT?: T_PostScalarWhereWithAggregatesInput | T_PostScalarWhereWithAggregatesInput[]
    id_Post?: StringWithAggregatesFilter<"T_Post"> | string
    title_Post?: StringNullableWithAggregatesFilter<"T_Post"> | string | null
    content_Post?: StringNullableWithAggregatesFilter<"T_Post"> | string | null
    image_Post?: StringNullableWithAggregatesFilter<"T_Post"> | string | null
    createdAt_Post?: DateTimeWithAggregatesFilter<"T_Post"> | Date | string
    updatedAt_Post?: DateTimeWithAggregatesFilter<"T_Post"> | Date | string
    id_Perfil_Post?: IntWithAggregatesFilter<"T_Post"> | number
  }

  export type T_AccountCreateInput = {
    nome_Account: string
    email_Account: string
    matricula_Account: string
    password_Account: string
    createdAt_Account?: Date | string
    updatedAt_Account?: Date | string
    id_Perfil_Account?: T_PerfilCreateNestedManyWithoutIdAccont_PerfilInput
  }

  export type T_AccountUncheckedCreateInput = {
    id_Account?: number
    nome_Account: string
    email_Account: string
    matricula_Account: string
    password_Account: string
    createdAt_Account?: Date | string
    updatedAt_Account?: Date | string
    id_Perfil_Account?: T_PerfilUncheckedCreateNestedManyWithoutIdAccont_PerfilInput
  }

  export type T_AccountUpdateInput = {
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    matricula_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Perfil_Account?: T_PerfilUpdateManyWithoutIdAccont_PerfilNestedInput
  }

  export type T_AccountUncheckedUpdateInput = {
    id_Account?: IntFieldUpdateOperationsInput | number
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    matricula_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Perfil_Account?: T_PerfilUncheckedUpdateManyWithoutIdAccont_PerfilNestedInput
  }

  export type T_AccountCreateManyInput = {
    id_Account?: number
    nome_Account: string
    email_Account: string
    matricula_Account: string
    password_Account: string
    createdAt_Account?: Date | string
    updatedAt_Account?: Date | string
  }

  export type T_AccountUpdateManyMutationInput = {
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    matricula_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_AccountUncheckedUpdateManyInput = {
    id_Account?: IntFieldUpdateOperationsInput | number
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    matricula_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_PerfilCreateInput = {
    nome_Perfil: string
    email_Perfil: string
    matricula_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    idAccont_Perfil: T_AccountCreateNestedOneWithoutId_Perfil_AccountInput
    id_Post_Perfil?: T_PostCreateNestedManyWithoutIdPerfil_PostInput
  }

  export type T_PerfilUncheckedCreateInput = {
    id_Perfil?: number
    nome_Perfil: string
    email_Perfil: string
    matricula_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    id_Account_Perfil: number
    id_Post_Perfil?: T_PostUncheckedCreateNestedManyWithoutIdPerfil_PostInput
  }

  export type T_PerfilUpdateInput = {
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    matricula_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    idAccont_Perfil?: T_AccountUpdateOneRequiredWithoutId_Perfil_AccountNestedInput
    id_Post_Perfil?: T_PostUpdateManyWithoutIdPerfil_PostNestedInput
  }

  export type T_PerfilUncheckedUpdateInput = {
    id_Perfil?: IntFieldUpdateOperationsInput | number
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    matricula_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Account_Perfil?: IntFieldUpdateOperationsInput | number
    id_Post_Perfil?: T_PostUncheckedUpdateManyWithoutIdPerfil_PostNestedInput
  }

  export type T_PerfilCreateManyInput = {
    id_Perfil?: number
    nome_Perfil: string
    email_Perfil: string
    matricula_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    id_Account_Perfil: number
  }

  export type T_PerfilUpdateManyMutationInput = {
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    matricula_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_PerfilUncheckedUpdateManyInput = {
    id_Perfil?: IntFieldUpdateOperationsInput | number
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    matricula_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Account_Perfil?: IntFieldUpdateOperationsInput | number
  }

  export type T_PostCreateInput = {
    id_Post?: string
    title_Post?: string | null
    content_Post?: string | null
    image_Post?: string | null
    createdAt_Post?: Date | string
    updatedAt_Post?: Date | string
    idPerfil_Post: T_PerfilCreateNestedOneWithoutId_Post_PerfilInput
  }

  export type T_PostUncheckedCreateInput = {
    id_Post?: string
    title_Post?: string | null
    content_Post?: string | null
    image_Post?: string | null
    createdAt_Post?: Date | string
    updatedAt_Post?: Date | string
    id_Perfil_Post: number
  }

  export type T_PostUpdateInput = {
    id_Post?: StringFieldUpdateOperationsInput | string
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    idPerfil_Post?: T_PerfilUpdateOneRequiredWithoutId_Post_PerfilNestedInput
  }

  export type T_PostUncheckedUpdateInput = {
    id_Post?: StringFieldUpdateOperationsInput | string
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Perfil_Post?: IntFieldUpdateOperationsInput | number
  }

  export type T_PostCreateManyInput = {
    id_Post?: string
    title_Post?: string | null
    content_Post?: string | null
    image_Post?: string | null
    createdAt_Post?: Date | string
    updatedAt_Post?: Date | string
    id_Perfil_Post: number
  }

  export type T_PostUpdateManyMutationInput = {
    id_Post?: StringFieldUpdateOperationsInput | string
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_PostUncheckedUpdateManyInput = {
    id_Post?: StringFieldUpdateOperationsInput | string
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Perfil_Post?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type T_PerfilListRelationFilter = {
    every?: T_PerfilWhereInput
    some?: T_PerfilWhereInput
    none?: T_PerfilWhereInput
  }

  export type T_PerfilOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type T_AccountCountOrderByAggregateInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    matricula_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
  }

  export type T_AccountAvgOrderByAggregateInput = {
    id_Account?: SortOrder
  }

  export type T_AccountMaxOrderByAggregateInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    matricula_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
  }

  export type T_AccountMinOrderByAggregateInput = {
    id_Account?: SortOrder
    nome_Account?: SortOrder
    email_Account?: SortOrder
    matricula_Account?: SortOrder
    password_Account?: SortOrder
    createdAt_Account?: SortOrder
    updatedAt_Account?: SortOrder
  }

  export type T_AccountSumOrderByAggregateInput = {
    id_Account?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type T_AccountScalarRelationFilter = {
    is?: T_AccountWhereInput
    isNot?: T_AccountWhereInput
  }

  export type T_PostListRelationFilter = {
    every?: T_PostWhereInput
    some?: T_PostWhereInput
    none?: T_PostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type T_PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type T_PerfilCountOrderByAggregateInput = {
    id_Perfil?: SortOrder
    nome_Perfil?: SortOrder
    email_Perfil?: SortOrder
    matricula_Perfil?: SortOrder
    foto_Perfil?: SortOrder
    descricao_Perfil?: SortOrder
    createdAt_Perfil?: SortOrder
    updatedAt_Perfil?: SortOrder
    id_Account_Perfil?: SortOrder
  }

  export type T_PerfilAvgOrderByAggregateInput = {
    id_Perfil?: SortOrder
    id_Account_Perfil?: SortOrder
  }

  export type T_PerfilMaxOrderByAggregateInput = {
    id_Perfil?: SortOrder
    nome_Perfil?: SortOrder
    email_Perfil?: SortOrder
    matricula_Perfil?: SortOrder
    foto_Perfil?: SortOrder
    descricao_Perfil?: SortOrder
    createdAt_Perfil?: SortOrder
    updatedAt_Perfil?: SortOrder
    id_Account_Perfil?: SortOrder
  }

  export type T_PerfilMinOrderByAggregateInput = {
    id_Perfil?: SortOrder
    nome_Perfil?: SortOrder
    email_Perfil?: SortOrder
    matricula_Perfil?: SortOrder
    foto_Perfil?: SortOrder
    descricao_Perfil?: SortOrder
    createdAt_Perfil?: SortOrder
    updatedAt_Perfil?: SortOrder
    id_Account_Perfil?: SortOrder
  }

  export type T_PerfilSumOrderByAggregateInput = {
    id_Perfil?: SortOrder
    id_Account_Perfil?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type T_PerfilScalarRelationFilter = {
    is?: T_PerfilWhereInput
    isNot?: T_PerfilWhereInput
  }

  export type T_PostCountOrderByAggregateInput = {
    id_Post?: SortOrder
    title_Post?: SortOrder
    content_Post?: SortOrder
    image_Post?: SortOrder
    createdAt_Post?: SortOrder
    updatedAt_Post?: SortOrder
    id_Perfil_Post?: SortOrder
  }

  export type T_PostAvgOrderByAggregateInput = {
    id_Perfil_Post?: SortOrder
  }

  export type T_PostMaxOrderByAggregateInput = {
    id_Post?: SortOrder
    title_Post?: SortOrder
    content_Post?: SortOrder
    image_Post?: SortOrder
    createdAt_Post?: SortOrder
    updatedAt_Post?: SortOrder
    id_Perfil_Post?: SortOrder
  }

  export type T_PostMinOrderByAggregateInput = {
    id_Post?: SortOrder
    title_Post?: SortOrder
    content_Post?: SortOrder
    image_Post?: SortOrder
    createdAt_Post?: SortOrder
    updatedAt_Post?: SortOrder
    id_Perfil_Post?: SortOrder
  }

  export type T_PostSumOrderByAggregateInput = {
    id_Perfil_Post?: SortOrder
  }

  export type T_PerfilCreateNestedManyWithoutIdAccont_PerfilInput = {
    create?: XOR<T_PerfilCreateWithoutIdAccont_PerfilInput, T_PerfilUncheckedCreateWithoutIdAccont_PerfilInput> | T_PerfilCreateWithoutIdAccont_PerfilInput[] | T_PerfilUncheckedCreateWithoutIdAccont_PerfilInput[]
    connectOrCreate?: T_PerfilCreateOrConnectWithoutIdAccont_PerfilInput | T_PerfilCreateOrConnectWithoutIdAccont_PerfilInput[]
    createMany?: T_PerfilCreateManyIdAccont_PerfilInputEnvelope
    connect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
  }

  export type T_PerfilUncheckedCreateNestedManyWithoutIdAccont_PerfilInput = {
    create?: XOR<T_PerfilCreateWithoutIdAccont_PerfilInput, T_PerfilUncheckedCreateWithoutIdAccont_PerfilInput> | T_PerfilCreateWithoutIdAccont_PerfilInput[] | T_PerfilUncheckedCreateWithoutIdAccont_PerfilInput[]
    connectOrCreate?: T_PerfilCreateOrConnectWithoutIdAccont_PerfilInput | T_PerfilCreateOrConnectWithoutIdAccont_PerfilInput[]
    createMany?: T_PerfilCreateManyIdAccont_PerfilInputEnvelope
    connect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type T_PerfilUpdateManyWithoutIdAccont_PerfilNestedInput = {
    create?: XOR<T_PerfilCreateWithoutIdAccont_PerfilInput, T_PerfilUncheckedCreateWithoutIdAccont_PerfilInput> | T_PerfilCreateWithoutIdAccont_PerfilInput[] | T_PerfilUncheckedCreateWithoutIdAccont_PerfilInput[]
    connectOrCreate?: T_PerfilCreateOrConnectWithoutIdAccont_PerfilInput | T_PerfilCreateOrConnectWithoutIdAccont_PerfilInput[]
    upsert?: T_PerfilUpsertWithWhereUniqueWithoutIdAccont_PerfilInput | T_PerfilUpsertWithWhereUniqueWithoutIdAccont_PerfilInput[]
    createMany?: T_PerfilCreateManyIdAccont_PerfilInputEnvelope
    set?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    disconnect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    delete?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    connect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    update?: T_PerfilUpdateWithWhereUniqueWithoutIdAccont_PerfilInput | T_PerfilUpdateWithWhereUniqueWithoutIdAccont_PerfilInput[]
    updateMany?: T_PerfilUpdateManyWithWhereWithoutIdAccont_PerfilInput | T_PerfilUpdateManyWithWhereWithoutIdAccont_PerfilInput[]
    deleteMany?: T_PerfilScalarWhereInput | T_PerfilScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type T_PerfilUncheckedUpdateManyWithoutIdAccont_PerfilNestedInput = {
    create?: XOR<T_PerfilCreateWithoutIdAccont_PerfilInput, T_PerfilUncheckedCreateWithoutIdAccont_PerfilInput> | T_PerfilCreateWithoutIdAccont_PerfilInput[] | T_PerfilUncheckedCreateWithoutIdAccont_PerfilInput[]
    connectOrCreate?: T_PerfilCreateOrConnectWithoutIdAccont_PerfilInput | T_PerfilCreateOrConnectWithoutIdAccont_PerfilInput[]
    upsert?: T_PerfilUpsertWithWhereUniqueWithoutIdAccont_PerfilInput | T_PerfilUpsertWithWhereUniqueWithoutIdAccont_PerfilInput[]
    createMany?: T_PerfilCreateManyIdAccont_PerfilInputEnvelope
    set?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    disconnect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    delete?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    connect?: T_PerfilWhereUniqueInput | T_PerfilWhereUniqueInput[]
    update?: T_PerfilUpdateWithWhereUniqueWithoutIdAccont_PerfilInput | T_PerfilUpdateWithWhereUniqueWithoutIdAccont_PerfilInput[]
    updateMany?: T_PerfilUpdateManyWithWhereWithoutIdAccont_PerfilInput | T_PerfilUpdateManyWithWhereWithoutIdAccont_PerfilInput[]
    deleteMany?: T_PerfilScalarWhereInput | T_PerfilScalarWhereInput[]
  }

  export type T_AccountCreateNestedOneWithoutId_Perfil_AccountInput = {
    create?: XOR<T_AccountCreateWithoutId_Perfil_AccountInput, T_AccountUncheckedCreateWithoutId_Perfil_AccountInput>
    connectOrCreate?: T_AccountCreateOrConnectWithoutId_Perfil_AccountInput
    connect?: T_AccountWhereUniqueInput
  }

  export type T_PostCreateNestedManyWithoutIdPerfil_PostInput = {
    create?: XOR<T_PostCreateWithoutIdPerfil_PostInput, T_PostUncheckedCreateWithoutIdPerfil_PostInput> | T_PostCreateWithoutIdPerfil_PostInput[] | T_PostUncheckedCreateWithoutIdPerfil_PostInput[]
    connectOrCreate?: T_PostCreateOrConnectWithoutIdPerfil_PostInput | T_PostCreateOrConnectWithoutIdPerfil_PostInput[]
    createMany?: T_PostCreateManyIdPerfil_PostInputEnvelope
    connect?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
  }

  export type T_PostUncheckedCreateNestedManyWithoutIdPerfil_PostInput = {
    create?: XOR<T_PostCreateWithoutIdPerfil_PostInput, T_PostUncheckedCreateWithoutIdPerfil_PostInput> | T_PostCreateWithoutIdPerfil_PostInput[] | T_PostUncheckedCreateWithoutIdPerfil_PostInput[]
    connectOrCreate?: T_PostCreateOrConnectWithoutIdPerfil_PostInput | T_PostCreateOrConnectWithoutIdPerfil_PostInput[]
    createMany?: T_PostCreateManyIdPerfil_PostInputEnvelope
    connect?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type T_AccountUpdateOneRequiredWithoutId_Perfil_AccountNestedInput = {
    create?: XOR<T_AccountCreateWithoutId_Perfil_AccountInput, T_AccountUncheckedCreateWithoutId_Perfil_AccountInput>
    connectOrCreate?: T_AccountCreateOrConnectWithoutId_Perfil_AccountInput
    upsert?: T_AccountUpsertWithoutId_Perfil_AccountInput
    connect?: T_AccountWhereUniqueInput
    update?: XOR<XOR<T_AccountUpdateToOneWithWhereWithoutId_Perfil_AccountInput, T_AccountUpdateWithoutId_Perfil_AccountInput>, T_AccountUncheckedUpdateWithoutId_Perfil_AccountInput>
  }

  export type T_PostUpdateManyWithoutIdPerfil_PostNestedInput = {
    create?: XOR<T_PostCreateWithoutIdPerfil_PostInput, T_PostUncheckedCreateWithoutIdPerfil_PostInput> | T_PostCreateWithoutIdPerfil_PostInput[] | T_PostUncheckedCreateWithoutIdPerfil_PostInput[]
    connectOrCreate?: T_PostCreateOrConnectWithoutIdPerfil_PostInput | T_PostCreateOrConnectWithoutIdPerfil_PostInput[]
    upsert?: T_PostUpsertWithWhereUniqueWithoutIdPerfil_PostInput | T_PostUpsertWithWhereUniqueWithoutIdPerfil_PostInput[]
    createMany?: T_PostCreateManyIdPerfil_PostInputEnvelope
    set?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    disconnect?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    delete?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    connect?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    update?: T_PostUpdateWithWhereUniqueWithoutIdPerfil_PostInput | T_PostUpdateWithWhereUniqueWithoutIdPerfil_PostInput[]
    updateMany?: T_PostUpdateManyWithWhereWithoutIdPerfil_PostInput | T_PostUpdateManyWithWhereWithoutIdPerfil_PostInput[]
    deleteMany?: T_PostScalarWhereInput | T_PostScalarWhereInput[]
  }

  export type T_PostUncheckedUpdateManyWithoutIdPerfil_PostNestedInput = {
    create?: XOR<T_PostCreateWithoutIdPerfil_PostInput, T_PostUncheckedCreateWithoutIdPerfil_PostInput> | T_PostCreateWithoutIdPerfil_PostInput[] | T_PostUncheckedCreateWithoutIdPerfil_PostInput[]
    connectOrCreate?: T_PostCreateOrConnectWithoutIdPerfil_PostInput | T_PostCreateOrConnectWithoutIdPerfil_PostInput[]
    upsert?: T_PostUpsertWithWhereUniqueWithoutIdPerfil_PostInput | T_PostUpsertWithWhereUniqueWithoutIdPerfil_PostInput[]
    createMany?: T_PostCreateManyIdPerfil_PostInputEnvelope
    set?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    disconnect?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    delete?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    connect?: T_PostWhereUniqueInput | T_PostWhereUniqueInput[]
    update?: T_PostUpdateWithWhereUniqueWithoutIdPerfil_PostInput | T_PostUpdateWithWhereUniqueWithoutIdPerfil_PostInput[]
    updateMany?: T_PostUpdateManyWithWhereWithoutIdPerfil_PostInput | T_PostUpdateManyWithWhereWithoutIdPerfil_PostInput[]
    deleteMany?: T_PostScalarWhereInput | T_PostScalarWhereInput[]
  }

  export type T_PerfilCreateNestedOneWithoutId_Post_PerfilInput = {
    create?: XOR<T_PerfilCreateWithoutId_Post_PerfilInput, T_PerfilUncheckedCreateWithoutId_Post_PerfilInput>
    connectOrCreate?: T_PerfilCreateOrConnectWithoutId_Post_PerfilInput
    connect?: T_PerfilWhereUniqueInput
  }

  export type T_PerfilUpdateOneRequiredWithoutId_Post_PerfilNestedInput = {
    create?: XOR<T_PerfilCreateWithoutId_Post_PerfilInput, T_PerfilUncheckedCreateWithoutId_Post_PerfilInput>
    connectOrCreate?: T_PerfilCreateOrConnectWithoutId_Post_PerfilInput
    upsert?: T_PerfilUpsertWithoutId_Post_PerfilInput
    connect?: T_PerfilWhereUniqueInput
    update?: XOR<XOR<T_PerfilUpdateToOneWithWhereWithoutId_Post_PerfilInput, T_PerfilUpdateWithoutId_Post_PerfilInput>, T_PerfilUncheckedUpdateWithoutId_Post_PerfilInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type T_PerfilCreateWithoutIdAccont_PerfilInput = {
    nome_Perfil: string
    email_Perfil: string
    matricula_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    id_Post_Perfil?: T_PostCreateNestedManyWithoutIdPerfil_PostInput
  }

  export type T_PerfilUncheckedCreateWithoutIdAccont_PerfilInput = {
    id_Perfil?: number
    nome_Perfil: string
    email_Perfil: string
    matricula_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    id_Post_Perfil?: T_PostUncheckedCreateNestedManyWithoutIdPerfil_PostInput
  }

  export type T_PerfilCreateOrConnectWithoutIdAccont_PerfilInput = {
    where: T_PerfilWhereUniqueInput
    create: XOR<T_PerfilCreateWithoutIdAccont_PerfilInput, T_PerfilUncheckedCreateWithoutIdAccont_PerfilInput>
  }

  export type T_PerfilCreateManyIdAccont_PerfilInputEnvelope = {
    data: T_PerfilCreateManyIdAccont_PerfilInput | T_PerfilCreateManyIdAccont_PerfilInput[]
    skipDuplicates?: boolean
  }

  export type T_PerfilUpsertWithWhereUniqueWithoutIdAccont_PerfilInput = {
    where: T_PerfilWhereUniqueInput
    update: XOR<T_PerfilUpdateWithoutIdAccont_PerfilInput, T_PerfilUncheckedUpdateWithoutIdAccont_PerfilInput>
    create: XOR<T_PerfilCreateWithoutIdAccont_PerfilInput, T_PerfilUncheckedCreateWithoutIdAccont_PerfilInput>
  }

  export type T_PerfilUpdateWithWhereUniqueWithoutIdAccont_PerfilInput = {
    where: T_PerfilWhereUniqueInput
    data: XOR<T_PerfilUpdateWithoutIdAccont_PerfilInput, T_PerfilUncheckedUpdateWithoutIdAccont_PerfilInput>
  }

  export type T_PerfilUpdateManyWithWhereWithoutIdAccont_PerfilInput = {
    where: T_PerfilScalarWhereInput
    data: XOR<T_PerfilUpdateManyMutationInput, T_PerfilUncheckedUpdateManyWithoutIdAccont_PerfilInput>
  }

  export type T_PerfilScalarWhereInput = {
    AND?: T_PerfilScalarWhereInput | T_PerfilScalarWhereInput[]
    OR?: T_PerfilScalarWhereInput[]
    NOT?: T_PerfilScalarWhereInput | T_PerfilScalarWhereInput[]
    id_Perfil?: IntFilter<"T_Perfil"> | number
    nome_Perfil?: StringFilter<"T_Perfil"> | string
    email_Perfil?: StringFilter<"T_Perfil"> | string
    matricula_Perfil?: StringFilter<"T_Perfil"> | string
    foto_Perfil?: StringNullableFilter<"T_Perfil"> | string | null
    descricao_Perfil?: StringNullableFilter<"T_Perfil"> | string | null
    createdAt_Perfil?: DateTimeFilter<"T_Perfil"> | Date | string
    updatedAt_Perfil?: DateTimeFilter<"T_Perfil"> | Date | string
    id_Account_Perfil?: IntFilter<"T_Perfil"> | number
  }

  export type T_AccountCreateWithoutId_Perfil_AccountInput = {
    nome_Account: string
    email_Account: string
    matricula_Account: string
    password_Account: string
    createdAt_Account?: Date | string
    updatedAt_Account?: Date | string
  }

  export type T_AccountUncheckedCreateWithoutId_Perfil_AccountInput = {
    id_Account?: number
    nome_Account: string
    email_Account: string
    matricula_Account: string
    password_Account: string
    createdAt_Account?: Date | string
    updatedAt_Account?: Date | string
  }

  export type T_AccountCreateOrConnectWithoutId_Perfil_AccountInput = {
    where: T_AccountWhereUniqueInput
    create: XOR<T_AccountCreateWithoutId_Perfil_AccountInput, T_AccountUncheckedCreateWithoutId_Perfil_AccountInput>
  }

  export type T_PostCreateWithoutIdPerfil_PostInput = {
    id_Post?: string
    title_Post?: string | null
    content_Post?: string | null
    image_Post?: string | null
    createdAt_Post?: Date | string
    updatedAt_Post?: Date | string
  }

  export type T_PostUncheckedCreateWithoutIdPerfil_PostInput = {
    id_Post?: string
    title_Post?: string | null
    content_Post?: string | null
    image_Post?: string | null
    createdAt_Post?: Date | string
    updatedAt_Post?: Date | string
  }

  export type T_PostCreateOrConnectWithoutIdPerfil_PostInput = {
    where: T_PostWhereUniqueInput
    create: XOR<T_PostCreateWithoutIdPerfil_PostInput, T_PostUncheckedCreateWithoutIdPerfil_PostInput>
  }

  export type T_PostCreateManyIdPerfil_PostInputEnvelope = {
    data: T_PostCreateManyIdPerfil_PostInput | T_PostCreateManyIdPerfil_PostInput[]
    skipDuplicates?: boolean
  }

  export type T_AccountUpsertWithoutId_Perfil_AccountInput = {
    update: XOR<T_AccountUpdateWithoutId_Perfil_AccountInput, T_AccountUncheckedUpdateWithoutId_Perfil_AccountInput>
    create: XOR<T_AccountCreateWithoutId_Perfil_AccountInput, T_AccountUncheckedCreateWithoutId_Perfil_AccountInput>
    where?: T_AccountWhereInput
  }

  export type T_AccountUpdateToOneWithWhereWithoutId_Perfil_AccountInput = {
    where?: T_AccountWhereInput
    data: XOR<T_AccountUpdateWithoutId_Perfil_AccountInput, T_AccountUncheckedUpdateWithoutId_Perfil_AccountInput>
  }

  export type T_AccountUpdateWithoutId_Perfil_AccountInput = {
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    matricula_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_AccountUncheckedUpdateWithoutId_Perfil_AccountInput = {
    id_Account?: IntFieldUpdateOperationsInput | number
    nome_Account?: StringFieldUpdateOperationsInput | string
    email_Account?: StringFieldUpdateOperationsInput | string
    matricula_Account?: StringFieldUpdateOperationsInput | string
    password_Account?: StringFieldUpdateOperationsInput | string
    createdAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Account?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_PostUpsertWithWhereUniqueWithoutIdPerfil_PostInput = {
    where: T_PostWhereUniqueInput
    update: XOR<T_PostUpdateWithoutIdPerfil_PostInput, T_PostUncheckedUpdateWithoutIdPerfil_PostInput>
    create: XOR<T_PostCreateWithoutIdPerfil_PostInput, T_PostUncheckedCreateWithoutIdPerfil_PostInput>
  }

  export type T_PostUpdateWithWhereUniqueWithoutIdPerfil_PostInput = {
    where: T_PostWhereUniqueInput
    data: XOR<T_PostUpdateWithoutIdPerfil_PostInput, T_PostUncheckedUpdateWithoutIdPerfil_PostInput>
  }

  export type T_PostUpdateManyWithWhereWithoutIdPerfil_PostInput = {
    where: T_PostScalarWhereInput
    data: XOR<T_PostUpdateManyMutationInput, T_PostUncheckedUpdateManyWithoutIdPerfil_PostInput>
  }

  export type T_PostScalarWhereInput = {
    AND?: T_PostScalarWhereInput | T_PostScalarWhereInput[]
    OR?: T_PostScalarWhereInput[]
    NOT?: T_PostScalarWhereInput | T_PostScalarWhereInput[]
    id_Post?: StringFilter<"T_Post"> | string
    title_Post?: StringNullableFilter<"T_Post"> | string | null
    content_Post?: StringNullableFilter<"T_Post"> | string | null
    image_Post?: StringNullableFilter<"T_Post"> | string | null
    createdAt_Post?: DateTimeFilter<"T_Post"> | Date | string
    updatedAt_Post?: DateTimeFilter<"T_Post"> | Date | string
    id_Perfil_Post?: IntFilter<"T_Post"> | number
  }

  export type T_PerfilCreateWithoutId_Post_PerfilInput = {
    nome_Perfil: string
    email_Perfil: string
    matricula_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    idAccont_Perfil: T_AccountCreateNestedOneWithoutId_Perfil_AccountInput
  }

  export type T_PerfilUncheckedCreateWithoutId_Post_PerfilInput = {
    id_Perfil?: number
    nome_Perfil: string
    email_Perfil: string
    matricula_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
    id_Account_Perfil: number
  }

  export type T_PerfilCreateOrConnectWithoutId_Post_PerfilInput = {
    where: T_PerfilWhereUniqueInput
    create: XOR<T_PerfilCreateWithoutId_Post_PerfilInput, T_PerfilUncheckedCreateWithoutId_Post_PerfilInput>
  }

  export type T_PerfilUpsertWithoutId_Post_PerfilInput = {
    update: XOR<T_PerfilUpdateWithoutId_Post_PerfilInput, T_PerfilUncheckedUpdateWithoutId_Post_PerfilInput>
    create: XOR<T_PerfilCreateWithoutId_Post_PerfilInput, T_PerfilUncheckedCreateWithoutId_Post_PerfilInput>
    where?: T_PerfilWhereInput
  }

  export type T_PerfilUpdateToOneWithWhereWithoutId_Post_PerfilInput = {
    where?: T_PerfilWhereInput
    data: XOR<T_PerfilUpdateWithoutId_Post_PerfilInput, T_PerfilUncheckedUpdateWithoutId_Post_PerfilInput>
  }

  export type T_PerfilUpdateWithoutId_Post_PerfilInput = {
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    matricula_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    idAccont_Perfil?: T_AccountUpdateOneRequiredWithoutId_Perfil_AccountNestedInput
  }

  export type T_PerfilUncheckedUpdateWithoutId_Post_PerfilInput = {
    id_Perfil?: IntFieldUpdateOperationsInput | number
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    matricula_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Account_Perfil?: IntFieldUpdateOperationsInput | number
  }

  export type T_PerfilCreateManyIdAccont_PerfilInput = {
    id_Perfil?: number
    nome_Perfil: string
    email_Perfil: string
    matricula_Perfil: string
    foto_Perfil?: string | null
    descricao_Perfil?: string | null
    createdAt_Perfil?: Date | string
    updatedAt_Perfil?: Date | string
  }

  export type T_PerfilUpdateWithoutIdAccont_PerfilInput = {
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    matricula_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Post_Perfil?: T_PostUpdateManyWithoutIdPerfil_PostNestedInput
  }

  export type T_PerfilUncheckedUpdateWithoutIdAccont_PerfilInput = {
    id_Perfil?: IntFieldUpdateOperationsInput | number
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    matricula_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    id_Post_Perfil?: T_PostUncheckedUpdateManyWithoutIdPerfil_PostNestedInput
  }

  export type T_PerfilUncheckedUpdateManyWithoutIdAccont_PerfilInput = {
    id_Perfil?: IntFieldUpdateOperationsInput | number
    nome_Perfil?: StringFieldUpdateOperationsInput | string
    email_Perfil?: StringFieldUpdateOperationsInput | string
    matricula_Perfil?: StringFieldUpdateOperationsInput | string
    foto_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    descricao_Perfil?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Perfil?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_PostCreateManyIdPerfil_PostInput = {
    id_Post?: string
    title_Post?: string | null
    content_Post?: string | null
    image_Post?: string | null
    createdAt_Post?: Date | string
    updatedAt_Post?: Date | string
  }

  export type T_PostUpdateWithoutIdPerfil_PostInput = {
    id_Post?: StringFieldUpdateOperationsInput | string
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_PostUncheckedUpdateWithoutIdPerfil_PostInput = {
    id_Post?: StringFieldUpdateOperationsInput | string
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type T_PostUncheckedUpdateManyWithoutIdPerfil_PostInput = {
    id_Post?: StringFieldUpdateOperationsInput | string
    title_Post?: NullableStringFieldUpdateOperationsInput | string | null
    content_Post?: NullableStringFieldUpdateOperationsInput | string | null
    image_Post?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt_Post?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}