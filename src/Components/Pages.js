const Pages = (props) => {
const {page, totalPages, onForward, onBackward} = props;
return(
    <div className="pages-container">
    <button onClick={onBackward} disabled={page === 1}>Backward</button>
    <div>{page} of {totalPages}</div>
    <button onClick={onForward} disabled={page===totalPages}>Forward</button>
    </div>
)
}
export default Pages;