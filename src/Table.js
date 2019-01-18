import React, { Component } from 'react';


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = () => {
    return (
        <tbody>

        </tbody>
    );
}

export default class Table extends Component {
    render() {
        const { charactersData } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody charactersData={charactersData} />

            </table>
        );
    }
}

