import { KeyboardEvent, useState } from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import { SearchIcon } from "../../public/Icons";

export const Search = ({ className, ...rest}: SearchProps) => {
  const [search, setSearch] = useState<string>();
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...rest}>
      <Input placeholder="Поиск..."
             value={search}
             onChange={(e) => setSearch(e.target.value)}
             className={styles.input}
             onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
