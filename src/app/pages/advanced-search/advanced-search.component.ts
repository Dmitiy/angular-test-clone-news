import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface ITagsFilter {
	name: string
}

@Component({
	selector: 'app-advanced-search',
	standalone: true,
	imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
	templateUrl: './advanced-search.component.html',
	styleUrls: ['./advanced-search.component.scss'],
})
export class AdvancedSearchComponent implements OnInit {
	myControl = new FormControl<string | ITagsFilter>('');
	optionsTags: ITagsFilter[] = [
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

	filteredOptions$: Observable<ITagsFilter[]>;

	toppings = new FormControl('');
	toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

	constructor() {
		this.filteredOptions$ = this.myControl.valueChanges.pipe(
			startWith(''),
			map((value) => {
				const name = typeof value === 'string' ? value : value?.name;
				return name ? this._filter(name as string) : this.optionsTags.slice();
			}),
		);
	}

	ngOnInit() { }

	displayFn(tag: ITagsFilter): string {
		return tag && tag.name ? tag.name : '';
	}

	private _filter(tag: string): ITagsFilter[] {
		const filterValue = tag.toLowerCase();

		return this.optionsTags.filter((option) => option.name.toLowerCase().includes(filterValue));
	}
}
