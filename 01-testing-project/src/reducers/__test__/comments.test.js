import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

const NEW_COMMENT = 'New Comment';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type : SAVE_COMMENT,
        payload : NEW_COMMENT
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual([NEW_COMMENT]);
});

it('handles action with unknown type', () => {
    const newState = commentsReducer([], { type : 'unknown' });
    expect(newState).toEqual([]);
});