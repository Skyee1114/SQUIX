import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function ContentsReader({ news, language }){

    return(
        <>
            <CKEditor       
                onReady={(editor) => {
                    const loadingLock = Symbol();
                    editor.enableReadOnlyMode( loadingLock );
                    
                    const editableElement = editor.ui.view.editable.element;
                    editableElement.style.border = 'none';
                    
                    const toolbarElement = editor.ui.view.toolbar.element;
                    toolbarElement.style.display = 'none';                   

                }}
                editor={ ClassicEditor }
                data={news.contents[language]}
            />
        </>
    )
}