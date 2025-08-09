import React, { useCallback, useState } from 'react';

export default function Dropzone() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileSize, setFileSize] = useState<number | null>(null);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setFileName(file.name);
      setFileSize(file.size);
    }
  }, []);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFileSize(file.size);
    }
  }

  return (
    <div>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="card"
        style={{ textAlign: 'center', padding: 24 }}
      >
        <p className="card-title">Slipp original .bin her</p>
        <p className="card-subtitle">Ingen opplasting — kun klientvisning</p>
        <input id="file" type="file" accept=".bin" onChange={onChange} style={{ display: 'none' }} />
        <label htmlFor="file" className="btn">Velg fil</label>
        {fileName && (
          <div style={{ marginTop: 12 }}>
            <span className="badge">{fileName}</span>
            {typeof fileSize === 'number' && <span className="badge">{(fileSize / 1024).toFixed(1)} KB</span>}
          </div>
        )}
      </div>
    </div>
  );
}