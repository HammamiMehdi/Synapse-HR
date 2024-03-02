import React from "react";
import "./spinner.css";
import {RainbowSpinner} from "react-spinners-kit";
import { useState } from "react";

const Spinner = () => {
    const [loading, setLoading] = useState(true)
  return (
    <div className="spinner">
      <RainbowSpinner size={70} color="#ffce00" loading={loading} />
    </div>
  );
};

export default Spinner;
