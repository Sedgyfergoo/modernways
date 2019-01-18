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

const TableBody = props => {
    const { charactersData } = props;

    return (
        <tbody>
            {charactersData.map((character, index) => {
                return (
                    <tr key={index}>
                        <td>{character.name}</td>
                        <td>{character.job}</td>
                    </tr>
                )
            })}
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