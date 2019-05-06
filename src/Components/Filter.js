import React from "react";

const Filter = () => {
  return (
    <>
      <h2>Filter</h2>
      <form>
        <div class="form-group">
          <label for="Lernsektor">Nach Lernsektor:</label>
          <select class="form-control" id="Lernsektor">
            <option value="bewegungsaparat">bewegungsaparat</option>
            <option value="innere Organe">innere Organe</option>
            <option value="histologie">histologie</option>
            <option value="genetik">genetik</option>
            <option value="neurologie">neurologie</option>
            <option value="nephrologie">nephrologie</option>
          </select>
        </div>
        <div class="form-group">
          <label for="Schwierigkeitslevel">Nach Schwierigkeitslevel:</label>
          <select class="form-control" id="Schwierigkeitslevel">
          <option value="leicht">leicht</option>
          <option value="mittel">mittel</option>
          <option value="schwer">schwer</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Filter;
