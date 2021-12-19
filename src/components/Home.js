import React from 'react';
import List from './List';
import { useSelector } from 'react-redux';
// import Table from './table';

import DummyData from './DummyData';
import Table from './Table';
const Home = () => {
      const userList=useSelector((state)=>{
          return state.user.items
      })

    const col=
        {
        id:"id",
        name:"name",
        age:"age"
    }
    
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



  {!DummyData && <Table  col={col} DummyData={DummyData}/>}
            
        </div>
    );
};

export default Home;