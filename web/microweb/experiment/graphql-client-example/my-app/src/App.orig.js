// Import everything needed to use the `useQuery` hook
import { useQuery, gql, useMutation } from '@apollo/client';
import { useState } from 'react';

export default function App() {
    return (
        <div>

            <h2>My first Apollo app 🚀</h2>
            <br />
            <DisplayImageMap />
            <img src={require('./20231107_083307~3.jpg')} useMap="#image-map" alt="sometext" />
            <br />
            <DisplayChannels />
        </div >
    );
}

const GET_CHANNELS = gql`
  query GetChannels {
    channels {
        state
        number
      }
  }
`;

const SET_CHANNELS = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

function DisplayImageMap() {
    const [treeIndex, setTreeIndex] = useState(-1);
    const [addTodo, { data, loading, error }] = useMutation(SET_CHANNELS);

    const lightTree = (event) => {
        console.log(`Lighting tree number ${treeIndex} and value (${event})`);
        addTodo({
            "variables": {
                "id": "hello",
                "type": "world"
            }
        })
    };


    return <map name="image-map">
        <area target="" alt="Fence 1" title="Fence 1" onClick={() => { setTreeIndex("1"); lightTree("one") }} coords="4,325,255,312,254,336,2,366,3,345" shape="poly" />
        <area target="" alt="Fence 2" title="Fence 2" onClick={() => { setTreeIndex("1"); lightTree("one") }} coords="901,291,901,336,1015,349,1016,290" shape="poly" />
        <area target="" alt="Tree 1" title="Tree 1" onClick={() => { setTreeIndex("2"); lightTree("two") }} coords="268,341,266,230,277,230,286,338" shape="poly" />
        <area target="" alt="Tree 2" title="Tree 2" onClick={() => { setTreeIndex("3"); lightTree("three") }} coords="339,339,322,232,356,231,351,339" shape="poly" />
        <area target="" alt="Tree 3" title="Tree 3" onClick={() => { setTreeIndex("4"); lightTree("four") }} coords="400,324,413,232,426,231,422,327" shape="poly" />
        <area target="" alt="Tree 4" title="Tree 4" onClick={() => { setTreeIndex("5"); lightTree("five") }} coords="461,339,462,234,471,234,477,338" shape="poly" />
        <area target="" alt="Tree 5" title="Tree 5" onClick={() => { setTreeIndex("6"); lightTree("six") }} coords="552,342,552,234,564,234,569,340" shape="poly" />
        <area target="" alt="Tree 6" title="Tree 6" onClick={() => { setTreeIndex("7"); lightTree("seven") }} coords="622,321,620,241,627,240,638,320" shape="poly" />
        <area target="" alt="Tree 8" title="Tree 8" onClick={() => { setTreeIndex("9"); lightTree("nine") }} coords="815,335,823,226,845,226,858,333" shape="poly" />
        <area target="" alt="Tree 7" title="Tree 7" onClick={() => { setTreeIndex("8"); lightTree("eight") }} coords="717,331,711,277,719,277,727,328" shape="poly" />

    </map>

}

function DisplayChannels() {
    const { loading, error, data } = useQuery(GET_CHANNELS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.channels.map(({ state, number }) => (
        <div key={number}>
            <h3>Channel {number}</h3>
            <br />
            <b>About this channel:</b>
            <p>{state}</p>
            <p>{number}</p>
            <br />
        </div>
    ));
}