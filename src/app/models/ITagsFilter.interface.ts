export interface ITagsFilter {
    name: string;
}

export const OPTIONS_TAGS: ITagsFilter[] = [
    { name: 'story' },
    { name: 'comment' },
    { name: 'poll' },
    { name: 'pollopt' },
    { name: 'show_hn' },
    { name: 'ask_hn' },
    { name: 'front_page' },
    { name: 'author_:USERNAME' },
    { name: 'story_:ID' },
];

export const SEARCH_PARAMS: string[] = ['search', 'search_by_date'];
export const HEADER_TAGS: string[] = ['new', 'past', 'comments', 'ask', 'show', 'jobs', 'submit'];
