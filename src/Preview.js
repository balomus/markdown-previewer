import { marked } from "marked";

const Preview = (props) => {
    const render = (text) => {
        return marked.parse(text);
    }

    return ( 
        <div className="preview">
            <h2>Preview</h2>
            <div dangerouslySetInnerHTML={{ __html: render(props.data)}}></div>
        </div>
     );
}
 
export default Preview;