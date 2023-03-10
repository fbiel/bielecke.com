const headers = {
  accept: 'application/json',
  Authorization: 'Bearer ' + import.meta.env.VITE_BEARER
}
export type color = 'dark' | 'gray' | 'red' | 'pink' | 'grape' | 'violet' | 'indigo' | 'blue' | 'cyan' | 'green' | 'lime' | 'yellow' | 'orange' | 'teal' | (string & {});
type Status = "In Anfrage" | "Neu" | "Konzept" | "In Bearbeitung" | "Geliefert" | "Abgeschlossen"
type Language =
  | "markup"
  | "bash"
  | "clike"
  | "c"
  | "cpp"
  | "css"
  | "javascript"
  | "jsx"
  | "coffeescript"
  | "actionscript"
  | "css-extr"
  | "diff"
  | "git"
  | "go"
  | "graphql"
  | "handlebars"
  | "json"
  | "less"
  | "makefile"
  | "markdown"
  | "objectivec"
  | "ocaml"
  | "python"
  | "reason"
  | "sass"
  | "scss"
  | "sql"
  | "stylus"
  | "tsx"
  | "typescript"
  | "wasm"
  | "yaml";
export const colorForStatus = (status: Status): color => {
  switch (status) {
    case "In Anfrage": return "orange"
    case "Neu": return "yellow"
    case "Konzept": return "grape"
    case "In Bearbeitung": return "blue"
    case "Geliefert": return "teal"
    case "Abgeschlossen": return "green"
    default: return "gray"
  }
}

export interface Meta {
  pagination: { page: number; pageSize: number; pageCount: number; total: number }
}
export interface AuthorResponseItem {
  id: number
  attributes: {
    name?: string
    position?: string
    order?: number
    bio?: string
    thumbnail?: MediaItem
  }
}

export interface ListAuthorsResponse {
  data: AuthorResponseItem[]
  meta: Meta
}

export interface MediaItemFormat {
  name: string
  hash: string
  ext: string
  mime: string
  path: string
  width: number
  height: number
  size: number
  url: string
}
type MediaItemFormats = { thumbnail: MediaItemFormat, small: MediaItemFormat, medium: MediaItemFormat, large: MediaItemFormat }
export interface MediaItem {
  data: {
    id?: number;
    attributes?: {
      name?: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      hash?: string;
      ext?: string;
      mime?: string;
      size?: number;
      url?: string;
      previewUrl?: string;
      formats?: MediaItemFormats
    };
  }
}

export interface ContentFragment {
  id?: number;
  __component?: string;
}
export interface ContentComponentsImage extends ContentFragment {
  image?: MediaItem
  caption?: string;
  renderSize?: "small" | "medium" | "large";
}
export interface ContentFragmentsParagraph extends ContentFragment {
  title?: string;
  content?: string;
  highlight?: boolean;
}
export interface ContentFragmentsImageParagraph extends ContentFragment {
  title?: string;
  content?: string;
  highlight?: boolean;
  image?: MediaItem;
  renderSize?: "small" | "medium" | "large";
  caption?: string;
}
export interface ContentFragmentsQuote extends ContentFragment {
  author?: string;
  quote?: string;
}



export interface ContentFragmentsCodeblock extends ContentFragment {
  lang?: Language;
  caption?: string;
  code?: string;
}
export interface ContentFragmentsIlluminatingSection extends ContentFragment {
  title?: string;
  topic?: string;
  description?: string;
  icon?: string;
  color?: color;
  gradientColor?: color;
}

export interface ContentFragmentsDidYouKnow extends ContentFragment {
  title?: string;
  text?: string;
  icon?: string
  color?: string;
  source?: string;
}

export interface ContentFragmentsFeatureCard extends ContentFragment {
  text?: string;
  link?: string;
  linkLabel?: string;
  image?: MediaItem
}

export interface ContentFragmentsSplitCard extends ContentFragment {
  items?: ContentFragmentsFeatureCard[]
}

export interface ContentFragmentsSeparator extends ContentFragment {
  icon?: string
  color?: string
}


