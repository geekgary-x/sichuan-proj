import ReactList from 'react-list';
import React from 'react';

import "./DataList.css"

export default function DataList(props) {
    const getHeight = index => 30 + 10 * (index % 10);

    const renderVariableHeightItem = (index, key) => (
        <div
            key={key}
            className={'item' + (index % 2 ? '' : ' even')}
            style={{ lineHeight: `${getHeight(index)}px` }}
            onClick={()=>props.handleClick(key)}
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