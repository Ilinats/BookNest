
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Mood
 * 
 */
export type Mood = $Result.DefaultSelection<Prisma.$MoodPayload>
/**
 * Model Trope
 * 
 */
export type Trope = $Result.DefaultSelection<Prisma.$TropePayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Library
 * 
 */
export type Library = $Result.DefaultSelection<Prisma.$LibraryPayload>
/**
 * Model LibraryEntry
 * 
 */
export type LibraryEntry = $Result.DefaultSelection<Prisma.$LibraryEntryPayload>
/**
 * Model ReadingChallenge
 * 
 */
export type ReadingChallenge = $Result.DefaultSelection<Prisma.$ReadingChallengePayload>
/**
 * Model ChallengeEntry
 * 
 */
export type ChallengeEntry = $Result.DefaultSelection<Prisma.$ChallengeEntryPayload>
/**
 * Model Friendship
 * 
 */
export type Friendship = $Result.DefaultSelection<Prisma.$FriendshipPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LibraryType: {
  CURRENTLY_READING: 'CURRENTLY_READING',
  PHYSICAL_TBR: 'PHYSICAL_TBR',
  WANT_TO_READ: 'WANT_TO_READ',
  READ: 'READ',
  CUSTOM: 'CUSTOM'
};

export type LibraryType = (typeof LibraryType)[keyof typeof LibraryType]


export const Pace: {
  FAST: 'FAST',
  MEDIUM: 'MEDIUM',
  SLOW: 'SLOW'
};

export type Pace = (typeof Pace)[keyof typeof Pace]


export const Focus: {
  PLOT: 'PLOT',
  CHARACTER: 'CHARACTER',
  BOTH: 'BOTH'
};

export type Focus = (typeof Focus)[keyof typeof Focus]

}

export type LibraryType = $Enums.LibraryType

export const LibraryType: typeof $Enums.LibraryType

export type Pace = $Enums.Pace

export const Pace: typeof $Enums.Pace

export type Focus = $Enums.Focus