export interface SkillListResponse {
  data?: SkillListResponseDataItem[];
  meta?: { pagination?: { page?: number; pageSize?: number; pageCount?: number; total?: number } };
}
export interface Technology {
  id?: number;
  attributes?: {
    name?: string;
    level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
    certification?: string;
    keywords?: string;
    highlight?: boolean;
    description?: string;
  };
}
export interface Skill {
  title?: string;
  description?: string;
  icon?: MediaItem
  relevance?: number;
  technologies?: {
    data?: Technology[];
  };
};
export interface SkillListResponseDataItem {
  id?: number;
  attributes?: Skill
}
export interface DepartmentResponseItem {
  id: number;
  attributes: {
    name: string;
    catchphrase: string;
    cover: MediaItem;
    hidden: boolean;
    icon: MediaItem;
    body?: (
      ContentFragmentsCodeblock
      | ContentComponentsImage
      | ContentFragmentsParagraph
      | ContentFragmentsQuote
      | ContentFragmentsIlluminatingSection
      | ContentFragmentsDidYouKnow
      | ContentFragmentsFeatureCard
      | ContentFragmentsSplitCard
    )[];
    tags: string;
    color: color;
    skills?: SkillListResponse;
    projects?: ListArticleResponse
    route: string;
    createdAt: string;
    updatedAt: string;
    createdBy: { data?: { id?: number; attributes?: object } };
    updatedBy: { data?: { id?: number; attributes?: object } };
    locale: string;
  };
}

export interface DepartmentListResponse {
  data: DepartmentResponseItem[];
  meta: Meta;
}
export interface ArticleCollectionItem {
  id: number;
  attributes: {
    name: string;
    description: string;
    blogs: {
      data: {
        id: number
        attributes: ListArticleResponseItem
      }[]
    }
  }
}
export interface ListArticleResponseItem {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  author?: { data: AuthorResponseItem }
  departments?: { data: Array<DepartmentResponseItem> }
  cover: MediaItem;
  tags: string;
  locale: string;
  status?: Status;
  hours?: number;
  article_collection?: { data: ArticleCollectionItem };
  content?: (
    ContentFragmentsCodeblock
    | ContentComponentsImage
    | ContentFragmentsParagraph
    | ContentFragmentsQuote
    | ContentFragmentsIlluminatingSection
    | ContentFragmentsDidYouKnow
    | ContentFragmentsFeatureCard
    | ContentFragmentsSplitCard
  )[];
}

export interface ListArticleResponse {
  data: {
    id: number
    attributes: ListArticleResponseItem
  }[]
  meta: Meta;
}

export interface ReferenceResponseItem {
  companyName: string;
  link: string;
  logo?: MediaItem;
}
export interface ListReferencesResponse {
  data: {
    id: number
    attributes: ReferenceResponseItem
  }[];
  meta: Meta;
}



type PopulateArticleWith = "departments" | "content" | "author" | "cover" | "technologies"
export type CollectionQueryType = "projects" | "blogs"
export const queryArticles = async (queryType: CollectionQueryType, populate: Array<PopulateArticleWith> = ["author", "content", "cover", "departments", "technologies"], locale: string = "de", department: string | undefined = undefined) => {

  let queryUrl = `${import.meta.env.VITE_CMS}/api/${queryType}?locale=${locale}&populate[0]=${populate.join("%2C")}`
  if (populate.includes("author")) {
    queryUrl += "&populate[1]=author.thumbnail"
  }
  if (department) {
    const departmentReq = await fetch(`${import.meta.env.VITE_CMS}/api/departments?locale=${locale}&filters[name][$eqi]=${department}`, {
      method: 'GET', headers
    })
    const departmentRes = await departmentReq.json()
    if (departmentRes.data.length !== 0) {
      const departmentId = departmentRes.data[0].id
      queryUrl += `?filters[${department}`
    }

  }
  const request = await fetch(queryUrl, {
    method: 'GET',
    headers
  })
  const data = await request.json()
  const casted = data as ListArticleResponse
  return casted
}

