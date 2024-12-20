import { Text } from "@chakra-ui/react";

const FormInputPassword = ({
  value,
  onChange,
  placeholder,
  id,
  type,
  error,
  ...rest
}) => {
  return (
    <div style={{ width: "100%" }} id={id} className="form-group">
      <input
        style={{
          width: "100%",
          borderColor: error ? "#F04438" : "gray",
          border: "1px solid",
          ...rest,
        }}
        type="password"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
      />
      {error && (
        <Text fontSize="10px" color="#F04438">
          {error}
        </Text>
      )}
    </div>
  );
};

export default FormInputPassword;
