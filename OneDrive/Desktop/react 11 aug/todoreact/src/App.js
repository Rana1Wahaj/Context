import React, { useState } from "react";
function App() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((value) => {
          if (value.id === isEditItem) {
            return { ...value, name: inputData };
          }
          return value;
        })
      );
      setInputData("");
      setToggleSubmit(true);
      setIsEditItem(null);
    } else {
      const allinputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([allinputData, ...items]);
      setInputData("");
    }
  };
  const deleteItem = (data) => {
    const updateList = items.filter((value) => {
      return data !== value.id;
    });
    setItems(updateList);
  };
  const editItem = (id) => {
    const findData = items.find((value) => {
      return id === value.id;
    });

    setInputData(findData.name);
    setToggleSubmit(false);
    setIsEditItem(id);
  };

  return (
    <div className="App">
      <div className="container mt-3 ">
        <div className="row">
          <div class="form-floating col-8 ">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Input Data.."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <label>Input Data</label>
          </div>
          <div className=" col-4 ">
            {toggleSubmit ? (
              <button className=" btn mt-3 btn-success " onClick={addItem}>
                Add
              </button>
            ) : (
              <button className=" btn btn-info mt-3 " onClick={addItem}>
                Update
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="col-10 m-5">
        <table className="table table-striped table-light">
          <thead>
            <tr>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.name}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => editItem(value.id)}
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteItem(value.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
