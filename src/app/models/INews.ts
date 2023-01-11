interface IHighlightItem {
  value: string
  matchLevel: string | null
  matchedWords: string[]
}
export interface INews {
  created_at: string | null
  title: string | null
  url: string | null
  author: string | null
  points: number | null
  strory_text: string | null
  comment_text: string | null
  num_comments: number | null
  story_id: number | null
  story_title: string | null
  story_url: string | null
  parent_id: number | null
  created_at_i: number | null

  _tags: string[]
  objectID: number
  _highlightResult: {
    title: IHighlightItem
    url: IHighlightItem
    author: IHighlightItem
  }
}
