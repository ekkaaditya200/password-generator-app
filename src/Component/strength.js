import React from "react";

const PasswordStrengthIndicator = ({ password = "" }) => {
  const getPasswordStrength = () => {

    const passwordLength = password.length;
    if(passwordLength  <=8) {
      return "Very Weak";
    } else if (passwordLength <=10) {
      return "Poor";
    } else if (passwordLength >10 && passwordLength <=16) {
      return "Medium";
    } else if (passwordLength >16 && passwordLength <=20) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = getPasswordStrength();

  if (!passwordStrength) return <React.Fragment />;

  return (
    <div className="password-strength">
      Strength: <span style={{ fontWeight: "bold" }}>{passwordStrength}</span>
    </div>
  );
};

export default PasswordStrengthIndicator;