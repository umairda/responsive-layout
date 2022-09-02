import React, { useState } from 'react'
import styles from './Input.module.css'

function Input({ placeholder }: { placeholder?: string }) {

    const [value, setValue] = useState('')

    return (
        <input
            className={styles.input}
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={placeholder}
        />
    )
}

export default Input