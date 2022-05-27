import React from 'react';
import TableBody from './tablebody';
import TableHeader from './tableheader';


const Table = (props: any) => {
    const {columns, data} = props
    return (
        <table className="table">
            <TableHeader 
                    columns={columns} />
            <TableBody data={data} columns={columns}/>
        </table>
    )
}

export default Table;