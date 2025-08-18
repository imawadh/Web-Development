function TodoItems({todoName,todoDate}){
    return<>
       
        <div className="row m-2">
            <div className="col-4">
                {todoName}
            </div>
            <div className="col-6">
                {todoDate}
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-danger w-100">Delete</button>
            </div>
        </div>
    </>

}

export default TodoItems;