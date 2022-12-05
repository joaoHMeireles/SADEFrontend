import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function Dropzone() {
  const [files, setFile] = useState([]);

  const onDrop = useCallback((acceptedFiles: any) => {
    const file: [] = acceptedFiles.map((acceptedFiles: any) => ({
      acceptedFiles,
    }));
    setFile((curr) => [...curr, ...file]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop files here</p>
      </div>
      {JSON.stringify(files[0])}
    </>
  );
}
