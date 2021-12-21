import { marked } from "marked";
import { useEffect } from "react";

const Preview = (props) => {
    const codeString = '(num) => num + 1';

    const render = (text) => {
        return marked.parse(text);
    }

    useEffect(() => {
        //console.log("useEffect ran");
    }, []);

    return ( 
        <div className="preview">
            <h2>Preview</h2>
            <div dangerouslySetInnerHTML={{ __html: render(props.data)}}></div>
        </div>
     );
}
 
export default Preview;