function MakeAdmin() {


    return (
        <div class="overflow-x-auto" >
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>
                            <button  className='btn btn-sm btn-error'>Cancel</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div >

    );
}

export default MakeAdmin;