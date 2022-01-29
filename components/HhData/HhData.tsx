import styles from "./HhData.module.css";
import { HhDataProps } from "./HhData.props";
import { Card } from "../Card/Card";
import { RateIcon } from "../../public/Icons";
import { digitSeparator } from "../../helpers/helpers";

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps) => {
  const data = [
    {
      title: 'Начальный',
      salary: juniorSalary,
      rate: 0,
    },
    {
      title: 'Средний',
      salary: middleSalary,
      rate: 1,
    },
    {
      title: 'Профессионал',
      salary: seniorSalary,
      rate: 2,
    },
  ];

  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div  className={styles.countValue}>{digitSeparator(count)}</div>
      </Card>
      <Card className={styles.salary}>
        {
          data.map((item, index) => (
            <div key={index}>
              <div className={styles.title}>{item.title}</div>
              <div  className={styles.salaryValue}>{digitSeparator(item.salary)} ₽</div>
              <div  className={styles.rate}>
                {
                  new Array(3).fill('').map((el, i) => (
                    <RateIcon key={i} className={ item.rate >= i ? styles.filled : ''} />
                  ))
                }
              </div>
            </div>
          ))
        }
      </Card>
    </div>
  );
};
