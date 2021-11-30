import React from 'react';
import List from './List';

const Home = () => {
    const userList=[{ 
        id:1,
        name:'test'
    }]
    return (
        <div className="Container">
            <table  class="table">
            <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
                <tbody>
                    {
                        userList.map((userData)=>
                        (
                            <List user={userData} key={userData.id} />
                        )

                        )
                    }
                </tbody>
            </table>

            
        </div>
    );
};

export default Home;