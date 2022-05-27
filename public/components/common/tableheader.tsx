import React from 'react';

interface TableHeaderProps {
    columns : {path? : string, label? : string}[],
}
 
class TableHeader extends React.Component<TableHeaderProps> {
    render() { 
        const {columns} = this.props;
        return (
            <thead>
                <tr>
                    {columns.map(c => <th key={c.path}>{c.label}</th>)}
                </tr>
            </thead>
        );
    }
}
 
export default TableHeader;