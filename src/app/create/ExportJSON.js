import React from 'react';

const ExportJSON = ({ data }) => {
  const handleExportJSON = () => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pollData.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button onClick={handleExportJSON}>Export JSON</button>
  );
};

export default ExportJSON;
