const SwitchPlan = () => {
  return (
    <div className="flex justify-center items-center py-4 border-2 rounded-lg">
      <div className="flex items-center gap-4">
        <p>Monthly</p>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <p>Yearly</p>
      </div>
    </div>
  );
};

export default SwitchPlan;