export const Focus: typeof $Enums.Focus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mood`: Exposes CRUD operations for the **Mood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moods
    * const moods = await prisma.mood.findMany()
    * ```
    */
  get mood(): Prisma.MoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trope`: Exposes CRUD operations for the **Trope** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tropes
    * const tropes = await prisma.trope.findMany()
    * ```
    */
  get trope(): Prisma.TropeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.library`: Exposes CRUD operations for the **Library** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Libraries
    * const libraries = await prisma.library.findMany()
    * ```
    */
  get library(): Prisma.LibraryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.libraryEntry`: Exposes CRUD operations for the **LibraryEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LibraryEntries
    * const libraryEntries = await prisma.libraryEntry.findMany()
    * ```
    */
  get libraryEntry(): Prisma.LibraryEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.readingChallenge`: Exposes CRUD operations for the **ReadingChallenge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReadingChallenges
    * const readingChallenges = await prisma.readingChallenge.findMany()
    * ```
    */
  get readingChallenge(): Prisma.ReadingChallengeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challengeEntry`: Exposes CRUD operations for the **ChallengeEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallengeEntries
    * const challengeEntries = await prisma.challengeEntry.findMany()
    * ```
    */
  get challengeEntry(): Prisma.ChallengeEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.friendship`: Exposes CRUD operations for the **Friendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Friendships
    * const friendships = await prisma.friendship.findMany()
    * ```
    */
  get friendship(): Prisma.FriendshipDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Book: 'Book',
    Review: 'Review',
    Mood: 'Mood',
    Trope: 'Trope',
    Genre: 'Genre',
    Library: 'Library',
    LibraryEntry: 'LibraryEntry',
    ReadingChallenge: 'ReadingChallenge',
    ChallengeEntry: 'ChallengeEntry',
    Friendship: 'Friendship'
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
      modelProps: "user" | "book" | "review" | "mood" | "trope" | "genre" | "library" | "libraryEntry" | "readingChallenge" | "challengeEntry" | "friendship"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Mood: {
        payload: Prisma.$MoodPayload<ExtArgs>
        fields: Prisma.MoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          findFirst: {
            args: Prisma.MoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          findMany: {
            args: Prisma.MoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>[]
          }
          create: {
            args: Prisma.MoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          createMany: {
            args: Prisma.MoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>[]
          }
          delete: {
            args: Prisma.MoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          update: {
            args: Prisma.MoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          deleteMany: {
            args: Prisma.MoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>[]
          }
          upsert: {
            args: Prisma.MoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodPayload>
          }
          aggregate: {
            args: Prisma.MoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMood>
          }
          groupBy: {
            args: Prisma.MoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodCountArgs<ExtArgs>
            result: $Utils.Optional<MoodCountAggregateOutputType> | number
          }
        }
      }
      Trope: {
        payload: Prisma.$TropePayload<ExtArgs>
        fields: Prisma.TropeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TropeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TropePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TropeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TropePayload>
          }
          findFirst: {
            args: Prisma.TropeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TropePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TropeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TropePayload>
          }
          findMany: {
            args: Prisma.TropeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TropePayload>[]
          }
          create: {
            args: Prisma.TropeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TropePayload>
          }
          createMany: {
            args: Prisma.TropeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TropeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TropePayload>[]
          }
          delete: {
            args: Prisma.TropeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TropePayload>
          }
          update: {
            args: Prisma.TropeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TropePayload>
          }
          deleteMany: {
            args: Prisma.TropeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TropeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TropeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TropePayload>[]
          }
          upsert: {
            args: Prisma.TropeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TropePayload>
          }
          aggregate: {
            args: Prisma.TropeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrope>
          }
          groupBy: {
            args: Prisma.TropeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TropeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TropeCountArgs<ExtArgs>
            result: $Utils.Optional<TropeCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Library: {
        payload: Prisma.$LibraryPayload<ExtArgs>
        fields: Prisma.LibraryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibraryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibraryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          findFirst: {
            args: Prisma.LibraryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibraryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          findMany: {
            args: Prisma.LibraryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>[]
          }
          create: {
            args: Prisma.LibraryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          createMany: {
            args: Prisma.LibraryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibraryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>[]
          }
          delete: {
            args: Prisma.LibraryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          update: {
            args: Prisma.LibraryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          deleteMany: {
            args: Prisma.LibraryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibraryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibraryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>[]
          }
          upsert: {
            args: Prisma.LibraryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          aggregate: {
            args: Prisma.LibraryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibrary>
          }
          groupBy: {
            args: Prisma.LibraryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibraryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibraryCountArgs<ExtArgs>
            result: $Utils.Optional<LibraryCountAggregateOutputType> | number
          }
        }
      }
      LibraryEntry: {
        payload: Prisma.$LibraryEntryPayload<ExtArgs>
        fields: Prisma.LibraryEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibraryEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibraryEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryEntryPayload>
          }
          findFirst: {
            args: Prisma.LibraryEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibraryEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryEntryPayload>
          }
          findMany: {
            args: Prisma.LibraryEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryEntryPayload>[]
          }
          create: {
            args: Prisma.LibraryEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryEntryPayload>
          }
          createMany: {
            args: Prisma.LibraryEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibraryEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryEntryPayload>[]
          }
          delete: {
            args: Prisma.LibraryEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryEntryPayload>
          }
          update: {
            args: Prisma.LibraryEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryEntryPayload>
          }
          deleteMany: {
            args: Prisma.LibraryEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibraryEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibraryEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryEntryPayload>[]
          }
          upsert: {
            args: Prisma.LibraryEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryEntryPayload>
          }
          aggregate: {
            args: Prisma.LibraryEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibraryEntry>
          }
          groupBy: {
            args: Prisma.LibraryEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibraryEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibraryEntryCountArgs<ExtArgs>
            result: $Utils.Optional<LibraryEntryCountAggregateOutputType> | number
          }
        }
      }
      ReadingChallenge: {
        payload: Prisma.$ReadingChallengePayload<ExtArgs>
        fields: Prisma.ReadingChallengeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReadingChallengeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingChallengePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReadingChallengeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingChallengePayload>
          }
          findFirst: {
            args: Prisma.ReadingChallengeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingChallengePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReadingChallengeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingChallengePayload>
          }
          findMany: {
            args: Prisma.ReadingChallengeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingChallengePayload>[]
          }
          create: {
            args: Prisma.ReadingChallengeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingChallengePayload>
          }
          createMany: {
            args: Prisma.ReadingChallengeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReadingChallengeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingChallengePayload>[]
          }
          delete: {
            args: Prisma.ReadingChallengeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingChallengePayload>
          }
          update: {
            args: Prisma.ReadingChallengeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingChallengePayload>
          }
          deleteMany: {
            args: Prisma.ReadingChallengeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReadingChallengeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReadingChallengeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingChallengePayload>[]
          }
          upsert: {
            args: Prisma.ReadingChallengeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReadingChallengePayload>
          }
          aggregate: {
            args: Prisma.ReadingChallengeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReadingChallenge>
          }
          groupBy: {
            args: Prisma.ReadingChallengeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReadingChallengeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReadingChallengeCountArgs<ExtArgs>
            result: $Utils.Optional<ReadingChallengeCountAggregateOutputType> | number
          }
        }
      }
      ChallengeEntry: {
        payload: Prisma.$ChallengeEntryPayload<ExtArgs>
        fields: Prisma.ChallengeEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallengeEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallengeEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeEntryPayload>
          }
          findFirst: {
            args: Prisma.ChallengeEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallengeEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeEntryPayload>
          }
          findMany: {
            args: Prisma.ChallengeEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeEntryPayload>[]
          }
          create: {
            args: Prisma.ChallengeEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeEntryPayload>
          }
          createMany: {
            args: Prisma.ChallengeEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallengeEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeEntryPayload>[]
          }
          delete: {
            args: Prisma.ChallengeEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeEntryPayload>
          }
          update: {
            args: Prisma.ChallengeEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeEntryPayload>
          }
          deleteMany: {
            args: Prisma.ChallengeEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallengeEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChallengeEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeEntryPayload>[]
          }
          upsert: {
            args: Prisma.ChallengeEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallengeEntryPayload>
          }
          aggregate: {
            args: Prisma.ChallengeEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallengeEntry>
          }
          groupBy: {
            args: Prisma.ChallengeEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengeEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallengeEntryCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengeEntryCountAggregateOutputType> | number
          }
        }
      }
      Friendship: {
        payload: Prisma.$FriendshipPayload<ExtArgs>
        fields: Prisma.FriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findFirst: {
            args: Prisma.FriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          findMany: {
            args: Prisma.FriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          create: {
            args: Prisma.FriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          createMany: {
            args: Prisma.FriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          delete: {
            args: Prisma.FriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          update: {
            args: Prisma.FriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          deleteMany: {
            args: Prisma.FriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FriendshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>[]
          }
          upsert: {
            args: Prisma.FriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FriendshipPayload>
          }
          aggregate: {
            args: Prisma.FriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFriendship>
          }
          groupBy: {
            args: Prisma.FriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<FriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.FriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<FriendshipCountAggregateOutputType> | number
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
    user?: UserOmit
    book?: BookOmit
    review?: ReviewOmit
    mood?: MoodOmit
    trope?: TropeOmit
    genre?: GenreOmit
    library?: LibraryOmit
    libraryEntry?: LibraryEntryOmit
    readingChallenge?: ReadingChallengeOmit
    challengeEntry?: ChallengeEntryOmit
    friendship?: FriendshipOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reviews: number
    libraries: number
    challenges: number
    friends: number
    addedMe: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    libraries?: boolean | UserCountOutputTypeCountLibrariesArgs
    challenges?: boolean | UserCountOutputTypeCountChallengesArgs
    friends?: boolean | UserCountOutputTypeCountFriendsArgs
    addedMe?: boolean | UserCountOutputTypeCountAddedMeArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLibrariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingChallengeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddedMeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    reviews: number
    inLibraries: number
    inChallenges: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | BookCountOutputTypeCountReviewsArgs
    inLibraries?: boolean | BookCountOutputTypeCountInLibrariesArgs
    inChallenges?: boolean | BookCountOutputTypeCountInChallengesArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountInLibrariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryEntryWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountInChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeEntryWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    moods: number
    tropes: number
    genres: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moods?: boolean | ReviewCountOutputTypeCountMoodsArgs
    tropes?: boolean | ReviewCountOutputTypeCountTropesArgs
    genres?: boolean | ReviewCountOutputTypeCountGenresArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountMoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodWhereInput
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountTropesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TropeWhereInput
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
  }


  /**
   * Count Type MoodCountOutputType
   */

  export type MoodCountOutputType = {
    reviews: number
  }

  export type MoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | MoodCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * MoodCountOutputType without action
   */
  export type MoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCountOutputType
     */
    select?: MoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MoodCountOutputType without action
   */
  export type MoodCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TropeCountOutputType
   */

  export type TropeCountOutputType = {
    reviews: number
  }

  export type TropeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | TropeCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * TropeCountOutputType without action
   */
  export type TropeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TropeCountOutputType
     */
    select?: TropeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TropeCountOutputType without action
   */
  export type TropeCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    reviews: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | GenreCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type LibraryCountOutputType
   */

  export type LibraryCountOutputType = {
    entries: number
  }

  export type LibraryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | LibraryCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryCountOutputType
     */
    select?: LibraryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryEntryWhereInput
  }


  /**
   * Count Type ReadingChallengeCountOutputType
   */

  export type ReadingChallengeCountOutputType = {
    entries: number
  }

  export type ReadingChallengeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entries?: boolean | ReadingChallengeCountOutputTypeCountEntriesArgs
  }

  // Custom InputTypes
  /**
   * ReadingChallengeCountOutputType without action
   */
  export type ReadingChallengeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingChallengeCountOutputType
     */
    select?: ReadingChallengeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReadingChallengeCountOutputType without action
   */
  export type ReadingChallengeCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    libraries?: boolean | User$librariesArgs<ExtArgs>
    challenges?: boolean | User$challengesArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    addedMe?: boolean | User$addedMeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    libraries?: boolean | User$librariesArgs<ExtArgs>
    challenges?: boolean | User$challengesArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    addedMe?: boolean | User$addedMeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      libraries: Prisma.$LibraryPayload<ExtArgs>[]
      challenges: Prisma.$ReadingChallengePayload<ExtArgs>[]
      friends: Prisma.$FriendshipPayload<ExtArgs>[]
      addedMe: Prisma.$FriendshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    libraries<T extends User$librariesArgs<ExtArgs> = {}>(args?: Subset<T, User$librariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    challenges<T extends User$challengesArgs<ExtArgs> = {}>(args?: Subset<T, User$challengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friends<T extends User$friendsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    addedMe<T extends User$addedMeArgs<ExtArgs> = {}>(args?: Subset<T, User$addedMeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.libraries
   */
  export type User$librariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    where?: LibraryWhereInput
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    cursor?: LibraryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * User.challenges
   */
  export type User$challengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingChallenge
     */
    select?: ReadingChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingChallenge
     */
    omit?: ReadingChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingChallengeInclude<ExtArgs> | null
    where?: ReadingChallengeWhereInput
    orderBy?: ReadingChallengeOrderByWithRelationInput | ReadingChallengeOrderByWithRelationInput[]
    cursor?: ReadingChallengeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReadingChallengeScalarFieldEnum | ReadingChallengeScalarFieldEnum[]
  }

  /**
   * User.friends
   */
  export type User$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User.addedMe
   */
  export type User$addedMeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    cursor?: FriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    averageRating: number | null
    reviewCount: number | null
    pages: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    averageRating: number | null
    reviewCount: number | null
    pages: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    publishDate: Date | null
    averageRating: number | null
    language: string | null
    reviewCount: number | null
    pages: number | null
    description: string | null
    coverUrl: string | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    publishDate: Date | null
    averageRating: number | null
    language: string | null
    reviewCount: number | null
    pages: number | null
    description: string | null
    coverUrl: string | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    author: number
    publishDate: number
    averageRating: number
    language: number
    reviewCount: number
    pages: number
    description: number
    coverUrl: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    averageRating?: true
    reviewCount?: true
    pages?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    averageRating?: true
    reviewCount?: true
    pages?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    publishDate?: true
    averageRating?: true
    language?: true
    reviewCount?: true
    pages?: true
    description?: true
    coverUrl?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    publishDate?: true
    averageRating?: true
    language?: true
    reviewCount?: true
    pages?: true
    description?: true
    coverUrl?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    publishDate?: true
    averageRating?: true
    language?: true
    reviewCount?: true
    pages?: true
    description?: true
    coverUrl?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    title: string
    author: string
    publishDate: Date
    averageRating: number | null
    language: string
    reviewCount: number | null
    pages: number
    description: string | null
    coverUrl: string | null
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    publishDate?: boolean
    averageRating?: boolean
    language?: boolean
    reviewCount?: boolean
    pages?: boolean
    description?: boolean
    coverUrl?: boolean
    reviews?: boolean | Book$reviewsArgs<ExtArgs>
    inLibraries?: boolean | Book$inLibrariesArgs<ExtArgs>
    inChallenges?: boolean | Book$inChallengesArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    publishDate?: boolean
    averageRating?: boolean
    language?: boolean
    reviewCount?: boolean
    pages?: boolean
    description?: boolean
    coverUrl?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    publishDate?: boolean
    averageRating?: boolean
    language?: boolean
    reviewCount?: boolean
    pages?: boolean
    description?: boolean
    coverUrl?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    publishDate?: boolean
    averageRating?: boolean
    language?: boolean
    reviewCount?: boolean
    pages?: boolean
    description?: boolean
    coverUrl?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "publishDate" | "averageRating" | "language" | "reviewCount" | "pages" | "description" | "coverUrl", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | Book$reviewsArgs<ExtArgs>
    inLibraries?: boolean | Book$inLibrariesArgs<ExtArgs>
    inChallenges?: boolean | Book$inChallengesArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      inLibraries: Prisma.$LibraryEntryPayload<ExtArgs>[]
      inChallenges: Prisma.$ChallengeEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      author: string
      publishDate: Date
      averageRating: number | null
      language: string
      reviewCount: number | null
      pages: number
      description: string | null
      coverUrl: string | null
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends Book$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Book$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inLibraries<T extends Book$inLibrariesArgs<ExtArgs> = {}>(args?: Subset<T, Book$inLibrariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inChallenges<T extends Book$inChallengesArgs<ExtArgs> = {}>(args?: Subset<T, Book$inChallengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly title: FieldRef<"Book", 'String'>
    readonly author: FieldRef<"Book", 'String'>
    readonly publishDate: FieldRef<"Book", 'DateTime'>
    readonly averageRating: FieldRef<"Book", 'Float'>
    readonly language: FieldRef<"Book", 'String'>
    readonly reviewCount: FieldRef<"Book", 'Int'>
    readonly pages: FieldRef<"Book", 'Int'>
    readonly description: FieldRef<"Book", 'String'>
    readonly coverUrl: FieldRef<"Book", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.reviews
   */
  export type Book$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Book.inLibraries
   */
  export type Book$inLibrariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryEntry
     */
    select?: LibraryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryEntry
     */
    omit?: LibraryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryEntryInclude<ExtArgs> | null
    where?: LibraryEntryWhereInput
    orderBy?: LibraryEntryOrderByWithRelationInput | LibraryEntryOrderByWithRelationInput[]
    cursor?: LibraryEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibraryEntryScalarFieldEnum | LibraryEntryScalarFieldEnum[]
  }

  /**
   * Book.inChallenges
   */
  export type Book$inChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeEntry
     */
    select?: ChallengeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeEntry
     */
    omit?: ChallengeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeEntryInclude<ExtArgs> | null
    where?: ChallengeEntryWhereInput
    orderBy?: ChallengeEntryOrderByWithRelationInput | ChallengeEntryOrderByWithRelationInput[]
    cursor?: ChallengeEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeEntryScalarFieldEnum | ChallengeEntryScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
    rating: number | null
    text: string | null
    pace: $Enums.Pace | null
    focus: $Enums.Focus | null
    lovable: boolean | null
    contentWarnings: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
    rating: number | null
    text: string | null
    pace: $Enums.Pace | null
    focus: $Enums.Focus | null
    lovable: boolean | null
    contentWarnings: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    bookId: number
    rating: number
    text: number
    pace: number
    focus: number
    lovable: number
    contentWarnings: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    rating?: true
    text?: true
    pace?: true
    focus?: true
    lovable?: true
    contentWarnings?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    rating?: true
    text?: true
    pace?: true
    focus?: true
    lovable?: true
    contentWarnings?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    rating?: true
    text?: true
    pace?: true
    focus?: true
    lovable?: true
    contentWarnings?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    userId: number
    bookId: number
    rating: number
    text: string | null
    pace: $Enums.Pace | null
    focus: $Enums.Focus | null
    lovable: boolean | null
    contentWarnings: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    rating?: boolean
    text?: boolean
    pace?: boolean
    focus?: boolean
    lovable?: boolean
    contentWarnings?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    moods?: boolean | Review$moodsArgs<ExtArgs>
    tropes?: boolean | Review$tropesArgs<ExtArgs>
    genres?: boolean | Review$genresArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    rating?: boolean
    text?: boolean
    pace?: boolean
    focus?: boolean
    lovable?: boolean
    contentWarnings?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    rating?: boolean
    text?: boolean
    pace?: boolean
    focus?: boolean
    lovable?: boolean
    contentWarnings?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    bookId?: boolean
    rating?: boolean
    text?: boolean
    pace?: boolean
    focus?: boolean
    lovable?: boolean
    contentWarnings?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bookId" | "rating" | "text" | "pace" | "focus" | "lovable" | "contentWarnings" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
    moods?: boolean | Review$moodsArgs<ExtArgs>
    tropes?: boolean | Review$tropesArgs<ExtArgs>
    genres?: boolean | Review$genresArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
      moods: Prisma.$MoodPayload<ExtArgs>[]
      tropes: Prisma.$TropePayload<ExtArgs>[]
      genres: Prisma.$GenrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      bookId: number
      rating: number
      text: string | null
      pace: $Enums.Pace | null
      focus: $Enums.Focus | null
      lovable: boolean | null
      contentWarnings: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    moods<T extends Review$moodsArgs<ExtArgs> = {}>(args?: Subset<T, Review$moodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tropes<T extends Review$tropesArgs<ExtArgs> = {}>(args?: Subset<T, Review$tropesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TropePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genres<T extends Review$genresArgs<ExtArgs> = {}>(args?: Subset<T, Review$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly bookId: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Float'>
    readonly text: FieldRef<"Review", 'String'>
    readonly pace: FieldRef<"Review", 'Pace'>
    readonly focus: FieldRef<"Review", 'Focus'>
    readonly lovable: FieldRef<"Review", 'Boolean'>
    readonly contentWarnings: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.moods
   */
  export type Review$moodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    where?: MoodWhereInput
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    cursor?: MoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }

  /**
   * Review.tropes
   */
  export type Review$tropesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trope
     */
    select?: TropeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trope
     */
    omit?: TropeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TropeInclude<ExtArgs> | null
    where?: TropeWhereInput
    orderBy?: TropeOrderByWithRelationInput | TropeOrderByWithRelationInput[]
    cursor?: TropeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TropeScalarFieldEnum | TropeScalarFieldEnum[]
  }

  /**
   * Review.genres
   */
  export type Review$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    cursor?: GenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Mood
   */

  export type AggregateMood = {
    _count: MoodCountAggregateOutputType | null
    _avg: MoodAvgAggregateOutputType | null
    _sum: MoodSumAggregateOutputType | null
    _min: MoodMinAggregateOutputType | null
    _max: MoodMaxAggregateOutputType | null
  }

  export type MoodAvgAggregateOutputType = {
    id: number | null
  }

  export type MoodSumAggregateOutputType = {
    id: number | null
  }

  export type MoodMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MoodMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MoodCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MoodAvgAggregateInputType = {
    id?: true
  }

  export type MoodSumAggregateInputType = {
    id?: true
  }

  export type MoodMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MoodMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MoodCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mood to aggregate.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moods
    **/
    _count?: true | MoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodMaxAggregateInputType
  }

  export type GetMoodAggregateType<T extends MoodAggregateArgs> = {
        [P in keyof T & keyof AggregateMood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMood[P]>
      : GetScalarType<T[P], AggregateMood[P]>
  }




  export type MoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodWhereInput
    orderBy?: MoodOrderByWithAggregationInput | MoodOrderByWithAggregationInput[]
    by: MoodScalarFieldEnum[] | MoodScalarFieldEnum
    having?: MoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodCountAggregateInputType | true
    _avg?: MoodAvgAggregateInputType
    _sum?: MoodSumAggregateInputType
    _min?: MoodMinAggregateInputType
    _max?: MoodMaxAggregateInputType
  }

  export type MoodGroupByOutputType = {
    id: number
    name: string
    _count: MoodCountAggregateOutputType | null
    _avg: MoodAvgAggregateOutputType | null
    _sum: MoodSumAggregateOutputType | null
    _min: MoodMinAggregateOutputType | null
    _max: MoodMaxAggregateOutputType | null
  }

  type GetMoodGroupByPayload<T extends MoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodGroupByOutputType[P]>
            : GetScalarType<T[P], MoodGroupByOutputType[P]>
        }
      >
    >


  export type MoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    reviews?: boolean | Mood$reviewsArgs<ExtArgs>
    _count?: boolean | MoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mood"]>

  export type MoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["mood"]>

  export type MoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["mood"]>

  export type MoodSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["mood"]>
  export type MoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | Mood$reviewsArgs<ExtArgs>
    _count?: boolean | MoodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MoodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mood"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["mood"]>
    composites: {}
  }

  type MoodGetPayload<S extends boolean | null | undefined | MoodDefaultArgs> = $Result.GetResult<Prisma.$MoodPayload, S>

  type MoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoodCountAggregateInputType | true
    }

  export interface MoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mood'], meta: { name: 'Mood' } }
    /**
     * Find zero or one Mood that matches the filter.
     * @param {MoodFindUniqueArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoodFindUniqueArgs>(args: SelectSubset<T, MoodFindUniqueArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mood that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoodFindUniqueOrThrowArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoodFindUniqueOrThrowArgs>(args: SelectSubset<T, MoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindFirstArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoodFindFirstArgs>(args?: SelectSubset<T, MoodFindFirstArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindFirstOrThrowArgs} args - Arguments to find a Mood
     * @example
     * // Get one Mood
     * const mood = await prisma.mood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoodFindFirstOrThrowArgs>(args?: SelectSubset<T, MoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moods
     * const moods = await prisma.mood.findMany()
     * 
     * // Get first 10 Moods
     * const moods = await prisma.mood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodWithIdOnly = await prisma.mood.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoodFindManyArgs>(args?: SelectSubset<T, MoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mood.
     * @param {MoodCreateArgs} args - Arguments to create a Mood.
     * @example
     * // Create one Mood
     * const Mood = await prisma.mood.create({
     *   data: {
     *     // ... data to create a Mood
     *   }
     * })
     * 
     */
    create<T extends MoodCreateArgs>(args: SelectSubset<T, MoodCreateArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moods.
     * @param {MoodCreateManyArgs} args - Arguments to create many Moods.
     * @example
     * // Create many Moods
     * const mood = await prisma.mood.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoodCreateManyArgs>(args?: SelectSubset<T, MoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Moods and returns the data saved in the database.
     * @param {MoodCreateManyAndReturnArgs} args - Arguments to create many Moods.
     * @example
     * // Create many Moods
     * const mood = await prisma.mood.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Moods and only return the `id`
     * const moodWithIdOnly = await prisma.mood.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoodCreateManyAndReturnArgs>(args?: SelectSubset<T, MoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mood.
     * @param {MoodDeleteArgs} args - Arguments to delete one Mood.
     * @example
     * // Delete one Mood
     * const Mood = await prisma.mood.delete({
     *   where: {
     *     // ... filter to delete one Mood
     *   }
     * })
     * 
     */
    delete<T extends MoodDeleteArgs>(args: SelectSubset<T, MoodDeleteArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mood.
     * @param {MoodUpdateArgs} args - Arguments to update one Mood.
     * @example
     * // Update one Mood
     * const mood = await prisma.mood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoodUpdateArgs>(args: SelectSubset<T, MoodUpdateArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moods.
     * @param {MoodDeleteManyArgs} args - Arguments to filter Moods to delete.
     * @example
     * // Delete a few Moods
     * const { count } = await prisma.mood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoodDeleteManyArgs>(args?: SelectSubset<T, MoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moods
     * const mood = await prisma.mood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoodUpdateManyArgs>(args: SelectSubset<T, MoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moods and returns the data updated in the database.
     * @param {MoodUpdateManyAndReturnArgs} args - Arguments to update many Moods.
     * @example
     * // Update many Moods
     * const mood = await prisma.mood.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Moods and only return the `id`
     * const moodWithIdOnly = await prisma.mood.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends MoodUpdateManyAndReturnArgs>(args: SelectSubset<T, MoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mood.
     * @param {MoodUpsertArgs} args - Arguments to update or create a Mood.
     * @example
     * // Update or create a Mood
     * const mood = await prisma.mood.upsert({
     *   create: {
     *     // ... data to create a Mood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mood we want to update
     *   }
     * })
     */
    upsert<T extends MoodUpsertArgs>(args: SelectSubset<T, MoodUpsertArgs<ExtArgs>>): Prisma__MoodClient<$Result.GetResult<Prisma.$MoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodCountArgs} args - Arguments to filter Moods to count.
     * @example
     * // Count the number of Moods
     * const count = await prisma.mood.count({
     *   where: {
     *     // ... the filter for the Moods we want to count
     *   }
     * })
    **/
    count<T extends MoodCountArgs>(
      args?: Subset<T, MoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoodAggregateArgs>(args: Subset<T, MoodAggregateArgs>): Prisma.PrismaPromise<GetMoodAggregateType<T>>

    /**
     * Group by Mood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodGroupByArgs} args - Group by arguments.
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
      T extends MoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodGroupByArgs['orderBy'] }
        : { orderBy?: MoodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mood model
   */
  readonly fields: MoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends Mood$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Mood$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mood model
   */
  interface MoodFieldRefs {
    readonly id: FieldRef<"Mood", 'Int'>
    readonly name: FieldRef<"Mood", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mood findUnique
   */
  export type MoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood findUniqueOrThrow
   */
  export type MoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood findFirst
   */
  export type MoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moods.
     */
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }

  /**
   * Mood findFirstOrThrow
   */
  export type MoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Mood to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moods.
     */
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }

  /**
   * Mood findMany
   */
  export type MoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter, which Moods to fetch.
     */
    where?: MoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moods to fetch.
     */
    orderBy?: MoodOrderByWithRelationInput | MoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moods.
     */
    cursor?: MoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moods.
     */
    skip?: number
    distinct?: MoodScalarFieldEnum | MoodScalarFieldEnum[]
  }

  /**
   * Mood create
   */
  export type MoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Mood.
     */
    data: XOR<MoodCreateInput, MoodUncheckedCreateInput>
  }

  /**
   * Mood createMany
   */
  export type MoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moods.
     */
    data: MoodCreateManyInput | MoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mood createManyAndReturn
   */
  export type MoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * The data used to create many Moods.
     */
    data: MoodCreateManyInput | MoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mood update
   */
  export type MoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Mood.
     */
    data: XOR<MoodUpdateInput, MoodUncheckedUpdateInput>
    /**
     * Choose, which Mood to update.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood updateMany
   */
  export type MoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moods.
     */
    data: XOR<MoodUpdateManyMutationInput, MoodUncheckedUpdateManyInput>
    /**
     * Filter which Moods to update
     */
    where?: MoodWhereInput
    /**
     * Limit how many Moods to update.
     */
    limit?: number
  }

  /**
   * Mood updateManyAndReturn
   */
  export type MoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * The data used to update Moods.
     */
    data: XOR<MoodUpdateManyMutationInput, MoodUncheckedUpdateManyInput>
    /**
     * Filter which Moods to update
     */
    where?: MoodWhereInput
    /**
     * Limit how many Moods to update.
     */
    limit?: number
  }

  /**
   * Mood upsert
   */
  export type MoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Mood to update in case it exists.
     */
    where: MoodWhereUniqueInput
    /**
     * In case the Mood found by the `where` argument doesn't exist, create a new Mood with this data.
     */
    create: XOR<MoodCreateInput, MoodUncheckedCreateInput>
    /**
     * In case the Mood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodUpdateInput, MoodUncheckedUpdateInput>
  }

  /**
   * Mood delete
   */
  export type MoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
    /**
     * Filter which Mood to delete.
     */
    where: MoodWhereUniqueInput
  }

  /**
   * Mood deleteMany
   */
  export type MoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moods to delete
     */
    where?: MoodWhereInput
    /**
     * Limit how many Moods to delete.
     */
    limit?: number
  }

  /**
   * Mood.reviews
   */
  export type Mood$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Mood without action
   */
  export type MoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mood
     */
    select?: MoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mood
     */
    omit?: MoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodInclude<ExtArgs> | null
  }


  /**
   * Model Trope
   */

  export type AggregateTrope = {
    _count: TropeCountAggregateOutputType | null
    _avg: TropeAvgAggregateOutputType | null
    _sum: TropeSumAggregateOutputType | null
    _min: TropeMinAggregateOutputType | null
    _max: TropeMaxAggregateOutputType | null
  }

  export type TropeAvgAggregateOutputType = {
    id: number | null
  }

  export type TropeSumAggregateOutputType = {
    id: number | null
  }

  export type TropeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TropeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TropeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TropeAvgAggregateInputType = {
    id?: true
  }

  export type TropeSumAggregateInputType = {
    id?: true
  }

  export type TropeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TropeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TropeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TropeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trope to aggregate.
     */
    where?: TropeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tropes to fetch.
     */
    orderBy?: TropeOrderByWithRelationInput | TropeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TropeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tropes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tropes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tropes
    **/
    _count?: true | TropeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TropeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TropeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TropeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TropeMaxAggregateInputType
  }

  export type GetTropeAggregateType<T extends TropeAggregateArgs> = {
        [P in keyof T & keyof AggregateTrope]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrope[P]>
      : GetScalarType<T[P], AggregateTrope[P]>
  }




  export type TropeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TropeWhereInput
    orderBy?: TropeOrderByWithAggregationInput | TropeOrderByWithAggregationInput[]
    by: TropeScalarFieldEnum[] | TropeScalarFieldEnum
    having?: TropeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TropeCountAggregateInputType | true
    _avg?: TropeAvgAggregateInputType
    _sum?: TropeSumAggregateInputType
    _min?: TropeMinAggregateInputType
    _max?: TropeMaxAggregateInputType
  }

  export type TropeGroupByOutputType = {
    id: number
    name: string
    _count: TropeCountAggregateOutputType | null
    _avg: TropeAvgAggregateOutputType | null
    _sum: TropeSumAggregateOutputType | null
    _min: TropeMinAggregateOutputType | null
    _max: TropeMaxAggregateOutputType | null
  }

  type GetTropeGroupByPayload<T extends TropeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TropeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TropeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TropeGroupByOutputType[P]>
            : GetScalarType<T[P], TropeGroupByOutputType[P]>
        }
      >
    >


  export type TropeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    reviews?: boolean | Trope$reviewsArgs<ExtArgs>
    _count?: boolean | TropeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trope"]>

  export type TropeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["trope"]>

  export type TropeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["trope"]>

  export type TropeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TropeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["trope"]>
  export type TropeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | Trope$reviewsArgs<ExtArgs>
    _count?: boolean | TropeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TropeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TropeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TropePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trope"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["trope"]>
    composites: {}
  }

  type TropeGetPayload<S extends boolean | null | undefined | TropeDefaultArgs> = $Result.GetResult<Prisma.$TropePayload, S>

  type TropeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TropeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TropeCountAggregateInputType | true
    }

  export interface TropeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trope'], meta: { name: 'Trope' } }
    /**
     * Find zero or one Trope that matches the filter.
     * @param {TropeFindUniqueArgs} args - Arguments to find a Trope
     * @example
     * // Get one Trope
     * const trope = await prisma.trope.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TropeFindUniqueArgs>(args: SelectSubset<T, TropeFindUniqueArgs<ExtArgs>>): Prisma__TropeClient<$Result.GetResult<Prisma.$TropePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trope that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TropeFindUniqueOrThrowArgs} args - Arguments to find a Trope
     * @example
     * // Get one Trope
     * const trope = await prisma.trope.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TropeFindUniqueOrThrowArgs>(args: SelectSubset<T, TropeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TropeClient<$Result.GetResult<Prisma.$TropePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trope that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TropeFindFirstArgs} args - Arguments to find a Trope
     * @example
     * // Get one Trope
     * const trope = await prisma.trope.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TropeFindFirstArgs>(args?: SelectSubset<T, TropeFindFirstArgs<ExtArgs>>): Prisma__TropeClient<$Result.GetResult<Prisma.$TropePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trope that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TropeFindFirstOrThrowArgs} args - Arguments to find a Trope
     * @example
     * // Get one Trope
     * const trope = await prisma.trope.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TropeFindFirstOrThrowArgs>(args?: SelectSubset<T, TropeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TropeClient<$Result.GetResult<Prisma.$TropePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tropes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TropeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tropes
     * const tropes = await prisma.trope.findMany()
     * 
     * // Get first 10 Tropes
     * const tropes = await prisma.trope.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tropeWithIdOnly = await prisma.trope.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TropeFindManyArgs>(args?: SelectSubset<T, TropeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TropePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trope.
     * @param {TropeCreateArgs} args - Arguments to create a Trope.
     * @example
     * // Create one Trope
     * const Trope = await prisma.trope.create({
     *   data: {
     *     // ... data to create a Trope
     *   }
     * })
     * 
     */
    create<T extends TropeCreateArgs>(args: SelectSubset<T, TropeCreateArgs<ExtArgs>>): Prisma__TropeClient<$Result.GetResult<Prisma.$TropePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tropes.
     * @param {TropeCreateManyArgs} args - Arguments to create many Tropes.
     * @example
     * // Create many Tropes
     * const trope = await prisma.trope.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TropeCreateManyArgs>(args?: SelectSubset<T, TropeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tropes and returns the data saved in the database.
     * @param {TropeCreateManyAndReturnArgs} args - Arguments to create many Tropes.
     * @example
     * // Create many Tropes
     * const trope = await prisma.trope.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tropes and only return the `id`
     * const tropeWithIdOnly = await prisma.trope.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TropeCreateManyAndReturnArgs>(args?: SelectSubset<T, TropeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TropePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trope.
     * @param {TropeDeleteArgs} args - Arguments to delete one Trope.
     * @example
     * // Delete one Trope
     * const Trope = await prisma.trope.delete({
     *   where: {
     *     // ... filter to delete one Trope
     *   }
     * })
     * 
     */
    delete<T extends TropeDeleteArgs>(args: SelectSubset<T, TropeDeleteArgs<ExtArgs>>): Prisma__TropeClient<$Result.GetResult<Prisma.$TropePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trope.
     * @param {TropeUpdateArgs} args - Arguments to update one Trope.
     * @example
     * // Update one Trope
     * const trope = await prisma.trope.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TropeUpdateArgs>(args: SelectSubset<T, TropeUpdateArgs<ExtArgs>>): Prisma__TropeClient<$Result.GetResult<Prisma.$TropePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tropes.
     * @param {TropeDeleteManyArgs} args - Arguments to filter Tropes to delete.
     * @example
     * // Delete a few Tropes
     * const { count } = await prisma.trope.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TropeDeleteManyArgs>(args?: SelectSubset<T, TropeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tropes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TropeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tropes
     * const trope = await prisma.trope.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TropeUpdateManyArgs>(args: SelectSubset<T, TropeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tropes and returns the data updated in the database.
     * @param {TropeUpdateManyAndReturnArgs} args - Arguments to update many Tropes.
     * @example
     * // Update many Tropes
     * const trope = await prisma.trope.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tropes and only return the `id`
     * const tropeWithIdOnly = await prisma.trope.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TropeUpdateManyAndReturnArgs>(args: SelectSubset<T, TropeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TropePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trope.
     * @param {TropeUpsertArgs} args - Arguments to update or create a Trope.
     * @example
     * // Update or create a Trope
     * const trope = await prisma.trope.upsert({
     *   create: {
     *     // ... data to create a Trope
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trope we want to update
     *   }
     * })
     */
    upsert<T extends TropeUpsertArgs>(args: SelectSubset<T, TropeUpsertArgs<ExtArgs>>): Prisma__TropeClient<$Result.GetResult<Prisma.$TropePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tropes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TropeCountArgs} args - Arguments to filter Tropes to count.
     * @example
     * // Count the number of Tropes
     * const count = await prisma.trope.count({
     *   where: {
     *     // ... the filter for the Tropes we want to count
     *   }
     * })
    **/
    count<T extends TropeCountArgs>(
      args?: Subset<T, TropeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TropeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trope.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TropeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TropeAggregateArgs>(args: Subset<T, TropeAggregateArgs>): Prisma.PrismaPromise<GetTropeAggregateType<T>>

    /**
     * Group by Trope.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TropeGroupByArgs} args - Group by arguments.
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
      T extends TropeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TropeGroupByArgs['orderBy'] }
        : { orderBy?: TropeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TropeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTropeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trope model
   */
  readonly fields: TropeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trope.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TropeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends Trope$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Trope$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Trope model
   */
  interface TropeFieldRefs {
    readonly id: FieldRef<"Trope", 'Int'>
    readonly name: FieldRef<"Trope", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trope findUnique
   */
  export type TropeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trope
     */
    select?: TropeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trope
     */
    omit?: TropeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TropeInclude<ExtArgs> | null
    /**
     * Filter, which Trope to fetch.
     */
    where: TropeWhereUniqueInput
  }

  /**
   * Trope findUniqueOrThrow
   */
  export type TropeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trope
     */
    select?: TropeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trope
     */
    omit?: TropeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TropeInclude<ExtArgs> | null
    /**
     * Filter, which Trope to fetch.
     */
    where: TropeWhereUniqueInput
  }

  /**
   * Trope findFirst
   */
  export type TropeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trope
     */
    select?: TropeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trope
     */
    omit?: TropeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TropeInclude<ExtArgs> | null
    /**
     * Filter, which Trope to fetch.
     */
    where?: TropeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tropes to fetch.
     */
    orderBy?: TropeOrderByWithRelationInput | TropeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tropes.
     */
    cursor?: TropeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tropes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tropes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tropes.
     */
    distinct?: TropeScalarFieldEnum | TropeScalarFieldEnum[]
  }

  /**
   * Trope findFirstOrThrow
   */
  export type TropeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trope
     */
    select?: TropeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trope
     */
    omit?: TropeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TropeInclude<ExtArgs> | null
    /**
     * Filter, which Trope to fetch.
     */
    where?: TropeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tropes to fetch.
     */
    orderBy?: TropeOrderByWithRelationInput | TropeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tropes.
     */
    cursor?: TropeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tropes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tropes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tropes.
     */
    distinct?: TropeScalarFieldEnum | TropeScalarFieldEnum[]
  }

  /**
   * Trope findMany
   */
  export type TropeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trope
     */
    select?: TropeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trope
     */
    omit?: TropeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TropeInclude<ExtArgs> | null
    /**
     * Filter, which Tropes to fetch.
     */
    where?: TropeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tropes to fetch.
     */
    orderBy?: TropeOrderByWithRelationInput | TropeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tropes.
     */
    cursor?: TropeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tropes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tropes.
     */
    skip?: number
    distinct?: TropeScalarFieldEnum | TropeScalarFieldEnum[]
  }

  /**
   * Trope create
   */
  export type TropeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trope
     */
    select?: TropeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trope
     */
    omit?: TropeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TropeInclude<ExtArgs> | null
    /**
     * The data needed to create a Trope.
     */
    data: XOR<TropeCreateInput, TropeUncheckedCreateInput>
  }

  /**
   * Trope createMany
   */
  export type TropeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tropes.
     */
    data: TropeCreateManyInput | TropeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trope createManyAndReturn
   */
  export type TropeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trope
     */
    select?: TropeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trope
     */
    omit?: TropeOmit<ExtArgs> | null
    /**
     * The data used to create many Tropes.
     */
    data: TropeCreateManyInput | TropeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trope update
   */
  export type TropeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trope
     */
    select?: TropeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trope
     */
    omit?: TropeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TropeInclude<ExtArgs> | null
    /**
     * The data needed to update a Trope.
     */
    data: XOR<TropeUpdateInput, TropeUncheckedUpdateInput>
    /**
     * Choose, which Trope to update.
     */
    where: TropeWhereUniqueInput
  }

  /**
   * Trope updateMany
   */
  export type TropeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tropes.
     */
    data: XOR<TropeUpdateManyMutationInput, TropeUncheckedUpdateManyInput>
    /**
     * Filter which Tropes to update
     */
    where?: TropeWhereInput
    /**
     * Limit how many Tropes to update.
     */
    limit?: number
  }

  /**
   * Trope updateManyAndReturn
   */
  export type TropeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trope
     */
    select?: TropeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trope
     */
    omit?: TropeOmit<ExtArgs> | null
    /**
     * The data used to update Tropes.
     */
    data: XOR<TropeUpdateManyMutationInput, TropeUncheckedUpdateManyInput>
    /**
     * Filter which Tropes to update
     */
    where?: TropeWhereInput
    /**
     * Limit how many Tropes to update.
     */
    limit?: number
  }

  /**
   * Trope upsert
   */
  export type TropeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trope
     */
    select?: TropeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trope
     */
    omit?: TropeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TropeInclude<ExtArgs> | null
    /**
     * The filter to search for the Trope to update in case it exists.
     */
    where: TropeWhereUniqueInput
    /**
     * In case the Trope found by the `where` argument doesn't exist, create a new Trope with this data.
     */
    create: XOR<TropeCreateInput, TropeUncheckedCreateInput>
    /**
     * In case the Trope was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TropeUpdateInput, TropeUncheckedUpdateInput>
  }

  /**
   * Trope delete
   */
  export type TropeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trope
     */
    select?: TropeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trope
     */
    omit?: TropeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TropeInclude<ExtArgs> | null
    /**
     * Filter which Trope to delete.
     */
    where: TropeWhereUniqueInput
  }

  /**
   * Trope deleteMany
   */
  export type TropeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tropes to delete
     */
    where?: TropeWhereInput
    /**
     * Limit how many Tropes to delete.
     */
    limit?: number
  }

  /**
   * Trope.reviews
   */
  export type Trope$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Trope without action
   */
  export type TropeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trope
     */
    select?: TropeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trope
     */
    omit?: TropeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TropeInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: number
    name: string
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    reviews?: boolean | Genre$reviewsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | Genre$reviewsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
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
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends Genre$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Genre$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'Int'>
    readonly name: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.reviews
   */
  export type Genre$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model Library
   */

  export type AggregateLibrary = {
    _count: LibraryCountAggregateOutputType | null
    _avg: LibraryAvgAggregateOutputType | null
    _sum: LibrarySumAggregateOutputType | null
    _min: LibraryMinAggregateOutputType | null
    _max: LibraryMaxAggregateOutputType | null
  }

  export type LibraryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LibrarySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type LibraryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    type: $Enums.LibraryType | null
  }

  export type LibraryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    type: $Enums.LibraryType | null
  }

  export type LibraryCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    type: number
    _all: number
  }


  export type LibraryAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LibrarySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type LibraryMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
  }

  export type LibraryMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
  }

  export type LibraryCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    type?: true
    _all?: true
  }

  export type LibraryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Library to aggregate.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Libraries
    **/
    _count?: true | LibraryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibraryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibrarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibraryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibraryMaxAggregateInputType
  }

  export type GetLibraryAggregateType<T extends LibraryAggregateArgs> = {
        [P in keyof T & keyof AggregateLibrary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibrary[P]>
      : GetScalarType<T[P], AggregateLibrary[P]>
  }




  export type LibraryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryWhereInput
    orderBy?: LibraryOrderByWithAggregationInput | LibraryOrderByWithAggregationInput[]
    by: LibraryScalarFieldEnum[] | LibraryScalarFieldEnum
    having?: LibraryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibraryCountAggregateInputType | true
    _avg?: LibraryAvgAggregateInputType
    _sum?: LibrarySumAggregateInputType
    _min?: LibraryMinAggregateInputType
    _max?: LibraryMaxAggregateInputType
  }

  export type LibraryGroupByOutputType = {
    id: number
    userId: number
    name: string
    type: $Enums.LibraryType
    _count: LibraryCountAggregateOutputType | null
    _avg: LibraryAvgAggregateOutputType | null
    _sum: LibrarySumAggregateOutputType | null
    _min: LibraryMinAggregateOutputType | null
    _max: LibraryMaxAggregateOutputType | null
  }

  type GetLibraryGroupByPayload<T extends LibraryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibraryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibraryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibraryGroupByOutputType[P]>
            : GetScalarType<T[P], LibraryGroupByOutputType[P]>
        }
      >
    >


  export type LibrarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    entries?: boolean | Library$entriesArgs<ExtArgs>
    _count?: boolean | LibraryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["library"]>

  export type LibrarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["library"]>

  export type LibrarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["library"]>

  export type LibrarySelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    type?: boolean
  }

  export type LibraryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "type", ExtArgs["result"]["library"]>
  export type LibraryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    entries?: boolean | Library$entriesArgs<ExtArgs>
    _count?: boolean | LibraryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LibraryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LibraryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LibraryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Library"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      entries: Prisma.$LibraryEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      type: $Enums.LibraryType
    }, ExtArgs["result"]["library"]>
    composites: {}
  }

  type LibraryGetPayload<S extends boolean | null | undefined | LibraryDefaultArgs> = $Result.GetResult<Prisma.$LibraryPayload, S>

  type LibraryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibraryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibraryCountAggregateInputType | true
    }

  export interface LibraryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Library'], meta: { name: 'Library' } }
    /**
     * Find zero or one Library that matches the filter.
     * @param {LibraryFindUniqueArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibraryFindUniqueArgs>(args: SelectSubset<T, LibraryFindUniqueArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Library that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibraryFindUniqueOrThrowArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibraryFindUniqueOrThrowArgs>(args: SelectSubset<T, LibraryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Library that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindFirstArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibraryFindFirstArgs>(args?: SelectSubset<T, LibraryFindFirstArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Library that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindFirstOrThrowArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibraryFindFirstOrThrowArgs>(args?: SelectSubset<T, LibraryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Libraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libraries
     * const libraries = await prisma.library.findMany()
     * 
     * // Get first 10 Libraries
     * const libraries = await prisma.library.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libraryWithIdOnly = await prisma.library.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibraryFindManyArgs>(args?: SelectSubset<T, LibraryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Library.
     * @param {LibraryCreateArgs} args - Arguments to create a Library.
     * @example
     * // Create one Library
     * const Library = await prisma.library.create({
     *   data: {
     *     // ... data to create a Library
     *   }
     * })
     * 
     */
    create<T extends LibraryCreateArgs>(args: SelectSubset<T, LibraryCreateArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Libraries.
     * @param {LibraryCreateManyArgs} args - Arguments to create many Libraries.
     * @example
     * // Create many Libraries
     * const library = await prisma.library.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibraryCreateManyArgs>(args?: SelectSubset<T, LibraryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Libraries and returns the data saved in the database.
     * @param {LibraryCreateManyAndReturnArgs} args - Arguments to create many Libraries.
     * @example
     * // Create many Libraries
     * const library = await prisma.library.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Libraries and only return the `id`
     * const libraryWithIdOnly = await prisma.library.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibraryCreateManyAndReturnArgs>(args?: SelectSubset<T, LibraryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Library.
     * @param {LibraryDeleteArgs} args - Arguments to delete one Library.
     * @example
     * // Delete one Library
     * const Library = await prisma.library.delete({
     *   where: {
     *     // ... filter to delete one Library
     *   }
     * })
     * 
     */
    delete<T extends LibraryDeleteArgs>(args: SelectSubset<T, LibraryDeleteArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Library.
     * @param {LibraryUpdateArgs} args - Arguments to update one Library.
     * @example
     * // Update one Library
     * const library = await prisma.library.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibraryUpdateArgs>(args: SelectSubset<T, LibraryUpdateArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Libraries.
     * @param {LibraryDeleteManyArgs} args - Arguments to filter Libraries to delete.
     * @example
     * // Delete a few Libraries
     * const { count } = await prisma.library.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibraryDeleteManyArgs>(args?: SelectSubset<T, LibraryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libraries
     * const library = await prisma.library.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibraryUpdateManyArgs>(args: SelectSubset<T, LibraryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libraries and returns the data updated in the database.
     * @param {LibraryUpdateManyAndReturnArgs} args - Arguments to update many Libraries.
     * @example
     * // Update many Libraries
     * const library = await prisma.library.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Libraries and only return the `id`
     * const libraryWithIdOnly = await prisma.library.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends LibraryUpdateManyAndReturnArgs>(args: SelectSubset<T, LibraryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Library.
     * @param {LibraryUpsertArgs} args - Arguments to update or create a Library.
     * @example
     * // Update or create a Library
     * const library = await prisma.library.upsert({
     *   create: {
     *     // ... data to create a Library
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Library we want to update
     *   }
     * })
     */
    upsert<T extends LibraryUpsertArgs>(args: SelectSubset<T, LibraryUpsertArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryCountArgs} args - Arguments to filter Libraries to count.
     * @example
     * // Count the number of Libraries
     * const count = await prisma.library.count({
     *   where: {
     *     // ... the filter for the Libraries we want to count
     *   }
     * })
    **/
    count<T extends LibraryCountArgs>(
      args?: Subset<T, LibraryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibraryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Library.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LibraryAggregateArgs>(args: Subset<T, LibraryAggregateArgs>): Prisma.PrismaPromise<GetLibraryAggregateType<T>>

    /**
     * Group by Library.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryGroupByArgs} args - Group by arguments.
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
      T extends LibraryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibraryGroupByArgs['orderBy'] }
        : { orderBy?: LibraryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LibraryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibraryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Library model
   */
  readonly fields: LibraryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Library.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibraryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entries<T extends Library$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Library$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Library model
   */
  interface LibraryFieldRefs {
    readonly id: FieldRef<"Library", 'Int'>
    readonly userId: FieldRef<"Library", 'Int'>
    readonly name: FieldRef<"Library", 'String'>
    readonly type: FieldRef<"Library", 'LibraryType'>
  }
    

  // Custom InputTypes
  /**
   * Library findUnique
   */
  export type LibraryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library findUniqueOrThrow
   */
  export type LibraryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library findFirst
   */
  export type LibraryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libraries.
     */
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * Library findFirstOrThrow
   */
  export type LibraryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libraries.
     */
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * Library findMany
   */
  export type LibraryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Libraries to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * Library create
   */
  export type LibraryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The data needed to create a Library.
     */
    data: XOR<LibraryCreateInput, LibraryUncheckedCreateInput>
  }

  /**
   * Library createMany
   */
  export type LibraryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Libraries.
     */
    data: LibraryCreateManyInput | LibraryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Library createManyAndReturn
   */
  export type LibraryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * The data used to create many Libraries.
     */
    data: LibraryCreateManyInput | LibraryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Library update
   */
  export type LibraryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The data needed to update a Library.
     */
    data: XOR<LibraryUpdateInput, LibraryUncheckedUpdateInput>
    /**
     * Choose, which Library to update.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library updateMany
   */
  export type LibraryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Libraries.
     */
    data: XOR<LibraryUpdateManyMutationInput, LibraryUncheckedUpdateManyInput>
    /**
     * Filter which Libraries to update
     */
    where?: LibraryWhereInput
    /**
     * Limit how many Libraries to update.
     */
    limit?: number
  }

  /**
   * Library updateManyAndReturn
   */
  export type LibraryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * The data used to update Libraries.
     */
    data: XOR<LibraryUpdateManyMutationInput, LibraryUncheckedUpdateManyInput>
    /**
     * Filter which Libraries to update
     */
    where?: LibraryWhereInput
    /**
     * Limit how many Libraries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Library upsert
   */
  export type LibraryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The filter to search for the Library to update in case it exists.
     */
    where: LibraryWhereUniqueInput
    /**
     * In case the Library found by the `where` argument doesn't exist, create a new Library with this data.
     */
    create: XOR<LibraryCreateInput, LibraryUncheckedCreateInput>
    /**
     * In case the Library was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibraryUpdateInput, LibraryUncheckedUpdateInput>
  }

  /**
   * Library delete
   */
  export type LibraryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter which Library to delete.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library deleteMany
   */
  export type LibraryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libraries to delete
     */
    where?: LibraryWhereInput
    /**
     * Limit how many Libraries to delete.
     */
    limit?: number
  }

  /**
   * Library.entries
   */
  export type Library$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryEntry
     */
    select?: LibraryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryEntry
     */
    omit?: LibraryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryEntryInclude<ExtArgs> | null
    where?: LibraryEntryWhereInput
    orderBy?: LibraryEntryOrderByWithRelationInput | LibraryEntryOrderByWithRelationInput[]
    cursor?: LibraryEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibraryEntryScalarFieldEnum | LibraryEntryScalarFieldEnum[]
  }

  /**
   * Library without action
   */
  export type LibraryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
  }


  /**
   * Model LibraryEntry
   */

  export type AggregateLibraryEntry = {
    _count: LibraryEntryCountAggregateOutputType | null
    _avg: LibraryEntryAvgAggregateOutputType | null
    _sum: LibraryEntrySumAggregateOutputType | null
    _min: LibraryEntryMinAggregateOutputType | null
    _max: LibraryEntryMaxAggregateOutputType | null
  }

  export type LibraryEntryAvgAggregateOutputType = {
    id: number | null
    libraryId: number | null
    bookId: number | null
  }

  export type LibraryEntrySumAggregateOutputType = {
    id: number | null
    libraryId: number | null
    bookId: number | null
  }

  export type LibraryEntryMinAggregateOutputType = {
    id: number | null
    libraryId: number | null
    bookId: number | null
    addedAt: Date | null
  }

  export type LibraryEntryMaxAggregateOutputType = {
    id: number | null
    libraryId: number | null
    bookId: number | null
    addedAt: Date | null
  }

  export type LibraryEntryCountAggregateOutputType = {
    id: number
    libraryId: number
    bookId: number
    addedAt: number
    _all: number
  }


  export type LibraryEntryAvgAggregateInputType = {
    id?: true
    libraryId?: true
    bookId?: true
  }

  export type LibraryEntrySumAggregateInputType = {
    id?: true
    libraryId?: true
    bookId?: true
  }

  export type LibraryEntryMinAggregateInputType = {
    id?: true
    libraryId?: true
    bookId?: true
    addedAt?: true
  }

  export type LibraryEntryMaxAggregateInputType = {
    id?: true
    libraryId?: true
    bookId?: true
    addedAt?: true
  }

  export type LibraryEntryCountAggregateInputType = {
    id?: true
    libraryId?: true
    bookId?: true
    addedAt?: true
    _all?: true
  }

  export type LibraryEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryEntry to aggregate.
     */
    where?: LibraryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryEntries to fetch.
     */
    orderBy?: LibraryEntryOrderByWithRelationInput | LibraryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibraryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LibraryEntries
    **/
    _count?: true | LibraryEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibraryEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibraryEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibraryEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibraryEntryMaxAggregateInputType
  }

  export type GetLibraryEntryAggregateType<T extends LibraryEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateLibraryEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibraryEntry[P]>
      : GetScalarType<T[P], AggregateLibraryEntry[P]>
  }




  export type LibraryEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryEntryWhereInput
    orderBy?: LibraryEntryOrderByWithAggregationInput | LibraryEntryOrderByWithAggregationInput[]
    by: LibraryEntryScalarFieldEnum[] | LibraryEntryScalarFieldEnum
    having?: LibraryEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibraryEntryCountAggregateInputType | true
    _avg?: LibraryEntryAvgAggregateInputType
    _sum?: LibraryEntrySumAggregateInputType
    _min?: LibraryEntryMinAggregateInputType
    _max?: LibraryEntryMaxAggregateInputType
  }

  export type LibraryEntryGroupByOutputType = {
    id: number
    libraryId: number
    bookId: number
    addedAt: Date
    _count: LibraryEntryCountAggregateOutputType | null
    _avg: LibraryEntryAvgAggregateOutputType | null
    _sum: LibraryEntrySumAggregateOutputType | null
    _min: LibraryEntryMinAggregateOutputType | null
    _max: LibraryEntryMaxAggregateOutputType | null
  }

  type GetLibraryEntryGroupByPayload<T extends LibraryEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibraryEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibraryEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibraryEntryGroupByOutputType[P]>
            : GetScalarType<T[P], LibraryEntryGroupByOutputType[P]>
        }
      >
    >


  export type LibraryEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libraryId?: boolean
    bookId?: boolean
    addedAt?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libraryEntry"]>

  export type LibraryEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libraryId?: boolean
    bookId?: boolean
    addedAt?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libraryEntry"]>

  export type LibraryEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libraryId?: boolean
    bookId?: boolean
    addedAt?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libraryEntry"]>

  export type LibraryEntrySelectScalar = {
    id?: boolean
    libraryId?: boolean
    bookId?: boolean
    addedAt?: boolean
  }

  export type LibraryEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libraryId" | "bookId" | "addedAt", ExtArgs["result"]["libraryEntry"]>
  export type LibraryEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type LibraryEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type LibraryEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $LibraryEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LibraryEntry"
    objects: {
      library: Prisma.$LibraryPayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libraryId: number
      bookId: number
      addedAt: Date
    }, ExtArgs["result"]["libraryEntry"]>
    composites: {}
  }

  type LibraryEntryGetPayload<S extends boolean | null | undefined | LibraryEntryDefaultArgs> = $Result.GetResult<Prisma.$LibraryEntryPayload, S>

  type LibraryEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibraryEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibraryEntryCountAggregateInputType | true
    }

  export interface LibraryEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LibraryEntry'], meta: { name: 'LibraryEntry' } }
    /**
     * Find zero or one LibraryEntry that matches the filter.
     * @param {LibraryEntryFindUniqueArgs} args - Arguments to find a LibraryEntry
     * @example
     * // Get one LibraryEntry
     * const libraryEntry = await prisma.libraryEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibraryEntryFindUniqueArgs>(args: SelectSubset<T, LibraryEntryFindUniqueArgs<ExtArgs>>): Prisma__LibraryEntryClient<$Result.GetResult<Prisma.$LibraryEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LibraryEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibraryEntryFindUniqueOrThrowArgs} args - Arguments to find a LibraryEntry
     * @example
     * // Get one LibraryEntry
     * const libraryEntry = await prisma.libraryEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibraryEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, LibraryEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibraryEntryClient<$Result.GetResult<Prisma.$LibraryEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LibraryEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryEntryFindFirstArgs} args - Arguments to find a LibraryEntry
     * @example
     * // Get one LibraryEntry
     * const libraryEntry = await prisma.libraryEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibraryEntryFindFirstArgs>(args?: SelectSubset<T, LibraryEntryFindFirstArgs<ExtArgs>>): Prisma__LibraryEntryClient<$Result.GetResult<Prisma.$LibraryEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LibraryEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryEntryFindFirstOrThrowArgs} args - Arguments to find a LibraryEntry
     * @example
     * // Get one LibraryEntry
     * const libraryEntry = await prisma.libraryEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibraryEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, LibraryEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibraryEntryClient<$Result.GetResult<Prisma.$LibraryEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LibraryEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LibraryEntries
     * const libraryEntries = await prisma.libraryEntry.findMany()
     * 
     * // Get first 10 LibraryEntries
     * const libraryEntries = await prisma.libraryEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libraryEntryWithIdOnly = await prisma.libraryEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibraryEntryFindManyArgs>(args?: SelectSubset<T, LibraryEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LibraryEntry.
     * @param {LibraryEntryCreateArgs} args - Arguments to create a LibraryEntry.
     * @example
     * // Create one LibraryEntry
     * const LibraryEntry = await prisma.libraryEntry.create({
     *   data: {
     *     // ... data to create a LibraryEntry
     *   }
     * })
     * 
     */
    create<T extends LibraryEntryCreateArgs>(args: SelectSubset<T, LibraryEntryCreateArgs<ExtArgs>>): Prisma__LibraryEntryClient<$Result.GetResult<Prisma.$LibraryEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LibraryEntries.
     * @param {LibraryEntryCreateManyArgs} args - Arguments to create many LibraryEntries.
     * @example
     * // Create many LibraryEntries
     * const libraryEntry = await prisma.libraryEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibraryEntryCreateManyArgs>(args?: SelectSubset<T, LibraryEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LibraryEntries and returns the data saved in the database.
     * @param {LibraryEntryCreateManyAndReturnArgs} args - Arguments to create many LibraryEntries.
     * @example
     * // Create many LibraryEntries
     * const libraryEntry = await prisma.libraryEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LibraryEntries and only return the `id`
     * const libraryEntryWithIdOnly = await prisma.libraryEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibraryEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, LibraryEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LibraryEntry.
     * @param {LibraryEntryDeleteArgs} args - Arguments to delete one LibraryEntry.
     * @example
     * // Delete one LibraryEntry
     * const LibraryEntry = await prisma.libraryEntry.delete({
     *   where: {
     *     // ... filter to delete one LibraryEntry
     *   }
     * })
     * 
     */
    delete<T extends LibraryEntryDeleteArgs>(args: SelectSubset<T, LibraryEntryDeleteArgs<ExtArgs>>): Prisma__LibraryEntryClient<$Result.GetResult<Prisma.$LibraryEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LibraryEntry.
     * @param {LibraryEntryUpdateArgs} args - Arguments to update one LibraryEntry.
     * @example
     * // Update one LibraryEntry
     * const libraryEntry = await prisma.libraryEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibraryEntryUpdateArgs>(args: SelectSubset<T, LibraryEntryUpdateArgs<ExtArgs>>): Prisma__LibraryEntryClient<$Result.GetResult<Prisma.$LibraryEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LibraryEntries.
     * @param {LibraryEntryDeleteManyArgs} args - Arguments to filter LibraryEntries to delete.
     * @example
     * // Delete a few LibraryEntries
     * const { count } = await prisma.libraryEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibraryEntryDeleteManyArgs>(args?: SelectSubset<T, LibraryEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LibraryEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LibraryEntries
     * const libraryEntry = await prisma.libraryEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibraryEntryUpdateManyArgs>(args: SelectSubset<T, LibraryEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LibraryEntries and returns the data updated in the database.
     * @param {LibraryEntryUpdateManyAndReturnArgs} args - Arguments to update many LibraryEntries.
     * @example
     * // Update many LibraryEntries
     * const libraryEntry = await prisma.libraryEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LibraryEntries and only return the `id`
     * const libraryEntryWithIdOnly = await prisma.libraryEntry.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends LibraryEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, LibraryEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LibraryEntry.
     * @param {LibraryEntryUpsertArgs} args - Arguments to update or create a LibraryEntry.
     * @example
     * // Update or create a LibraryEntry
     * const libraryEntry = await prisma.libraryEntry.upsert({
     *   create: {
     *     // ... data to create a LibraryEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LibraryEntry we want to update
     *   }
     * })
     */
    upsert<T extends LibraryEntryUpsertArgs>(args: SelectSubset<T, LibraryEntryUpsertArgs<ExtArgs>>): Prisma__LibraryEntryClient<$Result.GetResult<Prisma.$LibraryEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LibraryEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryEntryCountArgs} args - Arguments to filter LibraryEntries to count.
     * @example
     * // Count the number of LibraryEntries
     * const count = await prisma.libraryEntry.count({
     *   where: {
     *     // ... the filter for the LibraryEntries we want to count
     *   }
     * })
    **/
    count<T extends LibraryEntryCountArgs>(
      args?: Subset<T, LibraryEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibraryEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LibraryEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LibraryEntryAggregateArgs>(args: Subset<T, LibraryEntryAggregateArgs>): Prisma.PrismaPromise<GetLibraryEntryAggregateType<T>>

    /**
     * Group by LibraryEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryEntryGroupByArgs} args - Group by arguments.
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
      T extends LibraryEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibraryEntryGroupByArgs['orderBy'] }
        : { orderBy?: LibraryEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LibraryEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibraryEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LibraryEntry model
   */
  readonly fields: LibraryEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LibraryEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibraryEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    library<T extends LibraryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibraryDefaultArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LibraryEntry model
   */
  interface LibraryEntryFieldRefs {
    readonly id: FieldRef<"LibraryEntry", 'Int'>
    readonly libraryId: FieldRef<"LibraryEntry", 'Int'>
    readonly bookId: FieldRef<"LibraryEntry", 'Int'>
    readonly addedAt: FieldRef<"LibraryEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LibraryEntry findUnique
   */
  export type LibraryEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryEntry
     */
    select?: LibraryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryEntry
     */
    omit?: LibraryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryEntryInclude<ExtArgs> | null
    /**
     * Filter, which LibraryEntry to fetch.
     */
    where: LibraryEntryWhereUniqueInput
  }

  /**
   * LibraryEntry findUniqueOrThrow
   */
  export type LibraryEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryEntry
     */
    select?: LibraryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryEntry
     */
    omit?: LibraryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryEntryInclude<ExtArgs> | null
    /**
     * Filter, which LibraryEntry to fetch.
     */
    where: LibraryEntryWhereUniqueInput
  }

  /**
   * LibraryEntry findFirst
   */
  export type LibraryEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryEntry
     */
    select?: LibraryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryEntry
     */
    omit?: LibraryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryEntryInclude<ExtArgs> | null
    /**
     * Filter, which LibraryEntry to fetch.
     */
    where?: LibraryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryEntries to fetch.
     */
    orderBy?: LibraryEntryOrderByWithRelationInput | LibraryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryEntries.
     */
    cursor?: LibraryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryEntries.
     */
    distinct?: LibraryEntryScalarFieldEnum | LibraryEntryScalarFieldEnum[]
  }

  /**
   * LibraryEntry findFirstOrThrow
   */
  export type LibraryEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryEntry
     */
    select?: LibraryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryEntry
     */
    omit?: LibraryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryEntryInclude<ExtArgs> | null
    /**
     * Filter, which LibraryEntry to fetch.
     */
    where?: LibraryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryEntries to fetch.
     */
    orderBy?: LibraryEntryOrderByWithRelationInput | LibraryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryEntries.
     */
    cursor?: LibraryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryEntries.
     */
    distinct?: LibraryEntryScalarFieldEnum | LibraryEntryScalarFieldEnum[]
  }

  /**
   * LibraryEntry findMany
   */
  export type LibraryEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryEntry
     */
    select?: LibraryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryEntry
     */
    omit?: LibraryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryEntryInclude<ExtArgs> | null
    /**
     * Filter, which LibraryEntries to fetch.
     */
    where?: LibraryEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryEntries to fetch.
     */
    orderBy?: LibraryEntryOrderByWithRelationInput | LibraryEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LibraryEntries.
     */
    cursor?: LibraryEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryEntries.
     */
    skip?: number
    distinct?: LibraryEntryScalarFieldEnum | LibraryEntryScalarFieldEnum[]
  }

  /**
   * LibraryEntry create
   */
  export type LibraryEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryEntry
     */
    select?: LibraryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryEntry
     */
    omit?: LibraryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a LibraryEntry.
     */
    data: XOR<LibraryEntryCreateInput, LibraryEntryUncheckedCreateInput>
  }

  /**
   * LibraryEntry createMany
   */
  export type LibraryEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LibraryEntries.
     */
    data: LibraryEntryCreateManyInput | LibraryEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LibraryEntry createManyAndReturn
   */
  export type LibraryEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryEntry
     */
    select?: LibraryEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryEntry
     */
    omit?: LibraryEntryOmit<ExtArgs> | null
    /**
     * The data used to create many LibraryEntries.
     */
    data: LibraryEntryCreateManyInput | LibraryEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LibraryEntry update
   */
  export type LibraryEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryEntry
     */
    select?: LibraryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryEntry
     */
    omit?: LibraryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a LibraryEntry.
     */
    data: XOR<LibraryEntryUpdateInput, LibraryEntryUncheckedUpdateInput>
    /**
     * Choose, which LibraryEntry to update.
     */
    where: LibraryEntryWhereUniqueInput
  }

  /**
   * LibraryEntry updateMany
   */
  export type LibraryEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LibraryEntries.
     */
    data: XOR<LibraryEntryUpdateManyMutationInput, LibraryEntryUncheckedUpdateManyInput>
    /**
     * Filter which LibraryEntries to update
     */
    where?: LibraryEntryWhereInput
    /**
     * Limit how many LibraryEntries to update.
     */
    limit?: number
  }

  /**
   * LibraryEntry updateManyAndReturn
   */
  export type LibraryEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryEntry
     */
    select?: LibraryEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryEntry
     */
    omit?: LibraryEntryOmit<ExtArgs> | null
    /**
     * The data used to update LibraryEntries.
     */
    data: XOR<LibraryEntryUpdateManyMutationInput, LibraryEntryUncheckedUpdateManyInput>
    /**
     * Filter which LibraryEntries to update
     */
    where?: LibraryEntryWhereInput
    /**
     * Limit how many LibraryEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LibraryEntry upsert
   */
  export type LibraryEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryEntry
     */
    select?: LibraryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryEntry
     */
    omit?: LibraryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the LibraryEntry to update in case it exists.
     */
    where: LibraryEntryWhereUniqueInput
    /**
     * In case the LibraryEntry found by the `where` argument doesn't exist, create a new LibraryEntry with this data.
     */
    create: XOR<LibraryEntryCreateInput, LibraryEntryUncheckedCreateInput>
    /**
     * In case the LibraryEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibraryEntryUpdateInput, LibraryEntryUncheckedUpdateInput>
  }

  /**
   * LibraryEntry delete
   */
  export type LibraryEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryEntry
     */
    select?: LibraryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryEntry
     */
    omit?: LibraryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryEntryInclude<ExtArgs> | null
    /**
     * Filter which LibraryEntry to delete.
     */
    where: LibraryEntryWhereUniqueInput
  }

  /**
   * LibraryEntry deleteMany
   */
  export type LibraryEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryEntries to delete
     */
    where?: LibraryEntryWhereInput
    /**
     * Limit how many LibraryEntries to delete.
     */
    limit?: number
  }

  /**
   * LibraryEntry without action
   */
  export type LibraryEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryEntry
     */
    select?: LibraryEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryEntry
     */
    omit?: LibraryEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryEntryInclude<ExtArgs> | null
  }


  /**
   * Model ReadingChallenge
   */

  export type AggregateReadingChallenge = {
    _count: ReadingChallengeCountAggregateOutputType | null
    _avg: ReadingChallengeAvgAggregateOutputType | null
    _sum: ReadingChallengeSumAggregateOutputType | null
    _min: ReadingChallengeMinAggregateOutputType | null
    _max: ReadingChallengeMaxAggregateOutputType | null
  }

  export type ReadingChallengeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    goal: number | null
    completed: number | null
  }

  export type ReadingChallengeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    goal: number | null
    completed: number | null
  }

  export type ReadingChallengeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    goal: number | null
    completed: number | null
  }

  export type ReadingChallengeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    year: number | null
    goal: number | null
    completed: number | null
  }

  export type ReadingChallengeCountAggregateOutputType = {
    id: number
    userId: number
    year: number
    goal: number
    completed: number
    _all: number
  }


  export type ReadingChallengeAvgAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    goal?: true
    completed?: true
  }

  export type ReadingChallengeSumAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    goal?: true
    completed?: true
  }

  export type ReadingChallengeMinAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    goal?: true
    completed?: true
  }

  export type ReadingChallengeMaxAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    goal?: true
    completed?: true
  }

  export type ReadingChallengeCountAggregateInputType = {
    id?: true
    userId?: true
    year?: true
    goal?: true
    completed?: true
    _all?: true
  }

  export type ReadingChallengeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReadingChallenge to aggregate.
     */
    where?: ReadingChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingChallenges to fetch.
     */
    orderBy?: ReadingChallengeOrderByWithRelationInput | ReadingChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReadingChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReadingChallenges
    **/
    _count?: true | ReadingChallengeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReadingChallengeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReadingChallengeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReadingChallengeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReadingChallengeMaxAggregateInputType
  }

  export type GetReadingChallengeAggregateType<T extends ReadingChallengeAggregateArgs> = {
        [P in keyof T & keyof AggregateReadingChallenge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReadingChallenge[P]>
      : GetScalarType<T[P], AggregateReadingChallenge[P]>
  }




  export type ReadingChallengeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReadingChallengeWhereInput
    orderBy?: ReadingChallengeOrderByWithAggregationInput | ReadingChallengeOrderByWithAggregationInput[]
    by: ReadingChallengeScalarFieldEnum[] | ReadingChallengeScalarFieldEnum
    having?: ReadingChallengeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReadingChallengeCountAggregateInputType | true
    _avg?: ReadingChallengeAvgAggregateInputType
    _sum?: ReadingChallengeSumAggregateInputType
    _min?: ReadingChallengeMinAggregateInputType
    _max?: ReadingChallengeMaxAggregateInputType
  }

  export type ReadingChallengeGroupByOutputType = {
    id: number
    userId: number
    year: number
    goal: number
    completed: number
    _count: ReadingChallengeCountAggregateOutputType | null
    _avg: ReadingChallengeAvgAggregateOutputType | null
    _sum: ReadingChallengeSumAggregateOutputType | null
    _min: ReadingChallengeMinAggregateOutputType | null
    _max: ReadingChallengeMaxAggregateOutputType | null
  }

  type GetReadingChallengeGroupByPayload<T extends ReadingChallengeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReadingChallengeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReadingChallengeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReadingChallengeGroupByOutputType[P]>
            : GetScalarType<T[P], ReadingChallengeGroupByOutputType[P]>
        }
      >
    >


  export type ReadingChallengeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    goal?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    entries?: boolean | ReadingChallenge$entriesArgs<ExtArgs>
    _count?: boolean | ReadingChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readingChallenge"]>

  export type ReadingChallengeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    goal?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readingChallenge"]>

  export type ReadingChallengeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    year?: boolean
    goal?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["readingChallenge"]>

  export type ReadingChallengeSelectScalar = {
    id?: boolean
    userId?: boolean
    year?: boolean
    goal?: boolean
    completed?: boolean
  }

  export type ReadingChallengeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "year" | "goal" | "completed", ExtArgs["result"]["readingChallenge"]>
  export type ReadingChallengeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    entries?: boolean | ReadingChallenge$entriesArgs<ExtArgs>
    _count?: boolean | ReadingChallengeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReadingChallengeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReadingChallengeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReadingChallengePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReadingChallenge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      entries: Prisma.$ChallengeEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      year: number
      goal: number
      completed: number
    }, ExtArgs["result"]["readingChallenge"]>
    composites: {}
  }

  type ReadingChallengeGetPayload<S extends boolean | null | undefined | ReadingChallengeDefaultArgs> = $Result.GetResult<Prisma.$ReadingChallengePayload, S>

  type ReadingChallengeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReadingChallengeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReadingChallengeCountAggregateInputType | true
    }

  export interface ReadingChallengeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReadingChallenge'], meta: { name: 'ReadingChallenge' } }
    /**
     * Find zero or one ReadingChallenge that matches the filter.
     * @param {ReadingChallengeFindUniqueArgs} args - Arguments to find a ReadingChallenge
     * @example
     * // Get one ReadingChallenge
     * const readingChallenge = await prisma.readingChallenge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReadingChallengeFindUniqueArgs>(args: SelectSubset<T, ReadingChallengeFindUniqueArgs<ExtArgs>>): Prisma__ReadingChallengeClient<$Result.GetResult<Prisma.$ReadingChallengePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReadingChallenge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReadingChallengeFindUniqueOrThrowArgs} args - Arguments to find a ReadingChallenge
     * @example
     * // Get one ReadingChallenge
     * const readingChallenge = await prisma.readingChallenge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReadingChallengeFindUniqueOrThrowArgs>(args: SelectSubset<T, ReadingChallengeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReadingChallengeClient<$Result.GetResult<Prisma.$ReadingChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReadingChallenge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingChallengeFindFirstArgs} args - Arguments to find a ReadingChallenge
     * @example
     * // Get one ReadingChallenge
     * const readingChallenge = await prisma.readingChallenge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReadingChallengeFindFirstArgs>(args?: SelectSubset<T, ReadingChallengeFindFirstArgs<ExtArgs>>): Prisma__ReadingChallengeClient<$Result.GetResult<Prisma.$ReadingChallengePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReadingChallenge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingChallengeFindFirstOrThrowArgs} args - Arguments to find a ReadingChallenge
     * @example
     * // Get one ReadingChallenge
     * const readingChallenge = await prisma.readingChallenge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReadingChallengeFindFirstOrThrowArgs>(args?: SelectSubset<T, ReadingChallengeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReadingChallengeClient<$Result.GetResult<Prisma.$ReadingChallengePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReadingChallenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingChallengeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReadingChallenges
     * const readingChallenges = await prisma.readingChallenge.findMany()
     * 
     * // Get first 10 ReadingChallenges
     * const readingChallenges = await prisma.readingChallenge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const readingChallengeWithIdOnly = await prisma.readingChallenge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReadingChallengeFindManyArgs>(args?: SelectSubset<T, ReadingChallengeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingChallengePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReadingChallenge.
     * @param {ReadingChallengeCreateArgs} args - Arguments to create a ReadingChallenge.
     * @example
     * // Create one ReadingChallenge
     * const ReadingChallenge = await prisma.readingChallenge.create({
     *   data: {
     *     // ... data to create a ReadingChallenge
     *   }
     * })
     * 
     */
    create<T extends ReadingChallengeCreateArgs>(args: SelectSubset<T, ReadingChallengeCreateArgs<ExtArgs>>): Prisma__ReadingChallengeClient<$Result.GetResult<Prisma.$ReadingChallengePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReadingChallenges.
     * @param {ReadingChallengeCreateManyArgs} args - Arguments to create many ReadingChallenges.
     * @example
     * // Create many ReadingChallenges
     * const readingChallenge = await prisma.readingChallenge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReadingChallengeCreateManyArgs>(args?: SelectSubset<T, ReadingChallengeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReadingChallenges and returns the data saved in the database.
     * @param {ReadingChallengeCreateManyAndReturnArgs} args - Arguments to create many ReadingChallenges.
     * @example
     * // Create many ReadingChallenges
     * const readingChallenge = await prisma.readingChallenge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReadingChallenges and only return the `id`
     * const readingChallengeWithIdOnly = await prisma.readingChallenge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReadingChallengeCreateManyAndReturnArgs>(args?: SelectSubset<T, ReadingChallengeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingChallengePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReadingChallenge.
     * @param {ReadingChallengeDeleteArgs} args - Arguments to delete one ReadingChallenge.
     * @example
     * // Delete one ReadingChallenge
     * const ReadingChallenge = await prisma.readingChallenge.delete({
     *   where: {
     *     // ... filter to delete one ReadingChallenge
     *   }
     * })
     * 
     */
    delete<T extends ReadingChallengeDeleteArgs>(args: SelectSubset<T, ReadingChallengeDeleteArgs<ExtArgs>>): Prisma__ReadingChallengeClient<$Result.GetResult<Prisma.$ReadingChallengePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReadingChallenge.
     * @param {ReadingChallengeUpdateArgs} args - Arguments to update one ReadingChallenge.
     * @example
     * // Update one ReadingChallenge
     * const readingChallenge = await prisma.readingChallenge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReadingChallengeUpdateArgs>(args: SelectSubset<T, ReadingChallengeUpdateArgs<ExtArgs>>): Prisma__ReadingChallengeClient<$Result.GetResult<Prisma.$ReadingChallengePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReadingChallenges.
     * @param {ReadingChallengeDeleteManyArgs} args - Arguments to filter ReadingChallenges to delete.
     * @example
     * // Delete a few ReadingChallenges
     * const { count } = await prisma.readingChallenge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReadingChallengeDeleteManyArgs>(args?: SelectSubset<T, ReadingChallengeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReadingChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingChallengeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReadingChallenges
     * const readingChallenge = await prisma.readingChallenge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReadingChallengeUpdateManyArgs>(args: SelectSubset<T, ReadingChallengeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReadingChallenges and returns the data updated in the database.
     * @param {ReadingChallengeUpdateManyAndReturnArgs} args - Arguments to update many ReadingChallenges.
     * @example
     * // Update many ReadingChallenges
     * const readingChallenge = await prisma.readingChallenge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReadingChallenges and only return the `id`
     * const readingChallengeWithIdOnly = await prisma.readingChallenge.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ReadingChallengeUpdateManyAndReturnArgs>(args: SelectSubset<T, ReadingChallengeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReadingChallengePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReadingChallenge.
     * @param {ReadingChallengeUpsertArgs} args - Arguments to update or create a ReadingChallenge.
     * @example
     * // Update or create a ReadingChallenge
     * const readingChallenge = await prisma.readingChallenge.upsert({
     *   create: {
     *     // ... data to create a ReadingChallenge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReadingChallenge we want to update
     *   }
     * })
     */
    upsert<T extends ReadingChallengeUpsertArgs>(args: SelectSubset<T, ReadingChallengeUpsertArgs<ExtArgs>>): Prisma__ReadingChallengeClient<$Result.GetResult<Prisma.$ReadingChallengePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReadingChallenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingChallengeCountArgs} args - Arguments to filter ReadingChallenges to count.
     * @example
     * // Count the number of ReadingChallenges
     * const count = await prisma.readingChallenge.count({
     *   where: {
     *     // ... the filter for the ReadingChallenges we want to count
     *   }
     * })
    **/
    count<T extends ReadingChallengeCountArgs>(
      args?: Subset<T, ReadingChallengeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReadingChallengeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReadingChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingChallengeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReadingChallengeAggregateArgs>(args: Subset<T, ReadingChallengeAggregateArgs>): Prisma.PrismaPromise<GetReadingChallengeAggregateType<T>>

    /**
     * Group by ReadingChallenge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReadingChallengeGroupByArgs} args - Group by arguments.
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
      T extends ReadingChallengeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReadingChallengeGroupByArgs['orderBy'] }
        : { orderBy?: ReadingChallengeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReadingChallengeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReadingChallengeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReadingChallenge model
   */
  readonly fields: ReadingChallengeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReadingChallenge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReadingChallengeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entries<T extends ReadingChallenge$entriesArgs<ExtArgs> = {}>(args?: Subset<T, ReadingChallenge$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ReadingChallenge model
   */
  interface ReadingChallengeFieldRefs {
    readonly id: FieldRef<"ReadingChallenge", 'Int'>
    readonly userId: FieldRef<"ReadingChallenge", 'Int'>
    readonly year: FieldRef<"ReadingChallenge", 'Int'>
    readonly goal: FieldRef<"ReadingChallenge", 'Int'>
    readonly completed: FieldRef<"ReadingChallenge", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ReadingChallenge findUnique
   */
  export type ReadingChallengeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingChallenge
     */
    select?: ReadingChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingChallenge
     */
    omit?: ReadingChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingChallengeInclude<ExtArgs> | null
    /**
     * Filter, which ReadingChallenge to fetch.
     */
    where: ReadingChallengeWhereUniqueInput
  }

  /**
   * ReadingChallenge findUniqueOrThrow
   */
  export type ReadingChallengeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingChallenge
     */
    select?: ReadingChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingChallenge
     */
    omit?: ReadingChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingChallengeInclude<ExtArgs> | null
    /**
     * Filter, which ReadingChallenge to fetch.
     */
    where: ReadingChallengeWhereUniqueInput
  }

  /**
   * ReadingChallenge findFirst
   */
  export type ReadingChallengeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingChallenge
     */
    select?: ReadingChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingChallenge
     */
    omit?: ReadingChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingChallengeInclude<ExtArgs> | null
    /**
     * Filter, which ReadingChallenge to fetch.
     */
    where?: ReadingChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingChallenges to fetch.
     */
    orderBy?: ReadingChallengeOrderByWithRelationInput | ReadingChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReadingChallenges.
     */
    cursor?: ReadingChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReadingChallenges.
     */
    distinct?: ReadingChallengeScalarFieldEnum | ReadingChallengeScalarFieldEnum[]
  }

  /**
   * ReadingChallenge findFirstOrThrow
   */
  export type ReadingChallengeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingChallenge
     */
    select?: ReadingChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingChallenge
     */
    omit?: ReadingChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingChallengeInclude<ExtArgs> | null
    /**
     * Filter, which ReadingChallenge to fetch.
     */
    where?: ReadingChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingChallenges to fetch.
     */
    orderBy?: ReadingChallengeOrderByWithRelationInput | ReadingChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReadingChallenges.
     */
    cursor?: ReadingChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingChallenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReadingChallenges.
     */
    distinct?: ReadingChallengeScalarFieldEnum | ReadingChallengeScalarFieldEnum[]
  }

  /**
   * ReadingChallenge findMany
   */
  export type ReadingChallengeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingChallenge
     */
    select?: ReadingChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingChallenge
     */
    omit?: ReadingChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingChallengeInclude<ExtArgs> | null
    /**
     * Filter, which ReadingChallenges to fetch.
     */
    where?: ReadingChallengeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReadingChallenges to fetch.
     */
    orderBy?: ReadingChallengeOrderByWithRelationInput | ReadingChallengeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReadingChallenges.
     */
    cursor?: ReadingChallengeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReadingChallenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReadingChallenges.
     */
    skip?: number
    distinct?: ReadingChallengeScalarFieldEnum | ReadingChallengeScalarFieldEnum[]
  }

  /**
   * ReadingChallenge create
   */
  export type ReadingChallengeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingChallenge
     */
    select?: ReadingChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingChallenge
     */
    omit?: ReadingChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingChallengeInclude<ExtArgs> | null
    /**
     * The data needed to create a ReadingChallenge.
     */
    data: XOR<ReadingChallengeCreateInput, ReadingChallengeUncheckedCreateInput>
  }

  /**
   * ReadingChallenge createMany
   */
  export type ReadingChallengeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReadingChallenges.
     */
    data: ReadingChallengeCreateManyInput | ReadingChallengeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReadingChallenge createManyAndReturn
   */
  export type ReadingChallengeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingChallenge
     */
    select?: ReadingChallengeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingChallenge
     */
    omit?: ReadingChallengeOmit<ExtArgs> | null
    /**
     * The data used to create many ReadingChallenges.
     */
    data: ReadingChallengeCreateManyInput | ReadingChallengeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingChallengeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReadingChallenge update
   */
  export type ReadingChallengeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingChallenge
     */
    select?: ReadingChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingChallenge
     */
    omit?: ReadingChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingChallengeInclude<ExtArgs> | null
    /**
     * The data needed to update a ReadingChallenge.
     */
    data: XOR<ReadingChallengeUpdateInput, ReadingChallengeUncheckedUpdateInput>
    /**
     * Choose, which ReadingChallenge to update.
     */
    where: ReadingChallengeWhereUniqueInput
  }

  /**
   * ReadingChallenge updateMany
   */
  export type ReadingChallengeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReadingChallenges.
     */
    data: XOR<ReadingChallengeUpdateManyMutationInput, ReadingChallengeUncheckedUpdateManyInput>
    /**
     * Filter which ReadingChallenges to update
     */
    where?: ReadingChallengeWhereInput
    /**
     * Limit how many ReadingChallenges to update.
     */
    limit?: number
  }

  /**
   * ReadingChallenge updateManyAndReturn
   */
  export type ReadingChallengeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingChallenge
     */
    select?: ReadingChallengeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingChallenge
     */
    omit?: ReadingChallengeOmit<ExtArgs> | null
    /**
     * The data used to update ReadingChallenges.
     */
    data: XOR<ReadingChallengeUpdateManyMutationInput, ReadingChallengeUncheckedUpdateManyInput>
    /**
     * Filter which ReadingChallenges to update
     */
    where?: ReadingChallengeWhereInput
    /**
     * Limit how many ReadingChallenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingChallengeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReadingChallenge upsert
   */
  export type ReadingChallengeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingChallenge
     */
    select?: ReadingChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingChallenge
     */
    omit?: ReadingChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingChallengeInclude<ExtArgs> | null
    /**
     * The filter to search for the ReadingChallenge to update in case it exists.
     */
    where: ReadingChallengeWhereUniqueInput
    /**
     * In case the ReadingChallenge found by the `where` argument doesn't exist, create a new ReadingChallenge with this data.
     */
    create: XOR<ReadingChallengeCreateInput, ReadingChallengeUncheckedCreateInput>
    /**
     * In case the ReadingChallenge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReadingChallengeUpdateInput, ReadingChallengeUncheckedUpdateInput>
  }

  /**
   * ReadingChallenge delete
   */
  export type ReadingChallengeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingChallenge
     */
    select?: ReadingChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingChallenge
     */
    omit?: ReadingChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingChallengeInclude<ExtArgs> | null
    /**
     * Filter which ReadingChallenge to delete.
     */
    where: ReadingChallengeWhereUniqueInput
  }

  /**
   * ReadingChallenge deleteMany
   */
  export type ReadingChallengeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReadingChallenges to delete
     */
    where?: ReadingChallengeWhereInput
    /**
     * Limit how many ReadingChallenges to delete.
     */
    limit?: number
  }

  /**
   * ReadingChallenge.entries
   */
  export type ReadingChallenge$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeEntry
     */
    select?: ChallengeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeEntry
     */
    omit?: ChallengeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeEntryInclude<ExtArgs> | null
    where?: ChallengeEntryWhereInput
    orderBy?: ChallengeEntryOrderByWithRelationInput | ChallengeEntryOrderByWithRelationInput[]
    cursor?: ChallengeEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengeEntryScalarFieldEnum | ChallengeEntryScalarFieldEnum[]
  }

  /**
   * ReadingChallenge without action
   */
  export type ReadingChallengeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReadingChallenge
     */
    select?: ReadingChallengeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReadingChallenge
     */
    omit?: ReadingChallengeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReadingChallengeInclude<ExtArgs> | null
  }


  /**
   * Model ChallengeEntry
   */

  export type AggregateChallengeEntry = {
    _count: ChallengeEntryCountAggregateOutputType | null
    _avg: ChallengeEntryAvgAggregateOutputType | null
    _sum: ChallengeEntrySumAggregateOutputType | null
    _min: ChallengeEntryMinAggregateOutputType | null
    _max: ChallengeEntryMaxAggregateOutputType | null
  }

  export type ChallengeEntryAvgAggregateOutputType = {
    id: number | null
    challengeId: number | null
    bookId: number | null
  }

  export type ChallengeEntrySumAggregateOutputType = {
    id: number | null
    challengeId: number | null
    bookId: number | null
  }

  export type ChallengeEntryMinAggregateOutputType = {
    id: number | null
    challengeId: number | null
    bookId: number | null
    finishedAt: Date | null
  }

  export type ChallengeEntryMaxAggregateOutputType = {
    id: number | null
    challengeId: number | null
    bookId: number | null
    finishedAt: Date | null
  }

  export type ChallengeEntryCountAggregateOutputType = {
    id: number
    challengeId: number
    bookId: number
    finishedAt: number
    _all: number
  }


  export type ChallengeEntryAvgAggregateInputType = {
    id?: true
    challengeId?: true
    bookId?: true
  }

  export type ChallengeEntrySumAggregateInputType = {
    id?: true
    challengeId?: true
    bookId?: true
  }

  export type ChallengeEntryMinAggregateInputType = {
    id?: true
    challengeId?: true
    bookId?: true
    finishedAt?: true
  }

  export type ChallengeEntryMaxAggregateInputType = {
    id?: true
    challengeId?: true
    bookId?: true
    finishedAt?: true
  }

  export type ChallengeEntryCountAggregateInputType = {
    id?: true
    challengeId?: true
    bookId?: true
    finishedAt?: true
    _all?: true
  }

  export type ChallengeEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeEntry to aggregate.
     */
    where?: ChallengeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeEntries to fetch.
     */
    orderBy?: ChallengeEntryOrderByWithRelationInput | ChallengeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallengeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChallengeEntries
    **/
    _count?: true | ChallengeEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengeEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengeEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengeEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengeEntryMaxAggregateInputType
  }

  export type GetChallengeEntryAggregateType<T extends ChallengeEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateChallengeEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallengeEntry[P]>
      : GetScalarType<T[P], AggregateChallengeEntry[P]>
  }




  export type ChallengeEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallengeEntryWhereInput
    orderBy?: ChallengeEntryOrderByWithAggregationInput | ChallengeEntryOrderByWithAggregationInput[]
    by: ChallengeEntryScalarFieldEnum[] | ChallengeEntryScalarFieldEnum
    having?: ChallengeEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengeEntryCountAggregateInputType | true
    _avg?: ChallengeEntryAvgAggregateInputType
    _sum?: ChallengeEntrySumAggregateInputType
    _min?: ChallengeEntryMinAggregateInputType
    _max?: ChallengeEntryMaxAggregateInputType
  }

  export type ChallengeEntryGroupByOutputType = {
    id: number
    challengeId: number
    bookId: number
    finishedAt: Date
    _count: ChallengeEntryCountAggregateOutputType | null
    _avg: ChallengeEntryAvgAggregateOutputType | null
    _sum: ChallengeEntrySumAggregateOutputType | null
    _min: ChallengeEntryMinAggregateOutputType | null
    _max: ChallengeEntryMaxAggregateOutputType | null
  }

  type GetChallengeEntryGroupByPayload<T extends ChallengeEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengeEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengeEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengeEntryGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengeEntryGroupByOutputType[P]>
        }
      >
    >


  export type ChallengeEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    bookId?: boolean
    finishedAt?: boolean
    challenge?: boolean | ReadingChallengeDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeEntry"]>

  export type ChallengeEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    bookId?: boolean
    finishedAt?: boolean
    challenge?: boolean | ReadingChallengeDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeEntry"]>

  export type ChallengeEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challengeId?: boolean
    bookId?: boolean
    finishedAt?: boolean
    challenge?: boolean | ReadingChallengeDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challengeEntry"]>

  export type ChallengeEntrySelectScalar = {
    id?: boolean
    challengeId?: boolean
    bookId?: boolean
    finishedAt?: boolean
  }

  export type ChallengeEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "challengeId" | "bookId" | "finishedAt", ExtArgs["result"]["challengeEntry"]>
  export type ChallengeEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ReadingChallengeDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type ChallengeEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ReadingChallengeDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type ChallengeEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge?: boolean | ReadingChallengeDefaultArgs<ExtArgs>
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $ChallengeEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChallengeEntry"
    objects: {
      challenge: Prisma.$ReadingChallengePayload<ExtArgs>
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      challengeId: number
      bookId: number
      finishedAt: Date
    }, ExtArgs["result"]["challengeEntry"]>
    composites: {}
  }

  type ChallengeEntryGetPayload<S extends boolean | null | undefined | ChallengeEntryDefaultArgs> = $Result.GetResult<Prisma.$ChallengeEntryPayload, S>

  type ChallengeEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChallengeEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengeEntryCountAggregateInputType | true
    }

  export interface ChallengeEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChallengeEntry'], meta: { name: 'ChallengeEntry' } }
    /**
     * Find zero or one ChallengeEntry that matches the filter.
     * @param {ChallengeEntryFindUniqueArgs} args - Arguments to find a ChallengeEntry
     * @example
     * // Get one ChallengeEntry
     * const challengeEntry = await prisma.challengeEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallengeEntryFindUniqueArgs>(args: SelectSubset<T, ChallengeEntryFindUniqueArgs<ExtArgs>>): Prisma__ChallengeEntryClient<$Result.GetResult<Prisma.$ChallengeEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChallengeEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChallengeEntryFindUniqueOrThrowArgs} args - Arguments to find a ChallengeEntry
     * @example
     * // Get one ChallengeEntry
     * const challengeEntry = await prisma.challengeEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallengeEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallengeEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallengeEntryClient<$Result.GetResult<Prisma.$ChallengeEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeEntryFindFirstArgs} args - Arguments to find a ChallengeEntry
     * @example
     * // Get one ChallengeEntry
     * const challengeEntry = await prisma.challengeEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallengeEntryFindFirstArgs>(args?: SelectSubset<T, ChallengeEntryFindFirstArgs<ExtArgs>>): Prisma__ChallengeEntryClient<$Result.GetResult<Prisma.$ChallengeEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChallengeEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeEntryFindFirstOrThrowArgs} args - Arguments to find a ChallengeEntry
     * @example
     * // Get one ChallengeEntry
     * const challengeEntry = await prisma.challengeEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallengeEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallengeEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallengeEntryClient<$Result.GetResult<Prisma.$ChallengeEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChallengeEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallengeEntries
     * const challengeEntries = await prisma.challengeEntry.findMany()
     * 
     * // Get first 10 ChallengeEntries
     * const challengeEntries = await prisma.challengeEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengeEntryWithIdOnly = await prisma.challengeEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallengeEntryFindManyArgs>(args?: SelectSubset<T, ChallengeEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChallengeEntry.
     * @param {ChallengeEntryCreateArgs} args - Arguments to create a ChallengeEntry.
     * @example
     * // Create one ChallengeEntry
     * const ChallengeEntry = await prisma.challengeEntry.create({
     *   data: {
     *     // ... data to create a ChallengeEntry
     *   }
     * })
     * 
     */
    create<T extends ChallengeEntryCreateArgs>(args: SelectSubset<T, ChallengeEntryCreateArgs<ExtArgs>>): Prisma__ChallengeEntryClient<$Result.GetResult<Prisma.$ChallengeEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChallengeEntries.
     * @param {ChallengeEntryCreateManyArgs} args - Arguments to create many ChallengeEntries.
     * @example
     * // Create many ChallengeEntries
     * const challengeEntry = await prisma.challengeEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallengeEntryCreateManyArgs>(args?: SelectSubset<T, ChallengeEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChallengeEntries and returns the data saved in the database.
     * @param {ChallengeEntryCreateManyAndReturnArgs} args - Arguments to create many ChallengeEntries.
     * @example
     * // Create many ChallengeEntries
     * const challengeEntry = await prisma.challengeEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChallengeEntries and only return the `id`
     * const challengeEntryWithIdOnly = await prisma.challengeEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallengeEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallengeEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChallengeEntry.
     * @param {ChallengeEntryDeleteArgs} args - Arguments to delete one ChallengeEntry.
     * @example
     * // Delete one ChallengeEntry
     * const ChallengeEntry = await prisma.challengeEntry.delete({
     *   where: {
     *     // ... filter to delete one ChallengeEntry
     *   }
     * })
     * 
     */
    delete<T extends ChallengeEntryDeleteArgs>(args: SelectSubset<T, ChallengeEntryDeleteArgs<ExtArgs>>): Prisma__ChallengeEntryClient<$Result.GetResult<Prisma.$ChallengeEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChallengeEntry.
     * @param {ChallengeEntryUpdateArgs} args - Arguments to update one ChallengeEntry.
     * @example
     * // Update one ChallengeEntry
     * const challengeEntry = await prisma.challengeEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallengeEntryUpdateArgs>(args: SelectSubset<T, ChallengeEntryUpdateArgs<ExtArgs>>): Prisma__ChallengeEntryClient<$Result.GetResult<Prisma.$ChallengeEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChallengeEntries.
     * @param {ChallengeEntryDeleteManyArgs} args - Arguments to filter ChallengeEntries to delete.
     * @example
     * // Delete a few ChallengeEntries
     * const { count } = await prisma.challengeEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallengeEntryDeleteManyArgs>(args?: SelectSubset<T, ChallengeEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallengeEntries
     * const challengeEntry = await prisma.challengeEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallengeEntryUpdateManyArgs>(args: SelectSubset<T, ChallengeEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallengeEntries and returns the data updated in the database.
     * @param {ChallengeEntryUpdateManyAndReturnArgs} args - Arguments to update many ChallengeEntries.
     * @example
     * // Update many ChallengeEntries
     * const challengeEntry = await prisma.challengeEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChallengeEntries and only return the `id`
     * const challengeEntryWithIdOnly = await prisma.challengeEntry.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ChallengeEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, ChallengeEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallengeEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChallengeEntry.
     * @param {ChallengeEntryUpsertArgs} args - Arguments to update or create a ChallengeEntry.
     * @example
     * // Update or create a ChallengeEntry
     * const challengeEntry = await prisma.challengeEntry.upsert({
     *   create: {
     *     // ... data to create a ChallengeEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallengeEntry we want to update
     *   }
     * })
     */
    upsert<T extends ChallengeEntryUpsertArgs>(args: SelectSubset<T, ChallengeEntryUpsertArgs<ExtArgs>>): Prisma__ChallengeEntryClient<$Result.GetResult<Prisma.$ChallengeEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChallengeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeEntryCountArgs} args - Arguments to filter ChallengeEntries to count.
     * @example
     * // Count the number of ChallengeEntries
     * const count = await prisma.challengeEntry.count({
     *   where: {
     *     // ... the filter for the ChallengeEntries we want to count
     *   }
     * })
    **/
    count<T extends ChallengeEntryCountArgs>(
      args?: Subset<T, ChallengeEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengeEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallengeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallengeEntryAggregateArgs>(args: Subset<T, ChallengeEntryAggregateArgs>): Prisma.PrismaPromise<GetChallengeEntryAggregateType<T>>

    /**
     * Group by ChallengeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengeEntryGroupByArgs} args - Group by arguments.
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
      T extends ChallengeEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallengeEntryGroupByArgs['orderBy'] }
        : { orderBy?: ChallengeEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallengeEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengeEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChallengeEntry model
   */
  readonly fields: ChallengeEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChallengeEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallengeEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge<T extends ReadingChallengeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReadingChallengeDefaultArgs<ExtArgs>>): Prisma__ReadingChallengeClient<$Result.GetResult<Prisma.$ReadingChallengePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChallengeEntry model
   */
  interface ChallengeEntryFieldRefs {
    readonly id: FieldRef<"ChallengeEntry", 'Int'>
    readonly challengeId: FieldRef<"ChallengeEntry", 'Int'>
    readonly bookId: FieldRef<"ChallengeEntry", 'Int'>
    readonly finishedAt: FieldRef<"ChallengeEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChallengeEntry findUnique
   */
  export type ChallengeEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeEntry
     */
    select?: ChallengeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeEntry
     */
    omit?: ChallengeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeEntryInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeEntry to fetch.
     */
    where: ChallengeEntryWhereUniqueInput
  }

  /**
   * ChallengeEntry findUniqueOrThrow
   */
  export type ChallengeEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeEntry
     */
    select?: ChallengeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeEntry
     */
    omit?: ChallengeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeEntryInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeEntry to fetch.
     */
    where: ChallengeEntryWhereUniqueInput
  }

  /**
   * ChallengeEntry findFirst
   */
  export type ChallengeEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeEntry
     */
    select?: ChallengeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeEntry
     */
    omit?: ChallengeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeEntryInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeEntry to fetch.
     */
    where?: ChallengeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeEntries to fetch.
     */
    orderBy?: ChallengeEntryOrderByWithRelationInput | ChallengeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeEntries.
     */
    cursor?: ChallengeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeEntries.
     */
    distinct?: ChallengeEntryScalarFieldEnum | ChallengeEntryScalarFieldEnum[]
  }

  /**
   * ChallengeEntry findFirstOrThrow
   */
  export type ChallengeEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeEntry
     */
    select?: ChallengeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeEntry
     */
    omit?: ChallengeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeEntryInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeEntry to fetch.
     */
    where?: ChallengeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeEntries to fetch.
     */
    orderBy?: ChallengeEntryOrderByWithRelationInput | ChallengeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallengeEntries.
     */
    cursor?: ChallengeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallengeEntries.
     */
    distinct?: ChallengeEntryScalarFieldEnum | ChallengeEntryScalarFieldEnum[]
  }

  /**
   * ChallengeEntry findMany
   */
  export type ChallengeEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeEntry
     */
    select?: ChallengeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeEntry
     */
    omit?: ChallengeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeEntryInclude<ExtArgs> | null
    /**
     * Filter, which ChallengeEntries to fetch.
     */
    where?: ChallengeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallengeEntries to fetch.
     */
    orderBy?: ChallengeEntryOrderByWithRelationInput | ChallengeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChallengeEntries.
     */
    cursor?: ChallengeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallengeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallengeEntries.
     */
    skip?: number
    distinct?: ChallengeEntryScalarFieldEnum | ChallengeEntryScalarFieldEnum[]
  }

  /**
   * ChallengeEntry create
   */
  export type ChallengeEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeEntry
     */
    select?: ChallengeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeEntry
     */
    omit?: ChallengeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a ChallengeEntry.
     */
    data: XOR<ChallengeEntryCreateInput, ChallengeEntryUncheckedCreateInput>
  }

  /**
   * ChallengeEntry createMany
   */
  export type ChallengeEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChallengeEntries.
     */
    data: ChallengeEntryCreateManyInput | ChallengeEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChallengeEntry createManyAndReturn
   */
  export type ChallengeEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeEntry
     */
    select?: ChallengeEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeEntry
     */
    omit?: ChallengeEntryOmit<ExtArgs> | null
    /**
     * The data used to create many ChallengeEntries.
     */
    data: ChallengeEntryCreateManyInput | ChallengeEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengeEntry update
   */
  export type ChallengeEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeEntry
     */
    select?: ChallengeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeEntry
     */
    omit?: ChallengeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a ChallengeEntry.
     */
    data: XOR<ChallengeEntryUpdateInput, ChallengeEntryUncheckedUpdateInput>
    /**
     * Choose, which ChallengeEntry to update.
     */
    where: ChallengeEntryWhereUniqueInput
  }

  /**
   * ChallengeEntry updateMany
   */
  export type ChallengeEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChallengeEntries.
     */
    data: XOR<ChallengeEntryUpdateManyMutationInput, ChallengeEntryUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeEntries to update
     */
    where?: ChallengeEntryWhereInput
    /**
     * Limit how many ChallengeEntries to update.
     */
    limit?: number
  }

  /**
   * ChallengeEntry updateManyAndReturn
   */
  export type ChallengeEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeEntry
     */
    select?: ChallengeEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeEntry
     */
    omit?: ChallengeEntryOmit<ExtArgs> | null
    /**
     * The data used to update ChallengeEntries.
     */
    data: XOR<ChallengeEntryUpdateManyMutationInput, ChallengeEntryUncheckedUpdateManyInput>
    /**
     * Filter which ChallengeEntries to update
     */
    where?: ChallengeEntryWhereInput
    /**
     * Limit how many ChallengeEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallengeEntry upsert
   */
  export type ChallengeEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeEntry
     */
    select?: ChallengeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeEntry
     */
    omit?: ChallengeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the ChallengeEntry to update in case it exists.
     */
    where: ChallengeEntryWhereUniqueInput
    /**
     * In case the ChallengeEntry found by the `where` argument doesn't exist, create a new ChallengeEntry with this data.
     */
    create: XOR<ChallengeEntryCreateInput, ChallengeEntryUncheckedCreateInput>
    /**
     * In case the ChallengeEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallengeEntryUpdateInput, ChallengeEntryUncheckedUpdateInput>
  }

  /**
   * ChallengeEntry delete
   */
  export type ChallengeEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeEntry
     */
    select?: ChallengeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeEntry
     */
    omit?: ChallengeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeEntryInclude<ExtArgs> | null
    /**
     * Filter which ChallengeEntry to delete.
     */
    where: ChallengeEntryWhereUniqueInput
  }

  /**
   * ChallengeEntry deleteMany
   */
  export type ChallengeEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallengeEntries to delete
     */
    where?: ChallengeEntryWhereInput
    /**
     * Limit how many ChallengeEntries to delete.
     */
    limit?: number
  }

  /**
   * ChallengeEntry without action
   */
  export type ChallengeEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengeEntry
     */
    select?: ChallengeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChallengeEntry
     */
    omit?: ChallengeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallengeEntryInclude<ExtArgs> | null
  }


  /**
   * Model Friendship
   */

  export type AggregateFriendship = {
    _count: FriendshipCountAggregateOutputType | null
    _avg: FriendshipAvgAggregateOutputType | null
    _sum: FriendshipSumAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  export type FriendshipAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
  }

  export type FriendshipSumAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
  }

  export type FriendshipMinAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
    createdAt: Date | null
  }

  export type FriendshipMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
    createdAt: Date | null
  }

  export type FriendshipCountAggregateOutputType = {
    id: number
    userId: number
    friendId: number
    createdAt: number
    _all: number
  }


  export type FriendshipAvgAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
  }

  export type FriendshipSumAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
  }

  export type FriendshipMinAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
  }

  export type FriendshipMaxAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
  }

  export type FriendshipCountAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
    _all?: true
  }

  export type FriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendship to aggregate.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Friendships
    **/
    _count?: true | FriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FriendshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FriendshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FriendshipMaxAggregateInputType
  }

  export type GetFriendshipAggregateType<T extends FriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFriendship[P]>
      : GetScalarType<T[P], AggregateFriendship[P]>
  }




  export type FriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FriendshipWhereInput
    orderBy?: FriendshipOrderByWithAggregationInput | FriendshipOrderByWithAggregationInput[]
    by: FriendshipScalarFieldEnum[] | FriendshipScalarFieldEnum
    having?: FriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FriendshipCountAggregateInputType | true
    _avg?: FriendshipAvgAggregateInputType
    _sum?: FriendshipSumAggregateInputType
    _min?: FriendshipMinAggregateInputType
    _max?: FriendshipMaxAggregateInputType
  }

  export type FriendshipGroupByOutputType = {
    id: number
    userId: number
    friendId: number
    createdAt: Date
    _count: FriendshipCountAggregateOutputType | null
    _avg: FriendshipAvgAggregateOutputType | null
    _sum: FriendshipSumAggregateOutputType | null
    _min: FriendshipMinAggregateOutputType | null
    _max: FriendshipMaxAggregateOutputType | null
  }

  type GetFriendshipGroupByPayload<T extends FriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], FriendshipGroupByOutputType[P]>
        }
      >
    >


  export type FriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["friendship"]>

  export type FriendshipSelectScalar = {
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
  }

  export type FriendshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "friendId" | "createdAt", ExtArgs["result"]["friendship"]>
  export type FriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FriendshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Friendship"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      friend: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      friendId: number
      createdAt: Date
    }, ExtArgs["result"]["friendship"]>
    composites: {}
  }

  type FriendshipGetPayload<S extends boolean | null | undefined | FriendshipDefaultArgs> = $Result.GetResult<Prisma.$FriendshipPayload, S>

  type FriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FriendshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FriendshipCountAggregateInputType | true
    }

  export interface FriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Friendship'], meta: { name: 'Friendship' } }
    /**
     * Find zero or one Friendship that matches the filter.
     * @param {FriendshipFindUniqueArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FriendshipFindUniqueArgs>(args: SelectSubset<T, FriendshipFindUniqueArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Friendship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FriendshipFindUniqueOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, FriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FriendshipFindFirstArgs>(args?: SelectSubset<T, FriendshipFindFirstArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Friendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindFirstOrThrowArgs} args - Arguments to find a Friendship
     * @example
     * // Get one Friendship
     * const friendship = await prisma.friendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, FriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Friendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Friendships
     * const friendships = await prisma.friendship.findMany()
     * 
     * // Get first 10 Friendships
     * const friendships = await prisma.friendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const friendshipWithIdOnly = await prisma.friendship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FriendshipFindManyArgs>(args?: SelectSubset<T, FriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Friendship.
     * @param {FriendshipCreateArgs} args - Arguments to create a Friendship.
     * @example
     * // Create one Friendship
     * const Friendship = await prisma.friendship.create({
     *   data: {
     *     // ... data to create a Friendship
     *   }
     * })
     * 
     */
    create<T extends FriendshipCreateArgs>(args: SelectSubset<T, FriendshipCreateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Friendships.
     * @param {FriendshipCreateManyArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FriendshipCreateManyArgs>(args?: SelectSubset<T, FriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Friendships and returns the data saved in the database.
     * @param {FriendshipCreateManyAndReturnArgs} args - Arguments to create many Friendships.
     * @example
     * // Create many Friendships
     * const friendship = await prisma.friendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, FriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Friendship.
     * @param {FriendshipDeleteArgs} args - Arguments to delete one Friendship.
     * @example
     * // Delete one Friendship
     * const Friendship = await prisma.friendship.delete({
     *   where: {
     *     // ... filter to delete one Friendship
     *   }
     * })
     * 
     */
    delete<T extends FriendshipDeleteArgs>(args: SelectSubset<T, FriendshipDeleteArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Friendship.
     * @param {FriendshipUpdateArgs} args - Arguments to update one Friendship.
     * @example
     * // Update one Friendship
     * const friendship = await prisma.friendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FriendshipUpdateArgs>(args: SelectSubset<T, FriendshipUpdateArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Friendships.
     * @param {FriendshipDeleteManyArgs} args - Arguments to filter Friendships to delete.
     * @example
     * // Delete a few Friendships
     * const { count } = await prisma.friendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FriendshipDeleteManyArgs>(args?: SelectSubset<T, FriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FriendshipUpdateManyArgs>(args: SelectSubset<T, FriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Friendships and returns the data updated in the database.
     * @param {FriendshipUpdateManyAndReturnArgs} args - Arguments to update many Friendships.
     * @example
     * // Update many Friendships
     * const friendship = await prisma.friendship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Friendships and only return the `id`
     * const friendshipWithIdOnly = await prisma.friendship.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends FriendshipUpdateManyAndReturnArgs>(args: SelectSubset<T, FriendshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Friendship.
     * @param {FriendshipUpsertArgs} args - Arguments to update or create a Friendship.
     * @example
     * // Update or create a Friendship
     * const friendship = await prisma.friendship.upsert({
     *   create: {
     *     // ... data to create a Friendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Friendship we want to update
     *   }
     * })
     */
    upsert<T extends FriendshipUpsertArgs>(args: SelectSubset<T, FriendshipUpsertArgs<ExtArgs>>): Prisma__FriendshipClient<$Result.GetResult<Prisma.$FriendshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Friendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipCountArgs} args - Arguments to filter Friendships to count.
     * @example
     * // Count the number of Friendships
     * const count = await prisma.friendship.count({
     *   where: {
     *     // ... the filter for the Friendships we want to count
     *   }
     * })
    **/
    count<T extends FriendshipCountArgs>(
      args?: Subset<T, FriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FriendshipAggregateArgs>(args: Subset<T, FriendshipAggregateArgs>): Prisma.PrismaPromise<GetFriendshipAggregateType<T>>

    /**
     * Group by Friendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FriendshipGroupByArgs} args - Group by arguments.
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
      T extends FriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FriendshipGroupByArgs['orderBy'] }
        : { orderBy?: FriendshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Friendship model
   */
  readonly fields: FriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Friendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friend<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Friendship model
   */
  interface FriendshipFieldRefs {
    readonly id: FieldRef<"Friendship", 'Int'>
    readonly userId: FieldRef<"Friendship", 'Int'>
    readonly friendId: FieldRef<"Friendship", 'Int'>
    readonly createdAt: FieldRef<"Friendship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Friendship findUnique
   */
  export type FriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findUniqueOrThrow
   */
  export type FriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship findFirst
   */
  export type FriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findFirstOrThrow
   */
  export type FriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendship to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Friendships.
     */
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship findMany
   */
  export type FriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter, which Friendships to fetch.
     */
    where?: FriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Friendships to fetch.
     */
    orderBy?: FriendshipOrderByWithRelationInput | FriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Friendships.
     */
    cursor?: FriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Friendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Friendships.
     */
    skip?: number
    distinct?: FriendshipScalarFieldEnum | FriendshipScalarFieldEnum[]
  }

  /**
   * Friendship create
   */
  export type FriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Friendship.
     */
    data: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
  }

  /**
   * Friendship createMany
   */
  export type FriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Friendship createManyAndReturn
   */
  export type FriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to create many Friendships.
     */
    data: FriendshipCreateManyInput | FriendshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship update
   */
  export type FriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Friendship.
     */
    data: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
    /**
     * Choose, which Friendship to update.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship updateMany
   */
  export type FriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
  }

  /**
   * Friendship updateManyAndReturn
   */
  export type FriendshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * The data used to update Friendships.
     */
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyInput>
    /**
     * Filter which Friendships to update
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Friendship upsert
   */
  export type FriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Friendship to update in case it exists.
     */
    where: FriendshipWhereUniqueInput
    /**
     * In case the Friendship found by the `where` argument doesn't exist, create a new Friendship with this data.
     */
    create: XOR<FriendshipCreateInput, FriendshipUncheckedCreateInput>
    /**
     * In case the Friendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FriendshipUpdateInput, FriendshipUncheckedUpdateInput>
  }

  /**
   * Friendship delete
   */
  export type FriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
    /**
     * Filter which Friendship to delete.
     */
    where: FriendshipWhereUniqueInput
  }

  /**
   * Friendship deleteMany
   */
  export type FriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Friendships to delete
     */
    where?: FriendshipWhereInput
    /**
     * Limit how many Friendships to delete.
     */
    limit?: number
  }

  /**
   * Friendship without action
   */
  export type FriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Friendship
     */
    select?: FriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Friendship
     */
    omit?: FriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FriendshipInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    publishDate: 'publishDate',
    averageRating: 'averageRating',
    language: 'language',
    reviewCount: 'reviewCount',
    pages: 'pages',
    description: 'description',
    coverUrl: 'coverUrl'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bookId: 'bookId',
    rating: 'rating',
    text: 'text',
    pace: 'pace',
    focus: 'focus',
    lovable: 'lovable',
    contentWarnings: 'contentWarnings',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const MoodScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MoodScalarFieldEnum = (typeof MoodScalarFieldEnum)[keyof typeof MoodScalarFieldEnum]


  export const TropeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TropeScalarFieldEnum = (typeof TropeScalarFieldEnum)[keyof typeof TropeScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const LibraryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    type: 'type'
  };

  export type LibraryScalarFieldEnum = (typeof LibraryScalarFieldEnum)[keyof typeof LibraryScalarFieldEnum]


  export const LibraryEntryScalarFieldEnum: {
    id: 'id',
    libraryId: 'libraryId',
    bookId: 'bookId',
    addedAt: 'addedAt'
  };

  export type LibraryEntryScalarFieldEnum = (typeof LibraryEntryScalarFieldEnum)[keyof typeof LibraryEntryScalarFieldEnum]


  export const ReadingChallengeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    year: 'year',
    goal: 'goal',
    completed: 'completed'
  };

  export type ReadingChallengeScalarFieldEnum = (typeof ReadingChallengeScalarFieldEnum)[keyof typeof ReadingChallengeScalarFieldEnum]


  export const ChallengeEntryScalarFieldEnum: {
    id: 'id',
    challengeId: 'challengeId',
    bookId: 'bookId',
    finishedAt: 'finishedAt'
  };

  export type ChallengeEntryScalarFieldEnum = (typeof ChallengeEntryScalarFieldEnum)[keyof typeof ChallengeEntryScalarFieldEnum]


  export const FriendshipScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    friendId: 'friendId',
    createdAt: 'createdAt'
  };

  export type FriendshipScalarFieldEnum = (typeof FriendshipScalarFieldEnum)[keyof typeof FriendshipScalarFieldEnum]


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
   * Reference to a field of type 'Pace'
   */
  export type EnumPaceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Pace'>
    


  /**
   * Reference to a field of type 'Pace[]'
   */
  export type ListEnumPaceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Pace[]'>
    


  /**
   * Reference to a field of type 'Focus'
   */
  export type EnumFocusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Focus'>
    


  /**
   * Reference to a field of type 'Focus[]'
   */
  export type ListEnumFocusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Focus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'LibraryType'
   */
  export type EnumLibraryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LibraryType'>
    


  /**
   * Reference to a field of type 'LibraryType[]'
   */
  export type ListEnumLibraryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LibraryType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewListRelationFilter
    libraries?: LibraryListRelationFilter
    challenges?: ReadingChallengeListRelationFilter
    friends?: FriendshipListRelationFilter
    addedMe?: FriendshipListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    libraries?: LibraryOrderByRelationAggregateInput
    challenges?: ReadingChallengeOrderByRelationAggregateInput
    friends?: FriendshipOrderByRelationAggregateInput
    addedMe?: FriendshipOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewListRelationFilter
    libraries?: LibraryListRelationFilter
    challenges?: ReadingChallengeListRelationFilter
    friends?: FriendshipListRelationFilter
    addedMe?: FriendshipListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    publishDate?: DateTimeFilter<"Book"> | Date | string
    averageRating?: FloatNullableFilter<"Book"> | number | null
    language?: StringFilter<"Book"> | string
    reviewCount?: IntNullableFilter<"Book"> | number | null
    pages?: IntFilter<"Book"> | number
    description?: StringNullableFilter<"Book"> | string | null
    coverUrl?: StringNullableFilter<"Book"> | string | null
    reviews?: ReviewListRelationFilter
    inLibraries?: LibraryEntryListRelationFilter
    inChallenges?: ChallengeEntryListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publishDate?: SortOrder
    averageRating?: SortOrderInput | SortOrder
    language?: SortOrder
    reviewCount?: SortOrderInput | SortOrder
    pages?: SortOrder
    description?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    inLibraries?: LibraryEntryOrderByRelationAggregateInput
    inChallenges?: ChallengeEntryOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    author?: StringFilter<"Book"> | string
    publishDate?: DateTimeFilter<"Book"> | Date | string
    averageRating?: FloatNullableFilter<"Book"> | number | null
    language?: StringFilter<"Book"> | string
    reviewCount?: IntNullableFilter<"Book"> | number | null
    pages?: IntFilter<"Book"> | number
    description?: StringNullableFilter<"Book"> | string | null
    coverUrl?: StringNullableFilter<"Book"> | string | null
    reviews?: ReviewListRelationFilter
    inLibraries?: LibraryEntryListRelationFilter
    inChallenges?: ChallengeEntryListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publishDate?: SortOrder
    averageRating?: SortOrderInput | SortOrder
    language?: SortOrder
    reviewCount?: SortOrderInput | SortOrder
    pages?: SortOrder
    description?: SortOrderInput | SortOrder
    coverUrl?: SortOrderInput | SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    title?: StringWithAggregatesFilter<"Book"> | string
    author?: StringWithAggregatesFilter<"Book"> | string
    publishDate?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    averageRating?: FloatNullableWithAggregatesFilter<"Book"> | number | null
    language?: StringWithAggregatesFilter<"Book"> | string
    reviewCount?: IntNullableWithAggregatesFilter<"Book"> | number | null
    pages?: IntWithAggregatesFilter<"Book"> | number
    description?: StringNullableWithAggregatesFilter<"Book"> | string | null
    coverUrl?: StringNullableWithAggregatesFilter<"Book"> | string | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    bookId?: IntFilter<"Review"> | number
    rating?: FloatFilter<"Review"> | number
    text?: StringNullableFilter<"Review"> | string | null
    pace?: EnumPaceNullableFilter<"Review"> | $Enums.Pace | null
    focus?: EnumFocusNullableFilter<"Review"> | $Enums.Focus | null
    lovable?: BoolNullableFilter<"Review"> | boolean | null
    contentWarnings?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    moods?: MoodListRelationFilter
    tropes?: TropeListRelationFilter
    genres?: GenreListRelationFilter
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    rating?: SortOrder
    text?: SortOrderInput | SortOrder
    pace?: SortOrderInput | SortOrder
    focus?: SortOrderInput | SortOrder
    lovable?: SortOrderInput | SortOrder
    contentWarnings?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
    moods?: MoodOrderByRelationAggregateInput
    tropes?: TropeOrderByRelationAggregateInput
    genres?: GenreOrderByRelationAggregateInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userId?: IntFilter<"Review"> | number
    bookId?: IntFilter<"Review"> | number
    rating?: FloatFilter<"Review"> | number
    text?: StringNullableFilter<"Review"> | string | null
    pace?: EnumPaceNullableFilter<"Review"> | $Enums.Pace | null
    focus?: EnumFocusNullableFilter<"Review"> | $Enums.Focus | null
    lovable?: BoolNullableFilter<"Review"> | boolean | null
    contentWarnings?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    moods?: MoodListRelationFilter
    tropes?: TropeListRelationFilter
    genres?: GenreListRelationFilter
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    rating?: SortOrder
    text?: SortOrderInput | SortOrder
    pace?: SortOrderInput | SortOrder
    focus?: SortOrderInput | SortOrder
    lovable?: SortOrderInput | SortOrder
    contentWarnings?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    bookId?: IntWithAggregatesFilter<"Review"> | number
    rating?: FloatWithAggregatesFilter<"Review"> | number
    text?: StringNullableWithAggregatesFilter<"Review"> | string | null
    pace?: EnumPaceNullableWithAggregatesFilter<"Review"> | $Enums.Pace | null
    focus?: EnumFocusNullableWithAggregatesFilter<"Review"> | $Enums.Focus | null
    lovable?: BoolNullableWithAggregatesFilter<"Review"> | boolean | null
    contentWarnings?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type MoodWhereInput = {
    AND?: MoodWhereInput | MoodWhereInput[]
    OR?: MoodWhereInput[]
    NOT?: MoodWhereInput | MoodWhereInput[]
    id?: IntFilter<"Mood"> | number
    name?: StringFilter<"Mood"> | string
    reviews?: ReviewListRelationFilter
  }

  export type MoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type MoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MoodWhereInput | MoodWhereInput[]
    OR?: MoodWhereInput[]
    NOT?: MoodWhereInput | MoodWhereInput[]
    reviews?: ReviewListRelationFilter
  }, "id" | "name">

  export type MoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MoodCountOrderByAggregateInput
    _avg?: MoodAvgOrderByAggregateInput
    _max?: MoodMaxOrderByAggregateInput
    _min?: MoodMinOrderByAggregateInput
    _sum?: MoodSumOrderByAggregateInput
  }

  export type MoodScalarWhereWithAggregatesInput = {
    AND?: MoodScalarWhereWithAggregatesInput | MoodScalarWhereWithAggregatesInput[]
    OR?: MoodScalarWhereWithAggregatesInput[]
    NOT?: MoodScalarWhereWithAggregatesInput | MoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mood"> | number
    name?: StringWithAggregatesFilter<"Mood"> | string
  }

  export type TropeWhereInput = {
    AND?: TropeWhereInput | TropeWhereInput[]
    OR?: TropeWhereInput[]
    NOT?: TropeWhereInput | TropeWhereInput[]
    id?: IntFilter<"Trope"> | number
    name?: StringFilter<"Trope"> | string
    reviews?: ReviewListRelationFilter
  }

  export type TropeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type TropeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TropeWhereInput | TropeWhereInput[]
    OR?: TropeWhereInput[]
    NOT?: TropeWhereInput | TropeWhereInput[]
    reviews?: ReviewListRelationFilter
  }, "id" | "name">

  export type TropeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TropeCountOrderByAggregateInput
    _avg?: TropeAvgOrderByAggregateInput
    _max?: TropeMaxOrderByAggregateInput
    _min?: TropeMinOrderByAggregateInput
    _sum?: TropeSumOrderByAggregateInput
  }

  export type TropeScalarWhereWithAggregatesInput = {
    AND?: TropeScalarWhereWithAggregatesInput | TropeScalarWhereWithAggregatesInput[]
    OR?: TropeScalarWhereWithAggregatesInput[]
    NOT?: TropeScalarWhereWithAggregatesInput | TropeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trope"> | number
    name?: StringWithAggregatesFilter<"Trope"> | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
    reviews?: ReviewListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    reviews?: ReviewListRelationFilter
  }, "id" | "name">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genre"> | number
    name?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type LibraryWhereInput = {
    AND?: LibraryWhereInput | LibraryWhereInput[]
    OR?: LibraryWhereInput[]
    NOT?: LibraryWhereInput | LibraryWhereInput[]
    id?: IntFilter<"Library"> | number
    userId?: IntFilter<"Library"> | number
    name?: StringFilter<"Library"> | string
    type?: EnumLibraryTypeFilter<"Library"> | $Enums.LibraryType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    entries?: LibraryEntryListRelationFilter
  }

  export type LibraryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    user?: UserOrderByWithRelationInput
    entries?: LibraryEntryOrderByRelationAggregateInput
  }

  export type LibraryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LibraryWhereInput | LibraryWhereInput[]
    OR?: LibraryWhereInput[]
    NOT?: LibraryWhereInput | LibraryWhereInput[]
    userId?: IntFilter<"Library"> | number
    name?: StringFilter<"Library"> | string
    type?: EnumLibraryTypeFilter<"Library"> | $Enums.LibraryType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    entries?: LibraryEntryListRelationFilter
  }, "id">

  export type LibraryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    _count?: LibraryCountOrderByAggregateInput
    _avg?: LibraryAvgOrderByAggregateInput
    _max?: LibraryMaxOrderByAggregateInput
    _min?: LibraryMinOrderByAggregateInput
    _sum?: LibrarySumOrderByAggregateInput
  }

  export type LibraryScalarWhereWithAggregatesInput = {
    AND?: LibraryScalarWhereWithAggregatesInput | LibraryScalarWhereWithAggregatesInput[]
    OR?: LibraryScalarWhereWithAggregatesInput[]
    NOT?: LibraryScalarWhereWithAggregatesInput | LibraryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Library"> | number
    userId?: IntWithAggregatesFilter<"Library"> | number
    name?: StringWithAggregatesFilter<"Library"> | string
    type?: EnumLibraryTypeWithAggregatesFilter<"Library"> | $Enums.LibraryType
  }

  export type LibraryEntryWhereInput = {
    AND?: LibraryEntryWhereInput | LibraryEntryWhereInput[]
    OR?: LibraryEntryWhereInput[]
    NOT?: LibraryEntryWhereInput | LibraryEntryWhereInput[]
    id?: IntFilter<"LibraryEntry"> | number
    libraryId?: IntFilter<"LibraryEntry"> | number
    bookId?: IntFilter<"LibraryEntry"> | number
    addedAt?: DateTimeFilter<"LibraryEntry"> | Date | string
    library?: XOR<LibraryScalarRelationFilter, LibraryWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type LibraryEntryOrderByWithRelationInput = {
    id?: SortOrder
    libraryId?: SortOrder
    bookId?: SortOrder
    addedAt?: SortOrder
    library?: LibraryOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type LibraryEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LibraryEntryWhereInput | LibraryEntryWhereInput[]
    OR?: LibraryEntryWhereInput[]
    NOT?: LibraryEntryWhereInput | LibraryEntryWhereInput[]
    libraryId?: IntFilter<"LibraryEntry"> | number
    bookId?: IntFilter<"LibraryEntry"> | number
    addedAt?: DateTimeFilter<"LibraryEntry"> | Date | string
    library?: XOR<LibraryScalarRelationFilter, LibraryWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type LibraryEntryOrderByWithAggregationInput = {
    id?: SortOrder
    libraryId?: SortOrder
    bookId?: SortOrder
    addedAt?: SortOrder
    _count?: LibraryEntryCountOrderByAggregateInput
    _avg?: LibraryEntryAvgOrderByAggregateInput
    _max?: LibraryEntryMaxOrderByAggregateInput
    _min?: LibraryEntryMinOrderByAggregateInput
    _sum?: LibraryEntrySumOrderByAggregateInput
  }

  export type LibraryEntryScalarWhereWithAggregatesInput = {
    AND?: LibraryEntryScalarWhereWithAggregatesInput | LibraryEntryScalarWhereWithAggregatesInput[]
    OR?: LibraryEntryScalarWhereWithAggregatesInput[]
    NOT?: LibraryEntryScalarWhereWithAggregatesInput | LibraryEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LibraryEntry"> | number
    libraryId?: IntWithAggregatesFilter<"LibraryEntry"> | number
    bookId?: IntWithAggregatesFilter<"LibraryEntry"> | number
    addedAt?: DateTimeWithAggregatesFilter<"LibraryEntry"> | Date | string
  }

  export type ReadingChallengeWhereInput = {
    AND?: ReadingChallengeWhereInput | ReadingChallengeWhereInput[]
    OR?: ReadingChallengeWhereInput[]
    NOT?: ReadingChallengeWhereInput | ReadingChallengeWhereInput[]
    id?: IntFilter<"ReadingChallenge"> | number
    userId?: IntFilter<"ReadingChallenge"> | number
    year?: IntFilter<"ReadingChallenge"> | number
    goal?: IntFilter<"ReadingChallenge"> | number
    completed?: IntFilter<"ReadingChallenge"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    entries?: ChallengeEntryListRelationFilter
  }

  export type ReadingChallengeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    goal?: SortOrder
    completed?: SortOrder
    user?: UserOrderByWithRelationInput
    entries?: ChallengeEntryOrderByRelationAggregateInput
  }

  export type ReadingChallengeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReadingChallengeWhereInput | ReadingChallengeWhereInput[]
    OR?: ReadingChallengeWhereInput[]
    NOT?: ReadingChallengeWhereInput | ReadingChallengeWhereInput[]
    userId?: IntFilter<"ReadingChallenge"> | number
    year?: IntFilter<"ReadingChallenge"> | number
    goal?: IntFilter<"ReadingChallenge"> | number
    completed?: IntFilter<"ReadingChallenge"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    entries?: ChallengeEntryListRelationFilter
  }, "id">

  export type ReadingChallengeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    goal?: SortOrder
    completed?: SortOrder
    _count?: ReadingChallengeCountOrderByAggregateInput
    _avg?: ReadingChallengeAvgOrderByAggregateInput
    _max?: ReadingChallengeMaxOrderByAggregateInput
    _min?: ReadingChallengeMinOrderByAggregateInput
    _sum?: ReadingChallengeSumOrderByAggregateInput
  }

  export type ReadingChallengeScalarWhereWithAggregatesInput = {
    AND?: ReadingChallengeScalarWhereWithAggregatesInput | ReadingChallengeScalarWhereWithAggregatesInput[]
    OR?: ReadingChallengeScalarWhereWithAggregatesInput[]
    NOT?: ReadingChallengeScalarWhereWithAggregatesInput | ReadingChallengeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReadingChallenge"> | number
    userId?: IntWithAggregatesFilter<"ReadingChallenge"> | number
    year?: IntWithAggregatesFilter<"ReadingChallenge"> | number
    goal?: IntWithAggregatesFilter<"ReadingChallenge"> | number
    completed?: IntWithAggregatesFilter<"ReadingChallenge"> | number
  }

  export type ChallengeEntryWhereInput = {
    AND?: ChallengeEntryWhereInput | ChallengeEntryWhereInput[]
    OR?: ChallengeEntryWhereInput[]
    NOT?: ChallengeEntryWhereInput | ChallengeEntryWhereInput[]
    id?: IntFilter<"ChallengeEntry"> | number
    challengeId?: IntFilter<"ChallengeEntry"> | number
    bookId?: IntFilter<"ChallengeEntry"> | number
    finishedAt?: DateTimeFilter<"ChallengeEntry"> | Date | string
    challenge?: XOR<ReadingChallengeScalarRelationFilter, ReadingChallengeWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type ChallengeEntryOrderByWithRelationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    bookId?: SortOrder
    finishedAt?: SortOrder
    challenge?: ReadingChallengeOrderByWithRelationInput
    book?: BookOrderByWithRelationInput
  }

  export type ChallengeEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChallengeEntryWhereInput | ChallengeEntryWhereInput[]
    OR?: ChallengeEntryWhereInput[]
    NOT?: ChallengeEntryWhereInput | ChallengeEntryWhereInput[]
    challengeId?: IntFilter<"ChallengeEntry"> | number
    bookId?: IntFilter<"ChallengeEntry"> | number
    finishedAt?: DateTimeFilter<"ChallengeEntry"> | Date | string
    challenge?: XOR<ReadingChallengeScalarRelationFilter, ReadingChallengeWhereInput>
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type ChallengeEntryOrderByWithAggregationInput = {
    id?: SortOrder
    challengeId?: SortOrder
    bookId?: SortOrder
    finishedAt?: SortOrder
    _count?: ChallengeEntryCountOrderByAggregateInput
    _avg?: ChallengeEntryAvgOrderByAggregateInput
    _max?: ChallengeEntryMaxOrderByAggregateInput
    _min?: ChallengeEntryMinOrderByAggregateInput
    _sum?: ChallengeEntrySumOrderByAggregateInput
  }

  export type ChallengeEntryScalarWhereWithAggregatesInput = {
    AND?: ChallengeEntryScalarWhereWithAggregatesInput | ChallengeEntryScalarWhereWithAggregatesInput[]
    OR?: ChallengeEntryScalarWhereWithAggregatesInput[]
    NOT?: ChallengeEntryScalarWhereWithAggregatesInput | ChallengeEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChallengeEntry"> | number
    challengeId?: IntWithAggregatesFilter<"ChallengeEntry"> | number
    bookId?: IntWithAggregatesFilter<"ChallengeEntry"> | number
    finishedAt?: DateTimeWithAggregatesFilter<"ChallengeEntry"> | Date | string
  }

  export type FriendshipWhereInput = {
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    id?: IntFilter<"Friendship"> | number
    userId?: IntFilter<"Friendship"> | number
    friendId?: IntFilter<"Friendship"> | number
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FriendshipOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    friend?: UserOrderByWithRelationInput
  }

  export type FriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_friendId?: FriendshipUserIdFriendIdCompoundUniqueInput
    AND?: FriendshipWhereInput | FriendshipWhereInput[]
    OR?: FriendshipWhereInput[]
    NOT?: FriendshipWhereInput | FriendshipWhereInput[]
    userId?: IntFilter<"Friendship"> | number
    friendId?: IntFilter<"Friendship"> | number
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_friendId">

  export type FriendshipOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    _count?: FriendshipCountOrderByAggregateInput
    _avg?: FriendshipAvgOrderByAggregateInput
    _max?: FriendshipMaxOrderByAggregateInput
    _min?: FriendshipMinOrderByAggregateInput
    _sum?: FriendshipSumOrderByAggregateInput
  }

  export type FriendshipScalarWhereWithAggregatesInput = {
    AND?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    OR?: FriendshipScalarWhereWithAggregatesInput[]
    NOT?: FriendshipScalarWhereWithAggregatesInput | FriendshipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Friendship"> | number
    userId?: IntWithAggregatesFilter<"Friendship"> | number
    friendId?: IntWithAggregatesFilter<"Friendship"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Friendship"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    libraries?: LibraryCreateNestedManyWithoutUserInput
    challenges?: ReadingChallengeCreateNestedManyWithoutUserInput
    friends?: FriendshipCreateNestedManyWithoutUserInput
    addedMe?: FriendshipCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    libraries?: LibraryUncheckedCreateNestedManyWithoutUserInput
    challenges?: ReadingChallengeUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    addedMe?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    libraries?: LibraryUpdateManyWithoutUserNestedInput
    challenges?: ReadingChallengeUpdateManyWithoutUserNestedInput
    friends?: FriendshipUpdateManyWithoutUserNestedInput
    addedMe?: FriendshipUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    libraries?: LibraryUncheckedUpdateManyWithoutUserNestedInput
    challenges?: ReadingChallengeUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    addedMe?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookCreateInput = {
    title: string
    author: string
    publishDate: Date | string
    averageRating?: number | null
    language: string
    reviewCount?: number | null
    pages: number
    description?: string | null
    coverUrl?: string | null
    reviews?: ReviewCreateNestedManyWithoutBookInput
    inLibraries?: LibraryEntryCreateNestedManyWithoutBookInput
    inChallenges?: ChallengeEntryCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    title: string
    author: string
    publishDate: Date | string
    averageRating?: number | null
    language: string
    reviewCount?: number | null
    pages: number
    description?: string | null
    coverUrl?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutBookInput
    inLibraries?: LibraryEntryUncheckedCreateNestedManyWithoutBookInput
    inChallenges?: ChallengeEntryUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    pages?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUpdateManyWithoutBookNestedInput
    inLibraries?: LibraryEntryUpdateManyWithoutBookNestedInput
    inChallenges?: ChallengeEntryUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    pages?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutBookNestedInput
    inLibraries?: LibraryEntryUncheckedUpdateManyWithoutBookNestedInput
    inChallenges?: ChallengeEntryUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    title: string
    author: string
    publishDate: Date | string
    averageRating?: number | null
    language: string
    reviewCount?: number | null
    pages: number
    description?: string | null
    coverUrl?: string | null
  }

  export type BookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    pages?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    pages?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateInput = {
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    book: BookCreateNestedOneWithoutReviewsInput
    moods?: MoodCreateNestedManyWithoutReviewsInput
    tropes?: TropeCreateNestedManyWithoutReviewsInput
    genres?: GenreCreateNestedManyWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    userId: number
    bookId: number
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
    moods?: MoodUncheckedCreateNestedManyWithoutReviewsInput
    tropes?: TropeUncheckedCreateNestedManyWithoutReviewsInput
    genres?: GenreUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type ReviewUpdateInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    book?: BookUpdateOneRequiredWithoutReviewsNestedInput
    moods?: MoodUpdateManyWithoutReviewsNestedInput
    tropes?: TropeUpdateManyWithoutReviewsNestedInput
    genres?: GenreUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUncheckedUpdateManyWithoutReviewsNestedInput
    tropes?: TropeUncheckedUpdateManyWithoutReviewsNestedInput
    genres?: GenreUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: number
    userId: number
    bookId: number
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodCreateInput = {
    name: string
    reviews?: ReviewCreateNestedManyWithoutMoodsInput
  }

  export type MoodUncheckedCreateInput = {
    id?: number
    name: string
    reviews?: ReviewUncheckedCreateNestedManyWithoutMoodsInput
  }

  export type MoodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUpdateManyWithoutMoodsNestedInput
  }

  export type MoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUncheckedUpdateManyWithoutMoodsNestedInput
  }

  export type MoodCreateManyInput = {
    id?: number
    name: string
  }

  export type MoodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TropeCreateInput = {
    name: string
    reviews?: ReviewCreateNestedManyWithoutTropesInput
  }

  export type TropeUncheckedCreateInput = {
    id?: number
    name: string
    reviews?: ReviewUncheckedCreateNestedManyWithoutTropesInput
  }

  export type TropeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUpdateManyWithoutTropesNestedInput
  }

  export type TropeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUncheckedUpdateManyWithoutTropesNestedInput
  }

  export type TropeCreateManyInput = {
    id?: number
    name: string
  }

  export type TropeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TropeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreCreateInput = {
    name: string
    reviews?: ReviewCreateNestedManyWithoutGenresInput
  }

  export type GenreUncheckedCreateInput = {
    id?: number
    name: string
    reviews?: ReviewUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUpdateManyWithoutGenresNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reviews?: ReviewUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenreCreateManyInput = {
    id?: number
    name: string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryCreateInput = {
    name: string
    type: $Enums.LibraryType
    user: UserCreateNestedOneWithoutLibrariesInput
    entries?: LibraryEntryCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    type: $Enums.LibraryType
    entries?: LibraryEntryUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    user?: UserUpdateOneRequiredWithoutLibrariesNestedInput
    entries?: LibraryEntryUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    entries?: LibraryEntryUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryCreateManyInput = {
    id?: number
    userId: number
    name: string
    type: $Enums.LibraryType
  }

  export type LibraryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
  }

  export type LibraryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
  }

  export type LibraryEntryCreateInput = {
    addedAt?: Date | string
    library: LibraryCreateNestedOneWithoutEntriesInput
    book: BookCreateNestedOneWithoutInLibrariesInput
  }

  export type LibraryEntryUncheckedCreateInput = {
    id?: number
    libraryId: number
    bookId: number
    addedAt?: Date | string
  }

  export type LibraryEntryUpdateInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    library?: LibraryUpdateOneRequiredWithoutEntriesNestedInput
    book?: BookUpdateOneRequiredWithoutInLibrariesNestedInput
  }

  export type LibraryEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryEntryCreateManyInput = {
    id?: number
    libraryId: number
    bookId: number
    addedAt?: Date | string
  }

  export type LibraryEntryUpdateManyMutationInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReadingChallengeCreateInput = {
    year: number
    goal: number
    completed?: number
    user: UserCreateNestedOneWithoutChallengesInput
    entries?: ChallengeEntryCreateNestedManyWithoutChallengeInput
  }

  export type ReadingChallengeUncheckedCreateInput = {
    id?: number
    userId: number
    year: number
    goal: number
    completed?: number
    entries?: ChallengeEntryUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ReadingChallengeUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutChallengesNestedInput
    entries?: ChallengeEntryUpdateManyWithoutChallengeNestedInput
  }

  export type ReadingChallengeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    entries?: ChallengeEntryUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ReadingChallengeCreateManyInput = {
    id?: number
    userId: number
    year: number
    goal: number
    completed?: number
  }

  export type ReadingChallengeUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
  }

  export type ReadingChallengeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
  }

  export type ChallengeEntryCreateInput = {
    finishedAt: Date | string
    challenge: ReadingChallengeCreateNestedOneWithoutEntriesInput
    book: BookCreateNestedOneWithoutInChallengesInput
  }

  export type ChallengeEntryUncheckedCreateInput = {
    id?: number
    challengeId: number
    bookId: number
    finishedAt: Date | string
  }

  export type ChallengeEntryUpdateInput = {
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ReadingChallengeUpdateOneRequiredWithoutEntriesNestedInput
    book?: BookUpdateOneRequiredWithoutInChallengesNestedInput
  }

  export type ChallengeEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeEntryCreateManyInput = {
    id?: number
    challengeId: number
    bookId: number
    finishedAt: Date | string
  }

  export type ChallengeEntryUpdateManyMutationInput = {
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFriendsInput
    friend: UserCreateNestedOneWithoutAddedMeInput
  }

  export type FriendshipUncheckedCreateInput = {
    id?: number
    userId: number
    friendId: number
    createdAt?: Date | string
  }

  export type FriendshipUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
    friend?: UserUpdateOneRequiredWithoutAddedMeNestedInput
  }

  export type FriendshipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipCreateManyInput = {
    id?: number
    userId: number
    friendId: number
    createdAt?: Date | string
  }

  export type FriendshipUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type LibraryListRelationFilter = {
    every?: LibraryWhereInput
    some?: LibraryWhereInput
    none?: LibraryWhereInput
  }

  export type ReadingChallengeListRelationFilter = {
    every?: ReadingChallengeWhereInput
    some?: ReadingChallengeWhereInput
    none?: ReadingChallengeWhereInput
  }

  export type FriendshipListRelationFilter = {
    every?: FriendshipWhereInput
    some?: FriendshipWhereInput
    none?: FriendshipWhereInput
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LibraryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReadingChallengeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type LibraryEntryListRelationFilter = {
    every?: LibraryEntryWhereInput
    some?: LibraryEntryWhereInput
    none?: LibraryEntryWhereInput
  }

  export type ChallengeEntryListRelationFilter = {
    every?: ChallengeEntryWhereInput
    some?: ChallengeEntryWhereInput
    none?: ChallengeEntryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LibraryEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallengeEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publishDate?: SortOrder
    averageRating?: SortOrder
    language?: SortOrder
    reviewCount?: SortOrder
    pages?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
    averageRating?: SortOrder
    reviewCount?: SortOrder
    pages?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publishDate?: SortOrder
    averageRating?: SortOrder
    language?: SortOrder
    reviewCount?: SortOrder
    pages?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    publishDate?: SortOrder
    averageRating?: SortOrder
    language?: SortOrder
    reviewCount?: SortOrder
    pages?: SortOrder
    description?: SortOrder
    coverUrl?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
    averageRating?: SortOrder
    reviewCount?: SortOrder
    pages?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumPaceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Pace | EnumPaceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Pace[] | ListEnumPaceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Pace[] | ListEnumPaceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaceNullableFilter<$PrismaModel> | $Enums.Pace | null
  }

  export type EnumFocusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Focus | EnumFocusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Focus[] | ListEnumFocusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Focus[] | ListEnumFocusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFocusNullableFilter<$PrismaModel> | $Enums.Focus | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type MoodListRelationFilter = {
    every?: MoodWhereInput
    some?: MoodWhereInput
    none?: MoodWhereInput
  }

  export type TropeListRelationFilter = {
    every?: TropeWhereInput
    some?: TropeWhereInput
    none?: TropeWhereInput
  }

  export type GenreListRelationFilter = {
    every?: GenreWhereInput
    some?: GenreWhereInput
    none?: GenreWhereInput
  }

  export type MoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TropeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    pace?: SortOrder
    focus?: SortOrder
    lovable?: SortOrder
    contentWarnings?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    pace?: SortOrder
    focus?: SortOrder
    lovable?: SortOrder
    contentWarnings?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    rating?: SortOrder
    text?: SortOrder
    pace?: SortOrder
    focus?: SortOrder
    lovable?: SortOrder
    contentWarnings?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumPaceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Pace | EnumPaceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Pace[] | ListEnumPaceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Pace[] | ListEnumPaceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaceNullableWithAggregatesFilter<$PrismaModel> | $Enums.Pace | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaceNullableFilter<$PrismaModel>
    _max?: NestedEnumPaceNullableFilter<$PrismaModel>
  }

  export type EnumFocusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Focus | EnumFocusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Focus[] | ListEnumFocusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Focus[] | ListEnumFocusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFocusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Focus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFocusNullableFilter<$PrismaModel>
    _max?: NestedEnumFocusNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type MoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MoodAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MoodSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TropeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TropeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TropeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TropeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TropeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumLibraryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryType | EnumLibraryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryTypeFilter<$PrismaModel> | $Enums.LibraryType
  }

  export type LibraryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type LibraryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LibraryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type LibraryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    type?: SortOrder
  }

  export type LibrarySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumLibraryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryType | EnumLibraryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryTypeWithAggregatesFilter<$PrismaModel> | $Enums.LibraryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLibraryTypeFilter<$PrismaModel>
    _max?: NestedEnumLibraryTypeFilter<$PrismaModel>
  }

  export type LibraryScalarRelationFilter = {
    is?: LibraryWhereInput
    isNot?: LibraryWhereInput
  }

  export type LibraryEntryCountOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    bookId?: SortOrder
    addedAt?: SortOrder
  }

  export type LibraryEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    bookId?: SortOrder
  }

  export type LibraryEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    bookId?: SortOrder
    addedAt?: SortOrder
  }

  export type LibraryEntryMinOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    bookId?: SortOrder
    addedAt?: SortOrder
  }

  export type LibraryEntrySumOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    bookId?: SortOrder
  }

  export type ReadingChallengeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    goal?: SortOrder
    completed?: SortOrder
  }

  export type ReadingChallengeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    goal?: SortOrder
    completed?: SortOrder
  }

  export type ReadingChallengeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    goal?: SortOrder
    completed?: SortOrder
  }

  export type ReadingChallengeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    goal?: SortOrder
    completed?: SortOrder
  }

  export type ReadingChallengeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    year?: SortOrder
    goal?: SortOrder
    completed?: SortOrder
  }

  export type ReadingChallengeScalarRelationFilter = {
    is?: ReadingChallengeWhereInput
    isNot?: ReadingChallengeWhereInput
  }

  export type ChallengeEntryCountOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    bookId?: SortOrder
    finishedAt?: SortOrder
  }

  export type ChallengeEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    bookId?: SortOrder
  }

  export type ChallengeEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    bookId?: SortOrder
    finishedAt?: SortOrder
  }

  export type ChallengeEntryMinOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    bookId?: SortOrder
    finishedAt?: SortOrder
  }

  export type ChallengeEntrySumOrderByAggregateInput = {
    id?: SortOrder
    challengeId?: SortOrder
    bookId?: SortOrder
  }

  export type FriendshipUserIdFriendIdCompoundUniqueInput = {
    userId: number
    friendId: number
  }

  export type FriendshipCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type FriendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type FriendshipSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type LibraryCreateNestedManyWithoutUserInput = {
    create?: XOR<LibraryCreateWithoutUserInput, LibraryUncheckedCreateWithoutUserInput> | LibraryCreateWithoutUserInput[] | LibraryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibraryCreateOrConnectWithoutUserInput | LibraryCreateOrConnectWithoutUserInput[]
    createMany?: LibraryCreateManyUserInputEnvelope
    connect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
  }

  export type ReadingChallengeCreateNestedManyWithoutUserInput = {
    create?: XOR<ReadingChallengeCreateWithoutUserInput, ReadingChallengeUncheckedCreateWithoutUserInput> | ReadingChallengeCreateWithoutUserInput[] | ReadingChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadingChallengeCreateOrConnectWithoutUserInput | ReadingChallengeCreateOrConnectWithoutUserInput[]
    createMany?: ReadingChallengeCreateManyUserInputEnvelope
    connect?: ReadingChallengeWhereUniqueInput | ReadingChallengeWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput> | FriendshipCreateWithoutUserInput[] | FriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUserInput | FriendshipCreateOrConnectWithoutUserInput[]
    createMany?: FriendshipCreateManyUserInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput> | FriendshipCreateWithoutFriendInput[] | FriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutFriendInput | FriendshipCreateOrConnectWithoutFriendInput[]
    createMany?: FriendshipCreateManyFriendInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type LibraryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LibraryCreateWithoutUserInput, LibraryUncheckedCreateWithoutUserInput> | LibraryCreateWithoutUserInput[] | LibraryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibraryCreateOrConnectWithoutUserInput | LibraryCreateOrConnectWithoutUserInput[]
    createMany?: LibraryCreateManyUserInputEnvelope
    connect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
  }

  export type ReadingChallengeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReadingChallengeCreateWithoutUserInput, ReadingChallengeUncheckedCreateWithoutUserInput> | ReadingChallengeCreateWithoutUserInput[] | ReadingChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadingChallengeCreateOrConnectWithoutUserInput | ReadingChallengeCreateOrConnectWithoutUserInput[]
    createMany?: ReadingChallengeCreateManyUserInputEnvelope
    connect?: ReadingChallengeWhereUniqueInput | ReadingChallengeWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput> | FriendshipCreateWithoutUserInput[] | FriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUserInput | FriendshipCreateOrConnectWithoutUserInput[]
    createMany?: FriendshipCreateManyUserInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type FriendshipUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput> | FriendshipCreateWithoutFriendInput[] | FriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutFriendInput | FriendshipCreateOrConnectWithoutFriendInput[]
    createMany?: FriendshipCreateManyFriendInputEnvelope
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type LibraryUpdateManyWithoutUserNestedInput = {
    create?: XOR<LibraryCreateWithoutUserInput, LibraryUncheckedCreateWithoutUserInput> | LibraryCreateWithoutUserInput[] | LibraryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibraryCreateOrConnectWithoutUserInput | LibraryCreateOrConnectWithoutUserInput[]
    upsert?: LibraryUpsertWithWhereUniqueWithoutUserInput | LibraryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LibraryCreateManyUserInputEnvelope
    set?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    disconnect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    delete?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    connect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    update?: LibraryUpdateWithWhereUniqueWithoutUserInput | LibraryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LibraryUpdateManyWithWhereWithoutUserInput | LibraryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LibraryScalarWhereInput | LibraryScalarWhereInput[]
  }

  export type ReadingChallengeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReadingChallengeCreateWithoutUserInput, ReadingChallengeUncheckedCreateWithoutUserInput> | ReadingChallengeCreateWithoutUserInput[] | ReadingChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadingChallengeCreateOrConnectWithoutUserInput | ReadingChallengeCreateOrConnectWithoutUserInput[]
    upsert?: ReadingChallengeUpsertWithWhereUniqueWithoutUserInput | ReadingChallengeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReadingChallengeCreateManyUserInputEnvelope
    set?: ReadingChallengeWhereUniqueInput | ReadingChallengeWhereUniqueInput[]
    disconnect?: ReadingChallengeWhereUniqueInput | ReadingChallengeWhereUniqueInput[]
    delete?: ReadingChallengeWhereUniqueInput | ReadingChallengeWhereUniqueInput[]
    connect?: ReadingChallengeWhereUniqueInput | ReadingChallengeWhereUniqueInput[]
    update?: ReadingChallengeUpdateWithWhereUniqueWithoutUserInput | ReadingChallengeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReadingChallengeUpdateManyWithWhereWithoutUserInput | ReadingChallengeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReadingChallengeScalarWhereInput | ReadingChallengeScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput> | FriendshipCreateWithoutUserInput[] | FriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUserInput | FriendshipCreateOrConnectWithoutUserInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUserInput | FriendshipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendshipCreateManyUserInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUserInput | FriendshipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUserInput | FriendshipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput> | FriendshipCreateWithoutFriendInput[] | FriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutFriendInput | FriendshipCreateOrConnectWithoutFriendInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutFriendInput | FriendshipUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendshipCreateManyFriendInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutFriendInput | FriendshipUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutFriendInput | FriendshipUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type LibraryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LibraryCreateWithoutUserInput, LibraryUncheckedCreateWithoutUserInput> | LibraryCreateWithoutUserInput[] | LibraryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibraryCreateOrConnectWithoutUserInput | LibraryCreateOrConnectWithoutUserInput[]
    upsert?: LibraryUpsertWithWhereUniqueWithoutUserInput | LibraryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LibraryCreateManyUserInputEnvelope
    set?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    disconnect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    delete?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    connect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    update?: LibraryUpdateWithWhereUniqueWithoutUserInput | LibraryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LibraryUpdateManyWithWhereWithoutUserInput | LibraryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LibraryScalarWhereInput | LibraryScalarWhereInput[]
  }

  export type ReadingChallengeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReadingChallengeCreateWithoutUserInput, ReadingChallengeUncheckedCreateWithoutUserInput> | ReadingChallengeCreateWithoutUserInput[] | ReadingChallengeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReadingChallengeCreateOrConnectWithoutUserInput | ReadingChallengeCreateOrConnectWithoutUserInput[]
    upsert?: ReadingChallengeUpsertWithWhereUniqueWithoutUserInput | ReadingChallengeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReadingChallengeCreateManyUserInputEnvelope
    set?: ReadingChallengeWhereUniqueInput | ReadingChallengeWhereUniqueInput[]
    disconnect?: ReadingChallengeWhereUniqueInput | ReadingChallengeWhereUniqueInput[]
    delete?: ReadingChallengeWhereUniqueInput | ReadingChallengeWhereUniqueInput[]
    connect?: ReadingChallengeWhereUniqueInput | ReadingChallengeWhereUniqueInput[]
    update?: ReadingChallengeUpdateWithWhereUniqueWithoutUserInput | ReadingChallengeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReadingChallengeUpdateManyWithWhereWithoutUserInput | ReadingChallengeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReadingChallengeScalarWhereInput | ReadingChallengeScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput> | FriendshipCreateWithoutUserInput[] | FriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutUserInput | FriendshipCreateOrConnectWithoutUserInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutUserInput | FriendshipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FriendshipCreateManyUserInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutUserInput | FriendshipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutUserInput | FriendshipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type FriendshipUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput> | FriendshipCreateWithoutFriendInput[] | FriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: FriendshipCreateOrConnectWithoutFriendInput | FriendshipCreateOrConnectWithoutFriendInput[]
    upsert?: FriendshipUpsertWithWhereUniqueWithoutFriendInput | FriendshipUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: FriendshipCreateManyFriendInputEnvelope
    set?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    disconnect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    delete?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    connect?: FriendshipWhereUniqueInput | FriendshipWhereUniqueInput[]
    update?: FriendshipUpdateWithWhereUniqueWithoutFriendInput | FriendshipUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: FriendshipUpdateManyWithWhereWithoutFriendInput | FriendshipUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
  }

  export type ReviewCreateNestedManyWithoutBookInput = {
    create?: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput> | ReviewCreateWithoutBookInput[] | ReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookInput | ReviewCreateOrConnectWithoutBookInput[]
    createMany?: ReviewCreateManyBookInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type LibraryEntryCreateNestedManyWithoutBookInput = {
    create?: XOR<LibraryEntryCreateWithoutBookInput, LibraryEntryUncheckedCreateWithoutBookInput> | LibraryEntryCreateWithoutBookInput[] | LibraryEntryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LibraryEntryCreateOrConnectWithoutBookInput | LibraryEntryCreateOrConnectWithoutBookInput[]
    createMany?: LibraryEntryCreateManyBookInputEnvelope
    connect?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
  }

  export type ChallengeEntryCreateNestedManyWithoutBookInput = {
    create?: XOR<ChallengeEntryCreateWithoutBookInput, ChallengeEntryUncheckedCreateWithoutBookInput> | ChallengeEntryCreateWithoutBookInput[] | ChallengeEntryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ChallengeEntryCreateOrConnectWithoutBookInput | ChallengeEntryCreateOrConnectWithoutBookInput[]
    createMany?: ChallengeEntryCreateManyBookInputEnvelope
    connect?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput> | ReviewCreateWithoutBookInput[] | ReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookInput | ReviewCreateOrConnectWithoutBookInput[]
    createMany?: ReviewCreateManyBookInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type LibraryEntryUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<LibraryEntryCreateWithoutBookInput, LibraryEntryUncheckedCreateWithoutBookInput> | LibraryEntryCreateWithoutBookInput[] | LibraryEntryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LibraryEntryCreateOrConnectWithoutBookInput | LibraryEntryCreateOrConnectWithoutBookInput[]
    createMany?: LibraryEntryCreateManyBookInputEnvelope
    connect?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
  }

  export type ChallengeEntryUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<ChallengeEntryCreateWithoutBookInput, ChallengeEntryUncheckedCreateWithoutBookInput> | ChallengeEntryCreateWithoutBookInput[] | ChallengeEntryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ChallengeEntryCreateOrConnectWithoutBookInput | ChallengeEntryCreateOrConnectWithoutBookInput[]
    createMany?: ChallengeEntryCreateManyBookInputEnvelope
    connect?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ReviewUpdateManyWithoutBookNestedInput = {
    create?: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput> | ReviewCreateWithoutBookInput[] | ReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookInput | ReviewCreateOrConnectWithoutBookInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBookInput | ReviewUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ReviewCreateManyBookInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBookInput | ReviewUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBookInput | ReviewUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type LibraryEntryUpdateManyWithoutBookNestedInput = {
    create?: XOR<LibraryEntryCreateWithoutBookInput, LibraryEntryUncheckedCreateWithoutBookInput> | LibraryEntryCreateWithoutBookInput[] | LibraryEntryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LibraryEntryCreateOrConnectWithoutBookInput | LibraryEntryCreateOrConnectWithoutBookInput[]
    upsert?: LibraryEntryUpsertWithWhereUniqueWithoutBookInput | LibraryEntryUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: LibraryEntryCreateManyBookInputEnvelope
    set?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    disconnect?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    delete?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    connect?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    update?: LibraryEntryUpdateWithWhereUniqueWithoutBookInput | LibraryEntryUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: LibraryEntryUpdateManyWithWhereWithoutBookInput | LibraryEntryUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: LibraryEntryScalarWhereInput | LibraryEntryScalarWhereInput[]
  }

  export type ChallengeEntryUpdateManyWithoutBookNestedInput = {
    create?: XOR<ChallengeEntryCreateWithoutBookInput, ChallengeEntryUncheckedCreateWithoutBookInput> | ChallengeEntryCreateWithoutBookInput[] | ChallengeEntryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ChallengeEntryCreateOrConnectWithoutBookInput | ChallengeEntryCreateOrConnectWithoutBookInput[]
    upsert?: ChallengeEntryUpsertWithWhereUniqueWithoutBookInput | ChallengeEntryUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ChallengeEntryCreateManyBookInputEnvelope
    set?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    disconnect?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    delete?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    connect?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    update?: ChallengeEntryUpdateWithWhereUniqueWithoutBookInput | ChallengeEntryUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ChallengeEntryUpdateManyWithWhereWithoutBookInput | ChallengeEntryUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ChallengeEntryScalarWhereInput | ChallengeEntryScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput> | ReviewCreateWithoutBookInput[] | ReviewUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookInput | ReviewCreateOrConnectWithoutBookInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBookInput | ReviewUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ReviewCreateManyBookInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBookInput | ReviewUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBookInput | ReviewUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type LibraryEntryUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<LibraryEntryCreateWithoutBookInput, LibraryEntryUncheckedCreateWithoutBookInput> | LibraryEntryCreateWithoutBookInput[] | LibraryEntryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: LibraryEntryCreateOrConnectWithoutBookInput | LibraryEntryCreateOrConnectWithoutBookInput[]
    upsert?: LibraryEntryUpsertWithWhereUniqueWithoutBookInput | LibraryEntryUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: LibraryEntryCreateManyBookInputEnvelope
    set?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    disconnect?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    delete?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    connect?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    update?: LibraryEntryUpdateWithWhereUniqueWithoutBookInput | LibraryEntryUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: LibraryEntryUpdateManyWithWhereWithoutBookInput | LibraryEntryUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: LibraryEntryScalarWhereInput | LibraryEntryScalarWhereInput[]
  }

  export type ChallengeEntryUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<ChallengeEntryCreateWithoutBookInput, ChallengeEntryUncheckedCreateWithoutBookInput> | ChallengeEntryCreateWithoutBookInput[] | ChallengeEntryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ChallengeEntryCreateOrConnectWithoutBookInput | ChallengeEntryCreateOrConnectWithoutBookInput[]
    upsert?: ChallengeEntryUpsertWithWhereUniqueWithoutBookInput | ChallengeEntryUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ChallengeEntryCreateManyBookInputEnvelope
    set?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    disconnect?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    delete?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    connect?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    update?: ChallengeEntryUpdateWithWhereUniqueWithoutBookInput | ChallengeEntryUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ChallengeEntryUpdateManyWithWhereWithoutBookInput | ChallengeEntryUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ChallengeEntryScalarWhereInput | ChallengeEntryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutReviewsInput = {
    create?: XOR<BookCreateWithoutReviewsInput, BookUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BookCreateOrConnectWithoutReviewsInput
    connect?: BookWhereUniqueInput
  }

  export type MoodCreateNestedManyWithoutReviewsInput = {
    create?: XOR<MoodCreateWithoutReviewsInput, MoodUncheckedCreateWithoutReviewsInput> | MoodCreateWithoutReviewsInput[] | MoodUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: MoodCreateOrConnectWithoutReviewsInput | MoodCreateOrConnectWithoutReviewsInput[]
    connect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
  }

  export type TropeCreateNestedManyWithoutReviewsInput = {
    create?: XOR<TropeCreateWithoutReviewsInput, TropeUncheckedCreateWithoutReviewsInput> | TropeCreateWithoutReviewsInput[] | TropeUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: TropeCreateOrConnectWithoutReviewsInput | TropeCreateOrConnectWithoutReviewsInput[]
    connect?: TropeWhereUniqueInput | TropeWhereUniqueInput[]
  }

  export type GenreCreateNestedManyWithoutReviewsInput = {
    create?: XOR<GenreCreateWithoutReviewsInput, GenreUncheckedCreateWithoutReviewsInput> | GenreCreateWithoutReviewsInput[] | GenreUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutReviewsInput | GenreCreateOrConnectWithoutReviewsInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type MoodUncheckedCreateNestedManyWithoutReviewsInput = {
    create?: XOR<MoodCreateWithoutReviewsInput, MoodUncheckedCreateWithoutReviewsInput> | MoodCreateWithoutReviewsInput[] | MoodUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: MoodCreateOrConnectWithoutReviewsInput | MoodCreateOrConnectWithoutReviewsInput[]
    connect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
  }

  export type TropeUncheckedCreateNestedManyWithoutReviewsInput = {
    create?: XOR<TropeCreateWithoutReviewsInput, TropeUncheckedCreateWithoutReviewsInput> | TropeCreateWithoutReviewsInput[] | TropeUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: TropeCreateOrConnectWithoutReviewsInput | TropeCreateOrConnectWithoutReviewsInput[]
    connect?: TropeWhereUniqueInput | TropeWhereUniqueInput[]
  }

  export type GenreUncheckedCreateNestedManyWithoutReviewsInput = {
    create?: XOR<GenreCreateWithoutReviewsInput, GenreUncheckedCreateWithoutReviewsInput> | GenreCreateWithoutReviewsInput[] | GenreUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutReviewsInput | GenreCreateOrConnectWithoutReviewsInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumPaceFieldUpdateOperationsInput = {
    set?: $Enums.Pace | null
  }

  export type NullableEnumFocusFieldUpdateOperationsInput = {
    set?: $Enums.Focus | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type BookUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<BookCreateWithoutReviewsInput, BookUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BookCreateOrConnectWithoutReviewsInput
    upsert?: BookUpsertWithoutReviewsInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutReviewsInput, BookUpdateWithoutReviewsInput>, BookUncheckedUpdateWithoutReviewsInput>
  }

  export type MoodUpdateManyWithoutReviewsNestedInput = {
    create?: XOR<MoodCreateWithoutReviewsInput, MoodUncheckedCreateWithoutReviewsInput> | MoodCreateWithoutReviewsInput[] | MoodUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: MoodCreateOrConnectWithoutReviewsInput | MoodCreateOrConnectWithoutReviewsInput[]
    upsert?: MoodUpsertWithWhereUniqueWithoutReviewsInput | MoodUpsertWithWhereUniqueWithoutReviewsInput[]
    set?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    disconnect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    delete?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    connect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    update?: MoodUpdateWithWhereUniqueWithoutReviewsInput | MoodUpdateWithWhereUniqueWithoutReviewsInput[]
    updateMany?: MoodUpdateManyWithWhereWithoutReviewsInput | MoodUpdateManyWithWhereWithoutReviewsInput[]
    deleteMany?: MoodScalarWhereInput | MoodScalarWhereInput[]
  }

  export type TropeUpdateManyWithoutReviewsNestedInput = {
    create?: XOR<TropeCreateWithoutReviewsInput, TropeUncheckedCreateWithoutReviewsInput> | TropeCreateWithoutReviewsInput[] | TropeUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: TropeCreateOrConnectWithoutReviewsInput | TropeCreateOrConnectWithoutReviewsInput[]
    upsert?: TropeUpsertWithWhereUniqueWithoutReviewsInput | TropeUpsertWithWhereUniqueWithoutReviewsInput[]
    set?: TropeWhereUniqueInput | TropeWhereUniqueInput[]
    disconnect?: TropeWhereUniqueInput | TropeWhereUniqueInput[]
    delete?: TropeWhereUniqueInput | TropeWhereUniqueInput[]
    connect?: TropeWhereUniqueInput | TropeWhereUniqueInput[]
    update?: TropeUpdateWithWhereUniqueWithoutReviewsInput | TropeUpdateWithWhereUniqueWithoutReviewsInput[]
    updateMany?: TropeUpdateManyWithWhereWithoutReviewsInput | TropeUpdateManyWithWhereWithoutReviewsInput[]
    deleteMany?: TropeScalarWhereInput | TropeScalarWhereInput[]
  }

  export type GenreUpdateManyWithoutReviewsNestedInput = {
    create?: XOR<GenreCreateWithoutReviewsInput, GenreUncheckedCreateWithoutReviewsInput> | GenreCreateWithoutReviewsInput[] | GenreUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutReviewsInput | GenreCreateOrConnectWithoutReviewsInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutReviewsInput | GenreUpsertWithWhereUniqueWithoutReviewsInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutReviewsInput | GenreUpdateWithWhereUniqueWithoutReviewsInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutReviewsInput | GenreUpdateManyWithWhereWithoutReviewsInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type MoodUncheckedUpdateManyWithoutReviewsNestedInput = {
    create?: XOR<MoodCreateWithoutReviewsInput, MoodUncheckedCreateWithoutReviewsInput> | MoodCreateWithoutReviewsInput[] | MoodUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: MoodCreateOrConnectWithoutReviewsInput | MoodCreateOrConnectWithoutReviewsInput[]
    upsert?: MoodUpsertWithWhereUniqueWithoutReviewsInput | MoodUpsertWithWhereUniqueWithoutReviewsInput[]
    set?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    disconnect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    delete?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    connect?: MoodWhereUniqueInput | MoodWhereUniqueInput[]
    update?: MoodUpdateWithWhereUniqueWithoutReviewsInput | MoodUpdateWithWhereUniqueWithoutReviewsInput[]
    updateMany?: MoodUpdateManyWithWhereWithoutReviewsInput | MoodUpdateManyWithWhereWithoutReviewsInput[]
    deleteMany?: MoodScalarWhereInput | MoodScalarWhereInput[]
  }

  export type TropeUncheckedUpdateManyWithoutReviewsNestedInput = {
    create?: XOR<TropeCreateWithoutReviewsInput, TropeUncheckedCreateWithoutReviewsInput> | TropeCreateWithoutReviewsInput[] | TropeUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: TropeCreateOrConnectWithoutReviewsInput | TropeCreateOrConnectWithoutReviewsInput[]
    upsert?: TropeUpsertWithWhereUniqueWithoutReviewsInput | TropeUpsertWithWhereUniqueWithoutReviewsInput[]
    set?: TropeWhereUniqueInput | TropeWhereUniqueInput[]
    disconnect?: TropeWhereUniqueInput | TropeWhereUniqueInput[]
    delete?: TropeWhereUniqueInput | TropeWhereUniqueInput[]
    connect?: TropeWhereUniqueInput | TropeWhereUniqueInput[]
    update?: TropeUpdateWithWhereUniqueWithoutReviewsInput | TropeUpdateWithWhereUniqueWithoutReviewsInput[]
    updateMany?: TropeUpdateManyWithWhereWithoutReviewsInput | TropeUpdateManyWithWhereWithoutReviewsInput[]
    deleteMany?: TropeScalarWhereInput | TropeScalarWhereInput[]
  }

  export type GenreUncheckedUpdateManyWithoutReviewsNestedInput = {
    create?: XOR<GenreCreateWithoutReviewsInput, GenreUncheckedCreateWithoutReviewsInput> | GenreCreateWithoutReviewsInput[] | GenreUncheckedCreateWithoutReviewsInput[]
    connectOrCreate?: GenreCreateOrConnectWithoutReviewsInput | GenreCreateOrConnectWithoutReviewsInput[]
    upsert?: GenreUpsertWithWhereUniqueWithoutReviewsInput | GenreUpsertWithWhereUniqueWithoutReviewsInput[]
    set?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    disconnect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    delete?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    connect?: GenreWhereUniqueInput | GenreWhereUniqueInput[]
    update?: GenreUpdateWithWhereUniqueWithoutReviewsInput | GenreUpdateWithWhereUniqueWithoutReviewsInput[]
    updateMany?: GenreUpdateManyWithWhereWithoutReviewsInput | GenreUpdateManyWithWhereWithoutReviewsInput[]
    deleteMany?: GenreScalarWhereInput | GenreScalarWhereInput[]
  }

  export type ReviewCreateNestedManyWithoutMoodsInput = {
    create?: XOR<ReviewCreateWithoutMoodsInput, ReviewUncheckedCreateWithoutMoodsInput> | ReviewCreateWithoutMoodsInput[] | ReviewUncheckedCreateWithoutMoodsInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMoodsInput | ReviewCreateOrConnectWithoutMoodsInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutMoodsInput = {
    create?: XOR<ReviewCreateWithoutMoodsInput, ReviewUncheckedCreateWithoutMoodsInput> | ReviewCreateWithoutMoodsInput[] | ReviewUncheckedCreateWithoutMoodsInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMoodsInput | ReviewCreateOrConnectWithoutMoodsInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUpdateManyWithoutMoodsNestedInput = {
    create?: XOR<ReviewCreateWithoutMoodsInput, ReviewUncheckedCreateWithoutMoodsInput> | ReviewCreateWithoutMoodsInput[] | ReviewUncheckedCreateWithoutMoodsInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMoodsInput | ReviewCreateOrConnectWithoutMoodsInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutMoodsInput | ReviewUpsertWithWhereUniqueWithoutMoodsInput[]
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutMoodsInput | ReviewUpdateWithWhereUniqueWithoutMoodsInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutMoodsInput | ReviewUpdateManyWithWhereWithoutMoodsInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutMoodsNestedInput = {
    create?: XOR<ReviewCreateWithoutMoodsInput, ReviewUncheckedCreateWithoutMoodsInput> | ReviewCreateWithoutMoodsInput[] | ReviewUncheckedCreateWithoutMoodsInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutMoodsInput | ReviewCreateOrConnectWithoutMoodsInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutMoodsInput | ReviewUpsertWithWhereUniqueWithoutMoodsInput[]
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutMoodsInput | ReviewUpdateWithWhereUniqueWithoutMoodsInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutMoodsInput | ReviewUpdateManyWithWhereWithoutMoodsInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewCreateNestedManyWithoutTropesInput = {
    create?: XOR<ReviewCreateWithoutTropesInput, ReviewUncheckedCreateWithoutTropesInput> | ReviewCreateWithoutTropesInput[] | ReviewUncheckedCreateWithoutTropesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTropesInput | ReviewCreateOrConnectWithoutTropesInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTropesInput = {
    create?: XOR<ReviewCreateWithoutTropesInput, ReviewUncheckedCreateWithoutTropesInput> | ReviewCreateWithoutTropesInput[] | ReviewUncheckedCreateWithoutTropesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTropesInput | ReviewCreateOrConnectWithoutTropesInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUpdateManyWithoutTropesNestedInput = {
    create?: XOR<ReviewCreateWithoutTropesInput, ReviewUncheckedCreateWithoutTropesInput> | ReviewCreateWithoutTropesInput[] | ReviewUncheckedCreateWithoutTropesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTropesInput | ReviewCreateOrConnectWithoutTropesInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTropesInput | ReviewUpsertWithWhereUniqueWithoutTropesInput[]
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTropesInput | ReviewUpdateWithWhereUniqueWithoutTropesInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTropesInput | ReviewUpdateManyWithWhereWithoutTropesInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTropesNestedInput = {
    create?: XOR<ReviewCreateWithoutTropesInput, ReviewUncheckedCreateWithoutTropesInput> | ReviewCreateWithoutTropesInput[] | ReviewUncheckedCreateWithoutTropesInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTropesInput | ReviewCreateOrConnectWithoutTropesInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTropesInput | ReviewUpsertWithWhereUniqueWithoutTropesInput[]
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTropesInput | ReviewUpdateWithWhereUniqueWithoutTropesInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTropesInput | ReviewUpdateManyWithWhereWithoutTropesInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewCreateNestedManyWithoutGenresInput = {
    create?: XOR<ReviewCreateWithoutGenresInput, ReviewUncheckedCreateWithoutGenresInput> | ReviewCreateWithoutGenresInput[] | ReviewUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGenresInput | ReviewCreateOrConnectWithoutGenresInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<ReviewCreateWithoutGenresInput, ReviewUncheckedCreateWithoutGenresInput> | ReviewCreateWithoutGenresInput[] | ReviewUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGenresInput | ReviewCreateOrConnectWithoutGenresInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUpdateManyWithoutGenresNestedInput = {
    create?: XOR<ReviewCreateWithoutGenresInput, ReviewUncheckedCreateWithoutGenresInput> | ReviewCreateWithoutGenresInput[] | ReviewUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGenresInput | ReviewCreateOrConnectWithoutGenresInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutGenresInput | ReviewUpsertWithWhereUniqueWithoutGenresInput[]
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutGenresInput | ReviewUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutGenresInput | ReviewUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<ReviewCreateWithoutGenresInput, ReviewUncheckedCreateWithoutGenresInput> | ReviewCreateWithoutGenresInput[] | ReviewUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGenresInput | ReviewCreateOrConnectWithoutGenresInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutGenresInput | ReviewUpsertWithWhereUniqueWithoutGenresInput[]
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutGenresInput | ReviewUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutGenresInput | ReviewUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLibrariesInput = {
    create?: XOR<UserCreateWithoutLibrariesInput, UserUncheckedCreateWithoutLibrariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLibrariesInput
    connect?: UserWhereUniqueInput
  }

  export type LibraryEntryCreateNestedManyWithoutLibraryInput = {
    create?: XOR<LibraryEntryCreateWithoutLibraryInput, LibraryEntryUncheckedCreateWithoutLibraryInput> | LibraryEntryCreateWithoutLibraryInput[] | LibraryEntryUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: LibraryEntryCreateOrConnectWithoutLibraryInput | LibraryEntryCreateOrConnectWithoutLibraryInput[]
    createMany?: LibraryEntryCreateManyLibraryInputEnvelope
    connect?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
  }

  export type LibraryEntryUncheckedCreateNestedManyWithoutLibraryInput = {
    create?: XOR<LibraryEntryCreateWithoutLibraryInput, LibraryEntryUncheckedCreateWithoutLibraryInput> | LibraryEntryCreateWithoutLibraryInput[] | LibraryEntryUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: LibraryEntryCreateOrConnectWithoutLibraryInput | LibraryEntryCreateOrConnectWithoutLibraryInput[]
    createMany?: LibraryEntryCreateManyLibraryInputEnvelope
    connect?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
  }

  export type EnumLibraryTypeFieldUpdateOperationsInput = {
    set?: $Enums.LibraryType
  }

  export type UserUpdateOneRequiredWithoutLibrariesNestedInput = {
    create?: XOR<UserCreateWithoutLibrariesInput, UserUncheckedCreateWithoutLibrariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLibrariesInput
    upsert?: UserUpsertWithoutLibrariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLibrariesInput, UserUpdateWithoutLibrariesInput>, UserUncheckedUpdateWithoutLibrariesInput>
  }

  export type LibraryEntryUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<LibraryEntryCreateWithoutLibraryInput, LibraryEntryUncheckedCreateWithoutLibraryInput> | LibraryEntryCreateWithoutLibraryInput[] | LibraryEntryUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: LibraryEntryCreateOrConnectWithoutLibraryInput | LibraryEntryCreateOrConnectWithoutLibraryInput[]
    upsert?: LibraryEntryUpsertWithWhereUniqueWithoutLibraryInput | LibraryEntryUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: LibraryEntryCreateManyLibraryInputEnvelope
    set?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    disconnect?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    delete?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    connect?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    update?: LibraryEntryUpdateWithWhereUniqueWithoutLibraryInput | LibraryEntryUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: LibraryEntryUpdateManyWithWhereWithoutLibraryInput | LibraryEntryUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: LibraryEntryScalarWhereInput | LibraryEntryScalarWhereInput[]
  }

  export type LibraryEntryUncheckedUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<LibraryEntryCreateWithoutLibraryInput, LibraryEntryUncheckedCreateWithoutLibraryInput> | LibraryEntryCreateWithoutLibraryInput[] | LibraryEntryUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: LibraryEntryCreateOrConnectWithoutLibraryInput | LibraryEntryCreateOrConnectWithoutLibraryInput[]
    upsert?: LibraryEntryUpsertWithWhereUniqueWithoutLibraryInput | LibraryEntryUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: LibraryEntryCreateManyLibraryInputEnvelope
    set?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    disconnect?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    delete?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    connect?: LibraryEntryWhereUniqueInput | LibraryEntryWhereUniqueInput[]
    update?: LibraryEntryUpdateWithWhereUniqueWithoutLibraryInput | LibraryEntryUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: LibraryEntryUpdateManyWithWhereWithoutLibraryInput | LibraryEntryUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: LibraryEntryScalarWhereInput | LibraryEntryScalarWhereInput[]
  }

  export type LibraryCreateNestedOneWithoutEntriesInput = {
    create?: XOR<LibraryCreateWithoutEntriesInput, LibraryUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutEntriesInput
    connect?: LibraryWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutInLibrariesInput = {
    create?: XOR<BookCreateWithoutInLibrariesInput, BookUncheckedCreateWithoutInLibrariesInput>
    connectOrCreate?: BookCreateOrConnectWithoutInLibrariesInput
    connect?: BookWhereUniqueInput
  }

  export type LibraryUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<LibraryCreateWithoutEntriesInput, LibraryUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutEntriesInput
    upsert?: LibraryUpsertWithoutEntriesInput
    connect?: LibraryWhereUniqueInput
    update?: XOR<XOR<LibraryUpdateToOneWithWhereWithoutEntriesInput, LibraryUpdateWithoutEntriesInput>, LibraryUncheckedUpdateWithoutEntriesInput>
  }

  export type BookUpdateOneRequiredWithoutInLibrariesNestedInput = {
    create?: XOR<BookCreateWithoutInLibrariesInput, BookUncheckedCreateWithoutInLibrariesInput>
    connectOrCreate?: BookCreateOrConnectWithoutInLibrariesInput
    upsert?: BookUpsertWithoutInLibrariesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutInLibrariesInput, BookUpdateWithoutInLibrariesInput>, BookUncheckedUpdateWithoutInLibrariesInput>
  }

  export type UserCreateNestedOneWithoutChallengesInput = {
    create?: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengesInput
    connect?: UserWhereUniqueInput
  }

  export type ChallengeEntryCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChallengeEntryCreateWithoutChallengeInput, ChallengeEntryUncheckedCreateWithoutChallengeInput> | ChallengeEntryCreateWithoutChallengeInput[] | ChallengeEntryUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeEntryCreateOrConnectWithoutChallengeInput | ChallengeEntryCreateOrConnectWithoutChallengeInput[]
    createMany?: ChallengeEntryCreateManyChallengeInputEnvelope
    connect?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
  }

  export type ChallengeEntryUncheckedCreateNestedManyWithoutChallengeInput = {
    create?: XOR<ChallengeEntryCreateWithoutChallengeInput, ChallengeEntryUncheckedCreateWithoutChallengeInput> | ChallengeEntryCreateWithoutChallengeInput[] | ChallengeEntryUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeEntryCreateOrConnectWithoutChallengeInput | ChallengeEntryCreateOrConnectWithoutChallengeInput[]
    createMany?: ChallengeEntryCreateManyChallengeInputEnvelope
    connect?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutChallengesNestedInput = {
    create?: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallengesInput
    upsert?: UserUpsertWithoutChallengesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChallengesInput, UserUpdateWithoutChallengesInput>, UserUncheckedUpdateWithoutChallengesInput>
  }

  export type ChallengeEntryUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChallengeEntryCreateWithoutChallengeInput, ChallengeEntryUncheckedCreateWithoutChallengeInput> | ChallengeEntryCreateWithoutChallengeInput[] | ChallengeEntryUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeEntryCreateOrConnectWithoutChallengeInput | ChallengeEntryCreateOrConnectWithoutChallengeInput[]
    upsert?: ChallengeEntryUpsertWithWhereUniqueWithoutChallengeInput | ChallengeEntryUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChallengeEntryCreateManyChallengeInputEnvelope
    set?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    disconnect?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    delete?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    connect?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    update?: ChallengeEntryUpdateWithWhereUniqueWithoutChallengeInput | ChallengeEntryUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChallengeEntryUpdateManyWithWhereWithoutChallengeInput | ChallengeEntryUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChallengeEntryScalarWhereInput | ChallengeEntryScalarWhereInput[]
  }

  export type ChallengeEntryUncheckedUpdateManyWithoutChallengeNestedInput = {
    create?: XOR<ChallengeEntryCreateWithoutChallengeInput, ChallengeEntryUncheckedCreateWithoutChallengeInput> | ChallengeEntryCreateWithoutChallengeInput[] | ChallengeEntryUncheckedCreateWithoutChallengeInput[]
    connectOrCreate?: ChallengeEntryCreateOrConnectWithoutChallengeInput | ChallengeEntryCreateOrConnectWithoutChallengeInput[]
    upsert?: ChallengeEntryUpsertWithWhereUniqueWithoutChallengeInput | ChallengeEntryUpsertWithWhereUniqueWithoutChallengeInput[]
    createMany?: ChallengeEntryCreateManyChallengeInputEnvelope
    set?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    disconnect?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    delete?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    connect?: ChallengeEntryWhereUniqueInput | ChallengeEntryWhereUniqueInput[]
    update?: ChallengeEntryUpdateWithWhereUniqueWithoutChallengeInput | ChallengeEntryUpdateWithWhereUniqueWithoutChallengeInput[]
    updateMany?: ChallengeEntryUpdateManyWithWhereWithoutChallengeInput | ChallengeEntryUpdateManyWithWhereWithoutChallengeInput[]
    deleteMany?: ChallengeEntryScalarWhereInput | ChallengeEntryScalarWhereInput[]
  }

  export type ReadingChallengeCreateNestedOneWithoutEntriesInput = {
    create?: XOR<ReadingChallengeCreateWithoutEntriesInput, ReadingChallengeUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: ReadingChallengeCreateOrConnectWithoutEntriesInput
    connect?: ReadingChallengeWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutInChallengesInput = {
    create?: XOR<BookCreateWithoutInChallengesInput, BookUncheckedCreateWithoutInChallengesInput>
    connectOrCreate?: BookCreateOrConnectWithoutInChallengesInput
    connect?: BookWhereUniqueInput
  }

  export type ReadingChallengeUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<ReadingChallengeCreateWithoutEntriesInput, ReadingChallengeUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: ReadingChallengeCreateOrConnectWithoutEntriesInput
    upsert?: ReadingChallengeUpsertWithoutEntriesInput
    connect?: ReadingChallengeWhereUniqueInput
    update?: XOR<XOR<ReadingChallengeUpdateToOneWithWhereWithoutEntriesInput, ReadingChallengeUpdateWithoutEntriesInput>, ReadingChallengeUncheckedUpdateWithoutEntriesInput>
  }

  export type BookUpdateOneRequiredWithoutInChallengesNestedInput = {
    create?: XOR<BookCreateWithoutInChallengesInput, BookUncheckedCreateWithoutInChallengesInput>
    connectOrCreate?: BookCreateOrConnectWithoutInChallengesInput
    upsert?: BookUpsertWithoutInChallengesInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutInChallengesInput, BookUpdateWithoutInChallengesInput>, BookUncheckedUpdateWithoutInChallengesInput>
  }

  export type UserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAddedMeInput = {
    create?: XOR<UserCreateWithoutAddedMeInput, UserUncheckedCreateWithoutAddedMeInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddedMeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    upsert?: UserUpsertWithoutFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendsInput, UserUpdateWithoutFriendsInput>, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateOneRequiredWithoutAddedMeNestedInput = {
    create?: XOR<UserCreateWithoutAddedMeInput, UserUncheckedCreateWithoutAddedMeInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddedMeInput
    upsert?: UserUpsertWithoutAddedMeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddedMeInput, UserUpdateWithoutAddedMeInput>, UserUncheckedUpdateWithoutAddedMeInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumPaceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Pace | EnumPaceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Pace[] | ListEnumPaceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Pace[] | ListEnumPaceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaceNullableFilter<$PrismaModel> | $Enums.Pace | null
  }

  export type NestedEnumFocusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Focus | EnumFocusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Focus[] | ListEnumFocusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Focus[] | ListEnumFocusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFocusNullableFilter<$PrismaModel> | $Enums.Focus | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPaceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Pace | EnumPaceFieldRefInput<$PrismaModel> | null
    in?: $Enums.Pace[] | ListEnumPaceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Pace[] | ListEnumPaceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaceNullableWithAggregatesFilter<$PrismaModel> | $Enums.Pace | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaceNullableFilter<$PrismaModel>
    _max?: NestedEnumPaceNullableFilter<$PrismaModel>
  }

  export type NestedEnumFocusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Focus | EnumFocusFieldRefInput<$PrismaModel> | null
    in?: $Enums.Focus[] | ListEnumFocusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Focus[] | ListEnumFocusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFocusNullableWithAggregatesFilter<$PrismaModel> | $Enums.Focus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFocusNullableFilter<$PrismaModel>
    _max?: NestedEnumFocusNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumLibraryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryType | EnumLibraryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryTypeFilter<$PrismaModel> | $Enums.LibraryType
  }

  export type NestedEnumLibraryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryType | EnumLibraryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryTypeWithAggregatesFilter<$PrismaModel> | $Enums.LibraryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLibraryTypeFilter<$PrismaModel>
    _max?: NestedEnumLibraryTypeFilter<$PrismaModel>
  }

  export type ReviewCreateWithoutUserInput = {
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
    book: BookCreateNestedOneWithoutReviewsInput
    moods?: MoodCreateNestedManyWithoutReviewsInput
    tropes?: TropeCreateNestedManyWithoutReviewsInput
    genres?: GenreCreateNestedManyWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    bookId: number
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
    moods?: MoodUncheckedCreateNestedManyWithoutReviewsInput
    tropes?: TropeUncheckedCreateNestedManyWithoutReviewsInput
    genres?: GenreUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LibraryCreateWithoutUserInput = {
    name: string
    type: $Enums.LibraryType
    entries?: LibraryEntryCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    type: $Enums.LibraryType
    entries?: LibraryEntryUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryCreateOrConnectWithoutUserInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutUserInput, LibraryUncheckedCreateWithoutUserInput>
  }

  export type LibraryCreateManyUserInputEnvelope = {
    data: LibraryCreateManyUserInput | LibraryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReadingChallengeCreateWithoutUserInput = {
    year: number
    goal: number
    completed?: number
    entries?: ChallengeEntryCreateNestedManyWithoutChallengeInput
  }

  export type ReadingChallengeUncheckedCreateWithoutUserInput = {
    id?: number
    year: number
    goal: number
    completed?: number
    entries?: ChallengeEntryUncheckedCreateNestedManyWithoutChallengeInput
  }

  export type ReadingChallengeCreateOrConnectWithoutUserInput = {
    where: ReadingChallengeWhereUniqueInput
    create: XOR<ReadingChallengeCreateWithoutUserInput, ReadingChallengeUncheckedCreateWithoutUserInput>
  }

  export type ReadingChallengeCreateManyUserInputEnvelope = {
    data: ReadingChallengeCreateManyUserInput | ReadingChallengeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutUserInput = {
    createdAt?: Date | string
    friend: UserCreateNestedOneWithoutAddedMeInput
  }

  export type FriendshipUncheckedCreateWithoutUserInput = {
    id?: number
    friendId: number
    createdAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutUserInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput>
  }

  export type FriendshipCreateManyUserInputEnvelope = {
    data: FriendshipCreateManyUserInput | FriendshipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FriendshipCreateWithoutFriendInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFriendsInput
  }

  export type FriendshipUncheckedCreateWithoutFriendInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type FriendshipCreateOrConnectWithoutFriendInput = {
    where: FriendshipWhereUniqueInput
    create: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput>
  }

  export type FriendshipCreateManyFriendInputEnvelope = {
    data: FriendshipCreateManyFriendInput | FriendshipCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    bookId?: IntFilter<"Review"> | number
    rating?: FloatFilter<"Review"> | number
    text?: StringNullableFilter<"Review"> | string | null
    pace?: EnumPaceNullableFilter<"Review"> | $Enums.Pace | null
    focus?: EnumFocusNullableFilter<"Review"> | $Enums.Focus | null
    lovable?: BoolNullableFilter<"Review"> | boolean | null
    contentWarnings?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type LibraryUpsertWithWhereUniqueWithoutUserInput = {
    where: LibraryWhereUniqueInput
    update: XOR<LibraryUpdateWithoutUserInput, LibraryUncheckedUpdateWithoutUserInput>
    create: XOR<LibraryCreateWithoutUserInput, LibraryUncheckedCreateWithoutUserInput>
  }

  export type LibraryUpdateWithWhereUniqueWithoutUserInput = {
    where: LibraryWhereUniqueInput
    data: XOR<LibraryUpdateWithoutUserInput, LibraryUncheckedUpdateWithoutUserInput>
  }

  export type LibraryUpdateManyWithWhereWithoutUserInput = {
    where: LibraryScalarWhereInput
    data: XOR<LibraryUpdateManyMutationInput, LibraryUncheckedUpdateManyWithoutUserInput>
  }

  export type LibraryScalarWhereInput = {
    AND?: LibraryScalarWhereInput | LibraryScalarWhereInput[]
    OR?: LibraryScalarWhereInput[]
    NOT?: LibraryScalarWhereInput | LibraryScalarWhereInput[]
    id?: IntFilter<"Library"> | number
    userId?: IntFilter<"Library"> | number
    name?: StringFilter<"Library"> | string
    type?: EnumLibraryTypeFilter<"Library"> | $Enums.LibraryType
  }

  export type ReadingChallengeUpsertWithWhereUniqueWithoutUserInput = {
    where: ReadingChallengeWhereUniqueInput
    update: XOR<ReadingChallengeUpdateWithoutUserInput, ReadingChallengeUncheckedUpdateWithoutUserInput>
    create: XOR<ReadingChallengeCreateWithoutUserInput, ReadingChallengeUncheckedCreateWithoutUserInput>
  }

  export type ReadingChallengeUpdateWithWhereUniqueWithoutUserInput = {
    where: ReadingChallengeWhereUniqueInput
    data: XOR<ReadingChallengeUpdateWithoutUserInput, ReadingChallengeUncheckedUpdateWithoutUserInput>
  }

  export type ReadingChallengeUpdateManyWithWhereWithoutUserInput = {
    where: ReadingChallengeScalarWhereInput
    data: XOR<ReadingChallengeUpdateManyMutationInput, ReadingChallengeUncheckedUpdateManyWithoutUserInput>
  }

  export type ReadingChallengeScalarWhereInput = {
    AND?: ReadingChallengeScalarWhereInput | ReadingChallengeScalarWhereInput[]
    OR?: ReadingChallengeScalarWhereInput[]
    NOT?: ReadingChallengeScalarWhereInput | ReadingChallengeScalarWhereInput[]
    id?: IntFilter<"ReadingChallenge"> | number
    userId?: IntFilter<"ReadingChallenge"> | number
    year?: IntFilter<"ReadingChallenge"> | number
    goal?: IntFilter<"ReadingChallenge"> | number
    completed?: IntFilter<"ReadingChallenge"> | number
  }

  export type FriendshipUpsertWithWhereUniqueWithoutUserInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutUserInput, FriendshipUncheckedUpdateWithoutUserInput>
    create: XOR<FriendshipCreateWithoutUserInput, FriendshipUncheckedCreateWithoutUserInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutUserInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutUserInput, FriendshipUncheckedUpdateWithoutUserInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutUserInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutUserInput>
  }

  export type FriendshipScalarWhereInput = {
    AND?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    OR?: FriendshipScalarWhereInput[]
    NOT?: FriendshipScalarWhereInput | FriendshipScalarWhereInput[]
    id?: IntFilter<"Friendship"> | number
    userId?: IntFilter<"Friendship"> | number
    friendId?: IntFilter<"Friendship"> | number
    createdAt?: DateTimeFilter<"Friendship"> | Date | string
  }

  export type FriendshipUpsertWithWhereUniqueWithoutFriendInput = {
    where: FriendshipWhereUniqueInput
    update: XOR<FriendshipUpdateWithoutFriendInput, FriendshipUncheckedUpdateWithoutFriendInput>
    create: XOR<FriendshipCreateWithoutFriendInput, FriendshipUncheckedCreateWithoutFriendInput>
  }

  export type FriendshipUpdateWithWhereUniqueWithoutFriendInput = {
    where: FriendshipWhereUniqueInput
    data: XOR<FriendshipUpdateWithoutFriendInput, FriendshipUncheckedUpdateWithoutFriendInput>
  }

  export type FriendshipUpdateManyWithWhereWithoutFriendInput = {
    where: FriendshipScalarWhereInput
    data: XOR<FriendshipUpdateManyMutationInput, FriendshipUncheckedUpdateManyWithoutFriendInput>
  }

  export type ReviewCreateWithoutBookInput = {
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    moods?: MoodCreateNestedManyWithoutReviewsInput
    tropes?: TropeCreateNestedManyWithoutReviewsInput
    genres?: GenreCreateNestedManyWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutBookInput = {
    id?: number
    userId: number
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
    moods?: MoodUncheckedCreateNestedManyWithoutReviewsInput
    tropes?: TropeUncheckedCreateNestedManyWithoutReviewsInput
    genres?: GenreUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type ReviewCreateOrConnectWithoutBookInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput>
  }

  export type ReviewCreateManyBookInputEnvelope = {
    data: ReviewCreateManyBookInput | ReviewCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type LibraryEntryCreateWithoutBookInput = {
    addedAt?: Date | string
    library: LibraryCreateNestedOneWithoutEntriesInput
  }

  export type LibraryEntryUncheckedCreateWithoutBookInput = {
    id?: number
    libraryId: number
    addedAt?: Date | string
  }

  export type LibraryEntryCreateOrConnectWithoutBookInput = {
    where: LibraryEntryWhereUniqueInput
    create: XOR<LibraryEntryCreateWithoutBookInput, LibraryEntryUncheckedCreateWithoutBookInput>
  }

  export type LibraryEntryCreateManyBookInputEnvelope = {
    data: LibraryEntryCreateManyBookInput | LibraryEntryCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type ChallengeEntryCreateWithoutBookInput = {
    finishedAt: Date | string
    challenge: ReadingChallengeCreateNestedOneWithoutEntriesInput
  }

  export type ChallengeEntryUncheckedCreateWithoutBookInput = {
    id?: number
    challengeId: number
    finishedAt: Date | string
  }

  export type ChallengeEntryCreateOrConnectWithoutBookInput = {
    where: ChallengeEntryWhereUniqueInput
    create: XOR<ChallengeEntryCreateWithoutBookInput, ChallengeEntryUncheckedCreateWithoutBookInput>
  }

  export type ChallengeEntryCreateManyBookInputEnvelope = {
    data: ChallengeEntryCreateManyBookInput | ChallengeEntryCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutBookInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutBookInput, ReviewUncheckedUpdateWithoutBookInput>
    create: XOR<ReviewCreateWithoutBookInput, ReviewUncheckedCreateWithoutBookInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutBookInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutBookInput, ReviewUncheckedUpdateWithoutBookInput>
  }

  export type ReviewUpdateManyWithWhereWithoutBookInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutBookInput>
  }

  export type LibraryEntryUpsertWithWhereUniqueWithoutBookInput = {
    where: LibraryEntryWhereUniqueInput
    update: XOR<LibraryEntryUpdateWithoutBookInput, LibraryEntryUncheckedUpdateWithoutBookInput>
    create: XOR<LibraryEntryCreateWithoutBookInput, LibraryEntryUncheckedCreateWithoutBookInput>
  }

  export type LibraryEntryUpdateWithWhereUniqueWithoutBookInput = {
    where: LibraryEntryWhereUniqueInput
    data: XOR<LibraryEntryUpdateWithoutBookInput, LibraryEntryUncheckedUpdateWithoutBookInput>
  }

  export type LibraryEntryUpdateManyWithWhereWithoutBookInput = {
    where: LibraryEntryScalarWhereInput
    data: XOR<LibraryEntryUpdateManyMutationInput, LibraryEntryUncheckedUpdateManyWithoutBookInput>
  }

  export type LibraryEntryScalarWhereInput = {
    AND?: LibraryEntryScalarWhereInput | LibraryEntryScalarWhereInput[]
    OR?: LibraryEntryScalarWhereInput[]
    NOT?: LibraryEntryScalarWhereInput | LibraryEntryScalarWhereInput[]
    id?: IntFilter<"LibraryEntry"> | number
    libraryId?: IntFilter<"LibraryEntry"> | number
    bookId?: IntFilter<"LibraryEntry"> | number
    addedAt?: DateTimeFilter<"LibraryEntry"> | Date | string
  }

  export type ChallengeEntryUpsertWithWhereUniqueWithoutBookInput = {
    where: ChallengeEntryWhereUniqueInput
    update: XOR<ChallengeEntryUpdateWithoutBookInput, ChallengeEntryUncheckedUpdateWithoutBookInput>
    create: XOR<ChallengeEntryCreateWithoutBookInput, ChallengeEntryUncheckedCreateWithoutBookInput>
  }

  export type ChallengeEntryUpdateWithWhereUniqueWithoutBookInput = {
    where: ChallengeEntryWhereUniqueInput
    data: XOR<ChallengeEntryUpdateWithoutBookInput, ChallengeEntryUncheckedUpdateWithoutBookInput>
  }

  export type ChallengeEntryUpdateManyWithWhereWithoutBookInput = {
    where: ChallengeEntryScalarWhereInput
    data: XOR<ChallengeEntryUpdateManyMutationInput, ChallengeEntryUncheckedUpdateManyWithoutBookInput>
  }

  export type ChallengeEntryScalarWhereInput = {
    AND?: ChallengeEntryScalarWhereInput | ChallengeEntryScalarWhereInput[]
    OR?: ChallengeEntryScalarWhereInput[]
    NOT?: ChallengeEntryScalarWhereInput | ChallengeEntryScalarWhereInput[]
    id?: IntFilter<"ChallengeEntry"> | number
    challengeId?: IntFilter<"ChallengeEntry"> | number
    bookId?: IntFilter<"ChallengeEntry"> | number
    finishedAt?: DateTimeFilter<"ChallengeEntry"> | Date | string
  }

  export type UserCreateWithoutReviewsInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    libraries?: LibraryCreateNestedManyWithoutUserInput
    challenges?: ReadingChallengeCreateNestedManyWithoutUserInput
    friends?: FriendshipCreateNestedManyWithoutUserInput
    addedMe?: FriendshipCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    libraries?: LibraryUncheckedCreateNestedManyWithoutUserInput
    challenges?: ReadingChallengeUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    addedMe?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type BookCreateWithoutReviewsInput = {
    title: string
    author: string
    publishDate: Date | string
    averageRating?: number | null
    language: string
    reviewCount?: number | null
    pages: number
    description?: string | null
    coverUrl?: string | null
    inLibraries?: LibraryEntryCreateNestedManyWithoutBookInput
    inChallenges?: ChallengeEntryCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    author: string
    publishDate: Date | string
    averageRating?: number | null
    language: string
    reviewCount?: number | null
    pages: number
    description?: string | null
    coverUrl?: string | null
    inLibraries?: LibraryEntryUncheckedCreateNestedManyWithoutBookInput
    inChallenges?: ChallengeEntryUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutReviewsInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutReviewsInput, BookUncheckedCreateWithoutReviewsInput>
  }

  export type MoodCreateWithoutReviewsInput = {
    name: string
  }

  export type MoodUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
  }

  export type MoodCreateOrConnectWithoutReviewsInput = {
    where: MoodWhereUniqueInput
    create: XOR<MoodCreateWithoutReviewsInput, MoodUncheckedCreateWithoutReviewsInput>
  }

  export type TropeCreateWithoutReviewsInput = {
    name: string
  }

  export type TropeUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
  }

  export type TropeCreateOrConnectWithoutReviewsInput = {
    where: TropeWhereUniqueInput
    create: XOR<TropeCreateWithoutReviewsInput, TropeUncheckedCreateWithoutReviewsInput>
  }

  export type GenreCreateWithoutReviewsInput = {
    name: string
  }

  export type GenreUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
  }

  export type GenreCreateOrConnectWithoutReviewsInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutReviewsInput, GenreUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraries?: LibraryUpdateManyWithoutUserNestedInput
    challenges?: ReadingChallengeUpdateManyWithoutUserNestedInput
    friends?: FriendshipUpdateManyWithoutUserNestedInput
    addedMe?: FriendshipUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraries?: LibraryUncheckedUpdateManyWithoutUserNestedInput
    challenges?: ReadingChallengeUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    addedMe?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type BookUpsertWithoutReviewsInput = {
    update: XOR<BookUpdateWithoutReviewsInput, BookUncheckedUpdateWithoutReviewsInput>
    create: XOR<BookCreateWithoutReviewsInput, BookUncheckedCreateWithoutReviewsInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutReviewsInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutReviewsInput, BookUncheckedUpdateWithoutReviewsInput>
  }

  export type BookUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    pages?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inLibraries?: LibraryEntryUpdateManyWithoutBookNestedInput
    inChallenges?: ChallengeEntryUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    pages?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    inLibraries?: LibraryEntryUncheckedUpdateManyWithoutBookNestedInput
    inChallenges?: ChallengeEntryUncheckedUpdateManyWithoutBookNestedInput
  }

  export type MoodUpsertWithWhereUniqueWithoutReviewsInput = {
    where: MoodWhereUniqueInput
    update: XOR<MoodUpdateWithoutReviewsInput, MoodUncheckedUpdateWithoutReviewsInput>
    create: XOR<MoodCreateWithoutReviewsInput, MoodUncheckedCreateWithoutReviewsInput>
  }

  export type MoodUpdateWithWhereUniqueWithoutReviewsInput = {
    where: MoodWhereUniqueInput
    data: XOR<MoodUpdateWithoutReviewsInput, MoodUncheckedUpdateWithoutReviewsInput>
  }

  export type MoodUpdateManyWithWhereWithoutReviewsInput = {
    where: MoodScalarWhereInput
    data: XOR<MoodUpdateManyMutationInput, MoodUncheckedUpdateManyWithoutReviewsInput>
  }

  export type MoodScalarWhereInput = {
    AND?: MoodScalarWhereInput | MoodScalarWhereInput[]
    OR?: MoodScalarWhereInput[]
    NOT?: MoodScalarWhereInput | MoodScalarWhereInput[]
    id?: IntFilter<"Mood"> | number
    name?: StringFilter<"Mood"> | string
  }

  export type TropeUpsertWithWhereUniqueWithoutReviewsInput = {
    where: TropeWhereUniqueInput
    update: XOR<TropeUpdateWithoutReviewsInput, TropeUncheckedUpdateWithoutReviewsInput>
    create: XOR<TropeCreateWithoutReviewsInput, TropeUncheckedCreateWithoutReviewsInput>
  }

  export type TropeUpdateWithWhereUniqueWithoutReviewsInput = {
    where: TropeWhereUniqueInput
    data: XOR<TropeUpdateWithoutReviewsInput, TropeUncheckedUpdateWithoutReviewsInput>
  }

  export type TropeUpdateManyWithWhereWithoutReviewsInput = {
    where: TropeScalarWhereInput
    data: XOR<TropeUpdateManyMutationInput, TropeUncheckedUpdateManyWithoutReviewsInput>
  }

  export type TropeScalarWhereInput = {
    AND?: TropeScalarWhereInput | TropeScalarWhereInput[]
    OR?: TropeScalarWhereInput[]
    NOT?: TropeScalarWhereInput | TropeScalarWhereInput[]
    id?: IntFilter<"Trope"> | number
    name?: StringFilter<"Trope"> | string
  }

  export type GenreUpsertWithWhereUniqueWithoutReviewsInput = {
    where: GenreWhereUniqueInput
    update: XOR<GenreUpdateWithoutReviewsInput, GenreUncheckedUpdateWithoutReviewsInput>
    create: XOR<GenreCreateWithoutReviewsInput, GenreUncheckedCreateWithoutReviewsInput>
  }

  export type GenreUpdateWithWhereUniqueWithoutReviewsInput = {
    where: GenreWhereUniqueInput
    data: XOR<GenreUpdateWithoutReviewsInput, GenreUncheckedUpdateWithoutReviewsInput>
  }

  export type GenreUpdateManyWithWhereWithoutReviewsInput = {
    where: GenreScalarWhereInput
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyWithoutReviewsInput>
  }

  export type GenreScalarWhereInput = {
    AND?: GenreScalarWhereInput | GenreScalarWhereInput[]
    OR?: GenreScalarWhereInput[]
    NOT?: GenreScalarWhereInput | GenreScalarWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
  }

  export type ReviewCreateWithoutMoodsInput = {
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    book: BookCreateNestedOneWithoutReviewsInput
    tropes?: TropeCreateNestedManyWithoutReviewsInput
    genres?: GenreCreateNestedManyWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutMoodsInput = {
    id?: number
    userId: number
    bookId: number
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
    tropes?: TropeUncheckedCreateNestedManyWithoutReviewsInput
    genres?: GenreUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type ReviewCreateOrConnectWithoutMoodsInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutMoodsInput, ReviewUncheckedCreateWithoutMoodsInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutMoodsInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutMoodsInput, ReviewUncheckedUpdateWithoutMoodsInput>
    create: XOR<ReviewCreateWithoutMoodsInput, ReviewUncheckedCreateWithoutMoodsInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutMoodsInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutMoodsInput, ReviewUncheckedUpdateWithoutMoodsInput>
  }

  export type ReviewUpdateManyWithWhereWithoutMoodsInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutMoodsInput>
  }

  export type ReviewCreateWithoutTropesInput = {
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    book: BookCreateNestedOneWithoutReviewsInput
    moods?: MoodCreateNestedManyWithoutReviewsInput
    genres?: GenreCreateNestedManyWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutTropesInput = {
    id?: number
    userId: number
    bookId: number
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
    moods?: MoodUncheckedCreateNestedManyWithoutReviewsInput
    genres?: GenreUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type ReviewCreateOrConnectWithoutTropesInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTropesInput, ReviewUncheckedCreateWithoutTropesInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutTropesInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTropesInput, ReviewUncheckedUpdateWithoutTropesInput>
    create: XOR<ReviewCreateWithoutTropesInput, ReviewUncheckedCreateWithoutTropesInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTropesInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTropesInput, ReviewUncheckedUpdateWithoutTropesInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTropesInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTropesInput>
  }

  export type ReviewCreateWithoutGenresInput = {
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    book: BookCreateNestedOneWithoutReviewsInput
    moods?: MoodCreateNestedManyWithoutReviewsInput
    tropes?: TropeCreateNestedManyWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutGenresInput = {
    id?: number
    userId: number
    bookId: number
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
    moods?: MoodUncheckedCreateNestedManyWithoutReviewsInput
    tropes?: TropeUncheckedCreateNestedManyWithoutReviewsInput
  }

  export type ReviewCreateOrConnectWithoutGenresInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutGenresInput, ReviewUncheckedCreateWithoutGenresInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutGenresInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutGenresInput, ReviewUncheckedUpdateWithoutGenresInput>
    create: XOR<ReviewCreateWithoutGenresInput, ReviewUncheckedCreateWithoutGenresInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutGenresInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutGenresInput, ReviewUncheckedUpdateWithoutGenresInput>
  }

  export type ReviewUpdateManyWithWhereWithoutGenresInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutGenresInput>
  }

  export type UserCreateWithoutLibrariesInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    challenges?: ReadingChallengeCreateNestedManyWithoutUserInput
    friends?: FriendshipCreateNestedManyWithoutUserInput
    addedMe?: FriendshipCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutLibrariesInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    challenges?: ReadingChallengeUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    addedMe?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutLibrariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLibrariesInput, UserUncheckedCreateWithoutLibrariesInput>
  }

  export type LibraryEntryCreateWithoutLibraryInput = {
    addedAt?: Date | string
    book: BookCreateNestedOneWithoutInLibrariesInput
  }

  export type LibraryEntryUncheckedCreateWithoutLibraryInput = {
    id?: number
    bookId: number
    addedAt?: Date | string
  }

  export type LibraryEntryCreateOrConnectWithoutLibraryInput = {
    where: LibraryEntryWhereUniqueInput
    create: XOR<LibraryEntryCreateWithoutLibraryInput, LibraryEntryUncheckedCreateWithoutLibraryInput>
  }

  export type LibraryEntryCreateManyLibraryInputEnvelope = {
    data: LibraryEntryCreateManyLibraryInput | LibraryEntryCreateManyLibraryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLibrariesInput = {
    update: XOR<UserUpdateWithoutLibrariesInput, UserUncheckedUpdateWithoutLibrariesInput>
    create: XOR<UserCreateWithoutLibrariesInput, UserUncheckedCreateWithoutLibrariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLibrariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLibrariesInput, UserUncheckedUpdateWithoutLibrariesInput>
  }

  export type UserUpdateWithoutLibrariesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    challenges?: ReadingChallengeUpdateManyWithoutUserNestedInput
    friends?: FriendshipUpdateManyWithoutUserNestedInput
    addedMe?: FriendshipUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutLibrariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    challenges?: ReadingChallengeUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    addedMe?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type LibraryEntryUpsertWithWhereUniqueWithoutLibraryInput = {
    where: LibraryEntryWhereUniqueInput
    update: XOR<LibraryEntryUpdateWithoutLibraryInput, LibraryEntryUncheckedUpdateWithoutLibraryInput>
    create: XOR<LibraryEntryCreateWithoutLibraryInput, LibraryEntryUncheckedCreateWithoutLibraryInput>
  }

  export type LibraryEntryUpdateWithWhereUniqueWithoutLibraryInput = {
    where: LibraryEntryWhereUniqueInput
    data: XOR<LibraryEntryUpdateWithoutLibraryInput, LibraryEntryUncheckedUpdateWithoutLibraryInput>
  }

  export type LibraryEntryUpdateManyWithWhereWithoutLibraryInput = {
    where: LibraryEntryScalarWhereInput
    data: XOR<LibraryEntryUpdateManyMutationInput, LibraryEntryUncheckedUpdateManyWithoutLibraryInput>
  }

  export type LibraryCreateWithoutEntriesInput = {
    name: string
    type: $Enums.LibraryType
    user: UserCreateNestedOneWithoutLibrariesInput
  }

  export type LibraryUncheckedCreateWithoutEntriesInput = {
    id?: number
    userId: number
    name: string
    type: $Enums.LibraryType
  }

  export type LibraryCreateOrConnectWithoutEntriesInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutEntriesInput, LibraryUncheckedCreateWithoutEntriesInput>
  }

  export type BookCreateWithoutInLibrariesInput = {
    title: string
    author: string
    publishDate: Date | string
    averageRating?: number | null
    language: string
    reviewCount?: number | null
    pages: number
    description?: string | null
    coverUrl?: string | null
    reviews?: ReviewCreateNestedManyWithoutBookInput
    inChallenges?: ChallengeEntryCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutInLibrariesInput = {
    id?: number
    title: string
    author: string
    publishDate: Date | string
    averageRating?: number | null
    language: string
    reviewCount?: number | null
    pages: number
    description?: string | null
    coverUrl?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutBookInput
    inChallenges?: ChallengeEntryUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutInLibrariesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutInLibrariesInput, BookUncheckedCreateWithoutInLibrariesInput>
  }

  export type LibraryUpsertWithoutEntriesInput = {
    update: XOR<LibraryUpdateWithoutEntriesInput, LibraryUncheckedUpdateWithoutEntriesInput>
    create: XOR<LibraryCreateWithoutEntriesInput, LibraryUncheckedCreateWithoutEntriesInput>
    where?: LibraryWhereInput
  }

  export type LibraryUpdateToOneWithWhereWithoutEntriesInput = {
    where?: LibraryWhereInput
    data: XOR<LibraryUpdateWithoutEntriesInput, LibraryUncheckedUpdateWithoutEntriesInput>
  }

  export type LibraryUpdateWithoutEntriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    user?: UserUpdateOneRequiredWithoutLibrariesNestedInput
  }

  export type LibraryUncheckedUpdateWithoutEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
  }

  export type BookUpsertWithoutInLibrariesInput = {
    update: XOR<BookUpdateWithoutInLibrariesInput, BookUncheckedUpdateWithoutInLibrariesInput>
    create: XOR<BookCreateWithoutInLibrariesInput, BookUncheckedCreateWithoutInLibrariesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutInLibrariesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutInLibrariesInput, BookUncheckedUpdateWithoutInLibrariesInput>
  }

  export type BookUpdateWithoutInLibrariesInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    pages?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUpdateManyWithoutBookNestedInput
    inChallenges?: ChallengeEntryUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutInLibrariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    pages?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutBookNestedInput
    inChallenges?: ChallengeEntryUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserCreateWithoutChallengesInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    libraries?: LibraryCreateNestedManyWithoutUserInput
    friends?: FriendshipCreateNestedManyWithoutUserInput
    addedMe?: FriendshipCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutChallengesInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    libraries?: LibraryUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
    addedMe?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutChallengesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
  }

  export type ChallengeEntryCreateWithoutChallengeInput = {
    finishedAt: Date | string
    book: BookCreateNestedOneWithoutInChallengesInput
  }

  export type ChallengeEntryUncheckedCreateWithoutChallengeInput = {
    id?: number
    bookId: number
    finishedAt: Date | string
  }

  export type ChallengeEntryCreateOrConnectWithoutChallengeInput = {
    where: ChallengeEntryWhereUniqueInput
    create: XOR<ChallengeEntryCreateWithoutChallengeInput, ChallengeEntryUncheckedCreateWithoutChallengeInput>
  }

  export type ChallengeEntryCreateManyChallengeInputEnvelope = {
    data: ChallengeEntryCreateManyChallengeInput | ChallengeEntryCreateManyChallengeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChallengesInput = {
    update: XOR<UserUpdateWithoutChallengesInput, UserUncheckedUpdateWithoutChallengesInput>
    create: XOR<UserCreateWithoutChallengesInput, UserUncheckedCreateWithoutChallengesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChallengesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChallengesInput, UserUncheckedUpdateWithoutChallengesInput>
  }

  export type UserUpdateWithoutChallengesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    libraries?: LibraryUpdateManyWithoutUserNestedInput
    friends?: FriendshipUpdateManyWithoutUserNestedInput
    addedMe?: FriendshipUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutChallengesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    libraries?: LibraryUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
    addedMe?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type ChallengeEntryUpsertWithWhereUniqueWithoutChallengeInput = {
    where: ChallengeEntryWhereUniqueInput
    update: XOR<ChallengeEntryUpdateWithoutChallengeInput, ChallengeEntryUncheckedUpdateWithoutChallengeInput>
    create: XOR<ChallengeEntryCreateWithoutChallengeInput, ChallengeEntryUncheckedCreateWithoutChallengeInput>
  }

  export type ChallengeEntryUpdateWithWhereUniqueWithoutChallengeInput = {
    where: ChallengeEntryWhereUniqueInput
    data: XOR<ChallengeEntryUpdateWithoutChallengeInput, ChallengeEntryUncheckedUpdateWithoutChallengeInput>
  }

  export type ChallengeEntryUpdateManyWithWhereWithoutChallengeInput = {
    where: ChallengeEntryScalarWhereInput
    data: XOR<ChallengeEntryUpdateManyMutationInput, ChallengeEntryUncheckedUpdateManyWithoutChallengeInput>
  }

  export type ReadingChallengeCreateWithoutEntriesInput = {
    year: number
    goal: number
    completed?: number
    user: UserCreateNestedOneWithoutChallengesInput
  }

  export type ReadingChallengeUncheckedCreateWithoutEntriesInput = {
    id?: number
    userId: number
    year: number
    goal: number
    completed?: number
  }

  export type ReadingChallengeCreateOrConnectWithoutEntriesInput = {
    where: ReadingChallengeWhereUniqueInput
    create: XOR<ReadingChallengeCreateWithoutEntriesInput, ReadingChallengeUncheckedCreateWithoutEntriesInput>
  }

  export type BookCreateWithoutInChallengesInput = {
    title: string
    author: string
    publishDate: Date | string
    averageRating?: number | null
    language: string
    reviewCount?: number | null
    pages: number
    description?: string | null
    coverUrl?: string | null
    reviews?: ReviewCreateNestedManyWithoutBookInput
    inLibraries?: LibraryEntryCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutInChallengesInput = {
    id?: number
    title: string
    author: string
    publishDate: Date | string
    averageRating?: number | null
    language: string
    reviewCount?: number | null
    pages: number
    description?: string | null
    coverUrl?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutBookInput
    inLibraries?: LibraryEntryUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutInChallengesInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutInChallengesInput, BookUncheckedCreateWithoutInChallengesInput>
  }

  export type ReadingChallengeUpsertWithoutEntriesInput = {
    update: XOR<ReadingChallengeUpdateWithoutEntriesInput, ReadingChallengeUncheckedUpdateWithoutEntriesInput>
    create: XOR<ReadingChallengeCreateWithoutEntriesInput, ReadingChallengeUncheckedCreateWithoutEntriesInput>
    where?: ReadingChallengeWhereInput
  }

  export type ReadingChallengeUpdateToOneWithWhereWithoutEntriesInput = {
    where?: ReadingChallengeWhereInput
    data: XOR<ReadingChallengeUpdateWithoutEntriesInput, ReadingChallengeUncheckedUpdateWithoutEntriesInput>
  }

  export type ReadingChallengeUpdateWithoutEntriesInput = {
    year?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutChallengesNestedInput
  }

  export type ReadingChallengeUncheckedUpdateWithoutEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
  }

  export type BookUpsertWithoutInChallengesInput = {
    update: XOR<BookUpdateWithoutInChallengesInput, BookUncheckedUpdateWithoutInChallengesInput>
    create: XOR<BookCreateWithoutInChallengesInput, BookUncheckedCreateWithoutInChallengesInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutInChallengesInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutInChallengesInput, BookUncheckedUpdateWithoutInChallengesInput>
  }

  export type BookUpdateWithoutInChallengesInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    pages?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUpdateManyWithoutBookNestedInput
    inLibraries?: LibraryEntryUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutInChallengesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: StringFieldUpdateOperationsInput | string
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    pages?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutBookNestedInput
    inLibraries?: LibraryEntryUncheckedUpdateManyWithoutBookNestedInput
  }

  export type UserCreateWithoutFriendsInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    libraries?: LibraryCreateNestedManyWithoutUserInput
    challenges?: ReadingChallengeCreateNestedManyWithoutUserInput
    addedMe?: FriendshipCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutFriendsInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    libraries?: LibraryUncheckedCreateNestedManyWithoutUserInput
    challenges?: ReadingChallengeUncheckedCreateNestedManyWithoutUserInput
    addedMe?: FriendshipUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type UserCreateWithoutAddedMeInput = {
    username: string
    email: string
    password: string
    createdAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    libraries?: LibraryCreateNestedManyWithoutUserInput
    challenges?: ReadingChallengeCreateNestedManyWithoutUserInput
    friends?: FriendshipCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddedMeInput = {
    id?: number
    username: string
    email: string
    password: string
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    libraries?: LibraryUncheckedCreateNestedManyWithoutUserInput
    challenges?: ReadingChallengeUncheckedCreateNestedManyWithoutUserInput
    friends?: FriendshipUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddedMeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddedMeInput, UserUncheckedCreateWithoutAddedMeInput>
  }

  export type UserUpsertWithoutFriendsInput = {
    update: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateWithoutFriendsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    libraries?: LibraryUpdateManyWithoutUserNestedInput
    challenges?: ReadingChallengeUpdateManyWithoutUserNestedInput
    addedMe?: FriendshipUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    libraries?: LibraryUncheckedUpdateManyWithoutUserNestedInput
    challenges?: ReadingChallengeUncheckedUpdateManyWithoutUserNestedInput
    addedMe?: FriendshipUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserUpsertWithoutAddedMeInput = {
    update: XOR<UserUpdateWithoutAddedMeInput, UserUncheckedUpdateWithoutAddedMeInput>
    create: XOR<UserCreateWithoutAddedMeInput, UserUncheckedCreateWithoutAddedMeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddedMeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddedMeInput, UserUncheckedUpdateWithoutAddedMeInput>
  }

  export type UserUpdateWithoutAddedMeInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    libraries?: LibraryUpdateManyWithoutUserNestedInput
    challenges?: ReadingChallengeUpdateManyWithoutUserNestedInput
    friends?: FriendshipUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddedMeInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    libraries?: LibraryUncheckedUpdateManyWithoutUserNestedInput
    challenges?: ReadingChallengeUncheckedUpdateManyWithoutUserNestedInput
    friends?: FriendshipUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    bookId: number
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
  }

  export type LibraryCreateManyUserInput = {
    id?: number
    name: string
    type: $Enums.LibraryType
  }

  export type ReadingChallengeCreateManyUserInput = {
    id?: number
    year: number
    goal: number
    completed?: number
  }

  export type FriendshipCreateManyUserInput = {
    id?: number
    friendId: number
    createdAt?: Date | string
  }

  export type FriendshipCreateManyFriendInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutReviewsNestedInput
    moods?: MoodUpdateManyWithoutReviewsNestedInput
    tropes?: TropeUpdateManyWithoutReviewsNestedInput
    genres?: GenreUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUncheckedUpdateManyWithoutReviewsNestedInput
    tropes?: TropeUncheckedUpdateManyWithoutReviewsNestedInput
    genres?: GenreUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    entries?: LibraryEntryUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    entries?: LibraryEntryUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
  }

  export type ReadingChallengeUpdateWithoutUserInput = {
    year?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    entries?: ChallengeEntryUpdateManyWithoutChallengeNestedInput
  }

  export type ReadingChallengeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
    entries?: ChallengeEntryUncheckedUpdateManyWithoutChallengeNestedInput
  }

  export type ReadingChallengeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    goal?: IntFieldUpdateOperationsInput | number
    completed?: IntFieldUpdateOperationsInput | number
  }

  export type FriendshipUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friend?: UserUpdateOneRequiredWithoutAddedMeNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUpdateWithoutFriendInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type FriendshipUncheckedUpdateWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FriendshipUncheckedUpdateManyWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyBookInput = {
    id?: number
    userId: number
    rating: number
    text?: string | null
    pace?: $Enums.Pace | null
    focus?: $Enums.Focus | null
    lovable?: boolean | null
    contentWarnings?: string | null
    createdAt?: Date | string
  }

  export type LibraryEntryCreateManyBookInput = {
    id?: number
    libraryId: number
    addedAt?: Date | string
  }

  export type ChallengeEntryCreateManyBookInput = {
    id?: number
    challengeId: number
    finishedAt: Date | string
  }

  export type ReviewUpdateWithoutBookInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    moods?: MoodUpdateManyWithoutReviewsNestedInput
    tropes?: TropeUpdateManyWithoutReviewsNestedInput
    genres?: GenreUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUncheckedUpdateManyWithoutReviewsNestedInput
    tropes?: TropeUncheckedUpdateManyWithoutReviewsNestedInput
    genres?: GenreUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryEntryUpdateWithoutBookInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    library?: LibraryUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type LibraryEntryUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryEntryUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeEntryUpdateWithoutBookInput = {
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge?: ReadingChallengeUpdateOneRequiredWithoutEntriesNestedInput
  }

  export type ChallengeEntryUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeEntryUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    challengeId?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MoodUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MoodUncheckedUpdateManyWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TropeUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TropeUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TropeUncheckedUpdateManyWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutMoodsInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    book?: BookUpdateOneRequiredWithoutReviewsNestedInput
    tropes?: TropeUpdateManyWithoutReviewsNestedInput
    genres?: GenreUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutMoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tropes?: TropeUncheckedUpdateManyWithoutReviewsNestedInput
    genres?: GenreUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutMoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutTropesInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    book?: BookUpdateOneRequiredWithoutReviewsNestedInput
    moods?: MoodUpdateManyWithoutReviewsNestedInput
    genres?: GenreUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTropesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUncheckedUpdateManyWithoutReviewsNestedInput
    genres?: GenreUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutTropesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutGenresInput = {
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    book?: BookUpdateOneRequiredWithoutReviewsNestedInput
    moods?: MoodUpdateManyWithoutReviewsNestedInput
    tropes?: TropeUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    moods?: MoodUncheckedUpdateManyWithoutReviewsNestedInput
    tropes?: TropeUncheckedUpdateManyWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    text?: NullableStringFieldUpdateOperationsInput | string | null
    pace?: NullableEnumPaceFieldUpdateOperationsInput | $Enums.Pace | null
    focus?: NullableEnumFocusFieldUpdateOperationsInput | $Enums.Focus | null
    lovable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    contentWarnings?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryEntryCreateManyLibraryInput = {
    id?: number
    bookId: number
    addedAt?: Date | string
  }

  export type LibraryEntryUpdateWithoutLibraryInput = {
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutInLibrariesNestedInput
  }

  export type LibraryEntryUncheckedUpdateWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryEntryUncheckedUpdateManyWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeEntryCreateManyChallengeInput = {
    id?: number
    bookId: number
    finishedAt: Date | string
  }

  export type ChallengeEntryUpdateWithoutChallengeInput = {
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: BookUpdateOneRequiredWithoutInChallengesNestedInput
  }

  export type ChallengeEntryUncheckedUpdateWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallengeEntryUncheckedUpdateManyWithoutChallengeInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    finishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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