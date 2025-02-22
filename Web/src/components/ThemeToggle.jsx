import React from 'react';
import styled from '@emotion/styled';

const ToggleButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) =>
    props.isDark ? "hsl(0, 0%, 100%)" : "hsl(220, 13%, 13%)"};

    &:hover {
    color: hsl(26, 100%, 55%);
    }
`;

const ThemeToggle = ({ isDark, toggleTheme }) => {
    return (
        <ToggleButton onClick={toggleTheme} isDark={isDark}>
            {isDark ? '☀️' : '🌙'}
        </ToggleButton>
    );
};

export default ThemeToggle;
