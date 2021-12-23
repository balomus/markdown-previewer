import { marked } from "marked";

const Preview = (props) => {
    const render = (text) => {
        return marked.parse(text);
    }

    return ( 
        <div id="preview">
            <h2 className="center-text title">Preview</h2>
            <div dangerouslySetInnerHTML={{ __html: render(props.data)}}></div>
        </div>
     );
}
 
export default Preview;