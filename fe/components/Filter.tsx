"use client";

import { useState } from "react";

export default function UserFilter() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState("");

  const handleClick = () => {
    setResult(keyword);
  };

  const handleClear = () => {
    setKeyword("");
    setResult("");
  };

  return (
    <>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button onClick={handleClick}>
        Hiển thị
      </button>

      <button onClick={handleClear}>
        Clear
      </button>

      <p>Test KQ: {result}</p>
    </>
  );
}