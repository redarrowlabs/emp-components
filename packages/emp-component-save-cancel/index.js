import React from 'react';

import { Button } from 'emp-component-button';

export function SaveCancel(props) {
    return <div>
        <div>{props.children}</div>
        <Button>Save</Button>
        <Button>Cancel</Button>
    </div>;
}