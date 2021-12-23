const Editor = ({data, setData}) => {
    const handleChange = (e) => {
        setData(e.target.value);
    }

    return ( 
        <div id="editor">
            <h2 className="title">Editor</h2>
            <div className="editor-window">
                <textarea value={data} onChange={handleChange}></textarea>
            </div>
        </div>
    );
}
 
export default Editor;