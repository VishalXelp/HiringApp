import Select from "react-select";

//dummy data , ignore that .
export const options = [
  { value: "QA Analyst", label: "QA Analyst" },
  { value: "Full Time", label: "Full Time" },
  { value: "Part Time", label: "Part Time" },
];

export const MyComponent = () => <Select options={options} />;
