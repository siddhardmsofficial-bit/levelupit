// Fixed select.tsx issues related to scrolling and clicking

import React from 'react';
import Select from 'react-select';

const customStyles = {
    control: (provided) => ({
        ...provided,
        minHeight: '40px',
        borderColor: 'lightgrey',
    }),
    menu: (provided) => ({
        ...provided,
        zIndex: 999,
    }),
};

const SelectComponent = ({ options, onChange }) => {
    return (
        <Select
            styles={customStyles}
            options={options}
            onChange={onChange}
            isSearchable
        />
    );
};

export default SelectComponent;