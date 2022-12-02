import { Dispatch, FunctionComponent, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropZone: FunctionComponent<{ setFile: Dispatch<any> }> = ({
  setFile,
}) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div>
          <p>Drag and drop files here</p>
        </div>
      </div>
    </div>
  );
};

export default DropZone;
