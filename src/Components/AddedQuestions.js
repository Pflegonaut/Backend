import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
     background-color: ${props => props.theme.primaryColor};
     color: white;
`;

const AddedQuestions = () => {
    return (
        <Container>
            <p>Fragen hinzugefügt:</p>
            <p>12.</p>
        </Container>
    );
};

export default AddedQuestions;