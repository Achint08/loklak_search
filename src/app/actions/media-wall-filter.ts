import { Action } from '@ngrx/store';
import { ApiResponseResult } from '../models/api-response';

export const ActionTypes = {
	WALL_PROFANITY_CHECK: '[Media Wall] Profanity Check',
	WALL_ACCOUNT_EXCLUSION: '[Media Wall] Account Exclusion',
	WALL_IMAGE_FILTER: '[Media Wall] Feeds with only Images'
};


export class WallProfanityFilterAction implements Action {
	type = ActionTypes.WALL_PROFANITY_CHECK;

	constructor(public payload: ApiResponseResult[]) { }
}

export class WallAccountExclusionFilterAction implements Action {
	type = ActionTypes.WALL_PROFANITY_CHECK;

	constructor(public payload: ApiResponseResult[]) { }
}

export class WallImagesFilterAction implements Action {
	type = ActionTypes.WALL_IMAGE_FILTER;

	constructor(public payload: ApiResponseResult[]) { }
}

export type Actions
= WallProfanityFilterAction
| WallAccountExclusionFilterAction
| WallImagesFilterAction;
