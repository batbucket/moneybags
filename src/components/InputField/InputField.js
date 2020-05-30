import { Input } from 'antd'

import React, { useState } from 'react'
import styles from './InputField.module.scss'

function InputField(props) {
    return (
        <Input
            className={`${styles.customInput} ${
                props.readOnly ? styles.readOnly : null
            }`}
            placeholder={props.placeholder}
            prefix={props.prefix}
            suffix={props.suffix}
            value={props.value}
            readOnly={props.readOnly}
            type={'number'}
            onChange={(e) => props.onChange(e.target.value)}
        />
    )
}

export default InputField
