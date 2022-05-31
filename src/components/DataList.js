import ReactList from 'react-list';
import React from 'react';

import "./DataList.css"

const getHeight = index => 30 + 10 * (index % 10);

const renderVariableHeightItem = (index, key) => (
    <div
        key={key}
        className={'item' + (index % 2 ? '' : ' even')}
        style={{ lineHeight: `${getHeight(index)}px` }}
    >
        {index}
    </div>
);

const examples = [
    {
        length: 10000,
        itemRenderer: renderVariableHeightItem
    },
];
export default function DataList() {

    function renderExamples() {
        return examples.map((props, key) => (
            <div key={key} className={`example axis-${props.axis}`}>
                <div className='component'>
                    <ReactList {...props} />
                </div>
            </div>
        ));
    }

    return (
        <div className='examples'>{renderExamples()}</div>
    );
}