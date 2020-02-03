export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  date: any;
  bigint: any;
  float8: any;
  jsonb: any;
  numeric: any;
  content_types: any;
  /** The `DateTime` scalar represents a date and time following the ISO 8601 standard */
  DateTime: any;
  _int8: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

/** expression to compare columns of type _int8. All fields are combined with logical 'AND'. */
export type _Int8_Comparison_Exp = {
  _eq?: Maybe<Scalars["_int8"]>;
  _gt?: Maybe<Scalars["_int8"]>;
  _gte?: Maybe<Scalars["_int8"]>;
  _in?: Maybe<Array<Scalars["_int8"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["_int8"]>;
  _lte?: Maybe<Scalars["_int8"]>;
  _neq?: Maybe<Scalars["_int8"]>;
  _nin?: Maybe<Array<Scalars["_int8"]>>;
};

/** columns and relationships of "author_reviews" */
export type Author_Reviews = {
  __typename?: "author_reviews";
  /** An object relationship */
  author: Authors;
  author_id: Scalars["bigint"];
  comment: Scalars["String"];
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["bigint"];
  parent_id?: Maybe<Scalars["bigint"]>;
  rate: Scalars["float8"];
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user?: Maybe<Vw_Users>;
  user_id: Scalars["String"];
};

/** aggregated selection of "author_reviews" */
export type Author_Reviews_Aggregate = {
  __typename?: "author_reviews_aggregate";
  aggregate?: Maybe<Author_Reviews_Aggregate_Fields>;
  nodes: Array<Author_Reviews>;
};

/** aggregate fields of "author_reviews" */
export type Author_Reviews_Aggregate_Fields = {
  __typename?: "author_reviews_aggregate_fields";
  avg?: Maybe<Author_Reviews_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Author_Reviews_Max_Fields>;
  min?: Maybe<Author_Reviews_Min_Fields>;
  stddev?: Maybe<Author_Reviews_Stddev_Fields>;
  stddev_pop?: Maybe<Author_Reviews_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Author_Reviews_Stddev_Samp_Fields>;
  sum?: Maybe<Author_Reviews_Sum_Fields>;
  var_pop?: Maybe<Author_Reviews_Var_Pop_Fields>;
  var_samp?: Maybe<Author_Reviews_Var_Samp_Fields>;
  variance?: Maybe<Author_Reviews_Variance_Fields>;
};

/** aggregate fields of "author_reviews" */
export type Author_Reviews_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Author_Reviews_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "author_reviews" */
export type Author_Reviews_Aggregate_Order_By = {
  avg?: Maybe<Author_Reviews_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Author_Reviews_Max_Order_By>;
  min?: Maybe<Author_Reviews_Min_Order_By>;
  stddev?: Maybe<Author_Reviews_Stddev_Order_By>;
  stddev_pop?: Maybe<Author_Reviews_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Author_Reviews_Stddev_Samp_Order_By>;
  sum?: Maybe<Author_Reviews_Sum_Order_By>;
  var_pop?: Maybe<Author_Reviews_Var_Pop_Order_By>;
  var_samp?: Maybe<Author_Reviews_Var_Samp_Order_By>;
  variance?: Maybe<Author_Reviews_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "author_reviews" */
export type Author_Reviews_Arr_Rel_Insert_Input = {
  data: Array<Author_Reviews_Insert_Input>;
  on_conflict?: Maybe<Author_Reviews_On_Conflict>;
};

/** aggregate avg on columns */
export type Author_Reviews_Avg_Fields = {
  __typename?: "author_reviews_avg_fields";
  author_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "author_reviews" */
export type Author_Reviews_Avg_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "author_reviews". All fields are combined with a logical 'AND'. */
export type Author_Reviews_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Author_Reviews_Bool_Exp>>>;
  _not?: Maybe<Author_Reviews_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Author_Reviews_Bool_Exp>>>;
  author?: Maybe<Authors_Bool_Exp>;
  author_id?: Maybe<Bigint_Comparison_Exp>;
  comment?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  parent_id?: Maybe<Bigint_Comparison_Exp>;
  rate?: Maybe<Float8_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Vw_Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "author_reviews" */
export enum Author_Reviews_Constraint {
  /** unique or primary key constraint */
  AuthorReviewsPkey = "author_reviews_pkey"
}

/** input type for incrementing integer columne in table "author_reviews" */
export type Author_Reviews_Inc_Input = {
  author_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "author_reviews" */
export type Author_Reviews_Insert_Input = {
  author?: Maybe<Authors_Obj_Rel_Insert_Input>;
  author_id?: Maybe<Scalars["bigint"]>;
  comment?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["bigint"]>;
  rate?: Maybe<Scalars["float8"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Author_Reviews_Max_Fields = {
  __typename?: "author_reviews_max_fields";
  author_id?: Maybe<Scalars["bigint"]>;
  comment?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["bigint"]>;
  rate?: Maybe<Scalars["float8"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "author_reviews" */
export type Author_Reviews_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Author_Reviews_Min_Fields = {
  __typename?: "author_reviews_min_fields";
  author_id?: Maybe<Scalars["bigint"]>;
  comment?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["bigint"]>;
  rate?: Maybe<Scalars["float8"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "author_reviews" */
export type Author_Reviews_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "author_reviews" */
export type Author_Reviews_Mutation_Response = {
  __typename?: "author_reviews_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Author_Reviews>;
};

/** input type for inserting object relation for remote table "author_reviews" */
export type Author_Reviews_Obj_Rel_Insert_Input = {
  data: Author_Reviews_Insert_Input;
  on_conflict?: Maybe<Author_Reviews_On_Conflict>;
};

/** on conflict condition type for table "author_reviews" */
export type Author_Reviews_On_Conflict = {
  constraint: Author_Reviews_Constraint;
  update_columns: Array<Author_Reviews_Update_Column>;
  where?: Maybe<Author_Reviews_Bool_Exp>;
};

/** ordering options when selecting data from "author_reviews" */
export type Author_Reviews_Order_By = {
  author?: Maybe<Authors_Order_By>;
  author_id?: Maybe<Order_By>;
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Vw_Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "author_reviews" */
export enum Author_Reviews_Select_Column {
  /** column name */
  AuthorId = "author_id",
  /** column name */
  Comment = "comment",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  ParentId = "parent_id",
  /** column name */
  Rate = "rate",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** input type for updating data in table "author_reviews" */
export type Author_Reviews_Set_Input = {
  author_id?: Maybe<Scalars["bigint"]>;
  comment?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["bigint"]>;
  rate?: Maybe<Scalars["float8"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Author_Reviews_Stddev_Fields = {
  __typename?: "author_reviews_stddev_fields";
  author_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "author_reviews" */
export type Author_Reviews_Stddev_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Author_Reviews_Stddev_Pop_Fields = {
  __typename?: "author_reviews_stddev_pop_fields";
  author_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "author_reviews" */
export type Author_Reviews_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Author_Reviews_Stddev_Samp_Fields = {
  __typename?: "author_reviews_stddev_samp_fields";
  author_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "author_reviews" */
export type Author_Reviews_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Author_Reviews_Sum_Fields = {
  __typename?: "author_reviews_sum_fields";
  author_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["bigint"]>;
  rate?: Maybe<Scalars["float8"]>;
};

/** order by sum() on columns of table "author_reviews" */
export type Author_Reviews_Sum_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** update columns of table "author_reviews" */
export enum Author_Reviews_Update_Column {
  /** column name */
  AuthorId = "author_id",
  /** column name */
  Comment = "comment",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  ParentId = "parent_id",
  /** column name */
  Rate = "rate",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** aggregate var_pop on columns */
export type Author_Reviews_Var_Pop_Fields = {
  __typename?: "author_reviews_var_pop_fields";
  author_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "author_reviews" */
export type Author_Reviews_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Author_Reviews_Var_Samp_Fields = {
  __typename?: "author_reviews_var_samp_fields";
  author_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "author_reviews" */
export type Author_Reviews_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Author_Reviews_Variance_Fields = {
  __typename?: "author_reviews_variance_fields";
  author_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "author_reviews" */
export type Author_Reviews_Variance_Order_By = {
  author_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** columns and relationships of "authors" */
export type Authors = {
  __typename?: "authors";
  /** An object relationship */
  avatar?: Maybe<Files>;
  avatar_id?: Maybe<Scalars["String"]>;
  birthdate?: Maybe<Scalars["date"]>;
  /** An array relationship */
  contents_connection: Array<Map_Contents_Authors>;
  /** An aggregated array relationship */
  contents_connection_aggregate: Map_Contents_Authors_Aggregate;
  created_at: Scalars["timestamptz"];
  created_by?: Maybe<Scalars["String"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description: Scalars["String"];
  firstname: Scalars["String"];
  /** A computed field, executes function "authors_fullname" */
  fullname?: Maybe<Scalars["String"]>;
  id: Scalars["bigint"];
  lastname: Scalars["String"];
  /** An array relationship */
  reviews: Array<Author_Reviews>;
  /** An aggregated array relationship */
  reviews_aggregate: Author_Reviews_Aggregate;
  updated_at: Scalars["timestamptz"];
};

/** columns and relationships of "authors" */
export type AuthorsContents_ConnectionArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Authors_Order_By>>;
  where?: Maybe<Map_Contents_Authors_Bool_Exp>;
};

/** columns and relationships of "authors" */
export type AuthorsContents_Connection_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Authors_Order_By>>;
  where?: Maybe<Map_Contents_Authors_Bool_Exp>;
};

/** columns and relationships of "authors" */
export type AuthorsReviewsArgs = {
  distinct_on?: Maybe<Array<Author_Reviews_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Author_Reviews_Order_By>>;
  where?: Maybe<Author_Reviews_Bool_Exp>;
};

/** columns and relationships of "authors" */
export type AuthorsReviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Author_Reviews_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Author_Reviews_Order_By>>;
  where?: Maybe<Author_Reviews_Bool_Exp>;
};

/** aggregated selection of "authors" */
export type Authors_Aggregate = {
  __typename?: "authors_aggregate";
  aggregate?: Maybe<Authors_Aggregate_Fields>;
  nodes: Array<Authors>;
};

/** aggregate fields of "authors" */
export type Authors_Aggregate_Fields = {
  __typename?: "authors_aggregate_fields";
  avg?: Maybe<Authors_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Authors_Max_Fields>;
  min?: Maybe<Authors_Min_Fields>;
  stddev?: Maybe<Authors_Stddev_Fields>;
  stddev_pop?: Maybe<Authors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Authors_Stddev_Samp_Fields>;
  sum?: Maybe<Authors_Sum_Fields>;
  var_pop?: Maybe<Authors_Var_Pop_Fields>;
  var_samp?: Maybe<Authors_Var_Samp_Fields>;
  variance?: Maybe<Authors_Variance_Fields>;
};

/** aggregate fields of "authors" */
export type Authors_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Authors_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "authors" */
export type Authors_Aggregate_Order_By = {
  avg?: Maybe<Authors_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Authors_Max_Order_By>;
  min?: Maybe<Authors_Min_Order_By>;
  stddev?: Maybe<Authors_Stddev_Order_By>;
  stddev_pop?: Maybe<Authors_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Authors_Stddev_Samp_Order_By>;
  sum?: Maybe<Authors_Sum_Order_By>;
  var_pop?: Maybe<Authors_Var_Pop_Order_By>;
  var_samp?: Maybe<Authors_Var_Samp_Order_By>;
  variance?: Maybe<Authors_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "authors" */
export type Authors_Arr_Rel_Insert_Input = {
  data: Array<Authors_Insert_Input>;
  on_conflict?: Maybe<Authors_On_Conflict>;
};

/** aggregate avg on columns */
export type Authors_Avg_Fields = {
  __typename?: "authors_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "authors" */
export type Authors_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "authors". All fields are combined with a logical 'AND'. */
export type Authors_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Authors_Bool_Exp>>>;
  _not?: Maybe<Authors_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Authors_Bool_Exp>>>;
  avatar?: Maybe<Files_Bool_Exp>;
  avatar_id?: Maybe<String_Comparison_Exp>;
  birthdate?: Maybe<Date_Comparison_Exp>;
  contents_connection?: Maybe<Map_Contents_Authors_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by?: Maybe<String_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  firstname?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  lastname?: Maybe<String_Comparison_Exp>;
  reviews?: Maybe<Author_Reviews_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "authors" */
export enum Authors_Constraint {
  /** unique or primary key constraint */
  AuthorsPkey = "authors_pkey"
}

/** input type for incrementing integer columne in table "authors" */
export type Authors_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "authors" */
export type Authors_Insert_Input = {
  avatar?: Maybe<Files_Obj_Rel_Insert_Input>;
  avatar_id?: Maybe<Scalars["String"]>;
  birthdate?: Maybe<Scalars["date"]>;
  contents_connection?: Maybe<Map_Contents_Authors_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_by?: Maybe<Scalars["String"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  lastname?: Maybe<Scalars["String"]>;
  reviews?: Maybe<Author_Reviews_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Authors_Max_Fields = {
  __typename?: "authors_max_fields";
  avatar_id?: Maybe<Scalars["String"]>;
  birthdate?: Maybe<Scalars["date"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_by?: Maybe<Scalars["String"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  lastname?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "authors" */
export type Authors_Max_Order_By = {
  avatar_id?: Maybe<Order_By>;
  birthdate?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Authors_Min_Fields = {
  __typename?: "authors_min_fields";
  avatar_id?: Maybe<Scalars["String"]>;
  birthdate?: Maybe<Scalars["date"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_by?: Maybe<Scalars["String"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  lastname?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "authors" */
export type Authors_Min_Order_By = {
  avatar_id?: Maybe<Order_By>;
  birthdate?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "authors" */
export type Authors_Mutation_Response = {
  __typename?: "authors_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Authors>;
};

/** input type for inserting object relation for remote table "authors" */
export type Authors_Obj_Rel_Insert_Input = {
  data: Authors_Insert_Input;
  on_conflict?: Maybe<Authors_On_Conflict>;
};

/** on conflict condition type for table "authors" */
export type Authors_On_Conflict = {
  constraint: Authors_Constraint;
  update_columns: Array<Authors_Update_Column>;
  where?: Maybe<Authors_Bool_Exp>;
};

/** ordering options when selecting data from "authors" */
export type Authors_Order_By = {
  avatar?: Maybe<Files_Order_By>;
  avatar_id?: Maybe<Order_By>;
  birthdate?: Maybe<Order_By>;
  contents_connection_aggregate?: Maybe<
    Map_Contents_Authors_Aggregate_Order_By
  >;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  reviews_aggregate?: Maybe<Author_Reviews_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "authors" */
export enum Authors_Select_Column {
  /** column name */
  AvatarId = "avatar_id",
  /** column name */
  Birthdate = "birthdate",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  Firstname = "firstname",
  /** column name */
  Id = "id",
  /** column name */
  Lastname = "lastname",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "authors" */
export type Authors_Set_Input = {
  avatar_id?: Maybe<Scalars["String"]>;
  birthdate?: Maybe<Scalars["date"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_by?: Maybe<Scalars["String"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  lastname?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Authors_Stddev_Fields = {
  __typename?: "authors_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "authors" */
export type Authors_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Authors_Stddev_Pop_Fields = {
  __typename?: "authors_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "authors" */
export type Authors_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Authors_Stddev_Samp_Fields = {
  __typename?: "authors_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "authors" */
export type Authors_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Authors_Sum_Fields = {
  __typename?: "authors_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "authors" */
export type Authors_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "authors" */
export enum Authors_Update_Column {
  /** column name */
  AvatarId = "avatar_id",
  /** column name */
  Birthdate = "birthdate",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  Firstname = "firstname",
  /** column name */
  Id = "id",
  /** column name */
  Lastname = "lastname",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Authors_Var_Pop_Fields = {
  __typename?: "authors_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "authors" */
export type Authors_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Authors_Var_Samp_Fields = {
  __typename?: "authors_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "authors" */
export type Authors_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Authors_Variance_Fields = {
  __typename?: "authors_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "authors" */
export type Authors_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars["bigint"]>;
  _gt?: Maybe<Scalars["bigint"]>;
  _gte?: Maybe<Scalars["bigint"]>;
  _in?: Maybe<Array<Scalars["bigint"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["bigint"]>;
  _lte?: Maybe<Scalars["bigint"]>;
  _neq?: Maybe<Scalars["bigint"]>;
  _nin?: Maybe<Array<Scalars["bigint"]>>;
};

/** columns and relationships of "bookmarks" */
export type Bookmarks = {
  __typename?: "bookmarks";
  /** An object relationship */
  content: Contents;
  content_id: Scalars["bigint"];
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["String"];
};

/** aggregated selection of "bookmarks" */
export type Bookmarks_Aggregate = {
  __typename?: "bookmarks_aggregate";
  aggregate?: Maybe<Bookmarks_Aggregate_Fields>;
  nodes: Array<Bookmarks>;
};

/** aggregate fields of "bookmarks" */
export type Bookmarks_Aggregate_Fields = {
  __typename?: "bookmarks_aggregate_fields";
  avg?: Maybe<Bookmarks_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Bookmarks_Max_Fields>;
  min?: Maybe<Bookmarks_Min_Fields>;
  stddev?: Maybe<Bookmarks_Stddev_Fields>;
  stddev_pop?: Maybe<Bookmarks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bookmarks_Stddev_Samp_Fields>;
  sum?: Maybe<Bookmarks_Sum_Fields>;
  var_pop?: Maybe<Bookmarks_Var_Pop_Fields>;
  var_samp?: Maybe<Bookmarks_Var_Samp_Fields>;
  variance?: Maybe<Bookmarks_Variance_Fields>;
};

/** aggregate fields of "bookmarks" */
export type Bookmarks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Bookmarks_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "bookmarks" */
export type Bookmarks_Aggregate_Order_By = {
  avg?: Maybe<Bookmarks_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Bookmarks_Max_Order_By>;
  min?: Maybe<Bookmarks_Min_Order_By>;
  stddev?: Maybe<Bookmarks_Stddev_Order_By>;
  stddev_pop?: Maybe<Bookmarks_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Bookmarks_Stddev_Samp_Order_By>;
  sum?: Maybe<Bookmarks_Sum_Order_By>;
  var_pop?: Maybe<Bookmarks_Var_Pop_Order_By>;
  var_samp?: Maybe<Bookmarks_Var_Samp_Order_By>;
  variance?: Maybe<Bookmarks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "bookmarks" */
export type Bookmarks_Arr_Rel_Insert_Input = {
  data: Array<Bookmarks_Insert_Input>;
  on_conflict?: Maybe<Bookmarks_On_Conflict>;
};

/** aggregate avg on columns */
export type Bookmarks_Avg_Fields = {
  __typename?: "bookmarks_avg_fields";
  content_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "bookmarks" */
export type Bookmarks_Avg_Order_By = {
  content_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bookmarks". All fields are combined with a logical 'AND'. */
export type Bookmarks_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Bookmarks_Bool_Exp>>>;
  _not?: Maybe<Bookmarks_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Bookmarks_Bool_Exp>>>;
  content?: Maybe<Contents_Bool_Exp>;
  content_id?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "bookmarks" */
export enum Bookmarks_Constraint {
  /** unique or primary key constraint */
  BookmarksPkey = "bookmarks_pkey"
}

/** input type for incrementing integer columne in table "bookmarks" */
export type Bookmarks_Inc_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "bookmarks" */
export type Bookmarks_Insert_Input = {
  content?: Maybe<Contents_Obj_Rel_Insert_Input>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Bookmarks_Max_Fields = {
  __typename?: "bookmarks_max_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "bookmarks" */
export type Bookmarks_Max_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Bookmarks_Min_Fields = {
  __typename?: "bookmarks_min_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "bookmarks" */
export type Bookmarks_Min_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "bookmarks" */
export type Bookmarks_Mutation_Response = {
  __typename?: "bookmarks_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Bookmarks>;
};

/** input type for inserting object relation for remote table "bookmarks" */
export type Bookmarks_Obj_Rel_Insert_Input = {
  data: Bookmarks_Insert_Input;
  on_conflict?: Maybe<Bookmarks_On_Conflict>;
};

/** on conflict condition type for table "bookmarks" */
export type Bookmarks_On_Conflict = {
  constraint: Bookmarks_Constraint;
  update_columns: Array<Bookmarks_Update_Column>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};

/** ordering options when selecting data from "bookmarks" */
export type Bookmarks_Order_By = {
  content?: Maybe<Contents_Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "bookmarks" */
export enum Bookmarks_Select_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** input type for updating data in table "bookmarks" */
export type Bookmarks_Set_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Bookmarks_Stddev_Fields = {
  __typename?: "bookmarks_stddev_fields";
  content_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "bookmarks" */
export type Bookmarks_Stddev_Order_By = {
  content_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bookmarks_Stddev_Pop_Fields = {
  __typename?: "bookmarks_stddev_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "bookmarks" */
export type Bookmarks_Stddev_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bookmarks_Stddev_Samp_Fields = {
  __typename?: "bookmarks_stddev_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "bookmarks" */
export type Bookmarks_Stddev_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Bookmarks_Sum_Fields = {
  __typename?: "bookmarks_sum_fields";
  content_id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "bookmarks" */
export type Bookmarks_Sum_Order_By = {
  content_id?: Maybe<Order_By>;
};

/** update columns of table "bookmarks" */
export enum Bookmarks_Update_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** aggregate var_pop on columns */
export type Bookmarks_Var_Pop_Fields = {
  __typename?: "bookmarks_var_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "bookmarks" */
export type Bookmarks_Var_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bookmarks_Var_Samp_Fields = {
  __typename?: "bookmarks_var_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "bookmarks" */
export type Bookmarks_Var_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Bookmarks_Variance_Fields = {
  __typename?: "bookmarks_variance_fields";
  content_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "bookmarks" */
export type Bookmarks_Variance_Order_By = {
  content_id?: Maybe<Order_By>;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars["Boolean"]>;
  _gt?: Maybe<Scalars["Boolean"]>;
  _gte?: Maybe<Scalars["Boolean"]>;
  _in?: Maybe<Array<Scalars["Boolean"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Boolean"]>;
  _lte?: Maybe<Scalars["Boolean"]>;
  _neq?: Maybe<Scalars["Boolean"]>;
  _nin?: Maybe<Array<Scalars["Boolean"]>>;
};

export enum CacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC"
}

export type Content = {
  __typename?: "Content";
  average_rate?: Maybe<Scalars["Float"]>;
  cover?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["DateTime"]>;
  id?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
  published_at?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "content_files" */
export type Content_Files = {
  __typename?: "content_files";
  /** An object relationship */
  content: Contents;
  content_id: Scalars["bigint"];
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  file: Files;
  file_id: Scalars["String"];
  id: Scalars["bigint"];
  is_active?: Maybe<Scalars["Boolean"]>;
  type: Scalars["String"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "content_files" */
export type Content_Files_Aggregate = {
  __typename?: "content_files_aggregate";
  aggregate?: Maybe<Content_Files_Aggregate_Fields>;
  nodes: Array<Content_Files>;
};

/** aggregate fields of "content_files" */
export type Content_Files_Aggregate_Fields = {
  __typename?: "content_files_aggregate_fields";
  avg?: Maybe<Content_Files_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Content_Files_Max_Fields>;
  min?: Maybe<Content_Files_Min_Fields>;
  stddev?: Maybe<Content_Files_Stddev_Fields>;
  stddev_pop?: Maybe<Content_Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Content_Files_Stddev_Samp_Fields>;
  sum?: Maybe<Content_Files_Sum_Fields>;
  var_pop?: Maybe<Content_Files_Var_Pop_Fields>;
  var_samp?: Maybe<Content_Files_Var_Samp_Fields>;
  variance?: Maybe<Content_Files_Variance_Fields>;
};

/** aggregate fields of "content_files" */
export type Content_Files_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Content_Files_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "content_files" */
export type Content_Files_Aggregate_Order_By = {
  avg?: Maybe<Content_Files_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Content_Files_Max_Order_By>;
  min?: Maybe<Content_Files_Min_Order_By>;
  stddev?: Maybe<Content_Files_Stddev_Order_By>;
  stddev_pop?: Maybe<Content_Files_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Content_Files_Stddev_Samp_Order_By>;
  sum?: Maybe<Content_Files_Sum_Order_By>;
  var_pop?: Maybe<Content_Files_Var_Pop_Order_By>;
  var_samp?: Maybe<Content_Files_Var_Samp_Order_By>;
  variance?: Maybe<Content_Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "content_files" */
export type Content_Files_Arr_Rel_Insert_Input = {
  data: Array<Content_Files_Insert_Input>;
  on_conflict?: Maybe<Content_Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Content_Files_Avg_Fields = {
  __typename?: "content_files_avg_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "content_files" */
export type Content_Files_Avg_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "content_files". All fields are combined with a logical 'AND'. */
export type Content_Files_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Content_Files_Bool_Exp>>>;
  _not?: Maybe<Content_Files_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Content_Files_Bool_Exp>>>;
  content?: Maybe<Contents_Bool_Exp>;
  content_id?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  file?: Maybe<Files_Bool_Exp>;
  file_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "content_files" */
export enum Content_Files_Constraint {
  /** unique or primary key constraint */
  ContentFilesPkey = "content_files_pkey"
}

/** input type for incrementing integer columne in table "content_files" */
export type Content_Files_Inc_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "content_files" */
export type Content_Files_Insert_Input = {
  content?: Maybe<Contents_Obj_Rel_Insert_Input>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  file?: Maybe<Files_Obj_Rel_Insert_Input>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Content_Files_Max_Fields = {
  __typename?: "content_files_max_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "content_files" */
export type Content_Files_Max_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Content_Files_Min_Fields = {
  __typename?: "content_files_min_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "content_files" */
export type Content_Files_Min_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "content_files" */
export type Content_Files_Mutation_Response = {
  __typename?: "content_files_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Content_Files>;
};

/** input type for inserting object relation for remote table "content_files" */
export type Content_Files_Obj_Rel_Insert_Input = {
  data: Content_Files_Insert_Input;
  on_conflict?: Maybe<Content_Files_On_Conflict>;
};

/** on conflict condition type for table "content_files" */
export type Content_Files_On_Conflict = {
  constraint: Content_Files_Constraint;
  update_columns: Array<Content_Files_Update_Column>;
  where?: Maybe<Content_Files_Bool_Exp>;
};

/** ordering options when selecting data from "content_files" */
export type Content_Files_Order_By = {
  content?: Maybe<Contents_Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  file?: Maybe<Files_Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_active?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "content_files" */
export enum Content_Files_Select_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  FileId = "file_id",
  /** column name */
  Id = "id",
  /** column name */
  IsActive = "is_active",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "content_files" */
export type Content_Files_Set_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Content_Files_Stddev_Fields = {
  __typename?: "content_files_stddev_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "content_files" */
export type Content_Files_Stddev_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Content_Files_Stddev_Pop_Fields = {
  __typename?: "content_files_stddev_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "content_files" */
export type Content_Files_Stddev_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Content_Files_Stddev_Samp_Fields = {
  __typename?: "content_files_stddev_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "content_files" */
export type Content_Files_Stddev_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Content_Files_Sum_Fields = {
  __typename?: "content_files_sum_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "content_files" */
export type Content_Files_Sum_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "content_files" */
export enum Content_Files_Update_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  FileId = "file_id",
  /** column name */
  Id = "id",
  /** column name */
  IsActive = "is_active",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Content_Files_Var_Pop_Fields = {
  __typename?: "content_files_var_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "content_files" */
export type Content_Files_Var_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Content_Files_Var_Samp_Fields = {
  __typename?: "content_files_var_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "content_files" */
export type Content_Files_Var_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Content_Files_Variance_Fields = {
  __typename?: "content_files_variance_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "content_files" */
export type Content_Files_Variance_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "content_prices" */
export type Content_Prices = {
  __typename?: "content_prices";
  /** An object relationship */
  content: Contents;
  content_id: Scalars["bigint"];
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["bigint"];
  is_active: Scalars["Boolean"];
  payment_type: Scalars["String"];
  price: Scalars["numeric"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "content_prices" */
export type Content_Prices_Aggregate = {
  __typename?: "content_prices_aggregate";
  aggregate?: Maybe<Content_Prices_Aggregate_Fields>;
  nodes: Array<Content_Prices>;
};

/** aggregate fields of "content_prices" */
export type Content_Prices_Aggregate_Fields = {
  __typename?: "content_prices_aggregate_fields";
  avg?: Maybe<Content_Prices_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Content_Prices_Max_Fields>;
  min?: Maybe<Content_Prices_Min_Fields>;
  stddev?: Maybe<Content_Prices_Stddev_Fields>;
  stddev_pop?: Maybe<Content_Prices_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Content_Prices_Stddev_Samp_Fields>;
  sum?: Maybe<Content_Prices_Sum_Fields>;
  var_pop?: Maybe<Content_Prices_Var_Pop_Fields>;
  var_samp?: Maybe<Content_Prices_Var_Samp_Fields>;
  variance?: Maybe<Content_Prices_Variance_Fields>;
};

/** aggregate fields of "content_prices" */
export type Content_Prices_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Content_Prices_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "content_prices" */
export type Content_Prices_Aggregate_Order_By = {
  avg?: Maybe<Content_Prices_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Content_Prices_Max_Order_By>;
  min?: Maybe<Content_Prices_Min_Order_By>;
  stddev?: Maybe<Content_Prices_Stddev_Order_By>;
  stddev_pop?: Maybe<Content_Prices_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Content_Prices_Stddev_Samp_Order_By>;
  sum?: Maybe<Content_Prices_Sum_Order_By>;
  var_pop?: Maybe<Content_Prices_Var_Pop_Order_By>;
  var_samp?: Maybe<Content_Prices_Var_Samp_Order_By>;
  variance?: Maybe<Content_Prices_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "content_prices" */
export type Content_Prices_Arr_Rel_Insert_Input = {
  data: Array<Content_Prices_Insert_Input>;
  on_conflict?: Maybe<Content_Prices_On_Conflict>;
};

/** aggregate avg on columns */
export type Content_Prices_Avg_Fields = {
  __typename?: "content_prices_avg_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "content_prices" */
export type Content_Prices_Avg_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "content_prices". All fields are combined with a logical 'AND'. */
export type Content_Prices_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Content_Prices_Bool_Exp>>>;
  _not?: Maybe<Content_Prices_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Content_Prices_Bool_Exp>>>;
  content?: Maybe<Contents_Bool_Exp>;
  content_id?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  payment_type?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "content_prices" */
export enum Content_Prices_Constraint {
  /** unique or primary key constraint */
  ContentPricesPkey = "content_prices_pkey",
  /** unique or primary key constraint */
  ContentPricesPriceContentIdPaymentTypeKey = "content_prices_price_content_id_payment_type_key"
}

/** input type for incrementing integer columne in table "content_prices" */
export type Content_Prices_Inc_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "content_prices" */
export type Content_Prices_Insert_Input = {
  content?: Maybe<Contents_Obj_Rel_Insert_Input>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Content_Prices_Max_Fields = {
  __typename?: "content_prices_max_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "content_prices" */
export type Content_Prices_Max_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Content_Prices_Min_Fields = {
  __typename?: "content_prices_min_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "content_prices" */
export type Content_Prices_Min_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "content_prices" */
export type Content_Prices_Mutation_Response = {
  __typename?: "content_prices_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Content_Prices>;
};

/** input type for inserting object relation for remote table "content_prices" */
export type Content_Prices_Obj_Rel_Insert_Input = {
  data: Content_Prices_Insert_Input;
  on_conflict?: Maybe<Content_Prices_On_Conflict>;
};

/** on conflict condition type for table "content_prices" */
export type Content_Prices_On_Conflict = {
  constraint: Content_Prices_Constraint;
  update_columns: Array<Content_Prices_Update_Column>;
  where?: Maybe<Content_Prices_Bool_Exp>;
};

/** ordering options when selecting data from "content_prices" */
export type Content_Prices_Order_By = {
  content?: Maybe<Contents_Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_active?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "content_prices" */
export enum Content_Prices_Select_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  IsActive = "is_active",
  /** column name */
  PaymentType = "payment_type",
  /** column name */
  Price = "price",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "content_prices" */
export type Content_Prices_Set_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Content_Prices_Stddev_Fields = {
  __typename?: "content_prices_stddev_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "content_prices" */
export type Content_Prices_Stddev_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Content_Prices_Stddev_Pop_Fields = {
  __typename?: "content_prices_stddev_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "content_prices" */
export type Content_Prices_Stddev_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Content_Prices_Stddev_Samp_Fields = {
  __typename?: "content_prices_stddev_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "content_prices" */
export type Content_Prices_Stddev_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Content_Prices_Sum_Fields = {
  __typename?: "content_prices_sum_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "content_prices" */
export type Content_Prices_Sum_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** update columns of table "content_prices" */
export enum Content_Prices_Update_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  IsActive = "is_active",
  /** column name */
  PaymentType = "payment_type",
  /** column name */
  Price = "price",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Content_Prices_Var_Pop_Fields = {
  __typename?: "content_prices_var_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "content_prices" */
export type Content_Prices_Var_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Content_Prices_Var_Samp_Fields = {
  __typename?: "content_prices_var_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "content_prices" */
export type Content_Prices_Var_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Content_Prices_Variance_Fields = {
  __typename?: "content_prices_variance_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "content_prices" */
export type Content_Prices_Variance_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** columns and relationships of "content_tocs" */
export type Content_Tocs = {
  __typename?: "content_tocs";
  /** An object relationship */
  content: Contents;
  content_id: Scalars["bigint"];
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["bigint"];
  page_number: Scalars["Int"];
  title: Scalars["String"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "content_tocs" */
export type Content_Tocs_Aggregate = {
  __typename?: "content_tocs_aggregate";
  aggregate?: Maybe<Content_Tocs_Aggregate_Fields>;
  nodes: Array<Content_Tocs>;
};

/** aggregate fields of "content_tocs" */
export type Content_Tocs_Aggregate_Fields = {
  __typename?: "content_tocs_aggregate_fields";
  avg?: Maybe<Content_Tocs_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Content_Tocs_Max_Fields>;
  min?: Maybe<Content_Tocs_Min_Fields>;
  stddev?: Maybe<Content_Tocs_Stddev_Fields>;
  stddev_pop?: Maybe<Content_Tocs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Content_Tocs_Stddev_Samp_Fields>;
  sum?: Maybe<Content_Tocs_Sum_Fields>;
  var_pop?: Maybe<Content_Tocs_Var_Pop_Fields>;
  var_samp?: Maybe<Content_Tocs_Var_Samp_Fields>;
  variance?: Maybe<Content_Tocs_Variance_Fields>;
};

/** aggregate fields of "content_tocs" */
export type Content_Tocs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Content_Tocs_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "content_tocs" */
export type Content_Tocs_Aggregate_Order_By = {
  avg?: Maybe<Content_Tocs_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Content_Tocs_Max_Order_By>;
  min?: Maybe<Content_Tocs_Min_Order_By>;
  stddev?: Maybe<Content_Tocs_Stddev_Order_By>;
  stddev_pop?: Maybe<Content_Tocs_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Content_Tocs_Stddev_Samp_Order_By>;
  sum?: Maybe<Content_Tocs_Sum_Order_By>;
  var_pop?: Maybe<Content_Tocs_Var_Pop_Order_By>;
  var_samp?: Maybe<Content_Tocs_Var_Samp_Order_By>;
  variance?: Maybe<Content_Tocs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "content_tocs" */
export type Content_Tocs_Arr_Rel_Insert_Input = {
  data: Array<Content_Tocs_Insert_Input>;
  on_conflict?: Maybe<Content_Tocs_On_Conflict>;
};

/** aggregate avg on columns */
export type Content_Tocs_Avg_Fields = {
  __typename?: "content_tocs_avg_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  page_number?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "content_tocs" */
export type Content_Tocs_Avg_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page_number?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "content_tocs". All fields are combined with a logical 'AND'. */
export type Content_Tocs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Content_Tocs_Bool_Exp>>>;
  _not?: Maybe<Content_Tocs_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Content_Tocs_Bool_Exp>>>;
  content?: Maybe<Contents_Bool_Exp>;
  content_id?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  page_number?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "content_tocs" */
export enum Content_Tocs_Constraint {
  /** unique or primary key constraint */
  ContentTocsPkey = "content_tocs_pkey"
}

/** input type for incrementing integer columne in table "content_tocs" */
export type Content_Tocs_Inc_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  page_number?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "content_tocs" */
export type Content_Tocs_Insert_Input = {
  content?: Maybe<Contents_Obj_Rel_Insert_Input>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  page_number?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Content_Tocs_Max_Fields = {
  __typename?: "content_tocs_max_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  page_number?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "content_tocs" */
export type Content_Tocs_Max_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page_number?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Content_Tocs_Min_Fields = {
  __typename?: "content_tocs_min_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  page_number?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "content_tocs" */
export type Content_Tocs_Min_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page_number?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "content_tocs" */
export type Content_Tocs_Mutation_Response = {
  __typename?: "content_tocs_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Content_Tocs>;
};

/** input type for inserting object relation for remote table "content_tocs" */
export type Content_Tocs_Obj_Rel_Insert_Input = {
  data: Content_Tocs_Insert_Input;
  on_conflict?: Maybe<Content_Tocs_On_Conflict>;
};

/** on conflict condition type for table "content_tocs" */
export type Content_Tocs_On_Conflict = {
  constraint: Content_Tocs_Constraint;
  update_columns: Array<Content_Tocs_Update_Column>;
  where?: Maybe<Content_Tocs_Bool_Exp>;
};

/** ordering options when selecting data from "content_tocs" */
export type Content_Tocs_Order_By = {
  content?: Maybe<Contents_Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page_number?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "content_tocs" */
export enum Content_Tocs_Select_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  PageNumber = "page_number",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "content_tocs" */
export type Content_Tocs_Set_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  page_number?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Content_Tocs_Stddev_Fields = {
  __typename?: "content_tocs_stddev_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  page_number?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "content_tocs" */
export type Content_Tocs_Stddev_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page_number?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Content_Tocs_Stddev_Pop_Fields = {
  __typename?: "content_tocs_stddev_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  page_number?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "content_tocs" */
export type Content_Tocs_Stddev_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page_number?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Content_Tocs_Stddev_Samp_Fields = {
  __typename?: "content_tocs_stddev_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  page_number?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "content_tocs" */
export type Content_Tocs_Stddev_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page_number?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Content_Tocs_Sum_Fields = {
  __typename?: "content_tocs_sum_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  page_number?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "content_tocs" */
export type Content_Tocs_Sum_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page_number?: Maybe<Order_By>;
};

/** update columns of table "content_tocs" */
export enum Content_Tocs_Update_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  PageNumber = "page_number",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Content_Tocs_Var_Pop_Fields = {
  __typename?: "content_tocs_var_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  page_number?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "content_tocs" */
export type Content_Tocs_Var_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page_number?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Content_Tocs_Var_Samp_Fields = {
  __typename?: "content_tocs_var_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  page_number?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "content_tocs" */
export type Content_Tocs_Var_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page_number?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Content_Tocs_Variance_Fields = {
  __typename?: "content_tocs_variance_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  page_number?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "content_tocs" */
export type Content_Tocs_Variance_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page_number?: Maybe<Order_By>;
};

/** expression to compare columns of type content_types. All fields are combined with logical 'AND'. */
export type Content_Types_Comparison_Exp = {
  _eq?: Maybe<Scalars["content_types"]>;
  _gt?: Maybe<Scalars["content_types"]>;
  _gte?: Maybe<Scalars["content_types"]>;
  _in?: Maybe<Array<Scalars["content_types"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["content_types"]>;
  _lte?: Maybe<Scalars["content_types"]>;
  _neq?: Maybe<Scalars["content_types"]>;
  _nin?: Maybe<Array<Scalars["content_types"]>>;
};

/** columns and relationships of "contents" */
export type Contents = {
  __typename?: "contents";
  /** An array relationship */
  authors_connection: Array<Map_Contents_Authors>;
  /** An aggregated array relationship */
  authors_connection_aggregate: Map_Contents_Authors_Aggregate;
  /** An array relationship */
  bookmarks: Array<Bookmarks>;
  /** An aggregated array relationship */
  bookmarks_aggregate: Bookmarks_Aggregate;
  code?: Maybe<Scalars["String"]>;
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description: Scalars["String"];
  /** An array relationship */
  details: Array<Payment_Details>;
  /** An aggregated array relationship */
  details_aggregate: Payment_Details_Aggregate;
  /** An array relationship */
  files: Array<Content_Files>;
  /** An aggregated array relationship */
  files_aggregate: Content_Files_Aggregate;
  id: Scalars["bigint"];
  is_published: Scalars["Boolean"];
  isbn?: Maybe<Scalars["String"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  name: Scalars["String"];
  /** An array relationship */
  organizations: Array<Map_Contents_Organizations>;
  /** An aggregated array relationship */
  organizations_aggregate: Map_Contents_Organizations_Aggregate;
  /** An array relationship */
  prices: Array<Content_Prices>;
  /** An aggregated array relationship */
  prices_aggregate: Content_Prices_Aggregate;
  /** An array relationship */
  reviews: Array<Reviews>;
  /** An aggregated array relationship */
  reviews_aggregate: Reviews_Aggregate;
  /** An array relationship */
  status_connection: Array<Map_Users_Contents_Status>;
  /** An aggregated array relationship */
  status_connection_aggregate: Map_Users_Contents_Status_Aggregate;
  /** An array relationship */
  tags_connection: Array<Map_Contents_Tags>;
  /** An aggregated array relationship */
  tags_connection_aggregate: Map_Contents_Tags_Aggregate;
  /** An array relationship */
  tocs: Array<Content_Tocs>;
  /** An aggregated array relationship */
  tocs_aggregate: Content_Tocs_Aggregate;
  type?: Maybe<Scalars["content_types"]>;
  updated_at: Scalars["timestamptz"];
  views: Scalars["Int"];
};

/** columns and relationships of "contents" */
export type ContentsAuthors_ConnectionArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Authors_Order_By>>;
  where?: Maybe<Map_Contents_Authors_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsAuthors_Connection_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Authors_Order_By>>;
  where?: Maybe<Map_Contents_Authors_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsBookmarksArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsBookmarks_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsDetailsArgs = {
  distinct_on?: Maybe<Array<Payment_Details_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Details_Order_By>>;
  where?: Maybe<Payment_Details_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsDetails_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Details_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Details_Order_By>>;
  where?: Maybe<Payment_Details_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsFilesArgs = {
  distinct_on?: Maybe<Array<Content_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Files_Order_By>>;
  where?: Maybe<Content_Files_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Content_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Files_Order_By>>;
  where?: Maybe<Content_Files_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsMetaArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "contents" */
export type ContentsOrganizationsArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Organizations_Order_By>>;
  where?: Maybe<Map_Contents_Organizations_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsOrganizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Organizations_Order_By>>;
  where?: Maybe<Map_Contents_Organizations_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsPricesArgs = {
  distinct_on?: Maybe<Array<Content_Prices_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Prices_Order_By>>;
  where?: Maybe<Content_Prices_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsPrices_AggregateArgs = {
  distinct_on?: Maybe<Array<Content_Prices_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Prices_Order_By>>;
  where?: Maybe<Content_Prices_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsReviewsArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsReviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsStatus_ConnectionArgs = {
  distinct_on?: Maybe<Array<Map_Users_Contents_Status_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Contents_Status_Order_By>>;
  where?: Maybe<Map_Users_Contents_Status_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsStatus_Connection_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Contents_Status_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Contents_Status_Order_By>>;
  where?: Maybe<Map_Users_Contents_Status_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsTags_ConnectionArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Tags_Order_By>>;
  where?: Maybe<Map_Contents_Tags_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsTags_Connection_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Tags_Order_By>>;
  where?: Maybe<Map_Contents_Tags_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsTocsArgs = {
  distinct_on?: Maybe<Array<Content_Tocs_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Tocs_Order_By>>;
  where?: Maybe<Content_Tocs_Bool_Exp>;
};

/** columns and relationships of "contents" */
export type ContentsTocs_AggregateArgs = {
  distinct_on?: Maybe<Array<Content_Tocs_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Tocs_Order_By>>;
  where?: Maybe<Content_Tocs_Bool_Exp>;
};

/** aggregated selection of "contents" */
export type Contents_Aggregate = {
  __typename?: "contents_aggregate";
  aggregate?: Maybe<Contents_Aggregate_Fields>;
  nodes: Array<Contents>;
};

/** aggregate fields of "contents" */
export type Contents_Aggregate_Fields = {
  __typename?: "contents_aggregate_fields";
  avg?: Maybe<Contents_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Contents_Max_Fields>;
  min?: Maybe<Contents_Min_Fields>;
  stddev?: Maybe<Contents_Stddev_Fields>;
  stddev_pop?: Maybe<Contents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Contents_Stddev_Samp_Fields>;
  sum?: Maybe<Contents_Sum_Fields>;
  var_pop?: Maybe<Contents_Var_Pop_Fields>;
  var_samp?: Maybe<Contents_Var_Samp_Fields>;
  variance?: Maybe<Contents_Variance_Fields>;
};

/** aggregate fields of "contents" */
export type Contents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contents_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "contents" */
export type Contents_Aggregate_Order_By = {
  avg?: Maybe<Contents_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Contents_Max_Order_By>;
  min?: Maybe<Contents_Min_Order_By>;
  stddev?: Maybe<Contents_Stddev_Order_By>;
  stddev_pop?: Maybe<Contents_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Contents_Stddev_Samp_Order_By>;
  sum?: Maybe<Contents_Sum_Order_By>;
  var_pop?: Maybe<Contents_Var_Pop_Order_By>;
  var_samp?: Maybe<Contents_Var_Samp_Order_By>;
  variance?: Maybe<Contents_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Contents_Append_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "contents" */
export type Contents_Arr_Rel_Insert_Input = {
  data: Array<Contents_Insert_Input>;
  on_conflict?: Maybe<Contents_On_Conflict>;
};

/** aggregate avg on columns */
export type Contents_Avg_Fields = {
  __typename?: "contents_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "contents" */
export type Contents_Avg_Order_By = {
  id?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "contents". All fields are combined with a logical 'AND'. */
export type Contents_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contents_Bool_Exp>>>;
  _not?: Maybe<Contents_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Contents_Bool_Exp>>>;
  authors_connection?: Maybe<Map_Contents_Authors_Bool_Exp>;
  bookmarks?: Maybe<Bookmarks_Bool_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  details?: Maybe<Payment_Details_Bool_Exp>;
  files?: Maybe<Content_Files_Bool_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  is_published?: Maybe<Boolean_Comparison_Exp>;
  isbn?: Maybe<String_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organizations?: Maybe<Map_Contents_Organizations_Bool_Exp>;
  prices?: Maybe<Content_Prices_Bool_Exp>;
  reviews?: Maybe<Reviews_Bool_Exp>;
  status_connection?: Maybe<Map_Users_Contents_Status_Bool_Exp>;
  tags_connection?: Maybe<Map_Contents_Tags_Bool_Exp>;
  tocs?: Maybe<Content_Tocs_Bool_Exp>;
  type?: Maybe<Content_Types_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  views?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "contents" */
export enum Contents_Constraint {
  /** unique or primary key constraint */
  ContentsPkey = "contents_pkey"
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Contents_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Contents_Delete_Elem_Input = {
  meta?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Contents_Delete_Key_Input = {
  meta?: Maybe<Scalars["String"]>;
};

/** input type for incrementing integer columne in table "contents" */
export type Contents_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
  views?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "contents" */
export type Contents_Insert_Input = {
  authors_connection?: Maybe<Map_Contents_Authors_Arr_Rel_Insert_Input>;
  bookmarks?: Maybe<Bookmarks_Arr_Rel_Insert_Input>;
  code?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  details?: Maybe<Payment_Details_Arr_Rel_Insert_Input>;
  files?: Maybe<Content_Files_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["bigint"]>;
  is_published?: Maybe<Scalars["Boolean"]>;
  isbn?: Maybe<Scalars["String"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  name?: Maybe<Scalars["String"]>;
  organizations?: Maybe<Map_Contents_Organizations_Arr_Rel_Insert_Input>;
  prices?: Maybe<Content_Prices_Arr_Rel_Insert_Input>;
  reviews?: Maybe<Reviews_Arr_Rel_Insert_Input>;
  status_connection?: Maybe<Map_Users_Contents_Status_Arr_Rel_Insert_Input>;
  tags_connection?: Maybe<Map_Contents_Tags_Arr_Rel_Insert_Input>;
  tocs?: Maybe<Content_Tocs_Arr_Rel_Insert_Input>;
  type?: Maybe<Scalars["content_types"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  views?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Contents_Max_Fields = {
  __typename?: "contents_max_fields";
  code?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  isbn?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  views?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "contents" */
export type Contents_Max_Order_By = {
  code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Contents_Min_Fields = {
  __typename?: "contents_min_fields";
  code?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  isbn?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  views?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "contents" */
export type Contents_Min_Order_By = {
  code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** response of any mutation on the table "contents" */
export type Contents_Mutation_Response = {
  __typename?: "contents_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Contents>;
};

/** input type for inserting object relation for remote table "contents" */
export type Contents_Obj_Rel_Insert_Input = {
  data: Contents_Insert_Input;
  on_conflict?: Maybe<Contents_On_Conflict>;
};

/** on conflict condition type for table "contents" */
export type Contents_On_Conflict = {
  constraint: Contents_Constraint;
  update_columns: Array<Contents_Update_Column>;
  where?: Maybe<Contents_Bool_Exp>;
};

/** ordering options when selecting data from "contents" */
export type Contents_Order_By = {
  authors_connection_aggregate?: Maybe<Map_Contents_Authors_Aggregate_Order_By>;
  bookmarks_aggregate?: Maybe<Bookmarks_Aggregate_Order_By>;
  code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  details_aggregate?: Maybe<Payment_Details_Aggregate_Order_By>;
  files_aggregate?: Maybe<Content_Files_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  is_published?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organizations_aggregate?: Maybe<
    Map_Contents_Organizations_Aggregate_Order_By
  >;
  prices_aggregate?: Maybe<Content_Prices_Aggregate_Order_By>;
  reviews_aggregate?: Maybe<Reviews_Aggregate_Order_By>;
  status_connection_aggregate?: Maybe<
    Map_Users_Contents_Status_Aggregate_Order_By
  >;
  tags_connection_aggregate?: Maybe<Map_Contents_Tags_Aggregate_Order_By>;
  tocs_aggregate?: Maybe<Content_Tocs_Aggregate_Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Contents_Prepend_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "contents" */
export enum Contents_Select_Column {
  /** column name */
  Code = "code",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  IsPublished = "is_published",
  /** column name */
  Isbn = "isbn",
  /** column name */
  Meta = "meta",
  /** column name */
  Name = "name",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Views = "views"
}

/** input type for updating data in table "contents" */
export type Contents_Set_Input = {
  code?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  is_published?: Maybe<Scalars["Boolean"]>;
  isbn?: Maybe<Scalars["String"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  name?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["content_types"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  views?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Contents_Stddev_Fields = {
  __typename?: "contents_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "contents" */
export type Contents_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Contents_Stddev_Pop_Fields = {
  __typename?: "contents_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "contents" */
export type Contents_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Contents_Stddev_Samp_Fields = {
  __typename?: "contents_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "contents" */
export type Contents_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Contents_Sum_Fields = {
  __typename?: "contents_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
  views?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "contents" */
export type Contents_Sum_Order_By = {
  id?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** update columns of table "contents" */
export enum Contents_Update_Column {
  /** column name */
  Code = "code",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  IsPublished = "is_published",
  /** column name */
  Isbn = "isbn",
  /** column name */
  Meta = "meta",
  /** column name */
  Name = "name",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Views = "views"
}

/** aggregate var_pop on columns */
export type Contents_Var_Pop_Fields = {
  __typename?: "contents_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "contents" */
export type Contents_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Contents_Var_Samp_Fields = {
  __typename?: "contents_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "contents" */
export type Contents_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Contents_Variance_Fields = {
  __typename?: "contents_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "contents" */
export type Contents_Variance_Order_By = {
  id?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars["date"]>;
  _gt?: Maybe<Scalars["date"]>;
  _gte?: Maybe<Scalars["date"]>;
  _in?: Maybe<Array<Scalars["date"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["date"]>;
  _lte?: Maybe<Scalars["date"]>;
  _neq?: Maybe<Scalars["date"]>;
  _nin?: Maybe<Array<Scalars["date"]>>;
};

export type DeepLink = {
  __typename?: "DeepLink";
  link?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "emails" */
export type Emails = {
  __typename?: "emails";
  body: Scalars["jsonb"];
  created_at: Scalars["timestamptz"];
  from_email: Scalars["String"];
  id: Scalars["Int"];
  status: Scalars["Boolean"];
  template: Scalars["String"];
  to_email: Scalars["String"];
  updated_at: Scalars["timestamptz"];
};

/** columns and relationships of "emails" */
export type EmailsBodyArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "emails" */
export type Emails_Aggregate = {
  __typename?: "emails_aggregate";
  aggregate?: Maybe<Emails_Aggregate_Fields>;
  nodes: Array<Emails>;
};

/** aggregate fields of "emails" */
export type Emails_Aggregate_Fields = {
  __typename?: "emails_aggregate_fields";
  avg?: Maybe<Emails_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Emails_Max_Fields>;
  min?: Maybe<Emails_Min_Fields>;
  stddev?: Maybe<Emails_Stddev_Fields>;
  stddev_pop?: Maybe<Emails_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Emails_Stddev_Samp_Fields>;
  sum?: Maybe<Emails_Sum_Fields>;
  var_pop?: Maybe<Emails_Var_Pop_Fields>;
  var_samp?: Maybe<Emails_Var_Samp_Fields>;
  variance?: Maybe<Emails_Variance_Fields>;
};

/** aggregate fields of "emails" */
export type Emails_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Emails_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "emails" */
export type Emails_Aggregate_Order_By = {
  avg?: Maybe<Emails_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Emails_Max_Order_By>;
  min?: Maybe<Emails_Min_Order_By>;
  stddev?: Maybe<Emails_Stddev_Order_By>;
  stddev_pop?: Maybe<Emails_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Emails_Stddev_Samp_Order_By>;
  sum?: Maybe<Emails_Sum_Order_By>;
  var_pop?: Maybe<Emails_Var_Pop_Order_By>;
  var_samp?: Maybe<Emails_Var_Samp_Order_By>;
  variance?: Maybe<Emails_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Emails_Append_Input = {
  body?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "emails" */
export type Emails_Arr_Rel_Insert_Input = {
  data: Array<Emails_Insert_Input>;
  on_conflict?: Maybe<Emails_On_Conflict>;
};

/** aggregate avg on columns */
export type Emails_Avg_Fields = {
  __typename?: "emails_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "emails" */
export type Emails_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "emails". All fields are combined with a logical 'AND'. */
export type Emails_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Emails_Bool_Exp>>>;
  _not?: Maybe<Emails_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Emails_Bool_Exp>>>;
  body?: Maybe<Jsonb_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  from_email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  status?: Maybe<Boolean_Comparison_Exp>;
  template?: Maybe<String_Comparison_Exp>;
  to_email?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "emails" */
export enum Emails_Constraint {
  /** unique or primary key constraint */
  EmailsPkey = "emails_pkey"
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Emails_Delete_At_Path_Input = {
  body?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Emails_Delete_Elem_Input = {
  body?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Emails_Delete_Key_Input = {
  body?: Maybe<Scalars["String"]>;
};

/** input type for incrementing integer columne in table "emails" */
export type Emails_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "emails" */
export type Emails_Insert_Input = {
  body?: Maybe<Scalars["jsonb"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  from_email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Boolean"]>;
  template?: Maybe<Scalars["String"]>;
  to_email?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Emails_Max_Fields = {
  __typename?: "emails_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  from_email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  template?: Maybe<Scalars["String"]>;
  to_email?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "emails" */
export type Emails_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  from_email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  template?: Maybe<Order_By>;
  to_email?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Emails_Min_Fields = {
  __typename?: "emails_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  from_email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  template?: Maybe<Scalars["String"]>;
  to_email?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "emails" */
export type Emails_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  from_email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  template?: Maybe<Order_By>;
  to_email?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "emails" */
export type Emails_Mutation_Response = {
  __typename?: "emails_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Emails>;
};

/** input type for inserting object relation for remote table "emails" */
export type Emails_Obj_Rel_Insert_Input = {
  data: Emails_Insert_Input;
  on_conflict?: Maybe<Emails_On_Conflict>;
};

/** on conflict condition type for table "emails" */
export type Emails_On_Conflict = {
  constraint: Emails_Constraint;
  update_columns: Array<Emails_Update_Column>;
  where?: Maybe<Emails_Bool_Exp>;
};

/** ordering options when selecting data from "emails" */
export type Emails_Order_By = {
  body?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  from_email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  template?: Maybe<Order_By>;
  to_email?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Emails_Prepend_Input = {
  body?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "emails" */
export enum Emails_Select_Column {
  /** column name */
  Body = "body",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  FromEmail = "from_email",
  /** column name */
  Id = "id",
  /** column name */
  Status = "status",
  /** column name */
  Template = "template",
  /** column name */
  ToEmail = "to_email",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "emails" */
export type Emails_Set_Input = {
  body?: Maybe<Scalars["jsonb"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  from_email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Boolean"]>;
  template?: Maybe<Scalars["String"]>;
  to_email?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Emails_Stddev_Fields = {
  __typename?: "emails_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "emails" */
export type Emails_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Emails_Stddev_Pop_Fields = {
  __typename?: "emails_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "emails" */
export type Emails_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Emails_Stddev_Samp_Fields = {
  __typename?: "emails_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "emails" */
export type Emails_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Emails_Sum_Fields = {
  __typename?: "emails_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "emails" */
export type Emails_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "emails" */
export enum Emails_Update_Column {
  /** column name */
  Body = "body",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  FromEmail = "from_email",
  /** column name */
  Id = "id",
  /** column name */
  Status = "status",
  /** column name */
  Template = "template",
  /** column name */
  ToEmail = "to_email",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Emails_Var_Pop_Fields = {
  __typename?: "emails_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "emails" */
export type Emails_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Emails_Var_Samp_Fields = {
  __typename?: "emails_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "emails" */
export type Emails_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Emails_Variance_Fields = {
  __typename?: "emails_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "emails" */
export type Emails_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "files" */
export type Files = {
  __typename?: "files";
  acl: Scalars["String"];
  bucket: Scalars["String"];
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  filename: Scalars["String"];
  key: Scalars["String"];
  region?: Maybe<Scalars["String"]>;
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "files" */
export type Files_Aggregate = {
  __typename?: "files_aggregate";
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

/** aggregate fields of "files" */
export type Files_Aggregate_Fields = {
  __typename?: "files_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
};

/** aggregate fields of "files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Files_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "files" */
export type Files_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Files_Max_Order_By>;
  min?: Maybe<Files_Min_Order_By>;
};

/** input type for inserting array relation for remote table "files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  on_conflict?: Maybe<Files_On_Conflict>;
};

/** Boolean expression to filter rows from the table "files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Files_Bool_Exp>>>;
  _not?: Maybe<Files_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Files_Bool_Exp>>>;
  acl?: Maybe<String_Comparison_Exp>;
  bucket?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  filename?: Maybe<String_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  region?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "files" */
export enum Files_Constraint {
  /** unique or primary key constraint */
  FilesPkey = "files_pkey"
}

/** input type for inserting data into table "files" */
export type Files_Insert_Input = {
  acl?: Maybe<Scalars["String"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  filename?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: "files_max_fields";
  acl?: Maybe<Scalars["String"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  filename?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "files" */
export type Files_Max_Order_By = {
  acl?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  region?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: "files_min_fields";
  acl?: Maybe<Scalars["String"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  filename?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "files" */
export type Files_Min_Order_By = {
  acl?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  region?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "files" */
export type Files_Mutation_Response = {
  __typename?: "files_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input;
  on_conflict?: Maybe<Files_On_Conflict>;
};

/** on conflict condition type for table "files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns: Array<Files_Update_Column>;
  where?: Maybe<Files_Bool_Exp>;
};

/** ordering options when selecting data from "files" */
export type Files_Order_By = {
  acl?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  filename?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  region?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "files" */
export enum Files_Select_Column {
  /** column name */
  Acl = "acl",
  /** column name */
  Bucket = "bucket",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Filename = "filename",
  /** column name */
  Key = "key",
  /** column name */
  Region = "region",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "files" */
export type Files_Set_Input = {
  acl?: Maybe<Scalars["String"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  filename?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  region?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** update columns of table "files" */
export enum Files_Update_Column {
  /** column name */
  Acl = "acl",
  /** column name */
  Bucket = "bucket",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Filename = "filename",
  /** column name */
  Key = "key",
  /** column name */
  Region = "region",
  /** column name */
  UpdatedAt = "updated_at"
}

/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars["float8"]>;
  _gt?: Maybe<Scalars["float8"]>;
  _gte?: Maybe<Scalars["float8"]>;
  _in?: Maybe<Array<Scalars["float8"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["float8"]>;
  _lte?: Maybe<Scalars["float8"]>;
  _neq?: Maybe<Scalars["float8"]>;
  _nin?: Maybe<Array<Scalars["float8"]>>;
};

export type GolomtInvoice = {
  __typename?: "GolomtInvoice";
  amount?: Maybe<Scalars["String"]>;
  invoiceNumber?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars["Int"]>;
  _gt?: Maybe<Scalars["Int"]>;
  _gte?: Maybe<Scalars["Int"]>;
  _in?: Maybe<Array<Scalars["Int"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["Int"]>;
  _lte?: Maybe<Scalars["Int"]>;
  _neq?: Maybe<Scalars["Int"]>;
  _nin?: Maybe<Array<Scalars["Int"]>>;
};

export type Invoice = {
  __typename?: "Invoice";
  golomt?: Maybe<GolomtInvoice>;
  lend?: Maybe<LendInvoice>;
  qpay?: Maybe<QPayInvoice>;
};

export type InvoiceCheckInput = {
  invoiceNumber: Scalars["String"];
  method?: Maybe<Scalars["String"]>;
};

export type InvoiceInput = {
  description: Scalars["String"];
  invoiceNumber: Scalars["String"];
  totalAmount: Scalars["String"];
};

export type InvoiceResult = {
  __typename?: "InvoiceResult";
  golomt?: Maybe<Scalars["JSON"]>;
  lend?: Maybe<LendResult>;
  qpay?: Maybe<QPayResult>;
};

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars["jsonb"]>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars["jsonb"]>;
  _eq?: Maybe<Scalars["jsonb"]>;
  _gt?: Maybe<Scalars["jsonb"]>;
  _gte?: Maybe<Scalars["jsonb"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars["String"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars["String"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars["String"]>>;
  _in?: Maybe<Array<Scalars["jsonb"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["jsonb"]>;
  _lte?: Maybe<Scalars["jsonb"]>;
  _neq?: Maybe<Scalars["jsonb"]>;
  _nin?: Maybe<Array<Scalars["jsonb"]>>;
};

export type LendInvoice = {
  __typename?: "LendInvoice";
  amount?: Maybe<Scalars["String"]>;
  code?: Maybe<Scalars["String"]>;
  invoiceNumber?: Maybe<Scalars["String"]>;
  qrLink?: Maybe<Scalars["String"]>;
  qrString?: Maybe<Scalars["String"]>;
};

export type LendResult = {
  __typename?: "LendResult";
  amount?: Maybe<Scalars["Int"]>;
  code?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["String"]>;
  expireDate?: Maybe<Scalars["String"]>;
  invoiceNumber?: Maybe<Scalars["String"]>;
  paidDate?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["Int"]>;
  trackingData?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "map_contents_authors" */
export type Map_Contents_Authors = {
  __typename?: "map_contents_authors";
  /** An object relationship */
  author: Authors;
  author_id: Scalars["bigint"];
  /** An object relationship */
  content: Contents;
  content_id: Scalars["bigint"];
  created_at: Scalars["timestamptz"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "map_contents_authors" */
export type Map_Contents_Authors_Aggregate = {
  __typename?: "map_contents_authors_aggregate";
  aggregate?: Maybe<Map_Contents_Authors_Aggregate_Fields>;
  nodes: Array<Map_Contents_Authors>;
};

/** aggregate fields of "map_contents_authors" */
export type Map_Contents_Authors_Aggregate_Fields = {
  __typename?: "map_contents_authors_aggregate_fields";
  avg?: Maybe<Map_Contents_Authors_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Map_Contents_Authors_Max_Fields>;
  min?: Maybe<Map_Contents_Authors_Min_Fields>;
  stddev?: Maybe<Map_Contents_Authors_Stddev_Fields>;
  stddev_pop?: Maybe<Map_Contents_Authors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Map_Contents_Authors_Stddev_Samp_Fields>;
  sum?: Maybe<Map_Contents_Authors_Sum_Fields>;
  var_pop?: Maybe<Map_Contents_Authors_Var_Pop_Fields>;
  var_samp?: Maybe<Map_Contents_Authors_Var_Samp_Fields>;
  variance?: Maybe<Map_Contents_Authors_Variance_Fields>;
};

/** aggregate fields of "map_contents_authors" */
export type Map_Contents_Authors_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Map_Contents_Authors_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "map_contents_authors" */
export type Map_Contents_Authors_Aggregate_Order_By = {
  avg?: Maybe<Map_Contents_Authors_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Map_Contents_Authors_Max_Order_By>;
  min?: Maybe<Map_Contents_Authors_Min_Order_By>;
  stddev?: Maybe<Map_Contents_Authors_Stddev_Order_By>;
  stddev_pop?: Maybe<Map_Contents_Authors_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Map_Contents_Authors_Stddev_Samp_Order_By>;
  sum?: Maybe<Map_Contents_Authors_Sum_Order_By>;
  var_pop?: Maybe<Map_Contents_Authors_Var_Pop_Order_By>;
  var_samp?: Maybe<Map_Contents_Authors_Var_Samp_Order_By>;
  variance?: Maybe<Map_Contents_Authors_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "map_contents_authors" */
export type Map_Contents_Authors_Arr_Rel_Insert_Input = {
  data: Array<Map_Contents_Authors_Insert_Input>;
  on_conflict?: Maybe<Map_Contents_Authors_On_Conflict>;
};

/** aggregate avg on columns */
export type Map_Contents_Authors_Avg_Fields = {
  __typename?: "map_contents_authors_avg_fields";
  author_id?: Maybe<Scalars["Float"]>;
  content_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "map_contents_authors" */
export type Map_Contents_Authors_Avg_Order_By = {
  author_id?: Maybe<Order_By>;
  content_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "map_contents_authors". All fields are combined with a logical 'AND'. */
export type Map_Contents_Authors_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Map_Contents_Authors_Bool_Exp>>>;
  _not?: Maybe<Map_Contents_Authors_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Map_Contents_Authors_Bool_Exp>>>;
  author?: Maybe<Authors_Bool_Exp>;
  author_id?: Maybe<Bigint_Comparison_Exp>;
  content?: Maybe<Contents_Bool_Exp>;
  content_id?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "map_contents_authors" */
export enum Map_Contents_Authors_Constraint {
  /** unique or primary key constraint */
  MapContentsAuthorsPkey = "map_contents_authors_pkey"
}

/** input type for incrementing integer columne in table "map_contents_authors" */
export type Map_Contents_Authors_Inc_Input = {
  author_id?: Maybe<Scalars["bigint"]>;
  content_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "map_contents_authors" */
export type Map_Contents_Authors_Insert_Input = {
  author?: Maybe<Authors_Obj_Rel_Insert_Input>;
  author_id?: Maybe<Scalars["bigint"]>;
  content?: Maybe<Contents_Obj_Rel_Insert_Input>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Map_Contents_Authors_Max_Fields = {
  __typename?: "map_contents_authors_max_fields";
  author_id?: Maybe<Scalars["bigint"]>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "map_contents_authors" */
export type Map_Contents_Authors_Max_Order_By = {
  author_id?: Maybe<Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Map_Contents_Authors_Min_Fields = {
  __typename?: "map_contents_authors_min_fields";
  author_id?: Maybe<Scalars["bigint"]>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "map_contents_authors" */
export type Map_Contents_Authors_Min_Order_By = {
  author_id?: Maybe<Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "map_contents_authors" */
export type Map_Contents_Authors_Mutation_Response = {
  __typename?: "map_contents_authors_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Map_Contents_Authors>;
};

/** input type for inserting object relation for remote table "map_contents_authors" */
export type Map_Contents_Authors_Obj_Rel_Insert_Input = {
  data: Map_Contents_Authors_Insert_Input;
  on_conflict?: Maybe<Map_Contents_Authors_On_Conflict>;
};

/** on conflict condition type for table "map_contents_authors" */
export type Map_Contents_Authors_On_Conflict = {
  constraint: Map_Contents_Authors_Constraint;
  update_columns: Array<Map_Contents_Authors_Update_Column>;
  where?: Maybe<Map_Contents_Authors_Bool_Exp>;
};

/** ordering options when selecting data from "map_contents_authors" */
export type Map_Contents_Authors_Order_By = {
  author?: Maybe<Authors_Order_By>;
  author_id?: Maybe<Order_By>;
  content?: Maybe<Contents_Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "map_contents_authors" */
export enum Map_Contents_Authors_Select_Column {
  /** column name */
  AuthorId = "author_id",
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "map_contents_authors" */
export type Map_Contents_Authors_Set_Input = {
  author_id?: Maybe<Scalars["bigint"]>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Map_Contents_Authors_Stddev_Fields = {
  __typename?: "map_contents_authors_stddev_fields";
  author_id?: Maybe<Scalars["Float"]>;
  content_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "map_contents_authors" */
export type Map_Contents_Authors_Stddev_Order_By = {
  author_id?: Maybe<Order_By>;
  content_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Map_Contents_Authors_Stddev_Pop_Fields = {
  __typename?: "map_contents_authors_stddev_pop_fields";
  author_id?: Maybe<Scalars["Float"]>;
  content_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "map_contents_authors" */
export type Map_Contents_Authors_Stddev_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  content_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Map_Contents_Authors_Stddev_Samp_Fields = {
  __typename?: "map_contents_authors_stddev_samp_fields";
  author_id?: Maybe<Scalars["Float"]>;
  content_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "map_contents_authors" */
export type Map_Contents_Authors_Stddev_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  content_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Map_Contents_Authors_Sum_Fields = {
  __typename?: "map_contents_authors_sum_fields";
  author_id?: Maybe<Scalars["bigint"]>;
  content_id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "map_contents_authors" */
export type Map_Contents_Authors_Sum_Order_By = {
  author_id?: Maybe<Order_By>;
  content_id?: Maybe<Order_By>;
};

/** update columns of table "map_contents_authors" */
export enum Map_Contents_Authors_Update_Column {
  /** column name */
  AuthorId = "author_id",
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Map_Contents_Authors_Var_Pop_Fields = {
  __typename?: "map_contents_authors_var_pop_fields";
  author_id?: Maybe<Scalars["Float"]>;
  content_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "map_contents_authors" */
export type Map_Contents_Authors_Var_Pop_Order_By = {
  author_id?: Maybe<Order_By>;
  content_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Map_Contents_Authors_Var_Samp_Fields = {
  __typename?: "map_contents_authors_var_samp_fields";
  author_id?: Maybe<Scalars["Float"]>;
  content_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "map_contents_authors" */
export type Map_Contents_Authors_Var_Samp_Order_By = {
  author_id?: Maybe<Order_By>;
  content_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Map_Contents_Authors_Variance_Fields = {
  __typename?: "map_contents_authors_variance_fields";
  author_id?: Maybe<Scalars["Float"]>;
  content_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "map_contents_authors" */
export type Map_Contents_Authors_Variance_Order_By = {
  author_id?: Maybe<Order_By>;
  content_id?: Maybe<Order_By>;
};

/** columns and relationships of "map_contents_organizations" */
export type Map_Contents_Organizations = {
  __typename?: "map_contents_organizations";
  /** An object relationship */
  content: Contents;
  content_id: Scalars["bigint"];
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  organization: Organizations;
  organization_id: Scalars["bigint"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "map_contents_organizations" */
export type Map_Contents_Organizations_Aggregate = {
  __typename?: "map_contents_organizations_aggregate";
  aggregate?: Maybe<Map_Contents_Organizations_Aggregate_Fields>;
  nodes: Array<Map_Contents_Organizations>;
};

/** aggregate fields of "map_contents_organizations" */
export type Map_Contents_Organizations_Aggregate_Fields = {
  __typename?: "map_contents_organizations_aggregate_fields";
  avg?: Maybe<Map_Contents_Organizations_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Map_Contents_Organizations_Max_Fields>;
  min?: Maybe<Map_Contents_Organizations_Min_Fields>;
  stddev?: Maybe<Map_Contents_Organizations_Stddev_Fields>;
  stddev_pop?: Maybe<Map_Contents_Organizations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Map_Contents_Organizations_Stddev_Samp_Fields>;
  sum?: Maybe<Map_Contents_Organizations_Sum_Fields>;
  var_pop?: Maybe<Map_Contents_Organizations_Var_Pop_Fields>;
  var_samp?: Maybe<Map_Contents_Organizations_Var_Samp_Fields>;
  variance?: Maybe<Map_Contents_Organizations_Variance_Fields>;
};

/** aggregate fields of "map_contents_organizations" */
export type Map_Contents_Organizations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Map_Contents_Organizations_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "map_contents_organizations" */
export type Map_Contents_Organizations_Aggregate_Order_By = {
  avg?: Maybe<Map_Contents_Organizations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Map_Contents_Organizations_Max_Order_By>;
  min?: Maybe<Map_Contents_Organizations_Min_Order_By>;
  stddev?: Maybe<Map_Contents_Organizations_Stddev_Order_By>;
  stddev_pop?: Maybe<Map_Contents_Organizations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Map_Contents_Organizations_Stddev_Samp_Order_By>;
  sum?: Maybe<Map_Contents_Organizations_Sum_Order_By>;
  var_pop?: Maybe<Map_Contents_Organizations_Var_Pop_Order_By>;
  var_samp?: Maybe<Map_Contents_Organizations_Var_Samp_Order_By>;
  variance?: Maybe<Map_Contents_Organizations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "map_contents_organizations" */
export type Map_Contents_Organizations_Arr_Rel_Insert_Input = {
  data: Array<Map_Contents_Organizations_Insert_Input>;
  on_conflict?: Maybe<Map_Contents_Organizations_On_Conflict>;
};

/** aggregate avg on columns */
export type Map_Contents_Organizations_Avg_Fields = {
  __typename?: "map_contents_organizations_avg_fields";
  content_id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "map_contents_organizations" */
export type Map_Contents_Organizations_Avg_Order_By = {
  content_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "map_contents_organizations". All fields are combined with a logical 'AND'. */
export type Map_Contents_Organizations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Map_Contents_Organizations_Bool_Exp>>>;
  _not?: Maybe<Map_Contents_Organizations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Map_Contents_Organizations_Bool_Exp>>>;
  content?: Maybe<Contents_Bool_Exp>;
  content_id?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organization_id?: Maybe<Bigint_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "map_contents_organizations" */
export enum Map_Contents_Organizations_Constraint {
  /** unique or primary key constraint */
  MapContentsOrganizationsPkey = "map_contents_organizations_pkey"
}

/** input type for incrementing integer columne in table "map_contents_organizations" */
export type Map_Contents_Organizations_Inc_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "map_contents_organizations" */
export type Map_Contents_Organizations_Insert_Input = {
  content?: Maybe<Contents_Obj_Rel_Insert_Input>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organization_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Map_Contents_Organizations_Max_Fields = {
  __typename?: "map_contents_organizations_max_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "map_contents_organizations" */
export type Map_Contents_Organizations_Max_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Map_Contents_Organizations_Min_Fields = {
  __typename?: "map_contents_organizations_min_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "map_contents_organizations" */
export type Map_Contents_Organizations_Min_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "map_contents_organizations" */
export type Map_Contents_Organizations_Mutation_Response = {
  __typename?: "map_contents_organizations_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Map_Contents_Organizations>;
};

/** input type for inserting object relation for remote table "map_contents_organizations" */
export type Map_Contents_Organizations_Obj_Rel_Insert_Input = {
  data: Map_Contents_Organizations_Insert_Input;
  on_conflict?: Maybe<Map_Contents_Organizations_On_Conflict>;
};

/** on conflict condition type for table "map_contents_organizations" */
export type Map_Contents_Organizations_On_Conflict = {
  constraint: Map_Contents_Organizations_Constraint;
  update_columns: Array<Map_Contents_Organizations_Update_Column>;
  where?: Maybe<Map_Contents_Organizations_Bool_Exp>;
};

/** ordering options when selecting data from "map_contents_organizations" */
export type Map_Contents_Organizations_Order_By = {
  content?: Maybe<Contents_Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organization_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "map_contents_organizations" */
export enum Map_Contents_Organizations_Select_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  OrganizationId = "organization_id",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "map_contents_organizations" */
export type Map_Contents_Organizations_Set_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Map_Contents_Organizations_Stddev_Fields = {
  __typename?: "map_contents_organizations_stddev_fields";
  content_id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "map_contents_organizations" */
export type Map_Contents_Organizations_Stddev_Order_By = {
  content_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Map_Contents_Organizations_Stddev_Pop_Fields = {
  __typename?: "map_contents_organizations_stddev_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "map_contents_organizations" */
export type Map_Contents_Organizations_Stddev_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Map_Contents_Organizations_Stddev_Samp_Fields = {
  __typename?: "map_contents_organizations_stddev_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "map_contents_organizations" */
export type Map_Contents_Organizations_Stddev_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Map_Contents_Organizations_Sum_Fields = {
  __typename?: "map_contents_organizations_sum_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "map_contents_organizations" */
export type Map_Contents_Organizations_Sum_Order_By = {
  content_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** update columns of table "map_contents_organizations" */
export enum Map_Contents_Organizations_Update_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  OrganizationId = "organization_id",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Map_Contents_Organizations_Var_Pop_Fields = {
  __typename?: "map_contents_organizations_var_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "map_contents_organizations" */
export type Map_Contents_Organizations_Var_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Map_Contents_Organizations_Var_Samp_Fields = {
  __typename?: "map_contents_organizations_var_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "map_contents_organizations" */
export type Map_Contents_Organizations_Var_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Map_Contents_Organizations_Variance_Fields = {
  __typename?: "map_contents_organizations_variance_fields";
  content_id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "map_contents_organizations" */
export type Map_Contents_Organizations_Variance_Order_By = {
  content_id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** columns and relationships of "map_contents_packages" */
export type Map_Contents_Packages = {
  __typename?: "map_contents_packages";
  /** An object relationship */
  content: Contents;
  content_id: Scalars["bigint"];
  created_at: Scalars["timestamptz"];
  id: Scalars["bigint"];
  /** An object relationship */
  package: Packages;
  package_id: Scalars["bigint"];
  price?: Maybe<Scalars["numeric"]>;
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "map_contents_packages" */
export type Map_Contents_Packages_Aggregate = {
  __typename?: "map_contents_packages_aggregate";
  aggregate?: Maybe<Map_Contents_Packages_Aggregate_Fields>;
  nodes: Array<Map_Contents_Packages>;
};

/** aggregate fields of "map_contents_packages" */
export type Map_Contents_Packages_Aggregate_Fields = {
  __typename?: "map_contents_packages_aggregate_fields";
  avg?: Maybe<Map_Contents_Packages_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Map_Contents_Packages_Max_Fields>;
  min?: Maybe<Map_Contents_Packages_Min_Fields>;
  stddev?: Maybe<Map_Contents_Packages_Stddev_Fields>;
  stddev_pop?: Maybe<Map_Contents_Packages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Map_Contents_Packages_Stddev_Samp_Fields>;
  sum?: Maybe<Map_Contents_Packages_Sum_Fields>;
  var_pop?: Maybe<Map_Contents_Packages_Var_Pop_Fields>;
  var_samp?: Maybe<Map_Contents_Packages_Var_Samp_Fields>;
  variance?: Maybe<Map_Contents_Packages_Variance_Fields>;
};

/** aggregate fields of "map_contents_packages" */
export type Map_Contents_Packages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Map_Contents_Packages_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "map_contents_packages" */
export type Map_Contents_Packages_Aggregate_Order_By = {
  avg?: Maybe<Map_Contents_Packages_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Map_Contents_Packages_Max_Order_By>;
  min?: Maybe<Map_Contents_Packages_Min_Order_By>;
  stddev?: Maybe<Map_Contents_Packages_Stddev_Order_By>;
  stddev_pop?: Maybe<Map_Contents_Packages_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Map_Contents_Packages_Stddev_Samp_Order_By>;
  sum?: Maybe<Map_Contents_Packages_Sum_Order_By>;
  var_pop?: Maybe<Map_Contents_Packages_Var_Pop_Order_By>;
  var_samp?: Maybe<Map_Contents_Packages_Var_Samp_Order_By>;
  variance?: Maybe<Map_Contents_Packages_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "map_contents_packages" */
export type Map_Contents_Packages_Arr_Rel_Insert_Input = {
  data: Array<Map_Contents_Packages_Insert_Input>;
  on_conflict?: Maybe<Map_Contents_Packages_On_Conflict>;
};

/** aggregate avg on columns */
export type Map_Contents_Packages_Avg_Fields = {
  __typename?: "map_contents_packages_avg_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  package_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "map_contents_packages" */
export type Map_Contents_Packages_Avg_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "map_contents_packages". All fields are combined with a logical 'AND'. */
export type Map_Contents_Packages_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Map_Contents_Packages_Bool_Exp>>>;
  _not?: Maybe<Map_Contents_Packages_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Map_Contents_Packages_Bool_Exp>>>;
  content?: Maybe<Contents_Bool_Exp>;
  content_id?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  package?: Maybe<Packages_Bool_Exp>;
  package_id?: Maybe<Bigint_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "map_contents_packages" */
export enum Map_Contents_Packages_Constraint {
  /** unique or primary key constraint */
  MapContentPackagesPkey = "map_content_packages_pkey"
}

/** input type for incrementing integer columne in table "map_contents_packages" */
export type Map_Contents_Packages_Inc_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  package_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "map_contents_packages" */
export type Map_Contents_Packages_Insert_Input = {
  content?: Maybe<Contents_Obj_Rel_Insert_Input>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  package?: Maybe<Packages_Obj_Rel_Insert_Input>;
  package_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Map_Contents_Packages_Max_Fields = {
  __typename?: "map_contents_packages_max_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  package_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "map_contents_packages" */
export type Map_Contents_Packages_Max_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Map_Contents_Packages_Min_Fields = {
  __typename?: "map_contents_packages_min_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  package_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "map_contents_packages" */
export type Map_Contents_Packages_Min_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "map_contents_packages" */
export type Map_Contents_Packages_Mutation_Response = {
  __typename?: "map_contents_packages_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Map_Contents_Packages>;
};

/** input type for inserting object relation for remote table "map_contents_packages" */
export type Map_Contents_Packages_Obj_Rel_Insert_Input = {
  data: Map_Contents_Packages_Insert_Input;
  on_conflict?: Maybe<Map_Contents_Packages_On_Conflict>;
};

/** on conflict condition type for table "map_contents_packages" */
export type Map_Contents_Packages_On_Conflict = {
  constraint: Map_Contents_Packages_Constraint;
  update_columns: Array<Map_Contents_Packages_Update_Column>;
  where?: Maybe<Map_Contents_Packages_Bool_Exp>;
};

/** ordering options when selecting data from "map_contents_packages" */
export type Map_Contents_Packages_Order_By = {
  content?: Maybe<Contents_Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package?: Maybe<Packages_Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "map_contents_packages" */
export enum Map_Contents_Packages_Select_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  PackageId = "package_id",
  /** column name */
  Price = "price",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "map_contents_packages" */
export type Map_Contents_Packages_Set_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  package_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Map_Contents_Packages_Stddev_Fields = {
  __typename?: "map_contents_packages_stddev_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  package_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "map_contents_packages" */
export type Map_Contents_Packages_Stddev_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Map_Contents_Packages_Stddev_Pop_Fields = {
  __typename?: "map_contents_packages_stddev_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  package_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "map_contents_packages" */
export type Map_Contents_Packages_Stddev_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Map_Contents_Packages_Stddev_Samp_Fields = {
  __typename?: "map_contents_packages_stddev_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  package_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "map_contents_packages" */
export type Map_Contents_Packages_Stddev_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Map_Contents_Packages_Sum_Fields = {
  __typename?: "map_contents_packages_sum_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  package_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "map_contents_packages" */
export type Map_Contents_Packages_Sum_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** update columns of table "map_contents_packages" */
export enum Map_Contents_Packages_Update_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  PackageId = "package_id",
  /** column name */
  Price = "price",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Map_Contents_Packages_Var_Pop_Fields = {
  __typename?: "map_contents_packages_var_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  package_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "map_contents_packages" */
export type Map_Contents_Packages_Var_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Map_Contents_Packages_Var_Samp_Fields = {
  __typename?: "map_contents_packages_var_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  package_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "map_contents_packages" */
export type Map_Contents_Packages_Var_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Map_Contents_Packages_Variance_Fields = {
  __typename?: "map_contents_packages_variance_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  package_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "map_contents_packages" */
export type Map_Contents_Packages_Variance_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** columns and relationships of "map_contents_tags" */
export type Map_Contents_Tags = {
  __typename?: "map_contents_tags";
  /** An object relationship */
  content: Contents;
  content_id: Scalars["Int"];
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  tag: Tag_Options;
  tag_id: Scalars["Int"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "map_contents_tags" */
export type Map_Contents_Tags_Aggregate = {
  __typename?: "map_contents_tags_aggregate";
  aggregate?: Maybe<Map_Contents_Tags_Aggregate_Fields>;
  nodes: Array<Map_Contents_Tags>;
};

/** aggregate fields of "map_contents_tags" */
export type Map_Contents_Tags_Aggregate_Fields = {
  __typename?: "map_contents_tags_aggregate_fields";
  avg?: Maybe<Map_Contents_Tags_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Map_Contents_Tags_Max_Fields>;
  min?: Maybe<Map_Contents_Tags_Min_Fields>;
  stddev?: Maybe<Map_Contents_Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Map_Contents_Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Map_Contents_Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Map_Contents_Tags_Sum_Fields>;
  var_pop?: Maybe<Map_Contents_Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Map_Contents_Tags_Var_Samp_Fields>;
  variance?: Maybe<Map_Contents_Tags_Variance_Fields>;
};

/** aggregate fields of "map_contents_tags" */
export type Map_Contents_Tags_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Map_Contents_Tags_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "map_contents_tags" */
export type Map_Contents_Tags_Aggregate_Order_By = {
  avg?: Maybe<Map_Contents_Tags_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Map_Contents_Tags_Max_Order_By>;
  min?: Maybe<Map_Contents_Tags_Min_Order_By>;
  stddev?: Maybe<Map_Contents_Tags_Stddev_Order_By>;
  stddev_pop?: Maybe<Map_Contents_Tags_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Map_Contents_Tags_Stddev_Samp_Order_By>;
  sum?: Maybe<Map_Contents_Tags_Sum_Order_By>;
  var_pop?: Maybe<Map_Contents_Tags_Var_Pop_Order_By>;
  var_samp?: Maybe<Map_Contents_Tags_Var_Samp_Order_By>;
  variance?: Maybe<Map_Contents_Tags_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "map_contents_tags" */
export type Map_Contents_Tags_Arr_Rel_Insert_Input = {
  data: Array<Map_Contents_Tags_Insert_Input>;
  on_conflict?: Maybe<Map_Contents_Tags_On_Conflict>;
};

/** aggregate avg on columns */
export type Map_Contents_Tags_Avg_Fields = {
  __typename?: "map_contents_tags_avg_fields";
  content_id?: Maybe<Scalars["Float"]>;
  tag_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "map_contents_tags" */
export type Map_Contents_Tags_Avg_Order_By = {
  content_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "map_contents_tags". All fields are combined with a logical 'AND'. */
export type Map_Contents_Tags_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Map_Contents_Tags_Bool_Exp>>>;
  _not?: Maybe<Map_Contents_Tags_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Map_Contents_Tags_Bool_Exp>>>;
  content?: Maybe<Contents_Bool_Exp>;
  content_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  tag?: Maybe<Tag_Options_Bool_Exp>;
  tag_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "map_contents_tags" */
export enum Map_Contents_Tags_Constraint {
  /** unique or primary key constraint */
  MapContentsTagsPkey = "map_contents_tags_pkey"
}

/** input type for incrementing integer columne in table "map_contents_tags" */
export type Map_Contents_Tags_Inc_Input = {
  content_id?: Maybe<Scalars["Int"]>;
  tag_id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "map_contents_tags" */
export type Map_Contents_Tags_Insert_Input = {
  content?: Maybe<Contents_Obj_Rel_Insert_Input>;
  content_id?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  tag?: Maybe<Tag_Options_Obj_Rel_Insert_Input>;
  tag_id?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Map_Contents_Tags_Max_Fields = {
  __typename?: "map_contents_tags_max_fields";
  content_id?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  tag_id?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "map_contents_tags" */
export type Map_Contents_Tags_Max_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Map_Contents_Tags_Min_Fields = {
  __typename?: "map_contents_tags_min_fields";
  content_id?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  tag_id?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "map_contents_tags" */
export type Map_Contents_Tags_Min_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "map_contents_tags" */
export type Map_Contents_Tags_Mutation_Response = {
  __typename?: "map_contents_tags_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Map_Contents_Tags>;
};

/** input type for inserting object relation for remote table "map_contents_tags" */
export type Map_Contents_Tags_Obj_Rel_Insert_Input = {
  data: Map_Contents_Tags_Insert_Input;
  on_conflict?: Maybe<Map_Contents_Tags_On_Conflict>;
};

/** on conflict condition type for table "map_contents_tags" */
export type Map_Contents_Tags_On_Conflict = {
  constraint: Map_Contents_Tags_Constraint;
  update_columns: Array<Map_Contents_Tags_Update_Column>;
  where?: Maybe<Map_Contents_Tags_Bool_Exp>;
};

/** ordering options when selecting data from "map_contents_tags" */
export type Map_Contents_Tags_Order_By = {
  content?: Maybe<Contents_Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  tag?: Maybe<Tag_Options_Order_By>;
  tag_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "map_contents_tags" */
export enum Map_Contents_Tags_Select_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  TagId = "tag_id",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "map_contents_tags" */
export type Map_Contents_Tags_Set_Input = {
  content_id?: Maybe<Scalars["Int"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  tag_id?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Map_Contents_Tags_Stddev_Fields = {
  __typename?: "map_contents_tags_stddev_fields";
  content_id?: Maybe<Scalars["Float"]>;
  tag_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "map_contents_tags" */
export type Map_Contents_Tags_Stddev_Order_By = {
  content_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Map_Contents_Tags_Stddev_Pop_Fields = {
  __typename?: "map_contents_tags_stddev_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  tag_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "map_contents_tags" */
export type Map_Contents_Tags_Stddev_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Map_Contents_Tags_Stddev_Samp_Fields = {
  __typename?: "map_contents_tags_stddev_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  tag_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "map_contents_tags" */
export type Map_Contents_Tags_Stddev_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Map_Contents_Tags_Sum_Fields = {
  __typename?: "map_contents_tags_sum_fields";
  content_id?: Maybe<Scalars["Int"]>;
  tag_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "map_contents_tags" */
export type Map_Contents_Tags_Sum_Order_By = {
  content_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** update columns of table "map_contents_tags" */
export enum Map_Contents_Tags_Update_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  TagId = "tag_id",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Map_Contents_Tags_Var_Pop_Fields = {
  __typename?: "map_contents_tags_var_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  tag_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "map_contents_tags" */
export type Map_Contents_Tags_Var_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Map_Contents_Tags_Var_Samp_Fields = {
  __typename?: "map_contents_tags_var_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  tag_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "map_contents_tags" */
export type Map_Contents_Tags_Var_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Map_Contents_Tags_Variance_Fields = {
  __typename?: "map_contents_tags_variance_fields";
  content_id?: Maybe<Scalars["Float"]>;
  tag_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "map_contents_tags" */
export type Map_Contents_Tags_Variance_Order_By = {
  content_id?: Maybe<Order_By>;
  tag_id?: Maybe<Order_By>;
};

/** columns and relationships of "map_packages_files" */
export type Map_Packages_Files = {
  __typename?: "map_packages_files";
  created_at: Scalars["timestamptz"];
  /** An object relationship */
  file: Files;
  file_id: Scalars["String"];
  /** An object relationship */
  package: Packages;
  package_id: Scalars["bigint"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "map_packages_files" */
export type Map_Packages_Files_Aggregate = {
  __typename?: "map_packages_files_aggregate";
  aggregate?: Maybe<Map_Packages_Files_Aggregate_Fields>;
  nodes: Array<Map_Packages_Files>;
};

/** aggregate fields of "map_packages_files" */
export type Map_Packages_Files_Aggregate_Fields = {
  __typename?: "map_packages_files_aggregate_fields";
  avg?: Maybe<Map_Packages_Files_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Map_Packages_Files_Max_Fields>;
  min?: Maybe<Map_Packages_Files_Min_Fields>;
  stddev?: Maybe<Map_Packages_Files_Stddev_Fields>;
  stddev_pop?: Maybe<Map_Packages_Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Map_Packages_Files_Stddev_Samp_Fields>;
  sum?: Maybe<Map_Packages_Files_Sum_Fields>;
  var_pop?: Maybe<Map_Packages_Files_Var_Pop_Fields>;
  var_samp?: Maybe<Map_Packages_Files_Var_Samp_Fields>;
  variance?: Maybe<Map_Packages_Files_Variance_Fields>;
};

/** aggregate fields of "map_packages_files" */
export type Map_Packages_Files_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Map_Packages_Files_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "map_packages_files" */
export type Map_Packages_Files_Aggregate_Order_By = {
  avg?: Maybe<Map_Packages_Files_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Map_Packages_Files_Max_Order_By>;
  min?: Maybe<Map_Packages_Files_Min_Order_By>;
  stddev?: Maybe<Map_Packages_Files_Stddev_Order_By>;
  stddev_pop?: Maybe<Map_Packages_Files_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Map_Packages_Files_Stddev_Samp_Order_By>;
  sum?: Maybe<Map_Packages_Files_Sum_Order_By>;
  var_pop?: Maybe<Map_Packages_Files_Var_Pop_Order_By>;
  var_samp?: Maybe<Map_Packages_Files_Var_Samp_Order_By>;
  variance?: Maybe<Map_Packages_Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "map_packages_files" */
export type Map_Packages_Files_Arr_Rel_Insert_Input = {
  data: Array<Map_Packages_Files_Insert_Input>;
  on_conflict?: Maybe<Map_Packages_Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Map_Packages_Files_Avg_Fields = {
  __typename?: "map_packages_files_avg_fields";
  package_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "map_packages_files" */
export type Map_Packages_Files_Avg_Order_By = {
  package_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "map_packages_files". All fields are combined with a logical 'AND'. */
export type Map_Packages_Files_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Map_Packages_Files_Bool_Exp>>>;
  _not?: Maybe<Map_Packages_Files_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Map_Packages_Files_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  file?: Maybe<Files_Bool_Exp>;
  file_id?: Maybe<String_Comparison_Exp>;
  package?: Maybe<Packages_Bool_Exp>;
  package_id?: Maybe<Bigint_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "map_packages_files" */
export enum Map_Packages_Files_Constraint {
  /** unique or primary key constraint */
  MapPackagesFilesPkey = "map_packages_files_pkey"
}

/** input type for incrementing integer columne in table "map_packages_files" */
export type Map_Packages_Files_Inc_Input = {
  package_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "map_packages_files" */
export type Map_Packages_Files_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  file?: Maybe<Files_Obj_Rel_Insert_Input>;
  file_id?: Maybe<Scalars["String"]>;
  package?: Maybe<Packages_Obj_Rel_Insert_Input>;
  package_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Map_Packages_Files_Max_Fields = {
  __typename?: "map_packages_files_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  package_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "map_packages_files" */
export type Map_Packages_Files_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Map_Packages_Files_Min_Fields = {
  __typename?: "map_packages_files_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  package_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "map_packages_files" */
export type Map_Packages_Files_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "map_packages_files" */
export type Map_Packages_Files_Mutation_Response = {
  __typename?: "map_packages_files_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Map_Packages_Files>;
};

/** input type for inserting object relation for remote table "map_packages_files" */
export type Map_Packages_Files_Obj_Rel_Insert_Input = {
  data: Map_Packages_Files_Insert_Input;
  on_conflict?: Maybe<Map_Packages_Files_On_Conflict>;
};

/** on conflict condition type for table "map_packages_files" */
export type Map_Packages_Files_On_Conflict = {
  constraint: Map_Packages_Files_Constraint;
  update_columns: Array<Map_Packages_Files_Update_Column>;
  where?: Maybe<Map_Packages_Files_Bool_Exp>;
};

/** ordering options when selecting data from "map_packages_files" */
export type Map_Packages_Files_Order_By = {
  created_at?: Maybe<Order_By>;
  file?: Maybe<Files_Order_By>;
  file_id?: Maybe<Order_By>;
  package?: Maybe<Packages_Order_By>;
  package_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "map_packages_files" */
export enum Map_Packages_Files_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  FileId = "file_id",
  /** column name */
  PackageId = "package_id",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "map_packages_files" */
export type Map_Packages_Files_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  package_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Map_Packages_Files_Stddev_Fields = {
  __typename?: "map_packages_files_stddev_fields";
  package_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "map_packages_files" */
export type Map_Packages_Files_Stddev_Order_By = {
  package_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Map_Packages_Files_Stddev_Pop_Fields = {
  __typename?: "map_packages_files_stddev_pop_fields";
  package_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "map_packages_files" */
export type Map_Packages_Files_Stddev_Pop_Order_By = {
  package_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Map_Packages_Files_Stddev_Samp_Fields = {
  __typename?: "map_packages_files_stddev_samp_fields";
  package_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "map_packages_files" */
export type Map_Packages_Files_Stddev_Samp_Order_By = {
  package_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Map_Packages_Files_Sum_Fields = {
  __typename?: "map_packages_files_sum_fields";
  package_id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "map_packages_files" */
export type Map_Packages_Files_Sum_Order_By = {
  package_id?: Maybe<Order_By>;
};

/** update columns of table "map_packages_files" */
export enum Map_Packages_Files_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  FileId = "file_id",
  /** column name */
  PackageId = "package_id",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Map_Packages_Files_Var_Pop_Fields = {
  __typename?: "map_packages_files_var_pop_fields";
  package_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "map_packages_files" */
export type Map_Packages_Files_Var_Pop_Order_By = {
  package_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Map_Packages_Files_Var_Samp_Fields = {
  __typename?: "map_packages_files_var_samp_fields";
  package_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "map_packages_files" */
export type Map_Packages_Files_Var_Samp_Order_By = {
  package_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Map_Packages_Files_Variance_Fields = {
  __typename?: "map_packages_files_variance_fields";
  package_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "map_packages_files" */
export type Map_Packages_Files_Variance_Order_By = {
  package_id?: Maybe<Order_By>;
};

/** columns and relationships of "map_users_contents_status" */
export type Map_Users_Contents_Status = {
  __typename?: "map_users_contents_status";
  /** An object relationship */
  content: Contents;
  content_id: Scalars["bigint"];
  created_at: Scalars["timestamptz"];
  current_page: Scalars["Int"];
  max_page: Scalars["Int"];
  updated_at: Scalars["timestamptz"];
  user_id: Scalars["String"];
};

/** aggregated selection of "map_users_contents_status" */
export type Map_Users_Contents_Status_Aggregate = {
  __typename?: "map_users_contents_status_aggregate";
  aggregate?: Maybe<Map_Users_Contents_Status_Aggregate_Fields>;
  nodes: Array<Map_Users_Contents_Status>;
};

/** aggregate fields of "map_users_contents_status" */
export type Map_Users_Contents_Status_Aggregate_Fields = {
  __typename?: "map_users_contents_status_aggregate_fields";
  avg?: Maybe<Map_Users_Contents_Status_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Map_Users_Contents_Status_Max_Fields>;
  min?: Maybe<Map_Users_Contents_Status_Min_Fields>;
  stddev?: Maybe<Map_Users_Contents_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Map_Users_Contents_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Map_Users_Contents_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Map_Users_Contents_Status_Sum_Fields>;
  var_pop?: Maybe<Map_Users_Contents_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Map_Users_Contents_Status_Var_Samp_Fields>;
  variance?: Maybe<Map_Users_Contents_Status_Variance_Fields>;
};

/** aggregate fields of "map_users_contents_status" */
export type Map_Users_Contents_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Map_Users_Contents_Status_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "map_users_contents_status" */
export type Map_Users_Contents_Status_Aggregate_Order_By = {
  avg?: Maybe<Map_Users_Contents_Status_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Map_Users_Contents_Status_Max_Order_By>;
  min?: Maybe<Map_Users_Contents_Status_Min_Order_By>;
  stddev?: Maybe<Map_Users_Contents_Status_Stddev_Order_By>;
  stddev_pop?: Maybe<Map_Users_Contents_Status_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Map_Users_Contents_Status_Stddev_Samp_Order_By>;
  sum?: Maybe<Map_Users_Contents_Status_Sum_Order_By>;
  var_pop?: Maybe<Map_Users_Contents_Status_Var_Pop_Order_By>;
  var_samp?: Maybe<Map_Users_Contents_Status_Var_Samp_Order_By>;
  variance?: Maybe<Map_Users_Contents_Status_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "map_users_contents_status" */
export type Map_Users_Contents_Status_Arr_Rel_Insert_Input = {
  data: Array<Map_Users_Contents_Status_Insert_Input>;
  on_conflict?: Maybe<Map_Users_Contents_Status_On_Conflict>;
};

/** aggregate avg on columns */
export type Map_Users_Contents_Status_Avg_Fields = {
  __typename?: "map_users_contents_status_avg_fields";
  content_id?: Maybe<Scalars["Float"]>;
  current_page?: Maybe<Scalars["Float"]>;
  max_page?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "map_users_contents_status" */
export type Map_Users_Contents_Status_Avg_Order_By = {
  content_id?: Maybe<Order_By>;
  current_page?: Maybe<Order_By>;
  max_page?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "map_users_contents_status". All fields are combined with a logical 'AND'. */
export type Map_Users_Contents_Status_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Map_Users_Contents_Status_Bool_Exp>>>;
  _not?: Maybe<Map_Users_Contents_Status_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Map_Users_Contents_Status_Bool_Exp>>>;
  content?: Maybe<Contents_Bool_Exp>;
  content_id?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  current_page?: Maybe<Int_Comparison_Exp>;
  max_page?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "map_users_contents_status" */
export enum Map_Users_Contents_Status_Constraint {
  /** unique or primary key constraint */
  MapUsersContentsStatusPkey = "map_users_contents_status_pkey"
}

/** input type for incrementing integer columne in table "map_users_contents_status" */
export type Map_Users_Contents_Status_Inc_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  current_page?: Maybe<Scalars["Int"]>;
  max_page?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "map_users_contents_status" */
export type Map_Users_Contents_Status_Insert_Input = {
  content?: Maybe<Contents_Obj_Rel_Insert_Input>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  current_page?: Maybe<Scalars["Int"]>;
  max_page?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Map_Users_Contents_Status_Max_Fields = {
  __typename?: "map_users_contents_status_max_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  current_page?: Maybe<Scalars["Int"]>;
  max_page?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "map_users_contents_status" */
export type Map_Users_Contents_Status_Max_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  current_page?: Maybe<Order_By>;
  max_page?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Map_Users_Contents_Status_Min_Fields = {
  __typename?: "map_users_contents_status_min_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  current_page?: Maybe<Scalars["Int"]>;
  max_page?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "map_users_contents_status" */
export type Map_Users_Contents_Status_Min_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  current_page?: Maybe<Order_By>;
  max_page?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "map_users_contents_status" */
export type Map_Users_Contents_Status_Mutation_Response = {
  __typename?: "map_users_contents_status_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Map_Users_Contents_Status>;
};

/** input type for inserting object relation for remote table "map_users_contents_status" */
export type Map_Users_Contents_Status_Obj_Rel_Insert_Input = {
  data: Map_Users_Contents_Status_Insert_Input;
  on_conflict?: Maybe<Map_Users_Contents_Status_On_Conflict>;
};

/** on conflict condition type for table "map_users_contents_status" */
export type Map_Users_Contents_Status_On_Conflict = {
  constraint: Map_Users_Contents_Status_Constraint;
  update_columns: Array<Map_Users_Contents_Status_Update_Column>;
  where?: Maybe<Map_Users_Contents_Status_Bool_Exp>;
};

/** ordering options when selecting data from "map_users_contents_status" */
export type Map_Users_Contents_Status_Order_By = {
  content?: Maybe<Contents_Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  current_page?: Maybe<Order_By>;
  max_page?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "map_users_contents_status" */
export enum Map_Users_Contents_Status_Select_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CurrentPage = "current_page",
  /** column name */
  MaxPage = "max_page",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** input type for updating data in table "map_users_contents_status" */
export type Map_Users_Contents_Status_Set_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  current_page?: Maybe<Scalars["Int"]>;
  max_page?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Map_Users_Contents_Status_Stddev_Fields = {
  __typename?: "map_users_contents_status_stddev_fields";
  content_id?: Maybe<Scalars["Float"]>;
  current_page?: Maybe<Scalars["Float"]>;
  max_page?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "map_users_contents_status" */
export type Map_Users_Contents_Status_Stddev_Order_By = {
  content_id?: Maybe<Order_By>;
  current_page?: Maybe<Order_By>;
  max_page?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Map_Users_Contents_Status_Stddev_Pop_Fields = {
  __typename?: "map_users_contents_status_stddev_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  current_page?: Maybe<Scalars["Float"]>;
  max_page?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "map_users_contents_status" */
export type Map_Users_Contents_Status_Stddev_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  current_page?: Maybe<Order_By>;
  max_page?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Map_Users_Contents_Status_Stddev_Samp_Fields = {
  __typename?: "map_users_contents_status_stddev_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  current_page?: Maybe<Scalars["Float"]>;
  max_page?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "map_users_contents_status" */
export type Map_Users_Contents_Status_Stddev_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  current_page?: Maybe<Order_By>;
  max_page?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Map_Users_Contents_Status_Sum_Fields = {
  __typename?: "map_users_contents_status_sum_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  current_page?: Maybe<Scalars["Int"]>;
  max_page?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "map_users_contents_status" */
export type Map_Users_Contents_Status_Sum_Order_By = {
  content_id?: Maybe<Order_By>;
  current_page?: Maybe<Order_By>;
  max_page?: Maybe<Order_By>;
};

/** update columns of table "map_users_contents_status" */
export enum Map_Users_Contents_Status_Update_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CurrentPage = "current_page",
  /** column name */
  MaxPage = "max_page",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** aggregate var_pop on columns */
export type Map_Users_Contents_Status_Var_Pop_Fields = {
  __typename?: "map_users_contents_status_var_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  current_page?: Maybe<Scalars["Float"]>;
  max_page?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "map_users_contents_status" */
export type Map_Users_Contents_Status_Var_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  current_page?: Maybe<Order_By>;
  max_page?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Map_Users_Contents_Status_Var_Samp_Fields = {
  __typename?: "map_users_contents_status_var_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  current_page?: Maybe<Scalars["Float"]>;
  max_page?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "map_users_contents_status" */
export type Map_Users_Contents_Status_Var_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  current_page?: Maybe<Order_By>;
  max_page?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Map_Users_Contents_Status_Variance_Fields = {
  __typename?: "map_users_contents_status_variance_fields";
  content_id?: Maybe<Scalars["Float"]>;
  current_page?: Maybe<Scalars["Float"]>;
  max_page?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "map_users_contents_status" */
export type Map_Users_Contents_Status_Variance_Order_By = {
  content_id?: Maybe<Order_By>;
  current_page?: Maybe<Order_By>;
  max_page?: Maybe<Order_By>;
};

/** columns and relationships of "map_users_files" */
export type Map_Users_Files = {
  __typename?: "map_users_files";
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  file?: Maybe<Files>;
  file_id?: Maybe<Scalars["String"]>;
  id: Scalars["bigint"];
  type: Scalars["String"];
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["String"];
};

/** aggregated selection of "map_users_files" */
export type Map_Users_Files_Aggregate = {
  __typename?: "map_users_files_aggregate";
  aggregate?: Maybe<Map_Users_Files_Aggregate_Fields>;
  nodes: Array<Map_Users_Files>;
};

/** aggregate fields of "map_users_files" */
export type Map_Users_Files_Aggregate_Fields = {
  __typename?: "map_users_files_aggregate_fields";
  avg?: Maybe<Map_Users_Files_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Map_Users_Files_Max_Fields>;
  min?: Maybe<Map_Users_Files_Min_Fields>;
  stddev?: Maybe<Map_Users_Files_Stddev_Fields>;
  stddev_pop?: Maybe<Map_Users_Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Map_Users_Files_Stddev_Samp_Fields>;
  sum?: Maybe<Map_Users_Files_Sum_Fields>;
  var_pop?: Maybe<Map_Users_Files_Var_Pop_Fields>;
  var_samp?: Maybe<Map_Users_Files_Var_Samp_Fields>;
  variance?: Maybe<Map_Users_Files_Variance_Fields>;
};

/** aggregate fields of "map_users_files" */
export type Map_Users_Files_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Map_Users_Files_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "map_users_files" */
export type Map_Users_Files_Aggregate_Order_By = {
  avg?: Maybe<Map_Users_Files_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Map_Users_Files_Max_Order_By>;
  min?: Maybe<Map_Users_Files_Min_Order_By>;
  stddev?: Maybe<Map_Users_Files_Stddev_Order_By>;
  stddev_pop?: Maybe<Map_Users_Files_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Map_Users_Files_Stddev_Samp_Order_By>;
  sum?: Maybe<Map_Users_Files_Sum_Order_By>;
  var_pop?: Maybe<Map_Users_Files_Var_Pop_Order_By>;
  var_samp?: Maybe<Map_Users_Files_Var_Samp_Order_By>;
  variance?: Maybe<Map_Users_Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "map_users_files" */
export type Map_Users_Files_Arr_Rel_Insert_Input = {
  data: Array<Map_Users_Files_Insert_Input>;
  on_conflict?: Maybe<Map_Users_Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Map_Users_Files_Avg_Fields = {
  __typename?: "map_users_files_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "map_users_files" */
export type Map_Users_Files_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "map_users_files". All fields are combined with a logical 'AND'. */
export type Map_Users_Files_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Map_Users_Files_Bool_Exp>>>;
  _not?: Maybe<Map_Users_Files_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Map_Users_Files_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  file?: Maybe<Files_Bool_Exp>;
  file_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "map_users_files" */
export enum Map_Users_Files_Constraint {
  /** unique or primary key constraint */
  MapUsersFilesPkey = "map_users_files_pkey"
}

/** input type for incrementing integer columne in table "map_users_files" */
export type Map_Users_Files_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "map_users_files" */
export type Map_Users_Files_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  file?: Maybe<Files_Obj_Rel_Insert_Input>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Map_Users_Files_Max_Fields = {
  __typename?: "map_users_files_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "map_users_files" */
export type Map_Users_Files_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Map_Users_Files_Min_Fields = {
  __typename?: "map_users_files_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "map_users_files" */
export type Map_Users_Files_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "map_users_files" */
export type Map_Users_Files_Mutation_Response = {
  __typename?: "map_users_files_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Map_Users_Files>;
};

/** input type for inserting object relation for remote table "map_users_files" */
export type Map_Users_Files_Obj_Rel_Insert_Input = {
  data: Map_Users_Files_Insert_Input;
  on_conflict?: Maybe<Map_Users_Files_On_Conflict>;
};

/** on conflict condition type for table "map_users_files" */
export type Map_Users_Files_On_Conflict = {
  constraint: Map_Users_Files_Constraint;
  update_columns: Array<Map_Users_Files_Update_Column>;
  where?: Maybe<Map_Users_Files_Bool_Exp>;
};

/** ordering options when selecting data from "map_users_files" */
export type Map_Users_Files_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  file?: Maybe<Files_Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "map_users_files" */
export enum Map_Users_Files_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  FileId = "file_id",
  /** column name */
  Id = "id",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** input type for updating data in table "map_users_files" */
export type Map_Users_Files_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Map_Users_Files_Stddev_Fields = {
  __typename?: "map_users_files_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "map_users_files" */
export type Map_Users_Files_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Map_Users_Files_Stddev_Pop_Fields = {
  __typename?: "map_users_files_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "map_users_files" */
export type Map_Users_Files_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Map_Users_Files_Stddev_Samp_Fields = {
  __typename?: "map_users_files_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "map_users_files" */
export type Map_Users_Files_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Map_Users_Files_Sum_Fields = {
  __typename?: "map_users_files_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "map_users_files" */
export type Map_Users_Files_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "map_users_files" */
export enum Map_Users_Files_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  FileId = "file_id",
  /** column name */
  Id = "id",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** aggregate var_pop on columns */
export type Map_Users_Files_Var_Pop_Fields = {
  __typename?: "map_users_files_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "map_users_files" */
export type Map_Users_Files_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Map_Users_Files_Var_Samp_Fields = {
  __typename?: "map_users_files_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "map_users_files" */
export type Map_Users_Files_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Map_Users_Files_Variance_Fields = {
  __typename?: "map_users_files_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "map_users_files" */
export type Map_Users_Files_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "map_users_memberships" */
export type Map_Users_Memberships = {
  __typename?: "map_users_memberships";
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description: Scalars["String"];
  end_date: Scalars["date"];
  id: Scalars["bigint"];
  /** An object relationship */
  membership: Memberships;
  membership_id: Scalars["bigint"];
  start_date: Scalars["date"];
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["String"];
};

/** aggregated selection of "map_users_memberships" */
export type Map_Users_Memberships_Aggregate = {
  __typename?: "map_users_memberships_aggregate";
  aggregate?: Maybe<Map_Users_Memberships_Aggregate_Fields>;
  nodes: Array<Map_Users_Memberships>;
};

/** aggregate fields of "map_users_memberships" */
export type Map_Users_Memberships_Aggregate_Fields = {
  __typename?: "map_users_memberships_aggregate_fields";
  avg?: Maybe<Map_Users_Memberships_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Map_Users_Memberships_Max_Fields>;
  min?: Maybe<Map_Users_Memberships_Min_Fields>;
  stddev?: Maybe<Map_Users_Memberships_Stddev_Fields>;
  stddev_pop?: Maybe<Map_Users_Memberships_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Map_Users_Memberships_Stddev_Samp_Fields>;
  sum?: Maybe<Map_Users_Memberships_Sum_Fields>;
  var_pop?: Maybe<Map_Users_Memberships_Var_Pop_Fields>;
  var_samp?: Maybe<Map_Users_Memberships_Var_Samp_Fields>;
  variance?: Maybe<Map_Users_Memberships_Variance_Fields>;
};

/** aggregate fields of "map_users_memberships" */
export type Map_Users_Memberships_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Map_Users_Memberships_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "map_users_memberships" */
export type Map_Users_Memberships_Aggregate_Order_By = {
  avg?: Maybe<Map_Users_Memberships_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Map_Users_Memberships_Max_Order_By>;
  min?: Maybe<Map_Users_Memberships_Min_Order_By>;
  stddev?: Maybe<Map_Users_Memberships_Stddev_Order_By>;
  stddev_pop?: Maybe<Map_Users_Memberships_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Map_Users_Memberships_Stddev_Samp_Order_By>;
  sum?: Maybe<Map_Users_Memberships_Sum_Order_By>;
  var_pop?: Maybe<Map_Users_Memberships_Var_Pop_Order_By>;
  var_samp?: Maybe<Map_Users_Memberships_Var_Samp_Order_By>;
  variance?: Maybe<Map_Users_Memberships_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "map_users_memberships" */
export type Map_Users_Memberships_Arr_Rel_Insert_Input = {
  data: Array<Map_Users_Memberships_Insert_Input>;
  on_conflict?: Maybe<Map_Users_Memberships_On_Conflict>;
};

/** aggregate avg on columns */
export type Map_Users_Memberships_Avg_Fields = {
  __typename?: "map_users_memberships_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  membership_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "map_users_memberships" */
export type Map_Users_Memberships_Avg_Order_By = {
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "map_users_memberships". All fields are combined with a logical 'AND'. */
export type Map_Users_Memberships_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Map_Users_Memberships_Bool_Exp>>>;
  _not?: Maybe<Map_Users_Memberships_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Map_Users_Memberships_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  end_date?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  membership?: Maybe<Memberships_Bool_Exp>;
  membership_id?: Maybe<Bigint_Comparison_Exp>;
  start_date?: Maybe<Date_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "map_users_memberships" */
export enum Map_Users_Memberships_Constraint {
  /** unique or primary key constraint */
  MapUsersMembershipsPkey = "map_users_memberships_pkey"
}

/** input type for incrementing integer columne in table "map_users_memberships" */
export type Map_Users_Memberships_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
  membership_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "map_users_memberships" */
export type Map_Users_Memberships_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  end_date?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["bigint"]>;
  membership?: Maybe<Memberships_Obj_Rel_Insert_Input>;
  membership_id?: Maybe<Scalars["bigint"]>;
  start_date?: Maybe<Scalars["date"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Map_Users_Memberships_Max_Fields = {
  __typename?: "map_users_memberships_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  end_date?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["bigint"]>;
  membership_id?: Maybe<Scalars["bigint"]>;
  start_date?: Maybe<Scalars["date"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "map_users_memberships" */
export type Map_Users_Memberships_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Map_Users_Memberships_Min_Fields = {
  __typename?: "map_users_memberships_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  end_date?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["bigint"]>;
  membership_id?: Maybe<Scalars["bigint"]>;
  start_date?: Maybe<Scalars["date"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "map_users_memberships" */
export type Map_Users_Memberships_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "map_users_memberships" */
export type Map_Users_Memberships_Mutation_Response = {
  __typename?: "map_users_memberships_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Map_Users_Memberships>;
};

/** input type for inserting object relation for remote table "map_users_memberships" */
export type Map_Users_Memberships_Obj_Rel_Insert_Input = {
  data: Map_Users_Memberships_Insert_Input;
  on_conflict?: Maybe<Map_Users_Memberships_On_Conflict>;
};

/** on conflict condition type for table "map_users_memberships" */
export type Map_Users_Memberships_On_Conflict = {
  constraint: Map_Users_Memberships_Constraint;
  update_columns: Array<Map_Users_Memberships_Update_Column>;
  where?: Maybe<Map_Users_Memberships_Bool_Exp>;
};

/** ordering options when selecting data from "map_users_memberships" */
export type Map_Users_Memberships_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership?: Maybe<Memberships_Order_By>;
  membership_id?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "map_users_memberships" */
export enum Map_Users_Memberships_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  EndDate = "end_date",
  /** column name */
  Id = "id",
  /** column name */
  MembershipId = "membership_id",
  /** column name */
  StartDate = "start_date",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** input type for updating data in table "map_users_memberships" */
export type Map_Users_Memberships_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  end_date?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["bigint"]>;
  membership_id?: Maybe<Scalars["bigint"]>;
  start_date?: Maybe<Scalars["date"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Map_Users_Memberships_Stddev_Fields = {
  __typename?: "map_users_memberships_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  membership_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "map_users_memberships" */
export type Map_Users_Memberships_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Map_Users_Memberships_Stddev_Pop_Fields = {
  __typename?: "map_users_memberships_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  membership_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "map_users_memberships" */
export type Map_Users_Memberships_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Map_Users_Memberships_Stddev_Samp_Fields = {
  __typename?: "map_users_memberships_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  membership_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "map_users_memberships" */
export type Map_Users_Memberships_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Map_Users_Memberships_Sum_Fields = {
  __typename?: "map_users_memberships_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
  membership_id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "map_users_memberships" */
export type Map_Users_Memberships_Sum_Order_By = {
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
};

/** update columns of table "map_users_memberships" */
export enum Map_Users_Memberships_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  EndDate = "end_date",
  /** column name */
  Id = "id",
  /** column name */
  MembershipId = "membership_id",
  /** column name */
  StartDate = "start_date",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** aggregate var_pop on columns */
export type Map_Users_Memberships_Var_Pop_Fields = {
  __typename?: "map_users_memberships_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  membership_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "map_users_memberships" */
export type Map_Users_Memberships_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Map_Users_Memberships_Var_Samp_Fields = {
  __typename?: "map_users_memberships_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  membership_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "map_users_memberships" */
export type Map_Users_Memberships_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Map_Users_Memberships_Variance_Fields = {
  __typename?: "map_users_memberships_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  membership_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "map_users_memberships" */
export type Map_Users_Memberships_Variance_Order_By = {
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
};

/** columns and relationships of "map_users_organizations" */
export type Map_Users_Organizations = {
  __typename?: "map_users_organizations";
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  organization: Organizations;
  organization_id: Scalars["bigint"];
  role?: Maybe<Scalars["String"]>;
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user?: Maybe<Vw_Users>;
  user_id: Scalars["String"];
};

/** aggregated selection of "map_users_organizations" */
export type Map_Users_Organizations_Aggregate = {
  __typename?: "map_users_organizations_aggregate";
  aggregate?: Maybe<Map_Users_Organizations_Aggregate_Fields>;
  nodes: Array<Map_Users_Organizations>;
};

/** aggregate fields of "map_users_organizations" */
export type Map_Users_Organizations_Aggregate_Fields = {
  __typename?: "map_users_organizations_aggregate_fields";
  avg?: Maybe<Map_Users_Organizations_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Map_Users_Organizations_Max_Fields>;
  min?: Maybe<Map_Users_Organizations_Min_Fields>;
  stddev?: Maybe<Map_Users_Organizations_Stddev_Fields>;
  stddev_pop?: Maybe<Map_Users_Organizations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Map_Users_Organizations_Stddev_Samp_Fields>;
  sum?: Maybe<Map_Users_Organizations_Sum_Fields>;
  var_pop?: Maybe<Map_Users_Organizations_Var_Pop_Fields>;
  var_samp?: Maybe<Map_Users_Organizations_Var_Samp_Fields>;
  variance?: Maybe<Map_Users_Organizations_Variance_Fields>;
};

/** aggregate fields of "map_users_organizations" */
export type Map_Users_Organizations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Map_Users_Organizations_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "map_users_organizations" */
export type Map_Users_Organizations_Aggregate_Order_By = {
  avg?: Maybe<Map_Users_Organizations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Map_Users_Organizations_Max_Order_By>;
  min?: Maybe<Map_Users_Organizations_Min_Order_By>;
  stddev?: Maybe<Map_Users_Organizations_Stddev_Order_By>;
  stddev_pop?: Maybe<Map_Users_Organizations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Map_Users_Organizations_Stddev_Samp_Order_By>;
  sum?: Maybe<Map_Users_Organizations_Sum_Order_By>;
  var_pop?: Maybe<Map_Users_Organizations_Var_Pop_Order_By>;
  var_samp?: Maybe<Map_Users_Organizations_Var_Samp_Order_By>;
  variance?: Maybe<Map_Users_Organizations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "map_users_organizations" */
export type Map_Users_Organizations_Arr_Rel_Insert_Input = {
  data: Array<Map_Users_Organizations_Insert_Input>;
  on_conflict?: Maybe<Map_Users_Organizations_On_Conflict>;
};

/** aggregate avg on columns */
export type Map_Users_Organizations_Avg_Fields = {
  __typename?: "map_users_organizations_avg_fields";
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "map_users_organizations" */
export type Map_Users_Organizations_Avg_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "map_users_organizations". All fields are combined with a logical 'AND'. */
export type Map_Users_Organizations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Map_Users_Organizations_Bool_Exp>>>;
  _not?: Maybe<Map_Users_Organizations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Map_Users_Organizations_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  organization?: Maybe<Organizations_Bool_Exp>;
  organization_id?: Maybe<Bigint_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Vw_Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "map_users_organizations" */
export enum Map_Users_Organizations_Constraint {
  /** unique or primary key constraint */
  MapUsersOrganizationsPkey = "map_users_organizations_pkey"
}

/** input type for incrementing integer columne in table "map_users_organizations" */
export type Map_Users_Organizations_Inc_Input = {
  organization_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "map_users_organizations" */
export type Map_Users_Organizations_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  organization?: Maybe<Organizations_Obj_Rel_Insert_Input>;
  organization_id?: Maybe<Scalars["bigint"]>;
  role?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Map_Users_Organizations_Max_Fields = {
  __typename?: "map_users_organizations_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  role?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "map_users_organizations" */
export type Map_Users_Organizations_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Map_Users_Organizations_Min_Fields = {
  __typename?: "map_users_organizations_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  role?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "map_users_organizations" */
export type Map_Users_Organizations_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "map_users_organizations" */
export type Map_Users_Organizations_Mutation_Response = {
  __typename?: "map_users_organizations_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Map_Users_Organizations>;
};

/** input type for inserting object relation for remote table "map_users_organizations" */
export type Map_Users_Organizations_Obj_Rel_Insert_Input = {
  data: Map_Users_Organizations_Insert_Input;
  on_conflict?: Maybe<Map_Users_Organizations_On_Conflict>;
};

/** on conflict condition type for table "map_users_organizations" */
export type Map_Users_Organizations_On_Conflict = {
  constraint: Map_Users_Organizations_Constraint;
  update_columns: Array<Map_Users_Organizations_Update_Column>;
  where?: Maybe<Map_Users_Organizations_Bool_Exp>;
};

/** ordering options when selecting data from "map_users_organizations" */
export type Map_Users_Organizations_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  organization?: Maybe<Organizations_Order_By>;
  organization_id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Vw_Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "map_users_organizations" */
export enum Map_Users_Organizations_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  OrganizationId = "organization_id",
  /** column name */
  Role = "role",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** input type for updating data in table "map_users_organizations" */
export type Map_Users_Organizations_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  role?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Map_Users_Organizations_Stddev_Fields = {
  __typename?: "map_users_organizations_stddev_fields";
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "map_users_organizations" */
export type Map_Users_Organizations_Stddev_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Map_Users_Organizations_Stddev_Pop_Fields = {
  __typename?: "map_users_organizations_stddev_pop_fields";
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "map_users_organizations" */
export type Map_Users_Organizations_Stddev_Pop_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Map_Users_Organizations_Stddev_Samp_Fields = {
  __typename?: "map_users_organizations_stddev_samp_fields";
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "map_users_organizations" */
export type Map_Users_Organizations_Stddev_Samp_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Map_Users_Organizations_Sum_Fields = {
  __typename?: "map_users_organizations_sum_fields";
  organization_id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "map_users_organizations" */
export type Map_Users_Organizations_Sum_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** update columns of table "map_users_organizations" */
export enum Map_Users_Organizations_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  OrganizationId = "organization_id",
  /** column name */
  Role = "role",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** aggregate var_pop on columns */
export type Map_Users_Organizations_Var_Pop_Fields = {
  __typename?: "map_users_organizations_var_pop_fields";
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "map_users_organizations" */
export type Map_Users_Organizations_Var_Pop_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Map_Users_Organizations_Var_Samp_Fields = {
  __typename?: "map_users_organizations_var_samp_fields";
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "map_users_organizations" */
export type Map_Users_Organizations_Var_Samp_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Map_Users_Organizations_Variance_Fields = {
  __typename?: "map_users_organizations_variance_fields";
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "map_users_organizations" */
export type Map_Users_Organizations_Variance_Order_By = {
  organization_id?: Maybe<Order_By>;
};

/** columns and relationships of "map_users_roles" */
export type Map_Users_Roles = {
  __typename?: "map_users_roles";
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  role: Roles;
  role_id: Scalars["bigint"];
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["String"];
};

/** aggregated selection of "map_users_roles" */
export type Map_Users_Roles_Aggregate = {
  __typename?: "map_users_roles_aggregate";
  aggregate?: Maybe<Map_Users_Roles_Aggregate_Fields>;
  nodes: Array<Map_Users_Roles>;
};

/** aggregate fields of "map_users_roles" */
export type Map_Users_Roles_Aggregate_Fields = {
  __typename?: "map_users_roles_aggregate_fields";
  avg?: Maybe<Map_Users_Roles_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Map_Users_Roles_Max_Fields>;
  min?: Maybe<Map_Users_Roles_Min_Fields>;
  stddev?: Maybe<Map_Users_Roles_Stddev_Fields>;
  stddev_pop?: Maybe<Map_Users_Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Map_Users_Roles_Stddev_Samp_Fields>;
  sum?: Maybe<Map_Users_Roles_Sum_Fields>;
  var_pop?: Maybe<Map_Users_Roles_Var_Pop_Fields>;
  var_samp?: Maybe<Map_Users_Roles_Var_Samp_Fields>;
  variance?: Maybe<Map_Users_Roles_Variance_Fields>;
};

/** aggregate fields of "map_users_roles" */
export type Map_Users_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Map_Users_Roles_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "map_users_roles" */
export type Map_Users_Roles_Aggregate_Order_By = {
  avg?: Maybe<Map_Users_Roles_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Map_Users_Roles_Max_Order_By>;
  min?: Maybe<Map_Users_Roles_Min_Order_By>;
  stddev?: Maybe<Map_Users_Roles_Stddev_Order_By>;
  stddev_pop?: Maybe<Map_Users_Roles_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Map_Users_Roles_Stddev_Samp_Order_By>;
  sum?: Maybe<Map_Users_Roles_Sum_Order_By>;
  var_pop?: Maybe<Map_Users_Roles_Var_Pop_Order_By>;
  var_samp?: Maybe<Map_Users_Roles_Var_Samp_Order_By>;
  variance?: Maybe<Map_Users_Roles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "map_users_roles" */
export type Map_Users_Roles_Arr_Rel_Insert_Input = {
  data: Array<Map_Users_Roles_Insert_Input>;
  on_conflict?: Maybe<Map_Users_Roles_On_Conflict>;
};

/** aggregate avg on columns */
export type Map_Users_Roles_Avg_Fields = {
  __typename?: "map_users_roles_avg_fields";
  role_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "map_users_roles" */
export type Map_Users_Roles_Avg_Order_By = {
  role_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "map_users_roles". All fields are combined with a logical 'AND'. */
export type Map_Users_Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Map_Users_Roles_Bool_Exp>>>;
  _not?: Maybe<Map_Users_Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Map_Users_Roles_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  role?: Maybe<Roles_Bool_Exp>;
  role_id?: Maybe<Bigint_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "map_users_roles" */
export enum Map_Users_Roles_Constraint {
  /** unique or primary key constraint */
  MapUsersRolesPkey = "map_users_roles_pkey"
}

/** input type for incrementing integer columne in table "map_users_roles" */
export type Map_Users_Roles_Inc_Input = {
  role_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "map_users_roles" */
export type Map_Users_Roles_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  role?: Maybe<Roles_Obj_Rel_Insert_Input>;
  role_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Map_Users_Roles_Max_Fields = {
  __typename?: "map_users_roles_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  role_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "map_users_roles" */
export type Map_Users_Roles_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Map_Users_Roles_Min_Fields = {
  __typename?: "map_users_roles_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  role_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "map_users_roles" */
export type Map_Users_Roles_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  role_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "map_users_roles" */
export type Map_Users_Roles_Mutation_Response = {
  __typename?: "map_users_roles_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Map_Users_Roles>;
};

/** input type for inserting object relation for remote table "map_users_roles" */
export type Map_Users_Roles_Obj_Rel_Insert_Input = {
  data: Map_Users_Roles_Insert_Input;
  on_conflict?: Maybe<Map_Users_Roles_On_Conflict>;
};

/** on conflict condition type for table "map_users_roles" */
export type Map_Users_Roles_On_Conflict = {
  constraint: Map_Users_Roles_Constraint;
  update_columns: Array<Map_Users_Roles_Update_Column>;
  where?: Maybe<Map_Users_Roles_Bool_Exp>;
};

/** ordering options when selecting data from "map_users_roles" */
export type Map_Users_Roles_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  role?: Maybe<Roles_Order_By>;
  role_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "map_users_roles" */
export enum Map_Users_Roles_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  RoleId = "role_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** input type for updating data in table "map_users_roles" */
export type Map_Users_Roles_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  role_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Map_Users_Roles_Stddev_Fields = {
  __typename?: "map_users_roles_stddev_fields";
  role_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "map_users_roles" */
export type Map_Users_Roles_Stddev_Order_By = {
  role_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Map_Users_Roles_Stddev_Pop_Fields = {
  __typename?: "map_users_roles_stddev_pop_fields";
  role_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "map_users_roles" */
export type Map_Users_Roles_Stddev_Pop_Order_By = {
  role_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Map_Users_Roles_Stddev_Samp_Fields = {
  __typename?: "map_users_roles_stddev_samp_fields";
  role_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "map_users_roles" */
export type Map_Users_Roles_Stddev_Samp_Order_By = {
  role_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Map_Users_Roles_Sum_Fields = {
  __typename?: "map_users_roles_sum_fields";
  role_id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "map_users_roles" */
export type Map_Users_Roles_Sum_Order_By = {
  role_id?: Maybe<Order_By>;
};

/** update columns of table "map_users_roles" */
export enum Map_Users_Roles_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  RoleId = "role_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** aggregate var_pop on columns */
export type Map_Users_Roles_Var_Pop_Fields = {
  __typename?: "map_users_roles_var_pop_fields";
  role_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "map_users_roles" */
export type Map_Users_Roles_Var_Pop_Order_By = {
  role_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Map_Users_Roles_Var_Samp_Fields = {
  __typename?: "map_users_roles_var_samp_fields";
  role_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "map_users_roles" */
export type Map_Users_Roles_Var_Samp_Order_By = {
  role_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Map_Users_Roles_Variance_Fields = {
  __typename?: "map_users_roles_variance_fields";
  role_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "map_users_roles" */
export type Map_Users_Roles_Variance_Order_By = {
  role_id?: Maybe<Order_By>;
};

/** columns and relationships of "marketing.active_banners" */
export type Marketing_Active_Banners = {
  __typename?: "marketing_active_banners";
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  end_date?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  link?: Maybe<Scalars["String"]>;
  mobile_file_id?: Maybe<Scalars["String"]>;
  placement?: Maybe<Scalars["String"]>;
  start_date?: Maybe<Scalars["timestamptz"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregated selection of "marketing.active_banners" */
export type Marketing_Active_Banners_Aggregate = {
  __typename?: "marketing_active_banners_aggregate";
  aggregate?: Maybe<Marketing_Active_Banners_Aggregate_Fields>;
  nodes: Array<Marketing_Active_Banners>;
};

/** aggregate fields of "marketing.active_banners" */
export type Marketing_Active_Banners_Aggregate_Fields = {
  __typename?: "marketing_active_banners_aggregate_fields";
  avg?: Maybe<Marketing_Active_Banners_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Marketing_Active_Banners_Max_Fields>;
  min?: Maybe<Marketing_Active_Banners_Min_Fields>;
  stddev?: Maybe<Marketing_Active_Banners_Stddev_Fields>;
  stddev_pop?: Maybe<Marketing_Active_Banners_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketing_Active_Banners_Stddev_Samp_Fields>;
  sum?: Maybe<Marketing_Active_Banners_Sum_Fields>;
  var_pop?: Maybe<Marketing_Active_Banners_Var_Pop_Fields>;
  var_samp?: Maybe<Marketing_Active_Banners_Var_Samp_Fields>;
  variance?: Maybe<Marketing_Active_Banners_Variance_Fields>;
};

/** aggregate fields of "marketing.active_banners" */
export type Marketing_Active_Banners_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Marketing_Active_Banners_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "marketing.active_banners" */
export type Marketing_Active_Banners_Aggregate_Order_By = {
  avg?: Maybe<Marketing_Active_Banners_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Marketing_Active_Banners_Max_Order_By>;
  min?: Maybe<Marketing_Active_Banners_Min_Order_By>;
  stddev?: Maybe<Marketing_Active_Banners_Stddev_Order_By>;
  stddev_pop?: Maybe<Marketing_Active_Banners_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Marketing_Active_Banners_Stddev_Samp_Order_By>;
  sum?: Maybe<Marketing_Active_Banners_Sum_Order_By>;
  var_pop?: Maybe<Marketing_Active_Banners_Var_Pop_Order_By>;
  var_samp?: Maybe<Marketing_Active_Banners_Var_Samp_Order_By>;
  variance?: Maybe<Marketing_Active_Banners_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Marketing_Active_Banners_Avg_Fields = {
  __typename?: "marketing_active_banners_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "marketing.active_banners" */
export type Marketing_Active_Banners_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "marketing.active_banners". All fields are combined with a logical 'AND'. */
export type Marketing_Active_Banners_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Marketing_Active_Banners_Bool_Exp>>>;
  _not?: Maybe<Marketing_Active_Banners_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Marketing_Active_Banners_Bool_Exp>>>;
  bucket?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  end_date?: Maybe<Timestamptz_Comparison_Exp>;
  file_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  link?: Maybe<String_Comparison_Exp>;
  mobile_file_id?: Maybe<String_Comparison_Exp>;
  placement?: Maybe<String_Comparison_Exp>;
  start_date?: Maybe<Timestamptz_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Marketing_Active_Banners_Max_Fields = {
  __typename?: "marketing_active_banners_max_fields";
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  end_date?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  link?: Maybe<Scalars["String"]>;
  mobile_file_id?: Maybe<Scalars["String"]>;
  placement?: Maybe<Scalars["String"]>;
  start_date?: Maybe<Scalars["timestamptz"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "marketing.active_banners" */
export type Marketing_Active_Banners_Max_Order_By = {
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  mobile_file_id?: Maybe<Order_By>;
  placement?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Marketing_Active_Banners_Min_Fields = {
  __typename?: "marketing_active_banners_min_fields";
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  end_date?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  link?: Maybe<Scalars["String"]>;
  mobile_file_id?: Maybe<Scalars["String"]>;
  placement?: Maybe<Scalars["String"]>;
  start_date?: Maybe<Scalars["timestamptz"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "marketing.active_banners" */
export type Marketing_Active_Banners_Min_Order_By = {
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  mobile_file_id?: Maybe<Order_By>;
  placement?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** ordering options when selecting data from "marketing.active_banners" */
export type Marketing_Active_Banners_Order_By = {
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  mobile_file_id?: Maybe<Order_By>;
  placement?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "marketing.active_banners" */
export enum Marketing_Active_Banners_Select_Column {
  /** column name */
  Bucket = "bucket",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  EndDate = "end_date",
  /** column name */
  FileId = "file_id",
  /** column name */
  Id = "id",
  /** column name */
  Link = "link",
  /** column name */
  MobileFileId = "mobile_file_id",
  /** column name */
  Placement = "placement",
  /** column name */
  StartDate = "start_date",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate stddev on columns */
export type Marketing_Active_Banners_Stddev_Fields = {
  __typename?: "marketing_active_banners_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "marketing.active_banners" */
export type Marketing_Active_Banners_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Marketing_Active_Banners_Stddev_Pop_Fields = {
  __typename?: "marketing_active_banners_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "marketing.active_banners" */
export type Marketing_Active_Banners_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Marketing_Active_Banners_Stddev_Samp_Fields = {
  __typename?: "marketing_active_banners_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "marketing.active_banners" */
export type Marketing_Active_Banners_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Marketing_Active_Banners_Sum_Fields = {
  __typename?: "marketing_active_banners_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "marketing.active_banners" */
export type Marketing_Active_Banners_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Marketing_Active_Banners_Var_Pop_Fields = {
  __typename?: "marketing_active_banners_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "marketing.active_banners" */
export type Marketing_Active_Banners_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Marketing_Active_Banners_Var_Samp_Fields = {
  __typename?: "marketing_active_banners_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "marketing.active_banners" */
export type Marketing_Active_Banners_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Marketing_Active_Banners_Variance_Fields = {
  __typename?: "marketing_active_banners_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "marketing.active_banners" */
export type Marketing_Active_Banners_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "marketing.banners" */
export type Marketing_Banners = {
  __typename?: "marketing_banners";
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  end_date?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  file: Files;
  file_id: Scalars["String"];
  id: Scalars["bigint"];
  link: Scalars["String"];
  /** An object relationship */
  mobile_file?: Maybe<Files>;
  mobile_file_id?: Maybe<Scalars["String"]>;
  placement: Scalars["String"];
  start_date?: Maybe<Scalars["timestamptz"]>;
  title: Scalars["String"];
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "marketing.banners" */
export type Marketing_Banners_Aggregate = {
  __typename?: "marketing_banners_aggregate";
  aggregate?: Maybe<Marketing_Banners_Aggregate_Fields>;
  nodes: Array<Marketing_Banners>;
};

/** aggregate fields of "marketing.banners" */
export type Marketing_Banners_Aggregate_Fields = {
  __typename?: "marketing_banners_aggregate_fields";
  avg?: Maybe<Marketing_Banners_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Marketing_Banners_Max_Fields>;
  min?: Maybe<Marketing_Banners_Min_Fields>;
  stddev?: Maybe<Marketing_Banners_Stddev_Fields>;
  stddev_pop?: Maybe<Marketing_Banners_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketing_Banners_Stddev_Samp_Fields>;
  sum?: Maybe<Marketing_Banners_Sum_Fields>;
  var_pop?: Maybe<Marketing_Banners_Var_Pop_Fields>;
  var_samp?: Maybe<Marketing_Banners_Var_Samp_Fields>;
  variance?: Maybe<Marketing_Banners_Variance_Fields>;
};

/** aggregate fields of "marketing.banners" */
export type Marketing_Banners_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Marketing_Banners_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "marketing.banners" */
export type Marketing_Banners_Aggregate_Order_By = {
  avg?: Maybe<Marketing_Banners_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Marketing_Banners_Max_Order_By>;
  min?: Maybe<Marketing_Banners_Min_Order_By>;
  stddev?: Maybe<Marketing_Banners_Stddev_Order_By>;
  stddev_pop?: Maybe<Marketing_Banners_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Marketing_Banners_Stddev_Samp_Order_By>;
  sum?: Maybe<Marketing_Banners_Sum_Order_By>;
  var_pop?: Maybe<Marketing_Banners_Var_Pop_Order_By>;
  var_samp?: Maybe<Marketing_Banners_Var_Samp_Order_By>;
  variance?: Maybe<Marketing_Banners_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "marketing.banners" */
export type Marketing_Banners_Arr_Rel_Insert_Input = {
  data: Array<Marketing_Banners_Insert_Input>;
  on_conflict?: Maybe<Marketing_Banners_On_Conflict>;
};

/** aggregate avg on columns */
export type Marketing_Banners_Avg_Fields = {
  __typename?: "marketing_banners_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "marketing.banners" */
export type Marketing_Banners_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "marketing.banners". All fields are combined with a logical 'AND'. */
export type Marketing_Banners_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Marketing_Banners_Bool_Exp>>>;
  _not?: Maybe<Marketing_Banners_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Marketing_Banners_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  end_date?: Maybe<Timestamptz_Comparison_Exp>;
  file?: Maybe<Files_Bool_Exp>;
  file_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  link?: Maybe<String_Comparison_Exp>;
  mobile_file?: Maybe<Files_Bool_Exp>;
  mobile_file_id?: Maybe<String_Comparison_Exp>;
  placement?: Maybe<String_Comparison_Exp>;
  start_date?: Maybe<Timestamptz_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "marketing.banners" */
export enum Marketing_Banners_Constraint {
  /** unique or primary key constraint */
  BannersPkey = "banners_pkey"
}

/** input type for incrementing integer columne in table "marketing.banners" */
export type Marketing_Banners_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "marketing.banners" */
export type Marketing_Banners_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  end_date?: Maybe<Scalars["timestamptz"]>;
  file?: Maybe<Files_Obj_Rel_Insert_Input>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  link?: Maybe<Scalars["String"]>;
  mobile_file?: Maybe<Files_Obj_Rel_Insert_Input>;
  mobile_file_id?: Maybe<Scalars["String"]>;
  placement?: Maybe<Scalars["String"]>;
  start_date?: Maybe<Scalars["timestamptz"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Marketing_Banners_Max_Fields = {
  __typename?: "marketing_banners_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  end_date?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  link?: Maybe<Scalars["String"]>;
  mobile_file_id?: Maybe<Scalars["String"]>;
  placement?: Maybe<Scalars["String"]>;
  start_date?: Maybe<Scalars["timestamptz"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "marketing.banners" */
export type Marketing_Banners_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  mobile_file_id?: Maybe<Order_By>;
  placement?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Marketing_Banners_Min_Fields = {
  __typename?: "marketing_banners_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  end_date?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  link?: Maybe<Scalars["String"]>;
  mobile_file_id?: Maybe<Scalars["String"]>;
  placement?: Maybe<Scalars["String"]>;
  start_date?: Maybe<Scalars["timestamptz"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "marketing.banners" */
export type Marketing_Banners_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  mobile_file_id?: Maybe<Order_By>;
  placement?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "marketing.banners" */
export type Marketing_Banners_Mutation_Response = {
  __typename?: "marketing_banners_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Marketing_Banners>;
};

/** input type for inserting object relation for remote table "marketing.banners" */
export type Marketing_Banners_Obj_Rel_Insert_Input = {
  data: Marketing_Banners_Insert_Input;
  on_conflict?: Maybe<Marketing_Banners_On_Conflict>;
};

/** on conflict condition type for table "marketing.banners" */
export type Marketing_Banners_On_Conflict = {
  constraint: Marketing_Banners_Constraint;
  update_columns: Array<Marketing_Banners_Update_Column>;
  where?: Maybe<Marketing_Banners_Bool_Exp>;
};

/** ordering options when selecting data from "marketing.banners" */
export type Marketing_Banners_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  file?: Maybe<Files_Order_By>;
  file_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  link?: Maybe<Order_By>;
  mobile_file?: Maybe<Files_Order_By>;
  mobile_file_id?: Maybe<Order_By>;
  placement?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "marketing.banners" */
export enum Marketing_Banners_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  EndDate = "end_date",
  /** column name */
  FileId = "file_id",
  /** column name */
  Id = "id",
  /** column name */
  Link = "link",
  /** column name */
  MobileFileId = "mobile_file_id",
  /** column name */
  Placement = "placement",
  /** column name */
  StartDate = "start_date",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "marketing.banners" */
export type Marketing_Banners_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  end_date?: Maybe<Scalars["timestamptz"]>;
  file_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  link?: Maybe<Scalars["String"]>;
  mobile_file_id?: Maybe<Scalars["String"]>;
  placement?: Maybe<Scalars["String"]>;
  start_date?: Maybe<Scalars["timestamptz"]>;
  title?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Marketing_Banners_Stddev_Fields = {
  __typename?: "marketing_banners_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "marketing.banners" */
export type Marketing_Banners_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Marketing_Banners_Stddev_Pop_Fields = {
  __typename?: "marketing_banners_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "marketing.banners" */
export type Marketing_Banners_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Marketing_Banners_Stddev_Samp_Fields = {
  __typename?: "marketing_banners_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "marketing.banners" */
export type Marketing_Banners_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Marketing_Banners_Sum_Fields = {
  __typename?: "marketing_banners_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "marketing.banners" */
export type Marketing_Banners_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "marketing.banners" */
export enum Marketing_Banners_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  EndDate = "end_date",
  /** column name */
  FileId = "file_id",
  /** column name */
  Id = "id",
  /** column name */
  Link = "link",
  /** column name */
  MobileFileId = "mobile_file_id",
  /** column name */
  Placement = "placement",
  /** column name */
  StartDate = "start_date",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Marketing_Banners_Var_Pop_Fields = {
  __typename?: "marketing_banners_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "marketing.banners" */
export type Marketing_Banners_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Marketing_Banners_Var_Samp_Fields = {
  __typename?: "marketing_banners_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "marketing.banners" */
export type Marketing_Banners_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Marketing_Banners_Variance_Fields = {
  __typename?: "marketing_banners_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "marketing.banners" */
export type Marketing_Banners_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "marketing.home_options" */
export type Marketing_Home_Options = {
  __typename?: "marketing_home_options";
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["Int"];
  is_active: Scalars["Boolean"];
  options: Scalars["jsonb"];
  updated_at: Scalars["timestamptz"];
  updated_user_id?: Maybe<Scalars["String"]>;
  user_id: Scalars["String"];
};

/** columns and relationships of "marketing.home_options" */
export type Marketing_Home_OptionsOptionsArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "marketing.home_options" */
export type Marketing_Home_Options_Aggregate = {
  __typename?: "marketing_home_options_aggregate";
  aggregate?: Maybe<Marketing_Home_Options_Aggregate_Fields>;
  nodes: Array<Marketing_Home_Options>;
};

/** aggregate fields of "marketing.home_options" */
export type Marketing_Home_Options_Aggregate_Fields = {
  __typename?: "marketing_home_options_aggregate_fields";
  avg?: Maybe<Marketing_Home_Options_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Marketing_Home_Options_Max_Fields>;
  min?: Maybe<Marketing_Home_Options_Min_Fields>;
  stddev?: Maybe<Marketing_Home_Options_Stddev_Fields>;
  stddev_pop?: Maybe<Marketing_Home_Options_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketing_Home_Options_Stddev_Samp_Fields>;
  sum?: Maybe<Marketing_Home_Options_Sum_Fields>;
  var_pop?: Maybe<Marketing_Home_Options_Var_Pop_Fields>;
  var_samp?: Maybe<Marketing_Home_Options_Var_Samp_Fields>;
  variance?: Maybe<Marketing_Home_Options_Variance_Fields>;
};

/** aggregate fields of "marketing.home_options" */
export type Marketing_Home_Options_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Marketing_Home_Options_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "marketing.home_options" */
export type Marketing_Home_Options_Aggregate_Order_By = {
  avg?: Maybe<Marketing_Home_Options_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Marketing_Home_Options_Max_Order_By>;
  min?: Maybe<Marketing_Home_Options_Min_Order_By>;
  stddev?: Maybe<Marketing_Home_Options_Stddev_Order_By>;
  stddev_pop?: Maybe<Marketing_Home_Options_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Marketing_Home_Options_Stddev_Samp_Order_By>;
  sum?: Maybe<Marketing_Home_Options_Sum_Order_By>;
  var_pop?: Maybe<Marketing_Home_Options_Var_Pop_Order_By>;
  var_samp?: Maybe<Marketing_Home_Options_Var_Samp_Order_By>;
  variance?: Maybe<Marketing_Home_Options_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Marketing_Home_Options_Append_Input = {
  options?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "marketing.home_options" */
export type Marketing_Home_Options_Arr_Rel_Insert_Input = {
  data: Array<Marketing_Home_Options_Insert_Input>;
  on_conflict?: Maybe<Marketing_Home_Options_On_Conflict>;
};

/** aggregate avg on columns */
export type Marketing_Home_Options_Avg_Fields = {
  __typename?: "marketing_home_options_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "marketing.home_options" */
export type Marketing_Home_Options_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "marketing.home_options". All fields are combined with a logical 'AND'. */
export type Marketing_Home_Options_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Marketing_Home_Options_Bool_Exp>>>;
  _not?: Maybe<Marketing_Home_Options_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Marketing_Home_Options_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  options?: Maybe<Jsonb_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_user_id?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "marketing.home_options" */
export enum Marketing_Home_Options_Constraint {
  /** unique or primary key constraint */
  HomeOptionsPkey = "home_options_pkey"
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Marketing_Home_Options_Delete_At_Path_Input = {
  options?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Marketing_Home_Options_Delete_Elem_Input = {
  options?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Marketing_Home_Options_Delete_Key_Input = {
  options?: Maybe<Scalars["String"]>;
};

/** input type for incrementing integer columne in table "marketing.home_options" */
export type Marketing_Home_Options_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "marketing.home_options" */
export type Marketing_Home_Options_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
  options?: Maybe<Scalars["jsonb"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  updated_user_id?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Marketing_Home_Options_Max_Fields = {
  __typename?: "marketing_home_options_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  updated_user_id?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "marketing.home_options" */
export type Marketing_Home_Options_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  updated_user_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Marketing_Home_Options_Min_Fields = {
  __typename?: "marketing_home_options_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  updated_user_id?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "marketing.home_options" */
export type Marketing_Home_Options_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  updated_user_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "marketing.home_options" */
export type Marketing_Home_Options_Mutation_Response = {
  __typename?: "marketing_home_options_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Marketing_Home_Options>;
};

/** input type for inserting object relation for remote table "marketing.home_options" */
export type Marketing_Home_Options_Obj_Rel_Insert_Input = {
  data: Marketing_Home_Options_Insert_Input;
  on_conflict?: Maybe<Marketing_Home_Options_On_Conflict>;
};

/** on conflict condition type for table "marketing.home_options" */
export type Marketing_Home_Options_On_Conflict = {
  constraint: Marketing_Home_Options_Constraint;
  update_columns: Array<Marketing_Home_Options_Update_Column>;
  where?: Maybe<Marketing_Home_Options_Bool_Exp>;
};

/** ordering options when selecting data from "marketing.home_options" */
export type Marketing_Home_Options_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_active?: Maybe<Order_By>;
  options?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  updated_user_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Marketing_Home_Options_Prepend_Input = {
  options?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "marketing.home_options" */
export enum Marketing_Home_Options_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  IsActive = "is_active",
  /** column name */
  Options = "options",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UpdatedUserId = "updated_user_id",
  /** column name */
  UserId = "user_id"
}

/** input type for updating data in table "marketing.home_options" */
export type Marketing_Home_Options_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["Int"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
  options?: Maybe<Scalars["jsonb"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  updated_user_id?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Marketing_Home_Options_Stddev_Fields = {
  __typename?: "marketing_home_options_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "marketing.home_options" */
export type Marketing_Home_Options_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Marketing_Home_Options_Stddev_Pop_Fields = {
  __typename?: "marketing_home_options_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "marketing.home_options" */
export type Marketing_Home_Options_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Marketing_Home_Options_Stddev_Samp_Fields = {
  __typename?: "marketing_home_options_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "marketing.home_options" */
export type Marketing_Home_Options_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Marketing_Home_Options_Sum_Fields = {
  __typename?: "marketing_home_options_sum_fields";
  id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "marketing.home_options" */
export type Marketing_Home_Options_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "marketing.home_options" */
export enum Marketing_Home_Options_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  IsActive = "is_active",
  /** column name */
  Options = "options",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UpdatedUserId = "updated_user_id",
  /** column name */
  UserId = "user_id"
}

/** aggregate var_pop on columns */
export type Marketing_Home_Options_Var_Pop_Fields = {
  __typename?: "marketing_home_options_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "marketing.home_options" */
export type Marketing_Home_Options_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Marketing_Home_Options_Var_Samp_Fields = {
  __typename?: "marketing_home_options_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "marketing.home_options" */
export type Marketing_Home_Options_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Marketing_Home_Options_Variance_Fields = {
  __typename?: "marketing_home_options_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "marketing.home_options" */
export type Marketing_Home_Options_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** Урамшуулалын тохиргоог хадгална
 *
 *
 * columns and relationships of "marketing.promotions"
 */
export type Marketing_Promotions = {
  __typename?: "marketing_promotions";
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description: Scalars["String"];
  end_date?: Maybe<Scalars["date"]>;
  id: Scalars["bigint"];
  max_count: Scalars["Int"];
  meta?: Maybe<Scalars["jsonb"]>;
  start_date?: Maybe<Scalars["date"]>;
  title: Scalars["String"];
  type: Scalars["String"];
  updated_at: Scalars["timestamptz"];
  used_count: Scalars["Int"];
};

/** Урамшуулалын тохиргоог хадгална
 *
 *
 * columns and relationships of "marketing.promotions"
 */
export type Marketing_PromotionsMetaArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "marketing.promotions" */
export type Marketing_Promotions_Aggregate = {
  __typename?: "marketing_promotions_aggregate";
  aggregate?: Maybe<Marketing_Promotions_Aggregate_Fields>;
  nodes: Array<Marketing_Promotions>;
};

/** aggregate fields of "marketing.promotions" */
export type Marketing_Promotions_Aggregate_Fields = {
  __typename?: "marketing_promotions_aggregate_fields";
  avg?: Maybe<Marketing_Promotions_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Marketing_Promotions_Max_Fields>;
  min?: Maybe<Marketing_Promotions_Min_Fields>;
  stddev?: Maybe<Marketing_Promotions_Stddev_Fields>;
  stddev_pop?: Maybe<Marketing_Promotions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketing_Promotions_Stddev_Samp_Fields>;
  sum?: Maybe<Marketing_Promotions_Sum_Fields>;
  var_pop?: Maybe<Marketing_Promotions_Var_Pop_Fields>;
  var_samp?: Maybe<Marketing_Promotions_Var_Samp_Fields>;
  variance?: Maybe<Marketing_Promotions_Variance_Fields>;
};

/** aggregate fields of "marketing.promotions" */
export type Marketing_Promotions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Marketing_Promotions_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "marketing.promotions" */
export type Marketing_Promotions_Aggregate_Order_By = {
  avg?: Maybe<Marketing_Promotions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Marketing_Promotions_Max_Order_By>;
  min?: Maybe<Marketing_Promotions_Min_Order_By>;
  stddev?: Maybe<Marketing_Promotions_Stddev_Order_By>;
  stddev_pop?: Maybe<Marketing_Promotions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Marketing_Promotions_Stddev_Samp_Order_By>;
  sum?: Maybe<Marketing_Promotions_Sum_Order_By>;
  var_pop?: Maybe<Marketing_Promotions_Var_Pop_Order_By>;
  var_samp?: Maybe<Marketing_Promotions_Var_Samp_Order_By>;
  variance?: Maybe<Marketing_Promotions_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Marketing_Promotions_Append_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "marketing.promotions" */
export type Marketing_Promotions_Arr_Rel_Insert_Input = {
  data: Array<Marketing_Promotions_Insert_Input>;
  on_conflict?: Maybe<Marketing_Promotions_On_Conflict>;
};

/** aggregate avg on columns */
export type Marketing_Promotions_Avg_Fields = {
  __typename?: "marketing_promotions_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  max_count?: Maybe<Scalars["Float"]>;
  used_count?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "marketing.promotions" */
export type Marketing_Promotions_Avg_Order_By = {
  id?: Maybe<Order_By>;
  max_count?: Maybe<Order_By>;
  used_count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "marketing.promotions". All fields are combined with a logical 'AND'. */
export type Marketing_Promotions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Marketing_Promotions_Bool_Exp>>>;
  _not?: Maybe<Marketing_Promotions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Marketing_Promotions_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  end_date?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  max_count?: Maybe<Int_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  start_date?: Maybe<Date_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  used_count?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "marketing.promotions" */
export enum Marketing_Promotions_Constraint {
  /** unique or primary key constraint */
  PromotionsPkey = "promotions_pkey"
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Marketing_Promotions_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Marketing_Promotions_Delete_Elem_Input = {
  meta?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Marketing_Promotions_Delete_Key_Input = {
  meta?: Maybe<Scalars["String"]>;
};

/** input type for incrementing integer columne in table "marketing.promotions" */
export type Marketing_Promotions_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
  max_count?: Maybe<Scalars["Int"]>;
  used_count?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "marketing.promotions" */
export type Marketing_Promotions_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  end_date?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["bigint"]>;
  max_count?: Maybe<Scalars["Int"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  start_date?: Maybe<Scalars["date"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  used_count?: Maybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Marketing_Promotions_Max_Fields = {
  __typename?: "marketing_promotions_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  end_date?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["bigint"]>;
  max_count?: Maybe<Scalars["Int"]>;
  start_date?: Maybe<Scalars["date"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  used_count?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "marketing.promotions" */
export type Marketing_Promotions_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_count?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  used_count?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Marketing_Promotions_Min_Fields = {
  __typename?: "marketing_promotions_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  end_date?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["bigint"]>;
  max_count?: Maybe<Scalars["Int"]>;
  start_date?: Maybe<Scalars["date"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  used_count?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "marketing.promotions" */
export type Marketing_Promotions_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_count?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  used_count?: Maybe<Order_By>;
};

/** response of any mutation on the table "marketing.promotions" */
export type Marketing_Promotions_Mutation_Response = {
  __typename?: "marketing_promotions_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Marketing_Promotions>;
};

/** input type for inserting object relation for remote table "marketing.promotions" */
export type Marketing_Promotions_Obj_Rel_Insert_Input = {
  data: Marketing_Promotions_Insert_Input;
  on_conflict?: Maybe<Marketing_Promotions_On_Conflict>;
};

/** on conflict condition type for table "marketing.promotions" */
export type Marketing_Promotions_On_Conflict = {
  constraint: Marketing_Promotions_Constraint;
  update_columns: Array<Marketing_Promotions_Update_Column>;
  where?: Maybe<Marketing_Promotions_Bool_Exp>;
};

/** ordering options when selecting data from "marketing.promotions" */
export type Marketing_Promotions_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  end_date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  max_count?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  used_count?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Marketing_Promotions_Prepend_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "marketing.promotions" */
export enum Marketing_Promotions_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  EndDate = "end_date",
  /** column name */
  Id = "id",
  /** column name */
  MaxCount = "max_count",
  /** column name */
  Meta = "meta",
  /** column name */
  StartDate = "start_date",
  /** column name */
  Title = "title",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UsedCount = "used_count"
}

/** input type for updating data in table "marketing.promotions" */
export type Marketing_Promotions_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  end_date?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["bigint"]>;
  max_count?: Maybe<Scalars["Int"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  start_date?: Maybe<Scalars["date"]>;
  title?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  used_count?: Maybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Marketing_Promotions_Stddev_Fields = {
  __typename?: "marketing_promotions_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  max_count?: Maybe<Scalars["Float"]>;
  used_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "marketing.promotions" */
export type Marketing_Promotions_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  max_count?: Maybe<Order_By>;
  used_count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Marketing_Promotions_Stddev_Pop_Fields = {
  __typename?: "marketing_promotions_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  max_count?: Maybe<Scalars["Float"]>;
  used_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "marketing.promotions" */
export type Marketing_Promotions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  max_count?: Maybe<Order_By>;
  used_count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Marketing_Promotions_Stddev_Samp_Fields = {
  __typename?: "marketing_promotions_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  max_count?: Maybe<Scalars["Float"]>;
  used_count?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "marketing.promotions" */
export type Marketing_Promotions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  max_count?: Maybe<Order_By>;
  used_count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Marketing_Promotions_Sum_Fields = {
  __typename?: "marketing_promotions_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
  max_count?: Maybe<Scalars["Int"]>;
  used_count?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "marketing.promotions" */
export type Marketing_Promotions_Sum_Order_By = {
  id?: Maybe<Order_By>;
  max_count?: Maybe<Order_By>;
  used_count?: Maybe<Order_By>;
};

/** update columns of table "marketing.promotions" */
export enum Marketing_Promotions_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  EndDate = "end_date",
  /** column name */
  Id = "id",
  /** column name */
  MaxCount = "max_count",
  /** column name */
  Meta = "meta",
  /** column name */
  StartDate = "start_date",
  /** column name */
  Title = "title",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UsedCount = "used_count"
}

/** aggregate var_pop on columns */
export type Marketing_Promotions_Var_Pop_Fields = {
  __typename?: "marketing_promotions_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  max_count?: Maybe<Scalars["Float"]>;
  used_count?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "marketing.promotions" */
export type Marketing_Promotions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  max_count?: Maybe<Order_By>;
  used_count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Marketing_Promotions_Var_Samp_Fields = {
  __typename?: "marketing_promotions_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  max_count?: Maybe<Scalars["Float"]>;
  used_count?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "marketing.promotions" */
export type Marketing_Promotions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  max_count?: Maybe<Order_By>;
  used_count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Marketing_Promotions_Variance_Fields = {
  __typename?: "marketing_promotions_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  max_count?: Maybe<Scalars["Float"]>;
  used_count?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "marketing.promotions" */
export type Marketing_Promotions_Variance_Order_By = {
  id?: Maybe<Order_By>;
  max_count?: Maybe<Order_By>;
  used_count?: Maybe<Order_By>;
};

/** хэрэглэгчийн хийж байгаа үйлдлүүдийн түүхийг хадгална
 *
 *
 * columns and relationships of "marketing.users_history"
 */
export type Marketing_Users_History = {
  __typename?: "marketing_users_history";
  action: Scalars["String"];
  created_at: Scalars["timestamptz"];
  id: Scalars["bigint"];
  meta?: Maybe<Scalars["jsonb"]>;
  updated_at: Scalars["timestamptz"];
  url: Scalars["String"];
  user_id?: Maybe<Scalars["String"]>;
};

/** хэрэглэгчийн хийж байгаа үйлдлүүдийн түүхийг хадгална
 *
 *
 * columns and relationships of "marketing.users_history"
 */
export type Marketing_Users_HistoryMetaArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "marketing.users_history" */
export type Marketing_Users_History_Aggregate = {
  __typename?: "marketing_users_history_aggregate";
  aggregate?: Maybe<Marketing_Users_History_Aggregate_Fields>;
  nodes: Array<Marketing_Users_History>;
};

/** aggregate fields of "marketing.users_history" */
export type Marketing_Users_History_Aggregate_Fields = {
  __typename?: "marketing_users_history_aggregate_fields";
  avg?: Maybe<Marketing_Users_History_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Marketing_Users_History_Max_Fields>;
  min?: Maybe<Marketing_Users_History_Min_Fields>;
  stddev?: Maybe<Marketing_Users_History_Stddev_Fields>;
  stddev_pop?: Maybe<Marketing_Users_History_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Marketing_Users_History_Stddev_Samp_Fields>;
  sum?: Maybe<Marketing_Users_History_Sum_Fields>;
  var_pop?: Maybe<Marketing_Users_History_Var_Pop_Fields>;
  var_samp?: Maybe<Marketing_Users_History_Var_Samp_Fields>;
  variance?: Maybe<Marketing_Users_History_Variance_Fields>;
};

/** aggregate fields of "marketing.users_history" */
export type Marketing_Users_History_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Marketing_Users_History_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "marketing.users_history" */
export type Marketing_Users_History_Aggregate_Order_By = {
  avg?: Maybe<Marketing_Users_History_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Marketing_Users_History_Max_Order_By>;
  min?: Maybe<Marketing_Users_History_Min_Order_By>;
  stddev?: Maybe<Marketing_Users_History_Stddev_Order_By>;
  stddev_pop?: Maybe<Marketing_Users_History_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Marketing_Users_History_Stddev_Samp_Order_By>;
  sum?: Maybe<Marketing_Users_History_Sum_Order_By>;
  var_pop?: Maybe<Marketing_Users_History_Var_Pop_Order_By>;
  var_samp?: Maybe<Marketing_Users_History_Var_Samp_Order_By>;
  variance?: Maybe<Marketing_Users_History_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Marketing_Users_History_Append_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "marketing.users_history" */
export type Marketing_Users_History_Arr_Rel_Insert_Input = {
  data: Array<Marketing_Users_History_Insert_Input>;
  on_conflict?: Maybe<Marketing_Users_History_On_Conflict>;
};

/** aggregate avg on columns */
export type Marketing_Users_History_Avg_Fields = {
  __typename?: "marketing_users_history_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "marketing.users_history" */
export type Marketing_Users_History_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "marketing.users_history". All fields are combined with a logical 'AND'. */
export type Marketing_Users_History_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Marketing_Users_History_Bool_Exp>>>;
  _not?: Maybe<Marketing_Users_History_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Marketing_Users_History_Bool_Exp>>>;
  action?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "marketing.users_history" */
export enum Marketing_Users_History_Constraint {
  /** unique or primary key constraint */
  UsersHistoryPkey = "users_history_pkey"
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Marketing_Users_History_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Marketing_Users_History_Delete_Elem_Input = {
  meta?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Marketing_Users_History_Delete_Key_Input = {
  meta?: Maybe<Scalars["String"]>;
};

/** input type for incrementing integer columne in table "marketing.users_history" */
export type Marketing_Users_History_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "marketing.users_history" */
export type Marketing_Users_History_Insert_Input = {
  action?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  url?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Marketing_Users_History_Max_Fields = {
  __typename?: "marketing_users_history_max_fields";
  action?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  url?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "marketing.users_history" */
export type Marketing_Users_History_Max_Order_By = {
  action?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Marketing_Users_History_Min_Fields = {
  __typename?: "marketing_users_history_min_fields";
  action?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  url?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "marketing.users_history" */
export type Marketing_Users_History_Min_Order_By = {
  action?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "marketing.users_history" */
export type Marketing_Users_History_Mutation_Response = {
  __typename?: "marketing_users_history_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Marketing_Users_History>;
};

/** input type for inserting object relation for remote table "marketing.users_history" */
export type Marketing_Users_History_Obj_Rel_Insert_Input = {
  data: Marketing_Users_History_Insert_Input;
  on_conflict?: Maybe<Marketing_Users_History_On_Conflict>;
};

/** on conflict condition type for table "marketing.users_history" */
export type Marketing_Users_History_On_Conflict = {
  constraint: Marketing_Users_History_Constraint;
  update_columns: Array<Marketing_Users_History_Update_Column>;
  where?: Maybe<Marketing_Users_History_Bool_Exp>;
};

/** ordering options when selecting data from "marketing.users_history" */
export type Marketing_Users_History_Order_By = {
  action?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Marketing_Users_History_Prepend_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "marketing.users_history" */
export enum Marketing_Users_History_Select_Column {
  /** column name */
  Action = "action",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Meta = "meta",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Url = "url",
  /** column name */
  UserId = "user_id"
}

/** input type for updating data in table "marketing.users_history" */
export type Marketing_Users_History_Set_Input = {
  action?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  url?: Maybe<Scalars["String"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Marketing_Users_History_Stddev_Fields = {
  __typename?: "marketing_users_history_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "marketing.users_history" */
export type Marketing_Users_History_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Marketing_Users_History_Stddev_Pop_Fields = {
  __typename?: "marketing_users_history_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "marketing.users_history" */
export type Marketing_Users_History_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Marketing_Users_History_Stddev_Samp_Fields = {
  __typename?: "marketing_users_history_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "marketing.users_history" */
export type Marketing_Users_History_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Marketing_Users_History_Sum_Fields = {
  __typename?: "marketing_users_history_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "marketing.users_history" */
export type Marketing_Users_History_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "marketing.users_history" */
export enum Marketing_Users_History_Update_Column {
  /** column name */
  Action = "action",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Meta = "meta",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Url = "url",
  /** column name */
  UserId = "user_id"
}

/** aggregate var_pop on columns */
export type Marketing_Users_History_Var_Pop_Fields = {
  __typename?: "marketing_users_history_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "marketing.users_history" */
export type Marketing_Users_History_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Marketing_Users_History_Var_Samp_Fields = {
  __typename?: "marketing_users_history_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "marketing.users_history" */
export type Marketing_Users_History_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Marketing_Users_History_Variance_Fields = {
  __typename?: "marketing_users_history_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "marketing.users_history" */
export type Marketing_Users_History_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "memberships" */
export type Memberships = {
  __typename?: "memberships";
  created_at: Scalars["timestamptz"];
  day?: Maybe<Scalars["Int"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description: Scalars["String"];
  id: Scalars["bigint"];
  name: Scalars["String"];
  price?: Maybe<Scalars["float8"]>;
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "memberships" */
export type Memberships_Aggregate = {
  __typename?: "memberships_aggregate";
  aggregate?: Maybe<Memberships_Aggregate_Fields>;
  nodes: Array<Memberships>;
};

/** aggregate fields of "memberships" */
export type Memberships_Aggregate_Fields = {
  __typename?: "memberships_aggregate_fields";
  avg?: Maybe<Memberships_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Memberships_Max_Fields>;
  min?: Maybe<Memberships_Min_Fields>;
  stddev?: Maybe<Memberships_Stddev_Fields>;
  stddev_pop?: Maybe<Memberships_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Memberships_Stddev_Samp_Fields>;
  sum?: Maybe<Memberships_Sum_Fields>;
  var_pop?: Maybe<Memberships_Var_Pop_Fields>;
  var_samp?: Maybe<Memberships_Var_Samp_Fields>;
  variance?: Maybe<Memberships_Variance_Fields>;
};

/** aggregate fields of "memberships" */
export type Memberships_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Memberships_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "memberships" */
export type Memberships_Aggregate_Order_By = {
  avg?: Maybe<Memberships_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Memberships_Max_Order_By>;
  min?: Maybe<Memberships_Min_Order_By>;
  stddev?: Maybe<Memberships_Stddev_Order_By>;
  stddev_pop?: Maybe<Memberships_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Memberships_Stddev_Samp_Order_By>;
  sum?: Maybe<Memberships_Sum_Order_By>;
  var_pop?: Maybe<Memberships_Var_Pop_Order_By>;
  var_samp?: Maybe<Memberships_Var_Samp_Order_By>;
  variance?: Maybe<Memberships_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "memberships" */
export type Memberships_Arr_Rel_Insert_Input = {
  data: Array<Memberships_Insert_Input>;
  on_conflict?: Maybe<Memberships_On_Conflict>;
};

/** aggregate avg on columns */
export type Memberships_Avg_Fields = {
  __typename?: "memberships_avg_fields";
  day?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "memberships" */
export type Memberships_Avg_Order_By = {
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "memberships". All fields are combined with a logical 'AND'. */
export type Memberships_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Memberships_Bool_Exp>>>;
  _not?: Maybe<Memberships_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Memberships_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  day?: Maybe<Int_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Float8_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "memberships" */
export enum Memberships_Constraint {
  /** unique or primary key constraint */
  MembershipsPkey = "memberships_pkey"
}

/** input type for incrementing integer columne in table "memberships" */
export type Memberships_Inc_Input = {
  day?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "memberships" */
export type Memberships_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  day?: Maybe<Scalars["Int"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["float8"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Memberships_Max_Fields = {
  __typename?: "memberships_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  day?: Maybe<Scalars["Int"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["float8"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "memberships" */
export type Memberships_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Memberships_Min_Fields = {
  __typename?: "memberships_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  day?: Maybe<Scalars["Int"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["float8"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "memberships" */
export type Memberships_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "memberships" */
export type Memberships_Mutation_Response = {
  __typename?: "memberships_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Memberships>;
};

/** input type for inserting object relation for remote table "memberships" */
export type Memberships_Obj_Rel_Insert_Input = {
  data: Memberships_Insert_Input;
  on_conflict?: Maybe<Memberships_On_Conflict>;
};

/** on conflict condition type for table "memberships" */
export type Memberships_On_Conflict = {
  constraint: Memberships_Constraint;
  update_columns: Array<Memberships_Update_Column>;
  where?: Maybe<Memberships_Bool_Exp>;
};

/** ordering options when selecting data from "memberships" */
export type Memberships_Order_By = {
  created_at?: Maybe<Order_By>;
  day?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "memberships" */
export enum Memberships_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Day = "day",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Price = "price",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "memberships" */
export type Memberships_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  day?: Maybe<Scalars["Int"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["float8"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Memberships_Stddev_Fields = {
  __typename?: "memberships_stddev_fields";
  day?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "memberships" */
export type Memberships_Stddev_Order_By = {
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Memberships_Stddev_Pop_Fields = {
  __typename?: "memberships_stddev_pop_fields";
  day?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "memberships" */
export type Memberships_Stddev_Pop_Order_By = {
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Memberships_Stddev_Samp_Fields = {
  __typename?: "memberships_stddev_samp_fields";
  day?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "memberships" */
export type Memberships_Stddev_Samp_Order_By = {
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Memberships_Sum_Fields = {
  __typename?: "memberships_sum_fields";
  day?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["float8"]>;
};

/** order by sum() on columns of table "memberships" */
export type Memberships_Sum_Order_By = {
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** update columns of table "memberships" */
export enum Memberships_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Day = "day",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Price = "price",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Memberships_Var_Pop_Fields = {
  __typename?: "memberships_var_pop_fields";
  day?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "memberships" */
export type Memberships_Var_Pop_Order_By = {
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Memberships_Var_Samp_Fields = {
  __typename?: "memberships_var_samp_fields";
  day?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "memberships" */
export type Memberships_Var_Samp_Order_By = {
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Memberships_Variance_Fields = {
  __typename?: "memberships_variance_fields";
  day?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "memberships" */
export type Memberships_Variance_Order_By = {
  day?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

export type Mutation = {
  __typename?: "Mutation";
  checkInvoice: InvoiceResult;
  checkOrganizationRegistration: OrganizationInfo;
  createInvoice: Invoice;
};

export type MutationCheckInvoiceArgs = {
  data: InvoiceCheckInput;
};

export type MutationCheckOrganizationRegistrationArgs = {
  registration: Scalars["String"];
};

export type MutationCreateInvoiceArgs = {
  data: InvoiceInput;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  checkInvoice: InvoiceResult;
  checkOrganizationRegistration: OrganizationInfo;
  createInvoice: Invoice;
  createPlagiarismRequest: PlagiarismRequest;
  /** delete data from the table: "author_reviews" */
  delete_author_reviews?: Maybe<Author_Reviews_Mutation_Response>;
  /** delete data from the table: "authors" */
  delete_authors?: Maybe<Authors_Mutation_Response>;
  /** delete data from the table: "bookmarks" */
  delete_bookmarks?: Maybe<Bookmarks_Mutation_Response>;
  /** delete data from the table: "content_files" */
  delete_content_files?: Maybe<Content_Files_Mutation_Response>;
  /** delete data from the table: "content_prices" */
  delete_content_prices?: Maybe<Content_Prices_Mutation_Response>;
  /** delete data from the table: "content_tocs" */
  delete_content_tocs?: Maybe<Content_Tocs_Mutation_Response>;
  /** delete data from the table: "contents" */
  delete_contents?: Maybe<Contents_Mutation_Response>;
  /** delete data from the table: "emails" */
  delete_emails?: Maybe<Emails_Mutation_Response>;
  /** delete data from the table: "files" */
  delete_files?: Maybe<Files_Mutation_Response>;
  /** delete data from the table: "map_contents_authors" */
  delete_map_contents_authors?: Maybe<Map_Contents_Authors_Mutation_Response>;
  /** delete data from the table: "map_contents_organizations" */
  delete_map_contents_organizations?: Maybe<
    Map_Contents_Organizations_Mutation_Response
  >;
  /** delete data from the table: "map_contents_packages" */
  delete_map_contents_packages?: Maybe<Map_Contents_Packages_Mutation_Response>;
  /** delete data from the table: "map_contents_tags" */
  delete_map_contents_tags?: Maybe<Map_Contents_Tags_Mutation_Response>;
  /** delete data from the table: "map_packages_files" */
  delete_map_packages_files?: Maybe<Map_Packages_Files_Mutation_Response>;
  /** delete data from the table: "map_users_contents_status" */
  delete_map_users_contents_status?: Maybe<
    Map_Users_Contents_Status_Mutation_Response
  >;
  /** delete data from the table: "map_users_files" */
  delete_map_users_files?: Maybe<Map_Users_Files_Mutation_Response>;
  /** delete data from the table: "map_users_memberships" */
  delete_map_users_memberships?: Maybe<Map_Users_Memberships_Mutation_Response>;
  /** delete data from the table: "map_users_organizations" */
  delete_map_users_organizations?: Maybe<
    Map_Users_Organizations_Mutation_Response
  >;
  /** delete data from the table: "map_users_roles" */
  delete_map_users_roles?: Maybe<Map_Users_Roles_Mutation_Response>;
  /** delete data from the table: "marketing.banners" */
  delete_marketing_banners?: Maybe<Marketing_Banners_Mutation_Response>;
  /** delete data from the table: "marketing.home_options" */
  delete_marketing_home_options?: Maybe<
    Marketing_Home_Options_Mutation_Response
  >;
  /** delete data from the table: "marketing.promotions" */
  delete_marketing_promotions?: Maybe<Marketing_Promotions_Mutation_Response>;
  /** delete data from the table: "marketing.users_history" */
  delete_marketing_users_history?: Maybe<
    Marketing_Users_History_Mutation_Response
  >;
  /** delete data from the table: "memberships" */
  delete_memberships?: Maybe<Memberships_Mutation_Response>;
  /** delete data from the table: "organizations" */
  delete_organizations?: Maybe<Organizations_Mutation_Response>;
  /** delete data from the table: "packages" */
  delete_packages?: Maybe<Packages_Mutation_Response>;
  /** delete data from the table: "payment.details" */
  delete_payment_details?: Maybe<Payment_Details_Mutation_Response>;
  /** delete data from the table: "payment.headers" */
  delete_payment_headers?: Maybe<Payment_Headers_Mutation_Response>;
  /** delete data from the table: "payment.transactions" */
  delete_payment_transactions?: Maybe<Payment_Transactions_Mutation_Response>;
  /** delete data from the table: "payment.withdraw_requests" */
  delete_payment_withdraw_requests?: Maybe<
    Payment_Withdraw_Requests_Mutation_Response
  >;
  /** delete data from the table: "plagiarism.content_texts" */
  delete_plagiarism_content_texts?: Maybe<
    Plagiarism_Content_Texts_Mutation_Response
  >;
  /** delete data from the table: "plagiarism.search_requests" */
  delete_plagiarism_search_requests?: Maybe<
    Plagiarism_Search_Requests_Mutation_Response
  >;
  /** delete data from the table: "plagiarism.search_results" */
  delete_plagiarism_search_results?: Maybe<
    Plagiarism_Search_Results_Mutation_Response
  >;
  /** delete data from the table: "reviews" */
  delete_reviews?: Maybe<Reviews_Mutation_Response>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete data from the table: "tag_options" */
  delete_tag_options?: Maybe<Tag_Options_Mutation_Response>;
  /** delete data from the table: "tag_options_tr" */
  delete_tag_options_tr?: Maybe<Tag_Options_Tr_Mutation_Response>;
  /** delete data from the table: "tag_types" */
  delete_tag_types?: Maybe<Tag_Types_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  getSignedUrl?: Maybe<Response>;
  /** insert data into the table: "author_reviews" */
  insert_author_reviews?: Maybe<Author_Reviews_Mutation_Response>;
  /** insert data into the table: "authors" */
  insert_authors?: Maybe<Authors_Mutation_Response>;
  /** insert data into the table: "bookmarks" */
  insert_bookmarks?: Maybe<Bookmarks_Mutation_Response>;
  /** insert data into the table: "content_files" */
  insert_content_files?: Maybe<Content_Files_Mutation_Response>;
  /** insert data into the table: "content_prices" */
  insert_content_prices?: Maybe<Content_Prices_Mutation_Response>;
  /** insert data into the table: "content_tocs" */
  insert_content_tocs?: Maybe<Content_Tocs_Mutation_Response>;
  /** insert data into the table: "contents" */
  insert_contents?: Maybe<Contents_Mutation_Response>;
  /** insert data into the table: "emails" */
  insert_emails?: Maybe<Emails_Mutation_Response>;
  /** insert data into the table: "files" */
  insert_files?: Maybe<Files_Mutation_Response>;
  /** insert data into the table: "map_contents_authors" */
  insert_map_contents_authors?: Maybe<Map_Contents_Authors_Mutation_Response>;
  /** insert data into the table: "map_contents_organizations" */
  insert_map_contents_organizations?: Maybe<
    Map_Contents_Organizations_Mutation_Response
  >;
  /** insert data into the table: "map_contents_packages" */
  insert_map_contents_packages?: Maybe<Map_Contents_Packages_Mutation_Response>;
  /** insert data into the table: "map_contents_tags" */
  insert_map_contents_tags?: Maybe<Map_Contents_Tags_Mutation_Response>;
  /** insert data into the table: "map_packages_files" */
  insert_map_packages_files?: Maybe<Map_Packages_Files_Mutation_Response>;
  /** insert data into the table: "map_users_contents_status" */
  insert_map_users_contents_status?: Maybe<
    Map_Users_Contents_Status_Mutation_Response
  >;
  /** insert data into the table: "map_users_files" */
  insert_map_users_files?: Maybe<Map_Users_Files_Mutation_Response>;
  /** insert data into the table: "map_users_memberships" */
  insert_map_users_memberships?: Maybe<Map_Users_Memberships_Mutation_Response>;
  /** insert data into the table: "map_users_organizations" */
  insert_map_users_organizations?: Maybe<
    Map_Users_Organizations_Mutation_Response
  >;
  /** insert data into the table: "map_users_roles" */
  insert_map_users_roles?: Maybe<Map_Users_Roles_Mutation_Response>;
  /** insert data into the table: "marketing.banners" */
  insert_marketing_banners?: Maybe<Marketing_Banners_Mutation_Response>;
  /** insert data into the table: "marketing.home_options" */
  insert_marketing_home_options?: Maybe<
    Marketing_Home_Options_Mutation_Response
  >;
  /** insert data into the table: "marketing.promotions" */
  insert_marketing_promotions?: Maybe<Marketing_Promotions_Mutation_Response>;
  /** insert data into the table: "marketing.users_history" */
  insert_marketing_users_history?: Maybe<
    Marketing_Users_History_Mutation_Response
  >;
  /** insert data into the table: "memberships" */
  insert_memberships?: Maybe<Memberships_Mutation_Response>;
  /** insert data into the table: "organizations" */
  insert_organizations?: Maybe<Organizations_Mutation_Response>;
  /** insert data into the table: "packages" */
  insert_packages?: Maybe<Packages_Mutation_Response>;
  /** insert data into the table: "payment.details" */
  insert_payment_details?: Maybe<Payment_Details_Mutation_Response>;
  /** insert data into the table: "payment.headers" */
  insert_payment_headers?: Maybe<Payment_Headers_Mutation_Response>;
  /** insert data into the table: "payment.transactions" */
  insert_payment_transactions?: Maybe<Payment_Transactions_Mutation_Response>;
  /** insert data into the table: "payment.withdraw_requests" */
  insert_payment_withdraw_requests?: Maybe<
    Payment_Withdraw_Requests_Mutation_Response
  >;
  /** insert data into the table: "plagiarism.content_texts" */
  insert_plagiarism_content_texts?: Maybe<
    Plagiarism_Content_Texts_Mutation_Response
  >;
  /** insert data into the table: "plagiarism.search_requests" */
  insert_plagiarism_search_requests?: Maybe<
    Plagiarism_Search_Requests_Mutation_Response
  >;
  /** insert data into the table: "plagiarism.search_results" */
  insert_plagiarism_search_results?: Maybe<
    Plagiarism_Search_Results_Mutation_Response
  >;
  /** insert data into the table: "reviews" */
  insert_reviews?: Maybe<Reviews_Mutation_Response>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert data into the table: "tag_options" */
  insert_tag_options?: Maybe<Tag_Options_Mutation_Response>;
  /** insert data into the table: "tag_options_tr" */
  insert_tag_options_tr?: Maybe<Tag_Options_Tr_Mutation_Response>;
  /** insert data into the table: "tag_types" */
  insert_tag_types?: Maybe<Tag_Types_Mutation_Response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** update data of the table: "author_reviews" */
  update_author_reviews?: Maybe<Author_Reviews_Mutation_Response>;
  /** update data of the table: "authors" */
  update_authors?: Maybe<Authors_Mutation_Response>;
  /** update data of the table: "bookmarks" */
  update_bookmarks?: Maybe<Bookmarks_Mutation_Response>;
  /** update data of the table: "content_files" */
  update_content_files?: Maybe<Content_Files_Mutation_Response>;
  /** update data of the table: "content_prices" */
  update_content_prices?: Maybe<Content_Prices_Mutation_Response>;
  /** update data of the table: "content_tocs" */
  update_content_tocs?: Maybe<Content_Tocs_Mutation_Response>;
  /** update data of the table: "contents" */
  update_contents?: Maybe<Contents_Mutation_Response>;
  /** update data of the table: "emails" */
  update_emails?: Maybe<Emails_Mutation_Response>;
  /** update data of the table: "files" */
  update_files?: Maybe<Files_Mutation_Response>;
  /** update data of the table: "map_contents_authors" */
  update_map_contents_authors?: Maybe<Map_Contents_Authors_Mutation_Response>;
  /** update data of the table: "map_contents_organizations" */
  update_map_contents_organizations?: Maybe<
    Map_Contents_Organizations_Mutation_Response
  >;
  /** update data of the table: "map_contents_packages" */
  update_map_contents_packages?: Maybe<Map_Contents_Packages_Mutation_Response>;
  /** update data of the table: "map_contents_tags" */
  update_map_contents_tags?: Maybe<Map_Contents_Tags_Mutation_Response>;
  /** update data of the table: "map_packages_files" */
  update_map_packages_files?: Maybe<Map_Packages_Files_Mutation_Response>;
  /** update data of the table: "map_users_contents_status" */
  update_map_users_contents_status?: Maybe<
    Map_Users_Contents_Status_Mutation_Response
  >;
  /** update data of the table: "map_users_files" */
  update_map_users_files?: Maybe<Map_Users_Files_Mutation_Response>;
  /** update data of the table: "map_users_memberships" */
  update_map_users_memberships?: Maybe<Map_Users_Memberships_Mutation_Response>;
  /** update data of the table: "map_users_organizations" */
  update_map_users_organizations?: Maybe<
    Map_Users_Organizations_Mutation_Response
  >;
  /** update data of the table: "map_users_roles" */
  update_map_users_roles?: Maybe<Map_Users_Roles_Mutation_Response>;
  /** update data of the table: "marketing.banners" */
  update_marketing_banners?: Maybe<Marketing_Banners_Mutation_Response>;
  /** update data of the table: "marketing.home_options" */
  update_marketing_home_options?: Maybe<
    Marketing_Home_Options_Mutation_Response
  >;
  /** update data of the table: "marketing.promotions" */
  update_marketing_promotions?: Maybe<Marketing_Promotions_Mutation_Response>;
  /** update data of the table: "marketing.users_history" */
  update_marketing_users_history?: Maybe<
    Marketing_Users_History_Mutation_Response
  >;
  /** update data of the table: "memberships" */
  update_memberships?: Maybe<Memberships_Mutation_Response>;
  /** update data of the table: "organizations" */
  update_organizations?: Maybe<Organizations_Mutation_Response>;
  /** update data of the table: "packages" */
  update_packages?: Maybe<Packages_Mutation_Response>;
  /** update data of the table: "payment.details" */
  update_payment_details?: Maybe<Payment_Details_Mutation_Response>;
  /** update data of the table: "payment.headers" */
  update_payment_headers?: Maybe<Payment_Headers_Mutation_Response>;
  /** update data of the table: "payment.transactions" */
  update_payment_transactions?: Maybe<Payment_Transactions_Mutation_Response>;
  /** update data of the table: "payment.withdraw_requests" */
  update_payment_withdraw_requests?: Maybe<
    Payment_Withdraw_Requests_Mutation_Response
  >;
  /** update data of the table: "plagiarism.content_texts" */
  update_plagiarism_content_texts?: Maybe<
    Plagiarism_Content_Texts_Mutation_Response
  >;
  /** update data of the table: "plagiarism.search_requests" */
  update_plagiarism_search_requests?: Maybe<
    Plagiarism_Search_Requests_Mutation_Response
  >;
  /** update data of the table: "plagiarism.search_results" */
  update_plagiarism_search_results?: Maybe<
    Plagiarism_Search_Results_Mutation_Response
  >;
  /** update data of the table: "reviews" */
  update_reviews?: Maybe<Reviews_Mutation_Response>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update data of the table: "tag_options" */
  update_tag_options?: Maybe<Tag_Options_Mutation_Response>;
  /** update data of the table: "tag_options_tr" */
  update_tag_options_tr?: Maybe<Tag_Options_Tr_Mutation_Response>;
  /** update data of the table: "tag_types" */
  update_tag_types?: Maybe<Tag_Types_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
};

/** mutation root */
export type Mutation_RootCheckInvoiceArgs = {
  data: InvoiceCheckInput;
};

/** mutation root */
export type Mutation_RootCheckOrganizationRegistrationArgs = {
  registration: Scalars["String"];
};

/** mutation root */
export type Mutation_RootCreateInvoiceArgs = {
  data: InvoiceInput;
};

/** mutation root */
export type Mutation_RootCreatePlagiarismRequestArgs = {
  category?: Maybe<Scalars["String"]>;
  text: Scalars["String"];
  type: RequestType;
  user_id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDelete_Author_ReviewsArgs = {
  where: Author_Reviews_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_AuthorsArgs = {
  where: Authors_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_BookmarksArgs = {
  where: Bookmarks_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Content_FilesArgs = {
  where: Content_Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Content_PricesArgs = {
  where: Content_Prices_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Content_TocsArgs = {
  where: Content_Tocs_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ContentsArgs = {
  where: Contents_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_EmailsArgs = {
  where: Emails_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_FilesArgs = {
  where: Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Map_Contents_AuthorsArgs = {
  where: Map_Contents_Authors_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Map_Contents_OrganizationsArgs = {
  where: Map_Contents_Organizations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Map_Contents_PackagesArgs = {
  where: Map_Contents_Packages_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Map_Contents_TagsArgs = {
  where: Map_Contents_Tags_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Map_Packages_FilesArgs = {
  where: Map_Packages_Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Map_Users_Contents_StatusArgs = {
  where: Map_Users_Contents_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Map_Users_FilesArgs = {
  where: Map_Users_Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Map_Users_MembershipsArgs = {
  where: Map_Users_Memberships_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Map_Users_OrganizationsArgs = {
  where: Map_Users_Organizations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Map_Users_RolesArgs = {
  where: Map_Users_Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Marketing_BannersArgs = {
  where: Marketing_Banners_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Marketing_Home_OptionsArgs = {
  where: Marketing_Home_Options_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Marketing_PromotionsArgs = {
  where: Marketing_Promotions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Marketing_Users_HistoryArgs = {
  where: Marketing_Users_History_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_MembershipsArgs = {
  where: Memberships_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_OrganizationsArgs = {
  where: Organizations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_PackagesArgs = {
  where: Packages_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Payment_DetailsArgs = {
  where: Payment_Details_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Payment_HeadersArgs = {
  where: Payment_Headers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Payment_TransactionsArgs = {
  where: Payment_Transactions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Payment_Withdraw_RequestsArgs = {
  where: Payment_Withdraw_Requests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Plagiarism_Content_TextsArgs = {
  where: Plagiarism_Content_Texts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Plagiarism_Search_RequestsArgs = {
  where: Plagiarism_Search_Requests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Plagiarism_Search_ResultsArgs = {
  where: Plagiarism_Search_Results_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_ReviewsArgs = {
  where: Reviews_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tag_OptionsArgs = {
  where: Tag_Options_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tag_Options_TrArgs = {
  where: Tag_Options_Tr_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Tag_TypesArgs = {
  where: Tag_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootGetSignedUrlArgs = {
  is_public?: Maybe<Scalars["Boolean"]>;
  name: Scalars["String"];
  path?: Maybe<Scalars["String"]>;
};

/** mutation root */
export type Mutation_RootInsert_Author_ReviewsArgs = {
  objects: Array<Author_Reviews_Insert_Input>;
  on_conflict?: Maybe<Author_Reviews_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AuthorsArgs = {
  objects: Array<Authors_Insert_Input>;
  on_conflict?: Maybe<Authors_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_BookmarksArgs = {
  objects: Array<Bookmarks_Insert_Input>;
  on_conflict?: Maybe<Bookmarks_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Content_FilesArgs = {
  objects: Array<Content_Files_Insert_Input>;
  on_conflict?: Maybe<Content_Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Content_PricesArgs = {
  objects: Array<Content_Prices_Insert_Input>;
  on_conflict?: Maybe<Content_Prices_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Content_TocsArgs = {
  objects: Array<Content_Tocs_Insert_Input>;
  on_conflict?: Maybe<Content_Tocs_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ContentsArgs = {
  objects: Array<Contents_Insert_Input>;
  on_conflict?: Maybe<Contents_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_EmailsArgs = {
  objects: Array<Emails_Insert_Input>;
  on_conflict?: Maybe<Emails_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_FilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: Maybe<Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Map_Contents_AuthorsArgs = {
  objects: Array<Map_Contents_Authors_Insert_Input>;
  on_conflict?: Maybe<Map_Contents_Authors_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Map_Contents_OrganizationsArgs = {
  objects: Array<Map_Contents_Organizations_Insert_Input>;
  on_conflict?: Maybe<Map_Contents_Organizations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Map_Contents_PackagesArgs = {
  objects: Array<Map_Contents_Packages_Insert_Input>;
  on_conflict?: Maybe<Map_Contents_Packages_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Map_Contents_TagsArgs = {
  objects: Array<Map_Contents_Tags_Insert_Input>;
  on_conflict?: Maybe<Map_Contents_Tags_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Map_Packages_FilesArgs = {
  objects: Array<Map_Packages_Files_Insert_Input>;
  on_conflict?: Maybe<Map_Packages_Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Map_Users_Contents_StatusArgs = {
  objects: Array<Map_Users_Contents_Status_Insert_Input>;
  on_conflict?: Maybe<Map_Users_Contents_Status_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Map_Users_FilesArgs = {
  objects: Array<Map_Users_Files_Insert_Input>;
  on_conflict?: Maybe<Map_Users_Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Map_Users_MembershipsArgs = {
  objects: Array<Map_Users_Memberships_Insert_Input>;
  on_conflict?: Maybe<Map_Users_Memberships_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Map_Users_OrganizationsArgs = {
  objects: Array<Map_Users_Organizations_Insert_Input>;
  on_conflict?: Maybe<Map_Users_Organizations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Map_Users_RolesArgs = {
  objects: Array<Map_Users_Roles_Insert_Input>;
  on_conflict?: Maybe<Map_Users_Roles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Marketing_BannersArgs = {
  objects: Array<Marketing_Banners_Insert_Input>;
  on_conflict?: Maybe<Marketing_Banners_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Marketing_Home_OptionsArgs = {
  objects: Array<Marketing_Home_Options_Insert_Input>;
  on_conflict?: Maybe<Marketing_Home_Options_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Marketing_PromotionsArgs = {
  objects: Array<Marketing_Promotions_Insert_Input>;
  on_conflict?: Maybe<Marketing_Promotions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Marketing_Users_HistoryArgs = {
  objects: Array<Marketing_Users_History_Insert_Input>;
  on_conflict?: Maybe<Marketing_Users_History_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MembershipsArgs = {
  objects: Array<Memberships_Insert_Input>;
  on_conflict?: Maybe<Memberships_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_OrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PackagesArgs = {
  objects: Array<Packages_Insert_Input>;
  on_conflict?: Maybe<Packages_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Payment_DetailsArgs = {
  objects: Array<Payment_Details_Insert_Input>;
  on_conflict?: Maybe<Payment_Details_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Payment_HeadersArgs = {
  objects: Array<Payment_Headers_Insert_Input>;
  on_conflict?: Maybe<Payment_Headers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Payment_TransactionsArgs = {
  objects: Array<Payment_Transactions_Insert_Input>;
  on_conflict?: Maybe<Payment_Transactions_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Payment_Withdraw_RequestsArgs = {
  objects: Array<Payment_Withdraw_Requests_Insert_Input>;
  on_conflict?: Maybe<Payment_Withdraw_Requests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Plagiarism_Content_TextsArgs = {
  objects: Array<Plagiarism_Content_Texts_Insert_Input>;
  on_conflict?: Maybe<Plagiarism_Content_Texts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Plagiarism_Search_RequestsArgs = {
  objects: Array<Plagiarism_Search_Requests_Insert_Input>;
  on_conflict?: Maybe<Plagiarism_Search_Requests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Plagiarism_Search_ResultsArgs = {
  objects: Array<Plagiarism_Search_Results_Insert_Input>;
  on_conflict?: Maybe<Plagiarism_Search_Results_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ReviewsArgs = {
  objects: Array<Reviews_Insert_Input>;
  on_conflict?: Maybe<Reviews_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tag_OptionsArgs = {
  objects: Array<Tag_Options_Insert_Input>;
  on_conflict?: Maybe<Tag_Options_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tag_Options_TrArgs = {
  objects: Array<Tag_Options_Tr_Insert_Input>;
  on_conflict?: Maybe<Tag_Options_Tr_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Tag_TypesArgs = {
  objects: Array<Tag_Types_Insert_Input>;
  on_conflict?: Maybe<Tag_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Author_ReviewsArgs = {
  _inc?: Maybe<Author_Reviews_Inc_Input>;
  _set?: Maybe<Author_Reviews_Set_Input>;
  where: Author_Reviews_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_AuthorsArgs = {
  _inc?: Maybe<Authors_Inc_Input>;
  _set?: Maybe<Authors_Set_Input>;
  where: Authors_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_BookmarksArgs = {
  _inc?: Maybe<Bookmarks_Inc_Input>;
  _set?: Maybe<Bookmarks_Set_Input>;
  where: Bookmarks_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Content_FilesArgs = {
  _inc?: Maybe<Content_Files_Inc_Input>;
  _set?: Maybe<Content_Files_Set_Input>;
  where: Content_Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Content_PricesArgs = {
  _inc?: Maybe<Content_Prices_Inc_Input>;
  _set?: Maybe<Content_Prices_Set_Input>;
  where: Content_Prices_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Content_TocsArgs = {
  _inc?: Maybe<Content_Tocs_Inc_Input>;
  _set?: Maybe<Content_Tocs_Set_Input>;
  where: Content_Tocs_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ContentsArgs = {
  _append?: Maybe<Contents_Append_Input>;
  _delete_at_path?: Maybe<Contents_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Contents_Delete_Elem_Input>;
  _delete_key?: Maybe<Contents_Delete_Key_Input>;
  _inc?: Maybe<Contents_Inc_Input>;
  _prepend?: Maybe<Contents_Prepend_Input>;
  _set?: Maybe<Contents_Set_Input>;
  where: Contents_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_EmailsArgs = {
  _append?: Maybe<Emails_Append_Input>;
  _delete_at_path?: Maybe<Emails_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Emails_Delete_Elem_Input>;
  _delete_key?: Maybe<Emails_Delete_Key_Input>;
  _inc?: Maybe<Emails_Inc_Input>;
  _prepend?: Maybe<Emails_Prepend_Input>;
  _set?: Maybe<Emails_Set_Input>;
  where: Emails_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_FilesArgs = {
  _set?: Maybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Map_Contents_AuthorsArgs = {
  _inc?: Maybe<Map_Contents_Authors_Inc_Input>;
  _set?: Maybe<Map_Contents_Authors_Set_Input>;
  where: Map_Contents_Authors_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Map_Contents_OrganizationsArgs = {
  _inc?: Maybe<Map_Contents_Organizations_Inc_Input>;
  _set?: Maybe<Map_Contents_Organizations_Set_Input>;
  where: Map_Contents_Organizations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Map_Contents_PackagesArgs = {
  _inc?: Maybe<Map_Contents_Packages_Inc_Input>;
  _set?: Maybe<Map_Contents_Packages_Set_Input>;
  where: Map_Contents_Packages_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Map_Contents_TagsArgs = {
  _inc?: Maybe<Map_Contents_Tags_Inc_Input>;
  _set?: Maybe<Map_Contents_Tags_Set_Input>;
  where: Map_Contents_Tags_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Map_Packages_FilesArgs = {
  _inc?: Maybe<Map_Packages_Files_Inc_Input>;
  _set?: Maybe<Map_Packages_Files_Set_Input>;
  where: Map_Packages_Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Map_Users_Contents_StatusArgs = {
  _inc?: Maybe<Map_Users_Contents_Status_Inc_Input>;
  _set?: Maybe<Map_Users_Contents_Status_Set_Input>;
  where: Map_Users_Contents_Status_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Map_Users_FilesArgs = {
  _inc?: Maybe<Map_Users_Files_Inc_Input>;
  _set?: Maybe<Map_Users_Files_Set_Input>;
  where: Map_Users_Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Map_Users_MembershipsArgs = {
  _inc?: Maybe<Map_Users_Memberships_Inc_Input>;
  _set?: Maybe<Map_Users_Memberships_Set_Input>;
  where: Map_Users_Memberships_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Map_Users_OrganizationsArgs = {
  _inc?: Maybe<Map_Users_Organizations_Inc_Input>;
  _set?: Maybe<Map_Users_Organizations_Set_Input>;
  where: Map_Users_Organizations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Map_Users_RolesArgs = {
  _inc?: Maybe<Map_Users_Roles_Inc_Input>;
  _set?: Maybe<Map_Users_Roles_Set_Input>;
  where: Map_Users_Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Marketing_BannersArgs = {
  _inc?: Maybe<Marketing_Banners_Inc_Input>;
  _set?: Maybe<Marketing_Banners_Set_Input>;
  where: Marketing_Banners_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Marketing_Home_OptionsArgs = {
  _append?: Maybe<Marketing_Home_Options_Append_Input>;
  _delete_at_path?: Maybe<Marketing_Home_Options_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Marketing_Home_Options_Delete_Elem_Input>;
  _delete_key?: Maybe<Marketing_Home_Options_Delete_Key_Input>;
  _inc?: Maybe<Marketing_Home_Options_Inc_Input>;
  _prepend?: Maybe<Marketing_Home_Options_Prepend_Input>;
  _set?: Maybe<Marketing_Home_Options_Set_Input>;
  where: Marketing_Home_Options_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Marketing_PromotionsArgs = {
  _append?: Maybe<Marketing_Promotions_Append_Input>;
  _delete_at_path?: Maybe<Marketing_Promotions_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Marketing_Promotions_Delete_Elem_Input>;
  _delete_key?: Maybe<Marketing_Promotions_Delete_Key_Input>;
  _inc?: Maybe<Marketing_Promotions_Inc_Input>;
  _prepend?: Maybe<Marketing_Promotions_Prepend_Input>;
  _set?: Maybe<Marketing_Promotions_Set_Input>;
  where: Marketing_Promotions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Marketing_Users_HistoryArgs = {
  _append?: Maybe<Marketing_Users_History_Append_Input>;
  _delete_at_path?: Maybe<Marketing_Users_History_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Marketing_Users_History_Delete_Elem_Input>;
  _delete_key?: Maybe<Marketing_Users_History_Delete_Key_Input>;
  _inc?: Maybe<Marketing_Users_History_Inc_Input>;
  _prepend?: Maybe<Marketing_Users_History_Prepend_Input>;
  _set?: Maybe<Marketing_Users_History_Set_Input>;
  where: Marketing_Users_History_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_MembershipsArgs = {
  _inc?: Maybe<Memberships_Inc_Input>;
  _set?: Maybe<Memberships_Set_Input>;
  where: Memberships_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_OrganizationsArgs = {
  _inc?: Maybe<Organizations_Inc_Input>;
  _set?: Maybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_PackagesArgs = {
  _append?: Maybe<Packages_Append_Input>;
  _delete_at_path?: Maybe<Packages_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Packages_Delete_Elem_Input>;
  _delete_key?: Maybe<Packages_Delete_Key_Input>;
  _inc?: Maybe<Packages_Inc_Input>;
  _prepend?: Maybe<Packages_Prepend_Input>;
  _set?: Maybe<Packages_Set_Input>;
  where: Packages_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Payment_DetailsArgs = {
  _inc?: Maybe<Payment_Details_Inc_Input>;
  _set?: Maybe<Payment_Details_Set_Input>;
  where: Payment_Details_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Payment_HeadersArgs = {
  _inc?: Maybe<Payment_Headers_Inc_Input>;
  _set?: Maybe<Payment_Headers_Set_Input>;
  where: Payment_Headers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Payment_TransactionsArgs = {
  _append?: Maybe<Payment_Transactions_Append_Input>;
  _delete_at_path?: Maybe<Payment_Transactions_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Payment_Transactions_Delete_Elem_Input>;
  _delete_key?: Maybe<Payment_Transactions_Delete_Key_Input>;
  _inc?: Maybe<Payment_Transactions_Inc_Input>;
  _prepend?: Maybe<Payment_Transactions_Prepend_Input>;
  _set?: Maybe<Payment_Transactions_Set_Input>;
  where: Payment_Transactions_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Payment_Withdraw_RequestsArgs = {
  _inc?: Maybe<Payment_Withdraw_Requests_Inc_Input>;
  _set?: Maybe<Payment_Withdraw_Requests_Set_Input>;
  where: Payment_Withdraw_Requests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Plagiarism_Content_TextsArgs = {
  _append?: Maybe<Plagiarism_Content_Texts_Append_Input>;
  _delete_at_path?: Maybe<Plagiarism_Content_Texts_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Plagiarism_Content_Texts_Delete_Elem_Input>;
  _delete_key?: Maybe<Plagiarism_Content_Texts_Delete_Key_Input>;
  _inc?: Maybe<Plagiarism_Content_Texts_Inc_Input>;
  _prepend?: Maybe<Plagiarism_Content_Texts_Prepend_Input>;
  _set?: Maybe<Plagiarism_Content_Texts_Set_Input>;
  where: Plagiarism_Content_Texts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Plagiarism_Search_RequestsArgs = {
  _inc?: Maybe<Plagiarism_Search_Requests_Inc_Input>;
  _set?: Maybe<Plagiarism_Search_Requests_Set_Input>;
  where: Plagiarism_Search_Requests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Plagiarism_Search_ResultsArgs = {
  _inc?: Maybe<Plagiarism_Search_Results_Inc_Input>;
  _set?: Maybe<Plagiarism_Search_Results_Set_Input>;
  where: Plagiarism_Search_Results_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_ReviewsArgs = {
  _inc?: Maybe<Reviews_Inc_Input>;
  _set?: Maybe<Reviews_Set_Input>;
  where: Reviews_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _inc?: Maybe<Roles_Inc_Input>;
  _set?: Maybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Tag_OptionsArgs = {
  _inc?: Maybe<Tag_Options_Inc_Input>;
  _set?: Maybe<Tag_Options_Set_Input>;
  where: Tag_Options_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Tag_Options_TrArgs = {
  _inc?: Maybe<Tag_Options_Tr_Inc_Input>;
  _set?: Maybe<Tag_Options_Tr_Set_Input>;
  where: Tag_Options_Tr_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Tag_TypesArgs = {
  _inc?: Maybe<Tag_Types_Inc_Input>;
  _set?: Maybe<Tag_Types_Set_Input>;
  where: Tag_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _append?: Maybe<Users_Append_Input>;
  _delete_at_path?: Maybe<Users_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Users_Delete_Elem_Input>;
  _delete_key?: Maybe<Users_Delete_Key_Input>;
  _prepend?: Maybe<Users_Prepend_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars["numeric"]>;
  _gt?: Maybe<Scalars["numeric"]>;
  _gte?: Maybe<Scalars["numeric"]>;
  _in?: Maybe<Array<Scalars["numeric"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["numeric"]>;
  _lte?: Maybe<Scalars["numeric"]>;
  _neq?: Maybe<Scalars["numeric"]>;
  _nin?: Maybe<Array<Scalars["numeric"]>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = "asc",
  /** in the ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in the ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in the descending order, nulls first */
  Desc = "desc",
  /** in the descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in the descending order, nulls last */
  DescNullsLast = "desc_nulls_last"
}

export type OrderBy = {
  average_rate?: Maybe<OrderDirection>;
  created_at?: Maybe<OrderDirection>;
  price?: Maybe<OrderDirection>;
  published_at?: Maybe<OrderDirection>;
  views?: Maybe<OrderDirection>;
};

export enum OrderDirection {
  Asc = "asc",
  Desc = "desc"
}

export type OrganizationInfo = {
  __typename?: "OrganizationInfo";
  citypayer?: Maybe<Scalars["Boolean"]>;
  found: Scalars["Boolean"];
  name: Scalars["String"];
  receiptFound?: Maybe<Scalars["Boolean"]>;
  vatpayer: Scalars["Boolean"];
  vatpayerRegisteredDate?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "organizations" */
export type Organizations = {
  __typename?: "organizations";
  /** Дансны мэдээлэл - Банк, Дансны дугаар, Хүлээн авагчийн нэр */
  account_info?: Maybe<Scalars["String"]>;
  /** An object relationship */
  avatar?: Maybe<Files>;
  avatar_id?: Maybe<Scalars["String"]>;
  /** An array relationship */
  contents_connection: Array<Map_Contents_Organizations>;
  /** An aggregated array relationship */
  contents_connection_aggregate: Map_Contents_Organizations_Aggregate;
  contract_no?: Maybe<Scalars["String"]>;
  created_at: Scalars["timestamptz"];
  created_user_id?: Maybe<Scalars["String"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description: Scalars["String"];
  email?: Maybe<Scalars["String"]>;
  id: Scalars["bigint"];
  is_active: Scalars["Boolean"];
  long_description?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  phone?: Maybe<Scalars["String"]>;
  registration?: Maybe<Scalars["String"]>;
  type: Scalars["String"];
  updated_at: Scalars["timestamptz"];
  /** An array relationship */
  users_connection: Array<Map_Users_Organizations>;
  /** An aggregated array relationship */
  users_connection_aggregate: Map_Users_Organizations_Aggregate;
};

/** columns and relationships of "organizations" */
export type OrganizationsContents_ConnectionArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Organizations_Order_By>>;
  where?: Maybe<Map_Contents_Organizations_Bool_Exp>;
};

/** columns and relationships of "organizations" */
export type OrganizationsContents_Connection_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Organizations_Order_By>>;
  where?: Maybe<Map_Contents_Organizations_Bool_Exp>;
};

/** columns and relationships of "organizations" */
export type OrganizationsUsers_ConnectionArgs = {
  distinct_on?: Maybe<Array<Map_Users_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Organizations_Order_By>>;
  where?: Maybe<Map_Users_Organizations_Bool_Exp>;
};

/** columns and relationships of "organizations" */
export type OrganizationsUsers_Connection_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Organizations_Order_By>>;
  where?: Maybe<Map_Users_Organizations_Bool_Exp>;
};

/** aggregated selection of "organizations" */
export type Organizations_Aggregate = {
  __typename?: "organizations_aggregate";
  aggregate?: Maybe<Organizations_Aggregate_Fields>;
  nodes: Array<Organizations>;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_Fields = {
  __typename?: "organizations_aggregate_fields";
  avg?: Maybe<Organizations_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Organizations_Max_Fields>;
  min?: Maybe<Organizations_Min_Fields>;
  stddev?: Maybe<Organizations_Stddev_Fields>;
  stddev_pop?: Maybe<Organizations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organizations_Stddev_Samp_Fields>;
  sum?: Maybe<Organizations_Sum_Fields>;
  var_pop?: Maybe<Organizations_Var_Pop_Fields>;
  var_samp?: Maybe<Organizations_Var_Samp_Fields>;
  variance?: Maybe<Organizations_Variance_Fields>;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Organizations_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "organizations" */
export type Organizations_Aggregate_Order_By = {
  avg?: Maybe<Organizations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Organizations_Max_Order_By>;
  min?: Maybe<Organizations_Min_Order_By>;
  stddev?: Maybe<Organizations_Stddev_Order_By>;
  stddev_pop?: Maybe<Organizations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Organizations_Stddev_Samp_Order_By>;
  sum?: Maybe<Organizations_Sum_Order_By>;
  var_pop?: Maybe<Organizations_Var_Pop_Order_By>;
  var_samp?: Maybe<Organizations_Var_Samp_Order_By>;
  variance?: Maybe<Organizations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "organizations" */
export type Organizations_Arr_Rel_Insert_Input = {
  data: Array<Organizations_Insert_Input>;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};

/** aggregate avg on columns */
export type Organizations_Avg_Fields = {
  __typename?: "organizations_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "organizations" */
export type Organizations_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Organizations_Bool_Exp>>>;
  _not?: Maybe<Organizations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Organizations_Bool_Exp>>>;
  account_info?: Maybe<String_Comparison_Exp>;
  avatar?: Maybe<Files_Bool_Exp>;
  avatar_id?: Maybe<String_Comparison_Exp>;
  contents_connection?: Maybe<Map_Contents_Organizations_Bool_Exp>;
  contract_no?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_user_id?: Maybe<String_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  long_description?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  registration?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users_connection?: Maybe<Map_Users_Organizations_Bool_Exp>;
};

/** unique or primary key constraints on table "organizations" */
export enum Organizations_Constraint {
  /** unique or primary key constraint */
  OrganizationsPkey = "organizations_pkey"
}

/** input type for incrementing integer columne in table "organizations" */
export type Organizations_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "organizations" */
export type Organizations_Insert_Input = {
  account_info?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Files_Obj_Rel_Insert_Input>;
  avatar_id?: Maybe<Scalars["String"]>;
  contents_connection?: Maybe<Map_Contents_Organizations_Arr_Rel_Insert_Input>;
  contract_no?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_user_id?: Maybe<Scalars["String"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
  long_description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  registration?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  users_connection?: Maybe<Map_Users_Organizations_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Organizations_Max_Fields = {
  __typename?: "organizations_max_fields";
  account_info?: Maybe<Scalars["String"]>;
  avatar_id?: Maybe<Scalars["String"]>;
  contract_no?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_user_id?: Maybe<Scalars["String"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  long_description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  registration?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "organizations" */
export type Organizations_Max_Order_By = {
  account_info?: Maybe<Order_By>;
  avatar_id?: Maybe<Order_By>;
  contract_no?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_user_id?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  long_description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  registration?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Organizations_Min_Fields = {
  __typename?: "organizations_min_fields";
  account_info?: Maybe<Scalars["String"]>;
  avatar_id?: Maybe<Scalars["String"]>;
  contract_no?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_user_id?: Maybe<Scalars["String"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  long_description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  registration?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "organizations" */
export type Organizations_Min_Order_By = {
  account_info?: Maybe<Order_By>;
  avatar_id?: Maybe<Order_By>;
  contract_no?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_user_id?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  long_description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  registration?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "organizations" */
export type Organizations_Mutation_Response = {
  __typename?: "organizations_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Organizations>;
};

/** input type for inserting object relation for remote table "organizations" */
export type Organizations_Obj_Rel_Insert_Input = {
  data: Organizations_Insert_Input;
  on_conflict?: Maybe<Organizations_On_Conflict>;
};

/** on conflict condition type for table "organizations" */
export type Organizations_On_Conflict = {
  constraint: Organizations_Constraint;
  update_columns: Array<Organizations_Update_Column>;
  where?: Maybe<Organizations_Bool_Exp>;
};

/** ordering options when selecting data from "organizations" */
export type Organizations_Order_By = {
  account_info?: Maybe<Order_By>;
  avatar?: Maybe<Files_Order_By>;
  avatar_id?: Maybe<Order_By>;
  contents_connection_aggregate?: Maybe<
    Map_Contents_Organizations_Aggregate_Order_By
  >;
  contract_no?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_user_id?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_active?: Maybe<Order_By>;
  long_description?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  registration?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_connection_aggregate?: Maybe<
    Map_Users_Organizations_Aggregate_Order_By
  >;
};

/** select columns of table "organizations" */
export enum Organizations_Select_Column {
  /** column name */
  AccountInfo = "account_info",
  /** column name */
  AvatarId = "avatar_id",
  /** column name */
  ContractNo = "contract_no",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedUserId = "created_user_id",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  IsActive = "is_active",
  /** column name */
  LongDescription = "long_description",
  /** column name */
  Name = "name",
  /** column name */
  Phone = "phone",
  /** column name */
  Registration = "registration",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "organizations" */
export type Organizations_Set_Input = {
  account_info?: Maybe<Scalars["String"]>;
  avatar_id?: Maybe<Scalars["String"]>;
  contract_no?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_user_id?: Maybe<Scalars["String"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
  long_description?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  registration?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Organizations_Stddev_Fields = {
  __typename?: "organizations_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "organizations" */
export type Organizations_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Organizations_Stddev_Pop_Fields = {
  __typename?: "organizations_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "organizations" */
export type Organizations_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Organizations_Stddev_Samp_Fields = {
  __typename?: "organizations_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "organizations" */
export type Organizations_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Organizations_Sum_Fields = {
  __typename?: "organizations_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "organizations" */
export type Organizations_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "organizations" */
export enum Organizations_Update_Column {
  /** column name */
  AccountInfo = "account_info",
  /** column name */
  AvatarId = "avatar_id",
  /** column name */
  ContractNo = "contract_no",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedUserId = "created_user_id",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  IsActive = "is_active",
  /** column name */
  LongDescription = "long_description",
  /** column name */
  Name = "name",
  /** column name */
  Phone = "phone",
  /** column name */
  Registration = "registration",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Organizations_Var_Pop_Fields = {
  __typename?: "organizations_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "organizations" */
export type Organizations_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Organizations_Var_Samp_Fields = {
  __typename?: "organizations_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "organizations" */
export type Organizations_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Organizations_Variance_Fields = {
  __typename?: "organizations_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "organizations" */
export type Organizations_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "packages" */
export type Packages = {
  __typename?: "packages";
  /** An array relationship */
  contents: Array<Map_Contents_Packages>;
  /** An aggregated array relationship */
  contents_aggregate: Map_Contents_Packages_Aggregate;
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description: Scalars["String"];
  expired_at?: Maybe<Scalars["date"]>;
  /** An array relationship */
  file_connection: Array<Map_Packages_Files>;
  /** An aggregated array relationship */
  file_connection_aggregate: Map_Packages_Files_Aggregate;
  id: Scalars["bigint"];
  is_active: Scalars["Boolean"];
  meta?: Maybe<Scalars["jsonb"]>;
  name: Scalars["String"];
  organization_id?: Maybe<Scalars["bigint"]>;
  price: Scalars["numeric"];
  start_date?: Maybe<Scalars["date"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at: Scalars["timestamptz"];
};

/** columns and relationships of "packages" */
export type PackagesContentsArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Packages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Packages_Order_By>>;
  where?: Maybe<Map_Contents_Packages_Bool_Exp>;
};

/** columns and relationships of "packages" */
export type PackagesContents_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Packages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Packages_Order_By>>;
  where?: Maybe<Map_Contents_Packages_Bool_Exp>;
};

/** columns and relationships of "packages" */
export type PackagesFile_ConnectionArgs = {
  distinct_on?: Maybe<Array<Map_Packages_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Packages_Files_Order_By>>;
  where?: Maybe<Map_Packages_Files_Bool_Exp>;
};

/** columns and relationships of "packages" */
export type PackagesFile_Connection_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Packages_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Packages_Files_Order_By>>;
  where?: Maybe<Map_Packages_Files_Bool_Exp>;
};

/** columns and relationships of "packages" */
export type PackagesMetaArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "packages" */
export type Packages_Aggregate = {
  __typename?: "packages_aggregate";
  aggregate?: Maybe<Packages_Aggregate_Fields>;
  nodes: Array<Packages>;
};

/** aggregate fields of "packages" */
export type Packages_Aggregate_Fields = {
  __typename?: "packages_aggregate_fields";
  avg?: Maybe<Packages_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Packages_Max_Fields>;
  min?: Maybe<Packages_Min_Fields>;
  stddev?: Maybe<Packages_Stddev_Fields>;
  stddev_pop?: Maybe<Packages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Packages_Stddev_Samp_Fields>;
  sum?: Maybe<Packages_Sum_Fields>;
  var_pop?: Maybe<Packages_Var_Pop_Fields>;
  var_samp?: Maybe<Packages_Var_Samp_Fields>;
  variance?: Maybe<Packages_Variance_Fields>;
};

/** aggregate fields of "packages" */
export type Packages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Packages_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "packages" */
export type Packages_Aggregate_Order_By = {
  avg?: Maybe<Packages_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Packages_Max_Order_By>;
  min?: Maybe<Packages_Min_Order_By>;
  stddev?: Maybe<Packages_Stddev_Order_By>;
  stddev_pop?: Maybe<Packages_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Packages_Stddev_Samp_Order_By>;
  sum?: Maybe<Packages_Sum_Order_By>;
  var_pop?: Maybe<Packages_Var_Pop_Order_By>;
  var_samp?: Maybe<Packages_Var_Samp_Order_By>;
  variance?: Maybe<Packages_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Packages_Append_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "packages" */
export type Packages_Arr_Rel_Insert_Input = {
  data: Array<Packages_Insert_Input>;
  on_conflict?: Maybe<Packages_On_Conflict>;
};

/** aggregate avg on columns */
export type Packages_Avg_Fields = {
  __typename?: "packages_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "packages" */
export type Packages_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "packages". All fields are combined with a logical 'AND'. */
export type Packages_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Packages_Bool_Exp>>>;
  _not?: Maybe<Packages_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Packages_Bool_Exp>>>;
  contents?: Maybe<Map_Contents_Packages_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  expired_at?: Maybe<Date_Comparison_Exp>;
  file_connection?: Maybe<Map_Packages_Files_Bool_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  is_active?: Maybe<Boolean_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization_id?: Maybe<Bigint_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  start_date?: Maybe<Date_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "packages" */
export enum Packages_Constraint {
  /** unique or primary key constraint */
  PackagesPkey = "packages_pkey"
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Packages_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Packages_Delete_Elem_Input = {
  meta?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Packages_Delete_Key_Input = {
  meta?: Maybe<Scalars["String"]>;
};

/** input type for incrementing integer columne in table "packages" */
export type Packages_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "packages" */
export type Packages_Insert_Input = {
  contents?: Maybe<Map_Contents_Packages_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  expired_at?: Maybe<Scalars["date"]>;
  file_connection?: Maybe<Map_Packages_Files_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars["bigint"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  start_date?: Maybe<Scalars["date"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Packages_Max_Fields = {
  __typename?: "packages_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  expired_at?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  start_date?: Maybe<Scalars["date"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "packages" */
export type Packages_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  expired_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Packages_Min_Fields = {
  __typename?: "packages_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  expired_at?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  start_date?: Maybe<Scalars["date"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "packages" */
export type Packages_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  expired_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "packages" */
export type Packages_Mutation_Response = {
  __typename?: "packages_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Packages>;
};

/** input type for inserting object relation for remote table "packages" */
export type Packages_Obj_Rel_Insert_Input = {
  data: Packages_Insert_Input;
  on_conflict?: Maybe<Packages_On_Conflict>;
};

/** on conflict condition type for table "packages" */
export type Packages_On_Conflict = {
  constraint: Packages_Constraint;
  update_columns: Array<Packages_Update_Column>;
  where?: Maybe<Packages_Bool_Exp>;
};

/** ordering options when selecting data from "packages" */
export type Packages_Order_By = {
  contents_aggregate?: Maybe<Map_Contents_Packages_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  expired_at?: Maybe<Order_By>;
  file_connection_aggregate?: Maybe<Map_Packages_Files_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  is_active?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  start_date?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Packages_Prepend_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "packages" */
export enum Packages_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  ExpiredAt = "expired_at",
  /** column name */
  Id = "id",
  /** column name */
  IsActive = "is_active",
  /** column name */
  Meta = "meta",
  /** column name */
  Name = "name",
  /** column name */
  OrganizationId = "organization_id",
  /** column name */
  Price = "price",
  /** column name */
  StartDate = "start_date",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "packages" */
export type Packages_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  expired_at?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["bigint"]>;
  is_active?: Maybe<Scalars["Boolean"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  start_date?: Maybe<Scalars["date"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Packages_Stddev_Fields = {
  __typename?: "packages_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "packages" */
export type Packages_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Packages_Stddev_Pop_Fields = {
  __typename?: "packages_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "packages" */
export type Packages_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Packages_Stddev_Samp_Fields = {
  __typename?: "packages_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "packages" */
export type Packages_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Packages_Sum_Fields = {
  __typename?: "packages_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "packages" */
export type Packages_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** update columns of table "packages" */
export enum Packages_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  ExpiredAt = "expired_at",
  /** column name */
  Id = "id",
  /** column name */
  IsActive = "is_active",
  /** column name */
  Meta = "meta",
  /** column name */
  Name = "name",
  /** column name */
  OrganizationId = "organization_id",
  /** column name */
  Price = "price",
  /** column name */
  StartDate = "start_date",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Packages_Var_Pop_Fields = {
  __typename?: "packages_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "packages" */
export type Packages_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Packages_Var_Samp_Fields = {
  __typename?: "packages_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "packages" */
export type Packages_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Packages_Variance_Fields = {
  __typename?: "packages_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "packages" */
export type Packages_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** columns and relationships of "payment.details" */
export type Payment_Details = {
  __typename?: "payment_details";
  /** An object relationship */
  content?: Maybe<Contents>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  discount: Scalars["numeric"];
  /** An object relationship */
  header: Payment_Headers;
  header_id: Scalars["bigint"];
  id: Scalars["bigint"];
  /** An object relationship */
  membership?: Maybe<Memberships>;
  membership_id?: Maybe<Scalars["bigint"]>;
  /** An object relationship */
  package?: Maybe<Packages>;
  package_id?: Maybe<Scalars["bigint"]>;
  price: Scalars["numeric"];
  qty: Scalars["numeric"];
  total: Scalars["numeric"];
  /** An object relationship */
  transaction?: Maybe<Payment_Transactions>;
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "payment.details" */
export type Payment_Details_Aggregate = {
  __typename?: "payment_details_aggregate";
  aggregate?: Maybe<Payment_Details_Aggregate_Fields>;
  nodes: Array<Payment_Details>;
};

/** aggregate fields of "payment.details" */
export type Payment_Details_Aggregate_Fields = {
  __typename?: "payment_details_aggregate_fields";
  avg?: Maybe<Payment_Details_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Payment_Details_Max_Fields>;
  min?: Maybe<Payment_Details_Min_Fields>;
  stddev?: Maybe<Payment_Details_Stddev_Fields>;
  stddev_pop?: Maybe<Payment_Details_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payment_Details_Stddev_Samp_Fields>;
  sum?: Maybe<Payment_Details_Sum_Fields>;
  var_pop?: Maybe<Payment_Details_Var_Pop_Fields>;
  var_samp?: Maybe<Payment_Details_Var_Samp_Fields>;
  variance?: Maybe<Payment_Details_Variance_Fields>;
};

/** aggregate fields of "payment.details" */
export type Payment_Details_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payment_Details_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "payment.details" */
export type Payment_Details_Aggregate_Order_By = {
  avg?: Maybe<Payment_Details_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Payment_Details_Max_Order_By>;
  min?: Maybe<Payment_Details_Min_Order_By>;
  stddev?: Maybe<Payment_Details_Stddev_Order_By>;
  stddev_pop?: Maybe<Payment_Details_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Payment_Details_Stddev_Samp_Order_By>;
  sum?: Maybe<Payment_Details_Sum_Order_By>;
  var_pop?: Maybe<Payment_Details_Var_Pop_Order_By>;
  var_samp?: Maybe<Payment_Details_Var_Samp_Order_By>;
  variance?: Maybe<Payment_Details_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "payment.details" */
export type Payment_Details_Arr_Rel_Insert_Input = {
  data: Array<Payment_Details_Insert_Input>;
  on_conflict?: Maybe<Payment_Details_On_Conflict>;
};

/** aggregate avg on columns */
export type Payment_Details_Avg_Fields = {
  __typename?: "payment_details_avg_fields";
  content_id?: Maybe<Scalars["Float"]>;
  discount?: Maybe<Scalars["Float"]>;
  header_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  membership_id?: Maybe<Scalars["Float"]>;
  package_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "payment.details" */
export type Payment_Details_Avg_Order_By = {
  content_id?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "payment.details". All fields are combined with a logical 'AND'. */
export type Payment_Details_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Payment_Details_Bool_Exp>>>;
  _not?: Maybe<Payment_Details_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Payment_Details_Bool_Exp>>>;
  content?: Maybe<Contents_Bool_Exp>;
  content_id?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  discount?: Maybe<Numeric_Comparison_Exp>;
  header?: Maybe<Payment_Headers_Bool_Exp>;
  header_id?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  membership?: Maybe<Memberships_Bool_Exp>;
  membership_id?: Maybe<Bigint_Comparison_Exp>;
  package?: Maybe<Packages_Bool_Exp>;
  package_id?: Maybe<Bigint_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  qty?: Maybe<Numeric_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
  transaction?: Maybe<Payment_Transactions_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment.details" */
export enum Payment_Details_Constraint {
  /** unique or primary key constraint */
  PaymentDetailsPkey = "payment_details_pkey"
}

/** input type for incrementing integer columne in table "payment.details" */
export type Payment_Details_Inc_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  header_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  membership_id?: Maybe<Scalars["bigint"]>;
  package_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "payment.details" */
export type Payment_Details_Insert_Input = {
  content?: Maybe<Contents_Obj_Rel_Insert_Input>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  discount?: Maybe<Scalars["numeric"]>;
  header?: Maybe<Payment_Headers_Obj_Rel_Insert_Input>;
  header_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  membership?: Maybe<Memberships_Obj_Rel_Insert_Input>;
  membership_id?: Maybe<Scalars["bigint"]>;
  package?: Maybe<Packages_Obj_Rel_Insert_Input>;
  package_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  qty?: Maybe<Scalars["numeric"]>;
  total?: Maybe<Scalars["numeric"]>;
  transaction?: Maybe<Payment_Transactions_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Payment_Details_Max_Fields = {
  __typename?: "payment_details_max_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  discount?: Maybe<Scalars["numeric"]>;
  header_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  membership_id?: Maybe<Scalars["bigint"]>;
  package_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  qty?: Maybe<Scalars["numeric"]>;
  total?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "payment.details" */
export type Payment_Details_Max_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Payment_Details_Min_Fields = {
  __typename?: "payment_details_min_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  discount?: Maybe<Scalars["numeric"]>;
  header_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  membership_id?: Maybe<Scalars["bigint"]>;
  package_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  qty?: Maybe<Scalars["numeric"]>;
  total?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "payment.details" */
export type Payment_Details_Min_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "payment.details" */
export type Payment_Details_Mutation_Response = {
  __typename?: "payment_details_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Payment_Details>;
};

/** input type for inserting object relation for remote table "payment.details" */
export type Payment_Details_Obj_Rel_Insert_Input = {
  data: Payment_Details_Insert_Input;
  on_conflict?: Maybe<Payment_Details_On_Conflict>;
};

/** on conflict condition type for table "payment.details" */
export type Payment_Details_On_Conflict = {
  constraint: Payment_Details_Constraint;
  update_columns: Array<Payment_Details_Update_Column>;
  where?: Maybe<Payment_Details_Bool_Exp>;
};

/** ordering options when selecting data from "payment.details" */
export type Payment_Details_Order_By = {
  content?: Maybe<Contents_Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  header?: Maybe<Payment_Headers_Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership?: Maybe<Memberships_Order_By>;
  membership_id?: Maybe<Order_By>;
  package?: Maybe<Packages_Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  transaction?: Maybe<Payment_Transactions_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "payment.details" */
export enum Payment_Details_Select_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Discount = "discount",
  /** column name */
  HeaderId = "header_id",
  /** column name */
  Id = "id",
  /** column name */
  MembershipId = "membership_id",
  /** column name */
  PackageId = "package_id",
  /** column name */
  Price = "price",
  /** column name */
  Qty = "qty",
  /** column name */
  Total = "total",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "payment.details" */
export type Payment_Details_Set_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  discount?: Maybe<Scalars["numeric"]>;
  header_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  membership_id?: Maybe<Scalars["bigint"]>;
  package_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  qty?: Maybe<Scalars["numeric"]>;
  total?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Payment_Details_Stddev_Fields = {
  __typename?: "payment_details_stddev_fields";
  content_id?: Maybe<Scalars["Float"]>;
  discount?: Maybe<Scalars["Float"]>;
  header_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  membership_id?: Maybe<Scalars["Float"]>;
  package_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "payment.details" */
export type Payment_Details_Stddev_Order_By = {
  content_id?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Payment_Details_Stddev_Pop_Fields = {
  __typename?: "payment_details_stddev_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  discount?: Maybe<Scalars["Float"]>;
  header_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  membership_id?: Maybe<Scalars["Float"]>;
  package_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "payment.details" */
export type Payment_Details_Stddev_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Payment_Details_Stddev_Samp_Fields = {
  __typename?: "payment_details_stddev_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  discount?: Maybe<Scalars["Float"]>;
  header_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  membership_id?: Maybe<Scalars["Float"]>;
  package_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "payment.details" */
export type Payment_Details_Stddev_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Payment_Details_Sum_Fields = {
  __typename?: "payment_details_sum_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  discount?: Maybe<Scalars["numeric"]>;
  header_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  membership_id?: Maybe<Scalars["bigint"]>;
  package_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  qty?: Maybe<Scalars["numeric"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "payment.details" */
export type Payment_Details_Sum_Order_By = {
  content_id?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** update columns of table "payment.details" */
export enum Payment_Details_Update_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Discount = "discount",
  /** column name */
  HeaderId = "header_id",
  /** column name */
  Id = "id",
  /** column name */
  MembershipId = "membership_id",
  /** column name */
  PackageId = "package_id",
  /** column name */
  Price = "price",
  /** column name */
  Qty = "qty",
  /** column name */
  Total = "total",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Payment_Details_Var_Pop_Fields = {
  __typename?: "payment_details_var_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  discount?: Maybe<Scalars["Float"]>;
  header_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  membership_id?: Maybe<Scalars["Float"]>;
  package_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "payment.details" */
export type Payment_Details_Var_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Payment_Details_Var_Samp_Fields = {
  __typename?: "payment_details_var_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  discount?: Maybe<Scalars["Float"]>;
  header_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  membership_id?: Maybe<Scalars["Float"]>;
  package_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "payment.details" */
export type Payment_Details_Var_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Payment_Details_Variance_Fields = {
  __typename?: "payment_details_variance_fields";
  content_id?: Maybe<Scalars["Float"]>;
  discount?: Maybe<Scalars["Float"]>;
  header_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  membership_id?: Maybe<Scalars["Float"]>;
  package_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "payment.details" */
export type Payment_Details_Variance_Order_By = {
  content_id?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  membership_id?: Maybe<Order_By>;
  package_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** columns and relationships of "payment.headers" */
export type Payment_Headers = {
  __typename?: "payment_headers";
  amount: Scalars["numeric"];
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  /** An array relationship */
  details: Array<Payment_Details>;
  /** An aggregated array relationship */
  details_aggregate: Payment_Details_Aggregate;
  discount: Scalars["numeric"];
  id: Scalars["bigint"];
  qty: Scalars["Int"];
  total: Scalars["numeric"];
  /** An array relationship */
  transactions: Array<Payment_Transactions>;
  /** An aggregated array relationship */
  transactions_aggregate: Payment_Transactions_Aggregate;
  updated_at: Scalars["timestamptz"];
  user_id: Scalars["String"];
};

/** columns and relationships of "payment.headers" */
export type Payment_HeadersDetailsArgs = {
  distinct_on?: Maybe<Array<Payment_Details_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Details_Order_By>>;
  where?: Maybe<Payment_Details_Bool_Exp>;
};

/** columns and relationships of "payment.headers" */
export type Payment_HeadersDetails_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Details_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Details_Order_By>>;
  where?: Maybe<Payment_Details_Bool_Exp>;
};

/** columns and relationships of "payment.headers" */
export type Payment_HeadersTransactionsArgs = {
  distinct_on?: Maybe<Array<Payment_Transactions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Transactions_Order_By>>;
  where?: Maybe<Payment_Transactions_Bool_Exp>;
};

/** columns and relationships of "payment.headers" */
export type Payment_HeadersTransactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Transactions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Transactions_Order_By>>;
  where?: Maybe<Payment_Transactions_Bool_Exp>;
};

/** aggregated selection of "payment.headers" */
export type Payment_Headers_Aggregate = {
  __typename?: "payment_headers_aggregate";
  aggregate?: Maybe<Payment_Headers_Aggregate_Fields>;
  nodes: Array<Payment_Headers>;
};

/** aggregate fields of "payment.headers" */
export type Payment_Headers_Aggregate_Fields = {
  __typename?: "payment_headers_aggregate_fields";
  avg?: Maybe<Payment_Headers_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Payment_Headers_Max_Fields>;
  min?: Maybe<Payment_Headers_Min_Fields>;
  stddev?: Maybe<Payment_Headers_Stddev_Fields>;
  stddev_pop?: Maybe<Payment_Headers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payment_Headers_Stddev_Samp_Fields>;
  sum?: Maybe<Payment_Headers_Sum_Fields>;
  var_pop?: Maybe<Payment_Headers_Var_Pop_Fields>;
  var_samp?: Maybe<Payment_Headers_Var_Samp_Fields>;
  variance?: Maybe<Payment_Headers_Variance_Fields>;
};

/** aggregate fields of "payment.headers" */
export type Payment_Headers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payment_Headers_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "payment.headers" */
export type Payment_Headers_Aggregate_Order_By = {
  avg?: Maybe<Payment_Headers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Payment_Headers_Max_Order_By>;
  min?: Maybe<Payment_Headers_Min_Order_By>;
  stddev?: Maybe<Payment_Headers_Stddev_Order_By>;
  stddev_pop?: Maybe<Payment_Headers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Payment_Headers_Stddev_Samp_Order_By>;
  sum?: Maybe<Payment_Headers_Sum_Order_By>;
  var_pop?: Maybe<Payment_Headers_Var_Pop_Order_By>;
  var_samp?: Maybe<Payment_Headers_Var_Samp_Order_By>;
  variance?: Maybe<Payment_Headers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "payment.headers" */
export type Payment_Headers_Arr_Rel_Insert_Input = {
  data: Array<Payment_Headers_Insert_Input>;
  on_conflict?: Maybe<Payment_Headers_On_Conflict>;
};

/** aggregate avg on columns */
export type Payment_Headers_Avg_Fields = {
  __typename?: "payment_headers_avg_fields";
  amount?: Maybe<Scalars["Float"]>;
  discount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "payment.headers" */
export type Payment_Headers_Avg_Order_By = {
  amount?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "payment.headers". All fields are combined with a logical 'AND'. */
export type Payment_Headers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Payment_Headers_Bool_Exp>>>;
  _not?: Maybe<Payment_Headers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Payment_Headers_Bool_Exp>>>;
  amount?: Maybe<Numeric_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  details?: Maybe<Payment_Details_Bool_Exp>;
  discount?: Maybe<Numeric_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  qty?: Maybe<Int_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
  transactions?: Maybe<Payment_Transactions_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment.headers" */
export enum Payment_Headers_Constraint {
  /** unique or primary key constraint */
  PaymentHeaderPkey = "payment_header_pkey"
}

/** input type for incrementing integer columne in table "payment.headers" */
export type Payment_Headers_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
  qty?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "payment.headers" */
export type Payment_Headers_Insert_Input = {
  amount?: Maybe<Scalars["numeric"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  details?: Maybe<Payment_Details_Arr_Rel_Insert_Input>;
  discount?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["bigint"]>;
  qty?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["numeric"]>;
  transactions?: Maybe<Payment_Transactions_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Payment_Headers_Max_Fields = {
  __typename?: "payment_headers_max_fields";
  amount?: Maybe<Scalars["numeric"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  discount?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["bigint"]>;
  qty?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "payment.headers" */
export type Payment_Headers_Max_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Payment_Headers_Min_Fields = {
  __typename?: "payment_headers_min_fields";
  amount?: Maybe<Scalars["numeric"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  discount?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["bigint"]>;
  qty?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "payment.headers" */
export type Payment_Headers_Min_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "payment.headers" */
export type Payment_Headers_Mutation_Response = {
  __typename?: "payment_headers_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Payment_Headers>;
};

/** input type for inserting object relation for remote table "payment.headers" */
export type Payment_Headers_Obj_Rel_Insert_Input = {
  data: Payment_Headers_Insert_Input;
  on_conflict?: Maybe<Payment_Headers_On_Conflict>;
};

/** on conflict condition type for table "payment.headers" */
export type Payment_Headers_On_Conflict = {
  constraint: Payment_Headers_Constraint;
  update_columns: Array<Payment_Headers_Update_Column>;
  where?: Maybe<Payment_Headers_Bool_Exp>;
};

/** ordering options when selecting data from "payment.headers" */
export type Payment_Headers_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  details_aggregate?: Maybe<Payment_Details_Aggregate_Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  transactions_aggregate?: Maybe<Payment_Transactions_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "payment.headers" */
export enum Payment_Headers_Select_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Discount = "discount",
  /** column name */
  Id = "id",
  /** column name */
  Qty = "qty",
  /** column name */
  Total = "total",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** input type for updating data in table "payment.headers" */
export type Payment_Headers_Set_Input = {
  amount?: Maybe<Scalars["numeric"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  discount?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["bigint"]>;
  qty?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Payment_Headers_Stddev_Fields = {
  __typename?: "payment_headers_stddev_fields";
  amount?: Maybe<Scalars["Float"]>;
  discount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "payment.headers" */
export type Payment_Headers_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Payment_Headers_Stddev_Pop_Fields = {
  __typename?: "payment_headers_stddev_pop_fields";
  amount?: Maybe<Scalars["Float"]>;
  discount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "payment.headers" */
export type Payment_Headers_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Payment_Headers_Stddev_Samp_Fields = {
  __typename?: "payment_headers_stddev_samp_fields";
  amount?: Maybe<Scalars["Float"]>;
  discount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "payment.headers" */
export type Payment_Headers_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Payment_Headers_Sum_Fields = {
  __typename?: "payment_headers_sum_fields";
  amount?: Maybe<Scalars["numeric"]>;
  discount?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["bigint"]>;
  qty?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "payment.headers" */
export type Payment_Headers_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** update columns of table "payment.headers" */
export enum Payment_Headers_Update_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Discount = "discount",
  /** column name */
  Id = "id",
  /** column name */
  Qty = "qty",
  /** column name */
  Total = "total",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** aggregate var_pop on columns */
export type Payment_Headers_Var_Pop_Fields = {
  __typename?: "payment_headers_var_pop_fields";
  amount?: Maybe<Scalars["Float"]>;
  discount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "payment.headers" */
export type Payment_Headers_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Payment_Headers_Var_Samp_Fields = {
  __typename?: "payment_headers_var_samp_fields";
  amount?: Maybe<Scalars["Float"]>;
  discount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "payment.headers" */
export type Payment_Headers_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Payment_Headers_Variance_Fields = {
  __typename?: "payment_headers_variance_fields";
  amount?: Maybe<Scalars["Float"]>;
  discount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "payment.headers" */
export type Payment_Headers_Variance_Order_By = {
  amount?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** columns and relationships of "payment.transactions" */
export type Payment_Transactions = {
  __typename?: "payment_transactions";
  amount: Scalars["numeric"];
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  /** An object relationship */
  header: Payment_Headers;
  header_id: Scalars["bigint"];
  id: Scalars["bigint"];
  /** qpay, lendmn medeelel, ebarimtiin resultiig hadgalah */
  meta?: Maybe<Scalars["jsonb"]>;
  /** cash, qpay, bank, lendmn ... etc */
  payment_type?: Maybe<Scalars["String"]>;
  /** pending, success, failed, cancelled */
  status: Scalars["String"];
  updated_at: Scalars["timestamptz"];
  user_id: Scalars["String"];
};

/** columns and relationships of "payment.transactions" */
export type Payment_TransactionsMetaArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "payment.transactions" */
export type Payment_Transactions_Aggregate = {
  __typename?: "payment_transactions_aggregate";
  aggregate?: Maybe<Payment_Transactions_Aggregate_Fields>;
  nodes: Array<Payment_Transactions>;
};

/** aggregate fields of "payment.transactions" */
export type Payment_Transactions_Aggregate_Fields = {
  __typename?: "payment_transactions_aggregate_fields";
  avg?: Maybe<Payment_Transactions_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Payment_Transactions_Max_Fields>;
  min?: Maybe<Payment_Transactions_Min_Fields>;
  stddev?: Maybe<Payment_Transactions_Stddev_Fields>;
  stddev_pop?: Maybe<Payment_Transactions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payment_Transactions_Stddev_Samp_Fields>;
  sum?: Maybe<Payment_Transactions_Sum_Fields>;
  var_pop?: Maybe<Payment_Transactions_Var_Pop_Fields>;
  var_samp?: Maybe<Payment_Transactions_Var_Samp_Fields>;
  variance?: Maybe<Payment_Transactions_Variance_Fields>;
};

/** aggregate fields of "payment.transactions" */
export type Payment_Transactions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payment_Transactions_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "payment.transactions" */
export type Payment_Transactions_Aggregate_Order_By = {
  avg?: Maybe<Payment_Transactions_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Payment_Transactions_Max_Order_By>;
  min?: Maybe<Payment_Transactions_Min_Order_By>;
  stddev?: Maybe<Payment_Transactions_Stddev_Order_By>;
  stddev_pop?: Maybe<Payment_Transactions_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Payment_Transactions_Stddev_Samp_Order_By>;
  sum?: Maybe<Payment_Transactions_Sum_Order_By>;
  var_pop?: Maybe<Payment_Transactions_Var_Pop_Order_By>;
  var_samp?: Maybe<Payment_Transactions_Var_Samp_Order_By>;
  variance?: Maybe<Payment_Transactions_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Payment_Transactions_Append_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "payment.transactions" */
export type Payment_Transactions_Arr_Rel_Insert_Input = {
  data: Array<Payment_Transactions_Insert_Input>;
  on_conflict?: Maybe<Payment_Transactions_On_Conflict>;
};

/** aggregate avg on columns */
export type Payment_Transactions_Avg_Fields = {
  __typename?: "payment_transactions_avg_fields";
  amount?: Maybe<Scalars["Float"]>;
  header_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "payment.transactions" */
export type Payment_Transactions_Avg_Order_By = {
  amount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "payment.transactions". All fields are combined with a logical 'AND'. */
export type Payment_Transactions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Payment_Transactions_Bool_Exp>>>;
  _not?: Maybe<Payment_Transactions_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Payment_Transactions_Bool_Exp>>>;
  amount?: Maybe<Numeric_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  header?: Maybe<Payment_Headers_Bool_Exp>;
  header_id?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  payment_type?: Maybe<String_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment.transactions" */
export enum Payment_Transactions_Constraint {
  /** unique or primary key constraint */
  TransactionsPkey = "transactions_pkey"
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Payment_Transactions_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Payment_Transactions_Delete_Elem_Input = {
  meta?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Payment_Transactions_Delete_Key_Input = {
  meta?: Maybe<Scalars["String"]>;
};

/** input type for incrementing integer columne in table "payment.transactions" */
export type Payment_Transactions_Inc_Input = {
  header_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "payment.transactions" */
export type Payment_Transactions_Insert_Input = {
  amount?: Maybe<Scalars["numeric"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  header?: Maybe<Payment_Headers_Obj_Rel_Insert_Input>;
  header_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  payment_type?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Payment_Transactions_Max_Fields = {
  __typename?: "payment_transactions_max_fields";
  amount?: Maybe<Scalars["numeric"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  header_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "payment.transactions" */
export type Payment_Transactions_Max_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Payment_Transactions_Min_Fields = {
  __typename?: "payment_transactions_min_fields";
  amount?: Maybe<Scalars["numeric"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  header_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "payment.transactions" */
export type Payment_Transactions_Min_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "payment.transactions" */
export type Payment_Transactions_Mutation_Response = {
  __typename?: "payment_transactions_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Payment_Transactions>;
};

/** input type for inserting object relation for remote table "payment.transactions" */
export type Payment_Transactions_Obj_Rel_Insert_Input = {
  data: Payment_Transactions_Insert_Input;
  on_conflict?: Maybe<Payment_Transactions_On_Conflict>;
};

/** on conflict condition type for table "payment.transactions" */
export type Payment_Transactions_On_Conflict = {
  constraint: Payment_Transactions_Constraint;
  update_columns: Array<Payment_Transactions_Update_Column>;
  where?: Maybe<Payment_Transactions_Bool_Exp>;
};

/** ordering options when selecting data from "payment.transactions" */
export type Payment_Transactions_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  header?: Maybe<Payment_Headers_Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Payment_Transactions_Prepend_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "payment.transactions" */
export enum Payment_Transactions_Select_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  HeaderId = "header_id",
  /** column name */
  Id = "id",
  /** column name */
  Meta = "meta",
  /** column name */
  PaymentType = "payment_type",
  /** column name */
  Status = "status",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** input type for updating data in table "payment.transactions" */
export type Payment_Transactions_Set_Input = {
  amount?: Maybe<Scalars["numeric"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  header_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  payment_type?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Payment_Transactions_Stddev_Fields = {
  __typename?: "payment_transactions_stddev_fields";
  amount?: Maybe<Scalars["Float"]>;
  header_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "payment.transactions" */
export type Payment_Transactions_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Payment_Transactions_Stddev_Pop_Fields = {
  __typename?: "payment_transactions_stddev_pop_fields";
  amount?: Maybe<Scalars["Float"]>;
  header_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "payment.transactions" */
export type Payment_Transactions_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Payment_Transactions_Stddev_Samp_Fields = {
  __typename?: "payment_transactions_stddev_samp_fields";
  amount?: Maybe<Scalars["Float"]>;
  header_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "payment.transactions" */
export type Payment_Transactions_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Payment_Transactions_Sum_Fields = {
  __typename?: "payment_transactions_sum_fields";
  amount?: Maybe<Scalars["numeric"]>;
  header_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "payment.transactions" */
export type Payment_Transactions_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "payment.transactions" */
export enum Payment_Transactions_Update_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  HeaderId = "header_id",
  /** column name */
  Id = "id",
  /** column name */
  Meta = "meta",
  /** column name */
  PaymentType = "payment_type",
  /** column name */
  Status = "status",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** aggregate var_pop on columns */
export type Payment_Transactions_Var_Pop_Fields = {
  __typename?: "payment_transactions_var_pop_fields";
  amount?: Maybe<Scalars["Float"]>;
  header_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "payment.transactions" */
export type Payment_Transactions_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Payment_Transactions_Var_Samp_Fields = {
  __typename?: "payment_transactions_var_samp_fields";
  amount?: Maybe<Scalars["Float"]>;
  header_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "payment.transactions" */
export type Payment_Transactions_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Payment_Transactions_Variance_Fields = {
  __typename?: "payment_transactions_variance_fields";
  amount?: Maybe<Scalars["Float"]>;
  header_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "payment.transactions" */
export type Payment_Transactions_Variance_Order_By = {
  amount?: Maybe<Order_By>;
  header_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance = {
  __typename?: "payment_vw_organizations_balance";
  account_info?: Maybe<Scalars["String"]>;
  after_vat?: Maybe<Scalars["numeric"]>;
  end_balance?: Maybe<Scalars["float8"]>;
  esan_amount?: Maybe<Scalars["numeric"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  organization_name?: Maybe<Scalars["String"]>;
  registration?: Maybe<Scalars["String"]>;
  total_amount?: Maybe<Scalars["numeric"]>;
  total_balance?: Maybe<Scalars["numeric"]>;
  total_qty?: Maybe<Scalars["numeric"]>;
  total_withdraw_amount?: Maybe<Scalars["float8"]>;
  total_withdrawed_amount?: Maybe<Scalars["float8"]>;
};

/** aggregated selection of "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Aggregate = {
  __typename?: "payment_vw_organizations_balance_aggregate";
  aggregate?: Maybe<Payment_Vw_Organizations_Balance_Aggregate_Fields>;
  nodes: Array<Payment_Vw_Organizations_Balance>;
};

/** aggregate fields of "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Aggregate_Fields = {
  __typename?: "payment_vw_organizations_balance_aggregate_fields";
  avg?: Maybe<Payment_Vw_Organizations_Balance_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Payment_Vw_Organizations_Balance_Max_Fields>;
  min?: Maybe<Payment_Vw_Organizations_Balance_Min_Fields>;
  stddev?: Maybe<Payment_Vw_Organizations_Balance_Stddev_Fields>;
  stddev_pop?: Maybe<Payment_Vw_Organizations_Balance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payment_Vw_Organizations_Balance_Stddev_Samp_Fields>;
  sum?: Maybe<Payment_Vw_Organizations_Balance_Sum_Fields>;
  var_pop?: Maybe<Payment_Vw_Organizations_Balance_Var_Pop_Fields>;
  var_samp?: Maybe<Payment_Vw_Organizations_Balance_Var_Samp_Fields>;
  variance?: Maybe<Payment_Vw_Organizations_Balance_Variance_Fields>;
};

/** aggregate fields of "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payment_Vw_Organizations_Balance_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Aggregate_Order_By = {
  avg?: Maybe<Payment_Vw_Organizations_Balance_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Payment_Vw_Organizations_Balance_Max_Order_By>;
  min?: Maybe<Payment_Vw_Organizations_Balance_Min_Order_By>;
  stddev?: Maybe<Payment_Vw_Organizations_Balance_Stddev_Order_By>;
  stddev_pop?: Maybe<Payment_Vw_Organizations_Balance_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Payment_Vw_Organizations_Balance_Stddev_Samp_Order_By>;
  sum?: Maybe<Payment_Vw_Organizations_Balance_Sum_Order_By>;
  var_pop?: Maybe<Payment_Vw_Organizations_Balance_Var_Pop_Order_By>;
  var_samp?: Maybe<Payment_Vw_Organizations_Balance_Var_Samp_Order_By>;
  variance?: Maybe<Payment_Vw_Organizations_Balance_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Payment_Vw_Organizations_Balance_Avg_Fields = {
  __typename?: "payment_vw_organizations_balance_avg_fields";
  after_vat?: Maybe<Scalars["Float"]>;
  end_balance?: Maybe<Scalars["Float"]>;
  esan_amount?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  total_amount?: Maybe<Scalars["Float"]>;
  total_balance?: Maybe<Scalars["Float"]>;
  total_qty?: Maybe<Scalars["Float"]>;
  total_withdraw_amount?: Maybe<Scalars["Float"]>;
  total_withdrawed_amount?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Avg_Order_By = {
  after_vat?: Maybe<Order_By>;
  end_balance?: Maybe<Order_By>;
  esan_amount?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  total_amount?: Maybe<Order_By>;
  total_balance?: Maybe<Order_By>;
  total_qty?: Maybe<Order_By>;
  total_withdraw_amount?: Maybe<Order_By>;
  total_withdrawed_amount?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table
 * "payment.vw_organizations_balance". All fields are combined with a logical 'AND'.
 */
export type Payment_Vw_Organizations_Balance_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Payment_Vw_Organizations_Balance_Bool_Exp>>>;
  _not?: Maybe<Payment_Vw_Organizations_Balance_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Payment_Vw_Organizations_Balance_Bool_Exp>>>;
  account_info?: Maybe<String_Comparison_Exp>;
  after_vat?: Maybe<Numeric_Comparison_Exp>;
  end_balance?: Maybe<Float8_Comparison_Exp>;
  esan_amount?: Maybe<Numeric_Comparison_Exp>;
  organization_id?: Maybe<Bigint_Comparison_Exp>;
  organization_name?: Maybe<String_Comparison_Exp>;
  registration?: Maybe<String_Comparison_Exp>;
  total_amount?: Maybe<Numeric_Comparison_Exp>;
  total_balance?: Maybe<Numeric_Comparison_Exp>;
  total_qty?: Maybe<Numeric_Comparison_Exp>;
  total_withdraw_amount?: Maybe<Float8_Comparison_Exp>;
  total_withdrawed_amount?: Maybe<Float8_Comparison_Exp>;
};

/** aggregate max on columns */
export type Payment_Vw_Organizations_Balance_Max_Fields = {
  __typename?: "payment_vw_organizations_balance_max_fields";
  account_info?: Maybe<Scalars["String"]>;
  after_vat?: Maybe<Scalars["numeric"]>;
  end_balance?: Maybe<Scalars["float8"]>;
  esan_amount?: Maybe<Scalars["numeric"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  organization_name?: Maybe<Scalars["String"]>;
  registration?: Maybe<Scalars["String"]>;
  total_amount?: Maybe<Scalars["numeric"]>;
  total_balance?: Maybe<Scalars["numeric"]>;
  total_qty?: Maybe<Scalars["numeric"]>;
  total_withdraw_amount?: Maybe<Scalars["float8"]>;
  total_withdrawed_amount?: Maybe<Scalars["float8"]>;
};

/** order by max() on columns of table "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Max_Order_By = {
  account_info?: Maybe<Order_By>;
  after_vat?: Maybe<Order_By>;
  end_balance?: Maybe<Order_By>;
  esan_amount?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  organization_name?: Maybe<Order_By>;
  registration?: Maybe<Order_By>;
  total_amount?: Maybe<Order_By>;
  total_balance?: Maybe<Order_By>;
  total_qty?: Maybe<Order_By>;
  total_withdraw_amount?: Maybe<Order_By>;
  total_withdrawed_amount?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Payment_Vw_Organizations_Balance_Min_Fields = {
  __typename?: "payment_vw_organizations_balance_min_fields";
  account_info?: Maybe<Scalars["String"]>;
  after_vat?: Maybe<Scalars["numeric"]>;
  end_balance?: Maybe<Scalars["float8"]>;
  esan_amount?: Maybe<Scalars["numeric"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  organization_name?: Maybe<Scalars["String"]>;
  registration?: Maybe<Scalars["String"]>;
  total_amount?: Maybe<Scalars["numeric"]>;
  total_balance?: Maybe<Scalars["numeric"]>;
  total_qty?: Maybe<Scalars["numeric"]>;
  total_withdraw_amount?: Maybe<Scalars["float8"]>;
  total_withdrawed_amount?: Maybe<Scalars["float8"]>;
};

/** order by min() on columns of table "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Min_Order_By = {
  account_info?: Maybe<Order_By>;
  after_vat?: Maybe<Order_By>;
  end_balance?: Maybe<Order_By>;
  esan_amount?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  organization_name?: Maybe<Order_By>;
  registration?: Maybe<Order_By>;
  total_amount?: Maybe<Order_By>;
  total_balance?: Maybe<Order_By>;
  total_qty?: Maybe<Order_By>;
  total_withdraw_amount?: Maybe<Order_By>;
  total_withdrawed_amount?: Maybe<Order_By>;
};

/** ordering options when selecting data from "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Order_By = {
  account_info?: Maybe<Order_By>;
  after_vat?: Maybe<Order_By>;
  end_balance?: Maybe<Order_By>;
  esan_amount?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  organization_name?: Maybe<Order_By>;
  registration?: Maybe<Order_By>;
  total_amount?: Maybe<Order_By>;
  total_balance?: Maybe<Order_By>;
  total_qty?: Maybe<Order_By>;
  total_withdraw_amount?: Maybe<Order_By>;
  total_withdrawed_amount?: Maybe<Order_By>;
};

/** select columns of table "payment.vw_organizations_balance" */
export enum Payment_Vw_Organizations_Balance_Select_Column {
  /** column name */
  AccountInfo = "account_info",
  /** column name */
  AfterVat = "after_vat",
  /** column name */
  EndBalance = "end_balance",
  /** column name */
  EsanAmount = "esan_amount",
  /** column name */
  OrganizationId = "organization_id",
  /** column name */
  OrganizationName = "organization_name",
  /** column name */
  Registration = "registration",
  /** column name */
  TotalAmount = "total_amount",
  /** column name */
  TotalBalance = "total_balance",
  /** column name */
  TotalQty = "total_qty",
  /** column name */
  TotalWithdrawAmount = "total_withdraw_amount",
  /** column name */
  TotalWithdrawedAmount = "total_withdrawed_amount"
}

/** aggregate stddev on columns */
export type Payment_Vw_Organizations_Balance_Stddev_Fields = {
  __typename?: "payment_vw_organizations_balance_stddev_fields";
  after_vat?: Maybe<Scalars["Float"]>;
  end_balance?: Maybe<Scalars["Float"]>;
  esan_amount?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  total_amount?: Maybe<Scalars["Float"]>;
  total_balance?: Maybe<Scalars["Float"]>;
  total_qty?: Maybe<Scalars["Float"]>;
  total_withdraw_amount?: Maybe<Scalars["Float"]>;
  total_withdrawed_amount?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Stddev_Order_By = {
  after_vat?: Maybe<Order_By>;
  end_balance?: Maybe<Order_By>;
  esan_amount?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  total_amount?: Maybe<Order_By>;
  total_balance?: Maybe<Order_By>;
  total_qty?: Maybe<Order_By>;
  total_withdraw_amount?: Maybe<Order_By>;
  total_withdrawed_amount?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Payment_Vw_Organizations_Balance_Stddev_Pop_Fields = {
  __typename?: "payment_vw_organizations_balance_stddev_pop_fields";
  after_vat?: Maybe<Scalars["Float"]>;
  end_balance?: Maybe<Scalars["Float"]>;
  esan_amount?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  total_amount?: Maybe<Scalars["Float"]>;
  total_balance?: Maybe<Scalars["Float"]>;
  total_qty?: Maybe<Scalars["Float"]>;
  total_withdraw_amount?: Maybe<Scalars["Float"]>;
  total_withdrawed_amount?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Stddev_Pop_Order_By = {
  after_vat?: Maybe<Order_By>;
  end_balance?: Maybe<Order_By>;
  esan_amount?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  total_amount?: Maybe<Order_By>;
  total_balance?: Maybe<Order_By>;
  total_qty?: Maybe<Order_By>;
  total_withdraw_amount?: Maybe<Order_By>;
  total_withdrawed_amount?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Payment_Vw_Organizations_Balance_Stddev_Samp_Fields = {
  __typename?: "payment_vw_organizations_balance_stddev_samp_fields";
  after_vat?: Maybe<Scalars["Float"]>;
  end_balance?: Maybe<Scalars["Float"]>;
  esan_amount?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  total_amount?: Maybe<Scalars["Float"]>;
  total_balance?: Maybe<Scalars["Float"]>;
  total_qty?: Maybe<Scalars["Float"]>;
  total_withdraw_amount?: Maybe<Scalars["Float"]>;
  total_withdrawed_amount?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Stddev_Samp_Order_By = {
  after_vat?: Maybe<Order_By>;
  end_balance?: Maybe<Order_By>;
  esan_amount?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  total_amount?: Maybe<Order_By>;
  total_balance?: Maybe<Order_By>;
  total_qty?: Maybe<Order_By>;
  total_withdraw_amount?: Maybe<Order_By>;
  total_withdrawed_amount?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Payment_Vw_Organizations_Balance_Sum_Fields = {
  __typename?: "payment_vw_organizations_balance_sum_fields";
  after_vat?: Maybe<Scalars["numeric"]>;
  end_balance?: Maybe<Scalars["float8"]>;
  esan_amount?: Maybe<Scalars["numeric"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  total_amount?: Maybe<Scalars["numeric"]>;
  total_balance?: Maybe<Scalars["numeric"]>;
  total_qty?: Maybe<Scalars["numeric"]>;
  total_withdraw_amount?: Maybe<Scalars["float8"]>;
  total_withdrawed_amount?: Maybe<Scalars["float8"]>;
};

/** order by sum() on columns of table "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Sum_Order_By = {
  after_vat?: Maybe<Order_By>;
  end_balance?: Maybe<Order_By>;
  esan_amount?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  total_amount?: Maybe<Order_By>;
  total_balance?: Maybe<Order_By>;
  total_qty?: Maybe<Order_By>;
  total_withdraw_amount?: Maybe<Order_By>;
  total_withdrawed_amount?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Payment_Vw_Organizations_Balance_Var_Pop_Fields = {
  __typename?: "payment_vw_organizations_balance_var_pop_fields";
  after_vat?: Maybe<Scalars["Float"]>;
  end_balance?: Maybe<Scalars["Float"]>;
  esan_amount?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  total_amount?: Maybe<Scalars["Float"]>;
  total_balance?: Maybe<Scalars["Float"]>;
  total_qty?: Maybe<Scalars["Float"]>;
  total_withdraw_amount?: Maybe<Scalars["Float"]>;
  total_withdrawed_amount?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Var_Pop_Order_By = {
  after_vat?: Maybe<Order_By>;
  end_balance?: Maybe<Order_By>;
  esan_amount?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  total_amount?: Maybe<Order_By>;
  total_balance?: Maybe<Order_By>;
  total_qty?: Maybe<Order_By>;
  total_withdraw_amount?: Maybe<Order_By>;
  total_withdrawed_amount?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Payment_Vw_Organizations_Balance_Var_Samp_Fields = {
  __typename?: "payment_vw_organizations_balance_var_samp_fields";
  after_vat?: Maybe<Scalars["Float"]>;
  end_balance?: Maybe<Scalars["Float"]>;
  esan_amount?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  total_amount?: Maybe<Scalars["Float"]>;
  total_balance?: Maybe<Scalars["Float"]>;
  total_qty?: Maybe<Scalars["Float"]>;
  total_withdraw_amount?: Maybe<Scalars["Float"]>;
  total_withdrawed_amount?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Var_Samp_Order_By = {
  after_vat?: Maybe<Order_By>;
  end_balance?: Maybe<Order_By>;
  esan_amount?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  total_amount?: Maybe<Order_By>;
  total_balance?: Maybe<Order_By>;
  total_qty?: Maybe<Order_By>;
  total_withdraw_amount?: Maybe<Order_By>;
  total_withdrawed_amount?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Payment_Vw_Organizations_Balance_Variance_Fields = {
  __typename?: "payment_vw_organizations_balance_variance_fields";
  after_vat?: Maybe<Scalars["Float"]>;
  end_balance?: Maybe<Scalars["Float"]>;
  esan_amount?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  total_amount?: Maybe<Scalars["Float"]>;
  total_balance?: Maybe<Scalars["Float"]>;
  total_qty?: Maybe<Scalars["Float"]>;
  total_withdraw_amount?: Maybe<Scalars["Float"]>;
  total_withdrawed_amount?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "payment.vw_organizations_balance" */
export type Payment_Vw_Organizations_Balance_Variance_Order_By = {
  after_vat?: Maybe<Order_By>;
  end_balance?: Maybe<Order_By>;
  esan_amount?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  total_amount?: Maybe<Order_By>;
  total_balance?: Maybe<Order_By>;
  total_qty?: Maybe<Order_By>;
  total_withdraw_amount?: Maybe<Order_By>;
  total_withdrawed_amount?: Maybe<Order_By>;
};

/** columns and relationships of "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents = {
  __typename?: "payment_vw_paid_contents";
  created_at?: Maybe<Scalars["timestamptz"]>;
  discount?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["bigint"]>;
  isbn?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  qty?: Maybe<Scalars["numeric"]>;
  total?: Maybe<Scalars["numeric"]>;
  type?: Maybe<Scalars["content_types"]>;
  uniqkey?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Aggregate = {
  __typename?: "payment_vw_paid_contents_aggregate";
  aggregate?: Maybe<Payment_Vw_Paid_Contents_Aggregate_Fields>;
  nodes: Array<Payment_Vw_Paid_Contents>;
};

/** aggregate fields of "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Aggregate_Fields = {
  __typename?: "payment_vw_paid_contents_aggregate_fields";
  avg?: Maybe<Payment_Vw_Paid_Contents_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Payment_Vw_Paid_Contents_Max_Fields>;
  min?: Maybe<Payment_Vw_Paid_Contents_Min_Fields>;
  stddev?: Maybe<Payment_Vw_Paid_Contents_Stddev_Fields>;
  stddev_pop?: Maybe<Payment_Vw_Paid_Contents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payment_Vw_Paid_Contents_Stddev_Samp_Fields>;
  sum?: Maybe<Payment_Vw_Paid_Contents_Sum_Fields>;
  var_pop?: Maybe<Payment_Vw_Paid_Contents_Var_Pop_Fields>;
  var_samp?: Maybe<Payment_Vw_Paid_Contents_Var_Samp_Fields>;
  variance?: Maybe<Payment_Vw_Paid_Contents_Variance_Fields>;
};

/** aggregate fields of "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payment_Vw_Paid_Contents_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Aggregate_Order_By = {
  avg?: Maybe<Payment_Vw_Paid_Contents_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Payment_Vw_Paid_Contents_Max_Order_By>;
  min?: Maybe<Payment_Vw_Paid_Contents_Min_Order_By>;
  stddev?: Maybe<Payment_Vw_Paid_Contents_Stddev_Order_By>;
  stddev_pop?: Maybe<Payment_Vw_Paid_Contents_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Payment_Vw_Paid_Contents_Stddev_Samp_Order_By>;
  sum?: Maybe<Payment_Vw_Paid_Contents_Sum_Order_By>;
  var_pop?: Maybe<Payment_Vw_Paid_Contents_Var_Pop_Order_By>;
  var_samp?: Maybe<Payment_Vw_Paid_Contents_Var_Samp_Order_By>;
  variance?: Maybe<Payment_Vw_Paid_Contents_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Payment_Vw_Paid_Contents_Avg_Fields = {
  __typename?: "payment_vw_paid_contents_avg_fields";
  discount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Avg_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "payment.vw_paid_contents". All fields are combined with a logical 'AND'. */
export type Payment_Vw_Paid_Contents_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Payment_Vw_Paid_Contents_Bool_Exp>>>;
  _not?: Maybe<Payment_Vw_Paid_Contents_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Payment_Vw_Paid_Contents_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  discount?: Maybe<Numeric_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  isbn?: Maybe<String_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization_id?: Maybe<Bigint_Comparison_Exp>;
  payment_type?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  qty?: Maybe<Numeric_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
  type?: Maybe<Content_Types_Comparison_Exp>;
  uniqkey?: Maybe<String_Comparison_Exp>;
};

/** columns and relationships of "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count = {
  __typename?: "payment_vw_paid_contents_count";
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  sold?: Maybe<Scalars["bigint"]>;
};

/** aggregated selection of "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Aggregate = {
  __typename?: "payment_vw_paid_contents_count_aggregate";
  aggregate?: Maybe<Payment_Vw_Paid_Contents_Count_Aggregate_Fields>;
  nodes: Array<Payment_Vw_Paid_Contents_Count>;
};

/** aggregate fields of "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Aggregate_Fields = {
  __typename?: "payment_vw_paid_contents_count_aggregate_fields";
  avg?: Maybe<Payment_Vw_Paid_Contents_Count_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Payment_Vw_Paid_Contents_Count_Max_Fields>;
  min?: Maybe<Payment_Vw_Paid_Contents_Count_Min_Fields>;
  stddev?: Maybe<Payment_Vw_Paid_Contents_Count_Stddev_Fields>;
  stddev_pop?: Maybe<Payment_Vw_Paid_Contents_Count_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payment_Vw_Paid_Contents_Count_Stddev_Samp_Fields>;
  sum?: Maybe<Payment_Vw_Paid_Contents_Count_Sum_Fields>;
  var_pop?: Maybe<Payment_Vw_Paid_Contents_Count_Var_Pop_Fields>;
  var_samp?: Maybe<Payment_Vw_Paid_Contents_Count_Var_Samp_Fields>;
  variance?: Maybe<Payment_Vw_Paid_Contents_Count_Variance_Fields>;
};

/** aggregate fields of "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payment_Vw_Paid_Contents_Count_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Aggregate_Order_By = {
  avg?: Maybe<Payment_Vw_Paid_Contents_Count_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Payment_Vw_Paid_Contents_Count_Max_Order_By>;
  min?: Maybe<Payment_Vw_Paid_Contents_Count_Min_Order_By>;
  stddev?: Maybe<Payment_Vw_Paid_Contents_Count_Stddev_Order_By>;
  stddev_pop?: Maybe<Payment_Vw_Paid_Contents_Count_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Payment_Vw_Paid_Contents_Count_Stddev_Samp_Order_By>;
  sum?: Maybe<Payment_Vw_Paid_Contents_Count_Sum_Order_By>;
  var_pop?: Maybe<Payment_Vw_Paid_Contents_Count_Var_Pop_Order_By>;
  var_samp?: Maybe<Payment_Vw_Paid_Contents_Count_Var_Samp_Order_By>;
  variance?: Maybe<Payment_Vw_Paid_Contents_Count_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Payment_Vw_Paid_Contents_Count_Avg_Fields = {
  __typename?: "payment_vw_paid_contents_count_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  sold?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table
 * "payment.vw_paid_contents_count". All fields are combined with a logical 'AND'.
 */
export type Payment_Vw_Paid_Contents_Count_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Payment_Vw_Paid_Contents_Count_Bool_Exp>>>;
  _not?: Maybe<Payment_Vw_Paid_Contents_Count_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Payment_Vw_Paid_Contents_Count_Bool_Exp>>>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization_id?: Maybe<Bigint_Comparison_Exp>;
  sold?: Maybe<Bigint_Comparison_Exp>;
};

/** aggregate max on columns */
export type Payment_Vw_Paid_Contents_Count_Max_Fields = {
  __typename?: "payment_vw_paid_contents_count_max_fields";
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  sold?: Maybe<Scalars["bigint"]>;
};

/** order by max() on columns of table "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Payment_Vw_Paid_Contents_Count_Min_Fields = {
  __typename?: "payment_vw_paid_contents_count_min_fields";
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  sold?: Maybe<Scalars["bigint"]>;
};

/** order by min() on columns of table "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** ordering options when selecting data from "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** select columns of table "payment.vw_paid_contents_count" */
export enum Payment_Vw_Paid_Contents_Count_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  OrganizationId = "organization_id",
  /** column name */
  Sold = "sold"
}

/** aggregate stddev on columns */
export type Payment_Vw_Paid_Contents_Count_Stddev_Fields = {
  __typename?: "payment_vw_paid_contents_count_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  sold?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Payment_Vw_Paid_Contents_Count_Stddev_Pop_Fields = {
  __typename?: "payment_vw_paid_contents_count_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  sold?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Payment_Vw_Paid_Contents_Count_Stddev_Samp_Fields = {
  __typename?: "payment_vw_paid_contents_count_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  sold?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Payment_Vw_Paid_Contents_Count_Sum_Fields = {
  __typename?: "payment_vw_paid_contents_count_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  sold?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Payment_Vw_Paid_Contents_Count_Var_Pop_Fields = {
  __typename?: "payment_vw_paid_contents_count_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  sold?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Payment_Vw_Paid_Contents_Count_Var_Samp_Fields = {
  __typename?: "payment_vw_paid_contents_count_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  sold?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Payment_Vw_Paid_Contents_Count_Variance_Fields = {
  __typename?: "payment_vw_paid_contents_count_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  sold?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "payment.vw_paid_contents_count" */
export type Payment_Vw_Paid_Contents_Count_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  sold?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Payment_Vw_Paid_Contents_Max_Fields = {
  __typename?: "payment_vw_paid_contents_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  discount?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["bigint"]>;
  isbn?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  qty?: Maybe<Scalars["numeric"]>;
  total?: Maybe<Scalars["numeric"]>;
  uniqkey?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  uniqkey?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Payment_Vw_Paid_Contents_Min_Fields = {
  __typename?: "payment_vw_paid_contents_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  discount?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["bigint"]>;
  isbn?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  qty?: Maybe<Scalars["numeric"]>;
  total?: Maybe<Scalars["numeric"]>;
  uniqkey?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  uniqkey?: Maybe<Order_By>;
};

/** ordering options when selecting data from "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Order_By = {
  created_at?: Maybe<Order_By>;
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  uniqkey?: Maybe<Order_By>;
};

/** select columns of table "payment.vw_paid_contents" */
export enum Payment_Vw_Paid_Contents_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Discount = "discount",
  /** column name */
  Id = "id",
  /** column name */
  Isbn = "isbn",
  /** column name */
  Key = "key",
  /** column name */
  Name = "name",
  /** column name */
  OrganizationId = "organization_id",
  /** column name */
  PaymentType = "payment_type",
  /** column name */
  Price = "price",
  /** column name */
  Qty = "qty",
  /** column name */
  Total = "total",
  /** column name */
  Type = "type",
  /** column name */
  Uniqkey = "uniqkey"
}

/** aggregate stddev on columns */
export type Payment_Vw_Paid_Contents_Stddev_Fields = {
  __typename?: "payment_vw_paid_contents_stddev_fields";
  discount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Stddev_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Payment_Vw_Paid_Contents_Stddev_Pop_Fields = {
  __typename?: "payment_vw_paid_contents_stddev_pop_fields";
  discount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Stddev_Pop_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Payment_Vw_Paid_Contents_Stddev_Samp_Fields = {
  __typename?: "payment_vw_paid_contents_stddev_samp_fields";
  discount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Stddev_Samp_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Payment_Vw_Paid_Contents_Sum_Fields = {
  __typename?: "payment_vw_paid_contents_sum_fields";
  discount?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["bigint"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  qty?: Maybe<Scalars["numeric"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Sum_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Payment_Vw_Paid_Contents_Var_Pop_Fields = {
  __typename?: "payment_vw_paid_contents_var_pop_fields";
  discount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Var_Pop_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Payment_Vw_Paid_Contents_Var_Samp_Fields = {
  __typename?: "payment_vw_paid_contents_var_samp_fields";
  discount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Var_Samp_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Payment_Vw_Paid_Contents_Variance_Fields = {
  __typename?: "payment_vw_paid_contents_variance_fields";
  discount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  qty?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "payment.vw_paid_contents" */
export type Payment_Vw_Paid_Contents_Variance_Order_By = {
  discount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  qty?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** Харилцагчийн орлого нь 100,000 хүрсэн бол хүсэлт гаргах эрхтэй болно
 *
 *
 * columns and relationships of "payment.withdraw_requests"
 */
export type Payment_Withdraw_Requests = {
  __typename?: "payment_withdraw_requests";
  amount: Scalars["float8"];
  created_at: Scalars["timestamptz"];
  created_user_id: Scalars["String"];
  id: Scalars["bigint"];
  is_transfered: Scalars["Boolean"];
  organization_id: Scalars["bigint"];
  transfered_user_id?: Maybe<Scalars["String"]>;
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Aggregate = {
  __typename?: "payment_withdraw_requests_aggregate";
  aggregate?: Maybe<Payment_Withdraw_Requests_Aggregate_Fields>;
  nodes: Array<Payment_Withdraw_Requests>;
};

/** aggregate fields of "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Aggregate_Fields = {
  __typename?: "payment_withdraw_requests_aggregate_fields";
  avg?: Maybe<Payment_Withdraw_Requests_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Payment_Withdraw_Requests_Max_Fields>;
  min?: Maybe<Payment_Withdraw_Requests_Min_Fields>;
  stddev?: Maybe<Payment_Withdraw_Requests_Stddev_Fields>;
  stddev_pop?: Maybe<Payment_Withdraw_Requests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payment_Withdraw_Requests_Stddev_Samp_Fields>;
  sum?: Maybe<Payment_Withdraw_Requests_Sum_Fields>;
  var_pop?: Maybe<Payment_Withdraw_Requests_Var_Pop_Fields>;
  var_samp?: Maybe<Payment_Withdraw_Requests_Var_Samp_Fields>;
  variance?: Maybe<Payment_Withdraw_Requests_Variance_Fields>;
};

/** aggregate fields of "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payment_Withdraw_Requests_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Aggregate_Order_By = {
  avg?: Maybe<Payment_Withdraw_Requests_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Payment_Withdraw_Requests_Max_Order_By>;
  min?: Maybe<Payment_Withdraw_Requests_Min_Order_By>;
  stddev?: Maybe<Payment_Withdraw_Requests_Stddev_Order_By>;
  stddev_pop?: Maybe<Payment_Withdraw_Requests_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Payment_Withdraw_Requests_Stddev_Samp_Order_By>;
  sum?: Maybe<Payment_Withdraw_Requests_Sum_Order_By>;
  var_pop?: Maybe<Payment_Withdraw_Requests_Var_Pop_Order_By>;
  var_samp?: Maybe<Payment_Withdraw_Requests_Var_Samp_Order_By>;
  variance?: Maybe<Payment_Withdraw_Requests_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Arr_Rel_Insert_Input = {
  data: Array<Payment_Withdraw_Requests_Insert_Input>;
  on_conflict?: Maybe<Payment_Withdraw_Requests_On_Conflict>;
};

/** aggregate avg on columns */
export type Payment_Withdraw_Requests_Avg_Fields = {
  __typename?: "payment_withdraw_requests_avg_fields";
  amount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Avg_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "payment.withdraw_requests". All fields are combined with a logical 'AND'. */
export type Payment_Withdraw_Requests_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Payment_Withdraw_Requests_Bool_Exp>>>;
  _not?: Maybe<Payment_Withdraw_Requests_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Payment_Withdraw_Requests_Bool_Exp>>>;
  amount?: Maybe<Float8_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_user_id?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  is_transfered?: Maybe<Boolean_Comparison_Exp>;
  organization_id?: Maybe<Bigint_Comparison_Exp>;
  transfered_user_id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment.withdraw_requests" */
export enum Payment_Withdraw_Requests_Constraint {
  /** unique or primary key constraint */
  WithdrawsPkey = "withdraws_pkey"
}

/** input type for incrementing integer columne in table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Insert_Input = {
  amount?: Maybe<Scalars["float8"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_user_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  is_transfered?: Maybe<Scalars["Boolean"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  transfered_user_id?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Payment_Withdraw_Requests_Max_Fields = {
  __typename?: "payment_withdraw_requests_max_fields";
  amount?: Maybe<Scalars["float8"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_user_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  transfered_user_id?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Max_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  transfered_user_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Payment_Withdraw_Requests_Min_Fields = {
  __typename?: "payment_withdraw_requests_min_fields";
  amount?: Maybe<Scalars["float8"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_user_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  transfered_user_id?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Min_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  transfered_user_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Mutation_Response = {
  __typename?: "payment_withdraw_requests_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Payment_Withdraw_Requests>;
};

/** input type for inserting object relation for remote table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Obj_Rel_Insert_Input = {
  data: Payment_Withdraw_Requests_Insert_Input;
  on_conflict?: Maybe<Payment_Withdraw_Requests_On_Conflict>;
};

/** on conflict condition type for table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_On_Conflict = {
  constraint: Payment_Withdraw_Requests_Constraint;
  update_columns: Array<Payment_Withdraw_Requests_Update_Column>;
  where?: Maybe<Payment_Withdraw_Requests_Bool_Exp>;
};

/** ordering options when selecting data from "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Order_By = {
  amount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_user_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_transfered?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  transfered_user_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "payment.withdraw_requests" */
export enum Payment_Withdraw_Requests_Select_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedUserId = "created_user_id",
  /** column name */
  Id = "id",
  /** column name */
  IsTransfered = "is_transfered",
  /** column name */
  OrganizationId = "organization_id",
  /** column name */
  TransferedUserId = "transfered_user_id",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Set_Input = {
  amount?: Maybe<Scalars["float8"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_user_id?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  is_transfered?: Maybe<Scalars["Boolean"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  transfered_user_id?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Payment_Withdraw_Requests_Stddev_Fields = {
  __typename?: "payment_withdraw_requests_stddev_fields";
  amount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Payment_Withdraw_Requests_Stddev_Pop_Fields = {
  __typename?: "payment_withdraw_requests_stddev_pop_fields";
  amount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Payment_Withdraw_Requests_Stddev_Samp_Fields = {
  __typename?: "payment_withdraw_requests_stddev_samp_fields";
  amount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Payment_Withdraw_Requests_Sum_Fields = {
  __typename?: "payment_withdraw_requests_sum_fields";
  amount?: Maybe<Scalars["float8"]>;
  id?: Maybe<Scalars["bigint"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** update columns of table "payment.withdraw_requests" */
export enum Payment_Withdraw_Requests_Update_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedUserId = "created_user_id",
  /** column name */
  Id = "id",
  /** column name */
  IsTransfered = "is_transfered",
  /** column name */
  OrganizationId = "organization_id",
  /** column name */
  TransferedUserId = "transfered_user_id",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Payment_Withdraw_Requests_Var_Pop_Fields = {
  __typename?: "payment_withdraw_requests_var_pop_fields";
  amount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Payment_Withdraw_Requests_Var_Samp_Fields = {
  __typename?: "payment_withdraw_requests_var_samp_fields";
  amount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Payment_Withdraw_Requests_Variance_Fields = {
  __typename?: "payment_withdraw_requests_variance_fields";
  amount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "payment.withdraw_requests" */
export type Payment_Withdraw_Requests_Variance_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
};

export enum PaymentType {
  Cash = "cash",
  Free = "free",
  Membership = "membership"
}

/** columns and relationships of "plagiarism.content_texts" */
export type Plagiarism_Content_Texts = {
  __typename?: "plagiarism_content_texts";
  content_id: Scalars["bigint"];
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["bigint"];
  meta?: Maybe<Scalars["jsonb"]>;
  status: Scalars["String"];
  text: Scalars["String"];
  updated_at: Scalars["timestamptz"];
};

/** columns and relationships of "plagiarism.content_texts" */
export type Plagiarism_Content_TextsMetaArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Aggregate = {
  __typename?: "plagiarism_content_texts_aggregate";
  aggregate?: Maybe<Plagiarism_Content_Texts_Aggregate_Fields>;
  nodes: Array<Plagiarism_Content_Texts>;
};

/** aggregate fields of "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Aggregate_Fields = {
  __typename?: "plagiarism_content_texts_aggregate_fields";
  avg?: Maybe<Plagiarism_Content_Texts_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Plagiarism_Content_Texts_Max_Fields>;
  min?: Maybe<Plagiarism_Content_Texts_Min_Fields>;
  stddev?: Maybe<Plagiarism_Content_Texts_Stddev_Fields>;
  stddev_pop?: Maybe<Plagiarism_Content_Texts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plagiarism_Content_Texts_Stddev_Samp_Fields>;
  sum?: Maybe<Plagiarism_Content_Texts_Sum_Fields>;
  var_pop?: Maybe<Plagiarism_Content_Texts_Var_Pop_Fields>;
  var_samp?: Maybe<Plagiarism_Content_Texts_Var_Samp_Fields>;
  variance?: Maybe<Plagiarism_Content_Texts_Variance_Fields>;
};

/** aggregate fields of "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Plagiarism_Content_Texts_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Aggregate_Order_By = {
  avg?: Maybe<Plagiarism_Content_Texts_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Plagiarism_Content_Texts_Max_Order_By>;
  min?: Maybe<Plagiarism_Content_Texts_Min_Order_By>;
  stddev?: Maybe<Plagiarism_Content_Texts_Stddev_Order_By>;
  stddev_pop?: Maybe<Plagiarism_Content_Texts_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Plagiarism_Content_Texts_Stddev_Samp_Order_By>;
  sum?: Maybe<Plagiarism_Content_Texts_Sum_Order_By>;
  var_pop?: Maybe<Plagiarism_Content_Texts_Var_Pop_Order_By>;
  var_samp?: Maybe<Plagiarism_Content_Texts_Var_Samp_Order_By>;
  variance?: Maybe<Plagiarism_Content_Texts_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Plagiarism_Content_Texts_Append_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Arr_Rel_Insert_Input = {
  data: Array<Plagiarism_Content_Texts_Insert_Input>;
  on_conflict?: Maybe<Plagiarism_Content_Texts_On_Conflict>;
};

/** aggregate avg on columns */
export type Plagiarism_Content_Texts_Avg_Fields = {
  __typename?: "plagiarism_content_texts_avg_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Avg_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "plagiarism.content_texts". All fields are combined with a logical 'AND'. */
export type Plagiarism_Content_Texts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Plagiarism_Content_Texts_Bool_Exp>>>;
  _not?: Maybe<Plagiarism_Content_Texts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Plagiarism_Content_Texts_Bool_Exp>>>;
  content_id?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "plagiarism.content_texts" */
export enum Plagiarism_Content_Texts_Constraint {
  /** unique or primary key constraint */
  ContentTextsPkey = "content_texts_pkey"
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Plagiarism_Content_Texts_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Plagiarism_Content_Texts_Delete_Elem_Input = {
  meta?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Plagiarism_Content_Texts_Delete_Key_Input = {
  meta?: Maybe<Scalars["String"]>;
};

/** input type for incrementing integer columne in table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Inc_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Insert_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  status?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Plagiarism_Content_Texts_Max_Fields = {
  __typename?: "plagiarism_content_texts_max_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  status?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Max_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Plagiarism_Content_Texts_Min_Fields = {
  __typename?: "plagiarism_content_texts_min_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  status?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Min_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Mutation_Response = {
  __typename?: "plagiarism_content_texts_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Plagiarism_Content_Texts>;
};

/** input type for inserting object relation for remote table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Obj_Rel_Insert_Input = {
  data: Plagiarism_Content_Texts_Insert_Input;
  on_conflict?: Maybe<Plagiarism_Content_Texts_On_Conflict>;
};

/** on conflict condition type for table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_On_Conflict = {
  constraint: Plagiarism_Content_Texts_Constraint;
  update_columns: Array<Plagiarism_Content_Texts_Update_Column>;
  where?: Maybe<Plagiarism_Content_Texts_Bool_Exp>;
};

/** ordering options when selecting data from "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Plagiarism_Content_Texts_Prepend_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "plagiarism.content_texts" */
export enum Plagiarism_Content_Texts_Select_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  Meta = "meta",
  /** column name */
  Status = "status",
  /** column name */
  Text = "text",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Set_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  status?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Plagiarism_Content_Texts_Stddev_Fields = {
  __typename?: "plagiarism_content_texts_stddev_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Stddev_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Plagiarism_Content_Texts_Stddev_Pop_Fields = {
  __typename?: "plagiarism_content_texts_stddev_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Stddev_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Plagiarism_Content_Texts_Stddev_Samp_Fields = {
  __typename?: "plagiarism_content_texts_stddev_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Stddev_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Plagiarism_Content_Texts_Sum_Fields = {
  __typename?: "plagiarism_content_texts_sum_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Sum_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "plagiarism.content_texts" */
export enum Plagiarism_Content_Texts_Update_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  Meta = "meta",
  /** column name */
  Status = "status",
  /** column name */
  Text = "text",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Plagiarism_Content_Texts_Var_Pop_Fields = {
  __typename?: "plagiarism_content_texts_var_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Var_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Plagiarism_Content_Texts_Var_Samp_Fields = {
  __typename?: "plagiarism_content_texts_var_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Var_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Plagiarism_Content_Texts_Variance_Fields = {
  __typename?: "plagiarism_content_texts_variance_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "plagiarism.content_texts" */
export type Plagiarism_Content_Texts_Variance_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "plagiarism.search_requests" */
export type Plagiarism_Search_Requests = {
  __typename?: "plagiarism_search_requests";
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["bigint"];
  percent: Scalars["float8"];
  pg_category?: Maybe<Scalars["String"]>;
  /** An array relationship */
  results: Array<Plagiarism_Search_Results>;
  /** An aggregated array relationship */
  results_aggregate: Plagiarism_Search_Results_Aggregate;
  search_text: Scalars["String"];
  status: Scalars["String"];
  token?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["Int"]>;
  type: Scalars["String"];
  updated_at: Scalars["timestamptz"];
  user_id: Scalars["String"];
};

/** columns and relationships of "plagiarism.search_requests" */
export type Plagiarism_Search_RequestsResultsArgs = {
  distinct_on?: Maybe<Array<Plagiarism_Search_Results_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Plagiarism_Search_Results_Order_By>>;
  where?: Maybe<Plagiarism_Search_Results_Bool_Exp>;
};

/** columns and relationships of "plagiarism.search_requests" */
export type Plagiarism_Search_RequestsResults_AggregateArgs = {
  distinct_on?: Maybe<Array<Plagiarism_Search_Results_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Plagiarism_Search_Results_Order_By>>;
  where?: Maybe<Plagiarism_Search_Results_Bool_Exp>;
};

/** aggregated selection of "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Aggregate = {
  __typename?: "plagiarism_search_requests_aggregate";
  aggregate?: Maybe<Plagiarism_Search_Requests_Aggregate_Fields>;
  nodes: Array<Plagiarism_Search_Requests>;
};

/** aggregate fields of "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Aggregate_Fields = {
  __typename?: "plagiarism_search_requests_aggregate_fields";
  avg?: Maybe<Plagiarism_Search_Requests_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Plagiarism_Search_Requests_Max_Fields>;
  min?: Maybe<Plagiarism_Search_Requests_Min_Fields>;
  stddev?: Maybe<Plagiarism_Search_Requests_Stddev_Fields>;
  stddev_pop?: Maybe<Plagiarism_Search_Requests_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plagiarism_Search_Requests_Stddev_Samp_Fields>;
  sum?: Maybe<Plagiarism_Search_Requests_Sum_Fields>;
  var_pop?: Maybe<Plagiarism_Search_Requests_Var_Pop_Fields>;
  var_samp?: Maybe<Plagiarism_Search_Requests_Var_Samp_Fields>;
  variance?: Maybe<Plagiarism_Search_Requests_Variance_Fields>;
};

/** aggregate fields of "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Plagiarism_Search_Requests_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Aggregate_Order_By = {
  avg?: Maybe<Plagiarism_Search_Requests_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Plagiarism_Search_Requests_Max_Order_By>;
  min?: Maybe<Plagiarism_Search_Requests_Min_Order_By>;
  stddev?: Maybe<Plagiarism_Search_Requests_Stddev_Order_By>;
  stddev_pop?: Maybe<Plagiarism_Search_Requests_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Plagiarism_Search_Requests_Stddev_Samp_Order_By>;
  sum?: Maybe<Plagiarism_Search_Requests_Sum_Order_By>;
  var_pop?: Maybe<Plagiarism_Search_Requests_Var_Pop_Order_By>;
  var_samp?: Maybe<Plagiarism_Search_Requests_Var_Samp_Order_By>;
  variance?: Maybe<Plagiarism_Search_Requests_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Arr_Rel_Insert_Input = {
  data: Array<Plagiarism_Search_Requests_Insert_Input>;
  on_conflict?: Maybe<Plagiarism_Search_Requests_On_Conflict>;
};

/** aggregate avg on columns */
export type Plagiarism_Search_Requests_Avg_Fields = {
  __typename?: "plagiarism_search_requests_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Avg_Order_By = {
  id?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "plagiarism.search_requests". All fields are combined with a logical 'AND'. */
export type Plagiarism_Search_Requests_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Plagiarism_Search_Requests_Bool_Exp>>>;
  _not?: Maybe<Plagiarism_Search_Requests_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Plagiarism_Search_Requests_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  percent?: Maybe<Float8_Comparison_Exp>;
  pg_category?: Maybe<String_Comparison_Exp>;
  results?: Maybe<Plagiarism_Search_Results_Bool_Exp>;
  search_text?: Maybe<String_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  token?: Maybe<String_Comparison_Exp>;
  total?: Maybe<Int_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "plagiarism.search_requests" */
export enum Plagiarism_Search_Requests_Constraint {
  /** unique or primary key constraint */
  PlagirismRequestPkey = "plagirism_request_pkey"
}

/** input type for incrementing integer columne in table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
  total?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  percent?: Maybe<Scalars["float8"]>;
  pg_category?: Maybe<Scalars["String"]>;
  results?: Maybe<Plagiarism_Search_Results_Arr_Rel_Insert_Input>;
  search_text?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Plagiarism_Search_Requests_Max_Fields = {
  __typename?: "plagiarism_search_requests_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  percent?: Maybe<Scalars["float8"]>;
  pg_category?: Maybe<Scalars["String"]>;
  search_text?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  pg_category?: Maybe<Order_By>;
  search_text?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Plagiarism_Search_Requests_Min_Fields = {
  __typename?: "plagiarism_search_requests_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  percent?: Maybe<Scalars["float8"]>;
  pg_category?: Maybe<Scalars["String"]>;
  search_text?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  pg_category?: Maybe<Order_By>;
  search_text?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Mutation_Response = {
  __typename?: "plagiarism_search_requests_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Plagiarism_Search_Requests>;
};

/** input type for inserting object relation for remote table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Obj_Rel_Insert_Input = {
  data: Plagiarism_Search_Requests_Insert_Input;
  on_conflict?: Maybe<Plagiarism_Search_Requests_On_Conflict>;
};

/** on conflict condition type for table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_On_Conflict = {
  constraint: Plagiarism_Search_Requests_Constraint;
  update_columns: Array<Plagiarism_Search_Requests_Update_Column>;
  where?: Maybe<Plagiarism_Search_Requests_Bool_Exp>;
};

/** ordering options when selecting data from "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  pg_category?: Maybe<Order_By>;
  results_aggregate?: Maybe<Plagiarism_Search_Results_Aggregate_Order_By>;
  search_text?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  token?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "plagiarism.search_requests" */
export enum Plagiarism_Search_Requests_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  Percent = "percent",
  /** column name */
  PgCategory = "pg_category",
  /** column name */
  SearchText = "search_text",
  /** column name */
  Status = "status",
  /** column name */
  Token = "token",
  /** column name */
  Total = "total",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** input type for updating data in table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  percent?: Maybe<Scalars["float8"]>;
  pg_category?: Maybe<Scalars["String"]>;
  search_text?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  token?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["Int"]>;
  type?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Plagiarism_Search_Requests_Stddev_Fields = {
  __typename?: "plagiarism_search_requests_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Plagiarism_Search_Requests_Stddev_Pop_Fields = {
  __typename?: "plagiarism_search_requests_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Plagiarism_Search_Requests_Stddev_Samp_Fields = {
  __typename?: "plagiarism_search_requests_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Plagiarism_Search_Requests_Sum_Fields = {
  __typename?: "plagiarism_search_requests_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
  percent?: Maybe<Scalars["float8"]>;
  total?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Sum_Order_By = {
  id?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** update columns of table "plagiarism.search_requests" */
export enum Plagiarism_Search_Requests_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  Percent = "percent",
  /** column name */
  PgCategory = "pg_category",
  /** column name */
  SearchText = "search_text",
  /** column name */
  Status = "status",
  /** column name */
  Token = "token",
  /** column name */
  Total = "total",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** aggregate var_pop on columns */
export type Plagiarism_Search_Requests_Var_Pop_Fields = {
  __typename?: "plagiarism_search_requests_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Plagiarism_Search_Requests_Var_Samp_Fields = {
  __typename?: "plagiarism_search_requests_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Plagiarism_Search_Requests_Variance_Fields = {
  __typename?: "plagiarism_search_requests_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "plagiarism.search_requests" */
export type Plagiarism_Search_Requests_Variance_Order_By = {
  id?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
};

/** columns and relationships of "plagiarism.search_results" */
export type Plagiarism_Search_Results = {
  __typename?: "plagiarism_search_results";
  /** An object relationship */
  content?: Maybe<Contents>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at: Scalars["timestamptz"];
  id: Scalars["bigint"];
  next_sentence?: Maybe<Scalars["String"]>;
  page?: Maybe<Scalars["Int"]>;
  percent: Scalars["float8"];
  prev_sentence?: Maybe<Scalars["String"]>;
  /** An object relationship */
  request: Plagiarism_Search_Requests;
  request_id: Scalars["bigint"];
  sentence: Scalars["String"];
  status: Scalars["String"];
  text?: Maybe<Scalars["String"]>;
  updated_at: Scalars["timestamptz"];
};

/** aggregated selection of "plagiarism.search_results" */
export type Plagiarism_Search_Results_Aggregate = {
  __typename?: "plagiarism_search_results_aggregate";
  aggregate?: Maybe<Plagiarism_Search_Results_Aggregate_Fields>;
  nodes: Array<Plagiarism_Search_Results>;
};

/** aggregate fields of "plagiarism.search_results" */
export type Plagiarism_Search_Results_Aggregate_Fields = {
  __typename?: "plagiarism_search_results_aggregate_fields";
  avg?: Maybe<Plagiarism_Search_Results_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Plagiarism_Search_Results_Max_Fields>;
  min?: Maybe<Plagiarism_Search_Results_Min_Fields>;
  stddev?: Maybe<Plagiarism_Search_Results_Stddev_Fields>;
  stddev_pop?: Maybe<Plagiarism_Search_Results_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plagiarism_Search_Results_Stddev_Samp_Fields>;
  sum?: Maybe<Plagiarism_Search_Results_Sum_Fields>;
  var_pop?: Maybe<Plagiarism_Search_Results_Var_Pop_Fields>;
  var_samp?: Maybe<Plagiarism_Search_Results_Var_Samp_Fields>;
  variance?: Maybe<Plagiarism_Search_Results_Variance_Fields>;
};

/** aggregate fields of "plagiarism.search_results" */
export type Plagiarism_Search_Results_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Plagiarism_Search_Results_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Aggregate_Order_By = {
  avg?: Maybe<Plagiarism_Search_Results_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Plagiarism_Search_Results_Max_Order_By>;
  min?: Maybe<Plagiarism_Search_Results_Min_Order_By>;
  stddev?: Maybe<Plagiarism_Search_Results_Stddev_Order_By>;
  stddev_pop?: Maybe<Plagiarism_Search_Results_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Plagiarism_Search_Results_Stddev_Samp_Order_By>;
  sum?: Maybe<Plagiarism_Search_Results_Sum_Order_By>;
  var_pop?: Maybe<Plagiarism_Search_Results_Var_Pop_Order_By>;
  var_samp?: Maybe<Plagiarism_Search_Results_Var_Samp_Order_By>;
  variance?: Maybe<Plagiarism_Search_Results_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Arr_Rel_Insert_Input = {
  data: Array<Plagiarism_Search_Results_Insert_Input>;
  on_conflict?: Maybe<Plagiarism_Search_Results_On_Conflict>;
};

/** aggregate avg on columns */
export type Plagiarism_Search_Results_Avg_Fields = {
  __typename?: "plagiarism_search_results_avg_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  page?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  request_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Avg_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "plagiarism.search_results". All fields are combined with a logical 'AND'. */
export type Plagiarism_Search_Results_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Plagiarism_Search_Results_Bool_Exp>>>;
  _not?: Maybe<Plagiarism_Search_Results_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Plagiarism_Search_Results_Bool_Exp>>>;
  content?: Maybe<Contents_Bool_Exp>;
  content_id?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  next_sentence?: Maybe<String_Comparison_Exp>;
  page?: Maybe<Int_Comparison_Exp>;
  percent?: Maybe<Float8_Comparison_Exp>;
  prev_sentence?: Maybe<String_Comparison_Exp>;
  request?: Maybe<Plagiarism_Search_Requests_Bool_Exp>;
  request_id?: Maybe<Bigint_Comparison_Exp>;
  sentence?: Maybe<String_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  text?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "plagiarism.search_results" */
export enum Plagiarism_Search_Results_Constraint {
  /** unique or primary key constraint */
  SearchResultsPkey = "search_results_pkey",
  /** unique or primary key constraint */
  SearchResultsRequestIdSentencePageContentIdKey = "search_results_request_id_sentence_page_content_id_key"
}

/** input type for incrementing integer columne in table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Inc_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  page?: Maybe<Scalars["Int"]>;
  request_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Insert_Input = {
  content?: Maybe<Contents_Obj_Rel_Insert_Input>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  next_sentence?: Maybe<Scalars["String"]>;
  page?: Maybe<Scalars["Int"]>;
  percent?: Maybe<Scalars["float8"]>;
  prev_sentence?: Maybe<Scalars["String"]>;
  request?: Maybe<Plagiarism_Search_Requests_Obj_Rel_Insert_Input>;
  request_id?: Maybe<Scalars["bigint"]>;
  sentence?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Plagiarism_Search_Results_Max_Fields = {
  __typename?: "plagiarism_search_results_max_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  next_sentence?: Maybe<Scalars["String"]>;
  page?: Maybe<Scalars["Int"]>;
  percent?: Maybe<Scalars["float8"]>;
  prev_sentence?: Maybe<Scalars["String"]>;
  request_id?: Maybe<Scalars["bigint"]>;
  sentence?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Max_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  next_sentence?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  prev_sentence?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
  sentence?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Plagiarism_Search_Results_Min_Fields = {
  __typename?: "plagiarism_search_results_min_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  next_sentence?: Maybe<Scalars["String"]>;
  page?: Maybe<Scalars["Int"]>;
  percent?: Maybe<Scalars["float8"]>;
  prev_sentence?: Maybe<Scalars["String"]>;
  request_id?: Maybe<Scalars["bigint"]>;
  sentence?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Min_Order_By = {
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  next_sentence?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  prev_sentence?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
  sentence?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Mutation_Response = {
  __typename?: "plagiarism_search_results_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Plagiarism_Search_Results>;
};

/** input type for inserting object relation for remote table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Obj_Rel_Insert_Input = {
  data: Plagiarism_Search_Results_Insert_Input;
  on_conflict?: Maybe<Plagiarism_Search_Results_On_Conflict>;
};

/** on conflict condition type for table "plagiarism.search_results" */
export type Plagiarism_Search_Results_On_Conflict = {
  constraint: Plagiarism_Search_Results_Constraint;
  update_columns: Array<Plagiarism_Search_Results_Update_Column>;
  where?: Maybe<Plagiarism_Search_Results_Bool_Exp>;
};

/** ordering options when selecting data from "plagiarism.search_results" */
export type Plagiarism_Search_Results_Order_By = {
  content?: Maybe<Contents_Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  next_sentence?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  prev_sentence?: Maybe<Order_By>;
  request?: Maybe<Plagiarism_Search_Requests_Order_By>;
  request_id?: Maybe<Order_By>;
  sentence?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  text?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "plagiarism.search_results" */
export enum Plagiarism_Search_Results_Select_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  NextSentence = "next_sentence",
  /** column name */
  Page = "page",
  /** column name */
  Percent = "percent",
  /** column name */
  PrevSentence = "prev_sentence",
  /** column name */
  RequestId = "request_id",
  /** column name */
  Sentence = "sentence",
  /** column name */
  Status = "status",
  /** column name */
  Text = "text",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Set_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  next_sentence?: Maybe<Scalars["String"]>;
  page?: Maybe<Scalars["Int"]>;
  percent?: Maybe<Scalars["float8"]>;
  prev_sentence?: Maybe<Scalars["String"]>;
  request_id?: Maybe<Scalars["bigint"]>;
  sentence?: Maybe<Scalars["String"]>;
  status?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Plagiarism_Search_Results_Stddev_Fields = {
  __typename?: "plagiarism_search_results_stddev_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  page?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  request_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Stddev_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Plagiarism_Search_Results_Stddev_Pop_Fields = {
  __typename?: "plagiarism_search_results_stddev_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  page?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  request_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Stddev_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Plagiarism_Search_Results_Stddev_Samp_Fields = {
  __typename?: "plagiarism_search_results_stddev_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  page?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  request_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Stddev_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Plagiarism_Search_Results_Sum_Fields = {
  __typename?: "plagiarism_search_results_sum_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  page?: Maybe<Scalars["Int"]>;
  percent?: Maybe<Scalars["float8"]>;
  request_id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Sum_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
};

/** update columns of table "plagiarism.search_results" */
export enum Plagiarism_Search_Results_Update_Column {
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  NextSentence = "next_sentence",
  /** column name */
  Page = "page",
  /** column name */
  Percent = "percent",
  /** column name */
  PrevSentence = "prev_sentence",
  /** column name */
  RequestId = "request_id",
  /** column name */
  Sentence = "sentence",
  /** column name */
  Status = "status",
  /** column name */
  Text = "text",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Plagiarism_Search_Results_Var_Pop_Fields = {
  __typename?: "plagiarism_search_results_var_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  page?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  request_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Var_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Plagiarism_Search_Results_Var_Samp_Fields = {
  __typename?: "plagiarism_search_results_var_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  page?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  request_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Var_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Plagiarism_Search_Results_Variance_Fields = {
  __typename?: "plagiarism_search_results_variance_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  page?: Maybe<Scalars["Float"]>;
  percent?: Maybe<Scalars["Float"]>;
  request_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "plagiarism.search_results" */
export type Plagiarism_Search_Results_Variance_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  page?: Maybe<Order_By>;
  percent?: Maybe<Order_By>;
  request_id?: Maybe<Order_By>;
};

export type PlagiarismRequest = {
  __typename?: "PlagiarismRequest";
  id?: Maybe<Scalars["Int"]>;
  token?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type QPayData = {
  __typename?: "QPayData";
  deeplinks?: Maybe<Array<Maybe<DeepLink>>>;
  invoiceId?: Maybe<Scalars["String"]>;
  qrCode?: Maybe<Scalars["String"]>;
  qrImage?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
};

export type QPayInvoice = {
  __typename?: "QPayInvoice";
  jsonData?: Maybe<QPayData>;
  resultCode?: Maybe<Scalars["String"]>;
  resultMessage?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type QPayResult = {
  __typename?: "QPayResult";
  resultCode?: Maybe<Scalars["String"]>;
  resultMessage?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  health: Scalars["String"];
};

/** query root */
export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "author_reviews" */
  author_reviews: Array<Author_Reviews>;
  /** fetch aggregated fields from the table: "author_reviews" */
  author_reviews_aggregate: Author_Reviews_Aggregate;
  /** fetch data from the table: "author_reviews" using primary key columns */
  author_reviews_by_pk?: Maybe<Author_Reviews>;
  /** fetch data from the table: "authors" */
  authors: Array<Authors>;
  /** fetch aggregated fields from the table: "authors" */
  authors_aggregate: Authors_Aggregate;
  /** fetch data from the table: "authors" using primary key columns */
  authors_by_pk?: Maybe<Authors>;
  /** fetch data from the table: "bookmarks" */
  bookmarks: Array<Bookmarks>;
  /** fetch aggregated fields from the table: "bookmarks" */
  bookmarks_aggregate: Bookmarks_Aggregate;
  /** fetch data from the table: "bookmarks" using primary key columns */
  bookmarks_by_pk?: Maybe<Bookmarks>;
  checkResult: Scalars["Boolean"];
  /** fetch data from the table: "content_files" */
  content_files: Array<Content_Files>;
  /** fetch aggregated fields from the table: "content_files" */
  content_files_aggregate: Content_Files_Aggregate;
  /** fetch data from the table: "content_files" using primary key columns */
  content_files_by_pk?: Maybe<Content_Files>;
  /** fetch data from the table: "content_prices" */
  content_prices: Array<Content_Prices>;
  /** fetch aggregated fields from the table: "content_prices" */
  content_prices_aggregate: Content_Prices_Aggregate;
  /** fetch data from the table: "content_prices" using primary key columns */
  content_prices_by_pk?: Maybe<Content_Prices>;
  /** fetch data from the table: "content_tocs" */
  content_tocs: Array<Content_Tocs>;
  /** fetch aggregated fields from the table: "content_tocs" */
  content_tocs_aggregate: Content_Tocs_Aggregate;
  /** fetch data from the table: "content_tocs" using primary key columns */
  content_tocs_by_pk?: Maybe<Content_Tocs>;
  /** fetch data from the table: "contents" */
  contents: Array<Contents>;
  /** fetch aggregated fields from the table: "contents" */
  contents_aggregate: Contents_Aggregate;
  /** fetch data from the table: "contents" using primary key columns */
  contents_by_pk?: Maybe<Contents>;
  /** fetch data from the table: "emails" */
  emails: Array<Emails>;
  /** fetch aggregated fields from the table: "emails" */
  emails_aggregate: Emails_Aggregate;
  /** fetch data from the table: "emails" using primary key columns */
  emails_by_pk?: Maybe<Emails>;
  /** fetch data from the table: "files" */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "files" */
  files_aggregate: Files_Aggregate;
  /** fetch data from the table: "files" using primary key columns */
  files_by_pk?: Maybe<Files>;
  health: Scalars["String"];
  healthSignedUrl?: Maybe<Scalars["String"]>;
  hello?: Maybe<Scalars["String"]>;
  /** fetch data from the table: "map_contents_authors" */
  map_contents_authors: Array<Map_Contents_Authors>;
  /** fetch aggregated fields from the table: "map_contents_authors" */
  map_contents_authors_aggregate: Map_Contents_Authors_Aggregate;
  /** fetch data from the table: "map_contents_authors" using primary key columns */
  map_contents_authors_by_pk?: Maybe<Map_Contents_Authors>;
  /** fetch data from the table: "map_contents_organizations" */
  map_contents_organizations: Array<Map_Contents_Organizations>;
  /** fetch aggregated fields from the table: "map_contents_organizations" */
  map_contents_organizations_aggregate: Map_Contents_Organizations_Aggregate;
  /** fetch data from the table: "map_contents_organizations" using primary key columns */
  map_contents_organizations_by_pk?: Maybe<Map_Contents_Organizations>;
  /** fetch data from the table: "map_contents_packages" */
  map_contents_packages: Array<Map_Contents_Packages>;
  /** fetch aggregated fields from the table: "map_contents_packages" */
  map_contents_packages_aggregate: Map_Contents_Packages_Aggregate;
  /** fetch data from the table: "map_contents_packages" using primary key columns */
  map_contents_packages_by_pk?: Maybe<Map_Contents_Packages>;
  /** fetch data from the table: "map_contents_tags" */
  map_contents_tags: Array<Map_Contents_Tags>;
  /** fetch aggregated fields from the table: "map_contents_tags" */
  map_contents_tags_aggregate: Map_Contents_Tags_Aggregate;
  /** fetch data from the table: "map_contents_tags" using primary key columns */
  map_contents_tags_by_pk?: Maybe<Map_Contents_Tags>;
  /** fetch data from the table: "map_packages_files" */
  map_packages_files: Array<Map_Packages_Files>;
  /** fetch aggregated fields from the table: "map_packages_files" */
  map_packages_files_aggregate: Map_Packages_Files_Aggregate;
  /** fetch data from the table: "map_packages_files" using primary key columns */
  map_packages_files_by_pk?: Maybe<Map_Packages_Files>;
  /** fetch data from the table: "map_users_contents_status" */
  map_users_contents_status: Array<Map_Users_Contents_Status>;
  /** fetch aggregated fields from the table: "map_users_contents_status" */
  map_users_contents_status_aggregate: Map_Users_Contents_Status_Aggregate;
  /** fetch data from the table: "map_users_contents_status" using primary key columns */
  map_users_contents_status_by_pk?: Maybe<Map_Users_Contents_Status>;
  /** fetch data from the table: "map_users_files" */
  map_users_files: Array<Map_Users_Files>;
  /** fetch aggregated fields from the table: "map_users_files" */
  map_users_files_aggregate: Map_Users_Files_Aggregate;
  /** fetch data from the table: "map_users_files" using primary key columns */
  map_users_files_by_pk?: Maybe<Map_Users_Files>;
  /** fetch data from the table: "map_users_memberships" */
  map_users_memberships: Array<Map_Users_Memberships>;
  /** fetch aggregated fields from the table: "map_users_memberships" */
  map_users_memberships_aggregate: Map_Users_Memberships_Aggregate;
  /** fetch data from the table: "map_users_memberships" using primary key columns */
  map_users_memberships_by_pk?: Maybe<Map_Users_Memberships>;
  /** fetch data from the table: "map_users_organizations" */
  map_users_organizations: Array<Map_Users_Organizations>;
  /** fetch aggregated fields from the table: "map_users_organizations" */
  map_users_organizations_aggregate: Map_Users_Organizations_Aggregate;
  /** fetch data from the table: "map_users_organizations" using primary key columns */
  map_users_organizations_by_pk?: Maybe<Map_Users_Organizations>;
  /** fetch data from the table: "map_users_roles" */
  map_users_roles: Array<Map_Users_Roles>;
  /** fetch aggregated fields from the table: "map_users_roles" */
  map_users_roles_aggregate: Map_Users_Roles_Aggregate;
  /** fetch data from the table: "map_users_roles" using primary key columns */
  map_users_roles_by_pk?: Maybe<Map_Users_Roles>;
  /** fetch data from the table: "marketing.active_banners" */
  marketing_active_banners: Array<Marketing_Active_Banners>;
  /** fetch aggregated fields from the table: "marketing.active_banners" */
  marketing_active_banners_aggregate: Marketing_Active_Banners_Aggregate;
  /** fetch data from the table: "marketing.banners" */
  marketing_banners: Array<Marketing_Banners>;
  /** fetch aggregated fields from the table: "marketing.banners" */
  marketing_banners_aggregate: Marketing_Banners_Aggregate;
  /** fetch data from the table: "marketing.banners" using primary key columns */
  marketing_banners_by_pk?: Maybe<Marketing_Banners>;
  /** fetch data from the table: "marketing.home_options" */
  marketing_home_options: Array<Marketing_Home_Options>;
  /** fetch aggregated fields from the table: "marketing.home_options" */
  marketing_home_options_aggregate: Marketing_Home_Options_Aggregate;
  /** fetch data from the table: "marketing.home_options" using primary key columns */
  marketing_home_options_by_pk?: Maybe<Marketing_Home_Options>;
  /** fetch data from the table: "marketing.promotions" */
  marketing_promotions: Array<Marketing_Promotions>;
  /** fetch aggregated fields from the table: "marketing.promotions" */
  marketing_promotions_aggregate: Marketing_Promotions_Aggregate;
  /** fetch data from the table: "marketing.promotions" using primary key columns */
  marketing_promotions_by_pk?: Maybe<Marketing_Promotions>;
  /** fetch data from the table: "marketing.users_history" */
  marketing_users_history: Array<Marketing_Users_History>;
  /** fetch aggregated fields from the table: "marketing.users_history" */
  marketing_users_history_aggregate: Marketing_Users_History_Aggregate;
  /** fetch data from the table: "marketing.users_history" using primary key columns */
  marketing_users_history_by_pk?: Maybe<Marketing_Users_History>;
  /** fetch data from the table: "memberships" */
  memberships: Array<Memberships>;
  /** fetch aggregated fields from the table: "memberships" */
  memberships_aggregate: Memberships_Aggregate;
  /** fetch data from the table: "memberships" using primary key columns */
  memberships_by_pk?: Maybe<Memberships>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table: "packages" */
  packages: Array<Packages>;
  /** fetch aggregated fields from the table: "packages" */
  packages_aggregate: Packages_Aggregate;
  /** fetch data from the table: "packages" using primary key columns */
  packages_by_pk?: Maybe<Packages>;
  /** fetch data from the table: "payment.details" */
  payment_details: Array<Payment_Details>;
  /** fetch aggregated fields from the table: "payment.details" */
  payment_details_aggregate: Payment_Details_Aggregate;
  /** fetch data from the table: "payment.details" using primary key columns */
  payment_details_by_pk?: Maybe<Payment_Details>;
  /** fetch data from the table: "payment.headers" */
  payment_headers: Array<Payment_Headers>;
  /** fetch aggregated fields from the table: "payment.headers" */
  payment_headers_aggregate: Payment_Headers_Aggregate;
  /** fetch data from the table: "payment.headers" using primary key columns */
  payment_headers_by_pk?: Maybe<Payment_Headers>;
  /** fetch data from the table: "payment.transactions" */
  payment_transactions: Array<Payment_Transactions>;
  /** fetch aggregated fields from the table: "payment.transactions" */
  payment_transactions_aggregate: Payment_Transactions_Aggregate;
  /** fetch data from the table: "payment.transactions" using primary key columns */
  payment_transactions_by_pk?: Maybe<Payment_Transactions>;
  /** fetch data from the table: "payment.vw_organizations_balance" */
  payment_vw_organizations_balance: Array<Payment_Vw_Organizations_Balance>;
  /** fetch aggregated fields from the table: "payment.vw_organizations_balance" */
  payment_vw_organizations_balance_aggregate: Payment_Vw_Organizations_Balance_Aggregate;
  /** fetch data from the table: "payment.vw_paid_contents" */
  payment_vw_paid_contents: Array<Payment_Vw_Paid_Contents>;
  /** fetch aggregated fields from the table: "payment.vw_paid_contents" */
  payment_vw_paid_contents_aggregate: Payment_Vw_Paid_Contents_Aggregate;
  /** fetch data from the table: "payment.vw_paid_contents_count" */
  payment_vw_paid_contents_count: Array<Payment_Vw_Paid_Contents_Count>;
  /** fetch aggregated fields from the table: "payment.vw_paid_contents_count" */
  payment_vw_paid_contents_count_aggregate: Payment_Vw_Paid_Contents_Count_Aggregate;
  /** fetch data from the table: "payment.withdraw_requests" */
  payment_withdraw_requests: Array<Payment_Withdraw_Requests>;
  /** fetch aggregated fields from the table: "payment.withdraw_requests" */
  payment_withdraw_requests_aggregate: Payment_Withdraw_Requests_Aggregate;
  /** fetch data from the table: "payment.withdraw_requests" using primary key columns */
  payment_withdraw_requests_by_pk?: Maybe<Payment_Withdraw_Requests>;
  plagiarismHealth?: Maybe<Scalars["String"]>;
  /** fetch data from the table: "plagiarism.content_texts" */
  plagiarism_content_texts: Array<Plagiarism_Content_Texts>;
  /** fetch aggregated fields from the table: "plagiarism.content_texts" */
  plagiarism_content_texts_aggregate: Plagiarism_Content_Texts_Aggregate;
  /** fetch data from the table: "plagiarism.content_texts" using primary key columns */
  plagiarism_content_texts_by_pk?: Maybe<Plagiarism_Content_Texts>;
  /** fetch data from the table: "plagiarism.search_requests" */
  plagiarism_search_requests: Array<Plagiarism_Search_Requests>;
  /** fetch aggregated fields from the table: "plagiarism.search_requests" */
  plagiarism_search_requests_aggregate: Plagiarism_Search_Requests_Aggregate;
  /** fetch data from the table: "plagiarism.search_requests" using primary key columns */
  plagiarism_search_requests_by_pk?: Maybe<Plagiarism_Search_Requests>;
  /** fetch data from the table: "plagiarism.search_results" */
  plagiarism_search_results: Array<Plagiarism_Search_Results>;
  /** fetch aggregated fields from the table: "plagiarism.search_results" */
  plagiarism_search_results_aggregate: Plagiarism_Search_Results_Aggregate;
  /** fetch data from the table: "plagiarism.search_results" using primary key columns */
  plagiarism_search_results_by_pk?: Maybe<Plagiarism_Search_Results>;
  /** execute function "random_authors" which returns "authors" */
  random_authors: Array<Authors>;
  /** execute function "random_authors" and query aggregates on result of table type "authors" */
  random_authors_aggregate: Authors_Aggregate;
  /** execute function "random_contents" which returns "contents" */
  random_contents: Array<Contents>;
  /** execute function "random_contents" and query aggregates on result of table type "contents" */
  random_contents_aggregate: Contents_Aggregate;
  /** fetch data from the table: "reviews" */
  reviews: Array<Reviews>;
  /** fetch aggregated fields from the table: "reviews" */
  reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  search: Array<Content>;
  /** fetch data from the table: "tag_options" */
  tag_options: Array<Tag_Options>;
  /** fetch aggregated fields from the table: "tag_options" */
  tag_options_aggregate: Tag_Options_Aggregate;
  /** fetch data from the table: "tag_options" using primary key columns */
  tag_options_by_pk?: Maybe<Tag_Options>;
  /** fetch data from the table: "tag_options_tr" */
  tag_options_tr: Array<Tag_Options_Tr>;
  /** fetch aggregated fields from the table: "tag_options_tr" */
  tag_options_tr_aggregate: Tag_Options_Tr_Aggregate;
  /** fetch data from the table: "tag_options_tr" using primary key columns */
  tag_options_tr_by_pk?: Maybe<Tag_Options_Tr>;
  /** fetch data from the table: "tag_types" */
  tag_types: Array<Tag_Types>;
  /** fetch aggregated fields from the table: "tag_types" */
  tag_types_aggregate: Tag_Types_Aggregate;
  /** fetch data from the table: "tag_types" using primary key columns */
  tag_types_by_pk?: Maybe<Tag_Types>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "vw_authors" */
  vw_authors: Array<Vw_Authors>;
  /** fetch aggregated fields from the table: "vw_authors" */
  vw_authors_aggregate: Vw_Authors_Aggregate;
  /** fetch data from the table: "vw_best_authors" */
  vw_best_authors: Array<Vw_Best_Authors>;
  /** fetch aggregated fields from the table: "vw_best_authors" */
  vw_best_authors_aggregate: Vw_Best_Authors_Aggregate;
  /** fetch data from the table: "vw_best_ranked_contents" */
  vw_best_ranked_contents: Array<Vw_Best_Ranked_Contents>;
  /** fetch aggregated fields from the table: "vw_best_ranked_contents" */
  vw_best_ranked_contents_aggregate: Vw_Best_Ranked_Contents_Aggregate;
  /** fetch data from the table: "vw_bestseller_contents" */
  vw_bestseller_contents: Array<Vw_Bestseller_Contents>;
  /** fetch aggregated fields from the table: "vw_bestseller_contents" */
  vw_bestseller_contents_aggregate: Vw_Bestseller_Contents_Aggregate;
  /** fetch data from the table: "vw_contents" */
  vw_contents: Array<Vw_Contents>;
  /** fetch aggregated fields from the table: "vw_contents" */
  vw_contents_aggregate: Vw_Contents_Aggregate;
  /** fetch data from the table: "vw_featured_contents" */
  vw_featured_contents: Array<Vw_Featured_Contents>;
  /** fetch aggregated fields from the table: "vw_featured_contents" */
  vw_featured_contents_aggregate: Vw_Featured_Contents_Aggregate;
  /** fetch data from the table: "vw_organization_contents" */
  vw_organization_contents: Array<Vw_Organization_Contents>;
  /** fetch aggregated fields from the table: "vw_organization_contents" */
  vw_organization_contents_aggregate: Vw_Organization_Contents_Aggregate;
  /** fetch data from the table: "vw_organizations" */
  vw_organizations: Array<Vw_Organizations>;
  /** fetch aggregated fields from the table: "vw_organizations" */
  vw_organizations_aggregate: Vw_Organizations_Aggregate;
  /** fetch data from the table: "vw_organizations_content_count" */
  vw_organizations_content_count: Array<Vw_Organizations_Content_Count>;
  /** fetch aggregated fields from the table: "vw_organizations_content_count" */
  vw_organizations_content_count_aggregate: Vw_Organizations_Content_Count_Aggregate;
  /** fetch data from the table: "vw_organizations_paid_contents" */
  vw_organizations_paid_contents: Array<Vw_Organizations_Paid_Contents>;
  /** fetch aggregated fields from the table: "vw_organizations_paid_contents" */
  vw_organizations_paid_contents_aggregate: Vw_Organizations_Paid_Contents_Aggregate;
  /** fetch data from the table: "vw_users" */
  vw_users: Array<Vw_Users>;
  /** fetch aggregated fields from the table: "vw_users" */
  vw_users_aggregate: Vw_Users_Aggregate;
};

/** query root */
export type Query_RootAuthor_ReviewsArgs = {
  distinct_on?: Maybe<Array<Author_Reviews_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Author_Reviews_Order_By>>;
  where?: Maybe<Author_Reviews_Bool_Exp>;
};

/** query root */
export type Query_RootAuthor_Reviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Author_Reviews_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Author_Reviews_Order_By>>;
  where?: Maybe<Author_Reviews_Bool_Exp>;
};

/** query root */
export type Query_RootAuthor_Reviews_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootAuthorsArgs = {
  distinct_on?: Maybe<Array<Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Authors_Order_By>>;
  where?: Maybe<Authors_Bool_Exp>;
};

/** query root */
export type Query_RootAuthors_AggregateArgs = {
  distinct_on?: Maybe<Array<Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Authors_Order_By>>;
  where?: Maybe<Authors_Bool_Exp>;
};

/** query root */
export type Query_RootAuthors_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootBookmarksArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};

/** query root */
export type Query_RootBookmarks_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};

/** query root */
export type Query_RootBookmarks_By_PkArgs = {
  content_id: Scalars["bigint"];
  user_id: Scalars["String"];
};

/** query root */
export type Query_RootCheckResultArgs = {
  requestId?: Maybe<Scalars["Int"]>;
  token?: Maybe<Scalars["String"]>;
};

/** query root */
export type Query_RootContent_FilesArgs = {
  distinct_on?: Maybe<Array<Content_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Files_Order_By>>;
  where?: Maybe<Content_Files_Bool_Exp>;
};

/** query root */
export type Query_RootContent_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Content_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Files_Order_By>>;
  where?: Maybe<Content_Files_Bool_Exp>;
};

/** query root */
export type Query_RootContent_Files_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootContent_PricesArgs = {
  distinct_on?: Maybe<Array<Content_Prices_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Prices_Order_By>>;
  where?: Maybe<Content_Prices_Bool_Exp>;
};

/** query root */
export type Query_RootContent_Prices_AggregateArgs = {
  distinct_on?: Maybe<Array<Content_Prices_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Prices_Order_By>>;
  where?: Maybe<Content_Prices_Bool_Exp>;
};

/** query root */
export type Query_RootContent_Prices_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootContent_TocsArgs = {
  distinct_on?: Maybe<Array<Content_Tocs_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Tocs_Order_By>>;
  where?: Maybe<Content_Tocs_Bool_Exp>;
};

/** query root */
export type Query_RootContent_Tocs_AggregateArgs = {
  distinct_on?: Maybe<Array<Content_Tocs_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Tocs_Order_By>>;
  where?: Maybe<Content_Tocs_Bool_Exp>;
};

/** query root */
export type Query_RootContent_Tocs_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootContentsArgs = {
  distinct_on?: Maybe<Array<Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Contents_Order_By>>;
  where?: Maybe<Contents_Bool_Exp>;
};

/** query root */
export type Query_RootContents_AggregateArgs = {
  distinct_on?: Maybe<Array<Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Contents_Order_By>>;
  where?: Maybe<Contents_Bool_Exp>;
};

/** query root */
export type Query_RootContents_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootEmailsArgs = {
  distinct_on?: Maybe<Array<Emails_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Emails_Order_By>>;
  where?: Maybe<Emails_Bool_Exp>;
};

/** query root */
export type Query_RootEmails_AggregateArgs = {
  distinct_on?: Maybe<Array<Emails_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Emails_Order_By>>;
  where?: Maybe<Emails_Bool_Exp>;
};

/** query root */
export type Query_RootEmails_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootFilesArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Files_Order_By>>;
  where?: Maybe<Files_Bool_Exp>;
};

/** query root */
export type Query_RootFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Files_Order_By>>;
  where?: Maybe<Files_Bool_Exp>;
};

/** query root */
export type Query_RootFiles_By_PkArgs = {
  key: Scalars["String"];
};

/** query root */
export type Query_RootMap_Contents_AuthorsArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Authors_Order_By>>;
  where?: Maybe<Map_Contents_Authors_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Contents_Authors_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Authors_Order_By>>;
  where?: Maybe<Map_Contents_Authors_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Contents_Authors_By_PkArgs = {
  author_id: Scalars["bigint"];
  content_id: Scalars["bigint"];
};

/** query root */
export type Query_RootMap_Contents_OrganizationsArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Organizations_Order_By>>;
  where?: Maybe<Map_Contents_Organizations_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Contents_Organizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Organizations_Order_By>>;
  where?: Maybe<Map_Contents_Organizations_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Contents_Organizations_By_PkArgs = {
  content_id: Scalars["bigint"];
  organization_id: Scalars["bigint"];
};

/** query root */
export type Query_RootMap_Contents_PackagesArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Packages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Packages_Order_By>>;
  where?: Maybe<Map_Contents_Packages_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Contents_Packages_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Packages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Packages_Order_By>>;
  where?: Maybe<Map_Contents_Packages_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Contents_Packages_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootMap_Contents_TagsArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Tags_Order_By>>;
  where?: Maybe<Map_Contents_Tags_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Contents_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Tags_Order_By>>;
  where?: Maybe<Map_Contents_Tags_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Contents_Tags_By_PkArgs = {
  content_id: Scalars["Int"];
  tag_id: Scalars["Int"];
};

/** query root */
export type Query_RootMap_Packages_FilesArgs = {
  distinct_on?: Maybe<Array<Map_Packages_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Packages_Files_Order_By>>;
  where?: Maybe<Map_Packages_Files_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Packages_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Packages_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Packages_Files_Order_By>>;
  where?: Maybe<Map_Packages_Files_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Packages_Files_By_PkArgs = {
  file_id: Scalars["String"];
  package_id: Scalars["bigint"];
};

/** query root */
export type Query_RootMap_Users_Contents_StatusArgs = {
  distinct_on?: Maybe<Array<Map_Users_Contents_Status_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Contents_Status_Order_By>>;
  where?: Maybe<Map_Users_Contents_Status_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Users_Contents_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Contents_Status_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Contents_Status_Order_By>>;
  where?: Maybe<Map_Users_Contents_Status_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Users_Contents_Status_By_PkArgs = {
  content_id: Scalars["bigint"];
  user_id: Scalars["String"];
};

/** query root */
export type Query_RootMap_Users_FilesArgs = {
  distinct_on?: Maybe<Array<Map_Users_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Files_Order_By>>;
  where?: Maybe<Map_Users_Files_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Users_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Files_Order_By>>;
  where?: Maybe<Map_Users_Files_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Users_Files_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootMap_Users_MembershipsArgs = {
  distinct_on?: Maybe<Array<Map_Users_Memberships_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Memberships_Order_By>>;
  where?: Maybe<Map_Users_Memberships_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Users_Memberships_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Memberships_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Memberships_Order_By>>;
  where?: Maybe<Map_Users_Memberships_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Users_Memberships_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootMap_Users_OrganizationsArgs = {
  distinct_on?: Maybe<Array<Map_Users_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Organizations_Order_By>>;
  where?: Maybe<Map_Users_Organizations_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Users_Organizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Organizations_Order_By>>;
  where?: Maybe<Map_Users_Organizations_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Users_Organizations_By_PkArgs = {
  organization_id: Scalars["bigint"];
  user_id: Scalars["String"];
};

/** query root */
export type Query_RootMap_Users_RolesArgs = {
  distinct_on?: Maybe<Array<Map_Users_Roles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Roles_Order_By>>;
  where?: Maybe<Map_Users_Roles_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Users_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Roles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Roles_Order_By>>;
  where?: Maybe<Map_Users_Roles_Bool_Exp>;
};

/** query root */
export type Query_RootMap_Users_Roles_By_PkArgs = {
  role_id: Scalars["bigint"];
  user_id: Scalars["String"];
};

/** query root */
export type Query_RootMarketing_Active_BannersArgs = {
  distinct_on?: Maybe<Array<Marketing_Active_Banners_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Active_Banners_Order_By>>;
  where?: Maybe<Marketing_Active_Banners_Bool_Exp>;
};

/** query root */
export type Query_RootMarketing_Active_Banners_AggregateArgs = {
  distinct_on?: Maybe<Array<Marketing_Active_Banners_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Active_Banners_Order_By>>;
  where?: Maybe<Marketing_Active_Banners_Bool_Exp>;
};

/** query root */
export type Query_RootMarketing_BannersArgs = {
  distinct_on?: Maybe<Array<Marketing_Banners_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Banners_Order_By>>;
  where?: Maybe<Marketing_Banners_Bool_Exp>;
};

/** query root */
export type Query_RootMarketing_Banners_AggregateArgs = {
  distinct_on?: Maybe<Array<Marketing_Banners_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Banners_Order_By>>;
  where?: Maybe<Marketing_Banners_Bool_Exp>;
};

/** query root */
export type Query_RootMarketing_Banners_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootMarketing_Home_OptionsArgs = {
  distinct_on?: Maybe<Array<Marketing_Home_Options_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Home_Options_Order_By>>;
  where?: Maybe<Marketing_Home_Options_Bool_Exp>;
};

/** query root */
export type Query_RootMarketing_Home_Options_AggregateArgs = {
  distinct_on?: Maybe<Array<Marketing_Home_Options_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Home_Options_Order_By>>;
  where?: Maybe<Marketing_Home_Options_Bool_Exp>;
};

/** query root */
export type Query_RootMarketing_Home_Options_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootMarketing_PromotionsArgs = {
  distinct_on?: Maybe<Array<Marketing_Promotions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Promotions_Order_By>>;
  where?: Maybe<Marketing_Promotions_Bool_Exp>;
};

/** query root */
export type Query_RootMarketing_Promotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Marketing_Promotions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Promotions_Order_By>>;
  where?: Maybe<Marketing_Promotions_Bool_Exp>;
};

/** query root */
export type Query_RootMarketing_Promotions_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootMarketing_Users_HistoryArgs = {
  distinct_on?: Maybe<Array<Marketing_Users_History_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Users_History_Order_By>>;
  where?: Maybe<Marketing_Users_History_Bool_Exp>;
};

/** query root */
export type Query_RootMarketing_Users_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Marketing_Users_History_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Users_History_Order_By>>;
  where?: Maybe<Marketing_Users_History_Bool_Exp>;
};

/** query root */
export type Query_RootMarketing_Users_History_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootMembershipsArgs = {
  distinct_on?: Maybe<Array<Memberships_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Memberships_Order_By>>;
  where?: Maybe<Memberships_Bool_Exp>;
};

/** query root */
export type Query_RootMemberships_AggregateArgs = {
  distinct_on?: Maybe<Array<Memberships_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Memberships_Order_By>>;
  where?: Maybe<Memberships_Bool_Exp>;
};

/** query root */
export type Query_RootMemberships_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootOrganizationsArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};

/** query root */
export type Query_RootOrganizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};

/** query root */
export type Query_RootOrganizations_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootPackagesArgs = {
  distinct_on?: Maybe<Array<Packages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Packages_Order_By>>;
  where?: Maybe<Packages_Bool_Exp>;
};

/** query root */
export type Query_RootPackages_AggregateArgs = {
  distinct_on?: Maybe<Array<Packages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Packages_Order_By>>;
  where?: Maybe<Packages_Bool_Exp>;
};

/** query root */
export type Query_RootPackages_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootPayment_DetailsArgs = {
  distinct_on?: Maybe<Array<Payment_Details_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Details_Order_By>>;
  where?: Maybe<Payment_Details_Bool_Exp>;
};

/** query root */
export type Query_RootPayment_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Details_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Details_Order_By>>;
  where?: Maybe<Payment_Details_Bool_Exp>;
};

/** query root */
export type Query_RootPayment_Details_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootPayment_HeadersArgs = {
  distinct_on?: Maybe<Array<Payment_Headers_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Headers_Order_By>>;
  where?: Maybe<Payment_Headers_Bool_Exp>;
};

/** query root */
export type Query_RootPayment_Headers_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Headers_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Headers_Order_By>>;
  where?: Maybe<Payment_Headers_Bool_Exp>;
};

/** query root */
export type Query_RootPayment_Headers_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootPayment_TransactionsArgs = {
  distinct_on?: Maybe<Array<Payment_Transactions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Transactions_Order_By>>;
  where?: Maybe<Payment_Transactions_Bool_Exp>;
};

/** query root */
export type Query_RootPayment_Transactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Transactions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Transactions_Order_By>>;
  where?: Maybe<Payment_Transactions_Bool_Exp>;
};

/** query root */
export type Query_RootPayment_Transactions_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootPayment_Vw_Organizations_BalanceArgs = {
  distinct_on?: Maybe<Array<Payment_Vw_Organizations_Balance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Vw_Organizations_Balance_Order_By>>;
  where?: Maybe<Payment_Vw_Organizations_Balance_Bool_Exp>;
};

/** query root */
export type Query_RootPayment_Vw_Organizations_Balance_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Vw_Organizations_Balance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Vw_Organizations_Balance_Order_By>>;
  where?: Maybe<Payment_Vw_Organizations_Balance_Bool_Exp>;
};

/** query root */
export type Query_RootPayment_Vw_Paid_ContentsArgs = {
  distinct_on?: Maybe<Array<Payment_Vw_Paid_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Vw_Paid_Contents_Order_By>>;
  where?: Maybe<Payment_Vw_Paid_Contents_Bool_Exp>;
};

/** query root */
export type Query_RootPayment_Vw_Paid_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Vw_Paid_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Vw_Paid_Contents_Order_By>>;
  where?: Maybe<Payment_Vw_Paid_Contents_Bool_Exp>;
};

/** query root */
export type Query_RootPayment_Vw_Paid_Contents_CountArgs = {
  distinct_on?: Maybe<Array<Payment_Vw_Paid_Contents_Count_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Vw_Paid_Contents_Count_Order_By>>;
  where?: Maybe<Payment_Vw_Paid_Contents_Count_Bool_Exp>;
};

/** query root */
export type Query_RootPayment_Vw_Paid_Contents_Count_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Vw_Paid_Contents_Count_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Vw_Paid_Contents_Count_Order_By>>;
  where?: Maybe<Payment_Vw_Paid_Contents_Count_Bool_Exp>;
};

/** query root */
export type Query_RootPayment_Withdraw_RequestsArgs = {
  distinct_on?: Maybe<Array<Payment_Withdraw_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Withdraw_Requests_Order_By>>;
  where?: Maybe<Payment_Withdraw_Requests_Bool_Exp>;
};

/** query root */
export type Query_RootPayment_Withdraw_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Withdraw_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Withdraw_Requests_Order_By>>;
  where?: Maybe<Payment_Withdraw_Requests_Bool_Exp>;
};

/** query root */
export type Query_RootPayment_Withdraw_Requests_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootPlagiarism_Content_TextsArgs = {
  distinct_on?: Maybe<Array<Plagiarism_Content_Texts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Plagiarism_Content_Texts_Order_By>>;
  where?: Maybe<Plagiarism_Content_Texts_Bool_Exp>;
};

/** query root */
export type Query_RootPlagiarism_Content_Texts_AggregateArgs = {
  distinct_on?: Maybe<Array<Plagiarism_Content_Texts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Plagiarism_Content_Texts_Order_By>>;
  where?: Maybe<Plagiarism_Content_Texts_Bool_Exp>;
};

/** query root */
export type Query_RootPlagiarism_Content_Texts_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootPlagiarism_Search_RequestsArgs = {
  distinct_on?: Maybe<Array<Plagiarism_Search_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Plagiarism_Search_Requests_Order_By>>;
  where?: Maybe<Plagiarism_Search_Requests_Bool_Exp>;
};

/** query root */
export type Query_RootPlagiarism_Search_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Plagiarism_Search_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Plagiarism_Search_Requests_Order_By>>;
  where?: Maybe<Plagiarism_Search_Requests_Bool_Exp>;
};

/** query root */
export type Query_RootPlagiarism_Search_Requests_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootPlagiarism_Search_ResultsArgs = {
  distinct_on?: Maybe<Array<Plagiarism_Search_Results_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Plagiarism_Search_Results_Order_By>>;
  where?: Maybe<Plagiarism_Search_Results_Bool_Exp>;
};

/** query root */
export type Query_RootPlagiarism_Search_Results_AggregateArgs = {
  distinct_on?: Maybe<Array<Plagiarism_Search_Results_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Plagiarism_Search_Results_Order_By>>;
  where?: Maybe<Plagiarism_Search_Results_Bool_Exp>;
};

/** query root */
export type Query_RootPlagiarism_Search_Results_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootRandom_AuthorsArgs = {
  distinct_on?: Maybe<Array<Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Authors_Order_By>>;
  where?: Maybe<Authors_Bool_Exp>;
};

/** query root */
export type Query_RootRandom_Authors_AggregateArgs = {
  distinct_on?: Maybe<Array<Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Authors_Order_By>>;
  where?: Maybe<Authors_Bool_Exp>;
};

/** query root */
export type Query_RootRandom_ContentsArgs = {
  distinct_on?: Maybe<Array<Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Contents_Order_By>>;
  where?: Maybe<Contents_Bool_Exp>;
};

/** query root */
export type Query_RootRandom_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Contents_Order_By>>;
  where?: Maybe<Contents_Bool_Exp>;
};

/** query root */
export type Query_RootReviewsArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};

/** query root */
export type Query_RootReviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};

/** query root */
export type Query_RootReviews_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** query root */
export type Query_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** query root */
export type Query_RootRoles_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootSearchArgs = {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Maybe<OrderBy>>>;
  where: SearchWhere;
};

/** query root */
export type Query_RootTag_OptionsArgs = {
  distinct_on?: Maybe<Array<Tag_Options_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Options_Order_By>>;
  where?: Maybe<Tag_Options_Bool_Exp>;
};

/** query root */
export type Query_RootTag_Options_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Options_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Options_Order_By>>;
  where?: Maybe<Tag_Options_Bool_Exp>;
};

/** query root */
export type Query_RootTag_Options_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootTag_Options_TrArgs = {
  distinct_on?: Maybe<Array<Tag_Options_Tr_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Options_Tr_Order_By>>;
  where?: Maybe<Tag_Options_Tr_Bool_Exp>;
};

/** query root */
export type Query_RootTag_Options_Tr_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Options_Tr_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Options_Tr_Order_By>>;
  where?: Maybe<Tag_Options_Tr_Bool_Exp>;
};

/** query root */
export type Query_RootTag_Options_Tr_By_PkArgs = {
  id: Scalars["Int"];
};

/** query root */
export type Query_RootTag_TypesArgs = {
  distinct_on?: Maybe<Array<Tag_Types_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Types_Order_By>>;
  where?: Maybe<Tag_Types_Bool_Exp>;
};

/** query root */
export type Query_RootTag_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Types_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Types_Order_By>>;
  where?: Maybe<Tag_Types_Bool_Exp>;
};

/** query root */
export type Query_RootTag_Types_By_PkArgs = {
  id: Scalars["bigint"];
};

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars["String"];
};

/** query root */
export type Query_RootVw_AuthorsArgs = {
  distinct_on?: Maybe<Array<Vw_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Authors_Order_By>>;
  where?: Maybe<Vw_Authors_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Authors_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Authors_Order_By>>;
  where?: Maybe<Vw_Authors_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Best_AuthorsArgs = {
  distinct_on?: Maybe<Array<Vw_Best_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Best_Authors_Order_By>>;
  where?: Maybe<Vw_Best_Authors_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Best_Authors_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Best_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Best_Authors_Order_By>>;
  where?: Maybe<Vw_Best_Authors_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Best_Ranked_ContentsArgs = {
  distinct_on?: Maybe<Array<Vw_Best_Ranked_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Best_Ranked_Contents_Order_By>>;
  where?: Maybe<Vw_Best_Ranked_Contents_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Best_Ranked_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Best_Ranked_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Best_Ranked_Contents_Order_By>>;
  where?: Maybe<Vw_Best_Ranked_Contents_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Bestseller_ContentsArgs = {
  distinct_on?: Maybe<Array<Vw_Bestseller_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Bestseller_Contents_Order_By>>;
  where?: Maybe<Vw_Bestseller_Contents_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Bestseller_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Bestseller_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Bestseller_Contents_Order_By>>;
  where?: Maybe<Vw_Bestseller_Contents_Bool_Exp>;
};

/** query root */
export type Query_RootVw_ContentsArgs = {
  distinct_on?: Maybe<Array<Vw_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Contents_Order_By>>;
  where?: Maybe<Vw_Contents_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Contents_Order_By>>;
  where?: Maybe<Vw_Contents_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Featured_ContentsArgs = {
  distinct_on?: Maybe<Array<Vw_Featured_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Featured_Contents_Order_By>>;
  where?: Maybe<Vw_Featured_Contents_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Featured_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Featured_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Featured_Contents_Order_By>>;
  where?: Maybe<Vw_Featured_Contents_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Organization_ContentsArgs = {
  distinct_on?: Maybe<Array<Vw_Organization_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organization_Contents_Order_By>>;
  where?: Maybe<Vw_Organization_Contents_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Organization_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Organization_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organization_Contents_Order_By>>;
  where?: Maybe<Vw_Organization_Contents_Bool_Exp>;
};

/** query root */
export type Query_RootVw_OrganizationsArgs = {
  distinct_on?: Maybe<Array<Vw_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organizations_Order_By>>;
  where?: Maybe<Vw_Organizations_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Organizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organizations_Order_By>>;
  where?: Maybe<Vw_Organizations_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Organizations_Content_CountArgs = {
  distinct_on?: Maybe<Array<Vw_Organizations_Content_Count_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organizations_Content_Count_Order_By>>;
  where?: Maybe<Vw_Organizations_Content_Count_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Organizations_Content_Count_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Organizations_Content_Count_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organizations_Content_Count_Order_By>>;
  where?: Maybe<Vw_Organizations_Content_Count_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Organizations_Paid_ContentsArgs = {
  distinct_on?: Maybe<Array<Vw_Organizations_Paid_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organizations_Paid_Contents_Order_By>>;
  where?: Maybe<Vw_Organizations_Paid_Contents_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Organizations_Paid_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Organizations_Paid_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organizations_Paid_Contents_Order_By>>;
  where?: Maybe<Vw_Organizations_Paid_Contents_Bool_Exp>;
};

/** query root */
export type Query_RootVw_UsersArgs = {
  distinct_on?: Maybe<Array<Vw_Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Users_Order_By>>;
  where?: Maybe<Vw_Users_Bool_Exp>;
};

/** query root */
export type Query_RootVw_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Users_Order_By>>;
  where?: Maybe<Vw_Users_Bool_Exp>;
};

export enum RequestType {
  File = "FILE",
  Text = "TEXT"
}

export type Response = {
  __typename?: "Response";
  bucket: Scalars["String"];
  contentType: Scalars["String"];
  data: Scalars["String"];
  key: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "reviews" */
export type Reviews = {
  __typename?: "reviews";
  comment: Scalars["String"];
  /** An object relationship */
  content: Contents;
  content_id: Scalars["bigint"];
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["bigint"];
  parent_id?: Maybe<Scalars["bigint"]>;
  /** An object relationship */
  parent_review?: Maybe<Reviews>;
  rate: Scalars["numeric"];
  /** An array relationship */
  replies: Array<Reviews>;
  /** An aggregated array relationship */
  replies_aggregate: Reviews_Aggregate;
  updated_at: Scalars["timestamptz"];
  /** An object relationship */
  user?: Maybe<Vw_Users>;
  user_id: Scalars["String"];
};

/** columns and relationships of "reviews" */
export type ReviewsRepliesArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};

/** columns and relationships of "reviews" */
export type ReviewsReplies_AggregateArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};

/** aggregated selection of "reviews" */
export type Reviews_Aggregate = {
  __typename?: "reviews_aggregate";
  aggregate?: Maybe<Reviews_Aggregate_Fields>;
  nodes: Array<Reviews>;
};

/** aggregate fields of "reviews" */
export type Reviews_Aggregate_Fields = {
  __typename?: "reviews_aggregate_fields";
  avg?: Maybe<Reviews_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Reviews_Max_Fields>;
  min?: Maybe<Reviews_Min_Fields>;
  stddev?: Maybe<Reviews_Stddev_Fields>;
  stddev_pop?: Maybe<Reviews_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reviews_Stddev_Samp_Fields>;
  sum?: Maybe<Reviews_Sum_Fields>;
  var_pop?: Maybe<Reviews_Var_Pop_Fields>;
  var_samp?: Maybe<Reviews_Var_Samp_Fields>;
  variance?: Maybe<Reviews_Variance_Fields>;
};

/** aggregate fields of "reviews" */
export type Reviews_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Reviews_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "reviews" */
export type Reviews_Aggregate_Order_By = {
  avg?: Maybe<Reviews_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Reviews_Max_Order_By>;
  min?: Maybe<Reviews_Min_Order_By>;
  stddev?: Maybe<Reviews_Stddev_Order_By>;
  stddev_pop?: Maybe<Reviews_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Reviews_Stddev_Samp_Order_By>;
  sum?: Maybe<Reviews_Sum_Order_By>;
  var_pop?: Maybe<Reviews_Var_Pop_Order_By>;
  var_samp?: Maybe<Reviews_Var_Samp_Order_By>;
  variance?: Maybe<Reviews_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "reviews" */
export type Reviews_Arr_Rel_Insert_Input = {
  data: Array<Reviews_Insert_Input>;
  on_conflict?: Maybe<Reviews_On_Conflict>;
};

/** aggregate avg on columns */
export type Reviews_Avg_Fields = {
  __typename?: "reviews_avg_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "reviews" */
export type Reviews_Avg_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "reviews". All fields are combined with a logical 'AND'. */
export type Reviews_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Reviews_Bool_Exp>>>;
  _not?: Maybe<Reviews_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Reviews_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  content?: Maybe<Contents_Bool_Exp>;
  content_id?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  parent_id?: Maybe<Bigint_Comparison_Exp>;
  parent_review?: Maybe<Reviews_Bool_Exp>;
  rate?: Maybe<Numeric_Comparison_Exp>;
  replies?: Maybe<Reviews_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Vw_Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "reviews" */
export enum Reviews_Constraint {
  /** unique or primary key constraint */
  ReviewsPkey = "reviews_pkey"
}

/** input type for incrementing integer columne in table "reviews" */
export type Reviews_Inc_Input = {
  content_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "reviews" */
export type Reviews_Insert_Input = {
  comment?: Maybe<Scalars["String"]>;
  content?: Maybe<Contents_Obj_Rel_Insert_Input>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["bigint"]>;
  parent_review?: Maybe<Reviews_Obj_Rel_Insert_Input>;
  rate?: Maybe<Scalars["numeric"]>;
  replies?: Maybe<Reviews_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Reviews_Max_Fields = {
  __typename?: "reviews_max_fields";
  comment?: Maybe<Scalars["String"]>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["bigint"]>;
  rate?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "reviews" */
export type Reviews_Max_Order_By = {
  comment?: Maybe<Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Reviews_Min_Fields = {
  __typename?: "reviews_min_fields";
  comment?: Maybe<Scalars["String"]>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["bigint"]>;
  rate?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "reviews" */
export type Reviews_Min_Order_By = {
  comment?: Maybe<Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "reviews" */
export type Reviews_Mutation_Response = {
  __typename?: "reviews_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Reviews>;
};

/** input type for inserting object relation for remote table "reviews" */
export type Reviews_Obj_Rel_Insert_Input = {
  data: Reviews_Insert_Input;
  on_conflict?: Maybe<Reviews_On_Conflict>;
};

/** on conflict condition type for table "reviews" */
export type Reviews_On_Conflict = {
  constraint: Reviews_Constraint;
  update_columns: Array<Reviews_Update_Column>;
  where?: Maybe<Reviews_Bool_Exp>;
};

/** ordering options when selecting data from "reviews" */
export type Reviews_Order_By = {
  comment?: Maybe<Order_By>;
  content?: Maybe<Contents_Order_By>;
  content_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  parent_review?: Maybe<Reviews_Order_By>;
  rate?: Maybe<Order_By>;
  replies_aggregate?: Maybe<Reviews_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Vw_Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** select columns of table "reviews" */
export enum Reviews_Select_Column {
  /** column name */
  Comment = "comment",
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  ParentId = "parent_id",
  /** column name */
  Rate = "rate",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** input type for updating data in table "reviews" */
export type Reviews_Set_Input = {
  comment?: Maybe<Scalars["String"]>;
  content_id?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["bigint"]>;
  rate?: Maybe<Scalars["numeric"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  user_id?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Reviews_Stddev_Fields = {
  __typename?: "reviews_stddev_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "reviews" */
export type Reviews_Stddev_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Reviews_Stddev_Pop_Fields = {
  __typename?: "reviews_stddev_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "reviews" */
export type Reviews_Stddev_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Reviews_Stddev_Samp_Fields = {
  __typename?: "reviews_stddev_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "reviews" */
export type Reviews_Stddev_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Reviews_Sum_Fields = {
  __typename?: "reviews_sum_fields";
  content_id?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["bigint"]>;
  rate?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "reviews" */
export type Reviews_Sum_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** update columns of table "reviews" */
export enum Reviews_Update_Column {
  /** column name */
  Comment = "comment",
  /** column name */
  ContentId = "content_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  ParentId = "parent_id",
  /** column name */
  Rate = "rate",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id"
}

/** aggregate var_pop on columns */
export type Reviews_Var_Pop_Fields = {
  __typename?: "reviews_var_pop_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "reviews" */
export type Reviews_Var_Pop_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Reviews_Var_Samp_Fields = {
  __typename?: "reviews_var_samp_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "reviews" */
export type Reviews_Var_Samp_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Reviews_Variance_Fields = {
  __typename?: "reviews_variance_fields";
  content_id?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  rate?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "reviews" */
export type Reviews_Variance_Order_By = {
  content_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: "roles";
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["bigint"];
  name: Scalars["String"];
  priority: Scalars["Int"];
  updated_at: Scalars["timestamptz"];
  /** An array relationship */
  users_connection: Array<Map_Users_Roles>;
  /** An aggregated array relationship */
  users_connection_aggregate: Map_Users_Roles_Aggregate;
};

/** columns and relationships of "roles" */
export type RolesUsers_ConnectionArgs = {
  distinct_on?: Maybe<Array<Map_Users_Roles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Roles_Order_By>>;
  where?: Maybe<Map_Users_Roles_Bool_Exp>;
};

/** columns and relationships of "roles" */
export type RolesUsers_Connection_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Roles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Roles_Order_By>>;
  where?: Maybe<Map_Users_Roles_Bool_Exp>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: "roles_aggregate";
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: "roles_aggregate_fields";
  avg?: Maybe<Roles_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
  stddev?: Maybe<Roles_Stddev_Fields>;
  stddev_pop?: Maybe<Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Roles_Stddev_Samp_Fields>;
  sum?: Maybe<Roles_Sum_Fields>;
  var_pop?: Maybe<Roles_Var_Pop_Fields>;
  var_samp?: Maybe<Roles_Var_Samp_Fields>;
  variance?: Maybe<Roles_Variance_Fields>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roles_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "roles" */
export type Roles_Aggregate_Order_By = {
  avg?: Maybe<Roles_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Roles_Max_Order_By>;
  min?: Maybe<Roles_Min_Order_By>;
  stddev?: Maybe<Roles_Stddev_Order_By>;
  stddev_pop?: Maybe<Roles_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Roles_Stddev_Samp_Order_By>;
  sum?: Maybe<Roles_Sum_Order_By>;
  var_pop?: Maybe<Roles_Var_Pop_Order_By>;
  var_samp?: Maybe<Roles_Var_Samp_Order_By>;
  variance?: Maybe<Roles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "roles" */
export type Roles_Arr_Rel_Insert_Input = {
  data: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** aggregate avg on columns */
export type Roles_Avg_Fields = {
  __typename?: "roles_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  priority?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "roles" */
export type Roles_Avg_Order_By = {
  id?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  _not?: Maybe<Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  priority?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users_connection?: Maybe<Map_Users_Roles_Bool_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint */
  RolesPkey = "roles_pkey"
}

/** input type for incrementing integer columne in table "roles" */
export type Roles_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
  priority?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  priority?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  users_connection?: Maybe<Map_Users_Roles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: "roles_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  priority?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "roles" */
export type Roles_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: "roles_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  priority?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "roles" */
export type Roles_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: "roles_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

/** on conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns: Array<Roles_Update_Column>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** ordering options when selecting data from "roles" */
export type Roles_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_connection_aggregate?: Maybe<Map_Users_Roles_Aggregate_Order_By>;
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Priority = "priority",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  priority?: Maybe<Scalars["Int"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Roles_Stddev_Fields = {
  __typename?: "roles_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  priority?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "roles" */
export type Roles_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Roles_Stddev_Pop_Fields = {
  __typename?: "roles_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  priority?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "roles" */
export type Roles_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Roles_Stddev_Samp_Fields = {
  __typename?: "roles_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  priority?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "roles" */
export type Roles_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Roles_Sum_Fields = {
  __typename?: "roles_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
  priority?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "roles" */
export type Roles_Sum_Order_By = {
  id?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Priority = "priority",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Roles_Var_Pop_Fields = {
  __typename?: "roles_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  priority?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "roles" */
export type Roles_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Roles_Var_Samp_Fields = {
  __typename?: "roles_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  priority?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "roles" */
export type Roles_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Roles_Variance_Fields = {
  __typename?: "roles_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  priority?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "roles" */
export type Roles_Variance_Order_By = {
  id?: Maybe<Order_By>;
  priority?: Maybe<Order_By>;
};

export type SearchWhere = {
  average_rate?: Maybe<Scalars["Int"]>;
  category_id?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["String"]>;
  payment_type?: Maybe<PaymentType>;
  published_at?: Maybe<Scalars["Int"]>;
  query?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  _nlike?: Maybe<Scalars["String"]>;
  _nsimilar?: Maybe<Scalars["String"]>;
  _similar?: Maybe<Scalars["String"]>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "author_reviews" */
  author_reviews: Array<Author_Reviews>;
  /** fetch aggregated fields from the table: "author_reviews" */
  author_reviews_aggregate: Author_Reviews_Aggregate;
  /** fetch data from the table: "author_reviews" using primary key columns */
  author_reviews_by_pk?: Maybe<Author_Reviews>;
  /** fetch data from the table: "authors" */
  authors: Array<Authors>;
  /** fetch aggregated fields from the table: "authors" */
  authors_aggregate: Authors_Aggregate;
  /** fetch data from the table: "authors" using primary key columns */
  authors_by_pk?: Maybe<Authors>;
  /** fetch data from the table: "bookmarks" */
  bookmarks: Array<Bookmarks>;
  /** fetch aggregated fields from the table: "bookmarks" */
  bookmarks_aggregate: Bookmarks_Aggregate;
  /** fetch data from the table: "bookmarks" using primary key columns */
  bookmarks_by_pk?: Maybe<Bookmarks>;
  /** fetch data from the table: "content_files" */
  content_files: Array<Content_Files>;
  /** fetch aggregated fields from the table: "content_files" */
  content_files_aggregate: Content_Files_Aggregate;
  /** fetch data from the table: "content_files" using primary key columns */
  content_files_by_pk?: Maybe<Content_Files>;
  /** fetch data from the table: "content_prices" */
  content_prices: Array<Content_Prices>;
  /** fetch aggregated fields from the table: "content_prices" */
  content_prices_aggregate: Content_Prices_Aggregate;
  /** fetch data from the table: "content_prices" using primary key columns */
  content_prices_by_pk?: Maybe<Content_Prices>;
  /** fetch data from the table: "content_tocs" */
  content_tocs: Array<Content_Tocs>;
  /** fetch aggregated fields from the table: "content_tocs" */
  content_tocs_aggregate: Content_Tocs_Aggregate;
  /** fetch data from the table: "content_tocs" using primary key columns */
  content_tocs_by_pk?: Maybe<Content_Tocs>;
  /** fetch data from the table: "contents" */
  contents: Array<Contents>;
  /** fetch aggregated fields from the table: "contents" */
  contents_aggregate: Contents_Aggregate;
  /** fetch data from the table: "contents" using primary key columns */
  contents_by_pk?: Maybe<Contents>;
  /** fetch data from the table: "emails" */
  emails: Array<Emails>;
  /** fetch aggregated fields from the table: "emails" */
  emails_aggregate: Emails_Aggregate;
  /** fetch data from the table: "emails" using primary key columns */
  emails_by_pk?: Maybe<Emails>;
  /** fetch data from the table: "files" */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "files" */
  files_aggregate: Files_Aggregate;
  /** fetch data from the table: "files" using primary key columns */
  files_by_pk?: Maybe<Files>;
  /** fetch data from the table: "map_contents_authors" */
  map_contents_authors: Array<Map_Contents_Authors>;
  /** fetch aggregated fields from the table: "map_contents_authors" */
  map_contents_authors_aggregate: Map_Contents_Authors_Aggregate;
  /** fetch data from the table: "map_contents_authors" using primary key columns */
  map_contents_authors_by_pk?: Maybe<Map_Contents_Authors>;
  /** fetch data from the table: "map_contents_organizations" */
  map_contents_organizations: Array<Map_Contents_Organizations>;
  /** fetch aggregated fields from the table: "map_contents_organizations" */
  map_contents_organizations_aggregate: Map_Contents_Organizations_Aggregate;
  /** fetch data from the table: "map_contents_organizations" using primary key columns */
  map_contents_organizations_by_pk?: Maybe<Map_Contents_Organizations>;
  /** fetch data from the table: "map_contents_packages" */
  map_contents_packages: Array<Map_Contents_Packages>;
  /** fetch aggregated fields from the table: "map_contents_packages" */
  map_contents_packages_aggregate: Map_Contents_Packages_Aggregate;
  /** fetch data from the table: "map_contents_packages" using primary key columns */
  map_contents_packages_by_pk?: Maybe<Map_Contents_Packages>;
  /** fetch data from the table: "map_contents_tags" */
  map_contents_tags: Array<Map_Contents_Tags>;
  /** fetch aggregated fields from the table: "map_contents_tags" */
  map_contents_tags_aggregate: Map_Contents_Tags_Aggregate;
  /** fetch data from the table: "map_contents_tags" using primary key columns */
  map_contents_tags_by_pk?: Maybe<Map_Contents_Tags>;
  /** fetch data from the table: "map_packages_files" */
  map_packages_files: Array<Map_Packages_Files>;
  /** fetch aggregated fields from the table: "map_packages_files" */
  map_packages_files_aggregate: Map_Packages_Files_Aggregate;
  /** fetch data from the table: "map_packages_files" using primary key columns */
  map_packages_files_by_pk?: Maybe<Map_Packages_Files>;
  /** fetch data from the table: "map_users_contents_status" */
  map_users_contents_status: Array<Map_Users_Contents_Status>;
  /** fetch aggregated fields from the table: "map_users_contents_status" */
  map_users_contents_status_aggregate: Map_Users_Contents_Status_Aggregate;
  /** fetch data from the table: "map_users_contents_status" using primary key columns */
  map_users_contents_status_by_pk?: Maybe<Map_Users_Contents_Status>;
  /** fetch data from the table: "map_users_files" */
  map_users_files: Array<Map_Users_Files>;
  /** fetch aggregated fields from the table: "map_users_files" */
  map_users_files_aggregate: Map_Users_Files_Aggregate;
  /** fetch data from the table: "map_users_files" using primary key columns */
  map_users_files_by_pk?: Maybe<Map_Users_Files>;
  /** fetch data from the table: "map_users_memberships" */
  map_users_memberships: Array<Map_Users_Memberships>;
  /** fetch aggregated fields from the table: "map_users_memberships" */
  map_users_memberships_aggregate: Map_Users_Memberships_Aggregate;
  /** fetch data from the table: "map_users_memberships" using primary key columns */
  map_users_memberships_by_pk?: Maybe<Map_Users_Memberships>;
  /** fetch data from the table: "map_users_organizations" */
  map_users_organizations: Array<Map_Users_Organizations>;
  /** fetch aggregated fields from the table: "map_users_organizations" */
  map_users_organizations_aggregate: Map_Users_Organizations_Aggregate;
  /** fetch data from the table: "map_users_organizations" using primary key columns */
  map_users_organizations_by_pk?: Maybe<Map_Users_Organizations>;
  /** fetch data from the table: "map_users_roles" */
  map_users_roles: Array<Map_Users_Roles>;
  /** fetch aggregated fields from the table: "map_users_roles" */
  map_users_roles_aggregate: Map_Users_Roles_Aggregate;
  /** fetch data from the table: "map_users_roles" using primary key columns */
  map_users_roles_by_pk?: Maybe<Map_Users_Roles>;
  /** fetch data from the table: "marketing.active_banners" */
  marketing_active_banners: Array<Marketing_Active_Banners>;
  /** fetch aggregated fields from the table: "marketing.active_banners" */
  marketing_active_banners_aggregate: Marketing_Active_Banners_Aggregate;
  /** fetch data from the table: "marketing.banners" */
  marketing_banners: Array<Marketing_Banners>;
  /** fetch aggregated fields from the table: "marketing.banners" */
  marketing_banners_aggregate: Marketing_Banners_Aggregate;
  /** fetch data from the table: "marketing.banners" using primary key columns */
  marketing_banners_by_pk?: Maybe<Marketing_Banners>;
  /** fetch data from the table: "marketing.home_options" */
  marketing_home_options: Array<Marketing_Home_Options>;
  /** fetch aggregated fields from the table: "marketing.home_options" */
  marketing_home_options_aggregate: Marketing_Home_Options_Aggregate;
  /** fetch data from the table: "marketing.home_options" using primary key columns */
  marketing_home_options_by_pk?: Maybe<Marketing_Home_Options>;
  /** fetch data from the table: "marketing.promotions" */
  marketing_promotions: Array<Marketing_Promotions>;
  /** fetch aggregated fields from the table: "marketing.promotions" */
  marketing_promotions_aggregate: Marketing_Promotions_Aggregate;
  /** fetch data from the table: "marketing.promotions" using primary key columns */
  marketing_promotions_by_pk?: Maybe<Marketing_Promotions>;
  /** fetch data from the table: "marketing.users_history" */
  marketing_users_history: Array<Marketing_Users_History>;
  /** fetch aggregated fields from the table: "marketing.users_history" */
  marketing_users_history_aggregate: Marketing_Users_History_Aggregate;
  /** fetch data from the table: "marketing.users_history" using primary key columns */
  marketing_users_history_by_pk?: Maybe<Marketing_Users_History>;
  /** fetch data from the table: "memberships" */
  memberships: Array<Memberships>;
  /** fetch aggregated fields from the table: "memberships" */
  memberships_aggregate: Memberships_Aggregate;
  /** fetch data from the table: "memberships" using primary key columns */
  memberships_by_pk?: Maybe<Memberships>;
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table: "packages" */
  packages: Array<Packages>;
  /** fetch aggregated fields from the table: "packages" */
  packages_aggregate: Packages_Aggregate;
  /** fetch data from the table: "packages" using primary key columns */
  packages_by_pk?: Maybe<Packages>;
  /** fetch data from the table: "payment.details" */
  payment_details: Array<Payment_Details>;
  /** fetch aggregated fields from the table: "payment.details" */
  payment_details_aggregate: Payment_Details_Aggregate;
  /** fetch data from the table: "payment.details" using primary key columns */
  payment_details_by_pk?: Maybe<Payment_Details>;
  /** fetch data from the table: "payment.headers" */
  payment_headers: Array<Payment_Headers>;
  /** fetch aggregated fields from the table: "payment.headers" */
  payment_headers_aggregate: Payment_Headers_Aggregate;
  /** fetch data from the table: "payment.headers" using primary key columns */
  payment_headers_by_pk?: Maybe<Payment_Headers>;
  /** fetch data from the table: "payment.transactions" */
  payment_transactions: Array<Payment_Transactions>;
  /** fetch aggregated fields from the table: "payment.transactions" */
  payment_transactions_aggregate: Payment_Transactions_Aggregate;
  /** fetch data from the table: "payment.transactions" using primary key columns */
  payment_transactions_by_pk?: Maybe<Payment_Transactions>;
  /** fetch data from the table: "payment.vw_organizations_balance" */
  payment_vw_organizations_balance: Array<Payment_Vw_Organizations_Balance>;
  /** fetch aggregated fields from the table: "payment.vw_organizations_balance" */
  payment_vw_organizations_balance_aggregate: Payment_Vw_Organizations_Balance_Aggregate;
  /** fetch data from the table: "payment.vw_paid_contents" */
  payment_vw_paid_contents: Array<Payment_Vw_Paid_Contents>;
  /** fetch aggregated fields from the table: "payment.vw_paid_contents" */
  payment_vw_paid_contents_aggregate: Payment_Vw_Paid_Contents_Aggregate;
  /** fetch data from the table: "payment.vw_paid_contents_count" */
  payment_vw_paid_contents_count: Array<Payment_Vw_Paid_Contents_Count>;
  /** fetch aggregated fields from the table: "payment.vw_paid_contents_count" */
  payment_vw_paid_contents_count_aggregate: Payment_Vw_Paid_Contents_Count_Aggregate;
  /** fetch data from the table: "payment.withdraw_requests" */
  payment_withdraw_requests: Array<Payment_Withdraw_Requests>;
  /** fetch aggregated fields from the table: "payment.withdraw_requests" */
  payment_withdraw_requests_aggregate: Payment_Withdraw_Requests_Aggregate;
  /** fetch data from the table: "payment.withdraw_requests" using primary key columns */
  payment_withdraw_requests_by_pk?: Maybe<Payment_Withdraw_Requests>;
  /** fetch data from the table: "plagiarism.content_texts" */
  plagiarism_content_texts: Array<Plagiarism_Content_Texts>;
  /** fetch aggregated fields from the table: "plagiarism.content_texts" */
  plagiarism_content_texts_aggregate: Plagiarism_Content_Texts_Aggregate;
  /** fetch data from the table: "plagiarism.content_texts" using primary key columns */
  plagiarism_content_texts_by_pk?: Maybe<Plagiarism_Content_Texts>;
  /** fetch data from the table: "plagiarism.search_requests" */
  plagiarism_search_requests: Array<Plagiarism_Search_Requests>;
  /** fetch aggregated fields from the table: "plagiarism.search_requests" */
  plagiarism_search_requests_aggregate: Plagiarism_Search_Requests_Aggregate;
  /** fetch data from the table: "plagiarism.search_requests" using primary key columns */
  plagiarism_search_requests_by_pk?: Maybe<Plagiarism_Search_Requests>;
  /** fetch data from the table: "plagiarism.search_results" */
  plagiarism_search_results: Array<Plagiarism_Search_Results>;
  /** fetch aggregated fields from the table: "plagiarism.search_results" */
  plagiarism_search_results_aggregate: Plagiarism_Search_Results_Aggregate;
  /** fetch data from the table: "plagiarism.search_results" using primary key columns */
  plagiarism_search_results_by_pk?: Maybe<Plagiarism_Search_Results>;
  /** execute function "random_authors" which returns "authors" */
  random_authors: Array<Authors>;
  /** execute function "random_authors" and query aggregates on result of table type "authors" */
  random_authors_aggregate: Authors_Aggregate;
  /** execute function "random_contents" which returns "contents" */
  random_contents: Array<Contents>;
  /** execute function "random_contents" and query aggregates on result of table type "contents" */
  random_contents_aggregate: Contents_Aggregate;
  /** fetch data from the table: "reviews" */
  reviews: Array<Reviews>;
  /** fetch aggregated fields from the table: "reviews" */
  reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "tag_options" */
  tag_options: Array<Tag_Options>;
  /** fetch aggregated fields from the table: "tag_options" */
  tag_options_aggregate: Tag_Options_Aggregate;
  /** fetch data from the table: "tag_options" using primary key columns */
  tag_options_by_pk?: Maybe<Tag_Options>;
  /** fetch data from the table: "tag_options_tr" */
  tag_options_tr: Array<Tag_Options_Tr>;
  /** fetch aggregated fields from the table: "tag_options_tr" */
  tag_options_tr_aggregate: Tag_Options_Tr_Aggregate;
  /** fetch data from the table: "tag_options_tr" using primary key columns */
  tag_options_tr_by_pk?: Maybe<Tag_Options_Tr>;
  /** fetch data from the table: "tag_types" */
  tag_types: Array<Tag_Types>;
  /** fetch aggregated fields from the table: "tag_types" */
  tag_types_aggregate: Tag_Types_Aggregate;
  /** fetch data from the table: "tag_types" using primary key columns */
  tag_types_by_pk?: Maybe<Tag_Types>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "vw_authors" */
  vw_authors: Array<Vw_Authors>;
  /** fetch aggregated fields from the table: "vw_authors" */
  vw_authors_aggregate: Vw_Authors_Aggregate;
  /** fetch data from the table: "vw_best_authors" */
  vw_best_authors: Array<Vw_Best_Authors>;
  /** fetch aggregated fields from the table: "vw_best_authors" */
  vw_best_authors_aggregate: Vw_Best_Authors_Aggregate;
  /** fetch data from the table: "vw_best_ranked_contents" */
  vw_best_ranked_contents: Array<Vw_Best_Ranked_Contents>;
  /** fetch aggregated fields from the table: "vw_best_ranked_contents" */
  vw_best_ranked_contents_aggregate: Vw_Best_Ranked_Contents_Aggregate;
  /** fetch data from the table: "vw_bestseller_contents" */
  vw_bestseller_contents: Array<Vw_Bestseller_Contents>;
  /** fetch aggregated fields from the table: "vw_bestseller_contents" */
  vw_bestseller_contents_aggregate: Vw_Bestseller_Contents_Aggregate;
  /** fetch data from the table: "vw_contents" */
  vw_contents: Array<Vw_Contents>;
  /** fetch aggregated fields from the table: "vw_contents" */
  vw_contents_aggregate: Vw_Contents_Aggregate;
  /** fetch data from the table: "vw_featured_contents" */
  vw_featured_contents: Array<Vw_Featured_Contents>;
  /** fetch aggregated fields from the table: "vw_featured_contents" */
  vw_featured_contents_aggregate: Vw_Featured_Contents_Aggregate;
  /** fetch data from the table: "vw_organization_contents" */
  vw_organization_contents: Array<Vw_Organization_Contents>;
  /** fetch aggregated fields from the table: "vw_organization_contents" */
  vw_organization_contents_aggregate: Vw_Organization_Contents_Aggregate;
  /** fetch data from the table: "vw_organizations" */
  vw_organizations: Array<Vw_Organizations>;
  /** fetch aggregated fields from the table: "vw_organizations" */
  vw_organizations_aggregate: Vw_Organizations_Aggregate;
  /** fetch data from the table: "vw_organizations_content_count" */
  vw_organizations_content_count: Array<Vw_Organizations_Content_Count>;
  /** fetch aggregated fields from the table: "vw_organizations_content_count" */
  vw_organizations_content_count_aggregate: Vw_Organizations_Content_Count_Aggregate;
  /** fetch data from the table: "vw_organizations_paid_contents" */
  vw_organizations_paid_contents: Array<Vw_Organizations_Paid_Contents>;
  /** fetch aggregated fields from the table: "vw_organizations_paid_contents" */
  vw_organizations_paid_contents_aggregate: Vw_Organizations_Paid_Contents_Aggregate;
  /** fetch data from the table: "vw_users" */
  vw_users: Array<Vw_Users>;
  /** fetch aggregated fields from the table: "vw_users" */
  vw_users_aggregate: Vw_Users_Aggregate;
};

/** subscription root */
export type Subscription_RootAuthor_ReviewsArgs = {
  distinct_on?: Maybe<Array<Author_Reviews_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Author_Reviews_Order_By>>;
  where?: Maybe<Author_Reviews_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAuthor_Reviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Author_Reviews_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Author_Reviews_Order_By>>;
  where?: Maybe<Author_Reviews_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAuthor_Reviews_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootAuthorsArgs = {
  distinct_on?: Maybe<Array<Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Authors_Order_By>>;
  where?: Maybe<Authors_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAuthors_AggregateArgs = {
  distinct_on?: Maybe<Array<Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Authors_Order_By>>;
  where?: Maybe<Authors_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootAuthors_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootBookmarksArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootBookmarks_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootBookmarks_By_PkArgs = {
  content_id: Scalars["bigint"];
  user_id: Scalars["String"];
};

/** subscription root */
export type Subscription_RootContent_FilesArgs = {
  distinct_on?: Maybe<Array<Content_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Files_Order_By>>;
  where?: Maybe<Content_Files_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootContent_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Content_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Files_Order_By>>;
  where?: Maybe<Content_Files_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootContent_Files_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootContent_PricesArgs = {
  distinct_on?: Maybe<Array<Content_Prices_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Prices_Order_By>>;
  where?: Maybe<Content_Prices_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootContent_Prices_AggregateArgs = {
  distinct_on?: Maybe<Array<Content_Prices_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Prices_Order_By>>;
  where?: Maybe<Content_Prices_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootContent_Prices_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootContent_TocsArgs = {
  distinct_on?: Maybe<Array<Content_Tocs_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Tocs_Order_By>>;
  where?: Maybe<Content_Tocs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootContent_Tocs_AggregateArgs = {
  distinct_on?: Maybe<Array<Content_Tocs_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Content_Tocs_Order_By>>;
  where?: Maybe<Content_Tocs_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootContent_Tocs_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootContentsArgs = {
  distinct_on?: Maybe<Array<Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Contents_Order_By>>;
  where?: Maybe<Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootContents_AggregateArgs = {
  distinct_on?: Maybe<Array<Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Contents_Order_By>>;
  where?: Maybe<Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootContents_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootEmailsArgs = {
  distinct_on?: Maybe<Array<Emails_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Emails_Order_By>>;
  where?: Maybe<Emails_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootEmails_AggregateArgs = {
  distinct_on?: Maybe<Array<Emails_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Emails_Order_By>>;
  where?: Maybe<Emails_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootEmails_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootFilesArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Files_Order_By>>;
  where?: Maybe<Files_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Files_Order_By>>;
  where?: Maybe<Files_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootFiles_By_PkArgs = {
  key: Scalars["String"];
};

/** subscription root */
export type Subscription_RootMap_Contents_AuthorsArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Authors_Order_By>>;
  where?: Maybe<Map_Contents_Authors_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Contents_Authors_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Authors_Order_By>>;
  where?: Maybe<Map_Contents_Authors_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Contents_Authors_By_PkArgs = {
  author_id: Scalars["bigint"];
  content_id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootMap_Contents_OrganizationsArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Organizations_Order_By>>;
  where?: Maybe<Map_Contents_Organizations_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Contents_Organizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Organizations_Order_By>>;
  where?: Maybe<Map_Contents_Organizations_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Contents_Organizations_By_PkArgs = {
  content_id: Scalars["bigint"];
  organization_id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootMap_Contents_PackagesArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Packages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Packages_Order_By>>;
  where?: Maybe<Map_Contents_Packages_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Contents_Packages_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Packages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Packages_Order_By>>;
  where?: Maybe<Map_Contents_Packages_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Contents_Packages_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootMap_Contents_TagsArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Tags_Order_By>>;
  where?: Maybe<Map_Contents_Tags_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Contents_Tags_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Tags_Order_By>>;
  where?: Maybe<Map_Contents_Tags_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Contents_Tags_By_PkArgs = {
  content_id: Scalars["Int"];
  tag_id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootMap_Packages_FilesArgs = {
  distinct_on?: Maybe<Array<Map_Packages_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Packages_Files_Order_By>>;
  where?: Maybe<Map_Packages_Files_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Packages_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Packages_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Packages_Files_Order_By>>;
  where?: Maybe<Map_Packages_Files_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Packages_Files_By_PkArgs = {
  file_id: Scalars["String"];
  package_id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootMap_Users_Contents_StatusArgs = {
  distinct_on?: Maybe<Array<Map_Users_Contents_Status_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Contents_Status_Order_By>>;
  where?: Maybe<Map_Users_Contents_Status_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Users_Contents_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Contents_Status_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Contents_Status_Order_By>>;
  where?: Maybe<Map_Users_Contents_Status_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Users_Contents_Status_By_PkArgs = {
  content_id: Scalars["bigint"];
  user_id: Scalars["String"];
};

/** subscription root */
export type Subscription_RootMap_Users_FilesArgs = {
  distinct_on?: Maybe<Array<Map_Users_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Files_Order_By>>;
  where?: Maybe<Map_Users_Files_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Users_Files_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Files_Order_By>>;
  where?: Maybe<Map_Users_Files_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Users_Files_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootMap_Users_MembershipsArgs = {
  distinct_on?: Maybe<Array<Map_Users_Memberships_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Memberships_Order_By>>;
  where?: Maybe<Map_Users_Memberships_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Users_Memberships_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Memberships_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Memberships_Order_By>>;
  where?: Maybe<Map_Users_Memberships_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Users_Memberships_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootMap_Users_OrganizationsArgs = {
  distinct_on?: Maybe<Array<Map_Users_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Organizations_Order_By>>;
  where?: Maybe<Map_Users_Organizations_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Users_Organizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Organizations_Order_By>>;
  where?: Maybe<Map_Users_Organizations_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Users_Organizations_By_PkArgs = {
  organization_id: Scalars["bigint"];
  user_id: Scalars["String"];
};

/** subscription root */
export type Subscription_RootMap_Users_RolesArgs = {
  distinct_on?: Maybe<Array<Map_Users_Roles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Roles_Order_By>>;
  where?: Maybe<Map_Users_Roles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Users_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Roles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Roles_Order_By>>;
  where?: Maybe<Map_Users_Roles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMap_Users_Roles_By_PkArgs = {
  role_id: Scalars["bigint"];
  user_id: Scalars["String"];
};

/** subscription root */
export type Subscription_RootMarketing_Active_BannersArgs = {
  distinct_on?: Maybe<Array<Marketing_Active_Banners_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Active_Banners_Order_By>>;
  where?: Maybe<Marketing_Active_Banners_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMarketing_Active_Banners_AggregateArgs = {
  distinct_on?: Maybe<Array<Marketing_Active_Banners_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Active_Banners_Order_By>>;
  where?: Maybe<Marketing_Active_Banners_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMarketing_BannersArgs = {
  distinct_on?: Maybe<Array<Marketing_Banners_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Banners_Order_By>>;
  where?: Maybe<Marketing_Banners_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMarketing_Banners_AggregateArgs = {
  distinct_on?: Maybe<Array<Marketing_Banners_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Banners_Order_By>>;
  where?: Maybe<Marketing_Banners_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMarketing_Banners_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootMarketing_Home_OptionsArgs = {
  distinct_on?: Maybe<Array<Marketing_Home_Options_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Home_Options_Order_By>>;
  where?: Maybe<Marketing_Home_Options_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMarketing_Home_Options_AggregateArgs = {
  distinct_on?: Maybe<Array<Marketing_Home_Options_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Home_Options_Order_By>>;
  where?: Maybe<Marketing_Home_Options_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMarketing_Home_Options_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootMarketing_PromotionsArgs = {
  distinct_on?: Maybe<Array<Marketing_Promotions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Promotions_Order_By>>;
  where?: Maybe<Marketing_Promotions_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMarketing_Promotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Marketing_Promotions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Promotions_Order_By>>;
  where?: Maybe<Marketing_Promotions_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMarketing_Promotions_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootMarketing_Users_HistoryArgs = {
  distinct_on?: Maybe<Array<Marketing_Users_History_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Users_History_Order_By>>;
  where?: Maybe<Marketing_Users_History_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMarketing_Users_History_AggregateArgs = {
  distinct_on?: Maybe<Array<Marketing_Users_History_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Marketing_Users_History_Order_By>>;
  where?: Maybe<Marketing_Users_History_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMarketing_Users_History_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootMembershipsArgs = {
  distinct_on?: Maybe<Array<Memberships_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Memberships_Order_By>>;
  where?: Maybe<Memberships_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMemberships_AggregateArgs = {
  distinct_on?: Maybe<Array<Memberships_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Memberships_Order_By>>;
  where?: Maybe<Memberships_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootMemberships_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootOrganizationsArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootOrganizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Organizations_Order_By>>;
  where?: Maybe<Organizations_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootOrganizations_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootPackagesArgs = {
  distinct_on?: Maybe<Array<Packages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Packages_Order_By>>;
  where?: Maybe<Packages_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPackages_AggregateArgs = {
  distinct_on?: Maybe<Array<Packages_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Packages_Order_By>>;
  where?: Maybe<Packages_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPackages_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootPayment_DetailsArgs = {
  distinct_on?: Maybe<Array<Payment_Details_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Details_Order_By>>;
  where?: Maybe<Payment_Details_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayment_Details_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Details_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Details_Order_By>>;
  where?: Maybe<Payment_Details_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayment_Details_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootPayment_HeadersArgs = {
  distinct_on?: Maybe<Array<Payment_Headers_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Headers_Order_By>>;
  where?: Maybe<Payment_Headers_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayment_Headers_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Headers_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Headers_Order_By>>;
  where?: Maybe<Payment_Headers_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayment_Headers_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootPayment_TransactionsArgs = {
  distinct_on?: Maybe<Array<Payment_Transactions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Transactions_Order_By>>;
  where?: Maybe<Payment_Transactions_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayment_Transactions_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Transactions_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Transactions_Order_By>>;
  where?: Maybe<Payment_Transactions_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayment_Transactions_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootPayment_Vw_Organizations_BalanceArgs = {
  distinct_on?: Maybe<Array<Payment_Vw_Organizations_Balance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Vw_Organizations_Balance_Order_By>>;
  where?: Maybe<Payment_Vw_Organizations_Balance_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayment_Vw_Organizations_Balance_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Vw_Organizations_Balance_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Vw_Organizations_Balance_Order_By>>;
  where?: Maybe<Payment_Vw_Organizations_Balance_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayment_Vw_Paid_ContentsArgs = {
  distinct_on?: Maybe<Array<Payment_Vw_Paid_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Vw_Paid_Contents_Order_By>>;
  where?: Maybe<Payment_Vw_Paid_Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayment_Vw_Paid_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Vw_Paid_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Vw_Paid_Contents_Order_By>>;
  where?: Maybe<Payment_Vw_Paid_Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayment_Vw_Paid_Contents_CountArgs = {
  distinct_on?: Maybe<Array<Payment_Vw_Paid_Contents_Count_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Vw_Paid_Contents_Count_Order_By>>;
  where?: Maybe<Payment_Vw_Paid_Contents_Count_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayment_Vw_Paid_Contents_Count_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Vw_Paid_Contents_Count_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Vw_Paid_Contents_Count_Order_By>>;
  where?: Maybe<Payment_Vw_Paid_Contents_Count_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayment_Withdraw_RequestsArgs = {
  distinct_on?: Maybe<Array<Payment_Withdraw_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Withdraw_Requests_Order_By>>;
  where?: Maybe<Payment_Withdraw_Requests_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayment_Withdraw_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Withdraw_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Withdraw_Requests_Order_By>>;
  where?: Maybe<Payment_Withdraw_Requests_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPayment_Withdraw_Requests_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootPlagiarism_Content_TextsArgs = {
  distinct_on?: Maybe<Array<Plagiarism_Content_Texts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Plagiarism_Content_Texts_Order_By>>;
  where?: Maybe<Plagiarism_Content_Texts_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPlagiarism_Content_Texts_AggregateArgs = {
  distinct_on?: Maybe<Array<Plagiarism_Content_Texts_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Plagiarism_Content_Texts_Order_By>>;
  where?: Maybe<Plagiarism_Content_Texts_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPlagiarism_Content_Texts_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootPlagiarism_Search_RequestsArgs = {
  distinct_on?: Maybe<Array<Plagiarism_Search_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Plagiarism_Search_Requests_Order_By>>;
  where?: Maybe<Plagiarism_Search_Requests_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPlagiarism_Search_Requests_AggregateArgs = {
  distinct_on?: Maybe<Array<Plagiarism_Search_Requests_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Plagiarism_Search_Requests_Order_By>>;
  where?: Maybe<Plagiarism_Search_Requests_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPlagiarism_Search_Requests_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootPlagiarism_Search_ResultsArgs = {
  distinct_on?: Maybe<Array<Plagiarism_Search_Results_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Plagiarism_Search_Results_Order_By>>;
  where?: Maybe<Plagiarism_Search_Results_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPlagiarism_Search_Results_AggregateArgs = {
  distinct_on?: Maybe<Array<Plagiarism_Search_Results_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Plagiarism_Search_Results_Order_By>>;
  where?: Maybe<Plagiarism_Search_Results_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPlagiarism_Search_Results_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootRandom_AuthorsArgs = {
  distinct_on?: Maybe<Array<Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Authors_Order_By>>;
  where?: Maybe<Authors_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRandom_Authors_AggregateArgs = {
  distinct_on?: Maybe<Array<Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Authors_Order_By>>;
  where?: Maybe<Authors_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRandom_ContentsArgs = {
  distinct_on?: Maybe<Array<Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Contents_Order_By>>;
  where?: Maybe<Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRandom_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Contents_Order_By>>;
  where?: Maybe<Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootReviewsArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootReviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootReviews_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootRoles_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootTag_OptionsArgs = {
  distinct_on?: Maybe<Array<Tag_Options_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Options_Order_By>>;
  where?: Maybe<Tag_Options_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTag_Options_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Options_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Options_Order_By>>;
  where?: Maybe<Tag_Options_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTag_Options_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootTag_Options_TrArgs = {
  distinct_on?: Maybe<Array<Tag_Options_Tr_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Options_Tr_Order_By>>;
  where?: Maybe<Tag_Options_Tr_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTag_Options_Tr_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Options_Tr_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Options_Tr_Order_By>>;
  where?: Maybe<Tag_Options_Tr_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTag_Options_Tr_By_PkArgs = {
  id: Scalars["Int"];
};

/** subscription root */
export type Subscription_RootTag_TypesArgs = {
  distinct_on?: Maybe<Array<Tag_Types_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Types_Order_By>>;
  where?: Maybe<Tag_Types_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTag_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Types_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Types_Order_By>>;
  where?: Maybe<Tag_Types_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootTag_Types_By_PkArgs = {
  id: Scalars["bigint"];
};

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["String"];
};

/** subscription root */
export type Subscription_RootVw_AuthorsArgs = {
  distinct_on?: Maybe<Array<Vw_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Authors_Order_By>>;
  where?: Maybe<Vw_Authors_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Authors_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Authors_Order_By>>;
  where?: Maybe<Vw_Authors_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Best_AuthorsArgs = {
  distinct_on?: Maybe<Array<Vw_Best_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Best_Authors_Order_By>>;
  where?: Maybe<Vw_Best_Authors_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Best_Authors_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Best_Authors_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Best_Authors_Order_By>>;
  where?: Maybe<Vw_Best_Authors_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Best_Ranked_ContentsArgs = {
  distinct_on?: Maybe<Array<Vw_Best_Ranked_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Best_Ranked_Contents_Order_By>>;
  where?: Maybe<Vw_Best_Ranked_Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Best_Ranked_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Best_Ranked_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Best_Ranked_Contents_Order_By>>;
  where?: Maybe<Vw_Best_Ranked_Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Bestseller_ContentsArgs = {
  distinct_on?: Maybe<Array<Vw_Bestseller_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Bestseller_Contents_Order_By>>;
  where?: Maybe<Vw_Bestseller_Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Bestseller_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Bestseller_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Bestseller_Contents_Order_By>>;
  where?: Maybe<Vw_Bestseller_Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_ContentsArgs = {
  distinct_on?: Maybe<Array<Vw_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Contents_Order_By>>;
  where?: Maybe<Vw_Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Contents_Order_By>>;
  where?: Maybe<Vw_Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Featured_ContentsArgs = {
  distinct_on?: Maybe<Array<Vw_Featured_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Featured_Contents_Order_By>>;
  where?: Maybe<Vw_Featured_Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Featured_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Featured_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Featured_Contents_Order_By>>;
  where?: Maybe<Vw_Featured_Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Organization_ContentsArgs = {
  distinct_on?: Maybe<Array<Vw_Organization_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organization_Contents_Order_By>>;
  where?: Maybe<Vw_Organization_Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Organization_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Organization_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organization_Contents_Order_By>>;
  where?: Maybe<Vw_Organization_Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_OrganizationsArgs = {
  distinct_on?: Maybe<Array<Vw_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organizations_Order_By>>;
  where?: Maybe<Vw_Organizations_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Organizations_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organizations_Order_By>>;
  where?: Maybe<Vw_Organizations_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Organizations_Content_CountArgs = {
  distinct_on?: Maybe<Array<Vw_Organizations_Content_Count_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organizations_Content_Count_Order_By>>;
  where?: Maybe<Vw_Organizations_Content_Count_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Organizations_Content_Count_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Organizations_Content_Count_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organizations_Content_Count_Order_By>>;
  where?: Maybe<Vw_Organizations_Content_Count_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Organizations_Paid_ContentsArgs = {
  distinct_on?: Maybe<Array<Vw_Organizations_Paid_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organizations_Paid_Contents_Order_By>>;
  where?: Maybe<Vw_Organizations_Paid_Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Organizations_Paid_Contents_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Organizations_Paid_Contents_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organizations_Paid_Contents_Order_By>>;
  where?: Maybe<Vw_Organizations_Paid_Contents_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_UsersArgs = {
  distinct_on?: Maybe<Array<Vw_Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Users_Order_By>>;
  where?: Maybe<Vw_Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVw_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Vw_Users_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Users_Order_By>>;
  where?: Maybe<Vw_Users_Bool_Exp>;
};

/** columns and relationships of "tag_options" */
export type Tag_Options = {
  __typename?: "tag_options";
  /** An array relationship */
  children: Array<Tag_Options>;
  /** An aggregated array relationship */
  children_aggregate: Tag_Options_Aggregate;
  code?: Maybe<Scalars["String"]>;
  /** An array relationship */
  contents_connection: Array<Map_Contents_Tags>;
  /** An aggregated array relationship */
  contents_connection_aggregate: Map_Contents_Tags_Aggregate;
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["bigint"];
  /** An object relationship */
  parent?: Maybe<Tag_Options>;
  parent_id?: Maybe<Scalars["Int"]>;
  /** An array relationship */
  translations: Array<Tag_Options_Tr>;
  /** An aggregated array relationship */
  translations_aggregate: Tag_Options_Tr_Aggregate;
  /** An object relationship */
  type: Tag_Types;
  type_id: Scalars["bigint"];
  updated_at: Scalars["timestamptz"];
  value: Scalars["String"];
};

/** columns and relationships of "tag_options" */
export type Tag_OptionsChildrenArgs = {
  distinct_on?: Maybe<Array<Tag_Options_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Options_Order_By>>;
  where?: Maybe<Tag_Options_Bool_Exp>;
};

/** columns and relationships of "tag_options" */
export type Tag_OptionsChildren_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Options_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Options_Order_By>>;
  where?: Maybe<Tag_Options_Bool_Exp>;
};

/** columns and relationships of "tag_options" */
export type Tag_OptionsContents_ConnectionArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Tags_Order_By>>;
  where?: Maybe<Map_Contents_Tags_Bool_Exp>;
};

/** columns and relationships of "tag_options" */
export type Tag_OptionsContents_Connection_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Contents_Tags_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Contents_Tags_Order_By>>;
  where?: Maybe<Map_Contents_Tags_Bool_Exp>;
};

/** columns and relationships of "tag_options" */
export type Tag_OptionsTranslationsArgs = {
  distinct_on?: Maybe<Array<Tag_Options_Tr_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Options_Tr_Order_By>>;
  where?: Maybe<Tag_Options_Tr_Bool_Exp>;
};

/** columns and relationships of "tag_options" */
export type Tag_OptionsTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Options_Tr_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Options_Tr_Order_By>>;
  where?: Maybe<Tag_Options_Tr_Bool_Exp>;
};

/** aggregated selection of "tag_options" */
export type Tag_Options_Aggregate = {
  __typename?: "tag_options_aggregate";
  aggregate?: Maybe<Tag_Options_Aggregate_Fields>;
  nodes: Array<Tag_Options>;
};

/** aggregate fields of "tag_options" */
export type Tag_Options_Aggregate_Fields = {
  __typename?: "tag_options_aggregate_fields";
  avg?: Maybe<Tag_Options_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Tag_Options_Max_Fields>;
  min?: Maybe<Tag_Options_Min_Fields>;
  stddev?: Maybe<Tag_Options_Stddev_Fields>;
  stddev_pop?: Maybe<Tag_Options_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tag_Options_Stddev_Samp_Fields>;
  sum?: Maybe<Tag_Options_Sum_Fields>;
  var_pop?: Maybe<Tag_Options_Var_Pop_Fields>;
  var_samp?: Maybe<Tag_Options_Var_Samp_Fields>;
  variance?: Maybe<Tag_Options_Variance_Fields>;
};

/** aggregate fields of "tag_options" */
export type Tag_Options_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Options_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "tag_options" */
export type Tag_Options_Aggregate_Order_By = {
  avg?: Maybe<Tag_Options_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tag_Options_Max_Order_By>;
  min?: Maybe<Tag_Options_Min_Order_By>;
  stddev?: Maybe<Tag_Options_Stddev_Order_By>;
  stddev_pop?: Maybe<Tag_Options_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tag_Options_Stddev_Samp_Order_By>;
  sum?: Maybe<Tag_Options_Sum_Order_By>;
  var_pop?: Maybe<Tag_Options_Var_Pop_Order_By>;
  var_samp?: Maybe<Tag_Options_Var_Samp_Order_By>;
  variance?: Maybe<Tag_Options_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tag_options" */
export type Tag_Options_Arr_Rel_Insert_Input = {
  data: Array<Tag_Options_Insert_Input>;
  on_conflict?: Maybe<Tag_Options_On_Conflict>;
};

/** aggregate avg on columns */
export type Tag_Options_Avg_Fields = {
  __typename?: "tag_options_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  type_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "tag_options" */
export type Tag_Options_Avg_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tag_options". All fields are combined with a logical 'AND'. */
export type Tag_Options_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tag_Options_Bool_Exp>>>;
  _not?: Maybe<Tag_Options_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tag_Options_Bool_Exp>>>;
  children?: Maybe<Tag_Options_Bool_Exp>;
  code?: Maybe<String_Comparison_Exp>;
  contents_connection?: Maybe<Map_Contents_Tags_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  parent?: Maybe<Tag_Options_Bool_Exp>;
  parent_id?: Maybe<Int_Comparison_Exp>;
  translations?: Maybe<Tag_Options_Tr_Bool_Exp>;
  type?: Maybe<Tag_Types_Bool_Exp>;
  type_id?: Maybe<Bigint_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tag_options" */
export enum Tag_Options_Constraint {
  /** unique or primary key constraint */
  TagOptionsPkey = "tag_options_pkey"
}

/** input type for incrementing integer columne in table "tag_options" */
export type Tag_Options_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["Int"]>;
  type_id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "tag_options" */
export type Tag_Options_Insert_Input = {
  children?: Maybe<Tag_Options_Arr_Rel_Insert_Input>;
  code?: Maybe<Scalars["String"]>;
  contents_connection?: Maybe<Map_Contents_Tags_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent?: Maybe<Tag_Options_Obj_Rel_Insert_Input>;
  parent_id?: Maybe<Scalars["Int"]>;
  translations?: Maybe<Tag_Options_Tr_Arr_Rel_Insert_Input>;
  type?: Maybe<Tag_Types_Obj_Rel_Insert_Input>;
  type_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  value?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Tag_Options_Max_Fields = {
  __typename?: "tag_options_max_fields";
  code?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["Int"]>;
  type_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  value?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "tag_options" */
export type Tag_Options_Max_Order_By = {
  code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tag_Options_Min_Fields = {
  __typename?: "tag_options_min_fields";
  code?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["Int"]>;
  type_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  value?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "tag_options" */
export type Tag_Options_Min_Order_By = {
  code?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "tag_options" */
export type Tag_Options_Mutation_Response = {
  __typename?: "tag_options_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Tag_Options>;
};

/** input type for inserting object relation for remote table "tag_options" */
export type Tag_Options_Obj_Rel_Insert_Input = {
  data: Tag_Options_Insert_Input;
  on_conflict?: Maybe<Tag_Options_On_Conflict>;
};

/** on conflict condition type for table "tag_options" */
export type Tag_Options_On_Conflict = {
  constraint: Tag_Options_Constraint;
  update_columns: Array<Tag_Options_Update_Column>;
  where?: Maybe<Tag_Options_Bool_Exp>;
};

/** ordering options when selecting data from "tag_options" */
export type Tag_Options_Order_By = {
  children_aggregate?: Maybe<Tag_Options_Aggregate_Order_By>;
  code?: Maybe<Order_By>;
  contents_connection_aggregate?: Maybe<Map_Contents_Tags_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  parent?: Maybe<Tag_Options_Order_By>;
  parent_id?: Maybe<Order_By>;
  translations_aggregate?: Maybe<Tag_Options_Tr_Aggregate_Order_By>;
  type?: Maybe<Tag_Types_Order_By>;
  type_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "tag_options" */
export enum Tag_Options_Select_Column {
  /** column name */
  Code = "code",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  ParentId = "parent_id",
  /** column name */
  TypeId = "type_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Value = "value"
}

/** input type for updating data in table "tag_options" */
export type Tag_Options_Set_Input = {
  code?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["Int"]>;
  type_id?: Maybe<Scalars["bigint"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
  value?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Tag_Options_Stddev_Fields = {
  __typename?: "tag_options_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  type_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "tag_options" */
export type Tag_Options_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tag_Options_Stddev_Pop_Fields = {
  __typename?: "tag_options_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  type_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "tag_options" */
export type Tag_Options_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tag_Options_Stddev_Samp_Fields = {
  __typename?: "tag_options_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  type_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "tag_options" */
export type Tag_Options_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Tag_Options_Sum_Fields = {
  __typename?: "tag_options_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
  parent_id?: Maybe<Scalars["Int"]>;
  type_id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "tag_options" */
export type Tag_Options_Sum_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** columns and relationships of "tag_options_tr" */
export type Tag_Options_Tr = {
  __typename?: "tag_options_tr";
  id: Scalars["Int"];
  locale: Scalars["String"];
  option_id: Scalars["Int"];
  /** An object relationship */
  tag: Tag_Options;
  value: Scalars["String"];
};

/** aggregated selection of "tag_options_tr" */
export type Tag_Options_Tr_Aggregate = {
  __typename?: "tag_options_tr_aggregate";
  aggregate?: Maybe<Tag_Options_Tr_Aggregate_Fields>;
  nodes: Array<Tag_Options_Tr>;
};

/** aggregate fields of "tag_options_tr" */
export type Tag_Options_Tr_Aggregate_Fields = {
  __typename?: "tag_options_tr_aggregate_fields";
  avg?: Maybe<Tag_Options_Tr_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Tag_Options_Tr_Max_Fields>;
  min?: Maybe<Tag_Options_Tr_Min_Fields>;
  stddev?: Maybe<Tag_Options_Tr_Stddev_Fields>;
  stddev_pop?: Maybe<Tag_Options_Tr_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tag_Options_Tr_Stddev_Samp_Fields>;
  sum?: Maybe<Tag_Options_Tr_Sum_Fields>;
  var_pop?: Maybe<Tag_Options_Tr_Var_Pop_Fields>;
  var_samp?: Maybe<Tag_Options_Tr_Var_Samp_Fields>;
  variance?: Maybe<Tag_Options_Tr_Variance_Fields>;
};

/** aggregate fields of "tag_options_tr" */
export type Tag_Options_Tr_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Options_Tr_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "tag_options_tr" */
export type Tag_Options_Tr_Aggregate_Order_By = {
  avg?: Maybe<Tag_Options_Tr_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tag_Options_Tr_Max_Order_By>;
  min?: Maybe<Tag_Options_Tr_Min_Order_By>;
  stddev?: Maybe<Tag_Options_Tr_Stddev_Order_By>;
  stddev_pop?: Maybe<Tag_Options_Tr_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tag_Options_Tr_Stddev_Samp_Order_By>;
  sum?: Maybe<Tag_Options_Tr_Sum_Order_By>;
  var_pop?: Maybe<Tag_Options_Tr_Var_Pop_Order_By>;
  var_samp?: Maybe<Tag_Options_Tr_Var_Samp_Order_By>;
  variance?: Maybe<Tag_Options_Tr_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tag_options_tr" */
export type Tag_Options_Tr_Arr_Rel_Insert_Input = {
  data: Array<Tag_Options_Tr_Insert_Input>;
  on_conflict?: Maybe<Tag_Options_Tr_On_Conflict>;
};

/** aggregate avg on columns */
export type Tag_Options_Tr_Avg_Fields = {
  __typename?: "tag_options_tr_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  option_id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "tag_options_tr" */
export type Tag_Options_Tr_Avg_Order_By = {
  id?: Maybe<Order_By>;
  option_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tag_options_tr". All fields are combined with a logical 'AND'. */
export type Tag_Options_Tr_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tag_Options_Tr_Bool_Exp>>>;
  _not?: Maybe<Tag_Options_Tr_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tag_Options_Tr_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  locale?: Maybe<String_Comparison_Exp>;
  option_id?: Maybe<Int_Comparison_Exp>;
  tag?: Maybe<Tag_Options_Bool_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "tag_options_tr" */
export enum Tag_Options_Tr_Constraint {
  /** unique or primary key constraint */
  TagOptionsTrPkey = "tag_options_tr_pkey"
}

/** input type for incrementing integer columne in table "tag_options_tr" */
export type Tag_Options_Tr_Inc_Input = {
  id?: Maybe<Scalars["Int"]>;
  option_id?: Maybe<Scalars["Int"]>;
};

/** input type for inserting data into table "tag_options_tr" */
export type Tag_Options_Tr_Insert_Input = {
  id?: Maybe<Scalars["Int"]>;
  locale?: Maybe<Scalars["String"]>;
  option_id?: Maybe<Scalars["Int"]>;
  tag?: Maybe<Tag_Options_Obj_Rel_Insert_Input>;
  value?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Tag_Options_Tr_Max_Fields = {
  __typename?: "tag_options_tr_max_fields";
  id?: Maybe<Scalars["Int"]>;
  locale?: Maybe<Scalars["String"]>;
  option_id?: Maybe<Scalars["Int"]>;
  value?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "tag_options_tr" */
export type Tag_Options_Tr_Max_Order_By = {
  id?: Maybe<Order_By>;
  locale?: Maybe<Order_By>;
  option_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tag_Options_Tr_Min_Fields = {
  __typename?: "tag_options_tr_min_fields";
  id?: Maybe<Scalars["Int"]>;
  locale?: Maybe<Scalars["String"]>;
  option_id?: Maybe<Scalars["Int"]>;
  value?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "tag_options_tr" */
export type Tag_Options_Tr_Min_Order_By = {
  id?: Maybe<Order_By>;
  locale?: Maybe<Order_By>;
  option_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "tag_options_tr" */
export type Tag_Options_Tr_Mutation_Response = {
  __typename?: "tag_options_tr_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Tag_Options_Tr>;
};

/** input type for inserting object relation for remote table "tag_options_tr" */
export type Tag_Options_Tr_Obj_Rel_Insert_Input = {
  data: Tag_Options_Tr_Insert_Input;
  on_conflict?: Maybe<Tag_Options_Tr_On_Conflict>;
};

/** on conflict condition type for table "tag_options_tr" */
export type Tag_Options_Tr_On_Conflict = {
  constraint: Tag_Options_Tr_Constraint;
  update_columns: Array<Tag_Options_Tr_Update_Column>;
  where?: Maybe<Tag_Options_Tr_Bool_Exp>;
};

/** ordering options when selecting data from "tag_options_tr" */
export type Tag_Options_Tr_Order_By = {
  id?: Maybe<Order_By>;
  locale?: Maybe<Order_By>;
  option_id?: Maybe<Order_By>;
  tag?: Maybe<Tag_Options_Order_By>;
  value?: Maybe<Order_By>;
};

/** select columns of table "tag_options_tr" */
export enum Tag_Options_Tr_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Locale = "locale",
  /** column name */
  OptionId = "option_id",
  /** column name */
  Value = "value"
}

/** input type for updating data in table "tag_options_tr" */
export type Tag_Options_Tr_Set_Input = {
  id?: Maybe<Scalars["Int"]>;
  locale?: Maybe<Scalars["String"]>;
  option_id?: Maybe<Scalars["Int"]>;
  value?: Maybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Tag_Options_Tr_Stddev_Fields = {
  __typename?: "tag_options_tr_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  option_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "tag_options_tr" */
export type Tag_Options_Tr_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  option_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tag_Options_Tr_Stddev_Pop_Fields = {
  __typename?: "tag_options_tr_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  option_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "tag_options_tr" */
export type Tag_Options_Tr_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  option_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tag_Options_Tr_Stddev_Samp_Fields = {
  __typename?: "tag_options_tr_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  option_id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "tag_options_tr" */
export type Tag_Options_Tr_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  option_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Tag_Options_Tr_Sum_Fields = {
  __typename?: "tag_options_tr_sum_fields";
  id?: Maybe<Scalars["Int"]>;
  option_id?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "tag_options_tr" */
export type Tag_Options_Tr_Sum_Order_By = {
  id?: Maybe<Order_By>;
  option_id?: Maybe<Order_By>;
};

/** update columns of table "tag_options_tr" */
export enum Tag_Options_Tr_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Locale = "locale",
  /** column name */
  OptionId = "option_id",
  /** column name */
  Value = "value"
}

/** aggregate var_pop on columns */
export type Tag_Options_Tr_Var_Pop_Fields = {
  __typename?: "tag_options_tr_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  option_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "tag_options_tr" */
export type Tag_Options_Tr_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  option_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tag_Options_Tr_Var_Samp_Fields = {
  __typename?: "tag_options_tr_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  option_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "tag_options_tr" */
export type Tag_Options_Tr_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  option_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Tag_Options_Tr_Variance_Fields = {
  __typename?: "tag_options_tr_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  option_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "tag_options_tr" */
export type Tag_Options_Tr_Variance_Order_By = {
  id?: Maybe<Order_By>;
  option_id?: Maybe<Order_By>;
};

/** update columns of table "tag_options" */
export enum Tag_Options_Update_Column {
  /** column name */
  Code = "code",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  ParentId = "parent_id",
  /** column name */
  TypeId = "type_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Value = "value"
}

/** aggregate var_pop on columns */
export type Tag_Options_Var_Pop_Fields = {
  __typename?: "tag_options_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  type_id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "tag_options" */
export type Tag_Options_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tag_Options_Var_Samp_Fields = {
  __typename?: "tag_options_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  type_id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "tag_options" */
export type Tag_Options_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Tag_Options_Variance_Fields = {
  __typename?: "tag_options_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  parent_id?: Maybe<Scalars["Float"]>;
  type_id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "tag_options" */
export type Tag_Options_Variance_Order_By = {
  id?: Maybe<Order_By>;
  parent_id?: Maybe<Order_By>;
  type_id?: Maybe<Order_By>;
};

/** columns and relationships of "tag_types" */
export type Tag_Types = {
  __typename?: "tag_types";
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id: Scalars["bigint"];
  key: Scalars["String"];
  name: Scalars["String"];
  required: Scalars["Boolean"];
  /** An array relationship */
  tags: Array<Tag_Options>;
  /** An aggregated array relationship */
  tags_aggregate: Tag_Options_Aggregate;
  updated_at: Scalars["timestamptz"];
};

/** columns and relationships of "tag_types" */
export type Tag_TypesTagsArgs = {
  distinct_on?: Maybe<Array<Tag_Options_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Options_Order_By>>;
  where?: Maybe<Tag_Options_Bool_Exp>;
};

/** columns and relationships of "tag_types" */
export type Tag_TypesTags_AggregateArgs = {
  distinct_on?: Maybe<Array<Tag_Options_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Tag_Options_Order_By>>;
  where?: Maybe<Tag_Options_Bool_Exp>;
};

/** aggregated selection of "tag_types" */
export type Tag_Types_Aggregate = {
  __typename?: "tag_types_aggregate";
  aggregate?: Maybe<Tag_Types_Aggregate_Fields>;
  nodes: Array<Tag_Types>;
};

/** aggregate fields of "tag_types" */
export type Tag_Types_Aggregate_Fields = {
  __typename?: "tag_types_aggregate_fields";
  avg?: Maybe<Tag_Types_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Tag_Types_Max_Fields>;
  min?: Maybe<Tag_Types_Min_Fields>;
  stddev?: Maybe<Tag_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Tag_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tag_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Tag_Types_Sum_Fields>;
  var_pop?: Maybe<Tag_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Tag_Types_Var_Samp_Fields>;
  variance?: Maybe<Tag_Types_Variance_Fields>;
};

/** aggregate fields of "tag_types" */
export type Tag_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tag_Types_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "tag_types" */
export type Tag_Types_Aggregate_Order_By = {
  avg?: Maybe<Tag_Types_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tag_Types_Max_Order_By>;
  min?: Maybe<Tag_Types_Min_Order_By>;
  stddev?: Maybe<Tag_Types_Stddev_Order_By>;
  stddev_pop?: Maybe<Tag_Types_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tag_Types_Stddev_Samp_Order_By>;
  sum?: Maybe<Tag_Types_Sum_Order_By>;
  var_pop?: Maybe<Tag_Types_Var_Pop_Order_By>;
  var_samp?: Maybe<Tag_Types_Var_Samp_Order_By>;
  variance?: Maybe<Tag_Types_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tag_types" */
export type Tag_Types_Arr_Rel_Insert_Input = {
  data: Array<Tag_Types_Insert_Input>;
  on_conflict?: Maybe<Tag_Types_On_Conflict>;
};

/** aggregate avg on columns */
export type Tag_Types_Avg_Fields = {
  __typename?: "tag_types_avg_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "tag_types" */
export type Tag_Types_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tag_types". All fields are combined with a logical 'AND'. */
export type Tag_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tag_Types_Bool_Exp>>>;
  _not?: Maybe<Tag_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tag_Types_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  required?: Maybe<Boolean_Comparison_Exp>;
  tags?: Maybe<Tag_Options_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tag_types" */
export enum Tag_Types_Constraint {
  /** unique or primary key constraint */
  TagTypesPkey = "tag_types_pkey"
}

/** input type for incrementing integer columne in table "tag_types" */
export type Tag_Types_Inc_Input = {
  id?: Maybe<Scalars["bigint"]>;
};

/** input type for inserting data into table "tag_types" */
export type Tag_Types_Insert_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  required?: Maybe<Scalars["Boolean"]>;
  tags?: Maybe<Tag_Options_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Tag_Types_Max_Fields = {
  __typename?: "tag_types_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "tag_types" */
export type Tag_Types_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tag_Types_Min_Fields = {
  __typename?: "tag_types_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "tag_types" */
export type Tag_Types_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "tag_types" */
export type Tag_Types_Mutation_Response = {
  __typename?: "tag_types_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Tag_Types>;
};

/** input type for inserting object relation for remote table "tag_types" */
export type Tag_Types_Obj_Rel_Insert_Input = {
  data: Tag_Types_Insert_Input;
  on_conflict?: Maybe<Tag_Types_On_Conflict>;
};

/** on conflict condition type for table "tag_types" */
export type Tag_Types_On_Conflict = {
  constraint: Tag_Types_Constraint;
  update_columns: Array<Tag_Types_Update_Column>;
  where?: Maybe<Tag_Types_Bool_Exp>;
};

/** ordering options when selecting data from "tag_types" */
export type Tag_Types_Order_By = {
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  required?: Maybe<Order_By>;
  tags_aggregate?: Maybe<Tag_Options_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "tag_types" */
export enum Tag_Types_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  Key = "key",
  /** column name */
  Name = "name",
  /** column name */
  Required = "required",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "tag_types" */
export type Tag_Types_Set_Input = {
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  required?: Maybe<Scalars["Boolean"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate stddev on columns */
export type Tag_Types_Stddev_Fields = {
  __typename?: "tag_types_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "tag_types" */
export type Tag_Types_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tag_Types_Stddev_Pop_Fields = {
  __typename?: "tag_types_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "tag_types" */
export type Tag_Types_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tag_Types_Stddev_Samp_Fields = {
  __typename?: "tag_types_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "tag_types" */
export type Tag_Types_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Tag_Types_Sum_Fields = {
  __typename?: "tag_types_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "tag_types" */
export type Tag_Types_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "tag_types" */
export enum Tag_Types_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  Key = "key",
  /** column name */
  Name = "name",
  /** column name */
  Required = "required",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate var_pop on columns */
export type Tag_Types_Var_Pop_Fields = {
  __typename?: "tag_types_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "tag_types" */
export type Tag_Types_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tag_Types_Var_Samp_Fields = {
  __typename?: "tag_types_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "tag_types" */
export type Tag_Types_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Tag_Types_Variance_Fields = {
  __typename?: "tag_types_variance_fields";
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "tag_types" */
export type Tag_Types_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars["timestamptz"]>;
  _gt?: Maybe<Scalars["timestamptz"]>;
  _gte?: Maybe<Scalars["timestamptz"]>;
  _in?: Maybe<Array<Scalars["timestamptz"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["timestamptz"]>;
  _lte?: Maybe<Scalars["timestamptz"]>;
  _neq?: Maybe<Scalars["timestamptz"]>;
  _nin?: Maybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  birthdate?: Maybe<Scalars["date"]>;
  /** An array relationship */
  bookmarks: Array<Bookmarks>;
  /** An aggregated array relationship */
  bookmarks_aggregate: Bookmarks_Aggregate;
  created_at: Scalars["timestamptz"];
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  email: Scalars["String"];
  /** An array relationship */
  files_connection: Array<Map_Users_Files>;
  /** An aggregated array relationship */
  files_connection_aggregate: Map_Users_Files_Aggregate;
  firstname?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  lastname?: Maybe<Scalars["String"]>;
  /** An array relationship */
  memberships_connection: Array<Map_Users_Memberships>;
  /** An aggregated array relationship */
  memberships_connection_aggregate: Map_Users_Memberships_Aggregate;
  meta?: Maybe<Scalars["jsonb"]>;
  /** An array relationship */
  organizations_connection: Array<Map_Users_Organizations>;
  /** An aggregated array relationship */
  organizations_connection_aggregate: Map_Users_Organizations_Aggregate;
  phone?: Maybe<Scalars["String"]>;
  /** An array relationship */
  roles_connection: Array<Map_Users_Roles>;
  /** An aggregated array relationship */
  roles_connection_aggregate: Map_Users_Roles_Aggregate;
  updated_at: Scalars["timestamptz"];
};

/** columns and relationships of "users" */
export type UsersBookmarksArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersBookmarks_AggregateArgs = {
  distinct_on?: Maybe<Array<Bookmarks_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Bookmarks_Order_By>>;
  where?: Maybe<Bookmarks_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersFiles_ConnectionArgs = {
  distinct_on?: Maybe<Array<Map_Users_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Files_Order_By>>;
  where?: Maybe<Map_Users_Files_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersFiles_Connection_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Files_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Files_Order_By>>;
  where?: Maybe<Map_Users_Files_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersMemberships_ConnectionArgs = {
  distinct_on?: Maybe<Array<Map_Users_Memberships_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Memberships_Order_By>>;
  where?: Maybe<Map_Users_Memberships_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersMemberships_Connection_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Memberships_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Memberships_Order_By>>;
  where?: Maybe<Map_Users_Memberships_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersMetaArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "users" */
export type UsersOrganizations_ConnectionArgs = {
  distinct_on?: Maybe<Array<Map_Users_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Organizations_Order_By>>;
  where?: Maybe<Map_Users_Organizations_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersOrganizations_Connection_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Organizations_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Organizations_Order_By>>;
  where?: Maybe<Map_Users_Organizations_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersRoles_ConnectionArgs = {
  distinct_on?: Maybe<Array<Map_Users_Roles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Roles_Order_By>>;
  where?: Maybe<Map_Users_Roles_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersRoles_Connection_AggregateArgs = {
  distinct_on?: Maybe<Array<Map_Users_Roles_Select_Column>>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Map_Users_Roles_Order_By>>;
  where?: Maybe<Map_Users_Roles_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  birthdate?: Maybe<Date_Comparison_Exp>;
  bookmarks?: Maybe<Bookmarks_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  files_connection?: Maybe<Map_Users_Files_Bool_Exp>;
  firstname?: Maybe<String_Comparison_Exp>;
  gender?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  lastname?: Maybe<String_Comparison_Exp>;
  memberships_connection?: Maybe<Map_Users_Memberships_Bool_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  organizations_connection?: Maybe<Map_Users_Organizations_Bool_Exp>;
  phone?: Maybe<String_Comparison_Exp>;
  roles_connection?: Maybe<Map_Users_Roles_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = "users_pkey"
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Users_Delete_Elem_Input = {
  meta?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  meta?: Maybe<Scalars["String"]>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  birthdate?: Maybe<Scalars["date"]>;
  bookmarks?: Maybe<Bookmarks_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  files_connection?: Maybe<Map_Users_Files_Arr_Rel_Insert_Input>;
  firstname?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  lastname?: Maybe<Scalars["String"]>;
  memberships_connection?: Maybe<Map_Users_Memberships_Arr_Rel_Insert_Input>;
  meta?: Maybe<Scalars["jsonb"]>;
  organizations_connection?: Maybe<
    Map_Users_Organizations_Arr_Rel_Insert_Input
  >;
  phone?: Maybe<Scalars["String"]>;
  roles_connection?: Maybe<Map_Users_Roles_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  birthdate?: Maybe<Scalars["date"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  lastname?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  birthdate?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  birthdate?: Maybe<Scalars["date"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  lastname?: Maybe<Scalars["String"]>;
  phone?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  birthdate?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  phone?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of affected rows by the mutation */
  affected_rows: Scalars["Int"];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  birthdate?: Maybe<Order_By>;
  bookmarks_aggregate?: Maybe<Bookmarks_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  files_connection_aggregate?: Maybe<Map_Users_Files_Aggregate_Order_By>;
  firstname?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  memberships_connection_aggregate?: Maybe<
    Map_Users_Memberships_Aggregate_Order_By
  >;
  meta?: Maybe<Order_By>;
  organizations_connection_aggregate?: Maybe<
    Map_Users_Organizations_Aggregate_Order_By
  >;
  phone?: Maybe<Order_By>;
  roles_connection_aggregate?: Maybe<Map_Users_Roles_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Birthdate = "birthdate",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Email = "email",
  /** column name */
  Firstname = "firstname",
  /** column name */
  Gender = "gender",
  /** column name */
  Id = "id",
  /** column name */
  Lastname = "lastname",
  /** column name */
  Meta = "meta",
  /** column name */
  Phone = "phone",
  /** column name */
  UpdatedAt = "updated_at"
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  birthdate?: Maybe<Scalars["date"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  email?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  lastname?: Maybe<Scalars["String"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  phone?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Birthdate = "birthdate",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Email = "email",
  /** column name */
  Firstname = "firstname",
  /** column name */
  Gender = "gender",
  /** column name */
  Id = "id",
  /** column name */
  Lastname = "lastname",
  /** column name */
  Meta = "meta",
  /** column name */
  Phone = "phone",
  /** column name */
  UpdatedAt = "updated_at"
}

/** columns and relationships of "vw_authors" */
export type Vw_Authors = {
  __typename?: "vw_authors";
  avatar?: Maybe<Scalars["String"]>;
  averagerate?: Maybe<Scalars["float8"]>;
  contentcount?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_by?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  displayname?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  lastname?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregated selection of "vw_authors" */
export type Vw_Authors_Aggregate = {
  __typename?: "vw_authors_aggregate";
  aggregate?: Maybe<Vw_Authors_Aggregate_Fields>;
  nodes: Array<Vw_Authors>;
};

/** aggregate fields of "vw_authors" */
export type Vw_Authors_Aggregate_Fields = {
  __typename?: "vw_authors_aggregate_fields";
  avg?: Maybe<Vw_Authors_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Vw_Authors_Max_Fields>;
  min?: Maybe<Vw_Authors_Min_Fields>;
  stddev?: Maybe<Vw_Authors_Stddev_Fields>;
  stddev_pop?: Maybe<Vw_Authors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vw_Authors_Stddev_Samp_Fields>;
  sum?: Maybe<Vw_Authors_Sum_Fields>;
  var_pop?: Maybe<Vw_Authors_Var_Pop_Fields>;
  var_samp?: Maybe<Vw_Authors_Var_Samp_Fields>;
  variance?: Maybe<Vw_Authors_Variance_Fields>;
};

/** aggregate fields of "vw_authors" */
export type Vw_Authors_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vw_Authors_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "vw_authors" */
export type Vw_Authors_Aggregate_Order_By = {
  avg?: Maybe<Vw_Authors_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vw_Authors_Max_Order_By>;
  min?: Maybe<Vw_Authors_Min_Order_By>;
  stddev?: Maybe<Vw_Authors_Stddev_Order_By>;
  stddev_pop?: Maybe<Vw_Authors_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vw_Authors_Stddev_Samp_Order_By>;
  sum?: Maybe<Vw_Authors_Sum_Order_By>;
  var_pop?: Maybe<Vw_Authors_Var_Pop_Order_By>;
  var_samp?: Maybe<Vw_Authors_Var_Samp_Order_By>;
  variance?: Maybe<Vw_Authors_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vw_Authors_Avg_Fields = {
  __typename?: "vw_authors_avg_fields";
  averagerate?: Maybe<Scalars["Float"]>;
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "vw_authors" */
export type Vw_Authors_Avg_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vw_authors". All fields are combined with a logical 'AND'. */
export type Vw_Authors_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vw_Authors_Bool_Exp>>>;
  _not?: Maybe<Vw_Authors_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vw_Authors_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  averagerate?: Maybe<Float8_Comparison_Exp>;
  contentcount?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  displayname?: Maybe<String_Comparison_Exp>;
  firstname?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  lastname?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vw_Authors_Max_Fields = {
  __typename?: "vw_authors_max_fields";
  avatar?: Maybe<Scalars["String"]>;
  averagerate?: Maybe<Scalars["float8"]>;
  contentcount?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_by?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  displayname?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  lastname?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "vw_authors" */
export type Vw_Authors_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  displayname?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vw_Authors_Min_Fields = {
  __typename?: "vw_authors_min_fields";
  avatar?: Maybe<Scalars["String"]>;
  averagerate?: Maybe<Scalars["float8"]>;
  contentcount?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  created_by?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  displayname?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  lastname?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "vw_authors" */
export type Vw_Authors_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  displayname?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vw_authors" */
export type Vw_Authors_Order_By = {
  avatar?: Maybe<Order_By>;
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  displayname?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** select columns of table "vw_authors" */
export enum Vw_Authors_Select_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  Averagerate = "averagerate",
  /** column name */
  Contentcount = "contentcount",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatedBy = "created_by",
  /** column name */
  Description = "description",
  /** column name */
  Displayname = "displayname",
  /** column name */
  Firstname = "firstname",
  /** column name */
  Id = "id",
  /** column name */
  Lastname = "lastname",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate stddev on columns */
export type Vw_Authors_Stddev_Fields = {
  __typename?: "vw_authors_stddev_fields";
  averagerate?: Maybe<Scalars["Float"]>;
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "vw_authors" */
export type Vw_Authors_Stddev_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vw_Authors_Stddev_Pop_Fields = {
  __typename?: "vw_authors_stddev_pop_fields";
  averagerate?: Maybe<Scalars["Float"]>;
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "vw_authors" */
export type Vw_Authors_Stddev_Pop_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vw_Authors_Stddev_Samp_Fields = {
  __typename?: "vw_authors_stddev_samp_fields";
  averagerate?: Maybe<Scalars["Float"]>;
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "vw_authors" */
export type Vw_Authors_Stddev_Samp_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vw_Authors_Sum_Fields = {
  __typename?: "vw_authors_sum_fields";
  averagerate?: Maybe<Scalars["float8"]>;
  contentcount?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "vw_authors" */
export type Vw_Authors_Sum_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vw_Authors_Var_Pop_Fields = {
  __typename?: "vw_authors_var_pop_fields";
  averagerate?: Maybe<Scalars["Float"]>;
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "vw_authors" */
export type Vw_Authors_Var_Pop_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vw_Authors_Var_Samp_Fields = {
  __typename?: "vw_authors_var_samp_fields";
  averagerate?: Maybe<Scalars["Float"]>;
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "vw_authors" */
export type Vw_Authors_Var_Samp_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vw_Authors_Variance_Fields = {
  __typename?: "vw_authors_variance_fields";
  averagerate?: Maybe<Scalars["Float"]>;
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "vw_authors" */
export type Vw_Authors_Variance_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "vw_best_authors" */
export type Vw_Best_Authors = {
  __typename?: "vw_best_authors";
  avatar?: Maybe<Scalars["String"]>;
  averagerate?: Maybe<Scalars["float8"]>;
  contentcount?: Maybe<Scalars["bigint"]>;
  displayname?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  lastname?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "vw_best_authors" */
export type Vw_Best_Authors_Aggregate = {
  __typename?: "vw_best_authors_aggregate";
  aggregate?: Maybe<Vw_Best_Authors_Aggregate_Fields>;
  nodes: Array<Vw_Best_Authors>;
};

/** aggregate fields of "vw_best_authors" */
export type Vw_Best_Authors_Aggregate_Fields = {
  __typename?: "vw_best_authors_aggregate_fields";
  avg?: Maybe<Vw_Best_Authors_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Vw_Best_Authors_Max_Fields>;
  min?: Maybe<Vw_Best_Authors_Min_Fields>;
  stddev?: Maybe<Vw_Best_Authors_Stddev_Fields>;
  stddev_pop?: Maybe<Vw_Best_Authors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vw_Best_Authors_Stddev_Samp_Fields>;
  sum?: Maybe<Vw_Best_Authors_Sum_Fields>;
  var_pop?: Maybe<Vw_Best_Authors_Var_Pop_Fields>;
  var_samp?: Maybe<Vw_Best_Authors_Var_Samp_Fields>;
  variance?: Maybe<Vw_Best_Authors_Variance_Fields>;
};

/** aggregate fields of "vw_best_authors" */
export type Vw_Best_Authors_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vw_Best_Authors_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "vw_best_authors" */
export type Vw_Best_Authors_Aggregate_Order_By = {
  avg?: Maybe<Vw_Best_Authors_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vw_Best_Authors_Max_Order_By>;
  min?: Maybe<Vw_Best_Authors_Min_Order_By>;
  stddev?: Maybe<Vw_Best_Authors_Stddev_Order_By>;
  stddev_pop?: Maybe<Vw_Best_Authors_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vw_Best_Authors_Stddev_Samp_Order_By>;
  sum?: Maybe<Vw_Best_Authors_Sum_Order_By>;
  var_pop?: Maybe<Vw_Best_Authors_Var_Pop_Order_By>;
  var_samp?: Maybe<Vw_Best_Authors_Var_Samp_Order_By>;
  variance?: Maybe<Vw_Best_Authors_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vw_Best_Authors_Avg_Fields = {
  __typename?: "vw_best_authors_avg_fields";
  averagerate?: Maybe<Scalars["Float"]>;
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "vw_best_authors" */
export type Vw_Best_Authors_Avg_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vw_best_authors". All fields are combined with a logical 'AND'. */
export type Vw_Best_Authors_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vw_Best_Authors_Bool_Exp>>>;
  _not?: Maybe<Vw_Best_Authors_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vw_Best_Authors_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  averagerate?: Maybe<Float8_Comparison_Exp>;
  contentcount?: Maybe<Bigint_Comparison_Exp>;
  displayname?: Maybe<String_Comparison_Exp>;
  firstname?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  lastname?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vw_Best_Authors_Max_Fields = {
  __typename?: "vw_best_authors_max_fields";
  avatar?: Maybe<Scalars["String"]>;
  averagerate?: Maybe<Scalars["float8"]>;
  contentcount?: Maybe<Scalars["bigint"]>;
  displayname?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  lastname?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "vw_best_authors" */
export type Vw_Best_Authors_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  displayname?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vw_Best_Authors_Min_Fields = {
  __typename?: "vw_best_authors_min_fields";
  avatar?: Maybe<Scalars["String"]>;
  averagerate?: Maybe<Scalars["float8"]>;
  contentcount?: Maybe<Scalars["bigint"]>;
  displayname?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  lastname?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "vw_best_authors" */
export type Vw_Best_Authors_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  displayname?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vw_best_authors" */
export type Vw_Best_Authors_Order_By = {
  avatar?: Maybe<Order_By>;
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  displayname?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
};

/** select columns of table "vw_best_authors" */
export enum Vw_Best_Authors_Select_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  Averagerate = "averagerate",
  /** column name */
  Contentcount = "contentcount",
  /** column name */
  Displayname = "displayname",
  /** column name */
  Firstname = "firstname",
  /** column name */
  Id = "id",
  /** column name */
  Lastname = "lastname"
}

/** aggregate stddev on columns */
export type Vw_Best_Authors_Stddev_Fields = {
  __typename?: "vw_best_authors_stddev_fields";
  averagerate?: Maybe<Scalars["Float"]>;
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "vw_best_authors" */
export type Vw_Best_Authors_Stddev_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vw_Best_Authors_Stddev_Pop_Fields = {
  __typename?: "vw_best_authors_stddev_pop_fields";
  averagerate?: Maybe<Scalars["Float"]>;
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "vw_best_authors" */
export type Vw_Best_Authors_Stddev_Pop_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vw_Best_Authors_Stddev_Samp_Fields = {
  __typename?: "vw_best_authors_stddev_samp_fields";
  averagerate?: Maybe<Scalars["Float"]>;
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "vw_best_authors" */
export type Vw_Best_Authors_Stddev_Samp_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vw_Best_Authors_Sum_Fields = {
  __typename?: "vw_best_authors_sum_fields";
  averagerate?: Maybe<Scalars["float8"]>;
  contentcount?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "vw_best_authors" */
export type Vw_Best_Authors_Sum_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vw_Best_Authors_Var_Pop_Fields = {
  __typename?: "vw_best_authors_var_pop_fields";
  averagerate?: Maybe<Scalars["Float"]>;
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "vw_best_authors" */
export type Vw_Best_Authors_Var_Pop_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vw_Best_Authors_Var_Samp_Fields = {
  __typename?: "vw_best_authors_var_samp_fields";
  averagerate?: Maybe<Scalars["Float"]>;
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "vw_best_authors" */
export type Vw_Best_Authors_Var_Samp_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vw_Best_Authors_Variance_Fields = {
  __typename?: "vw_best_authors_variance_fields";
  averagerate?: Maybe<Scalars["Float"]>;
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "vw_best_authors" */
export type Vw_Best_Authors_Variance_Order_By = {
  averagerate?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents = {
  __typename?: "vw_best_ranked_contents";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  key?: Maybe<Scalars["String"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  name?: Maybe<Scalars["String"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  type?: Maybe<Scalars["content_types"]>;
};

/** columns and relationships of "vw_best_ranked_contents" */
export type Vw_Best_Ranked_ContentsMetaArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Aggregate = {
  __typename?: "vw_best_ranked_contents_aggregate";
  aggregate?: Maybe<Vw_Best_Ranked_Contents_Aggregate_Fields>;
  nodes: Array<Vw_Best_Ranked_Contents>;
};

/** aggregate fields of "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Aggregate_Fields = {
  __typename?: "vw_best_ranked_contents_aggregate_fields";
  avg?: Maybe<Vw_Best_Ranked_Contents_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Vw_Best_Ranked_Contents_Max_Fields>;
  min?: Maybe<Vw_Best_Ranked_Contents_Min_Fields>;
  stddev?: Maybe<Vw_Best_Ranked_Contents_Stddev_Fields>;
  stddev_pop?: Maybe<Vw_Best_Ranked_Contents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vw_Best_Ranked_Contents_Stddev_Samp_Fields>;
  sum?: Maybe<Vw_Best_Ranked_Contents_Sum_Fields>;
  var_pop?: Maybe<Vw_Best_Ranked_Contents_Var_Pop_Fields>;
  var_samp?: Maybe<Vw_Best_Ranked_Contents_Var_Samp_Fields>;
  variance?: Maybe<Vw_Best_Ranked_Contents_Variance_Fields>;
};

/** aggregate fields of "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vw_Best_Ranked_Contents_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Aggregate_Order_By = {
  avg?: Maybe<Vw_Best_Ranked_Contents_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vw_Best_Ranked_Contents_Max_Order_By>;
  min?: Maybe<Vw_Best_Ranked_Contents_Min_Order_By>;
  stddev?: Maybe<Vw_Best_Ranked_Contents_Stddev_Order_By>;
  stddev_pop?: Maybe<Vw_Best_Ranked_Contents_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vw_Best_Ranked_Contents_Stddev_Samp_Order_By>;
  sum?: Maybe<Vw_Best_Ranked_Contents_Sum_Order_By>;
  var_pop?: Maybe<Vw_Best_Ranked_Contents_Var_Pop_Order_By>;
  var_samp?: Maybe<Vw_Best_Ranked_Contents_Var_Samp_Order_By>;
  variance?: Maybe<Vw_Best_Ranked_Contents_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Vw_Best_Ranked_Contents_Append_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** aggregate avg on columns */
export type Vw_Best_Ranked_Contents_Avg_Fields = {
  __typename?: "vw_best_ranked_contents_avg_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Avg_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vw_best_ranked_contents". All fields are combined with a logical 'AND'. */
export type Vw_Best_Ranked_Contents_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vw_Best_Ranked_Contents_Bool_Exp>>>;
  _not?: Maybe<Vw_Best_Ranked_Contents_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vw_Best_Ranked_Contents_Bool_Exp>>>;
  average_rate?: Maybe<Numeric_Comparison_Exp>;
  bucket?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  payment_type?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  type?: Maybe<Content_Types_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Vw_Best_Ranked_Contents_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Vw_Best_Ranked_Contents_Delete_Elem_Input = {
  meta?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Vw_Best_Ranked_Contents_Delete_Key_Input = {
  meta?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Vw_Best_Ranked_Contents_Max_Fields = {
  __typename?: "vw_best_ranked_contents_max_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
};

/** order by max() on columns of table "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Max_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vw_Best_Ranked_Contents_Min_Fields = {
  __typename?: "vw_best_ranked_contents_min_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
};

/** order by min() on columns of table "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Min_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Vw_Best_Ranked_Contents_Prepend_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "vw_best_ranked_contents" */
export enum Vw_Best_Ranked_Contents_Select_Column {
  /** column name */
  AverageRate = "average_rate",
  /** column name */
  Bucket = "bucket",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Key = "key",
  /** column name */
  Meta = "meta",
  /** column name */
  Name = "name",
  /** column name */
  PaymentType = "payment_type",
  /** column name */
  Price = "price",
  /** column name */
  Type = "type"
}

/** aggregate stddev on columns */
export type Vw_Best_Ranked_Contents_Stddev_Fields = {
  __typename?: "vw_best_ranked_contents_stddev_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Stddev_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vw_Best_Ranked_Contents_Stddev_Pop_Fields = {
  __typename?: "vw_best_ranked_contents_stddev_pop_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Stddev_Pop_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vw_Best_Ranked_Contents_Stddev_Samp_Fields = {
  __typename?: "vw_best_ranked_contents_stddev_samp_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Stddev_Samp_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vw_Best_Ranked_Contents_Sum_Fields = {
  __typename?: "vw_best_ranked_contents_sum_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Sum_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vw_Best_Ranked_Contents_Var_Pop_Fields = {
  __typename?: "vw_best_ranked_contents_var_pop_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Var_Pop_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vw_Best_Ranked_Contents_Var_Samp_Fields = {
  __typename?: "vw_best_ranked_contents_var_samp_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Var_Samp_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vw_Best_Ranked_Contents_Variance_Fields = {
  __typename?: "vw_best_ranked_contents_variance_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "vw_best_ranked_contents" */
export type Vw_Best_Ranked_Contents_Variance_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** columns and relationships of "vw_bestseller_contents" */
export type Vw_Bestseller_Contents = {
  __typename?: "vw_bestseller_contents";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  key?: Maybe<Scalars["String"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  name?: Maybe<Scalars["String"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  salecount?: Maybe<Scalars["bigint"]>;
  type?: Maybe<Scalars["content_types"]>;
};

/** columns and relationships of "vw_bestseller_contents" */
export type Vw_Bestseller_ContentsMetaArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Aggregate = {
  __typename?: "vw_bestseller_contents_aggregate";
  aggregate?: Maybe<Vw_Bestseller_Contents_Aggregate_Fields>;
  nodes: Array<Vw_Bestseller_Contents>;
};

/** aggregate fields of "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Aggregate_Fields = {
  __typename?: "vw_bestseller_contents_aggregate_fields";
  avg?: Maybe<Vw_Bestseller_Contents_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Vw_Bestseller_Contents_Max_Fields>;
  min?: Maybe<Vw_Bestseller_Contents_Min_Fields>;
  stddev?: Maybe<Vw_Bestseller_Contents_Stddev_Fields>;
  stddev_pop?: Maybe<Vw_Bestseller_Contents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vw_Bestseller_Contents_Stddev_Samp_Fields>;
  sum?: Maybe<Vw_Bestseller_Contents_Sum_Fields>;
  var_pop?: Maybe<Vw_Bestseller_Contents_Var_Pop_Fields>;
  var_samp?: Maybe<Vw_Bestseller_Contents_Var_Samp_Fields>;
  variance?: Maybe<Vw_Bestseller_Contents_Variance_Fields>;
};

/** aggregate fields of "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vw_Bestseller_Contents_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Aggregate_Order_By = {
  avg?: Maybe<Vw_Bestseller_Contents_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vw_Bestseller_Contents_Max_Order_By>;
  min?: Maybe<Vw_Bestseller_Contents_Min_Order_By>;
  stddev?: Maybe<Vw_Bestseller_Contents_Stddev_Order_By>;
  stddev_pop?: Maybe<Vw_Bestseller_Contents_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vw_Bestseller_Contents_Stddev_Samp_Order_By>;
  sum?: Maybe<Vw_Bestseller_Contents_Sum_Order_By>;
  var_pop?: Maybe<Vw_Bestseller_Contents_Var_Pop_Order_By>;
  var_samp?: Maybe<Vw_Bestseller_Contents_Var_Samp_Order_By>;
  variance?: Maybe<Vw_Bestseller_Contents_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Vw_Bestseller_Contents_Append_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** aggregate avg on columns */
export type Vw_Bestseller_Contents_Avg_Fields = {
  __typename?: "vw_bestseller_contents_avg_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  salecount?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Avg_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  salecount?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vw_bestseller_contents". All fields are combined with a logical 'AND'. */
export type Vw_Bestseller_Contents_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vw_Bestseller_Contents_Bool_Exp>>>;
  _not?: Maybe<Vw_Bestseller_Contents_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vw_Bestseller_Contents_Bool_Exp>>>;
  average_rate?: Maybe<Numeric_Comparison_Exp>;
  bucket?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  payment_type?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  salecount?: Maybe<Bigint_Comparison_Exp>;
  type?: Maybe<Content_Types_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Vw_Bestseller_Contents_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Vw_Bestseller_Contents_Delete_Elem_Input = {
  meta?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Vw_Bestseller_Contents_Delete_Key_Input = {
  meta?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Vw_Bestseller_Contents_Max_Fields = {
  __typename?: "vw_bestseller_contents_max_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  salecount?: Maybe<Scalars["bigint"]>;
};

/** order by max() on columns of table "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Max_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  salecount?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vw_Bestseller_Contents_Min_Fields = {
  __typename?: "vw_bestseller_contents_min_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  salecount?: Maybe<Scalars["bigint"]>;
};

/** order by min() on columns of table "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Min_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  salecount?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  salecount?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Vw_Bestseller_Contents_Prepend_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "vw_bestseller_contents" */
export enum Vw_Bestseller_Contents_Select_Column {
  /** column name */
  AverageRate = "average_rate",
  /** column name */
  Bucket = "bucket",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Key = "key",
  /** column name */
  Meta = "meta",
  /** column name */
  Name = "name",
  /** column name */
  PaymentType = "payment_type",
  /** column name */
  Price = "price",
  /** column name */
  Salecount = "salecount",
  /** column name */
  Type = "type"
}

/** aggregate stddev on columns */
export type Vw_Bestseller_Contents_Stddev_Fields = {
  __typename?: "vw_bestseller_contents_stddev_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  salecount?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Stddev_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  salecount?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vw_Bestseller_Contents_Stddev_Pop_Fields = {
  __typename?: "vw_bestseller_contents_stddev_pop_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  salecount?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Stddev_Pop_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  salecount?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vw_Bestseller_Contents_Stddev_Samp_Fields = {
  __typename?: "vw_bestseller_contents_stddev_samp_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  salecount?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Stddev_Samp_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  salecount?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vw_Bestseller_Contents_Sum_Fields = {
  __typename?: "vw_bestseller_contents_sum_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  salecount?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Sum_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  salecount?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vw_Bestseller_Contents_Var_Pop_Fields = {
  __typename?: "vw_bestseller_contents_var_pop_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  salecount?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Var_Pop_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  salecount?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vw_Bestseller_Contents_Var_Samp_Fields = {
  __typename?: "vw_bestseller_contents_var_samp_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  salecount?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Var_Samp_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  salecount?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vw_Bestseller_Contents_Variance_Fields = {
  __typename?: "vw_bestseller_contents_variance_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  salecount?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "vw_bestseller_contents" */
export type Vw_Bestseller_Contents_Variance_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  salecount?: Maybe<Order_By>;
};

/** columns and relationships of "vw_contents" */
export type Vw_Contents = {
  __typename?: "vw_contents";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  isbn?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  name?: Maybe<Scalars["String"]>;
  organization?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  read?: Maybe<Scalars["bigint"]>;
  tags_id?: Maybe<Scalars["_int8"]>;
  type?: Maybe<Scalars["content_types"]>;
};

/** columns and relationships of "vw_contents" */
export type Vw_ContentsMetaArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "vw_contents" */
export type Vw_Contents_Aggregate = {
  __typename?: "vw_contents_aggregate";
  aggregate?: Maybe<Vw_Contents_Aggregate_Fields>;
  nodes: Array<Vw_Contents>;
};

/** aggregate fields of "vw_contents" */
export type Vw_Contents_Aggregate_Fields = {
  __typename?: "vw_contents_aggregate_fields";
  avg?: Maybe<Vw_Contents_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Vw_Contents_Max_Fields>;
  min?: Maybe<Vw_Contents_Min_Fields>;
  stddev?: Maybe<Vw_Contents_Stddev_Fields>;
  stddev_pop?: Maybe<Vw_Contents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vw_Contents_Stddev_Samp_Fields>;
  sum?: Maybe<Vw_Contents_Sum_Fields>;
  var_pop?: Maybe<Vw_Contents_Var_Pop_Fields>;
  var_samp?: Maybe<Vw_Contents_Var_Samp_Fields>;
  variance?: Maybe<Vw_Contents_Variance_Fields>;
};

/** aggregate fields of "vw_contents" */
export type Vw_Contents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vw_Contents_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "vw_contents" */
export type Vw_Contents_Aggregate_Order_By = {
  avg?: Maybe<Vw_Contents_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vw_Contents_Max_Order_By>;
  min?: Maybe<Vw_Contents_Min_Order_By>;
  stddev?: Maybe<Vw_Contents_Stddev_Order_By>;
  stddev_pop?: Maybe<Vw_Contents_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vw_Contents_Stddev_Samp_Order_By>;
  sum?: Maybe<Vw_Contents_Sum_Order_By>;
  var_pop?: Maybe<Vw_Contents_Var_Pop_Order_By>;
  var_samp?: Maybe<Vw_Contents_Var_Samp_Order_By>;
  variance?: Maybe<Vw_Contents_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Vw_Contents_Append_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** aggregate avg on columns */
export type Vw_Contents_Avg_Fields = {
  __typename?: "vw_contents_avg_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "vw_contents" */
export type Vw_Contents_Avg_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vw_contents". All fields are combined with a logical 'AND'. */
export type Vw_Contents_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vw_Contents_Bool_Exp>>>;
  _not?: Maybe<Vw_Contents_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vw_Contents_Bool_Exp>>>;
  average_rate?: Maybe<Numeric_Comparison_Exp>;
  bucket?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  isbn?: Maybe<String_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization?: Maybe<Bigint_Comparison_Exp>;
  payment_type?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  read?: Maybe<Bigint_Comparison_Exp>;
  tags_id?: Maybe<_Int8_Comparison_Exp>;
  type?: Maybe<Content_Types_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Vw_Contents_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Vw_Contents_Delete_Elem_Input = {
  meta?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Vw_Contents_Delete_Key_Input = {
  meta?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Vw_Contents_Max_Fields = {
  __typename?: "vw_contents_max_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  isbn?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organization?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  read?: Maybe<Scalars["bigint"]>;
};

/** order by max() on columns of table "vw_contents" */
export type Vw_Contents_Max_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vw_Contents_Min_Fields = {
  __typename?: "vw_contents_min_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  isbn?: Maybe<Scalars["String"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organization?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  read?: Maybe<Scalars["bigint"]>;
};

/** order by min() on columns of table "vw_contents" */
export type Vw_Contents_Min_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vw_contents" */
export type Vw_Contents_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  tags_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Vw_Contents_Prepend_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "vw_contents" */
export enum Vw_Contents_Select_Column {
  /** column name */
  AverageRate = "average_rate",
  /** column name */
  Bucket = "bucket",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Isbn = "isbn",
  /** column name */
  Key = "key",
  /** column name */
  Meta = "meta",
  /** column name */
  Name = "name",
  /** column name */
  Organization = "organization",
  /** column name */
  PaymentType = "payment_type",
  /** column name */
  Price = "price",
  /** column name */
  Read = "read",
  /** column name */
  TagsId = "tags_id",
  /** column name */
  Type = "type"
}

/** aggregate stddev on columns */
export type Vw_Contents_Stddev_Fields = {
  __typename?: "vw_contents_stddev_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "vw_contents" */
export type Vw_Contents_Stddev_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vw_Contents_Stddev_Pop_Fields = {
  __typename?: "vw_contents_stddev_pop_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "vw_contents" */
export type Vw_Contents_Stddev_Pop_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vw_Contents_Stddev_Samp_Fields = {
  __typename?: "vw_contents_stddev_samp_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "vw_contents" */
export type Vw_Contents_Stddev_Samp_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vw_Contents_Sum_Fields = {
  __typename?: "vw_contents_sum_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["bigint"]>;
  organization?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  read?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "vw_contents" */
export type Vw_Contents_Sum_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vw_Contents_Var_Pop_Fields = {
  __typename?: "vw_contents_var_pop_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "vw_contents" */
export type Vw_Contents_Var_Pop_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vw_Contents_Var_Samp_Fields = {
  __typename?: "vw_contents_var_samp_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "vw_contents" */
export type Vw_Contents_Var_Samp_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vw_Contents_Variance_Fields = {
  __typename?: "vw_contents_variance_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "vw_contents" */
export type Vw_Contents_Variance_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
};

/** columns and relationships of "vw_featured_contents" */
export type Vw_Featured_Contents = {
  __typename?: "vw_featured_contents";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  key?: Maybe<Scalars["String"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  name?: Maybe<Scalars["String"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  type?: Maybe<Scalars["content_types"]>;
};

/** columns and relationships of "vw_featured_contents" */
export type Vw_Featured_ContentsMetaArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "vw_featured_contents" */
export type Vw_Featured_Contents_Aggregate = {
  __typename?: "vw_featured_contents_aggregate";
  aggregate?: Maybe<Vw_Featured_Contents_Aggregate_Fields>;
  nodes: Array<Vw_Featured_Contents>;
};

/** aggregate fields of "vw_featured_contents" */
export type Vw_Featured_Contents_Aggregate_Fields = {
  __typename?: "vw_featured_contents_aggregate_fields";
  avg?: Maybe<Vw_Featured_Contents_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Vw_Featured_Contents_Max_Fields>;
  min?: Maybe<Vw_Featured_Contents_Min_Fields>;
  stddev?: Maybe<Vw_Featured_Contents_Stddev_Fields>;
  stddev_pop?: Maybe<Vw_Featured_Contents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vw_Featured_Contents_Stddev_Samp_Fields>;
  sum?: Maybe<Vw_Featured_Contents_Sum_Fields>;
  var_pop?: Maybe<Vw_Featured_Contents_Var_Pop_Fields>;
  var_samp?: Maybe<Vw_Featured_Contents_Var_Samp_Fields>;
  variance?: Maybe<Vw_Featured_Contents_Variance_Fields>;
};

/** aggregate fields of "vw_featured_contents" */
export type Vw_Featured_Contents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vw_Featured_Contents_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "vw_featured_contents" */
export type Vw_Featured_Contents_Aggregate_Order_By = {
  avg?: Maybe<Vw_Featured_Contents_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vw_Featured_Contents_Max_Order_By>;
  min?: Maybe<Vw_Featured_Contents_Min_Order_By>;
  stddev?: Maybe<Vw_Featured_Contents_Stddev_Order_By>;
  stddev_pop?: Maybe<Vw_Featured_Contents_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vw_Featured_Contents_Stddev_Samp_Order_By>;
  sum?: Maybe<Vw_Featured_Contents_Sum_Order_By>;
  var_pop?: Maybe<Vw_Featured_Contents_Var_Pop_Order_By>;
  var_samp?: Maybe<Vw_Featured_Contents_Var_Samp_Order_By>;
  variance?: Maybe<Vw_Featured_Contents_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Vw_Featured_Contents_Append_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** aggregate avg on columns */
export type Vw_Featured_Contents_Avg_Fields = {
  __typename?: "vw_featured_contents_avg_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "vw_featured_contents" */
export type Vw_Featured_Contents_Avg_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vw_featured_contents". All fields are combined with a logical 'AND'. */
export type Vw_Featured_Contents_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vw_Featured_Contents_Bool_Exp>>>;
  _not?: Maybe<Vw_Featured_Contents_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vw_Featured_Contents_Bool_Exp>>>;
  average_rate?: Maybe<Numeric_Comparison_Exp>;
  bucket?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  payment_type?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  type?: Maybe<Content_Types_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Vw_Featured_Contents_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Vw_Featured_Contents_Delete_Elem_Input = {
  meta?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Vw_Featured_Contents_Delete_Key_Input = {
  meta?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Vw_Featured_Contents_Max_Fields = {
  __typename?: "vw_featured_contents_max_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
};

/** order by max() on columns of table "vw_featured_contents" */
export type Vw_Featured_Contents_Max_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vw_Featured_Contents_Min_Fields = {
  __typename?: "vw_featured_contents_min_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  key?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
};

/** order by min() on columns of table "vw_featured_contents" */
export type Vw_Featured_Contents_Min_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vw_featured_contents" */
export type Vw_Featured_Contents_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Vw_Featured_Contents_Prepend_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "vw_featured_contents" */
export enum Vw_Featured_Contents_Select_Column {
  /** column name */
  AverageRate = "average_rate",
  /** column name */
  Bucket = "bucket",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Key = "key",
  /** column name */
  Meta = "meta",
  /** column name */
  Name = "name",
  /** column name */
  PaymentType = "payment_type",
  /** column name */
  Price = "price",
  /** column name */
  Type = "type"
}

/** aggregate stddev on columns */
export type Vw_Featured_Contents_Stddev_Fields = {
  __typename?: "vw_featured_contents_stddev_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "vw_featured_contents" */
export type Vw_Featured_Contents_Stddev_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vw_Featured_Contents_Stddev_Pop_Fields = {
  __typename?: "vw_featured_contents_stddev_pop_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "vw_featured_contents" */
export type Vw_Featured_Contents_Stddev_Pop_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vw_Featured_Contents_Stddev_Samp_Fields = {
  __typename?: "vw_featured_contents_stddev_samp_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "vw_featured_contents" */
export type Vw_Featured_Contents_Stddev_Samp_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vw_Featured_Contents_Sum_Fields = {
  __typename?: "vw_featured_contents_sum_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "vw_featured_contents" */
export type Vw_Featured_Contents_Sum_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vw_Featured_Contents_Var_Pop_Fields = {
  __typename?: "vw_featured_contents_var_pop_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "vw_featured_contents" */
export type Vw_Featured_Contents_Var_Pop_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vw_Featured_Contents_Var_Samp_Fields = {
  __typename?: "vw_featured_contents_var_samp_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "vw_featured_contents" */
export type Vw_Featured_Contents_Var_Samp_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vw_Featured_Contents_Variance_Fields = {
  __typename?: "vw_featured_contents_variance_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "vw_featured_contents" */
export type Vw_Featured_Contents_Variance_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
};

/** columns and relationships of "vw_organization_contents" */
export type Vw_Organization_Contents = {
  __typename?: "vw_organization_contents";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  is_published?: Maybe<Scalars["Boolean"]>;
  isbn?: Maybe<Scalars["String"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  read?: Maybe<Scalars["bigint"]>;
  tags_id?: Maybe<Scalars["_int8"]>;
  type?: Maybe<Scalars["content_types"]>;
  views?: Maybe<Scalars["Int"]>;
};

/** columns and relationships of "vw_organization_contents" */
export type Vw_Organization_ContentsMetaArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "vw_organization_contents" */
export type Vw_Organization_Contents_Aggregate = {
  __typename?: "vw_organization_contents_aggregate";
  aggregate?: Maybe<Vw_Organization_Contents_Aggregate_Fields>;
  nodes: Array<Vw_Organization_Contents>;
};

/** aggregate fields of "vw_organization_contents" */
export type Vw_Organization_Contents_Aggregate_Fields = {
  __typename?: "vw_organization_contents_aggregate_fields";
  avg?: Maybe<Vw_Organization_Contents_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Vw_Organization_Contents_Max_Fields>;
  min?: Maybe<Vw_Organization_Contents_Min_Fields>;
  stddev?: Maybe<Vw_Organization_Contents_Stddev_Fields>;
  stddev_pop?: Maybe<Vw_Organization_Contents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vw_Organization_Contents_Stddev_Samp_Fields>;
  sum?: Maybe<Vw_Organization_Contents_Sum_Fields>;
  var_pop?: Maybe<Vw_Organization_Contents_Var_Pop_Fields>;
  var_samp?: Maybe<Vw_Organization_Contents_Var_Samp_Fields>;
  variance?: Maybe<Vw_Organization_Contents_Variance_Fields>;
};

/** aggregate fields of "vw_organization_contents" */
export type Vw_Organization_Contents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vw_Organization_Contents_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "vw_organization_contents" */
export type Vw_Organization_Contents_Aggregate_Order_By = {
  avg?: Maybe<Vw_Organization_Contents_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vw_Organization_Contents_Max_Order_By>;
  min?: Maybe<Vw_Organization_Contents_Min_Order_By>;
  stddev?: Maybe<Vw_Organization_Contents_Stddev_Order_By>;
  stddev_pop?: Maybe<Vw_Organization_Contents_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vw_Organization_Contents_Stddev_Samp_Order_By>;
  sum?: Maybe<Vw_Organization_Contents_Sum_Order_By>;
  var_pop?: Maybe<Vw_Organization_Contents_Var_Pop_Order_By>;
  var_samp?: Maybe<Vw_Organization_Contents_Var_Samp_Order_By>;
  variance?: Maybe<Vw_Organization_Contents_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Vw_Organization_Contents_Append_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** aggregate avg on columns */
export type Vw_Organization_Contents_Avg_Fields = {
  __typename?: "vw_organization_contents_avg_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "vw_organization_contents" */
export type Vw_Organization_Contents_Avg_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vw_organization_contents". All fields are combined with a logical 'AND'. */
export type Vw_Organization_Contents_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vw_Organization_Contents_Bool_Exp>>>;
  _not?: Maybe<Vw_Organization_Contents_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vw_Organization_Contents_Bool_Exp>>>;
  average_rate?: Maybe<Numeric_Comparison_Exp>;
  bucket?: Maybe<String_Comparison_Exp>;
  cover?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  is_published?: Maybe<Boolean_Comparison_Exp>;
  isbn?: Maybe<String_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization_id?: Maybe<Bigint_Comparison_Exp>;
  payment_type?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  read?: Maybe<Bigint_Comparison_Exp>;
  tags_id?: Maybe<_Int8_Comparison_Exp>;
  type?: Maybe<Content_Types_Comparison_Exp>;
  views?: Maybe<Int_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Vw_Organization_Contents_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Vw_Organization_Contents_Delete_Elem_Input = {
  meta?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Vw_Organization_Contents_Delete_Key_Input = {
  meta?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Vw_Organization_Contents_Max_Fields = {
  __typename?: "vw_organization_contents_max_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  isbn?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  read?: Maybe<Scalars["bigint"]>;
  views?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "vw_organization_contents" */
export type Vw_Organization_Contents_Max_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  cover?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vw_Organization_Contents_Min_Fields = {
  __typename?: "vw_organization_contents_min_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  bucket?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  isbn?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  read?: Maybe<Scalars["bigint"]>;
  views?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "vw_organization_contents" */
export type Vw_Organization_Contents_Min_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  cover?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vw_organization_contents" */
export type Vw_Organization_Contents_Order_By = {
  average_rate?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  cover?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_published?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  tags_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Vw_Organization_Contents_Prepend_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "vw_organization_contents" */
export enum Vw_Organization_Contents_Select_Column {
  /** column name */
  AverageRate = "average_rate",
  /** column name */
  Bucket = "bucket",
  /** column name */
  Cover = "cover",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  IsPublished = "is_published",
  /** column name */
  Isbn = "isbn",
  /** column name */
  Meta = "meta",
  /** column name */
  Name = "name",
  /** column name */
  OrganizationId = "organization_id",
  /** column name */
  PaymentType = "payment_type",
  /** column name */
  Price = "price",
  /** column name */
  Read = "read",
  /** column name */
  TagsId = "tags_id",
  /** column name */
  Type = "type",
  /** column name */
  Views = "views"
}

/** aggregate stddev on columns */
export type Vw_Organization_Contents_Stddev_Fields = {
  __typename?: "vw_organization_contents_stddev_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "vw_organization_contents" */
export type Vw_Organization_Contents_Stddev_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vw_Organization_Contents_Stddev_Pop_Fields = {
  __typename?: "vw_organization_contents_stddev_pop_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "vw_organization_contents" */
export type Vw_Organization_Contents_Stddev_Pop_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vw_Organization_Contents_Stddev_Samp_Fields = {
  __typename?: "vw_organization_contents_stddev_samp_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "vw_organization_contents" */
export type Vw_Organization_Contents_Stddev_Samp_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vw_Organization_Contents_Sum_Fields = {
  __typename?: "vw_organization_contents_sum_fields";
  average_rate?: Maybe<Scalars["numeric"]>;
  id?: Maybe<Scalars["bigint"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  read?: Maybe<Scalars["bigint"]>;
  views?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "vw_organization_contents" */
export type Vw_Organization_Contents_Sum_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vw_Organization_Contents_Var_Pop_Fields = {
  __typename?: "vw_organization_contents_var_pop_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "vw_organization_contents" */
export type Vw_Organization_Contents_Var_Pop_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vw_Organization_Contents_Var_Samp_Fields = {
  __typename?: "vw_organization_contents_var_samp_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "vw_organization_contents" */
export type Vw_Organization_Contents_Var_Samp_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vw_Organization_Contents_Variance_Fields = {
  __typename?: "vw_organization_contents_variance_fields";
  average_rate?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "vw_organization_contents" */
export type Vw_Organization_Contents_Variance_Order_By = {
  average_rate?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** columns and relationships of "vw_organizations" */
export type Vw_Organizations = {
  __typename?: "vw_organizations";
  avatar?: Maybe<Scalars["String"]>;
  bucket?: Maybe<Scalars["String"]>;
  contentcount?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** aggregated selection of "vw_organizations" */
export type Vw_Organizations_Aggregate = {
  __typename?: "vw_organizations_aggregate";
  aggregate?: Maybe<Vw_Organizations_Aggregate_Fields>;
  nodes: Array<Vw_Organizations>;
};

/** aggregate fields of "vw_organizations" */
export type Vw_Organizations_Aggregate_Fields = {
  __typename?: "vw_organizations_aggregate_fields";
  avg?: Maybe<Vw_Organizations_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Vw_Organizations_Max_Fields>;
  min?: Maybe<Vw_Organizations_Min_Fields>;
  stddev?: Maybe<Vw_Organizations_Stddev_Fields>;
  stddev_pop?: Maybe<Vw_Organizations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vw_Organizations_Stddev_Samp_Fields>;
  sum?: Maybe<Vw_Organizations_Sum_Fields>;
  var_pop?: Maybe<Vw_Organizations_Var_Pop_Fields>;
  var_samp?: Maybe<Vw_Organizations_Var_Samp_Fields>;
  variance?: Maybe<Vw_Organizations_Variance_Fields>;
};

/** aggregate fields of "vw_organizations" */
export type Vw_Organizations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vw_Organizations_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "vw_organizations" */
export type Vw_Organizations_Aggregate_Order_By = {
  avg?: Maybe<Vw_Organizations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vw_Organizations_Max_Order_By>;
  min?: Maybe<Vw_Organizations_Min_Order_By>;
  stddev?: Maybe<Vw_Organizations_Stddev_Order_By>;
  stddev_pop?: Maybe<Vw_Organizations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vw_Organizations_Stddev_Samp_Order_By>;
  sum?: Maybe<Vw_Organizations_Sum_Order_By>;
  var_pop?: Maybe<Vw_Organizations_Var_Pop_Order_By>;
  var_samp?: Maybe<Vw_Organizations_Var_Samp_Order_By>;
  variance?: Maybe<Vw_Organizations_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vw_Organizations_Avg_Fields = {
  __typename?: "vw_organizations_avg_fields";
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "vw_organizations" */
export type Vw_Organizations_Avg_Order_By = {
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vw_organizations". All fields are combined with a logical 'AND'. */
export type Vw_Organizations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vw_Organizations_Bool_Exp>>>;
  _not?: Maybe<Vw_Organizations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vw_Organizations_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  bucket?: Maybe<String_Comparison_Exp>;
  contentcount?: Maybe<Bigint_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count = {
  __typename?: "vw_organizations_content_count";
  contentscount?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Aggregate = {
  __typename?: "vw_organizations_content_count_aggregate";
  aggregate?: Maybe<Vw_Organizations_Content_Count_Aggregate_Fields>;
  nodes: Array<Vw_Organizations_Content_Count>;
};

/** aggregate fields of "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Aggregate_Fields = {
  __typename?: "vw_organizations_content_count_aggregate_fields";
  avg?: Maybe<Vw_Organizations_Content_Count_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Vw_Organizations_Content_Count_Max_Fields>;
  min?: Maybe<Vw_Organizations_Content_Count_Min_Fields>;
  stddev?: Maybe<Vw_Organizations_Content_Count_Stddev_Fields>;
  stddev_pop?: Maybe<Vw_Organizations_Content_Count_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vw_Organizations_Content_Count_Stddev_Samp_Fields>;
  sum?: Maybe<Vw_Organizations_Content_Count_Sum_Fields>;
  var_pop?: Maybe<Vw_Organizations_Content_Count_Var_Pop_Fields>;
  var_samp?: Maybe<Vw_Organizations_Content_Count_Var_Samp_Fields>;
  variance?: Maybe<Vw_Organizations_Content_Count_Variance_Fields>;
};

/** aggregate fields of "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vw_Organizations_Content_Count_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Aggregate_Order_By = {
  avg?: Maybe<Vw_Organizations_Content_Count_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vw_Organizations_Content_Count_Max_Order_By>;
  min?: Maybe<Vw_Organizations_Content_Count_Min_Order_By>;
  stddev?: Maybe<Vw_Organizations_Content_Count_Stddev_Order_By>;
  stddev_pop?: Maybe<Vw_Organizations_Content_Count_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vw_Organizations_Content_Count_Stddev_Samp_Order_By>;
  sum?: Maybe<Vw_Organizations_Content_Count_Sum_Order_By>;
  var_pop?: Maybe<Vw_Organizations_Content_Count_Var_Pop_Order_By>;
  var_samp?: Maybe<Vw_Organizations_Content_Count_Var_Samp_Order_By>;
  variance?: Maybe<Vw_Organizations_Content_Count_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Vw_Organizations_Content_Count_Avg_Fields = {
  __typename?: "vw_organizations_content_count_avg_fields";
  contentscount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Avg_Order_By = {
  contentscount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table
 * "vw_organizations_content_count". All fields are combined with a logical 'AND'.
 */
export type Vw_Organizations_Content_Count_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vw_Organizations_Content_Count_Bool_Exp>>>;
  _not?: Maybe<Vw_Organizations_Content_Count_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vw_Organizations_Content_Count_Bool_Exp>>>;
  contentscount?: Maybe<Bigint_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vw_Organizations_Content_Count_Max_Fields = {
  __typename?: "vw_organizations_content_count_max_fields";
  contentscount?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Max_Order_By = {
  contentscount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vw_Organizations_Content_Count_Min_Fields = {
  __typename?: "vw_organizations_content_count_min_fields";
  contentscount?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Min_Order_By = {
  contentscount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Order_By = {
  contentscount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** select columns of table "vw_organizations_content_count" */
export enum Vw_Organizations_Content_Count_Select_Column {
  /** column name */
  Contentscount = "contentscount",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name"
}

/** aggregate stddev on columns */
export type Vw_Organizations_Content_Count_Stddev_Fields = {
  __typename?: "vw_organizations_content_count_stddev_fields";
  contentscount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Stddev_Order_By = {
  contentscount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vw_Organizations_Content_Count_Stddev_Pop_Fields = {
  __typename?: "vw_organizations_content_count_stddev_pop_fields";
  contentscount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Stddev_Pop_Order_By = {
  contentscount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vw_Organizations_Content_Count_Stddev_Samp_Fields = {
  __typename?: "vw_organizations_content_count_stddev_samp_fields";
  contentscount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Stddev_Samp_Order_By = {
  contentscount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vw_Organizations_Content_Count_Sum_Fields = {
  __typename?: "vw_organizations_content_count_sum_fields";
  contentscount?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Sum_Order_By = {
  contentscount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vw_Organizations_Content_Count_Var_Pop_Fields = {
  __typename?: "vw_organizations_content_count_var_pop_fields";
  contentscount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Var_Pop_Order_By = {
  contentscount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vw_Organizations_Content_Count_Var_Samp_Fields = {
  __typename?: "vw_organizations_content_count_var_samp_fields";
  contentscount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Var_Samp_Order_By = {
  contentscount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vw_Organizations_Content_Count_Variance_Fields = {
  __typename?: "vw_organizations_content_count_variance_fields";
  contentscount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "vw_organizations_content_count" */
export type Vw_Organizations_Content_Count_Variance_Order_By = {
  contentscount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Vw_Organizations_Max_Fields = {
  __typename?: "vw_organizations_max_fields";
  avatar?: Maybe<Scalars["String"]>;
  bucket?: Maybe<Scalars["String"]>;
  contentcount?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by max() on columns of table "vw_organizations" */
export type Vw_Organizations_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vw_Organizations_Min_Fields = {
  __typename?: "vw_organizations_min_fields";
  avatar?: Maybe<Scalars["String"]>;
  bucket?: Maybe<Scalars["String"]>;
  contentcount?: Maybe<Scalars["bigint"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  description?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["bigint"]>;
  name?: Maybe<Scalars["String"]>;
  updated_at?: Maybe<Scalars["timestamptz"]>;
};

/** order by min() on columns of table "vw_organizations" */
export type Vw_Organizations_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vw_organizations" */
export type Vw_Organizations_Order_By = {
  avatar?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  contentcount?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** columns and relationships of "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents = {
  __typename?: "vw_organizations_paid_contents";
  bucket?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  is_published?: Maybe<Scalars["Boolean"]>;
  isbn?: Maybe<Scalars["String"]>;
  meta?: Maybe<Scalars["jsonb"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  read?: Maybe<Scalars["bigint"]>;
  type?: Maybe<Scalars["content_types"]>;
  views?: Maybe<Scalars["Int"]>;
};

/** columns and relationships of "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_ContentsMetaArgs = {
  path?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Aggregate = {
  __typename?: "vw_organizations_paid_contents_aggregate";
  aggregate?: Maybe<Vw_Organizations_Paid_Contents_Aggregate_Fields>;
  nodes: Array<Vw_Organizations_Paid_Contents>;
};

/** aggregate fields of "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Aggregate_Fields = {
  __typename?: "vw_organizations_paid_contents_aggregate_fields";
  avg?: Maybe<Vw_Organizations_Paid_Contents_Avg_Fields>;
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Vw_Organizations_Paid_Contents_Max_Fields>;
  min?: Maybe<Vw_Organizations_Paid_Contents_Min_Fields>;
  stddev?: Maybe<Vw_Organizations_Paid_Contents_Stddev_Fields>;
  stddev_pop?: Maybe<Vw_Organizations_Paid_Contents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vw_Organizations_Paid_Contents_Stddev_Samp_Fields>;
  sum?: Maybe<Vw_Organizations_Paid_Contents_Sum_Fields>;
  var_pop?: Maybe<Vw_Organizations_Paid_Contents_Var_Pop_Fields>;
  var_samp?: Maybe<Vw_Organizations_Paid_Contents_Var_Samp_Fields>;
  variance?: Maybe<Vw_Organizations_Paid_Contents_Variance_Fields>;
};

/** aggregate fields of "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vw_Organizations_Paid_Contents_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Aggregate_Order_By = {
  avg?: Maybe<Vw_Organizations_Paid_Contents_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Vw_Organizations_Paid_Contents_Max_Order_By>;
  min?: Maybe<Vw_Organizations_Paid_Contents_Min_Order_By>;
  stddev?: Maybe<Vw_Organizations_Paid_Contents_Stddev_Order_By>;
  stddev_pop?: Maybe<Vw_Organizations_Paid_Contents_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Vw_Organizations_Paid_Contents_Stddev_Samp_Order_By>;
  sum?: Maybe<Vw_Organizations_Paid_Contents_Sum_Order_By>;
  var_pop?: Maybe<Vw_Organizations_Paid_Contents_Var_Pop_Order_By>;
  var_samp?: Maybe<Vw_Organizations_Paid_Contents_Var_Samp_Order_By>;
  variance?: Maybe<Vw_Organizations_Paid_Contents_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Vw_Organizations_Paid_Contents_Append_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** aggregate avg on columns */
export type Vw_Organizations_Paid_Contents_Avg_Fields = {
  __typename?: "vw_organizations_paid_contents_avg_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Avg_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table
 * "vw_organizations_paid_contents". All fields are combined with a logical 'AND'.
 */
export type Vw_Organizations_Paid_Contents_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vw_Organizations_Paid_Contents_Bool_Exp>>>;
  _not?: Maybe<Vw_Organizations_Paid_Contents_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vw_Organizations_Paid_Contents_Bool_Exp>>>;
  bucket?: Maybe<String_Comparison_Exp>;
  cover?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  is_published?: Maybe<Boolean_Comparison_Exp>;
  isbn?: Maybe<String_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  organization_id?: Maybe<Bigint_Comparison_Exp>;
  payment_type?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Numeric_Comparison_Exp>;
  read?: Maybe<Bigint_Comparison_Exp>;
  type?: Maybe<Content_Types_Comparison_Exp>;
  views?: Maybe<Int_Comparison_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Vw_Organizations_Paid_Contents_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Vw_Organizations_Paid_Contents_Delete_Elem_Input = {
  meta?: Maybe<Scalars["Int"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Vw_Organizations_Paid_Contents_Delete_Key_Input = {
  meta?: Maybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Vw_Organizations_Paid_Contents_Max_Fields = {
  __typename?: "vw_organizations_paid_contents_max_fields";
  bucket?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  isbn?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  read?: Maybe<Scalars["bigint"]>;
  views?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Max_Order_By = {
  bucket?: Maybe<Order_By>;
  cover?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vw_Organizations_Paid_Contents_Min_Fields = {
  __typename?: "vw_organizations_paid_contents_min_fields";
  bucket?: Maybe<Scalars["String"]>;
  cover?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  deleted_at?: Maybe<Scalars["timestamptz"]>;
  id?: Maybe<Scalars["bigint"]>;
  isbn?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  payment_type?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["numeric"]>;
  read?: Maybe<Scalars["bigint"]>;
  views?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Min_Order_By = {
  bucket?: Maybe<Order_By>;
  cover?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Order_By = {
  bucket?: Maybe<Order_By>;
  cover?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_published?: Maybe<Order_By>;
  isbn?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  payment_type?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Vw_Organizations_Paid_Contents_Prepend_Input = {
  meta?: Maybe<Scalars["jsonb"]>;
};

/** select columns of table "vw_organizations_paid_contents" */
export enum Vw_Organizations_Paid_Contents_Select_Column {
  /** column name */
  Bucket = "bucket",
  /** column name */
  Cover = "cover",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeletedAt = "deleted_at",
  /** column name */
  Id = "id",
  /** column name */
  IsPublished = "is_published",
  /** column name */
  Isbn = "isbn",
  /** column name */
  Meta = "meta",
  /** column name */
  Name = "name",
  /** column name */
  OrganizationId = "organization_id",
  /** column name */
  PaymentType = "payment_type",
  /** column name */
  Price = "price",
  /** column name */
  Read = "read",
  /** column name */
  Type = "type",
  /** column name */
  Views = "views"
}

/** aggregate stddev on columns */
export type Vw_Organizations_Paid_Contents_Stddev_Fields = {
  __typename?: "vw_organizations_paid_contents_stddev_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vw_Organizations_Paid_Contents_Stddev_Pop_Fields = {
  __typename?: "vw_organizations_paid_contents_stddev_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vw_Organizations_Paid_Contents_Stddev_Samp_Fields = {
  __typename?: "vw_organizations_paid_contents_stddev_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vw_Organizations_Paid_Contents_Sum_Fields = {
  __typename?: "vw_organizations_paid_contents_sum_fields";
  id?: Maybe<Scalars["bigint"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
  price?: Maybe<Scalars["numeric"]>;
  read?: Maybe<Scalars["bigint"]>;
  views?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Sum_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vw_Organizations_Paid_Contents_Var_Pop_Fields = {
  __typename?: "vw_organizations_paid_contents_var_pop_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vw_Organizations_Paid_Contents_Var_Samp_Fields = {
  __typename?: "vw_organizations_paid_contents_var_samp_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vw_Organizations_Paid_Contents_Variance_Fields = {
  __typename?: "vw_organizations_paid_contents_variance_fields";
  id?: Maybe<Scalars["Float"]>;
  organization_id?: Maybe<Scalars["Float"]>;
  price?: Maybe<Scalars["Float"]>;
  read?: Maybe<Scalars["Float"]>;
  views?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "vw_organizations_paid_contents" */
export type Vw_Organizations_Paid_Contents_Variance_Order_By = {
  id?: Maybe<Order_By>;
  organization_id?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  read?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** select columns of table "vw_organizations" */
export enum Vw_Organizations_Select_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  Bucket = "bucket",
  /** column name */
  Contentcount = "contentcount",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at"
}

/** aggregate stddev on columns */
export type Vw_Organizations_Stddev_Fields = {
  __typename?: "vw_organizations_stddev_fields";
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "vw_organizations" */
export type Vw_Organizations_Stddev_Order_By = {
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vw_Organizations_Stddev_Pop_Fields = {
  __typename?: "vw_organizations_stddev_pop_fields";
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "vw_organizations" */
export type Vw_Organizations_Stddev_Pop_Order_By = {
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vw_Organizations_Stddev_Samp_Fields = {
  __typename?: "vw_organizations_stddev_samp_fields";
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "vw_organizations" */
export type Vw_Organizations_Stddev_Samp_Order_By = {
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Vw_Organizations_Sum_Fields = {
  __typename?: "vw_organizations_sum_fields";
  contentcount?: Maybe<Scalars["bigint"]>;
  id?: Maybe<Scalars["bigint"]>;
};

/** order by sum() on columns of table "vw_organizations" */
export type Vw_Organizations_Sum_Order_By = {
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Vw_Organizations_Var_Pop_Fields = {
  __typename?: "vw_organizations_var_pop_fields";
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "vw_organizations" */
export type Vw_Organizations_Var_Pop_Order_By = {
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vw_Organizations_Var_Samp_Fields = {
  __typename?: "vw_organizations_var_samp_fields";
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "vw_organizations" */
export type Vw_Organizations_Var_Samp_Order_By = {
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Vw_Organizations_Variance_Fields = {
  __typename?: "vw_organizations_variance_fields";
  contentcount?: Maybe<Scalars["Float"]>;
  id?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "vw_organizations" */
export type Vw_Organizations_Variance_Order_By = {
  contentcount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "vw_users" */
export type Vw_Users = {
  __typename?: "vw_users";
  avatar?: Maybe<Scalars["String"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  displayname?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  lastname?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "vw_users" */
export type Vw_Users_Aggregate = {
  __typename?: "vw_users_aggregate";
  aggregate?: Maybe<Vw_Users_Aggregate_Fields>;
  nodes: Array<Vw_Users>;
};

/** aggregate fields of "vw_users" */
export type Vw_Users_Aggregate_Fields = {
  __typename?: "vw_users_aggregate_fields";
  count?: Maybe<Scalars["Int"]>;
  max?: Maybe<Vw_Users_Max_Fields>;
  min?: Maybe<Vw_Users_Min_Fields>;
};

/** aggregate fields of "vw_users" */
export type Vw_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Vw_Users_Select_Column>>;
  distinct?: Maybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "vw_users" */
export type Vw_Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Vw_Users_Max_Order_By>;
  min?: Maybe<Vw_Users_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "vw_users". All fields are combined with a logical 'AND'. */
export type Vw_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Vw_Users_Bool_Exp>>>;
  _not?: Maybe<Vw_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Vw_Users_Bool_Exp>>>;
  avatar?: Maybe<String_Comparison_Exp>;
  bucket?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  displayname?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  firstname?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  lastname?: Maybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Vw_Users_Max_Fields = {
  __typename?: "vw_users_max_fields";
  avatar?: Maybe<Scalars["String"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  displayname?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  lastname?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "vw_users" */
export type Vw_Users_Max_Order_By = {
  avatar?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  displayname?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Vw_Users_Min_Fields = {
  __typename?: "vw_users_min_fields";
  avatar?: Maybe<Scalars["String"]>;
  bucket?: Maybe<Scalars["String"]>;
  created_at?: Maybe<Scalars["timestamptz"]>;
  displayname?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  firstname?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  lastname?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "vw_users" */
export type Vw_Users_Min_Order_By = {
  avatar?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  displayname?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
};

/** ordering options when selecting data from "vw_users" */
export type Vw_Users_Order_By = {
  avatar?: Maybe<Order_By>;
  bucket?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  displayname?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firstname?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastname?: Maybe<Order_By>;
};

/** select columns of table "vw_users" */
export enum Vw_Users_Select_Column {
  /** column name */
  Avatar = "avatar",
  /** column name */
  Bucket = "bucket",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Displayname = "displayname",
  /** column name */
  Email = "email",
  /** column name */
  Firstname = "firstname",
  /** column name */
  Id = "id",
  /** column name */
  Lastname = "lastname"
}
export type Is_BookmarkedQueryVariables = {
  contentId: Scalars["bigint"];
  userId: Scalars["String"];
};

export type Is_BookmarkedQuery = { __typename?: "query_root" } & {
  isBookmarked: Maybe<
    { __typename?: "bookmarks" } & Pick<Bookmarks, "content_id" | "user_id">
  >;
};

export type Create_BookmarkMutationVariables = {
  data: Array<Bookmarks_Insert_Input>;
};

export type Create_BookmarkMutation = { __typename?: "mutation_root" } & {
  insert_bookmarks: Maybe<
    { __typename?: "bookmarks_mutation_response" } & Pick<
      Bookmarks_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type Delete_BookmarkMutationVariables = {
  where: Bookmarks_Bool_Exp;
};

export type Delete_BookmarkMutation = { __typename?: "mutation_root" } & {
  delete_bookmarks: Maybe<
    { __typename?: "bookmarks_mutation_response" } & Pick<
      Bookmarks_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type Get_Bookmarked_ContentsSubscriptionVariables = {};

export type Get_Bookmarked_ContentsSubscription = {
  __typename?: "subscription_root";
} & {
  bookmarks: Array<
    { __typename?: "bookmarks" } & {
      content: { __typename?: "contents" } & Pick<Contents, "id" | "name"> & {
          files: Array<
            { __typename?: "content_files" } & {
              file_id: Content_Files["file_id"];
            } & { file: { __typename?: "files" } & Pick<Files, "bucket"> }
          >;
          reviews_aggregate: { __typename?: "reviews_aggregate" } & {
            aggregate: Maybe<
              { __typename?: "reviews_aggregate_fields" } & {
                avg: Maybe<
                  { __typename?: "reviews_avg_fields" } & Pick<
                    Reviews_Avg_Fields,
                    "rate"
                  >
                >;
              }
            >;
          };
          prices: Array<
            { __typename?: "content_prices" } & Pick<
              Content_Prices,
              "price" | "payment_type"
            >
          >;
        };
    }
  >;
};

export type Create_Organization_RequestMutationVariables = {
  data: Organizations_Insert_Input;
};

export type Create_Organization_RequestMutation = {
  __typename?: "mutation_root";
} & {
  insert_organizations: Maybe<
    { __typename?: "organizations_mutation_response" } & {
      returning: Array<
        { __typename?: "organizations" } & Pick<Organizations, "id" | "name">
      >;
    }
  >;
};

export type Search_TextMutationVariables = {
  text: Scalars["String"];
  user_id: Scalars["String"];
  type: RequestType;
  category?: Maybe<Scalars["String"]>;
};

export type Search_TextMutation = { __typename?: "mutation_root" } & {
  createPlagiarismRequest: { __typename?: "PlagiarismRequest" } & Pick<
    PlagiarismRequest,
    "id" | "token"
  >;
};

export type Search_ResultSubscriptionVariables = {
  id: Scalars["bigint"];
};

export type Search_ResultSubscription = { __typename?: "subscription_root" } & {
  plagiarism_request: Maybe<
    { __typename?: "plagiarism_search_requests" } & Pick<
      Plagiarism_Search_Requests,
      "status" | "token" | "percent"
    > & {
        results: Array<
          { __typename?: "plagiarism_search_results" } & Pick<
            Plagiarism_Search_Results,
            | "prev_sentence"
            | "next_sentence"
            | "page"
            | "content_id"
            | "percent"
            | "status"
            | "sentence"
          > & {
              content: Maybe<
                { __typename?: "contents" } & Pick<
                  Contents,
                  "id" | "name" | "meta"
                > & {
                    authors_connection: Array<
                      { __typename?: "map_contents_authors" } & {
                        author: { __typename?: "authors" } & Pick<
                          Authors,
                          "firstname" | "lastname"
                        >;
                      }
                    >;
                  }
              >;
            }
        >;
      }
  >;
};

export type Check_StatusQueryVariables = {
  id: Scalars["Int"];
  token: Scalars["String"];
};

export type Check_StatusQuery = { __typename?: "query_root" } & Pick<
  Query_Root,
  "checkResult"
>;

export type Get_Plagiarism_HistoryQueryVariables = {
  userID: Scalars["String"];
};

export type Get_Plagiarism_HistoryQuery = { __typename?: "query_root" } & {
  plagiarism_search_requests: Array<
    { __typename?: "plagiarism_search_requests" } & Pick<
      Plagiarism_Search_Requests,
      "id" | "search_text" | "status" | "created_at" | "type"
    >
  >;
};

export type AuthorInfoFragment = { __typename?: "authors" } & Pick<
  Authors,
  "id" | "firstname" | "lastname"
>;

export type Get_List_AuthorsQueryVariables = {
  where?: Maybe<Authors_Bool_Exp>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Authors_Order_By>>;
  includeAvatar?: Scalars["Boolean"];
  includeAvgRate?: Scalars["Boolean"];
  includeContentsCount?: Scalars["Boolean"];
};

export type Get_List_AuthorsQuery = { __typename?: "query_root" } & {
  authors: Array<
    { __typename?: "authors" } & { avatar: Authors["avatar_id"] } & {
      reviews_aggregate: { __typename?: "author_reviews_aggregate" } & {
        aggregate: Maybe<
          { __typename?: "author_reviews_aggregate_fields" } & {
            avg: Maybe<
              { __typename?: "author_reviews_avg_fields" } & Pick<
                Author_Reviews_Avg_Fields,
                "rate"
              >
            >;
          }
        >;
      };
      contents_connection_aggregate: {
        __typename?: "map_contents_authors_aggregate";
      } & {
        aggregate: Maybe<
          { __typename?: "map_contents_authors_aggregate_fields" } & Pick<
            Map_Contents_Authors_Aggregate_Fields,
            "count"
          >
        >;
      };
    } & AuthorInfoFragment
  >;
};

export type Get_List_Vw_AuthorsQueryVariables = {
  where?: Maybe<Vw_Authors_Bool_Exp>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Vw_Authors_Order_By>>;
};

export type Get_List_Vw_AuthorsQuery = { __typename?: "query_root" } & {
  authors: Array<
    { __typename?: "vw_authors" } & Pick<
      Vw_Authors,
      | "id"
      | "firstname"
      | "lastname"
      | "displayname"
      | "avatar"
      | "averagerate"
      | "contentcount"
    >
  >;
};

export type Random_AuthorsQueryVariables = {};

export type Random_AuthorsQuery = { __typename?: "query_root" } & {
  authors: Array<
    { __typename?: "authors" } & { avatar: Authors["avatar_id"] } & {
      reviews_aggregate: { __typename?: "author_reviews_aggregate" } & {
        aggregate: Maybe<
          { __typename?: "author_reviews_aggregate_fields" } & {
            avg: Maybe<
              { __typename?: "author_reviews_avg_fields" } & Pick<
                Author_Reviews_Avg_Fields,
                "rate"
              >
            >;
          }
        >;
      };
      contents_connection_aggregate: {
        __typename?: "map_contents_authors_aggregate";
      } & {
        aggregate: Maybe<
          { __typename?: "map_contents_authors_aggregate_fields" } & Pick<
            Map_Contents_Authors_Aggregate_Fields,
            "count"
          >
        >;
      };
    } & AuthorInfoFragment
  >;
};

export type Get_Single_AuthorQueryVariables = {
  id: Scalars["bigint"];
};

export type Get_Single_AuthorQuery = { __typename?: "query_root" } & {
  author: Maybe<
    { __typename?: "authors" } & Pick<Authors, "description"> & {
        avatar_id: Authors["avatar_id"];
      } & {
        avatar_bucket: Maybe<{ __typename?: "files" } & Pick<Files, "bucket">>;
      } & AuthorInfoFragment
  >;
};

export type Get_Single_Author_DetailQueryVariables = {
  id: Scalars["bigint"];
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type Get_Single_Author_DetailQuery = { __typename?: "query_root" } & {
  author: Maybe<
    { __typename?: "authors" } & Pick<Authors, "description" | "created_by"> & {
        avatar_id: Authors["avatar_id"];
      } & {
        avatar: Maybe<{ __typename?: "files" } & Pick<Files, "bucket">>;
        contents_connection_aggregate: {
          __typename?: "map_contents_authors_aggregate";
        } & {
          aggregate: Maybe<
            { __typename?: "map_contents_authors_aggregate_fields" } & Pick<
              Map_Contents_Authors_Aggregate_Fields,
              "count"
            >
          >;
        };
        contents_connection: Array<
          { __typename?: "map_contents_authors" } & {
            content: { __typename?: "contents" } & ContentCardFragment;
          }
        >;
        reviews_aggregate: { __typename?: "author_reviews_aggregate" } & {
          aggregate: Maybe<
            { __typename?: "author_reviews_aggregate_fields" } & Pick<
              Author_Reviews_Aggregate_Fields,
              "count"
            > & {
                avg: Maybe<
                  { __typename?: "author_reviews_avg_fields" } & Pick<
                    Author_Reviews_Avg_Fields,
                    "rate"
                  >
                >;
              }
          >;
        };
      } & AuthorInfoFragment
  >;
};

export type Create_AuthorMutationVariables = {
  data: Authors_Insert_Input;
};

export type Create_AuthorMutation = { __typename?: "mutation_root" } & {
  insert_authors: Maybe<
    { __typename?: "authors_mutation_response" } & {
      returning: Array<
        { __typename?: "authors" } & Pick<
          Authors,
          "id" | "firstname" | "lastname"
        >
      >;
    }
  >;
};

export type Update_AuthorMutationVariables = {
  where: Authors_Bool_Exp;
  set?: Maybe<Authors_Set_Input>;
};

export type Update_AuthorMutation = { __typename?: "mutation_root" } & {
  update_authors: Maybe<
    { __typename?: "authors_mutation_response" } & {
      returning: Array<
        { __typename?: "authors" } & Pick<
          Authors,
          "birthdate" | "description"
        > &
          AuthorInfoFragment
      >;
    }
  >;
};

export type Create_Author_ReviewMutationVariables = {
  author: Array<Author_Reviews_Insert_Input>;
};

export type Create_Author_ReviewMutation = { __typename?: "mutation_root" } & {
  insert_author_reviews: Maybe<
    { __typename?: "author_reviews_mutation_response" } & {
      returning: Array<
        { __typename?: "author_reviews" } & Pick<
          Author_Reviews,
          "id" | "comment" | "rate" | "created_at"
        > & {
            user: Maybe<
              { __typename?: "vw_users" } & Pick<
                Vw_Users,
                "id" | "displayname" | "email"
              >
            >;
          }
      >;
    }
  >;
};

export type Get_Author_ReviewsQueryVariables = {
  where?: Maybe<Author_Reviews_Bool_Exp>;
};

export type Get_Author_ReviewsQuery = { __typename?: "query_root" } & {
  author_reviews: Array<
    { __typename?: "author_reviews" } & Pick<
      Author_Reviews,
      "id" | "comment" | "rate" | "created_at"
    > & {
        user: Maybe<
          { __typename?: "vw_users" } & Pick<
            Vw_Users,
            "id" | "displayname" | "email"
          >
        >;
      }
  >;
};

export type Get_Authors_AggregateQueryVariables = {};

export type Get_Authors_AggregateQuery = { __typename?: "query_root" } & {
  authors_aggregate: { __typename?: "authors_aggregate" } & {
    aggregate: Maybe<
      { __typename?: "authors_aggregate_fields" } & Pick<
        Authors_Aggregate_Fields,
        "count"
      >
    >;
  };
};

export type Get_Authors_ContentsQueryVariables = {
  where?: Maybe<Map_Contents_Authors_Bool_Exp>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type Get_Authors_ContentsQuery = { __typename?: "query_root" } & {
  map_contents_authors: Array<
    { __typename?: "map_contents_authors" } & {
      content: { __typename?: "contents" } & Pick<Contents, "id" | "name"> & {
          reviews: Array<{ __typename?: "reviews" } & Pick<Reviews, "rate">>;
          prices: Array<
            { __typename?: "content_prices" } & Pick<
              Content_Prices,
              "price" | "payment_type"
            >
          >;
          files: Array<
            { __typename?: "content_files" } & {
              file_id: Content_Files["file_id"];
            } & { file: { __typename?: "files" } & Pick<Files, "bucket"> }
          >;
        };
    }
  >;
};

export type ContentCardFragment = { __typename?: "contents" } & Pick<
  Contents,
  "id" | "name" | "created_at" | "is_published" | "meta"
> & {
    files: Array<
      { __typename?: "content_files" } & {
        file_id: Content_Files["file_id"];
      } & { file: { __typename?: "files" } & Pick<Files, "bucket"> }
    >;
    prices: Array<
      { __typename?: "content_prices" } & Pick<
        Content_Prices,
        "price" | "payment_type"
      >
    >;
  };

export type Get_Single_ContentQueryVariables = {
  id: Scalars["bigint"];
};

export type Get_Single_ContentQuery = { __typename?: "query_root" } & {
  content: Maybe<
    { __typename?: "contents" } & Pick<
      Contents,
      | "id"
      | "name"
      | "type"
      | "description"
      | "meta"
      | "isbn"
      | "views"
      | "is_published"
      | "created_at"
    > & {
        organizations: Array<
          { __typename?: "map_contents_organizations" } & Pick<
            Map_Contents_Organizations,
            "organization_id"
          >
        >;
        authors_connection: Array<
          { __typename?: "map_contents_authors" } & {
            author: { __typename?: "authors" } & Pick<
              Authors,
              "id" | "firstname" | "lastname"
            >;
          }
        >;
        tags_connection: Array<
          { __typename?: "map_contents_tags" } & {
            tag: { __typename?: "tag_options" } & Pick<
              Tag_Options,
              "id" | "type_id"
            >;
          }
        >;
      }
  >;
};

export type Get_List_ContentsQueryVariables = {
  where?: Maybe<Contents_Bool_Exp>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Contents_Order_By>>;
};

export type Get_List_ContentsQuery = { __typename?: "query_root" } & {
  contents: Array<{ __typename?: "contents" } & ContentCardFragment>;
};

export type Get_Suggest_ContentsQueryVariables = {};

export type Get_Suggest_ContentsQuery = { __typename?: "query_root" } & {
  contents: Array<{ __typename?: "contents" } & ContentCardFragment>;
};

export type Get_Aggregate_ContentsQueryVariables = {
  where?: Maybe<Contents_Bool_Exp>;
};

export type Get_Aggregate_ContentsQuery = { __typename?: "query_root" } & {
  contents_aggregate: { __typename?: "contents_aggregate" } & {
    aggregate: Maybe<
      { __typename?: "contents_aggregate_fields" } & Pick<
        Contents_Aggregate_Fields,
        "count"
      >
    >;
  };
};

export type Get_Users_Contents_StatusQueryVariables = {
  content_id: Scalars["bigint"];
  user_id: Scalars["String"];
};

export type Get_Users_Contents_StatusQuery = { __typename?: "query_root" } & {
  content: Maybe<
    { __typename?: "contents" } & Pick<Contents, "name"> & {
        files: Array<
          { __typename?: "content_files" } & { file: Content_Files["file_id"] }
        >;
        status_connection: Array<
          { __typename?: "map_users_contents_status" } & Pick<
            Map_Users_Contents_Status,
            "max_page" | "current_page"
          >
        >;
      }
  >;
};

export type Get_Users_ContentsQueryVariables = {};

export type Get_Users_ContentsQuery = { __typename?: "query_root" } & {
  map_users_contents_status: Array<
    { __typename?: "map_users_contents_status" } & Pick<
      Map_Users_Contents_Status,
      "content_id" | "current_page" | "max_page"
    > & {
        content: { __typename?: "contents" } & {
          pageLength: Contents["meta"];
        } & ContentCardFragment;
      }
  >;
};

export type Get_Single_Content_DetailQueryVariables = {
  id: Scalars["bigint"];
};

export type Get_Single_Content_DetailQuery = { __typename?: "query_root" } & {
  content: Array<
    { __typename?: "vw_contents" } & Pick<
      Vw_Contents,
      | "id"
      | "name"
      | "description"
      | "meta"
      | "bucket"
      | "average_rate"
      | "price"
      | "payment_type"
      | "read"
      | "type"
    > & { cover: Vw_Contents["key"] }
  >;
  content_detail: Maybe<
    { __typename?: "contents" } & Pick<Contents, "id" | "views"> & {
        authors_connection: Array<
          { __typename?: "map_contents_authors" } & {
            author: { __typename?: "authors" } & Pick<
              Authors,
              "id" | "firstname" | "lastname"
            >;
          }
        >;
        files: Array<
          { __typename?: "content_files" } & { file: Content_Files["file_id"] }
        >;
        languages: Array<
          { __typename?: "map_contents_tags" } & {
            tag: { __typename?: "tag_options" } & Pick<Tag_Options, "value">;
          }
        >;
        category: Array<
          { __typename?: "map_contents_tags" } & {
            tag: { __typename?: "tag_options" } & Pick<Tag_Options, "value"> & {
                parent: Maybe<
                  { __typename?: "tag_options" } & Pick<Tag_Options, "value">
                >;
              };
          }
        >;
        organizations: Array<
          { __typename?: "map_contents_organizations" } & {
            organization: { __typename?: "organizations" } & Pick<
              Organizations,
              "id" | "name" | "type"
            >;
          }
        >;
      }
  >;
};

export type Get_Content_ReviewsQueryVariables = {
  id: Scalars["bigint"];
};

export type Get_Content_ReviewsQuery = { __typename?: "query_root" } & {
  reviews: Array<
    { __typename?: "reviews" } & Pick<
      Reviews,
      "id" | "comment" | "rate" | "created_at"
    > & {
        user: Maybe<
          { __typename?: "vw_users" } & Pick<
            Vw_Users,
            "id" | "displayname" | "email" | "avatar" | "bucket"
          >
        >;
      }
  >;
};

export type Create_ContentMutationVariables = {
  data: Contents_Insert_Input;
};

export type Create_ContentMutation = { __typename?: "mutation_root" } & {
  insert_contents: Maybe<
    { __typename?: "contents_mutation_response" } & {
      returning: Array<
        { __typename?: "contents" } & Pick<Contents, "id" | "name">
      >;
    }
  >;
};

export type Create_Content_ReviewMutationVariables = {
  data: Array<Reviews_Insert_Input>;
};

export type Create_Content_ReviewMutation = { __typename?: "mutation_root" } & {
  insert_reviews: Maybe<
    { __typename?: "reviews_mutation_response" } & {
      returning: Array<
        { __typename?: "reviews" } & Pick<
          Reviews,
          "id" | "comment" | "rate" | "created_at"
        > & {
            user: Maybe<
              { __typename?: "vw_users" } & Pick<
                Vw_Users,
                "id" | "displayname" | "email" | "avatar" | "bucket"
              >
            >;
          }
      >;
    }
  >;
};

export type Update_ContentsMutationVariables = {
  where: Contents_Bool_Exp;
  set: Contents_Set_Input;
};

export type Update_ContentsMutation = { __typename?: "mutation_root" } & {
  update_contents: Maybe<
    { __typename?: "contents_mutation_response" } & {
      returning: Array<
        { __typename?: "contents" } & Pick<Contents, "id" | "name">
      >;
    }
  >;
};

export type Update_Users_Contents_StatusMutationVariables = {
  data: Array<Map_Users_Contents_Status_Insert_Input>;
  update_columns: Array<Map_Users_Contents_Status_Update_Column>;
};

export type Update_Users_Contents_StatusMutation = {
  __typename?: "mutation_root";
} & {
  insert_map_users_contents_status: Maybe<
    { __typename?: "map_users_contents_status_mutation_response" } & Pick<
      Map_Users_Contents_Status_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type Get_Organizations_Paid_ContentsQueryVariables = {
  where?: Maybe<Vw_Organizations_Paid_Contents_Bool_Exp>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organizations_Paid_Contents_Order_By>>;
};

export type Get_Organizations_Paid_ContentsQuery = {
  __typename?: "query_root";
} & {
  vw_organizations_paid_contents: Array<
    { __typename?: "vw_organizations_paid_contents" } & Pick<
      Vw_Organizations_Paid_Contents,
      | "id"
      | "name"
      | "meta"
      | "cover"
      | "bucket"
      | "views"
      | "is_published"
      | "organization_id"
      | "payment_type"
      | "price"
      | "type"
      | "created_at"
      | "read"
    >
  >;
};

export type Get_Aggregate_Org_ContentsQueryVariables = {
  where?: Maybe<Vw_Organizations_Paid_Contents_Bool_Exp>;
};

export type Get_Aggregate_Org_ContentsQuery = { __typename?: "query_root" } & {
  vw_organizations_paid_contents_aggregate: {
    __typename?: "vw_organizations_paid_contents_aggregate";
  } & {
    aggregate: Maybe<
      { __typename?: "vw_organizations_paid_contents_aggregate_fields" } & Pick<
        Vw_Organizations_Paid_Contents_Aggregate_Fields,
        "count"
      >
    >;
  };
};

export type Update_Content_ViewMutationVariables = {
  contentId: Scalars["bigint"];
};

export type Update_Content_ViewMutation = { __typename?: "mutation_root" } & {
  update_contents: Maybe<
    { __typename?: "contents_mutation_response" } & {
      returning: Array<{ __typename?: "contents" } & Pick<Contents, "views">>;
    }
  >;
};

export type Edit_Update_ContentMutationVariables = {
  where: Contents_Bool_Exp;
  set: Contents_Set_Input;
  meta_update?: Maybe<Scalars["jsonb"]>;
};

export type Edit_Update_ContentMutation = { __typename?: "mutation_root" } & {
  update_contents: Maybe<
    { __typename?: "contents_mutation_response" } & {
      returning: Array<{ __typename?: "contents" } & Pick<Contents, "id">>;
    }
  >;
};

export type Upsert_Contents_AuthorsMutationVariables = {
  objects: Array<Map_Contents_Authors_Insert_Input>;
};

export type Upsert_Contents_AuthorsMutation = {
  __typename?: "mutation_root";
} & {
  insert_map_contents_authors: Maybe<
    { __typename?: "map_contents_authors_mutation_response" } & Pick<
      Map_Contents_Authors_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type Upsert_Contents_TagsMutationVariables = {
  objects: Array<Map_Contents_Tags_Insert_Input>;
};

export type Upsert_Contents_TagsMutation = { __typename?: "mutation_root" } & {
  insert_map_contents_tags: Maybe<
    { __typename?: "map_contents_tags_mutation_response" } & Pick<
      Map_Contents_Tags_Mutation_Response,
      "affected_rows"
    >
  >;
};

export type Update_Contents_OrganizationsMutationVariables = {
  where: Map_Contents_Organizations_Bool_Exp;
  newOrganizationId: Scalars["bigint"];
};

export type Update_Contents_OrganizationsMutation = {
  __typename?: "mutation_root";
} & {
  update_map_contents_organizations: Maybe<
    { __typename?: "map_contents_organizations_mutation_response" } & {
      returning: Array<
        { __typename?: "map_contents_organizations" } & Pick<
          Map_Contents_Organizations,
          "organization_id"
        >
      >;
    }
  >;
};

export type Create_FilesMutationVariables = {
  data: Array<Files_Insert_Input>;
};

export type Create_FilesMutation = { __typename?: "mutation_root" } & {
  insert_files: Maybe<
    { __typename?: "files_mutation_response" } & {
      returning: Array<{ __typename?: "files" } & Pick<Files, "key">>;
    }
  >;
};

export type Get_Featured_ContentsQueryVariables = {
  where?: Maybe<Contents_Bool_Exp>;
};

export type Get_Featured_ContentsQuery = { __typename?: "query_root" } & {
  contents: Array<{ __typename?: "contents" } & ContentCardFragment>;
};

export type Get_Paid_Content_ListQueryVariables = {
  where?: Maybe<Payment_Transactions_Bool_Exp>;
};

export type Get_Paid_Content_ListQuery = { __typename?: "query_root" } & {
  transactions: Array<
    { __typename?: "payment_transactions" } & {
      header: { __typename?: "payment_headers" } & {
        details: Array<
          { __typename?: "payment_details" } & {
            content: Maybe<{ __typename?: "contents" } & ContentCardFragment>;
          }
        >;
      };
    }
  >;
};

export type Get_MembershipQueryVariables = {
  user_id?: Maybe<Scalars["String"]>;
};

export type Get_MembershipQuery = { __typename?: "query_root" } & {
  currentMembership: Array<
    { __typename?: "map_users_memberships" } & Pick<
      Map_Users_Memberships,
      "id" | "user_id" | "end_date" | "description"
    > & {
        membership: { __typename?: "memberships" } & Pick<
          Memberships,
          "id" | "name" | "price" | "day"
        >;
      }
  >;
  memberships: Array<
    { __typename?: "memberships" } & Pick<
      Memberships,
      "id" | "name" | "price" | "day"
    >
  >;
  lastMembership: { __typename?: "map_users_memberships_aggregate" } & {
    aggregate: Maybe<
      { __typename?: "map_users_memberships_aggregate_fields" } & {
        max: Maybe<
          { __typename?: "map_users_memberships_max_fields" } & Pick<
            Map_Users_Memberships_Max_Fields,
            "end_date"
          >
        >;
      }
    >;
  };
};

export type Get_Current_MembershipQueryVariables = {
  user_id?: Maybe<Scalars["String"]>;
};

export type Get_Current_MembershipQuery = { __typename?: "query_root" } & {
  currentMembership: Array<
    { __typename?: "map_users_memberships" } & Pick<
      Map_Users_Memberships,
      "id" | "user_id" | "end_date" | "description"
    > & {
        membership: { __typename?: "memberships" } & Pick<
          Memberships,
          "id" | "name" | "price" | "day"
        >;
      }
  >;
};

export type Get_List_OrganizationsQueryVariables = {
  where?: Maybe<Organizations_Bool_Exp>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Organizations_Order_By>>;
};

export type Get_List_OrganizationsQuery = { __typename?: "query_root" } & {
  organizations: Array<
    { __typename?: "organizations" } & Pick<
      Organizations,
      "id" | "name" | "is_active" | "description"
    > & { avatar: Organizations["avatar_id"] } & {
        contents_connection_aggregate: {
          __typename?: "map_contents_organizations_aggregate";
        } & {
          aggregate: Maybe<
            {
              __typename?: "map_contents_organizations_aggregate_fields";
            } & Pick<Map_Contents_Organizations_Aggregate_Fields, "count">
          >;
        };
        avatar_bucket: Maybe<{ __typename?: "files" } & Pick<Files, "bucket">>;
      }
  >;
};

export type Get_Single_OrganizationQueryVariables = {
  id: Scalars["bigint"];
  user_id?: Maybe<Scalars["String"]>;
};

export type Get_Single_OrganizationQuery = { __typename?: "query_root" } & {
  organization: Maybe<
    { __typename?: "organizations" } & {
      users_connection_aggregate: {
        __typename?: "map_users_organizations_aggregate";
      } & {
        aggregate: Maybe<
          { __typename?: "map_users_organizations_aggregate_fields" } & Pick<
            Map_Users_Organizations_Aggregate_Fields,
            "count"
          >
        >;
      };
      contents_connection: Array<
        { __typename?: "map_contents_organizations" } & {
          content: { __typename?: "contents" } & ContentCardFragment;
        }
      >;
    }
  >;
};

export type Get_Single_Organization_InfoQueryVariables = {
  id: Scalars["bigint"];
};

export type Get_Single_Organization_InfoQuery = {
  __typename?: "query_root";
} & {
  organization: Maybe<
    { __typename?: "organizations" } & Pick<
      Organizations,
      "id" | "name" | "description" | "long_description" | "type"
    > & { avatar: Organizations["avatar_id"] } & {
        contents_connection_aggregate: {
          __typename?: "map_contents_organizations_aggregate";
        } & {
          aggregate: Maybe<
            {
              __typename?: "map_contents_organizations_aggregate_fields";
            } & Pick<Map_Contents_Organizations_Aggregate_Fields, "count">
          >;
        };
        avatar_bucket: Maybe<{ __typename?: "files" } & Pick<Files, "bucket">>;
      }
  >;
};

export type Get_Organization_UsersQueryVariables = {
  id: Scalars["bigint"];
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  where?: Maybe<Map_Users_Organizations_Bool_Exp>;
  orderBy?: Maybe<Array<Map_Users_Organizations_Order_By>>;
};

export type Get_Organization_UsersQuery = { __typename?: "query_root" } & {
  organization: Maybe<
    { __typename?: "organizations" } & {
      users_connection_aggregate: {
        __typename?: "map_users_organizations_aggregate";
      } & {
        aggregate: Maybe<
          { __typename?: "map_users_organizations_aggregate_fields" } & Pick<
            Map_Users_Organizations_Aggregate_Fields,
            "count"
          >
        >;
      };
      users_connection: Array<
        { __typename?: "map_users_organizations" } & Pick<
          Map_Users_Organizations,
          "role"
        > & {
            user: Maybe<
              { __typename?: "vw_users" } & Pick<
                Vw_Users,
                | "id"
                | "email"
                | "displayname"
                | "firstname"
                | "lastname"
                | "created_at"
              >
            >;
          }
      >;
    }
  >;
};

export type Update_OrganizationMutationVariables = {
  where: Organizations_Bool_Exp;
  set?: Maybe<Organizations_Set_Input>;
};

export type Update_OrganizationMutation = { __typename?: "mutation_root" } & {
  update_organizations: Maybe<
    { __typename?: "organizations_mutation_response" } & {
      returning: Array<
        { __typename?: "organizations" } & Pick<
          Organizations,
          "id" | "name" | "description" | "long_description" | "avatar_id"
        >
      >;
    }
  >;
};

export type Get_Vw_Organizations_CountQueryVariables = {
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type Get_Vw_Organizations_CountQuery = { __typename?: "query_root" } & {
  organization_content_count: Array<
    { __typename?: "vw_organizations_content_count" } & Pick<
      Vw_Organizations_Content_Count,
      "contentscount" | "id" | "name"
    >
  >;
};

export type Get_Vw_OrganizationQueryVariables = {
  where?: Maybe<Vw_Organizations_Bool_Exp>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organizations_Order_By>>;
};

export type Get_Vw_OrganizationQuery = { __typename?: "query_root" } & {
  organizations: Array<
    { __typename?: "vw_organizations" } & Pick<
      Vw_Organizations,
      "id" | "name" | "description" | "avatar" | "bucket" | "contentcount"
    >
  >;
};

export type Get_Organizations_AggregateQueryVariables = {};

export type Get_Organizations_AggregateQuery = { __typename?: "query_root" } & {
  organizations_aggregate: { __typename?: "organizations_aggregate" } & {
    aggregate: Maybe<
      { __typename?: "organizations_aggregate_fields" } & Pick<
        Organizations_Aggregate_Fields,
        "count"
      >
    >;
  };
};

export type Get_Organization_AccountQueryVariables = {
  where?: Maybe<Payment_Vw_Paid_Contents_Bool_Exp>;
};

export type Get_Organization_AccountQuery = { __typename?: "query_root" } & {
  payment_vw_paid_contents_aggregate: {
    __typename?: "payment_vw_paid_contents_aggregate";
  } & {
    aggregate: Maybe<
      { __typename?: "payment_vw_paid_contents_aggregate_fields" } & {
        sum: Maybe<
          { __typename?: "payment_vw_paid_contents_sum_fields" } & Pick<
            Payment_Vw_Paid_Contents_Sum_Fields,
            "total"
          >
        >;
      }
    >;
  };
};

export type Organization_RoleQueryVariables = {
  user_id: Scalars["String"];
  organization_id: Scalars["bigint"];
};

export type Organization_RoleQuery = { __typename?: "query_root" } & {
  organization_role: Maybe<
    { __typename?: "map_users_organizations" } & Pick<
      Map_Users_Organizations,
      "role"
    >
  >;
};

export type Get_Organization_ContentsQueryVariables = {
  where?: Maybe<Vw_Organization_Contents_Bool_Exp>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Vw_Organization_Contents_Order_By>>;
};

export type Get_Organization_ContentsQuery = { __typename?: "query_root" } & {
  vw_organization_contents: Array<
    { __typename?: "vw_organization_contents" } & Pick<
      Vw_Organization_Contents,
      | "id"
      | "name"
      | "meta"
      | "cover"
      | "bucket"
      | "views"
      | "is_published"
      | "organization_id"
      | "payment_type"
      | "price"
      | "type"
      | "created_at"
      | "read"
    >
  >;
};

export type Delete_Map_User_OtganizationsMutationVariables = {
  user_id?: Maybe<Scalars["String"]>;
  organization_id?: Maybe<Scalars["bigint"]>;
};

export type Delete_Map_User_OtganizationsMutation = {
  __typename?: "mutation_root";
} & {
  delete_map_users_organizations: Maybe<
    { __typename?: "map_users_organizations_mutation_response" } & {
      returning: Array<
        { __typename?: "map_users_organizations" } & Pick<
          Map_Users_Organizations,
          "user_id"
        >
      >;
    }
  >;
};

export type Get_PackagesQueryVariables = {
  where?: Maybe<Packages_Bool_Exp>;
  offset?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Packages_Order_By>>;
};

export type Get_PackagesQuery = { __typename?: "query_root" } & {
  packages: Array<
    { __typename?: "packages" } & Pick<
      Packages,
      | "is_active"
      | "id"
      | "description"
      | "name"
      | "organization_id"
      | "expired_at"
      | "price"
      | "created_at"
      | "start_date"
    > & { key: Packages["id"] } & {
        file_connection: Array<
          { __typename?: "map_packages_files" } & {
            file_id: Map_Packages_Files["file_id"];
          } & { file: { __typename?: "files" } & Pick<Files, "bucket"> }
        >;
        contents: Array<
          { __typename?: "map_contents_packages" } & {
            content: { __typename?: "contents" } & Pick<
              Contents,
              "id" | "name"
            >;
          }
        >;
      }
  >;
};

export type Get_Single_PackageQueryVariables = {
  id: Scalars["bigint"];
};

export type Get_Single_PackageQuery = { __typename?: "query_root" } & {
  packages_by_pk: Maybe<
    { __typename?: "packages" } & {
      file_connection: Array<
        { __typename?: "map_packages_files" } & {
          file: { __typename?: "files" } & Pick<
            Files,
            "acl" | "bucket" | "filename" | "key" | "region"
          >;
        }
      >;
    }
  >;
};

export type Get_Packages_AggregateQueryVariables = {
  where?: Maybe<Packages_Bool_Exp>;
};

export type Get_Packages_AggregateQuery = { __typename?: "query_root" } & {
  packages_aggregate: { __typename?: "packages_aggregate" } & {
    aggregate: Maybe<
      { __typename?: "packages_aggregate_fields" } & Pick<
        Packages_Aggregate_Fields,
        "count"
      >
    >;
  };
};

export type Create_PackageMutationVariables = {
  data: Packages_Insert_Input;
};

export type Create_PackageMutation = { __typename?: "mutation_root" } & {
  insert_packages: Maybe<
    { __typename?: "packages_mutation_response" } & {
      returning: Array<
        { __typename?: "packages" } & Pick<
          Packages,
          "id" | "name" | "meta" | "description" | "price"
        >
      >;
    }
  >;
};

export type Delete_PackageMutationVariables = {
  where: Packages_Bool_Exp;
};

export type Delete_PackageMutation = { __typename?: "mutation_root" } & {
  delete_packages: Maybe<
    { __typename?: "packages_mutation_response" } & {
      returning: Array<{ __typename?: "packages" } & Pick<Packages, "name">>;
    }
  >;
};

export type Update_PackageMutationVariables = {
  where: Packages_Bool_Exp;
  set: Packages_Set_Input;
};

export type Update_PackageMutation = { __typename?: "mutation_root" } & {
  update_packages: Maybe<
    { __typename?: "packages_mutation_response" } & {
      returning: Array<{ __typename?: "packages" } & Pick<Packages, "name">>;
    }
  >;
};

export type Update_Map_Contents_PackageMutationVariables = {
  where: Map_Contents_Packages_Bool_Exp;
  set?: Maybe<Map_Contents_Packages_Set_Input>;
};

export type Update_Map_Contents_PackageMutation = {
  __typename?: "mutation_root";
} & {
  update_map_contents_packages: Maybe<
    { __typename?: "map_contents_packages_mutation_response" } & {
      returning: Array<
        { __typename?: "map_contents_packages" } & Pick<
          Map_Contents_Packages,
          "id"
        >
      >;
    }
  >;
};

export type Insert_Map_Contents_PackageMutationVariables = {
  data: Map_Contents_Packages_Insert_Input;
};

export type Insert_Map_Contents_PackageMutation = {
  __typename?: "mutation_root";
} & {
  insert_map_contents_packages: Maybe<
    { __typename?: "map_contents_packages_mutation_response" } & {
      returning: Array<
        { __typename?: "map_contents_packages" } & Pick<
          Map_Contents_Packages,
          "id" | "package_id"
        >
      >;
    }
  >;
};

export type Delete_Map_Contents_PackageMutationVariables = {
  where: Map_Contents_Packages_Bool_Exp;
};

export type Delete_Map_Contents_PackageMutation = {
  __typename?: "mutation_root";
} & {
  delete_map_contents_packages: Maybe<
    { __typename?: "map_contents_packages_mutation_response" } & {
      returning: Array<
        { __typename?: "map_contents_packages" } & Pick<
          Map_Contents_Packages,
          "id"
        >
      >;
    }
  >;
};

export type Insert_Map_Packages_FilesMutationVariables = {
  data: Map_Packages_Files_Insert_Input;
};

export type Insert_Map_Packages_FilesMutation = {
  __typename?: "mutation_root";
} & {
  insert_map_packages_files: Maybe<
    { __typename?: "map_packages_files_mutation_response" } & {
      returning: Array<
        { __typename?: "map_packages_files" } & Pick<
          Map_Packages_Files,
          "package_id" | "file_id"
        >
      >;
    }
  >;
};

export type Delete_Map_Packages_FilesMutationVariables = {
  where: Map_Packages_Files_Bool_Exp;
};

export type Delete_Map_Packages_FilesMutation = {
  __typename?: "mutation_root";
} & {
  delete_map_packages_files: Maybe<
    { __typename?: "map_packages_files_mutation_response" } & {
      returning: Array<
        { __typename?: "map_packages_files" } & Pick<
          Map_Packages_Files,
          "package_id" | "file_id"
        >
      >;
    }
  >;
};

export type Get_Withdrawal_RequestQueryVariables = {
  organization_id: Scalars["bigint"];
};

export type Get_Withdrawal_RequestQuery = { __typename?: "query_root" } & {
  payment_withdraw_requests: Array<
    { __typename?: "payment_withdraw_requests" } & Pick<
      Payment_Withdraw_Requests,
      | "id"
      | "is_transfered"
      | "transfered_user_id"
      | "amount"
      | "created_at"
      | "updated_at"
    > & { key: Payment_Withdraw_Requests["id"] }
  >;
};

export type Create_PaymentMutationVariables = {
  data: Array<Payment_Headers_Insert_Input>;
};

export type Create_PaymentMutation = { __typename?: "mutation_root" } & {
  insert_payment_headers: Maybe<
    { __typename?: "payment_headers_mutation_response" } & {
      returning: Array<
        { __typename?: "payment_headers" } & Pick<
          Payment_Headers,
          "id" | "qty" | "total" | "amount" | "discount" | "user_id"
        >
      >;
    }
  >;
};

export type Create_TransactionMutationVariables = {
  data: Array<Payment_Transactions_Insert_Input>;
};

export type Create_TransactionMutation = { __typename?: "mutation_root" } & {
  insert_payment_transactions: Maybe<
    { __typename?: "payment_transactions_mutation_response" } & {
      returning: Array<
        { __typename?: "payment_transactions" } & Pick<
          Payment_Transactions,
          "id" | "header_id"
        >
      >;
    }
  >;
};

export type Delete_Payment_DetailMutationVariables = {
  id?: Maybe<Scalars["bigint"]>;
};

export type Delete_Payment_DetailMutation = { __typename?: "mutation_root" } & {
  update_payment_details: Maybe<
    { __typename?: "payment_details_mutation_response" } & {
      returning: Array<
        { __typename?: "payment_details" } & Pick<Payment_Details, "id">
      >;
    }
  >;
};

export type Update_PaymentMutationVariables = {
  headerid?: Maybe<Scalars["bigint"]>;
  data?: Maybe<Payment_Headers_Set_Input>;
  detailData: Array<Payment_Details_Insert_Input>;
  updateColumn: Array<Payment_Details_Update_Column>;
};

export type Update_PaymentMutation = { __typename?: "mutation_root" } & {
  update_payment_headers: Maybe<
    { __typename?: "payment_headers_mutation_response" } & {
      returning: Array<
        { __typename?: "payment_headers" } & Pick<Payment_Headers, "id">
      >;
    }
  >;
  insert_payment_details: Maybe<
    { __typename?: "payment_details_mutation_response" } & {
      returning: Array<
        { __typename?: "payment_details" } & Pick<Payment_Details, "id">
      >;
    }
  >;
};

export type Get_Basket_ItemsQueryVariables = {
  contentIds?: Maybe<Array<Scalars["bigint"]>>;
  membershipIds?: Maybe<Array<Scalars["bigint"]>>;
  packageIds?: Maybe<Array<Scalars["bigint"]>>;
};

export type Get_Basket_ItemsQuery = { __typename?: "query_root" } & {
  contents: Array<
    { __typename?: "contents" } & Pick<
      Contents,
      "id" | "name" | "is_published"
    > & { oldcover: Contents["meta"] } & {
        files: Array<
          { __typename?: "content_files" } & {
            file_id: Content_Files["file_id"];
          } & { file: { __typename?: "files" } & Pick<Files, "bucket"> }
        >;
        prices: Array<
          { __typename?: "content_prices" } & Pick<
            Content_Prices,
            "price" | "payment_type"
          >
        >;
      }
  >;
  memberships: Array<
    { __typename?: "memberships" } & Pick<Memberships, "id" | "name">
  >;
  packages: Array<{ __typename?: "packages" } & Pick<Packages, "id" | "name">>;
};

export type Get_Transaction_By_Header_IdSubscriptionVariables = {
  id: Scalars["bigint"];
};

export type Get_Transaction_By_Header_IdSubscription = {
  __typename?: "subscription_root";
} & {
  payment_transactions: Array<
    { __typename?: "payment_transactions" } & Pick<
      Payment_Transactions,
      "id" | "status"
    > & { noatus: Payment_Transactions["meta"] }
  >;
};

export type Get_Transaction_By_PkidSubscriptionVariables = {
  id: Scalars["bigint"];
};

export type Get_Transaction_By_PkidSubscription = {
  __typename?: "subscription_root";
} & {
  payment_transactions_by_pk: Maybe<
    { __typename?: "payment_transactions" } & Pick<
      Payment_Transactions,
      "id" | "meta" | "payment_type"
    > & {
        header: { __typename?: "payment_headers" } & {
          details: Array<
            { __typename?: "payment_details" } & Pick<
              Payment_Details,
              "id" | "qty" | "price" | "total"
            > & {
                content: Maybe<
                  { __typename?: "contents" } & Pick<
                    Contents,
                    "id" | "name" | "is_published"
                  > & { oldcover: Contents["meta"] } & {
                      files: Array<
                        { __typename?: "content_files" } & {
                          file_id: Content_Files["file_id"];
                        } & {
                          file: { __typename?: "files" } & Pick<
                            Files,
                            "bucket"
                          >;
                        }
                      >;
                      prices: Array<
                        { __typename?: "content_prices" } & Pick<
                          Content_Prices,
                          "price" | "payment_type"
                        >
                      >;
                    }
                >;
                membership: Maybe<
                  { __typename?: "memberships" } & Pick<
                    Memberships,
                    "id" | "name"
                  >
                >;
                package: Maybe<
                  { __typename?: "packages" } & Pick<Packages, "id" | "name">
                >;
              }
          >;
        };
      }
  >;
};

export type Create_InvoiceMutationVariables = {
  invoiceid: Scalars["String"];
  description: Scalars["String"];
  totalAmount: Scalars["String"];
};

export type Create_InvoiceMutation = { __typename?: "mutation_root" } & {
  createInvoice: { __typename?: "Invoice" } & {
    qpay: Maybe<
      { __typename?: "QPayInvoice" } & {
        jsonData: Maybe<
          { __typename?: "QPayData" } & Pick<QPayData, "url" | "qrImage"> & {
              deeplinks: Maybe<
                Array<
                  Maybe<
                    { __typename?: "DeepLink" } & Pick<
                      DeepLink,
                      "name" | "link"
                    >
                  >
                >
              >;
            }
        >;
      }
    >;
    lend: Maybe<
      { __typename?: "LendInvoice" } & Pick<
        LendInvoice,
        "code" | "amount" | "invoiceNumber" | "qrLink" | "qrString"
      >
    >;
    golomt: Maybe<
      { __typename?: "GolomtInvoice" } & Pick<
        GolomtInvoice,
        "amount" | "invoiceNumber" | "key" | "url"
      >
    >;
  };
};

export type Check_Organization_RegistrationMutationVariables = {
  registerNo: Scalars["String"];
};

export type Check_Organization_RegistrationMutation = {
  __typename?: "mutation_root";
} & {
  checkOrganizationRegistration: { __typename?: "OrganizationInfo" } & Pick<
    OrganizationInfo,
    "name" | "vatpayer" | "receiptFound" | "vatpayerRegisteredDate"
  >;
};

export type Get_Transaction_ListSubscriptionVariables = {
  createdDate: Scalars["timestamptz"];
};

export type Get_Transaction_ListSubscription = {
  __typename?: "subscription_root";
} & {
  payment_transactions: Array<
    { __typename?: "payment_transactions" } & Pick<
      Payment_Transactions,
      "id" | "payment_type" | "status" | "amount" | "meta" | "created_at"
    >
  >;
};

export type Get_Content_TransactionQueryVariables = {
  content_id?: Maybe<Scalars["bigint"]>;
};

export type Get_Content_TransactionQuery = { __typename?: "query_root" } & {
  payment_transactions: Array<
    { __typename?: "payment_transactions" } & Pick<
      Payment_Transactions,
      "id" | "payment_type" | "status" | "amount" | "meta" | "created_at"
    >
  >;
};

export type Get_Paid_ContentsQueryVariables = {
  where?: Maybe<Payment_Vw_Paid_Contents_Bool_Exp>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  orderBy?: Maybe<Array<Payment_Vw_Paid_Contents_Order_By>>;
};

export type Get_Paid_ContentsQuery = { __typename?: "query_root" } & {
  payment_vw_paid_contents: Array<
    { __typename?: "payment_vw_paid_contents" } & Pick<
      Payment_Vw_Paid_Contents,
      | "name"
      | "isbn"
      | "discount"
      | "price"
      | "total"
      | "type"
      | "qty"
      | "created_at"
    > & {
        rowkey: Payment_Vw_Paid_Contents["uniqkey"];
        content_id: Payment_Vw_Paid_Contents["id"];
        cover: Payment_Vw_Paid_Contents["key"];
      }
  >;
};

export type Get_Paid_Contents_AggregateQueryVariables = {
  where?: Maybe<Payment_Vw_Paid_Contents_Bool_Exp>;
};

export type Get_Paid_Contents_AggregateQuery = { __typename?: "query_root" } & {
  payment_vw_paid_contents_aggregate: {
    __typename?: "payment_vw_paid_contents_aggregate";
  } & {
    aggregate: Maybe<
      { __typename?: "payment_vw_paid_contents_aggregate_fields" } & Pick<
        Payment_Vw_Paid_Contents_Aggregate_Fields,
        "count"
      > & {
          sum: Maybe<
            { __typename?: "payment_vw_paid_contents_sum_fields" } & Pick<
              Payment_Vw_Paid_Contents_Sum_Fields,
              "total"
            >
          >;
        }
    >;
  };
};

export type Get_Organization_BalanceQueryVariables = {
  where?: Maybe<Payment_Vw_Organizations_Balance_Bool_Exp>;
};

export type Get_Organization_BalanceQuery = { __typename?: "query_root" } & {
  payment_vw_organizations_balance: Array<
    { __typename?: "payment_vw_organizations_balance" } & Pick<
      Payment_Vw_Organizations_Balance,
      | "end_balance"
      | "total_withdraw_amount"
      | "after_vat"
      | "total_balance"
      | "total_amount"
      | "total_withdrawed_amount"
      | "esan_amount"
    >
  >;
};

export type Insert_Withdrawal_RequestMutationVariables = {
  organization_id: Scalars["bigint"];
  user_id?: Maybe<Scalars["String"]>;
  amount?: Maybe<Scalars["float8"]>;
};

export type Insert_Withdrawal_RequestMutation = {
  __typename?: "mutation_root";
} & {
  insert_payment_withdraw_requests: Maybe<
    { __typename?: "payment_withdraw_requests_mutation_response" } & {
      returning: Array<
        { __typename?: "payment_withdraw_requests" } & Pick<
          Payment_Withdraw_Requests,
          "id"
        >
      >;
    }
  >;
};

export type Get_Transaction_UserSubscriptionVariables = {
  where?: Maybe<Payment_Transactions_Bool_Exp>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Payment_Transactions_Order_By>>;
};

export type Get_Transaction_UserSubscription = {
  __typename?: "subscription_root";
} & {
  payment_transactions: Array<
    { __typename?: "payment_transactions" } & Pick<
      Payment_Transactions,
      "id" | "meta" | "created_at" | "payment_type" | "amount"
    > & { key: Payment_Transactions["id"] } & {
        header: { __typename?: "payment_headers" } & {
          details: Array<
            { __typename?: "payment_details" } & Pick<
              Payment_Details,
              "id" | "qty" | "price" | "total"
            > & {
                content: Maybe<
                  { __typename?: "contents" } & Pick<
                    Contents,
                    "id" | "name" | "is_published"
                  > & { oldcover: Contents["meta"] } & {
                      files: Array<
                        { __typename?: "content_files" } & {
                          file_id: Content_Files["file_id"];
                        } & {
                          file: { __typename?: "files" } & Pick<
                            Files,
                            "bucket"
                          >;
                        }
                      >;
                      prices: Array<
                        { __typename?: "content_prices" } & Pick<
                          Content_Prices,
                          "price" | "payment_type"
                        >
                      >;
                    }
                >;
                membership: Maybe<
                  { __typename?: "memberships" } & Pick<
                    Memberships,
                    "id" | "name"
                  >
                >;
                package: Maybe<
                  { __typename?: "packages" } & Pick<Packages, "id" | "name">
                >;
              }
          >;
        };
      }
  >;
};

export type Content_SearchQueryVariables = {
  where: SearchWhere;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  order_by?: Maybe<Array<Maybe<OrderBy>>>;
};

export type Content_SearchQuery = { __typename?: "query_root" } & {
  search: Array<
    { __typename?: "Content" } & Pick<
      Content,
      | "id"
      | "name"
      | "average_rate"
      | "cover"
      | "type"
      | "published_at"
      | "price"
      | "payment_type"
      | "created_at"
    >
  >;
};

export type Get_List_Tag_TypesQueryVariables = {
  where?: Maybe<Tag_Types_Bool_Exp>;
  includeTags?: Scalars["Boolean"];
};

export type Get_List_Tag_TypesQuery = { __typename?: "query_root" } & {
  types: Array<
    { __typename?: "tag_types" } & Pick<Tag_Types, "id" | "name" | "key"> & {
        tags: Array<
          { __typename?: "tag_options" } & Pick<Tag_Options, "parent_id"> & {
              key: Tag_Options["id"];
              value: Tag_Options["id"];
              title: Tag_Options["value"];
            }
        >;
      }
  >;
};

export type Get_List_Tag_OptionsQueryVariables = {
  where?: Maybe<Tag_Options_Bool_Exp>;
  limit?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
};

export type Get_List_Tag_OptionsQuery = { __typename?: "query_root" } & {
  options: Array<
    { __typename?: "tag_options" } & Pick<Tag_Options, "parent_id"> & {
        key: Tag_Options["id"];
        value: Tag_Options["id"];
        title: Tag_Options["value"];
      }
  >;
};

export type Get_UserQueryVariables = {
  id: Scalars["String"];
};

export type Get_UserQuery = { __typename?: "query_root" } & {
  user: Maybe<
    { __typename?: "users" } & Pick<
      Users,
      | "id"
      | "lastname"
      | "firstname"
      | "email"
      | "phone"
      | "gender"
      | "birthdate"
    > & {
        roles_connection: Array<
          { __typename?: "map_users_roles" } & {
            role: { __typename?: "roles" } & Pick<Roles, "name">;
          }
        >;
        files_connection: Array<
          { __typename?: "map_users_files" } & {
            file_avatar: Map_Users_Files["file_id"];
          } & { file: Maybe<{ __typename?: "files" } & Pick<Files, "bucket">> }
        >;
        organizations: Array<
          { __typename?: "map_users_organizations" } & Pick<
            Map_Users_Organizations,
            "organization_id"
          >
        >;
      }
  >;
};

export type Update_UserMutationVariables = {
  where: Users_Bool_Exp;
  set?: Maybe<Users_Set_Input>;
};

export type Update_UserMutation = { __typename?: "mutation_root" } & {
  update_users: Maybe<
    { __typename?: "users_mutation_response" } & {
      returning: Array<
        { __typename?: "users" } & Pick<Users, "id" | "firstname">
      >;
    }
  >;
};

export type Create_User_FilesMutationVariables = {
  data: Array<Map_Users_Files_Insert_Input>;
};

export type Create_User_FilesMutation = { __typename?: "mutation_root" } & {
  insert_map_users_files: Maybe<
    { __typename?: "map_users_files_mutation_response" } & {
      returning: Array<
        { __typename?: "map_users_files" } & Pick<
          Map_Users_Files,
          "id" | "file_id"
        >
      >;
    }
  >;
};

export type Update_User_FilesMutationVariables = {
  where: Map_Users_Files_Bool_Exp;
  set?: Maybe<Map_Users_Files_Set_Input>;
};

export type Update_User_FilesMutation = { __typename?: "mutation_root" } & {
  update_map_users_files: Maybe<
    { __typename?: "map_users_files_mutation_response" } & {
      returning: Array<
        { __typename?: "map_users_files" } & Pick<
          Map_Users_Files,
          "id" | "file_id"
        >
      >;
    }
  >;
};

export type Send_EmailMutationVariables = {
  data: Emails_Insert_Input;
};

export type Send_EmailMutation = { __typename?: "mutation_root" } & {
  insert_emails: Maybe<
    { __typename?: "emails_mutation_response" } & {
      returning: Array<{ __typename?: "emails" } & Pick<Emails, "id">>;
    }
  >;
};

export type EmailsQueryVariables = {
  where: Emails_Bool_Exp;
};

export type EmailsQuery = { __typename?: "query_root" } & {
  emails: Array<{ __typename?: "emails" } & Pick<Emails, "id">>;
};

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: []
  }
};

export default result;
