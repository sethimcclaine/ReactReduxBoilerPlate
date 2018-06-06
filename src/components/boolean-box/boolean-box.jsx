import React from 'react';
import PropTypes from 'prop-types';
import {
    Checkbox,
    FormGroup,
} from 'react-bootstrap';

export const BooleanBox = (props) => {
    return (
        <FormGroup>
            <Checkbox
                checked={ props.checked ? 'checked' : null }
                onChange={ props.onChange }
            >
                { props.name }
            </Checkbox>
        </FormGroup>
    );
};

BooleanBox.propTypes = {
    name: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
};
