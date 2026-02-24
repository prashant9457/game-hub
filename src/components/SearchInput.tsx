import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value);
    }}>
        {/* @ts-ignore */}
        <InputGroup startElement={<BsSearch />}>
          <Input ref={ref} borderRadius="full" placeholder="Search games..." />
        </InputGroup>
    </form>
  );
};

export default SearchInput;