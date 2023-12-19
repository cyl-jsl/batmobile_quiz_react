import React from "react";

const Table = (props) => {
    // console.log(props)
  return (
    <div className="table container p-0 m-0">
      <div className="display-page">目前第1頁，顯示第1-20筆(共1300筆)</div>
      <ul className="table-title row">
        <li className="col-1">縣市</li>
        <li className="col-2">區域</li>
        <li className="col-7">站點名稱</li>
        <li className="col-1">可借車輛</li>
        <li className="col-1">可停空位</li>
      </ul>
      <ul className="table-content row">
        {/* <li className="col-1">{county}</li>
        <li className="col-2">{sarea}</li>
        <li className="col-7">{sna}</li>
        <li className="col-1 count">{bemp}</li>
        <li className="col-1 count">{sbi}</li> */}
      </ul>
    </div>
  );
};

export default Table;
