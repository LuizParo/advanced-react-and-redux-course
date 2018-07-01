import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

const NEW_COMMENT = 'New Comment';

it('handles actions of type SAVE_COMMENT', () => {
    const action = createAction(SAVE_COMMENT, NEW_COMMENT);
    const newState = commentsReducer([], action);

    expect(newState).toEqual([NEW_COMMENT]);
});

it('handles actions of type FETCH_COMMENTS', () => {
    const action = createAction(FETCH_COMMENTS, {
        data : [{ name : NEW_COMMENT }]
    });
    const newState = commentsReducer([], action);

    expect(newState).toEqual([NEW_COMMENT]);
});

it('handles action with unknown type', () => {
    const newState = commentsReducer([], { type : 'unknown' });
    expect(newState).toEqual([]);
});

function createAction(type, payload) {
    return {
        type,
        payload
    };
}