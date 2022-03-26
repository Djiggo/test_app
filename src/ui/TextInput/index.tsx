import React, {useState} from "react";
import styles from './styles.module.scss';


type Props = {
  type?: "text" | "password",
  theme?: "dark" | "light",
  value?: string,
  onChange?: (value: string) => void
}
export const TextInput: React.FC<Props> = ({value, onChange, type = "text", theme = "dark"}) => {

  const [inputType, setInputType] = useState(type);

  const toggleInputType = () => {

    if (type !== "password") {
      return;
    }
    setInputType(inputType === "password" ? "text" : "password");
  }

  const inputThemeClass = theme === 'light' ? styles.input_light : "";

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return <div className={styles.wrapper}>

    <input
        type={inputType} className={`${styles.input} ${inputThemeClass}`}
        value={value}
        onChange={inputChangeHandler}
    />

    {type === 'password' && <div className={styles.show_btn} onClick={toggleInputType}>
      {inputType === "password" ? "show" : "hide"}
    </div>}

  </div>;

}