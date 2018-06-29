import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped = {};

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
    const newComment = 'new comment';

    beforeEach(() => {
        typeNewComment(newComment);
    });

    it('has a textarea that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual(newComment);
    });
    
    it('when form is submitted, textearea gets emptied', () => {
        submitComment();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});

function typeNewComment(newComment) {
    wrapped.find('textarea').simulate('change', {
        target : {
            value : newComment
        }
    });

    // force the component update
    wrapped.update();
}

function submitComment() {
    wrapped.find('form').simulate('submit');
    wrapped.update();
}