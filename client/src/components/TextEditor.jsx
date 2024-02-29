import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { saveNewsContentsImage } from "../actions/admin";

export default function TextEditor({ handleEditorData, news, language}){

    function uploadAdapter(loader) {
        return {
          upload: () => {
            return new Promise((resolve, reject) => {
              const formData = new FormData();
              loader.file.then((file) => {
                formData.append("image", file);
                saveNewsContentsImage(formData)
                  .then((res) => {
                    resolve({
                      default: `${res.filePath}`
                    });
                  })
                  .catch((err) => {
                    reject(err);
                  });
              });
            });
          }
        };
    }
    
    function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return uploadAdapter(loader);
    };
    }

    return(
        <>
            <CKEditor
                config={{
                    extraPlugins: [uploadPlugin],       
                    image: {
                        toolbar: [
                            'toggleImageCaption',
                            'imageTextAlternative',
                            '|',
                            'imageStyle:inline',
                            'imageStyle:block',
                            'imageStyle:alignLeft',
                            'imageStyle:alignRight'
                        ]
                    }           
                }}
                editor={ ClassicEditor }
                data={news.contents[language]}
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    handleEditorData(data, language);
                } }
            />
        </>
    )
}