import { Editor } from "@tinymce/tinymce-react"


const TextEditor = ({editorRef, handleChangeEditor, editorValue}) => {
    return (
        <div>
            <Editor
                apiKey={
                    "w17lpon88s3owkb87t8wnmyrb7dnvziqf3mrghzfk7ft8cpl"
                }
                onInit={(evt, editor) =>
                    (editorRef.current = editor)
                }
                onEditorChange={handleChangeEditor}
                // initialValue={editorValue}
                value={editorValue}
                init={{
                    height: 200,
                    menubar: false,
                    paste_data_images: true,
                    image_title: true,
                    automatic_uploads: true,
                    file_picker_types: "image",
                    plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                        "image",
                    ],
                    toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | link image | code",
                    content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }} />
        </div>
    )
}

export default TextEditor