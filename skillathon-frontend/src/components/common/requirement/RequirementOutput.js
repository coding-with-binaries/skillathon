const RequirementOutput = ({ text, requirement }) => {
  return (
    <div>
      <p className="requirement-output-title">Output</p>
      <div className="requirement-output">{text}</div>
    </div>
  );
};

export default RequirementOutput;
