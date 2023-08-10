
import useApi from '../../utils/useAPI';
import { useMemo } from 'react';


export default function StatsNBA() {

    const { loading, data } = useApi("https://www.balldontlie.io/api/v1/players");
    if(loading) return <h1>Loading...</h1>
    const playerData = data.data;

    return(
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {playerData.map((player) => {
                        return (
                            <tr key={player.id}>
                                <td>{player.first_name}</td>
                                <td>{player.last_name}</td>
                                <td>{`${player.height_feet}' ${player.height_inches}"`}</td>
                                <td>{player.weight_pounds}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    )
};
