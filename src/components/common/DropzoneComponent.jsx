import { CloudUploadRounded } from "@mui/icons-material";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { useDropzone } from "react-dropzone";

const DropzoneComponent = ({ setfrontFile, setbackFile, uploadFor }) => {
  const baseStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    transition: "border .3s ease-in-out",
  };

  const activeStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    // setFiles(
    //   acceptedFiles.map((file) =>
    //     Object.assign(file, {
    //       preview: URL.createObjectURL(file),
    //     })
    //   )
    //   );
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        setFiles(
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        try {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "g1000-kyc-upload");
          data.append("cloud_name", "gg-concepts-ltd");

          const upload = async () => {
            setLoading(true);
            fetch(
              "https://api.cloudinary.com/v1_1/gg-concepts-ltd/image/upload",
              {
                method: "post",
                body: data,
              }
            )
              .then((res) => res.json())
              .then((data) => {
                // console.log(data);
                uploadFor === "front" && setfrontFile(data.url.toString());
                uploadFor === "back" && setbackFile(data.url.toString());
                setLoading(false);
                //    setFileUrl(data.url.toString());
              });
          };
          upload();
        } catch (error) {
          setLoading(false);
          console.log("Error uploading file: ", error);
        }
      };
      reader.readAsArrayBuffer(file);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
    multiple: false,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <section class="text-center">
      <div {...getRootProps({ style })}>
        {/* <aside>{thumbs}</aside> */}
        <img
          class="avatar avatar-xl avatar-4x3 mb-3"
          src={files.preview}
          alt={files.name}
        />
        <input {...getInputProps()} accept=".png, .jpg, .jpeg" />
        {loading ? (
          <span>"Uploading..."</span>
        ) : (
          <span>{isDragActive ? "..." : <CloudUploadRounded />}</span>
        )}

        {/* <span>{isDragActive ? <CloudUploadRounded /> : "📂"}</span> */}

        <div>Drag and drop your image here, or click to select file</div>
      </div>
    </section>
  );
};
export default DropzoneComponent;
