
function AppTaskComponent(){

    return (
    <div class="row border border-3 border-dark p-3 ms-3 me-3">
        <div class="col-6">
            <input type="text" className="w-100" placeholder="Enter The Task :: "/>
        </div>
        <div class="col-4">
            <input type="date" className="w-100"/>
        </div>
        <div class="col-2">
            <button type="button" className="btn btn-success w-100">Add</button>
        </div>
    </div>
    );

}
export default AppTaskComponent;