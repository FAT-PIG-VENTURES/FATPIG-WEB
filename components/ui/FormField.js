import { forwardRef } from 'react';
import styles from './FormField.module.css';

const FormField = forwardRef(({ 
  label, 
  id, 
  type = 'text', 
  options = [], 
  className = '', 
  ...props 
}, ref) => {
  return (
    <div className={`${styles.fieldContainer} ${className}`}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      
      {type === 'textarea' ? (
        <textarea
          id={id}
          ref={ref}
          className={styles.textarea}
          {...props}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          ref={ref}
          className={styles.select}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          ref={ref}
          className={styles.input}
          {...props}
        />
      )}
    </div>
  );
});

FormField.displayName = 'FormField';

export default FormField;
