import React from 'react';
import PropTypes from 'prop-types';

import { SelectedTag, InputContainer, ErrorInput } from './style';

const InputTag = ({ setTag, tagErr }) => {
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
        <ErrorInput>
          <p style={{ opacity: `${tagErr ? '1' : '0'}` }}>Tag obrigatoria</p>
        </ErrorInput>
      </InputContainer>
    </>
  );
};

InputTag.propTypes = {
  setTag: PropTypes.func.isRequired,
  tagErr: PropTypes.bool.isRequired,
};
export default InputTag;
