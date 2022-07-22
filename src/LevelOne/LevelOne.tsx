const LevelOne = () => {
  return (
    <div>
      <h2>LevelOne</h2>
      <p>Bewildered tiaras in Fairy God Mothers daily ran an Aladdin.</p>
      <p>A tiny Ginger Bread Man soon ran the beanstalk.</p>
      <label htmlFor="input1">Your Princess Name</label>
      <input id="input1" />
      <input id="input2" placeholder="FaIRy TaleS" />
      <input id="input3" defaultValue="The Brothers Grimm" />
      <label htmlFor="knights">Choose a Knight:</label>
      <select name="knights" id="knights">
        <option value="white">White</option>
        <option value="round-table">Of The Round Table</option>
      </select>
      <button>Click Me!</button>
      <button disabled>Can't touch this!</button>
    </div>
  );
};

export default LevelOne;
