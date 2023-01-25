import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ITagsFilter, optionsTags, searchParams } from '@models/ITagsFilter.interface';
import { NewsService } from '@services/news-service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-advanced-search',
    templateUrl: './advanced-search.component.html',
    styleUrls: ['./advanced-search.component.scss'],
})
export class AdvancedSearchComponent implements OnInit {
    filteredOptions$: Observable<ITagsFilter[]>;
    optionsListTags: ITagsFilter[] = optionsTags;
    searchParamsFilter: string[] = searchParams;
    private _defaultTag = this._filter('front_page');

    searchForm = this._formBuilder.group({
        tagsControl: [this._defaultTag],
        searchParamControl: [this.searchParamsFilter[0]],
    });

    constructor(public _newsService: NewsService, private _formBuilder: FormBuilder) {
        this.filteredOptions$ = this.searchForm.controls.tagsControl.valueChanges.pipe(
            startWith(''),
            map((value: any) => {
                const name = typeof value === 'string' ? value : value?.name;
                return name ? this._filter(name as string) : this.optionsListTags.slice();
            }),
        );
    }

    ngOnInit() {}

    private _displayFn(tag: ITagsFilter): string {
        return tag && tag.name ? tag.name : '';
    }

    private _filter(tag: string): ITagsFilter[] {
        const filterValue = tag.toLowerCase();
        return this.optionsListTags.filter((option) => option.name.toLowerCase().includes(filterValue));
    }

    onSearch() {
        const tagsValue = this.searchForm.get('tagsControl')?.value;
        const tagsList: string[] | undefined = tagsValue?.map(this._displayFn)!;
        const searchParam: string | null | undefined = this.searchForm.get('searchParamControl')?.value || '';
        this._newsService.prepareUrl(searchParam, tagsList);
    }
}
