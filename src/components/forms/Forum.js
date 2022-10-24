import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function Forum({ name, onClick }) {
  const editorRef = useRef(null);

  const action = () => {
    if (editorRef.current) {
      onClick(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <div className="container-fluid">
        <button className="btn btn-success mx-auto" onClick={action}>
          {name}
        </button>
      </div>
    </>
  );
}
