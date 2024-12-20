import {FormControl, FormLabel, Input, Select, Text} from '@chakra-ui/react';

const FormSelect = ({
  label,
  labelStyle,
  value,
  onChange,
  placeholder,
  id,
  type,
  error,
  options,
  ...rest
}) => {
  return (
    <FormControl id={id}>
      <FormLabel {...labelStyle}>{label}</FormLabel>
      <Select
        border="1px solid"
        borderColor={error ? '#F04438' : 'gray'}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      >
        {options.map(option => (
          <option>{option}</option>
        ))}
      </Select>
      {error && (
        <Text fontSize="10px" color="#F04438">
          {error}
        </Text>
      )}
    </FormControl>
  );
};

export default FormSelect;
