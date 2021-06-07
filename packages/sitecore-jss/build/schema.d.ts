export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Date` scalar type represents a year, month and day in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  Date: any;
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: any;
  /** The `DateTimeOffset` scalar type represents a date, time and offset from UTC. `DateTimeOffset` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTimeOffset: any;
  Decimal: any;
  JSON: any;
  Long: any;
  /** The `Milliseconds` scalar type represents a period of time represented as the total number of milliseconds. */
  Milliseconds: any;
  /** The `Seconds` scalar type represents a period of time represented as the total number of seconds. */
  Seconds: any;
};

/** /sitecore/templates/Foundation/JavaScript Services/App template (ID: {061CBA15-5474-4B91-8A06-17903B102B82}). */
export type App = Item & {
  __typename?: 'App';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Foundation/JavaScript Services/App template (ID: {061CBA15-5474-4B91-8A06-17903B102B82}). */
export type AppAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Foundation/JavaScript Services/App template (ID: {061CBA15-5474-4B91-8A06-17903B102B82}). */
export type AppChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Foundation/JavaScript Services/App template (ID: {061CBA15-5474-4B91-8A06-17903B102B82}). */
export type AppFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Foundation/JavaScript Services/App template (ID: {061CBA15-5474-4B91-8A06-17903B102B82}). */
export type AppFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Foundation/JavaScript Services/App template (ID: {061CBA15-5474-4B91-8A06-17903B102B82}). */
export type AppHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Foundation/JavaScript Services/App template (ID: {061CBA15-5474-4B91-8A06-17903B102B82}). */
export type AppIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). Also implements Route. */
export type AppRoute = {
  /** Page Title (ID: {F8171ECB-37C5-54EE-BFED-F689C878B6E2}). */
  pageTitle?: Maybe<TextField>;
};

/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. AppRoute) for reliable querying. */
export type C__AppRoute = AppRoute & Item & {
  __typename?: 'C__AppRoute';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  /** Page Title (ID: {F8171ECB-37C5-54EE-BFED-F689C878B6E2}). */
  pageTitle?: Maybe<TextField>;
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. AppRoute) for reliable querying. */
export type C__AppRouteAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. AppRoute) for reliable querying. */
export type C__AppRouteChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. AppRoute) for reliable querying. */
export type C__AppRouteFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. AppRoute) for reliable querying. */
export type C__AppRouteFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. AppRoute) for reliable querying. */
export type C__AppRouteHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/App Route template (ID: {787584C0-A057-5876-9836-F8B3708F0CAF}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. AppRoute) for reliable querying. */
export type C__AppRouteIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Foundation/JavaScript Services/Route template (ID: {B36BA9FD-0DC0-49C8-BEA2-E55D70E6AF28}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. Route) for reliable querying. */
export type C__Route = Item & {
  __typename?: 'C__Route';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Foundation/JavaScript Services/Route template (ID: {B36BA9FD-0DC0-49C8-BEA2-E55D70E6AF28}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. Route) for reliable querying. */
export type C__RouteAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Foundation/JavaScript Services/Route template (ID: {B36BA9FD-0DC0-49C8-BEA2-E55D70E6AF28}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. Route) for reliable querying. */
export type C__RouteChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Foundation/JavaScript Services/Route template (ID: {B36BA9FD-0DC0-49C8-BEA2-E55D70E6AF28}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. Route) for reliable querying. */
export type C__RouteFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Foundation/JavaScript Services/Route template (ID: {B36BA9FD-0DC0-49C8-BEA2-E55D70E6AF28}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. Route) for reliable querying. */
export type C__RouteFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Foundation/JavaScript Services/Route template (ID: {B36BA9FD-0DC0-49C8-BEA2-E55D70E6AF28}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. Route) for reliable querying. */
export type C__RouteHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Foundation/JavaScript Services/Route template (ID: {B36BA9FD-0DC0-49C8-BEA2-E55D70E6AF28}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. Route) for reliable querying. */
export type C__RouteIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/System/Templates/Standard template template (ID: {1930BBEB-7805-471A-A3BE-4858AC7CF696}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StandardTemplate) for reliable querying. */
export type C__StandardTemplate = Item & {
  __typename?: 'C__StandardTemplate';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/System/Templates/Standard template template (ID: {1930BBEB-7805-471A-A3BE-4858AC7CF696}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StandardTemplate) for reliable querying. */
export type C__StandardTemplateAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/System/Templates/Standard template template (ID: {1930BBEB-7805-471A-A3BE-4858AC7CF696}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StandardTemplate) for reliable querying. */
export type C__StandardTemplateChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/System/Templates/Standard template template (ID: {1930BBEB-7805-471A-A3BE-4858AC7CF696}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StandardTemplate) for reliable querying. */
export type C__StandardTemplateFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/System/Templates/Standard template template (ID: {1930BBEB-7805-471A-A3BE-4858AC7CF696}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StandardTemplate) for reliable querying. */
export type C__StandardTemplateFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/System/Templates/Standard template template (ID: {1930BBEB-7805-471A-A3BE-4858AC7CF696}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StandardTemplate) for reliable querying. */
export type C__StandardTemplateHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/System/Templates/Standard template template (ID: {1930BBEB-7805-471A-A3BE-4858AC7CF696}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StandardTemplate) for reliable querying. */
export type C__StandardTemplateIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StyleguideExplanatoryComponent) for reliable querying. */
export type C__StyleguideExplanatoryComponent = StyleguideExplanatoryComponent & Item & {
  __typename?: 'C__StyleguideExplanatoryComponent';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StyleguideExplanatoryComponent) for reliable querying. */
export type C__StyleguideExplanatoryComponentAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StyleguideExplanatoryComponent) for reliable querying. */
export type C__StyleguideExplanatoryComponentChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StyleguideExplanatoryComponent) for reliable querying. */
export type C__StyleguideExplanatoryComponentFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StyleguideExplanatoryComponent) for reliable querying. */
export type C__StyleguideExplanatoryComponentFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StyleguideExplanatoryComponent) for reliable querying. */
export type C__StyleguideExplanatoryComponentHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). NOTE: This is a concrete type. Favor using interfaces instead of this type (e.g. StyleguideExplanatoryComponent) for reliable querying. */
export type C__StyleguideExplanatoryComponentIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/System/Layout/Sections/Caching template (ID: {E8D2DD19-1347-4562-AE3F-310DC0B21A6C}). */
export type Caching = {
  /** Cacheable (ID: {3D08DB46-2267-41B0-BC52-BE69FD618633}). */
  cacheable?: Maybe<CheckboxField>;
  /** CacheClearingBehavior (ID: {A6D4FC1D-0803-4E0A-9145-B8C6121D6F26}). */
  cacheClearingBehavior?: Maybe<TextField>;
  /** ClearOnIndexUpdate (ID: {F3E7E552-D7C8-469B-A150-69E4E14AB35C}). */
  clearOnIndexUpdate?: Maybe<CheckboxField>;
  /** VaryByData (ID: {8B6D532B-6128-4486-A044-CA06D90948BA}). */
  varyByData?: Maybe<CheckboxField>;
  /** VaryByDevice (ID: {C98CF969-BA71-42DA-833D-B3FC1368BA27}). */
  varyByDevice?: Maybe<CheckboxField>;
  /** VaryByLogin (ID: {8D9232B0-613F-440B-A2FA-DCDD80FBD33E}). */
  varyByLogin?: Maybe<CheckboxField>;
  /** VaryByParm (ID: {3AD2506A-DC39-4B1E-959F-9D524ADDBF50}). */
  varyByParm?: Maybe<CheckboxField>;
  /** VaryByQueryString (ID: {1084D3D2-0457-456A-ABBC-EB4CC0966072}). */
  varyByQueryString?: Maybe<CheckboxField>;
  /** VaryByUser (ID: {0E54A8DC-72AD-4372-A7C7-BB4773FAD44D}). */
  varyByUser?: Maybe<CheckboxField>;
};

export type CheckboxField = ItemField & {
  __typename?: 'CheckboxField';
  boolValue?: Maybe<Scalars['Boolean']>;
  definition?: Maybe<ItemTemplateField>;
  /** The GUID of this field. */
  id: Scalars['ID'];
  jsonValue: Scalars['JSON'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};


export type CheckboxFieldIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/ContentBlock template (ID: {FF17DDD8-7D5E-5062-A608-B34AA34432EA}). */
export type ContentBlock = Item & {
  __typename?: 'ContentBlock';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** content (ID: {880D3E24-6DFD-5343-8376-1E3A4166D7C3}). */
  content?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {E12AE2A4-8296-5B57-9C35-8D3C4707FF7A}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/ContentBlock template (ID: {FF17DDD8-7D5E-5062-A608-B34AA34432EA}). */
export type ContentBlockAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/ContentBlock template (ID: {FF17DDD8-7D5E-5062-A608-B34AA34432EA}). */
export type ContentBlockChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/ContentBlock template (ID: {FF17DDD8-7D5E-5062-A608-B34AA34432EA}). */
export type ContentBlockFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/ContentBlock template (ID: {FF17DDD8-7D5E-5062-A608-B34AA34432EA}). */
export type ContentBlockFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/ContentBlock template (ID: {FF17DDD8-7D5E-5062-A608-B34AA34432EA}). */
export type ContentBlockHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/ContentBlock template (ID: {FF17DDD8-7D5E-5062-A608-B34AA34432EA}). */
export type ContentBlockIdArgs = {
  format?: Maybe<Scalars['String']>;
};


export type DateField = ItemField & {
  __typename?: 'DateField';
  /** The field's value as a UTC epoch date suitable for constructing a Javascript Date */
  dateValue?: Maybe<Scalars['Long']>;
  definition?: Maybe<ItemTemplateField>;
  /** The field's value as a preformatted date. */
  formattedDateValue?: Maybe<Scalars['String']>;
  /** The GUID of this field. */
  id: Scalars['ID'];
  jsonValue: Scalars['JSON'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};


export type DateFieldFormattedDateValueArgs = {
  format?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
};


export type DateFieldIdArgs = {
  format?: Maybe<Scalars['String']>;
};




/** /sitecore/templates/Project/JssNextWeb/ExampleCustomRouteType template (ID: {0747C353-0A7D-5CAA-961E-431AB3579863}). */
export type ExampleCustomRouteType = AppRoute & Item & {
  __typename?: 'ExampleCustomRouteType';
  ancestors: Array<Maybe<Item>>;
  /** author (ID: {B9C3B52F-D263-556F-BE7A-8285DC69F6C4}). */
  author?: Maybe<TextField>;
  children: ItemSearchResults;
  /** content (ID: {651E2280-B9F2-542A-837C-A8C8EC540A35}). */
  content?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** headline (ID: {DFD79B56-1E4B-573C-9D6B-7EC18A1D3BBB}). */
  headline?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  /** Page Title (ID: {F8171ECB-37C5-54EE-BFED-F689C878B6E2}). */
  pageTitle?: Maybe<TextField>;
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/ExampleCustomRouteType template (ID: {0747C353-0A7D-5CAA-961E-431AB3579863}). */
export type ExampleCustomRouteTypeAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/ExampleCustomRouteType template (ID: {0747C353-0A7D-5CAA-961E-431AB3579863}). */
export type ExampleCustomRouteTypeChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/ExampleCustomRouteType template (ID: {0747C353-0A7D-5CAA-961E-431AB3579863}). */
export type ExampleCustomRouteTypeFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/ExampleCustomRouteType template (ID: {0747C353-0A7D-5CAA-961E-431AB3579863}). */
export type ExampleCustomRouteTypeFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/ExampleCustomRouteType template (ID: {0747C353-0A7D-5CAA-961E-431AB3579863}). */
export type ExampleCustomRouteTypeHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/ExampleCustomRouteType template (ID: {0747C353-0A7D-5CAA-961E-431AB3579863}). */
export type ExampleCustomRouteTypeIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/GraphQL-ConnectedDemo template (ID: {8E2A4EA1-C8F5-56E6-B097-E008C994D953}). */
export type GraphQlConnectedDemo = Item & {
  __typename?: 'GraphQLConnectedDemo';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  /** sample1 (ID: {77EC057E-91BB-576C-9488-647056849076}). */
  sample1?: Maybe<TextField>;
  /** sample2 (ID: {6654F72F-CE4D-5651-8DE3-862857A48447}). */
  sample2?: Maybe<LinkField>;
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/GraphQL-ConnectedDemo template (ID: {8E2A4EA1-C8F5-56E6-B097-E008C994D953}). */
export type GraphQlConnectedDemoAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/GraphQL-ConnectedDemo template (ID: {8E2A4EA1-C8F5-56E6-B097-E008C994D953}). */
export type GraphQlConnectedDemoChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/GraphQL-ConnectedDemo template (ID: {8E2A4EA1-C8F5-56E6-B097-E008C994D953}). */
export type GraphQlConnectedDemoFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/GraphQL-ConnectedDemo template (ID: {8E2A4EA1-C8F5-56E6-B097-E008C994D953}). */
export type GraphQlConnectedDemoFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/GraphQL-ConnectedDemo template (ID: {8E2A4EA1-C8F5-56E6-B097-E008C994D953}). */
export type GraphQlConnectedDemoHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/GraphQL-ConnectedDemo template (ID: {8E2A4EA1-C8F5-56E6-B097-E008C994D953}). */
export type GraphQlConnectedDemoIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/GraphQL-IntegratedDemo template (ID: {A912A721-7F5E-5E54-AA0E-BBB1964919AC}). */
export type GraphQlIntegratedDemo = Item & {
  __typename?: 'GraphQLIntegratedDemo';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  /** sample1 (ID: {028FA2F2-3B77-5CD9-BD90-A2483A449AAF}). */
  sample1?: Maybe<TextField>;
  /** sample2 (ID: {7A901211-899F-5C4D-8550-179FCC2E4D74}). */
  sample2?: Maybe<LinkField>;
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/GraphQL-IntegratedDemo template (ID: {A912A721-7F5E-5E54-AA0E-BBB1964919AC}). */
export type GraphQlIntegratedDemoAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/GraphQL-IntegratedDemo template (ID: {A912A721-7F5E-5E54-AA0E-BBB1964919AC}). */
export type GraphQlIntegratedDemoChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/GraphQL-IntegratedDemo template (ID: {A912A721-7F5E-5E54-AA0E-BBB1964919AC}). */
export type GraphQlIntegratedDemoFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/GraphQL-IntegratedDemo template (ID: {A912A721-7F5E-5E54-AA0E-BBB1964919AC}). */
export type GraphQlIntegratedDemoFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/GraphQL-IntegratedDemo template (ID: {A912A721-7F5E-5E54-AA0E-BBB1964919AC}). */
export type GraphQlIntegratedDemoHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/GraphQL-IntegratedDemo template (ID: {A912A721-7F5E-5E54-AA0E-BBB1964919AC}). */
export type GraphQlIntegratedDemoIdArgs = {
  format?: Maybe<Scalars['String']>;
};

export type ImageField = ItemField & {
  __typename?: 'ImageField';
  /** The alternate text for the image */
  alt?: Maybe<Scalars['String']>;
  definition?: Maybe<ItemTemplateField>;
  /** The description of the media item */
  description?: Maybe<Scalars['String']>;
  /** The extension of the media item (e.g. 'jpg', 'gif') */
  extension?: Maybe<Scalars['String']>;
  /** Height of the image at full size */
  height?: Maybe<Scalars['String']>;
  /** The GUID of this field. */
  id: Scalars['ID'];
  jsonValue: Scalars['JSON'];
  /** The keywords of the media item */
  keywords?: Maybe<Scalars['String']>;
  /** The MIME type of the media item (e.g. 'image/jpeg') */
  mimeType?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** The size, in bytes, of the media item */
  size?: Maybe<Scalars['Int']>;
  /** The URL to the media item */
  src?: Maybe<Scalars['String']>;
  /** The title of the media item */
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  /** Width of the image at full size */
  width?: Maybe<Scalars['String']>;
};


export type ImageFieldIdArgs = {
  format?: Maybe<Scalars['String']>;
};


export type ImageFieldSrcArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
};

export type IntegerField = ItemField & {
  __typename?: 'IntegerField';
  definition?: Maybe<ItemTemplateField>;
  /** The GUID of this field. */
  id: Scalars['ID'];
  /** The field's value as an integer */
  intValue?: Maybe<Scalars['Int']>;
  jsonValue: Scalars['JSON'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};


export type IntegerFieldIdArgs = {
  format?: Maybe<Scalars['String']>;
};

export type Item = {
  /** Child items in the content hierarchy */
  ancestors: Array<Maybe<Item>>;
  /** Child items in the content hierarchy */
  children: ItemSearchResults;
  /** Display name of the item */
  displayName?: Maybe<Scalars['String']>;
  /** Single field by name or ID */
  field?: Maybe<ItemField>;
  /** All item fields. Fields can be treated as their type to get detailed info. */
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  /** Uniquely identifies id, lang, version */
  itemUri: Scalars['String'];
  language: ItemLanguage;
  /** Returns other language versions of this item */
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  /** Parent in the content hierarchy. */
  parent?: Maybe<Item>;
  path: Scalars['String'];
  /** Presentation of the item */
  rendered: Scalars['JSON'];
  /** Defines item fields */
  template: ItemTemplate;
  /** Gets a URL link to the item */
  url: ItemUrl;
  version: Scalars['Int'];
};


export type ItemAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ItemChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


export type ItemFieldArgs = {
  name: Scalars['String'];
};


export type ItemFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


export type ItemHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ItemIdArgs = {
  format?: Maybe<Scalars['String']>;
};

export type ItemField = {
  definition?: Maybe<ItemTemplateField>;
  /** The GUID of this field. */
  id: Scalars['ID'];
  jsonValue: Scalars['JSON'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};


export type ItemFieldIdArgs = {
  format?: Maybe<Scalars['String']>;
};

export type ItemLanguage = {
  __typename?: 'ItemLanguage';
  displayName: Scalars['String'];
  englishName: Scalars['String'];
  name: Scalars['String'];
  nativeName: Scalars['String'];
};

export enum ItemSearchOperator {
  Eq = 'EQ',
  Contains = 'CONTAINS',
  Neq = 'NEQ',
  Ncontains = 'NCONTAINS'
}

export type ItemSearchOrderBy = {
  name: Scalars['String'];
  direction?: Maybe<Ordering>;
};

export type ItemSearchPredicateGraphType = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<Maybe<ItemSearchPredicateGraphType>>>;
  OR?: Maybe<Array<Maybe<ItemSearchPredicateGraphType>>>;
  operator?: Maybe<ItemSearchOperator>;
};

export type ItemSearchResults = {
  __typename?: 'ItemSearchResults';
  pageInfo: PageInfo;
  results: Array<Maybe<Item>>;
  total: Scalars['Int'];
};

export type ItemTemplate = {
  __typename?: 'ItemTemplate';
  baseTemplates?: Maybe<Array<Maybe<ItemTemplate>>>;
  fields?: Maybe<Array<Maybe<ItemTemplateField>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  ownFields?: Maybe<Array<Maybe<ItemTemplateField>>>;
};


export type ItemTemplateIdArgs = {
  format?: Maybe<Scalars['String']>;
};

export type ItemTemplateField = {
  __typename?: 'ItemTemplateField';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  section: Scalars['String'];
  sectionSortOrder: Scalars['Int'];
  shared: Scalars['Boolean'];
  sortOrder: Scalars['Int'];
  source: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  unversioned: Scalars['Boolean'];
};


export type ItemTemplateFieldIdArgs = {
  format?: Maybe<Scalars['String']>;
};

export type ItemUrl = {
  __typename?: 'ItemUrl';
  /** The host name of the item’s site, as resolved during export */
  hostName: Scalars['String'];
  /** The URL path of the item (without URL or scheme) */
  path: Scalars['String'];
  /** The scheme (http or https) of the item’s site, as resolved during export */
  scheme: Scalars['String'];
  /** The name of the resolved site of the item */
  siteName: Scalars['String'];
  /** The full URL of the item, as resolved during export */
  url: Scalars['String'];
};


/** /sitecore/templates/Foundation/JavaScript Services/JSS Layout template (ID: {35C61E90-47DD-43DD-83A8-D1C4D5119720}). */
export type JssLayout = Layout_3a45a72364ee49199d4102fd40fd1466 & Item & {
  __typename?: 'JSSLayout';
  ancestors: Array<Maybe<Item>>;
  /** Area (ID: {70DC08D9-CDA2-4F04-AA35-C11FD7138066}). */
  area?: Maybe<TextField>;
  children: ItemSearchResults;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  /** Model (ID: {E9CC5A73-3C8A-4D7D-92AC-3B88C18A996A}). */
  model?: Maybe<TextField>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  /** Path (ID: {A036B2BC-BA04-44F6-A75F-BAE6CD242ABF}). */
  path_a036b2bcba0444f6a75fbae6cd242abf?: Maybe<TextField>;
  /** Placeholders (ID: {80334869-86DC-4472-AA89-44CF1B2F6C9B}). */
  placeholders?: Maybe<MultilistField>;
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Foundation/JavaScript Services/JSS Layout template (ID: {35C61E90-47DD-43DD-83A8-D1C4D5119720}). */
export type JssLayoutAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Foundation/JavaScript Services/JSS Layout template (ID: {35C61E90-47DD-43DD-83A8-D1C4D5119720}). */
export type JssLayoutChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Foundation/JavaScript Services/JSS Layout template (ID: {35C61E90-47DD-43DD-83A8-D1C4D5119720}). */
export type JssLayoutFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Foundation/JavaScript Services/JSS Layout template (ID: {35C61E90-47DD-43DD-83A8-D1C4D5119720}). */
export type JssLayoutFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Foundation/JavaScript Services/JSS Layout template (ID: {35C61E90-47DD-43DD-83A8-D1C4D5119720}). */
export type JssLayoutHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Foundation/JavaScript Services/JSS Layout template (ID: {35C61E90-47DD-43DD-83A8-D1C4D5119720}). */
export type JssLayoutIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Foundation/JavaScript Services/JavaScript Rendering template (ID: {B1C80C94-792D-44DA-861E-557C6E1915F2}). */
export type JavaScriptRendering = RenderingOptions & Caching & Item & {
  __typename?: 'JavaScriptRendering';
  /** AddFieldEditorButton (ID: {19D095B4-7621-4222-A89B-505289650792}). */
  addFieldEditorButton?: Maybe<CheckboxField>;
  ancestors: Array<Maybe<Item>>;
  /** Cacheable (ID: {3D08DB46-2267-41B0-BC52-BE69FD618633}). */
  cacheable?: Maybe<CheckboxField>;
  /** CacheClearingBehavior (ID: {A6D4FC1D-0803-4E0A-9145-B8C6121D6F26}). */
  cacheClearingBehavior?: Maybe<TextField>;
  children: ItemSearchResults;
  /** ClearOnIndexUpdate (ID: {F3E7E552-D7C8-469B-A150-69E4E14AB35C}). */
  clearOnIndexUpdate?: Maybe<CheckboxField>;
  /** Client Script Path (ID: {125BB7B7-5D7D-42F3-A314-480799A9643E}). */
  clientScriptPath?: Maybe<TextField>;
  /** Compatible Renderings (ID: {E441ABE7-2CA3-4640-AE26-3789967925D7}). */
  compatibleRenderings?: Maybe<MultilistField>;
  /** Component Name (ID: {E6779F24-A474-4F29-A60F-83182CD1993A}). */
  componentName?: Maybe<TextField>;
  /** ComponentQuery (ID: {4528B82B-E79E-4BD9-820D-1BAD26260342}). */
  componentQuery?: Maybe<TextField>;
  /** Customize Page (ID: {DAF096B4-BBE3-4FB1-9B2E-774A37FCCEC6}). */
  customizePage?: Maybe<TextField>;
  /** Data source (ID: {35F7859C-1E7F-4E86-87BD-65BFCF8679D8}). */
  dataSource?: Maybe<TextField>;
  /** Datasource Location (ID: {B5B27AF1-25EF-405C-87CE-369B3A004016}). */
  datasourceLocation?: Maybe<TextField>;
  /** Datasource Template (ID: {1A7C85E5-DC0B-490D-9187-BB1DBCB4C72F}). */
  datasourceTemplate?: Maybe<TextField>;
  /** Description (ID: {1127DFEE-0183-4A10-964A-00CCEA2121AC}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  /** Editable (ID: {308E88F5-CD6E-4F8F-BAFE-95A47DEDEFDC}). */
  editable?: Maybe<CheckboxField>;
  /** Enable Datasource Query (ID: {F172B787-7B88-4BD5-AE4D-6308E102EF11}). */
  enableDatasourceQuery?: Maybe<CheckboxField>;
  /** Exported Function Name (ID: {E61F6FEA-BA01-44CF-A50B-369D7B18ADDA}). */
  exportedFunctionName?: Maybe<TextField>;
  field?: Maybe<ItemField>;
  /** FieldEditorFields (ID: {9F069AF7-A5A1-4143-A641-14735D50B1E8}). */
  fieldEditorFields?: Maybe<MultilistField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  /** Open Properties after Add (ID: {C60E2D02-5F62-4DCF-A281-29005272C101}). */
  openPropertiesAfterAdd?: Maybe<TextField>;
  /** Page Editor Buttons (ID: {A2F5D9DF-8CBA-4A1D-99EB-51ACB94CB057}). */
  pageEditorButtons?: Maybe<MultilistField>;
  /** Parameters (ID: {BEE1D4B3-CDFC-4A2D-AA19-6775C59CAE7B}). */
  parameters?: Maybe<TextField>;
  /** Parameters Template (ID: {5391FAAC-6C16-42B3-A411-49109A8502A3}). */
  parametersTemplate?: Maybe<LookupField>;
  parent?: Maybe<Item>;
  path: Scalars['String'];
  /** Placeholder (ID: {DA298A61-8CEB-4FA5-9A56-90F531B1C105}). */
  placeholder?: Maybe<TextField>;
  /** Placeholders (ID: {069A8361-B1CD-437C-8C32-A3BE78941446}). */
  placeholders?: Maybe<MultilistField>;
  rendered: Scalars['JSON'];
  /** Render Engine Instance Configuration Id (ID: {1E0EBAA2-DEC4-4756-A510-2A20A4951E2D}). */
  renderEngineInstanceConfigurationId?: Maybe<TextField>;
  /** Render Engine Type (ID: {135C8B8A-9F55-4B2D-9EA1-333320BADE0C}). */
  renderEngineType?: Maybe<LookupField>;
  /** Rendering Contents Resolver (ID: {B0B15510-B138-470E-8F33-8DA2E228AAFE}). */
  renderingContentsResolver?: Maybe<LookupField>;
  /** Server Script Path (ID: {7EDACBF4-CD65-44D6-B524-3A5ED411AE05}). */
  serverScriptPath?: Maybe<TextField>;
  template: ItemTemplate;
  url: ItemUrl;
  /** VaryByData (ID: {8B6D532B-6128-4486-A044-CA06D90948BA}). */
  varyByData?: Maybe<CheckboxField>;
  /** VaryByDevice (ID: {C98CF969-BA71-42DA-833D-B3FC1368BA27}). */
  varyByDevice?: Maybe<CheckboxField>;
  /** VaryByLogin (ID: {8D9232B0-613F-440B-A2FA-DCDD80FBD33E}). */
  varyByLogin?: Maybe<CheckboxField>;
  /** VaryByParm (ID: {3AD2506A-DC39-4B1E-959F-9D524ADDBF50}). */
  varyByParm?: Maybe<CheckboxField>;
  /** VaryByQueryString (ID: {1084D3D2-0457-456A-ABBC-EB4CC0966072}). */
  varyByQueryString?: Maybe<CheckboxField>;
  /** VaryByUser (ID: {0E54A8DC-72AD-4372-A7C7-BB4773FAD44D}). */
  varyByUser?: Maybe<CheckboxField>;
  version: Scalars['Int'];
};


/** /sitecore/templates/Foundation/JavaScript Services/JavaScript Rendering template (ID: {B1C80C94-792D-44DA-861E-557C6E1915F2}). */
export type JavaScriptRenderingAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Foundation/JavaScript Services/JavaScript Rendering template (ID: {B1C80C94-792D-44DA-861E-557C6E1915F2}). */
export type JavaScriptRenderingChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Foundation/JavaScript Services/JavaScript Rendering template (ID: {B1C80C94-792D-44DA-861E-557C6E1915F2}). */
export type JavaScriptRenderingFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Foundation/JavaScript Services/JavaScript Rendering template (ID: {B1C80C94-792D-44DA-861E-557C6E1915F2}). */
export type JavaScriptRenderingFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Foundation/JavaScript Services/JavaScript Rendering template (ID: {B1C80C94-792D-44DA-861E-557C6E1915F2}). */
export type JavaScriptRenderingHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Foundation/JavaScript Services/JavaScript Rendering template (ID: {B1C80C94-792D-44DA-861E-557C6E1915F2}). */
export type JavaScriptRenderingIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Foundation/JavaScript Services/Json Rendering template (ID: {04646A89-996F-4EE7-878A-FFDBF1F0EF0D}). */
export type JsonRendering = RenderingOptions & Caching & Item & {
  __typename?: 'JsonRendering';
  /** AddFieldEditorButton (ID: {C39A90CE-0035-41BB-90F6-3C8A6EA87797}). */
  addFieldEditorButton?: Maybe<CheckboxField>;
  ancestors: Array<Maybe<Item>>;
  /** Cacheable (ID: {3D08DB46-2267-41B0-BC52-BE69FD618633}). */
  cacheable?: Maybe<CheckboxField>;
  /** CacheClearingBehavior (ID: {A6D4FC1D-0803-4E0A-9145-B8C6121D6F26}). */
  cacheClearingBehavior?: Maybe<TextField>;
  children: ItemSearchResults;
  /** ClearOnIndexUpdate (ID: {F3E7E552-D7C8-469B-A150-69E4E14AB35C}). */
  clearOnIndexUpdate?: Maybe<CheckboxField>;
  /** Compatible Renderings (ID: {E441ABE7-2CA3-4640-AE26-3789967925D7}). */
  compatibleRenderings?: Maybe<MultilistField>;
  /** componentName (ID: {037FE404-DD19-4BF7-8E30-4DADF68B27B0}). */
  componentName?: Maybe<TextField>;
  /** ComponentQuery (ID: {17BB046A-A32A-41B3-8315-81217947611B}). */
  componentQuery?: Maybe<TextField>;
  /** Customize Page (ID: {705A4365-065A-4104-B755-7363F455EBC6}). */
  customizePage?: Maybe<TextField>;
  /** Data source (ID: {003A72CD-4CD6-4392-9862-41D4159929CD}). */
  dataSource?: Maybe<TextField>;
  /** Datasource Location (ID: {B5B27AF1-25EF-405C-87CE-369B3A004016}). */
  datasourceLocation?: Maybe<TextField>;
  /** Datasource Template (ID: {1A7C85E5-DC0B-490D-9187-BB1DBCB4C72F}). */
  datasourceTemplate?: Maybe<TextField>;
  /** Description (ID: {56E4618A-F3F2-4CB5-B69A-8A45DE578902}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  /** Editable (ID: {308E88F5-CD6E-4F8F-BAFE-95A47DEDEFDC}). */
  editable?: Maybe<CheckboxField>;
  /** Enable Datasource Query (ID: {F172B787-7B88-4BD5-AE4D-6308E102EF11}). */
  enableDatasourceQuery?: Maybe<CheckboxField>;
  field?: Maybe<ItemField>;
  /** FieldEditorFields (ID: {C7B72114-3F04-45A0-BA43-3856A9C9FEB3}). */
  fieldEditorFields?: Maybe<MultilistField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  /** Open Properties after Add (ID: {7D8AE35F-9ED1-43B5-96A2-0A5F040D4E4E}). */
  openPropertiesAfterAdd?: Maybe<TextField>;
  /** Page Editor Buttons (ID: {A2F5D9DF-8CBA-4A1D-99EB-51ACB94CB057}). */
  pageEditorButtons?: Maybe<MultilistField>;
  /** Parameters (ID: {D01DF626-2284-4BC6-A6CA-C0A3E6D2E844}). */
  parameters?: Maybe<TextField>;
  /** Parameters Template (ID: {A77E8568-1AB3-44F1-A664-B7C37EC7810D}). */
  parametersTemplate?: Maybe<LookupField>;
  parent?: Maybe<Item>;
  path: Scalars['String'];
  /** Placeholder (ID: {592A1CE7-ABE0-4986-9783-0A34F3961DC0}). */
  placeholder?: Maybe<TextField>;
  /** Placeholders (ID: {069A8361-B1CD-437C-8C32-A3BE78941446}). */
  placeholders?: Maybe<MultilistField>;
  rendered: Scalars['JSON'];
  /** Rendering Contents Resolver (ID: {B0B15510-B138-470E-8F33-8DA2E228AAFE}). */
  renderingContentsResolver?: Maybe<LookupField>;
  template: ItemTemplate;
  url: ItemUrl;
  /** VaryByData (ID: {8B6D532B-6128-4486-A044-CA06D90948BA}). */
  varyByData?: Maybe<CheckboxField>;
  /** VaryByDevice (ID: {C98CF969-BA71-42DA-833D-B3FC1368BA27}). */
  varyByDevice?: Maybe<CheckboxField>;
  /** VaryByLogin (ID: {8D9232B0-613F-440B-A2FA-DCDD80FBD33E}). */
  varyByLogin?: Maybe<CheckboxField>;
  /** VaryByParm (ID: {3AD2506A-DC39-4B1E-959F-9D524ADDBF50}). */
  varyByParm?: Maybe<CheckboxField>;
  /** VaryByQueryString (ID: {1084D3D2-0457-456A-ABBC-EB4CC0966072}). */
  varyByQueryString?: Maybe<CheckboxField>;
  /** VaryByUser (ID: {0E54A8DC-72AD-4372-A7C7-BB4773FAD44D}). */
  varyByUser?: Maybe<CheckboxField>;
  version: Scalars['Int'];
};


/** /sitecore/templates/Foundation/JavaScript Services/Json Rendering template (ID: {04646A89-996F-4EE7-878A-FFDBF1F0EF0D}). */
export type JsonRenderingAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Foundation/JavaScript Services/Json Rendering template (ID: {04646A89-996F-4EE7-878A-FFDBF1F0EF0D}). */
export type JsonRenderingChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Foundation/JavaScript Services/Json Rendering template (ID: {04646A89-996F-4EE7-878A-FFDBF1F0EF0D}). */
export type JsonRenderingFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Foundation/JavaScript Services/Json Rendering template (ID: {04646A89-996F-4EE7-878A-FFDBF1F0EF0D}). */
export type JsonRenderingFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Foundation/JavaScript Services/Json Rendering template (ID: {04646A89-996F-4EE7-878A-FFDBF1F0EF0D}). */
export type JsonRenderingHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Foundation/JavaScript Services/Json Rendering template (ID: {04646A89-996F-4EE7-878A-FFDBF1F0EF0D}). */
export type JsonRenderingIdArgs = {
  format?: Maybe<Scalars['String']>;
};

export type LayoutData = {
  __typename?: 'LayoutData';
  item?: Maybe<Item>;
};

/** /sitecore/templates/System/Layout/Layout template (ID: {3A45A723-64EE-4919-9D41-02FD40FD1466}). */
export type Layout_3a45a72364ee49199d4102fd40fd1466 = {
  /** Area (ID: {70DC08D9-CDA2-4F04-AA35-C11FD7138066}). */
  area?: Maybe<TextField>;
  /** Model (ID: {E9CC5A73-3C8A-4D7D-92AC-3B88C18A996A}). */
  model?: Maybe<TextField>;
  /** Path (ID: {A036B2BC-BA04-44F6-A75F-BAE6CD242ABF}). */
  path_a036b2bcba0444f6a75fbae6cd242abf?: Maybe<TextField>;
  /** Placeholders (ID: {80334869-86DC-4472-AA89-44CF1B2F6C9B}). */
  placeholders?: Maybe<MultilistField>;
};

export type LinkField = ItemField & {
  __typename?: 'LinkField';
  /** The anchor name this link points to (e.g. #foo) */
  anchor?: Maybe<Scalars['String']>;
  /** The CSS class on this link */
  className?: Maybe<Scalars['String']>;
  definition?: Maybe<ItemTemplateField>;
  /** The GUID of this field. */
  id: Scalars['ID'];
  jsonValue: Scalars['JSON'];
  /** The type of link this is (e.g. 'external') */
  linkType?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** The query string on this link */
  queryString?: Maybe<Scalars['String']>;
  /** The HTML target attribute of the link (e.g. __blank) */
  target?: Maybe<Scalars['String']>;
  /** The internal item that this link targets (null for external or other link types) */
  targetItem?: Maybe<Item>;
  /** The body text of the link */
  text?: Maybe<Scalars['String']>;
  /** The URL/href of this link */
  url?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};


export type LinkFieldIdArgs = {
  format?: Maybe<Scalars['String']>;
};


export type LookupField = ItemField & {
  __typename?: 'LookupField';
  definition?: Maybe<ItemTemplateField>;
  /** The GUID of this field. */
  id: Scalars['ID'];
  jsonValue: Scalars['JSON'];
  name: Scalars['String'];
  /** The item ID that this field references */
  targetId?: Maybe<Scalars['ID']>;
  /** The item that this field references */
  targetItem?: Maybe<Item>;
  value?: Maybe<Scalars['String']>;
};


export type LookupFieldIdArgs = {
  format?: Maybe<Scalars['String']>;
};


export type LookupFieldTargetIdArgs = {
  format?: Maybe<Scalars['String']>;
};


export type MultilistField = ItemField & {
  __typename?: 'MultilistField';
  /** The number of items that this field references */
  count?: Maybe<Scalars['Int']>;
  definition?: Maybe<ItemTemplateField>;
  /** The GUID of this field. */
  id: Scalars['ID'];
  jsonValue: Scalars['JSON'];
  name: Scalars['String'];
  /** The IDs of the referenced items */
  targetIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The item(s) that this field references */
  targetItems?: Maybe<Array<Maybe<Item>>>;
  value?: Maybe<Scalars['String']>;
};


export type MultilistFieldIdArgs = {
  format?: Maybe<Scalars['String']>;
};

export type NameValueListField = ItemField & {
  __typename?: 'NameValueListField';
  definition?: Maybe<ItemTemplateField>;
  /** The GUID of this field. */
  id: Scalars['ID'];
  jsonValue: Scalars['JSON'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
  /** The key-value pairs in this field */
  values?: Maybe<Array<Maybe<NameValueListValue>>>;
};


export type NameValueListFieldIdArgs = {
  format?: Maybe<Scalars['String']>;
};

export type NameValueListValue = {
  __typename?: 'NameValueListValue';
  /** The name of the name-value pair */
  name: Scalars['String'];
  /** The value of the name-value pair */
  value: Scalars['String'];
};

export type NumberField = ItemField & {
  __typename?: 'NumberField';
  definition?: Maybe<ItemTemplateField>;
  /** The GUID of this field. */
  id: Scalars['ID'];
  jsonValue: Scalars['JSON'];
  name: Scalars['String'];
  /** The field's value as a floating-point number */
  numberValue?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['String']>;
};


export type NumberFieldIdArgs = {
  format?: Maybe<Scalars['String']>;
};

export enum Ordering {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNext: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  /** Allows querying items from the content tree */
  item?: Maybe<Item>;
  /** Allows querying layout data for the item */
  layout?: Maybe<LayoutData>;
  /** Allows to query items through the search */
  search?: Maybe<ItemSearchResults>;
};


export type QueryItemArgs = {
  path?: Maybe<Scalars['String']>;
  language: Scalars['String'];
};


export type QueryLayoutArgs = {
  site: Scalars['String'];
  routePath: Scalars['String'];
  language: Scalars['String'];
};


export type QuerySearchArgs = {
  where: ItemSearchPredicateGraphType;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<ItemSearchOrderBy>;
};

/** /sitecore/templates/Foundation/JavaScript Services/Render Engine Type template (ID: {7FEC3963-0AC6-4743-B02C-35E6971300ED}). */
export type RenderEngineType = Item & {
  __typename?: 'RenderEngineType';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  displayName?: Maybe<Scalars['String']>;
  /** Engine Type Name (ID: {90C6AAF1-9962-4DC9-A730-5E5952B3AE51}). */
  engineTypeName?: Maybe<TextField>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Foundation/JavaScript Services/Render Engine Type template (ID: {7FEC3963-0AC6-4743-B02C-35E6971300ED}). */
export type RenderEngineTypeAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Foundation/JavaScript Services/Render Engine Type template (ID: {7FEC3963-0AC6-4743-B02C-35E6971300ED}). */
export type RenderEngineTypeChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Foundation/JavaScript Services/Render Engine Type template (ID: {7FEC3963-0AC6-4743-B02C-35E6971300ED}). */
export type RenderEngineTypeFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Foundation/JavaScript Services/Render Engine Type template (ID: {7FEC3963-0AC6-4743-B02C-35E6971300ED}). */
export type RenderEngineTypeFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Foundation/JavaScript Services/Render Engine Type template (ID: {7FEC3963-0AC6-4743-B02C-35E6971300ED}). */
export type RenderEngineTypeHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Foundation/JavaScript Services/Render Engine Type template (ID: {7FEC3963-0AC6-4743-B02C-35E6971300ED}). */
export type RenderEngineTypeIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/System/Layout/Sections/Rendering Options template (ID: {D1592226-3898-4CE2-B190-090FD5F84A4C}). */
export type RenderingOptions = {
  /** Compatible Renderings (ID: {E441ABE7-2CA3-4640-AE26-3789967925D7}). */
  compatibleRenderings?: Maybe<MultilistField>;
  /** Datasource Location (ID: {B5B27AF1-25EF-405C-87CE-369B3A004016}). */
  datasourceLocation?: Maybe<TextField>;
  /** Datasource Template (ID: {1A7C85E5-DC0B-490D-9187-BB1DBCB4C72F}). */
  datasourceTemplate?: Maybe<TextField>;
  /** Editable (ID: {308E88F5-CD6E-4F8F-BAFE-95A47DEDEFDC}). */
  editable?: Maybe<CheckboxField>;
  /** Enable Datasource Query (ID: {F172B787-7B88-4BD5-AE4D-6308E102EF11}). */
  enableDatasourceQuery?: Maybe<CheckboxField>;
  /** Page Editor Buttons (ID: {A2F5D9DF-8CBA-4A1D-99EB-51ACB94CB057}). */
  pageEditorButtons?: Maybe<MultilistField>;
  /** Placeholders (ID: {069A8361-B1CD-437C-8C32-A3BE78941446}). */
  placeholders?: Maybe<MultilistField>;
  /** Rendering Contents Resolver (ID: {B0B15510-B138-470E-8F33-8DA2E228AAFE}). */
  renderingContentsResolver?: Maybe<LookupField>;
};

export type RichTextField = ItemField & {
  __typename?: 'RichTextField';
  definition?: Maybe<ItemTemplateField>;
  /** The GUID of this field. */
  id: Scalars['ID'];
  jsonValue: Scalars['JSON'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};


export type RichTextFieldIdArgs = {
  format?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams template (ID: {428C6724-C112-5256-9457-B2D677E2AD99}). */
export type StyleguideComponentParams = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideComponentParams';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams template (ID: {428C6724-C112-5256-9457-B2D677E2AD99}). */
export type StyleguideComponentParamsAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams template (ID: {428C6724-C112-5256-9457-B2D677E2AD99}). */
export type StyleguideComponentParamsChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams template (ID: {428C6724-C112-5256-9457-B2D677E2AD99}). */
export type StyleguideComponentParamsFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams template (ID: {428C6724-C112-5256-9457-B2D677E2AD99}). */
export type StyleguideComponentParamsFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams template (ID: {428C6724-C112-5256-9457-B2D677E2AD99}). */
export type StyleguideComponentParamsHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams template (ID: {428C6724-C112-5256-9457-B2D677E2AD99}). */
export type StyleguideComponentParamsIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams Rendering Parameters template (ID: {57F1C4D3-6494-5339-A7DD-C67586B5CE4F}). */
export type StyleguideComponentParamsRenderingParameters = Item & {
  __typename?: 'StyleguideComponentParamsRenderingParameters';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** columns (ID: {80BA921F-CE56-555E-B9B7-1C6F6067D102}). */
  columns?: Maybe<TextField>;
  /** cssClass (ID: {E8A18F3F-6537-5B29-801E-6A6A83C46FE2}). */
  cssClass?: Maybe<TextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  /** useCallToAction (ID: {FD936C81-D2CD-5049-85AE-E91DEBB5B34B}). */
  useCallToAction?: Maybe<TextField>;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams Rendering Parameters template (ID: {57F1C4D3-6494-5339-A7DD-C67586B5CE4F}). */
export type StyleguideComponentParamsRenderingParametersAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams Rendering Parameters template (ID: {57F1C4D3-6494-5339-A7DD-C67586B5CE4F}). */
export type StyleguideComponentParamsRenderingParametersChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams Rendering Parameters template (ID: {57F1C4D3-6494-5339-A7DD-C67586B5CE4F}). */
export type StyleguideComponentParamsRenderingParametersFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams Rendering Parameters template (ID: {57F1C4D3-6494-5339-A7DD-C67586B5CE4F}). */
export type StyleguideComponentParamsRenderingParametersFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams Rendering Parameters template (ID: {57F1C4D3-6494-5339-A7DD-C67586B5CE4F}). */
export type StyleguideComponentParamsRenderingParametersHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ComponentParams Rendering Parameters template (ID: {57F1C4D3-6494-5339-A7DD-C67586B5CE4F}). */
export type StyleguideComponentParamsRenderingParametersIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ContentList-Item-Template template (ID: {CDEC86DE-6617-58C2-94BE-07E95A0FC0EB}). */
export type StyleguideContentListItemTemplate = Item & {
  __typename?: 'StyleguideContentListItemTemplate';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  /** textField (ID: {C9C13EE1-D05B-571B-8184-E0131D2D6FAF}). */
  textField?: Maybe<TextField>;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ContentList-Item-Template template (ID: {CDEC86DE-6617-58C2-94BE-07E95A0FC0EB}). */
export type StyleguideContentListItemTemplateAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ContentList-Item-Template template (ID: {CDEC86DE-6617-58C2-94BE-07E95A0FC0EB}). */
export type StyleguideContentListItemTemplateChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ContentList-Item-Template template (ID: {CDEC86DE-6617-58C2-94BE-07E95A0FC0EB}). */
export type StyleguideContentListItemTemplateFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ContentList-Item-Template template (ID: {CDEC86DE-6617-58C2-94BE-07E95A0FC0EB}). */
export type StyleguideContentListItemTemplateFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ContentList-Item-Template template (ID: {CDEC86DE-6617-58C2-94BE-07E95A0FC0EB}). */
export type StyleguideContentListItemTemplateHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ContentList-Item-Template template (ID: {CDEC86DE-6617-58C2-94BE-07E95A0FC0EB}). */
export type StyleguideContentListItemTemplateIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Explanatory-Component template (ID: {127CFAA4-4689-536B-AF98-648DB1DC0FBE}). */
export type StyleguideExplanatoryComponent = {
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Checkbox template (ID: {93D8656F-A3BD-534D-BDD6-D2C55E6A1EF2}). */
export type StyleguideFieldUsageCheckbox = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideFieldUsageCheckbox';
  ancestors: Array<Maybe<Item>>;
  /** checkbox (ID: {B8A80B4C-E029-580C-ADF3-24A1CCDAA6D9}). */
  checkbox?: Maybe<CheckboxField>;
  /** checkbox2 (ID: {F7E780CC-DAB4-5845-9CF7-6119115D11E1}). */
  checkbox2?: Maybe<CheckboxField>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Checkbox template (ID: {93D8656F-A3BD-534D-BDD6-D2C55E6A1EF2}). */
export type StyleguideFieldUsageCheckboxAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Checkbox template (ID: {93D8656F-A3BD-534D-BDD6-D2C55E6A1EF2}). */
export type StyleguideFieldUsageCheckboxChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Checkbox template (ID: {93D8656F-A3BD-534D-BDD6-D2C55E6A1EF2}). */
export type StyleguideFieldUsageCheckboxFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Checkbox template (ID: {93D8656F-A3BD-534D-BDD6-D2C55E6A1EF2}). */
export type StyleguideFieldUsageCheckboxFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Checkbox template (ID: {93D8656F-A3BD-534D-BDD6-D2C55E6A1EF2}). */
export type StyleguideFieldUsageCheckboxHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Checkbox template (ID: {93D8656F-A3BD-534D-BDD6-D2C55E6A1EF2}). */
export type StyleguideFieldUsageCheckboxIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ContentList template (ID: {FCFE9F7D-7DC3-527F-B0DD-6206F20ACC88}). */
export type StyleguideFieldUsageContentList = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideFieldUsageContentList';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  /** localContentList (ID: {7883CA79-EC5B-57B4-94C6-ACD63E295845}). */
  localContentList?: Maybe<MultilistField>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  /** sharedContentList (ID: {195FB738-0B75-5C92-9C8D-C5A613A388E5}). */
  sharedContentList?: Maybe<MultilistField>;
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ContentList template (ID: {FCFE9F7D-7DC3-527F-B0DD-6206F20ACC88}). */
export type StyleguideFieldUsageContentListAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ContentList template (ID: {FCFE9F7D-7DC3-527F-B0DD-6206F20ACC88}). */
export type StyleguideFieldUsageContentListChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ContentList template (ID: {FCFE9F7D-7DC3-527F-B0DD-6206F20ACC88}). */
export type StyleguideFieldUsageContentListFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ContentList template (ID: {FCFE9F7D-7DC3-527F-B0DD-6206F20ACC88}). */
export type StyleguideFieldUsageContentListFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ContentList template (ID: {FCFE9F7D-7DC3-527F-B0DD-6206F20ACC88}). */
export type StyleguideFieldUsageContentListHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ContentList template (ID: {FCFE9F7D-7DC3-527F-B0DD-6206F20ACC88}). */
export type StyleguideFieldUsageContentListIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Custom template (ID: {6A4B3E43-1023-5AF6-89E3-99137D7DB037}). */
export type StyleguideFieldUsageCustom = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideFieldUsageCustom';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** customIntField (ID: {A49920A5-2E36-54FD-88E9-EE9DD6A1C1DC}). */
  customIntField?: Maybe<IntegerField>;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Custom template (ID: {6A4B3E43-1023-5AF6-89E3-99137D7DB037}). */
export type StyleguideFieldUsageCustomAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Custom template (ID: {6A4B3E43-1023-5AF6-89E3-99137D7DB037}). */
export type StyleguideFieldUsageCustomChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Custom template (ID: {6A4B3E43-1023-5AF6-89E3-99137D7DB037}). */
export type StyleguideFieldUsageCustomFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Custom template (ID: {6A4B3E43-1023-5AF6-89E3-99137D7DB037}). */
export type StyleguideFieldUsageCustomFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Custom template (ID: {6A4B3E43-1023-5AF6-89E3-99137D7DB037}). */
export type StyleguideFieldUsageCustomHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Custom template (ID: {6A4B3E43-1023-5AF6-89E3-99137D7DB037}). */
export type StyleguideFieldUsageCustomIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Date template (ID: {C30852C0-4E80-5BDA-A435-F7A11A5F44DE}). */
export type StyleguideFieldUsageDate = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideFieldUsageDate';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** date (ID: {742D5379-22C8-5DE7-B1C8-802B7AAA296A}). */
  date?: Maybe<DateField>;
  /** dateTime (ID: {46C2FC73-E2F4-55D3-B4B2-C0C887E35EE4}). */
  dateTime?: Maybe<DateField>;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Date template (ID: {C30852C0-4E80-5BDA-A435-F7A11A5F44DE}). */
export type StyleguideFieldUsageDateAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Date template (ID: {C30852C0-4E80-5BDA-A435-F7A11A5F44DE}). */
export type StyleguideFieldUsageDateChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Date template (ID: {C30852C0-4E80-5BDA-A435-F7A11A5F44DE}). */
export type StyleguideFieldUsageDateFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Date template (ID: {C30852C0-4E80-5BDA-A435-F7A11A5F44DE}). */
export type StyleguideFieldUsageDateFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Date template (ID: {C30852C0-4E80-5BDA-A435-F7A11A5F44DE}). */
export type StyleguideFieldUsageDateHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Date template (ID: {C30852C0-4E80-5BDA-A435-F7A11A5F44DE}). */
export type StyleguideFieldUsageDateIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-File template (ID: {F4FEF933-8047-51B2-8A6C-202BD6A921A1}). */
export type StyleguideFieldUsageFile = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideFieldUsageFile';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  /** file (ID: {7CBE40EA-DAEB-567B-A746-8361E9E9A389}). */
  file?: Maybe<TextField>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-File template (ID: {F4FEF933-8047-51B2-8A6C-202BD6A921A1}). */
export type StyleguideFieldUsageFileAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-File template (ID: {F4FEF933-8047-51B2-8A6C-202BD6A921A1}). */
export type StyleguideFieldUsageFileChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-File template (ID: {F4FEF933-8047-51B2-8A6C-202BD6A921A1}). */
export type StyleguideFieldUsageFileFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-File template (ID: {F4FEF933-8047-51B2-8A6C-202BD6A921A1}). */
export type StyleguideFieldUsageFileFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-File template (ID: {F4FEF933-8047-51B2-8A6C-202BD6A921A1}). */
export type StyleguideFieldUsageFileHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-File template (ID: {F4FEF933-8047-51B2-8A6C-202BD6A921A1}). */
export type StyleguideFieldUsageFileIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Image template (ID: {2E99E84B-ED7F-51EA-A903-E1E22EF13E9F}). */
export type StyleguideFieldUsageImage = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideFieldUsageImage';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  /** sample1 (ID: {3F02E457-7EB6-5D15-AC95-5A2287DD14A9}). */
  sample1?: Maybe<ImageField>;
  /** sample2 (ID: {134C1907-4041-52A6-8BF7-47EDD1B8D159}). */
  sample2?: Maybe<ImageField>;
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Image template (ID: {2E99E84B-ED7F-51EA-A903-E1E22EF13E9F}). */
export type StyleguideFieldUsageImageAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Image template (ID: {2E99E84B-ED7F-51EA-A903-E1E22EF13E9F}). */
export type StyleguideFieldUsageImageChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Image template (ID: {2E99E84B-ED7F-51EA-A903-E1E22EF13E9F}). */
export type StyleguideFieldUsageImageFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Image template (ID: {2E99E84B-ED7F-51EA-A903-E1E22EF13E9F}). */
export type StyleguideFieldUsageImageFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Image template (ID: {2E99E84B-ED7F-51EA-A903-E1E22EF13E9F}). */
export type StyleguideFieldUsageImageHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Image template (ID: {2E99E84B-ED7F-51EA-A903-E1E22EF13E9F}). */
export type StyleguideFieldUsageImageIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ItemLink template (ID: {6607F29C-F454-51E1-AFD0-DCB416ECA18B}). */
export type StyleguideFieldUsageItemLink = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideFieldUsageItemLink';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  /** localItemLink (ID: {777C5315-2D62-574C-810A-B5E203C38DD5}). */
  localItemLink?: Maybe<LookupField>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  /** sharedItemLink (ID: {B48B7303-04F5-5017-A1C0-2DB0F08BC2AD}). */
  sharedItemLink?: Maybe<LookupField>;
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ItemLink template (ID: {6607F29C-F454-51E1-AFD0-DCB416ECA18B}). */
export type StyleguideFieldUsageItemLinkAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ItemLink template (ID: {6607F29C-F454-51E1-AFD0-DCB416ECA18B}). */
export type StyleguideFieldUsageItemLinkChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ItemLink template (ID: {6607F29C-F454-51E1-AFD0-DCB416ECA18B}). */
export type StyleguideFieldUsageItemLinkFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ItemLink template (ID: {6607F29C-F454-51E1-AFD0-DCB416ECA18B}). */
export type StyleguideFieldUsageItemLinkFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ItemLink template (ID: {6607F29C-F454-51E1-AFD0-DCB416ECA18B}). */
export type StyleguideFieldUsageItemLinkHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-ItemLink template (ID: {6607F29C-F454-51E1-AFD0-DCB416ECA18B}). */
export type StyleguideFieldUsageItemLinkIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Link template (ID: {C25F15D8-3DE9-53CA-ABEC-D60A27310324}). */
export type StyleguideFieldUsageLink = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideFieldUsageLink';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  /** emailLink (ID: {09812002-44A5-500D-ACD4-28EF5D07B2AE}). */
  emailLink?: Maybe<LinkField>;
  /** externalLink (ID: {C18443C2-D926-546F-96EB-CDA7021071FA}). */
  externalLink?: Maybe<LinkField>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  /** internalLink (ID: {EF17D33D-C888-5663-8F97-8036B3868340}). */
  internalLink?: Maybe<LinkField>;
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  /** paramsLink (ID: {C1BAB701-9049-5348-BE50-A58719EE953E}). */
  paramsLink?: Maybe<LinkField>;
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Link template (ID: {C25F15D8-3DE9-53CA-ABEC-D60A27310324}). */
export type StyleguideFieldUsageLinkAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Link template (ID: {C25F15D8-3DE9-53CA-ABEC-D60A27310324}). */
export type StyleguideFieldUsageLinkChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Link template (ID: {C25F15D8-3DE9-53CA-ABEC-D60A27310324}). */
export type StyleguideFieldUsageLinkFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Link template (ID: {C25F15D8-3DE9-53CA-ABEC-D60A27310324}). */
export type StyleguideFieldUsageLinkFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Link template (ID: {C25F15D8-3DE9-53CA-ABEC-D60A27310324}). */
export type StyleguideFieldUsageLinkHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Link template (ID: {C25F15D8-3DE9-53CA-ABEC-D60A27310324}). */
export type StyleguideFieldUsageLinkIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Number template (ID: {6F72FB46-D13E-5B8F-92EF-2ABD7C5CE678}). */
export type StyleguideFieldUsageNumber = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideFieldUsageNumber';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  /** sample (ID: {BBB0168B-DCFF-580A-B7EA-EC69F9241335}). */
  sample?: Maybe<NumberField>;
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Number template (ID: {6F72FB46-D13E-5B8F-92EF-2ABD7C5CE678}). */
export type StyleguideFieldUsageNumberAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Number template (ID: {6F72FB46-D13E-5B8F-92EF-2ABD7C5CE678}). */
export type StyleguideFieldUsageNumberChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Number template (ID: {6F72FB46-D13E-5B8F-92EF-2ABD7C5CE678}). */
export type StyleguideFieldUsageNumberFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Number template (ID: {6F72FB46-D13E-5B8F-92EF-2ABD7C5CE678}). */
export type StyleguideFieldUsageNumberFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Number template (ID: {6F72FB46-D13E-5B8F-92EF-2ABD7C5CE678}). */
export type StyleguideFieldUsageNumberHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Number template (ID: {6F72FB46-D13E-5B8F-92EF-2ABD7C5CE678}). */
export type StyleguideFieldUsageNumberIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-RichText template (ID: {2DCE113F-0717-5E83-A811-C66D9E375B6A}). */
export type StyleguideFieldUsageRichText = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideFieldUsageRichText';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  /** sample (ID: {AA843F7D-11CE-5719-8BB2-A064385C4681}). */
  sample?: Maybe<RichTextField>;
  /** Customize Name Shown in Sitecore (ID: {D4980E41-DDF5-5EAD-A133-A2D11CF0A10B}). */
  sample2?: Maybe<RichTextField>;
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-RichText template (ID: {2DCE113F-0717-5E83-A811-C66D9E375B6A}). */
export type StyleguideFieldUsageRichTextAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-RichText template (ID: {2DCE113F-0717-5E83-A811-C66D9E375B6A}). */
export type StyleguideFieldUsageRichTextChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-RichText template (ID: {2DCE113F-0717-5E83-A811-C66D9E375B6A}). */
export type StyleguideFieldUsageRichTextFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-RichText template (ID: {2DCE113F-0717-5E83-A811-C66D9E375B6A}). */
export type StyleguideFieldUsageRichTextFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-RichText template (ID: {2DCE113F-0717-5E83-A811-C66D9E375B6A}). */
export type StyleguideFieldUsageRichTextHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-RichText template (ID: {2DCE113F-0717-5E83-A811-C66D9E375B6A}). */
export type StyleguideFieldUsageRichTextIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Text template (ID: {374C18F3-D247-56A0-B03A-421FCC4A76A2}). */
export type StyleguideFieldUsageText = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideFieldUsageText';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  /** sample (ID: {C88FA45A-6B21-5957-BADA-0F38CC50A0CC}). */
  sample?: Maybe<TextField>;
  /** Customize Name Shown in Sitecore (ID: {1F939DC7-80EC-5F4A-B455-7A881B5310B5}). */
  sample2?: Maybe<TextField>;
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Text template (ID: {374C18F3-D247-56A0-B03A-421FCC4A76A2}). */
export type StyleguideFieldUsageTextAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Text template (ID: {374C18F3-D247-56A0-B03A-421FCC4A76A2}). */
export type StyleguideFieldUsageTextChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Text template (ID: {374C18F3-D247-56A0-B03A-421FCC4A76A2}). */
export type StyleguideFieldUsageTextFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Text template (ID: {374C18F3-D247-56A0-B03A-421FCC4A76A2}). */
export type StyleguideFieldUsageTextFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Text template (ID: {374C18F3-D247-56A0-B03A-421FCC4A76A2}). */
export type StyleguideFieldUsageTextHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-FieldUsage-Text template (ID: {374C18F3-D247-56A0-B03A-421FCC4A76A2}). */
export type StyleguideFieldUsageTextIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-ItemLink-Item-Template template (ID: {BDC33B20-0C9C-5D9B-B52C-4762FD3B59EF}). */
export type StyleguideItemLinkItemTemplate = Item & {
  __typename?: 'StyleguideItemLinkItemTemplate';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  /** textField (ID: {41412393-257C-5288-876F-0E67A1B51192}). */
  textField?: Maybe<TextField>;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ItemLink-Item-Template template (ID: {BDC33B20-0C9C-5D9B-B52C-4762FD3B59EF}). */
export type StyleguideItemLinkItemTemplateAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ItemLink-Item-Template template (ID: {BDC33B20-0C9C-5D9B-B52C-4762FD3B59EF}). */
export type StyleguideItemLinkItemTemplateChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ItemLink-Item-Template template (ID: {BDC33B20-0C9C-5D9B-B52C-4762FD3B59EF}). */
export type StyleguideItemLinkItemTemplateFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ItemLink-Item-Template template (ID: {BDC33B20-0C9C-5D9B-B52C-4762FD3B59EF}). */
export type StyleguideItemLinkItemTemplateFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ItemLink-Item-Template template (ID: {BDC33B20-0C9C-5D9B-B52C-4762FD3B59EF}). */
export type StyleguideItemLinkItemTemplateHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-ItemLink-Item-Template template (ID: {BDC33B20-0C9C-5D9B-B52C-4762FD3B59EF}). */
export type StyleguideItemLinkItemTemplateIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Reuse template (ID: {197A1915-CBBC-5689-B5BD-A6A13467F3E7}). */
export type StyleguideLayoutReuse = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideLayoutReuse';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Reuse template (ID: {197A1915-CBBC-5689-B5BD-A6A13467F3E7}). */
export type StyleguideLayoutReuseAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Reuse template (ID: {197A1915-CBBC-5689-B5BD-A6A13467F3E7}). */
export type StyleguideLayoutReuseChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Reuse template (ID: {197A1915-CBBC-5689-B5BD-A6A13467F3E7}). */
export type StyleguideLayoutReuseFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Reuse template (ID: {197A1915-CBBC-5689-B5BD-A6A13467F3E7}). */
export type StyleguideLayoutReuseFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Reuse template (ID: {197A1915-CBBC-5689-B5BD-A6A13467F3E7}). */
export type StyleguideLayoutReuseHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Reuse template (ID: {197A1915-CBBC-5689-B5BD-A6A13467F3E7}). */
export type StyleguideLayoutReuseIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs template (ID: {A59C7DBF-C994-5219-8DF3-96ED5C63E004}). */
export type StyleguideLayoutTabs = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideLayoutTabs';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs template (ID: {A59C7DBF-C994-5219-8DF3-96ED5C63E004}). */
export type StyleguideLayoutTabsAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs template (ID: {A59C7DBF-C994-5219-8DF3-96ED5C63E004}). */
export type StyleguideLayoutTabsChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs template (ID: {A59C7DBF-C994-5219-8DF3-96ED5C63E004}). */
export type StyleguideLayoutTabsFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs template (ID: {A59C7DBF-C994-5219-8DF3-96ED5C63E004}). */
export type StyleguideLayoutTabsFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs template (ID: {A59C7DBF-C994-5219-8DF3-96ED5C63E004}). */
export type StyleguideLayoutTabsHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs template (ID: {A59C7DBF-C994-5219-8DF3-96ED5C63E004}). */
export type StyleguideLayoutTabsIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs-Tab template (ID: {1B1A77FA-F358-5208-935F-D70744C4DA09}). */
export type StyleguideLayoutTabsTab = Item & {
  __typename?: 'StyleguideLayoutTabsTab';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** content (ID: {7D377783-E3E9-56DD-815F-ECCE67755E26}). */
  content?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  /** title (ID: {DE6B707F-36CD-5667-92A8-6AFD58008C89}). */
  title?: Maybe<TextField>;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs-Tab template (ID: {1B1A77FA-F358-5208-935F-D70744C4DA09}). */
export type StyleguideLayoutTabsTabAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs-Tab template (ID: {1B1A77FA-F358-5208-935F-D70744C4DA09}). */
export type StyleguideLayoutTabsTabChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs-Tab template (ID: {1B1A77FA-F358-5208-935F-D70744C4DA09}). */
export type StyleguideLayoutTabsTabFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs-Tab template (ID: {1B1A77FA-F358-5208-935F-D70744C4DA09}). */
export type StyleguideLayoutTabsTabFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs-Tab template (ID: {1B1A77FA-F358-5208-935F-D70744C4DA09}). */
export type StyleguideLayoutTabsTabHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Layout-Tabs-Tab template (ID: {1B1A77FA-F358-5208-935F-D70744C4DA09}). */
export type StyleguideLayoutTabsTabIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Multilingual template (ID: {419DC164-AD7F-51F3-AFA1-1E9DA4B8299D}). */
export type StyleguideMultilingual = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideMultilingual';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  /** This field has a translated value (ID: {481AC9E3-B466-5FDB-B5F6-C77D75379F71}). */
  sample?: Maybe<TextField>;
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Multilingual template (ID: {419DC164-AD7F-51F3-AFA1-1E9DA4B8299D}). */
export type StyleguideMultilingualAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Multilingual template (ID: {419DC164-AD7F-51F3-AFA1-1E9DA4B8299D}). */
export type StyleguideMultilingualChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Multilingual template (ID: {419DC164-AD7F-51F3-AFA1-1E9DA4B8299D}). */
export type StyleguideMultilingualFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Multilingual template (ID: {419DC164-AD7F-51F3-AFA1-1E9DA4B8299D}). */
export type StyleguideMultilingualFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Multilingual template (ID: {419DC164-AD7F-51F3-AFA1-1E9DA4B8299D}). */
export type StyleguideMultilingualHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Multilingual template (ID: {419DC164-AD7F-51F3-AFA1-1E9DA4B8299D}). */
export type StyleguideMultilingualIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-RouteFields template (ID: {8841AAA8-6806-5E86-A707-81E7968221C0}). */
export type StyleguideRouteFields = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideRouteFields';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-RouteFields template (ID: {8841AAA8-6806-5E86-A707-81E7968221C0}). */
export type StyleguideRouteFieldsAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-RouteFields template (ID: {8841AAA8-6806-5E86-A707-81E7968221C0}). */
export type StyleguideRouteFieldsChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-RouteFields template (ID: {8841AAA8-6806-5E86-A707-81E7968221C0}). */
export type StyleguideRouteFieldsFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-RouteFields template (ID: {8841AAA8-6806-5E86-A707-81E7968221C0}). */
export type StyleguideRouteFieldsFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-RouteFields template (ID: {8841AAA8-6806-5E86-A707-81E7968221C0}). */
export type StyleguideRouteFieldsHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-RouteFields template (ID: {8841AAA8-6806-5E86-A707-81E7968221C0}). */
export type StyleguideRouteFieldsIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Section template (ID: {FCD762A0-7538-5809-AABC-0291467E570A}). */
export type StyleguideSection = Item & {
  __typename?: 'StyleguideSection';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {F1BD83F1-25E6-59D9-A764-42E58784927D}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Section template (ID: {FCD762A0-7538-5809-AABC-0291467E570A}). */
export type StyleguideSectionAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Section template (ID: {FCD762A0-7538-5809-AABC-0291467E570A}). */
export type StyleguideSectionChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Section template (ID: {FCD762A0-7538-5809-AABC-0291467E570A}). */
export type StyleguideSectionFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Section template (ID: {FCD762A0-7538-5809-AABC-0291467E570A}). */
export type StyleguideSectionFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Section template (ID: {FCD762A0-7538-5809-AABC-0291467E570A}). */
export type StyleguideSectionHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Section template (ID: {FCD762A0-7538-5809-AABC-0291467E570A}). */
export type StyleguideSectionIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-SitecoreContext template (ID: {0BE23A45-588E-556C-988B-66B2729220E6}). */
export type StyleguideSitecoreContext = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideSitecoreContext';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-SitecoreContext template (ID: {0BE23A45-588E-556C-988B-66B2729220E6}). */
export type StyleguideSitecoreContextAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-SitecoreContext template (ID: {0BE23A45-588E-556C-988B-66B2729220E6}). */
export type StyleguideSitecoreContextChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-SitecoreContext template (ID: {0BE23A45-588E-556C-988B-66B2729220E6}). */
export type StyleguideSitecoreContextFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-SitecoreContext template (ID: {0BE23A45-588E-556C-988B-66B2729220E6}). */
export type StyleguideSitecoreContextFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-SitecoreContext template (ID: {0BE23A45-588E-556C-988B-66B2729220E6}). */
export type StyleguideSitecoreContextHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-SitecoreContext template (ID: {0BE23A45-588E-556C-988B-66B2729220E6}). */
export type StyleguideSitecoreContextIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** /sitecore/templates/Project/JssNextWeb/Styleguide-Tracking template (ID: {C275104F-F117-5C93-BFB0-F62329BFDA3E}). */
export type StyleguideTracking = StyleguideExplanatoryComponent & Item & {
  __typename?: 'StyleguideTracking';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  /** description (ID: {B38510FF-8D88-5CD7-BA3F-2018315D6AB2}). */
  description?: Maybe<RichTextField>;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  /** heading (ID: {5A3019F4-0647-57BA-A3F6-05CEF639BE91}). */
  heading?: Maybe<TextField>;
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Tracking template (ID: {C275104F-F117-5C93-BFB0-F62329BFDA3E}). */
export type StyleguideTrackingAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Tracking template (ID: {C275104F-F117-5C93-BFB0-F62329BFDA3E}). */
export type StyleguideTrackingChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Tracking template (ID: {C275104F-F117-5C93-BFB0-F62329BFDA3E}). */
export type StyleguideTrackingFieldArgs = {
  name: Scalars['String'];
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Tracking template (ID: {C275104F-F117-5C93-BFB0-F62329BFDA3E}). */
export type StyleguideTrackingFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Tracking template (ID: {C275104F-F117-5C93-BFB0-F62329BFDA3E}). */
export type StyleguideTrackingHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** /sitecore/templates/Project/JssNextWeb/Styleguide-Tracking template (ID: {C275104F-F117-5C93-BFB0-F62329BFDA3E}). */
export type StyleguideTrackingIdArgs = {
  format?: Maybe<Scalars['String']>;
};

export type TextField = ItemField & {
  __typename?: 'TextField';
  definition?: Maybe<ItemTemplateField>;
  /** The GUID of this field. */
  id: Scalars['ID'];
  jsonValue: Scalars['JSON'];
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};


export type TextFieldIdArgs = {
  format?: Maybe<Scalars['String']>;
};

/** Represents a Sitecore item whose template is not included in the schema. If you receive results of this type, consider expanding your included templates. */
export type UnknownItem = Item & {
  __typename?: 'UnknownItem';
  ancestors: Array<Maybe<Item>>;
  children: ItemSearchResults;
  displayName?: Maybe<Scalars['String']>;
  field?: Maybe<ItemField>;
  fields: Array<Maybe<ItemField>>;
  hasChildren: Scalars['Boolean'];
  id: Scalars['ID'];
  itemUri: Scalars['String'];
  language: ItemLanguage;
  languages: Array<Maybe<Item>>;
  name: Scalars['String'];
  parent?: Maybe<Item>;
  path: Scalars['String'];
  rendered: Scalars['JSON'];
  template: ItemTemplate;
  url: ItemUrl;
  version: Scalars['Int'];
};


/** Represents a Sitecore item whose template is not included in the schema. If you receive results of this type, consider expanding your included templates. */
export type UnknownItemAncestorsArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Represents a Sitecore item whose template is not included in the schema. If you receive results of this type, consider expanding your included templates. */
export type UnknownItemChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
};


/** Represents a Sitecore item whose template is not included in the schema. If you receive results of this type, consider expanding your included templates. */
export type UnknownItemFieldArgs = {
  name: Scalars['String'];
};


/** Represents a Sitecore item whose template is not included in the schema. If you receive results of this type, consider expanding your included templates. */
export type UnknownItemFieldsArgs = {
  ownFields?: Maybe<Scalars['Boolean']>;
};


/** Represents a Sitecore item whose template is not included in the schema. If you receive results of this type, consider expanding your included templates. */
export type UnknownItemHasChildrenArgs = {
  hasLayout?: Maybe<Scalars['Boolean']>;
  includeTemplateIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** Represents a Sitecore item whose template is not included in the schema. If you receive results of this type, consider expanding your included templates. */
export type UnknownItemIdArgs = {
  format?: Maybe<Scalars['String']>;
};
