import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';

const TREE_STATES = gql`
  query treeStates {
    treeStates
  }
`;

const SET_TREE_STATE = gql`
  mutation setTreeState($treeClicked: Int!) {
    setTreeState(treeClicked: $treeClicked)
  }
`;

const App = () => {
    const [submitTreeClick] = useMutation(SET_TREE_STATE);
    const [treeClicked, setTreeClicked] = useState(0);

    const handleClick = (treeNumber) => {
        submitTreeClick({ variables: { treeClicked: treeNumber } })
            .then(() => {
                console.log('Request sent successfully!');
            })
            .catch((error) => {
                console.error('An error occurred while sending the request:', error);
            });
    };

    return (
        <div className="container">
            <img
                src={require('./20231107_083307~3.jpg')}
                alt="8 Trees"
                style={{ cursor: 'pointer' }}
                useMap="#image-map"
            />
            <map name="image-map">
                <area target="" alt="Fence 1" title="Fence 1" onClick={(event) => {
                    const treeNumber = 1;
                    setTreeClicked(treeNumber);
                    handleClick(treeNumber);
                }} coords="4,325,255,312,254,336,2,366,3,345" shape="poly" />
                <area target="" alt="Fence 2" title="Fence 2" onClick={(event) => {
                    const treeNumber = 2;
                    setTreeClicked(treeNumber);
                    handleClick(treeNumber);
                }} coords="901,291,901,336,1015,349,1016,290" shape="poly" />
                <area target="" alt="Tree 1" title="Tree 1" onClick={(event) => {
                    const treeNumber = 3;
                    setTreeClicked(treeNumber);
                    handleClick(treeNumber);
                }} coords="268,341,266,230,277,230,286,338" shape="poly" />
                <area target="" alt="Tree 2" title="Tree 2" onClick={(event) => {
                    const treeNumber = 4;
                    setTreeClicked(treeNumber);
                    handleClick(treeNumber);
                }} coords="339,339,322,232,356,231,351,339" shape="poly" />
                <area target="" alt="Tree 3" title="Tree 3" onClick={(event) => {
                    const treeNumber = 5;
                    setTreeClicked(treeNumber);
                    handleClick(treeNumber);
                }} coords="400,324,413,232,426,231,422,327" shape="poly" />
                <area target="" alt="Tree 4" title="Tree 4" onClick={(event) => {
                    const treeNumber = 6;
                    setTreeClicked(treeNumber);
                    handleClick(treeNumber);
                }} coords="461,339,462,234,471,234,477,338" shape="poly" />
                <area target="" alt="Tree 5" title="Tree 5" onClick={(event) => {
                    const treeNumber = 7;
                    setTreeClicked(treeNumber);
                    handleClick(treeNumber);
                }} coords="552,342,552,234,564,234,569,340" shape="poly" />
                <area target="" alt="Tree 6" title="Tree 6" onClick={(event) => {
                    const treeNumber = 8;
                    setTreeClicked(treeNumber);
                    handleClick(treeNumber);
                }} coords="622,321,620,241,627,240,638,320" shape="poly" />
                <area target="" alt="Tree 8" title="Tree 8" onClick={(event) => {
                    const treeNumber = 9;
                    setTreeClicked(treeNumber);
                    handleClick(treeNumber);
                }} coords="815,335,823,226,845,226,858,333" shape="poly" />
                <area target="" alt="Tree 7" title="Tree 7" onClick={(event) => {
                    const treeNumber = 10;
                    setTreeClicked(treeNumber);
                    handleClick(treeNumber);
                }} coords="717,331,711,277,719,277,727,328" shape="poly" />
            </map>
            <div>
                <p>trees</p>
                <DisplayTreeStates />
            </div >
        </div>
    );
};

function DisplayTreeStates() {
    const { loading, error, data } = useQuery(TREE_STATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return JSON.stringify(data.treeStates);
}

export default App;