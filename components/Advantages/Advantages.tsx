import styles from "./Advantages.module.css";
import { AdvantagesProps } from "./Advantages.props";
import { CheckIcon } from "../../public/Icons";

export const Advantages = ({ advantages }: AdvantagesProps) => {
  return (
    <div>
      {advantages.map((advantage) => (
        <div key={advantage._id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{advantage.title}</div>
          {
            advantage.description && (
              <>
                <hr className={styles.vline}/>
                <div>{advantage.description}</div>
              </>
            )
          }
        </div>
      ))}
    </div>
  );
};
