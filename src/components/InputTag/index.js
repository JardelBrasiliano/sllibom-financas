import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { SelectedTag, InputContainer } from './style';

const InputTag = ({ setTag }) => {
  const tags = [
    'Alimentação',
    'Educação',
    'Lazer',
    'Moradia',
    'Pagamento',
    'Roupa',
    'Saúde',
    'Transporte',
  ];

  useEffect(() => {
    setTag(tags[0]);
  }, []);

  return (
    <>
      <InputContainer>
        <input
          type="text"
          list="listaTag"
          onChange={(tag) => setTag(tags[+tag.target.id])}
        />
        <datalist id="listaTag">
          {tags.map((tag, key) => (
            <option key={key} id="key">
              {tag}
            </option>
          ))}
        </datalist>

        <SelectedTag />
      </InputContainer>
    </>
  );
};

InputTag.propTypes = {
  setTag: PropTypes.func.isRequired,
};
export default InputTag;
