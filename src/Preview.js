import { marked } from "marked";
import { useEffect } from "react";

const Preview = (props) => {
    const render = (text) => {
        return marked.parse(text);
    }

    useEffect(() => {
        console.log("useEffect ran");
        
    }, []);

    return ( 
        <div id="preview">
            <h2 className="center-text title">Preview</h2>
            <div dangerouslySetInnerHTML={{ __html: render(props.data)}}></div>
        </div>
     );
}
 
export default Preview;