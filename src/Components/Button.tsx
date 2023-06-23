import styles from "../Styles/Button.module.css";

interface Props {
  variant?: string;
  children: string;
}

const Button = ({ variant, children }: Props) => {
  return (
    <button className={[styles["btn"], styles["btn-" + variant]].join(" ")}>
      {children}
    </button>
  );
};

export default Button;