export const getArticleEntry = async (queryType: CollectionQueryType, id: string, locale: string = "de") => {
  const queryUrl = `${import.meta.env.VITE_CMS}/api/${queryType}/${id}?locale=${locale}&populate[0]=author,cover,departments,technologies,content,article_collection&populate[1]=content.image,author.thumbnail,article_collection.blogs&populate[2]=content.image.image`
  const request = await fetch(queryUrl, {
    method: 'GET',
    headers
  })
  const response = await request.json() as { data: { attributes: ListArticleResponseItem } }
  return response.data.attributes
}

export const getProject = async (id: string, locale: string = "de") => {
  return await getArticleEntry("projects", id, locale)
}

export const getBlog = async (id: string, locale: string = "de") => {
  return await getArticleEntry("blogs", id, locale)
}


type PopulateDepartmentWith = "body" | "skills" | "cover" | "icon" | "blogs" | "projects"
export const getDepartments = async (populate: Array<PopulateDepartmentWith> = ["cover", "icon"], locale: string = "de") => {
  const populateParams = populate.length > 0 ? `&populate=${populate.join("%2C")}` : ""
  const queryUrl = `${import.meta.env.VITE_CMS}/api/departments?locale=${locale}${populateParams}`
  const request = await fetch(queryUrl, {
    method: 'GET', headers
  })
  const response = await request.json() as DepartmentListResponse
  return response.data
}

export const getDepartment = async (id: string) => {
  const queryUrl = `${import.meta.env.VITE_CMS}/api/departments/${id}?populate[0]=cover,icon&populate[1]=blogs,projects,body`
  const request = await fetch(queryUrl, {
    method: 'GET', headers
  })
  const response = await request.json() as { data: { attributes: DepartmentResponseItem } }
  return response.data.attributes
}

export const getAuthors = async (locale: string = "de") => {
  const queryUrl = `${import.meta.env.VITE_CMS}/api/authors?locale=${locale}&populate[0]=thumbnail`
  const request = await fetch(queryUrl, {
    method: 'GET', headers
  })
  const response = await request.json() as ListAuthorsResponse
  return response
}

export const getDepartmentByRoute = async (route: string, locale: string = "de") => {
  const queryUrl = `${import.meta.env.VITE_CMS}/api/departments?locale=${locale}&populate[0]=cover,skills,icon,projects&populate[1]=skills.technologies,skills.icon,projects.author,projects.cover,projects.departments&populate[2]=body.image,projects.author.thumbnail,body.items&filters[route][$eqi]=${route}`
  const request = await fetch(queryUrl, {
    method: 'GET', headers
  })
  const response = await request.json() as DepartmentListResponse
  if (response.data.length !== 0) return response.data[0]
  return undefined
}

export const getArticleCollection = async (series: string, locale: string = "de") => {
  const queryUrl = `${import.meta.env.VITE_CMS}/api/blogs?locale=${locale}&filters[series][$eqi]=${series}`
  const request = await fetch(queryUrl, {
    method: 'GET', headers
  })
  const response = await request.json() as ListArticleResponse
  return response.data
}

export const getReferences = async () => {
  const queryUrl = `${import.meta.env.VITE_CMS}/api/references?populate[0]=logo`
  const request = await fetch(queryUrl, {
    method: 'GET', headers
  })
  const response = await request.json() as ListReferencesResponse
  return response
}

export const getSkills = async (locale: string = "de") => {
  const queryUrl = `${import.meta.env.VITE_CMS}/api/skills?locale=${locale}&populate[0]=icon,technologies`
  const request = await fetch(queryUrl, {
    method: 'GET', headers
  })
  const response = await request.json() as SkillListResponse
  return response
}

export const parseLevel = (level: "Beginner" | "Intermediate" | "Advanced" | "Expert" | undefined) => {
  switch (level) {
    case "Beginner":
      return 1;
    case "Intermediate":
      return 2;
    case "Advanced":
      return 3;
    case "Expert":
      return 4;
    default:
      return 0;
  }
}