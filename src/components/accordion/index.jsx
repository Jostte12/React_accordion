import data from './data';
import './style.css';
import { useState } from 'react';

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multiSelection, setMultiSelection] = useState([]);
  const [enableMulti, setEnableMulti] = useState(false);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId == selected ? null: getCurrentId);
  }
  
  function handleMutiSelection(getCurrentId) {
    let list_selection = [...multiSelection];
    const findIndexOfSelection = list_selection.indexOf(getCurrentId)

    if(findIndexOfSelection === -1) list_selection.push(getCurrentId)
    else list_selection.splice(getCurrentId, 1)

    setMultiSelection(list_selection);
  }

  return (
    <div className="wrapper">
      <button
        onClick={() => setEnableMulti(!enableMulti)}
      >
        Enable multisection
      </button>
      <div className="accordion">
        {data.map((dataItem, index) => (
          <div className="item" key={index}>
            <div 
              className="title"
              onClick={
                enableMulti
                ? () => handleMutiSelection(dataItem.id)
                : () => handleSingleSelection(dataItem.id)
              }
            >
              <h2>{dataItem.question}</h2>
              <span>+</span>
            </div>
            <div>
              {
                selected === dataItem.id || enableMulti
                ? <div className="content">{dataItem.answer}</div>
                : null
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
