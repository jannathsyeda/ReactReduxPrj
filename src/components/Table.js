import React from 'react';

const Table = (col,DummyData) => {
    console.log(col,DummyData);
    
    return (
        <div>
            <table class="table">
  <thead>
      {/* {
      col.map((c)=>(
    <tr>
      <th scope="col">{c.id}</th>
      <th scope="col">{c.name}</th>
      <th scope="col">{c.age}</th>
    
    </tr>
      ))} */}
  </thead>
  <tbody>
      {DummyData.map((d)=>(
    <tr>
      <th scope="row">{d.id}</th>
      <td>{d.name}</td>
      <td>{d.age}</td>
     
    </tr>
      ))}
  
  </tbody>
</table>
            
        </div>
    );
};

export default Table;