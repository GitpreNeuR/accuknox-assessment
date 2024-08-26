import React from "react";

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value, fill } = payload[0];
    return (
      <div className="bg-white p-2 border rounded shadow">
        <p style={{ color: fill }}>{`${name} (${value})`}</p>
      </div>
    );
  }

  return null;
};
