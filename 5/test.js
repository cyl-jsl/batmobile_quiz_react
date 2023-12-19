import React, { useState, useEffect } from "react";
import axios from "axios";
import counties from "../fakedata";
import frame from "../images/Frame.png";
import Table from "../components/Table";

const StationList = () => {
  const url = `https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json`;
  const [data, setData] = useState([]);
  const [uniqueSareas, setUniqueSareas] = useState([]);
  const [selectedCounties, setSelectedCounties] = useState("");
  const [checkAll, setCheckAll] = useState(true);
  const [checkedAreas, setCheckedAreas] = useState([]);
  const countyDistricts = {
    臺北市: uniqueSareas,
    新北市: [], // 新北市的區域選項，你可以在這裡填入相應的資料
    桃園市: [],
    新竹縣: [],
    新竹市: [],
    新竹科學園區: [],
    苗栗縣: [],
    臺中市: [],
    嘉義市: [],
    臺南市: [],
    高雄市: [],
    屏東市: [],
  };
  const handleCityChange = (e) => {
    setSelectedCounties(e.target.value);
  };
  const handleCheckAllToggle = () => {
    setCheckAll(!checkAll);
    setCheckedAreas(checkAll ? [] : [...countyDistricts[selectedCounties]]);
  };
  const handleCheckBoxChange = (area) => {
    if (checkAll) {
      setCheckAll(false);
    }
    setCheckedAreas((prev) => {
      if (prev.includes(area)) {
        return prev.filter((checked) => checked !== area);
      } else {
        return [...prev, area];
      }
    });
  };

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, [url]);

  useEffect(() => {
    setUniqueSareas([...new Set(data.map((item) => item.sarea))]);
  }, [data]);

  useEffect(() => {
    if (selectedCounties && countyDistricts[selectedCounties]) {
      setCheckedAreas(checkAll ? [...countyDistricts[selectedCounties]] : []);
    }
  }, [selectedCounties]);
  // console.log(data);
  // console.log(uniqueSareas);
  // console.log(selectedCounties)
  console.log(checkedAreas);
  return (
    <div className="station-list container p-0">
      <h4 className="title">站點資訊</h4>
      <div className="d-flex align-items-center">
        <div className="select me-5">
          <select
            name="county"
            onChange={handleCityChange}
            value={selectedCounties}
          >
            <option value="">選擇縣市</option>
            {counties.map((county) => {
              const { id, name, value } = county;
              return (
                <option key={id} value={value}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="search">
          <input placeholder="搜尋站點" type="text" />
        </div>
      </div>
      {selectedCounties && countyDistricts[selectedCounties] && (
        <div>
          <div className="mt-3">
            <label htmlFor="">
              <input
                className="me-2"
                checked={checkAll}
                onChange={handleCheckAllToggle}
                type="checkbox"
              />
              全部勾選
            </label>
          </div>
          <div className="d-flex">
            <div className="d-flex flex-wrap align-items-center pe-5">
              {countyDistricts[selectedCounties].map((area) => (
                <div key={area} className="me-5">
                  <label htmlFor={area} className="text-nowrap">
                    <input
                      className="me-2"
                      type="checkbox"
                      value={area}
                      id={area}
                      checked={checkAll || checkedAreas.includes(area)}
                      onChange={() => handleCheckBoxChange(area)}
                    />
                    {area}
                  </label>
                </div>
              ))}
            </div>
            <div className="mx-5">
              <img className="" src={frame} alt="" />
            </div>
          </div>
        </div>
      )}
      <Table />
    </div>
  );
};

export default StationList;
