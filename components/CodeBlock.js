import React from 'react';

const CodeBlock = ({ code }) => {
  return (
    <pre style={{
      backgroundColor: '#2D2D2D', 
      color: '#FFF', 
      padding: '20px', 
      borderRadius: '5px', 
      overflowX: 'auto', // Enable horizontal scrolling
      fontSize: '1.2vh', // Adjust font size relative to viewport width for better mobile scaling
      fontFamily: 'monospace',
      whiteSpace: 'pre',
      wordBreak: 'break-all',
      lineHeight: '1.5',
      maxWidth: '100vw', // Ensure it doesn't exceed the viewport width
    }}>
      <code style={{
        backgroundColor: 'transparent', 
        color: 'inherit',
      }}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
