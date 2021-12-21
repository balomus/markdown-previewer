const Editor = ({data, setData}) => {
    const handleChange = (e) => {
        setData(e.target.value);
    }

    return ( 
        <div id="editor">
            <h2>Editor</h2>
            <textarea value={data} onChange={handleChange}></textarea>
        </div>
     );
}
 
export default Editor;