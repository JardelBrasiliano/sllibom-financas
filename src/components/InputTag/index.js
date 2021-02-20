import React from 'react';
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

  const searchTag = (value) => {
    const indexTag = tags.indexOf(value.target.value);
    if (value.target.value === '') {
      setTag('all');
    } else {
      setTag(tags[indexTag]);
    }
  };
  return (
    <>
      <InputContainer>
        <input type="text" list="listaTag" onChange={(tag) => searchTag(tag)} />
        <datalist id="listaTag">
          {tags.map((tag, key) => (
            <option key={key} value={tag}>
              _________________
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
