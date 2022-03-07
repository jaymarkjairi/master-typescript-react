import React, {useState} from 'react';
import {IProps} from './List';

interface AProps {
  people: IProps['people'];
  setPeople: React.Dispatch<React.SetStateAction<IProps['people']>>;
}

const AddToList: React.FC<AProps> = ({people, setPeople}): JSX.Element => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    url: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({...input, [e.target.name]: e.target.value});
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url || !input.note) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);

    setInput({
      name: '',
      age: '',
      note: '',
      url: '',
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />

      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />

      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
        name="url"
      />

      <textarea
        placeholder="Notes"
        value={input.note}
        name="note"
        onChange={handleChange}
      />

      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
