//@TODO throwing a controlled component error

import React from 'react';
import PropTypes from 'prop-types';
import {
    FormGroup,
    Radio,
} from 'react-bootstrap';
import {
    map,
} from 'ramda';

export const RadioGroup = (props) => {
    return (
        <FormGroup>
            { map((option) => (
                <Radio
                    name={ props.field }
                    key={ option.value }
                    value={ option.value }
                    checked={ props.selected === option.value ? 'checked' : null}
                    onChange={ props.onChange }
                    inline
                >
                    {option.name}
                </Radio>
            ), props.options) }
        </FormGroup>
    );
};

RadioGroup.propTypes = {
    field: PropTypes.string,
    options: PropTypes.array,
    selected: PropTypes.string,
    onChange: PropTypes.func,
};
