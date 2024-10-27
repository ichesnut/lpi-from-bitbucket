import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const SUBMIT_TREE_CLICK = gql`
  mutation SubmitTreeClick($treeClicked: Int!) {
    submitTreeClick(treeClicked: $treeClicked) {
      success
    }
  }
`;

const App = () => {
    const [submitTreeClick] = useMutation(SUBMIT_TREE_CLICK);
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
                src="trees.png"
                alt="8 Trees"
                style={{ width: '400px', cursor: 'pointer' }}
                onClick={(event) => {
                    const bounds = event.target.getBoundingClientRect();
                    const x = event.clientX - bounds.left;
                    const y = event.clientY - bounds.top;
                    const treeNumber = getTreeClicked(x, y);
                    setTreeClicked(treeNumber);
                    handleClick(treeNumber);
                }}
            />
            <div>Clicked Tree: {treeClicked}</div>
        </div>
    );
};

const getTreeClicked = (x, y) => {
    // Implement your logic to identify the tree based on the X and Y coordinates

    // For example, if the trees are evenly spaced in a grid layout:
    const treeWidth = 50; // adjust as necessary
    const treeHeight = 50; // adjust as necessary
    const treeColumns = 2;

    const clickedColumn = Math.floor(x / treeWidth);
    const clickedRow = Math.floor(y / treeHeight);
    const treeNumber = 1 + (clickedRow * treeColumns) + clickedColumn;

    return treeNumber;
};

export default App;